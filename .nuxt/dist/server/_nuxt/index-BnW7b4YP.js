import { mergeProps, useSSRContext, ref, resolveComponent, withCtx, openBlock, createBlock, createVNode, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./userLayouts-XkZylZ_g.js";
import { S as Search } from "./Search-CVdpZGFx.js";
import { _ as _export_sfc } from "../server.mjs";
import "./Menu-DpGNone8.js";
import "hookable";
import "klona";
import "defu";
import "destr";
import "#internal/nuxt/paths";
import "./auth-kGddGqUV.js";
import "pinia";
import "vue-router";
import "@heroicons/vue/24/solid";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "ufo";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/vue-fontawesome";
const _sfc_main$2 = {
  __name: "foodCategories",
  __ssrInlineRender: true,
  setup(__props) {
    const foodCategorires = [
      { src: "/foodCategory/food1.png", name: "เบอร์เกอร์" },
      { src: "/foodCategory/food2.png", name: "สลัดผัก" },
      { src: "/foodCategory/food3.png", name: "อาหารญี่ปุ่น" },
      { src: "/foodCategory/food4.png", name: "ก๋วยเตี๋ยว" },
      { src: "/foodCategory/food5.png", name: "พิซซ่า" },
      { src: "/foodCategory/food6.png", name: "ส้มตำ" },
      { src: "/foodCategory/food7.png", name: "ยำ" },
      { src: "/foodCategory/food8.png", name: "ไก่ทอด" },
      { src: "/foodCategory/food9.png", name: "ติ่มซำ" },
      { src: "/foodCategory/food10.png", name: "ปิ้งย่าง" },
      { src: "/foodCategory/food11.png", name: "สเต็ก" },
      { src: "/foodCategory/food12.png", name: "ตามสั่ง" },
      { src: "/foodCategory/food13.png", name: "ชาบู-สุกี้" },
      { src: "/foodCategory/food14.png", name: "อาหารรทะเล" },
      { src: "/foodCategory/food15.png", name: "ข้าวแกง" },
      { src: "/foodCategory/food16.png", name: "สปาเก็ตตี้" },
      { src: "/foodCategory/food17.png", name: "เค้ก" },
      { src: "/foodCategory/food18.png", name: "ขนมไทย" },
      { src: "/foodCategory/food19.png", name: "เบเกอรี่" },
      { src: "/foodCategory/food20.png", name: "โดนัท" },
      { src: "/foodCategory/food21.png", name: "ไอศกรีม" },
      { src: "/foodCategory/food22.png", name: "น้ำผลไม้" },
      { src: "/foodCategory/food23.png", name: "ชา-ชานม" },
      { src: "/foodCategory/food24.png", name: "กาแฟ" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5" }, _attrs))} data-v-4692a7c7><div data-v-4692a7c7><h2 class="text-xl mt-5 font-bold" data-v-4692a7c7>หมวดหมู่ยอดนิยม</h2></div><div class="mt-5 overflow-x-auto whitespace-nowrap" data-v-4692a7c7><div class="grid grid-rows-2 gap-2 grid-flow-col auto-cols-max" data-v-4692a7c7><!--[-->`);
      ssrRenderList(foodCategorires, (food) => {
        _push(`<div class="sm:w-[95px] sm:h-[105px] w-[81px] h-[91px] bg-white shadow-md rounded-xl flex items-center justify-center mt-2 mb-2" data-v-4692a7c7><div class="flex flex-col" data-v-4692a7c7><div class="flex justify-center" data-v-4692a7c7><img${ssrRenderAttr("src", food.src)}${ssrRenderAttr("alt", food.name)} class="w-[34px] h-[34px]" data-v-4692a7c7></div><div class="flex justify-center mt-2" data-v-4692a7c7><h2 class="text-[14px]" data-v-4692a7c7>${ssrInterpolate(food.name)}</h2></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/foodCategories.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const foodCategories = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4692a7c7"]]);
const _sfc_main$1 = {
  __name: "StoresNear",
  __ssrInlineRender: true,
  setup(__props) {
    const activeSection = ref("open");
    const shopnear = [
      { src: "/user/shops/near/shop1.png", name: "ครัวกะเพรา", rate: 4.9, distance: 320, shopcost: 10 },
      { src: "/user/shops/near/shop2.jpeg", name: "ร้านเบอร์เกอร์", rate: 4.9, distance: 500, shopcost: 20 },
      { src: "/user/shops/near/shop3.png", name: "ร้านสเต็กจุใจ", rate: 4.9, distance: 600, shopcost: 25 },
      { src: "/user/shops/near/shop4.png", name: "ครัวคุณแม่", rate: 4.9, distance: 610, shopcost: 25 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5" }, _attrs))}><div><h2 class="text-xl mt-5 font-bold">ร้านค้าใกล้คุณ</h2></div><div class="flex mt-7"><div class="flex-1 flex flex-col cursor-pointer"><div class="flex justify-center"><h2 class="${ssrRenderClass({
        "text-[#FF6347]": activeSection.value === "open",
        "": activeSection.value !== "open"
      })}">เปิดอยู่</h2></div><div class="${ssrRenderClass({
        "border-[2px] border-[#FF6347] mt-1": activeSection.value === "open",
        "border-[1px] mt-1": activeSection.value !== "open"
      })}"></div></div><div class="flex-1 flex flex-col cursor-pointer"><div class="flex justify-center"><h2 class="${ssrRenderClass({
        "": activeSection.value === "open",
        "text-[#FF6347]": activeSection.value !== "open"
      })}">โปรโมชั่น</h2></div><div class="${ssrRenderClass({
        "border-[1px] mt-1 ": activeSection.value === "open",
        "border-[2px] border-[#FF6347] mt-1": activeSection.value !== "open"
      })}"></div></div></div>`);
      if (activeSection.value === "open") {
        _push(`<div class="mt-3"><!--[-->`);
        ssrRenderList(shopnear, (shop) => {
          _push(`<div><div class="w-full sm:h-[140px] h-[70px] mt-2 flex"><div><img${ssrRenderAttr("src", shop.src)}${ssrRenderAttr("alt", shop.name)} class="sm:w-[134px] sm:h-[134px] w-[60px] h-[60px] object-cover rounded-md"></div><div class="flex w-full item"><div class="mx-4 flex flex-col"><div><h2 class="text-base sm:text-xl">${ssrInterpolate(shop.name)}</h2></div><div class="flex sm:mt-2"><svg class="mt-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33943 3.15497C6.07831 1.82949 6.44774 1.16675 7.00008 1.16675C7.55242 1.16675 7.92186 1.82949 8.66074 3.15497L8.85189 3.49788C9.06186 3.87454 9.16684 4.06287 9.33053 4.18714C9.49422 4.3114 9.69808 4.35752 10.1058 4.44978L10.477 4.53376C11.9118 4.85841 12.6292 5.02073 12.7999 5.56959C12.9706 6.11846 12.4815 6.69037 11.5034 7.8342L11.2503 8.13013C10.9723 8.45517 10.8334 8.61769 10.7708 8.81875C10.7083 9.01981 10.7293 9.23665 10.7713 9.67032L10.8096 10.0651C10.9575 11.5913 11.0314 12.3543 10.5846 12.6935C10.1377 13.0328 9.46602 12.7235 8.12261 12.1049L7.77505 11.9449C7.39329 11.7691 7.20241 11.6812 7.00008 11.6812C6.79775 11.6812 6.60687 11.7691 6.22512 11.9449L5.87756 12.1049C4.53414 12.7235 3.86243 13.0328 3.41558 12.6935C2.96874 12.3543 3.04268 11.5913 3.19056 10.0651L3.22882 9.67032C3.27085 9.23665 3.29186 9.01981 3.22933 8.81875C3.16681 8.61769 3.02783 8.45517 2.74987 8.13013L2.4968 7.8342C1.51864 6.69037 1.02956 6.11846 1.20024 5.56959C1.37092 5.02073 2.08833 4.85841 3.52314 4.53376L3.89435 4.44978C4.30208 4.35752 4.50594 4.3114 4.66963 4.18714C4.83332 4.06287 4.9383 3.87454 5.14827 3.49788L5.33943 3.15497Z" fill="#FFC700"></path></svg><h2 class="mx-1 text-[#8D92A3] text-base sm:text-xl">${ssrInterpolate(shop.rate)} | </h2><h2 class="text-[#8D92A3] text-base sm:text-xl">${ssrInterpolate(shop.distance)} m</h2></div></div><div class="flex-1 flex item w-full justify-center sm:justify-end sm:mx-10"><div class="sm:w-[100px] sm:h-8 w-[66px] h-6 rounded-2xl bg-red-200 flex justify-center items-center mt-3"><svg class="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="13.3333" y="10.8333" width="5" height="5" rx="2.5" stroke="#FF826C" stroke-width="1.5"></rect><path d="M9.16675 13.3333V12.0833C9.16675 10.512 9.16675 9.72631 8.67859 9.23816C8.19044 8.75 7.40476 8.75 5.83341 8.75H5.33341C5.02388 8.75 4.86911 8.75 4.73855 8.76028C3.10396 8.88892 1.80567 10.1872 1.67702 11.8218C1.66675 11.9524 1.66675 12.1071 1.66675 12.4167C1.66675 12.4941 1.66675 12.5327 1.66932 12.5654C1.70148 12.974 2.02605 13.2986 2.4347 13.3308C2.46734 13.3333 2.50603 13.3333 2.58341 13.3333H9.16675ZM9.16675 13.3333H13.3334" stroke="#FF826C" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.91675 13.3333C7.91675 14.714 6.79746 15.8333 5.41675 15.8333C4.03604 15.8333 2.91675 14.714 2.91675 13.3333" stroke="#FF826C" stroke-width="1.5" stroke-linecap="round"></path><path d="M10 4.16675H10.4399C11.4422 4.16675 11.9434 4.16675 12.3462 4.41566C12.7489 4.66458 12.973 5.11284 13.4213 6.00937L15.8333 10.8334" stroke="#FF826C" stroke-width="1.5" stroke-linecap="round"></path><path d="M15.1188 9.16667L15.6869 8.74816C15.906 8.58679 16.0155 8.5061 16.0916 8.40092C16.1435 8.32933 16.1836 8.24995 16.2105 8.16575C16.25 8.04205 16.25 7.90601 16.25 7.63394C16.25 7.1194 16.25 6.86213 16.1403 6.67004C16.0664 6.54073 15.9593 6.43357 15.83 6.35971C15.6379 6.25 15.3806 6.25 14.8661 6.25H13.75" stroke="#FF826C" stroke-width="1.5" stroke-linecap="round"></path><circle cx="15.8333" cy="13.3333" r="2.5" stroke="#FF826C" stroke-width="1.5"></circle></svg><h2 class="mx-1 text-[#6D6C69] text-base sm:text-xl">฿${ssrInterpolate(shop.shopcost)}</h2></div></div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeSection.value === "promotion") {
        _push(`<div class="mt-3"><div class="text-center"><h2>โปรโมชั่นจะมาเร็วๆ นี้</h2></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/StoresNear.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[--><div class="p-4 flex font-prompt mx-auto max-w-7xl mt-6" data-v-d444633b>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/",
        class: "flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d444633b${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z" fill="#0D1217" data-v-d444633b${_scopeId}></path></svg>`);
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
      _push(`<div class="flex-1 mt-2" data-v-d444633b><h2 class="text-3xl mx-16 font-bold" data-v-d444633b>สั่งอาหาร</h2></div></div>`);
      _push(ssrRenderComponent(_sfc_main$3, { class: "font-prompt" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="" data-v-d444633b${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Search), null, null, _parent2, _scopeId));
            _push2(`</div><div data-v-d444633b${_scopeId}>`);
            _push2(ssrRenderComponent(unref(foodCategories), null, null, _parent2, _scopeId));
            _push2(`</div><div data-v-d444633b${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode(unref(Search))
              ]),
              createVNode("div", null, [
                createVNode(unref(foodCategories))
              ]),
              createVNode("div", null, [
                createVNode(unref(_sfc_main$1))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orderfood/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d444633b"]]);
export {
  index as default
};
//# sourceMappingURL=index-BnW7b4YP.js.map
