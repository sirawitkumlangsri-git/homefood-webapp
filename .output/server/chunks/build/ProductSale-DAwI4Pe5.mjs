import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "ProductSale",
  __ssrInlineRender: true,
  setup(__props) {
    const products = [
      { src: "/products/product1.png", name: "\u0E41\u0E1B\u0E49\u0E07\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E23\u0E39\u0E1B", price: 30, reduce: 60 },
      { src: "/products/product2.png", name: "\u0E2A\u0E25\u0E31\u0E14\u0E1C\u0E31\u0E01-\u0E1C\u0E25\u0E44\u0E21\u0E48\u0E49\u0E23\u0E27\u0E21", price: 50, reduce: 40 },
      { src: "/products/product3.png", name: "\u0E19\u0E21\u0E16\u0E31\u0E48\u0E27\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E07", price: 25, reduce: 35 },
      { src: "/products/product4.png", name: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E23\u0E35\u0E48", price: 50, reduce: 30 },
      { src: "/products/product5.png", name: "\u0E21\u0E30\u0E40\u0E02\u0E37\u0E2D\u0E40\u0E17\u0E28", price: 30, reduce: 20 },
      { src: "/products/product6.png", name: "\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E1B\u0E25\u0E32", price: 65, reduce: 15 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid sm:grid-cols-5 grid-cols-2 gap-4 p-4 mt-1 font-prompt" }, _attrs))} data-v-36969a0f><!--[-->`);
      ssrRenderList(products, (product) => {
        _push(`<div class="sm:w-[220px] sm:h-[270px] w-[160px] h-[210px] bg-white rounded-lg shadow-lg overflow-hidden relative" data-v-36969a0f><div class="w-full h-full overflow-hidden rounded-lg p-2" data-v-36969a0f><div class="flex mx-2" data-v-36969a0f><div class="mt-1" data-v-36969a0f><svg class="sm:w-[32px] sm:h-[32px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-36969a0f><path fill-rule="evenodd" clip-rule="evenodd" d="M6.39493 2.13368C6.23258 2.27203 6.1514 2.34121 6.06471 2.39932C5.86597 2.53252 5.64278 2.62497 5.40806 2.67131C5.30567 2.69153 5.19935 2.70001 4.98672 2.71698C4.45246 2.75961 4.18533 2.78093 3.96247 2.85965C3.447 3.04172 3.04155 3.44717 2.85948 3.96263C2.78077 4.1855 2.75945 4.45263 2.71682 4.98688C2.69985 5.19952 2.69136 5.30584 2.67115 5.40823C2.62481 5.64294 2.53236 5.86613 2.39916 6.06487C2.34105 6.15157 2.27187 6.23274 2.13351 6.3951C1.78589 6.80302 1.61207 7.00698 1.51014 7.22023C1.2744 7.71346 1.2744 8.28686 1.51014 8.78009C1.61207 8.99334 1.78588 9.1973 2.13351 9.60523C2.27185 9.76756 2.34105 9.84876 2.39916 9.93545C2.53236 10.1342 2.62481 10.3574 2.67115 10.5921C2.69136 10.6945 2.69985 10.8008 2.71682 11.0134C2.75945 11.5477 2.78077 11.8148 2.85948 12.0377C3.04155 12.5532 3.447 12.9586 3.96247 13.1407C4.18533 13.2194 4.45246 13.2407 4.98672 13.2833C5.19935 13.3003 5.30567 13.3088 5.40807 13.329C5.64278 13.3754 5.86597 13.4678 6.06471 13.601C6.1514 13.6591 6.23258 13.7283 6.39493 13.8666C6.80286 14.2143 7.00682 14.3881 7.22007 14.49C7.7133 14.7258 8.2867 14.7258 8.77993 14.49C8.99318 14.3881 9.19714 14.2143 9.60506 13.8666C9.76742 13.7283 9.84859 13.6591 9.93529 13.601C10.134 13.4678 10.3572 13.3754 10.5919 13.329C10.6943 13.3088 10.8006 13.3003 11.0133 13.2833C11.5475 13.2407 11.8147 13.2194 12.0375 13.1407C12.553 12.9586 12.9584 12.5532 13.1405 12.0377C13.2192 11.8148 13.2405 11.5477 13.2832 11.0134C13.3001 10.8008 13.3086 10.6945 13.3288 10.5921C13.3752 10.3574 13.4676 10.1342 13.6008 9.93546C13.6589 9.84876 13.7281 9.76758 13.8665 9.60523C14.2141 9.1973 14.3879 8.99334 14.4899 8.78009C14.7256 8.28686 14.7256 7.71346 14.4899 7.22023C14.3879 7.00698 14.2141 6.80302 13.8665 6.3951C13.7281 6.23274 13.6589 6.15157 13.6008 6.06487C13.4676 5.86613 13.3752 5.64294 13.3288 5.40823C13.3086 5.30584 13.3001 5.19952 13.2832 4.98688C13.2405 4.45263 13.2192 4.1855 13.1405 3.96263C12.9584 3.44717 12.553 3.04172 12.0375 2.85965C11.8147 2.78093 11.5475 2.75961 11.0133 2.71698C10.8006 2.70001 10.6943 2.69153 10.5919 2.67131C10.3572 2.62497 10.134 2.53252 9.93529 2.39932C9.84859 2.34121 9.76742 2.27203 9.60506 2.13368C9.19714 1.78605 8.99318 1.61223 8.77993 1.51031C8.2867 1.27456 7.7133 1.27456 7.22007 1.51031C7.00682 1.61223 6.80285 1.78605 6.39493 2.13368ZM10.5539 5.44656C10.7658 5.65844 10.7658 6.00198 10.5539 6.21387L6.21335 10.5545C6.00147 10.7663 5.65793 10.7663 5.44604 10.5545C5.23415 10.3426 5.23415 9.99903 5.44604 9.78714L9.78663 5.44656C9.99851 5.23467 10.3421 5.23467 10.5539 5.44656ZM10.532 9.80908C10.532 10.2086 10.2081 10.5325 9.80857 10.5325C9.40903 10.5325 9.08514 10.2086 9.08514 9.80908C9.08514 9.40954 9.40903 9.08565 9.80857 9.08565C10.2081 9.08565 10.532 9.40954 10.532 9.80908ZM6.19141 6.91536C6.59095 6.91536 6.91484 6.59147 6.91484 6.19193C6.91484 5.79239 6.59095 5.4685 6.19141 5.4685C5.79187 5.4685 5.46798 5.79239 5.46798 6.19193C5.46798 6.59147 5.79187 6.91536 6.19141 6.91536Z" fill="#FF6347" data-v-36969a0f></path></svg></div><div class="mt-1" data-v-36969a0f><h2 class="text-[#FF6347] sm:mt-1 sm:text-base text-[12px] mx-1" data-v-36969a0f>\u0E25\u0E14 ${ssrInterpolate(product.reduce)}%</h2></div></div><div class="flex justify-center" data-v-36969a0f>`);
        if (product.src == "/products/product3.png") {
          _push(`<img${ssrRenderAttr("src", product.src)} alt="product.name" class="sm:w-[100px] sm:h-[140px] w-[80px] h-[110px] object-cover" data-v-36969a0f>`);
        } else {
          _push(`<img${ssrRenderAttr("src", product.src)} alt="product.name" class="sm:w-[100px] sm:h-[140px] w-[80px] h-[110px] object-cover" data-v-36969a0f>`);
        }
        _push(`</div><div class="mt-2" data-v-36969a0f><div data-v-36969a0f><h2 class="mx-2 sm:text-base text-[14px] font-light" data-v-36969a0f>${ssrInterpolate(product.name)}</h2></div><div class="flex sm:mt-3 mt-2 justify-between" data-v-36969a0f><div class="mx-2" data-v-36969a0f><h2 class="font-bold sm:text-lg text-[#FF6347]" data-v-36969a0f>\u0E3F ${ssrInterpolate(product.price)}.00</h2></div><div class="mx-2 w-[24px] h-[24px] cursor-pointer hover:-translate-y-1 transition-all duration-300 group" data-v-36969a0f><svg class="sm:w-[30px] sm:h-[30px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-36969a0f><path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10.75 7C10.75 6.58579 10.4142 6.25 10 6.25C9.58579 6.25 9.25 6.58579 9.25 7L9.25 9.25002H7C6.58579 9.25002 6.25 9.58581 6.25 10C6.25 10.4142 6.58579 10.75 7 10.75H9.25V13C9.25 13.4142 9.58578 13.75 10 13.75C10.4142 13.75 10.75 13.4142 10.75 13L10.75 10.75H13C13.4142 10.75 13.75 10.4142 13.75 10C13.75 9.58581 13.4142 9.25002 13 9.25002H10.75V7Z" fill="#E85A41" data-v-36969a0f></path></svg></div></div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/ProductSale.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductSale = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-36969a0f"]]);

export { ProductSale as P };
//# sourceMappingURL=ProductSale-DAwI4Pe5.mjs.map