import { d as defineEventHandler, r as readBody } from '../../../../nitro/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const prisma = new PrismaClient();
const _id_ = defineEventHandler(async (event) => {
  const { id } = event.context.params;
  if (event.req.method === "GET") {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: Number(id)
        }
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message || "Error fetching user data"
      };
    } finally {
      await prisma.$disconnect();
    }
  }
  if (event.req.method === "PUT") {
    try {
      const body = await readBody(event);
      const updatedUser = await prisma.user.update({
        where: {
          id: Number(id)
        },
        data: body
      });
      return updatedUser;
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message || "Error updating user data"
      };
    } finally {
      await prisma.$disconnect();
    }
  }
  return {
    statusCode: 405,
    message: "Method Not Allowed"
  };
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
