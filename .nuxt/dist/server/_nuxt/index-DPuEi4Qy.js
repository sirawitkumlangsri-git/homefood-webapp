import { ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import { u as useRouter } from "../server.mjs";
import "klona";
import "defu";
import "destr";
import "#internal/nuxt/paths";
import { u as useAuthStore } from "./auth-kGddGqUV.js";
import "ofetch";
import "unctx";
import "h3";
import "pinia";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/vue-fontawesome";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const phoneNumber = ref("");
    useRouter();
    const loginError = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><form><div><label for="phoneNumber">Phone Number</label><input class="input input-bordered"${ssrRenderAttr("value", unref(phoneNumber))} type="text" id="phoneNumber" required>`);
      if (unref(loginError)) {
        _push(`<p class="text-red-500 mt-1">${ssrInterpolate(unref(loginError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit">Login</button></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DPuEi4Qy.js.map
