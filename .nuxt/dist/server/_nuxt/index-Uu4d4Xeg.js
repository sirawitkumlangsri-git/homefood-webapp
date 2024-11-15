import { useSSRContext, ref, resolveComponent, withCtx, openBlock, createBlock, createVNode, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { S as Search } from "./Search-CVdpZGFx.js";
import { P as ProductSale } from "./ProductSale-DAwI4Pe5.js";
import { _ as _export_sfc } from "../server.mjs";
import "@heroicons/vue/24/solid";
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
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7C2 4.51472 4.01472 2.5 6.5 2.5C8.98528 2.5 11 4.51472 11 7V10C11 10.3487 11 10.5231 10.9617 10.6662C10.8576 11.0544 10.5544 11.3576 10.1662 11.4617C10.0231 11.5 9.84874 11.5 9.5 11.5H6.5C4.01472 11.5 2 9.48528 2 7Z" fill="url(#paint0_linear_378_602)"></path><path d="M13 15C13 14.6513 13 14.4769 13.0383 14.3338C13.1424 13.9456 13.4456 13.6424 13.8338 13.5383C13.9769 13.5 14.1513 13.5 14.5 13.5H17.5C19.9853 13.5 22 15.5147 22 18C22 20.4853 19.9853 22.5 17.5 22.5C15.0147 22.5 13 20.4853 13 18V15Z" fill="url(#paint1_linear_378_602)"></path><path d="M2 18C2 15.5147 4.01472 13.5 6.5 13.5H9.2C9.83006 13.5 10.1451 13.5 10.3857 13.6226C10.5974 13.7305 10.7695 13.9026 10.8774 14.1143C11 14.3549 11 14.6699 11 15.3V18C11 20.4853 8.98528 22.5 6.5 22.5C4.01472 22.5 2 20.4853 2 18Z" fill="url(#paint2_linear_378_602)"></path><path d="M13 7C13 4.51472 15.0147 2.5 17.5 2.5C19.9853 2.5 22 4.51472 22 7C22 9.48528 19.9853 11.5 17.5 11.5H14.2857C14.1365 11.5 14.0618 11.5 13.999 11.4929C13.4775 11.4342 13.0658 11.0225 13.0071 10.501C13 10.4382 13 10.3635 13 10.2143V7Z" fill="url(#paint3_linear_378_602)"></path><defs><linearGradient id="paint0_linear_378_602" x1="2" y1="23" x2="22" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6347"></stop><stop offset="1" stop-color="#FF9684"></stop></linearGradient><linearGradient id="paint1_linear_378_602" x1="2" y1="23" x2="22" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6347"></stop><stop offset="1" stop-color="#FF9684"></stop></linearGradient><linearGradient id="paint2_linear_378_602" x1="2" y1="23" x2="22" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6347"></stop><stop offset="1" stop-color="#FF9684"></stop></linearGradient><linearGradient id="paint3_linear_378_602" x1="2" y1="23" x2="22" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6347"></stop><stop offset="1" stop-color="#FF9684"></stop></linearGradient></defs></svg></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/icons/iconSaleInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const iconSaleInput = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    const selectedItem = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[--><div class="p-4 flex font-prompt mx-auto max-w-7xl mt-6" data-v-0c9bb4bd>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/",
        class: "flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0c9bb4bd${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z" fill="#0D1217" data-v-0c9bb4bd${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "26",
                height: "26",
                viewBox: "0 0 26 26",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z",
                  fill: "#0D1217"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-1 mt-3" data-v-0c9bb4bd><h2 class="text-xl mx-16 font-bold" data-v-0c9bb4bd>สินค้าลดราคา</h2></div></div><div data-v-0c9bb4bd>`);
      _push(ssrRenderComponent(unref(Search), null, null, _parent));
      _push(`</div><div class="relative font-prompt" data-v-0c9bb4bd><button class="select select-bordered h-14 w-full flex items-center justify-between p-4" data-v-0c9bb4bd><div class="flex items-center gap-5" data-v-0c9bb4bd>`);
      _push(ssrRenderComponent(iconSaleInput, null, null, _parent));
      _push(`<div data-v-0c9bb4bd>`);
      if (!unref(selectedItem)) {
        _push(`<span data-v-0c9bb4bd>เลือกประเภทสินค้า</span>`);
      } else {
        _push(`<span data-v-0c9bb4bd>${ssrInterpolate(unref(selectedItem))}</span>`);
      }
      _push(`</div></div></button>`);
      if (unref(isOpen) === true) {
        _push(`<div class="top-full left-0 right-0 bg-white shadow-md mt-2 rounded-md" data-v-0c9bb4bd><ul class="p-2" data-v-0c9bb4bd><li class="p-2 hover:bg-gray-200" data-v-0c9bb4bd>A</li><li class="p-2 hover:bg-gray-200" data-v-0c9bb4bd>B</li><li class="p-2 hover:bg-gray-200" data-v-0c9bb4bd>C</li><li class="p-2 hover:bg-gray-200" data-v-0c9bb4bd>D</li><li class="p-2 hover:bg-gray-200" data-v-0c9bb4bd>E</li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(ProductSale, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/productsale/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0c9bb4bd"]]);
export {
  index as default
};
//# sourceMappingURL=index-Uu4d4Xeg.js.map
