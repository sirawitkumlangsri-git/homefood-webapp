import { ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { u as useRouter } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "pinia";
import "defu";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "destr";
import "klona";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/vue-fontawesome";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const phoneNumber = ref("");
    const email = ref("");
    const fullname = ref("");
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><form><div><label for="phoneNumber">Phone Number</label><input class="input"${ssrRenderAttr("value", unref(phoneNumber))} type="text" id="phoneNumber" required></div><div><label for="email">Email</label><input class="input"${ssrRenderAttr("value", unref(email))} type="email" id="email" required></div><div><label for="fullname">Full Name</label><input class="input"${ssrRenderAttr("value", unref(fullname))} type="text" id="fullname" required></div><button class="btn" type="submit">Register</button></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Ccattls7.js.map
