import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  toSignal
} from "./chunk-ANCXVQZ5.js";
import {
  ActivatedRoute
} from "./chunk-UOWK3HKW.js";
import "./chunk-ZWHSJOYW.js";
import "./chunk-ZYJEVPVL.js";
import "./chunk-W2OVKRTT.js";
import {
  assertInInjectionContext,
  inject
} from "./chunk-W7OK22Z3.js";
import {
  require_cjs
} from "./chunk-YYUEM3RU.js";
import {
  __toESM
} from "./chunk-NQ4HTGF6.js";

// ../../node_modules/ngxtension/fesm2022/ngxtension-inject-params.mjs
var import_rxjs = __toESM(require_cjs(), 1);
function injectParams(keyOrTransform) {
  assertInInjectionContext(injectParams);
  const route = inject(ActivatedRoute);
  const params = route.snapshot.params;
  if (typeof keyOrTransform === "function") {
    return toSignal(route.params.pipe((0, import_rxjs.map)(keyOrTransform)), {
      initialValue: keyOrTransform(params)
    });
  }
  const getParam = (params2) => keyOrTransform ? params2?.[keyOrTransform] ?? null : params2;
  return toSignal(route.params.pipe((0, import_rxjs.map)(getParam)), {
    initialValue: getParam(params)
  });
}
export {
  injectParams
};
//# sourceMappingURL=ngxtension_inject-params.js.map
