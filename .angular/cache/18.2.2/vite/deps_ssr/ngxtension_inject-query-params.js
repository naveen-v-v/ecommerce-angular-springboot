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

// ../../node_modules/ngxtension/fesm2022/ngxtension-inject-query-params.mjs
var import_rxjs = __toESM(require_cjs(), 1);
function injectQueryParams(keyOrParamsTransform, options = {}) {
  assertInInjectionContext(injectQueryParams);
  const route = inject(ActivatedRoute);
  const queryParams = route.snapshot.queryParams || {};
  const {
    transform,
    initialValue
  } = options;
  if (!keyOrParamsTransform) {
    return toSignal(route.queryParams, {
      initialValue: queryParams
    });
  }
  if (typeof keyOrParamsTransform === "function") {
    return toSignal(route.queryParams.pipe((0, import_rxjs.map)(keyOrParamsTransform)), {
      initialValue: keyOrParamsTransform(queryParams)
    });
  }
  const getParam = (params) => {
    const param = params?.[keyOrParamsTransform];
    if (!param) {
      return initialValue ?? null;
    }
    if (Array.isArray(param)) {
      if (param.length < 1) {
        return initialValue ?? null;
      }
      return transform ? transform(param[0]) : param[0];
    }
    return transform ? transform(param) : param;
  };
  return toSignal(route.queryParams.pipe((0, import_rxjs.map)(getParam)), {
    initialValue: getParam(queryParams)
  });
}
(function(injectQueryParams2) {
  function array(key, options = {}) {
    assertInInjectionContext(injectQueryParams2.array);
    const route = inject(ActivatedRoute);
    const queryParams = route.snapshot.queryParams || {};
    const {
      transform,
      initialValue
    } = options;
    const transformParam = (param) => {
      if (!param) {
        return initialValue ?? null;
      }
      if (Array.isArray(param)) {
        if (param.length < 1) {
          return initialValue ?? null;
        }
        return transform ? param.map((it) => transform(it)) : param;
      }
      return [transform ? transform(param) : param];
    };
    const getParam = (params) => {
      const param = params?.[key];
      return transformParam(param);
    };
    return toSignal(route.queryParams.pipe((0, import_rxjs.map)(getParam)), {
      initialValue: getParam(queryParams)
    });
  }
  injectQueryParams2.array = array;
})(injectQueryParams || (injectQueryParams = {}));
export {
  injectQueryParams
};
//# sourceMappingURL=ngxtension_inject-query-params.js.map
