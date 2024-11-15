import { resolveComponent, withCtx, openBlock, createBlock, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { S as Search } from './Search-CVdpZGFx.mjs';
import { R as RecommendedShops } from './RecommendedShops-CvWQAAO6.mjs';
import { _ as _sfc_main$1 } from './userLayoutsNoNav-Bo3nL37v.mjs';
import { _ as _export_sfc } from './server.mjs';
import '@heroicons/vue/24/solid';
import './Menu-DpGNone8.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/vue-fontawesome';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 flex font-prompt mx-auto max-w-7xl mt-6" data-v-f5792ee1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: "/",
              class: "flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f5792ee1${_scopeId2}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z" fill="#0D1217" data-v-f5792ee1${_scopeId2}></path></svg>`);
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
            }, _parent2, _scopeId));
            _push2(`<div class="flex-1 mt-3" data-v-f5792ee1${_scopeId}><h2 class="text-xl mx-16 font-bold" data-v-f5792ee1${_scopeId}>\u0E23\u0E27\u0E21\u0E23\u0E49\u0E32\u0E19\u0E41\u0E19\u0E30\u0E19\u0E33</h2></div></div>`);
            _push2(ssrRenderComponent(unref(Search), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(RecommendedShops, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "p-4 flex font-prompt mx-auto max-w-7xl mt-6" }, [
                createVNode(_component_RouterLink, {
                  to: "/",
                  class: "flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center"
                }, {
                  default: withCtx(() => [
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
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex-1 mt-3" }, [
                  createVNode("h2", { class: "text-xl mx-16 font-bold" }, "\u0E23\u0E27\u0E21\u0E23\u0E49\u0E32\u0E19\u0E41\u0E19\u0E30\u0E19\u0E33")
                ])
              ]),
              createVNode(unref(Search)),
              createVNode(RecommendedShops)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recommendedshops/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5792ee1"]]);

export { index as default };
//# sourceMappingURL=index-Ckhp6Ooy.mjs.map
