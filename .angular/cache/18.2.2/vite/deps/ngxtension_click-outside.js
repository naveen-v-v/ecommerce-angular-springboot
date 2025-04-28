import {
  DOCUMENT
} from "./chunk-X3E7OF3P.js";
import {
  DestroyRef,
  Directive,
  ENVIRONMENT_INITIALIZER,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Injector,
  NgZone,
  Output,
  assertInInjectionContext,
  inject,
  runInInjectionContext,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-KX4LG3VE.js";
import {
  ReplaySubject,
  Subject,
  filter,
  fromEvent,
  takeUntil
} from "./chunk-SZFLBOQ6.js";
import {
  __objRest
} from "./chunk-WDMUDEB6.js";

// ../../node_modules/ngxtension/fesm2022/ngxtension-assert-injector.mjs
function assertInjector(fn, injector, runner) {
  !injector && assertInInjectionContext(fn);
  const assertedInjector = injector ?? inject(Injector);
  if (!runner) return assertedInjector;
  return runInInjectionContext(assertedInjector, runner);
}

// ../../node_modules/ngxtension/fesm2022/ngxtension-create-injection-token.mjs
function createInjectFn(token) {
  return function(_a = {}) {
    var _b = _a, {
      injector
    } = _b, injectOptions = __objRest(_b, [
      "injector"
    ]);
    injector = assertInjector(this, injector);
    return runInInjectionContext(injector, () => inject(token, injectOptions));
  };
}
function createProvideFn(token, factory, opts = {}) {
  const {
    deps = [],
    multi = false,
    extraProviders = [],
    isFunctionValue: isFunctionValueFromOpts = false
  } = opts;
  return (value, isFunctionValue = isFunctionValueFromOpts) => {
    let provider;
    if (typeof value !== "undefined") {
      const factory2 = typeof value === "function" ? isFunctionValue ? () => value : value : () => value;
      provider = {
        provide: token,
        useFactory: factory2,
        multi
      };
    } else {
      provider = {
        provide: token,
        useFactory: factory,
        deps,
        multi
      };
    }
    return [extraProviders, provider];
  };
}
function createInjectionToken(factory, options) {
  const tokenName = factory.name || factory.toString();
  const opts = options ?? {
    isRoot: true
  };
  opts.isRoot ??= true;
  if (opts.multi) {
    opts.isRoot = false;
  }
  if (opts.isRoot) {
    if (opts.token) {
      throw new Error(`createInjectionToken is creating a root InjectionToken but an external token is passed in.
`);
    }
    const token2 = new InjectionToken(`Token for ${tokenName}`, {
      factory: () => {
        if (opts.deps && Array.isArray(opts.deps)) {
          return factory(...opts.deps.map((dep) => {
            dep = Array.isArray(dep) ? dep.at(-1) : dep;
            return inject(dep);
          }));
        }
        return factory();
      }
    });
    const injectFn = createInjectFn(token2);
    return [injectFn, createProvideFn(token2, factory, opts), token2, () => ({
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => injectFn(),
      multi: true
    })];
  }
  const token = opts.token || new InjectionToken(`Token for ${tokenName}`);
  return [createInjectFn(token), createProvideFn(token, factory, opts), token, () => []];
}

// ../../node_modules/ngxtension/fesm2022/ngxtension-inject-destroy.mjs
var injectDestroy = (injector) => {
  injector = assertInjector(injectDestroy, injector);
  return runInInjectionContext(injector, () => {
    const destroyRef = inject(DestroyRef);
    const subject$ = new ReplaySubject(1);
    destroyRef.onDestroy(() => {
      subject$.next();
      subject$.complete();
    });
    Object.assign(subject$, {
      onDestroy: destroyRef.onDestroy.bind(destroyRef)
    });
    return subject$;
  });
};

// ../../node_modules/ngxtension/fesm2022/ngxtension-click-outside.mjs
var [injectDocumentClick] = createInjectionToken(() => {
  const click$ = new Subject();
  const [ngZone, document] = [inject(NgZone), inject(DOCUMENT)];
  ngZone.runOutsideAngular(() => {
    fromEvent(document, "click").subscribe(click$);
  });
  return click$;
});
var _ClickOutside = class _ClickOutside {
  constructor() {
    this.ngZone = inject(NgZone);
    this.elementRef = inject(ElementRef);
    this.documentClick$ = injectDocumentClick();
    this.destroy$ = injectDestroy();
    this.clickOutside = new EventEmitter();
  }
  ngOnInit() {
    this.documentClick$.pipe(takeUntil(this.destroy$), filter((event) => !this.elementRef.nativeElement.contains(event.target))).subscribe((event) => {
      this.ngZone.run(() => this.clickOutside.emit(event));
    });
  }
};
_ClickOutside.ɵfac = function ClickOutside_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClickOutside)();
};
_ClickOutside.ɵdir = ɵɵdefineDirective({
  type: _ClickOutside,
  selectors: [["", "clickOutside", ""]],
  outputs: {
    clickOutside: "clickOutside"
  },
  standalone: true
});
var ClickOutside = _ClickOutside;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClickOutside, [{
    type: Directive,
    args: [{
      selector: "[clickOutside]",
      standalone: true
    }]
  }], null, {
    clickOutside: [{
      type: Output
    }]
  });
})();
export {
  ClickOutside
};
//# sourceMappingURL=ngxtension_click-outside.js.map
