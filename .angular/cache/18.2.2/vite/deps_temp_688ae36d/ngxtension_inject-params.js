import {
  toSignal
} from "./chunk-7Z7IUP23.js";
import {
  ActivatedRoute
} from "./chunk-K7W3UN3E.js";
import "./chunk-Q3SR6UOA.js";
import "./chunk-GUN7VAH6.js";
import "./chunk-X3E7OF3P.js";
import {
  assertInInjectionContext,
  inject
} from "./chunk-KX4LG3VE.js";
import {
  map
} from "./chunk-SZFLBOQ6.js";
import "./chunk-WDMUDEB6.js";

// ../../node_modules/ngxtension/fesm2022/ngxtension-inject-params.mjs
function injectParams(keyOrTransform) {
  assertInInjectionContext(injectParams);
  const route = inject(ActivatedRoute);
  const params = route.snapshot.params;
  if (typeof keyOrTransform === "function") {
    return toSignal(route.params.pipe(map(keyOrTransform)), {
      initialValue: keyOrTransform(params)
    });
  }
  const getParam = (params2) => keyOrTransform ? params2?.[keyOrTransform] ?? null : params2;
  return toSignal(route.params.pipe(map(getParam)), {
    initialValue: getParam(params)
  });
}
export {
  injectParams
};
//# sourceMappingURL=ngxtension_inject-params.js.map
