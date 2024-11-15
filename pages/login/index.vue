<template>
  <div>
    <form @submit.prevent="login">
      <div>
        <label for="phoneNumber">Phone Number</label>
        <input class="input input-bordered" v-model="phoneNumber" type="text" id="phoneNumber" required />
        <p v-if="loginError" class="text-red-500 mt-1">{{ loginError }}</p>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { useAuthStore } from '#build/imports';

const authStore = useAuthStore()
const phoneNumber = ref('')
const router = useRouter()

const loginError = ref('')

const login = async () => {
  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        phoneNumber: phoneNumber.value,
      },
    });
    authStore.login(response);
  } catch (error) {
    alert('เข้าสู่ระบบไม่สำเร็จ')
    console.error('Login failed', error);
    loginError.value = 'เบอร์โทรศัพท์ไม่ถูกต้อง';
  }
};
</script>

<style>

</style>