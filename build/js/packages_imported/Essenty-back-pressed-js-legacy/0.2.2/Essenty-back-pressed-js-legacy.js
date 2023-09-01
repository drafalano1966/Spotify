(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'Essenty-utils-internal-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('Essenty-utils-internal-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Essenty-back-pressed-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Essenty-back-pressed-js-legacy'.");
    }if (typeof this['Essenty-utils-internal-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-back-pressed-js-legacy'. Its dependency 'Essenty-utils-internal-js-legacy' was not found. Please, check whether 'Essenty-utils-internal-js-legacy' is loaded prior to 'Essenty-back-pressed-js-legacy'.");
    }root['Essenty-back-pressed-js-legacy'] = factory(typeof this['Essenty-back-pressed-js-legacy'] === 'undefined' ? {} : this['Essenty-back-pressed-js-legacy'], kotlin, this['Essenty-utils-internal-js-legacy']);
  }
}(this, function (_, Kotlin, $module$Essenty_utils_internal_js_legacy) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var minus = Kotlin.kotlin.collections.minus_xfiyik$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var ensureNeverFrozen = $module$Essenty_utils_internal_js_legacy.com.arkivanov.essenty.utils.internal.ensureNeverFrozen_irb06o$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Collection = Kotlin.kotlin.collections.Collection;
  function BackPressedDispatcher() {
  }
  BackPressedDispatcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BackPressedDispatcher',
    interfaces: [BackPressedHandler]
  };
  function BackPressedDispatcher_0() {
    return new DefaultBackPressedDispatcher();
  }
  function BackPressedDispatcherOwner() {
  }
  BackPressedDispatcherOwner.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BackPressedDispatcherOwner',
    interfaces: []
  };
  function BackPressedHandler() {
  }
  BackPressedHandler.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BackPressedHandler',
    interfaces: []
  };
  function BackPressedHandlerOwner() {
  }
  BackPressedHandlerOwner.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BackPressedHandlerOwner',
    interfaces: []
  };
  function DefaultBackPressedDispatcher() {
    ensureNeverFrozen(this);
    this.handlers_0 = emptySet();
  }
  DefaultBackPressedDispatcher.prototype.register_u332lz$ = function (handler) {
    this.handlers_0 = plus(this.handlers_0, handler);
  };
  DefaultBackPressedDispatcher.prototype.unregister_u332lz$ = function (handler) {
    this.handlers_0 = minus(this.handlers_0, handler);
  };
  DefaultBackPressedDispatcher.prototype.onBackPressed = function () {
    var $receiver = reversed(this.handlers_0);
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element()) {
          any$result = true;
          break any$break;
        }}
      any$result = false;
    }
     while (false);
    return any$result;
  };
  DefaultBackPressedDispatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultBackPressedDispatcher',
    interfaces: [BackPressedDispatcher]
  };
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$essenty = package$arkivanov.essenty || (package$arkivanov.essenty = {});
  var package$backpressed = package$essenty.backpressed || (package$essenty.backpressed = {});
  package$backpressed.BackPressedDispatcher = BackPressedDispatcher;
  package$backpressed.backPressedDispatcher = BackPressedDispatcher_0;
  package$backpressed.BackPressedDispatcherOwner = BackPressedDispatcherOwner;
  package$backpressed.BackPressedHandler = BackPressedHandler;
  package$backpressed.BackPressedHandlerOwner = BackPressedHandlerOwner;
  package$backpressed.DefaultBackPressedDispatcher = DefaultBackPressedDispatcher;
  Kotlin.defineModule('Essenty-back-pressed-js-legacy', _);
  return _;
}));

//# sourceMappingURL=Essenty-back-pressed-js-legacy.js.map
