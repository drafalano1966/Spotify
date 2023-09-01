(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'Essenty-utils-internal-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('Essenty-utils-internal-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Essenty-parcelable-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Essenty-parcelable-js-legacy'.");
    }if (typeof this['Essenty-utils-internal-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-parcelable-js-legacy'. Its dependency 'Essenty-utils-internal-js-legacy' was not found. Please, check whether 'Essenty-utils-internal-js-legacy' is loaded prior to 'Essenty-parcelable-js-legacy'.");
    }root['Essenty-parcelable-js-legacy'] = factory(typeof this['Essenty-parcelable-js-legacy'] === 'undefined' ? {} : this['Essenty-parcelable-js-legacy'], kotlin, this['Essenty-utils-internal-js-legacy']);
  }
}(this, function (_, Kotlin, $module$Essenty_utils_internal_js_legacy) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var throwCCE = Kotlin.throwCCE;
  var ensureNeverFrozen = $module$Essenty_utils_internal_js_legacy.com.arkivanov.essenty.utils.internal.ensureNeverFrozen_irb06o$;
  function ParcelableContainer() {
  }
  ParcelableContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ParcelableContainer',
    interfaces: [Parcelable]
  };
  function consumeRequired($receiver, clazz) {
    var value = $receiver.consume_728rax$(clazz);
    var requireNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalArgumentException_init(message.toString());
    } else {
      requireNotNull$result = value;
    }
    return requireNotNull$result;
  }
  var consume = defineInlineFunction('Essenty-parcelable-js-legacy.com.arkivanov.essenty.parcelable.consume_38nv5i$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver) {
      return $receiver.consume_728rax$(getKClass(T_0));
    };
  }));
  var consumeRequired_0 = defineInlineFunction('Essenty-parcelable-js-legacy.com.arkivanov.essenty.parcelable.consumeRequired_38nv5i$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var consumeRequired = _.com.arkivanov.essenty.parcelable.consumeRequired_a9mkii$;
    return function (T_0, isT, $receiver) {
      return consumeRequired($receiver, getKClass(T_0));
    };
  }));
  function Parcelable() {
  }
  Parcelable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Parcelable',
    interfaces: []
  };
  function ParcelableContainer_0(value) {
    if (value === void 0)
      value = null;
    var $receiver = new SimpleParcelableContainer();
    if (value != null) {
      $receiver.set_vffduc$(value);
    }return $receiver;
  }
  function Parcelize() {
  }
  Parcelize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Parcelize',
    interfaces: [Annotation]
  };
  function SimpleParcelableContainer() {
    ensureNeverFrozen(this);
    this.value_0 = null;
  }
  SimpleParcelableContainer.prototype.consume_728rax$ = function (clazz) {
    var tmp$;
    var $receiver = (tmp$ = this.value_0) == null || Kotlin.isType(tmp$, Parcelable) ? tmp$ : throwCCE();
    this.value_0 = null;
    return $receiver;
  };
  SimpleParcelableContainer.prototype.set_vffduc$ = function (value) {
    this.value_0 = value;
  };
  SimpleParcelableContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleParcelableContainer',
    interfaces: [ParcelableContainer]
  };
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$essenty = package$arkivanov.essenty || (package$arkivanov.essenty = {});
  var package$parcelable = package$essenty.parcelable || (package$essenty.parcelable = {});
  package$parcelable.ParcelableContainer = ParcelableContainer;
  package$parcelable.consumeRequired_a9mkii$ = consumeRequired;
  package$parcelable.Parcelable = Parcelable;
  package$parcelable.parcelableContainer = ParcelableContainer_0;
  package$parcelable.Parcelize = Parcelize;
  package$parcelable.SimpleParcelableContainer = SimpleParcelableContainer;
  Kotlin.defineModule('Essenty-parcelable-js-legacy', _);
  return _;
}));

//# sourceMappingURL=Essenty-parcelable-js-legacy.js.map
