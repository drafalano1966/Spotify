(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-rx-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MVIKotlin-rx-js-legacy'.");
    }root['MVIKotlin-rx-js-legacy'] = factory(typeof this['MVIKotlin-rx-js-legacy'] === 'undefined' ? {} : this['MVIKotlin-rx-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Disposable() {
  }
  Disposable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Disposable',
    interfaces: []
  };
  function Observer() {
  }
  Observer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Observer',
    interfaces: []
  };
  function observer(onComplete, onNext) {
    if (onComplete === void 0)
      onComplete = null;
    if (onNext === void 0)
      onNext = null;
    return new ObserverImpl(onComplete, onNext);
  }
  function ObserverImpl(onComplete, onNext) {
    if (onComplete === void 0)
      onComplete = null;
    if (onNext === void 0)
      onNext = null;
    this.onComplete_0 = onComplete;
    this.onNext_0 = onNext;
  }
  ObserverImpl.prototype.onNext = function (value) {
    var tmp$;
    (tmp$ = this.onNext_0) != null ? tmp$(value) : null;
  };
  ObserverImpl.prototype.onComplete = function () {
    var tmp$;
    (tmp$ = this.onComplete_0) != null ? tmp$() : null;
  };
  ObserverImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObserverImpl',
    interfaces: [Observer]
  };
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$mvikotlin = package$arkivanov.mvikotlin || (package$arkivanov.mvikotlin = {});
  var package$rx = package$mvikotlin.rx || (package$mvikotlin.rx = {});
  package$rx.Disposable = Disposable;
  package$rx.Observer = Observer;
  package$rx.observer_jwhn2g$ = observer;
  Kotlin.defineModule('MVIKotlin-rx-js-legacy', _);
  return _;
}));

//# sourceMappingURL=MVIKotlin-rx-js-legacy.js.map
