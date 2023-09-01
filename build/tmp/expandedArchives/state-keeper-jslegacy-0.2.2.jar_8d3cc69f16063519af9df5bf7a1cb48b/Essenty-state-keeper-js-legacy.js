(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'Essenty-parcelable-js-legacy', 'Essenty-utils-internal-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('Essenty-parcelable-js-legacy'), require('Essenty-utils-internal-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Essenty-state-keeper-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Essenty-state-keeper-js-legacy'.");
    }if (typeof this['Essenty-parcelable-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-state-keeper-js-legacy'. Its dependency 'Essenty-parcelable-js-legacy' was not found. Please, check whether 'Essenty-parcelable-js-legacy' is loaded prior to 'Essenty-state-keeper-js-legacy'.");
    }if (typeof this['Essenty-utils-internal-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-state-keeper-js-legacy'. Its dependency 'Essenty-utils-internal-js-legacy' was not found. Please, check whether 'Essenty-utils-internal-js-legacy' is loaded prior to 'Essenty-state-keeper-js-legacy'.");
    }root['Essenty-state-keeper-js-legacy'] = factory(typeof this['Essenty-state-keeper-js-legacy'] === 'undefined' ? {} : this['Essenty-state-keeper-js-legacy'], kotlin, this['Essenty-parcelable-js-legacy'], this['Essenty-utils-internal-js-legacy']);
  }
}(this, function (_, Kotlin, $module$Essenty_parcelable_js_legacy, $module$Essenty_utils_internal_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Parcelable = $module$Essenty_parcelable_js_legacy.com.arkivanov.essenty.parcelable.Parcelable;
  var ensureNeverFrozen = $module$Essenty_utils_internal_js_legacy.com.arkivanov.essenty.utils.internal.ensureNeverFrozen_irb06o$;
  var getKClass = Kotlin.getKClass;
  var ParcelableContainer = $module$Essenty_parcelable_js_legacy.com.arkivanov.essenty.parcelable.parcelableContainer;
  var Map = Kotlin.kotlin.collections.Map;
  var throwCCE = Kotlin.throwCCE;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  function DefaultStateKeeperDispatcher(savedState, parcelableContainerFactory) {
    this.parcelableContainerFactory_0 = parcelableContainerFactory;
    ensureNeverFrozen(this);
    var tmp$;
    this.savedState_0 = (tmp$ = savedState != null ? savedState.consume_728rax$(getKClass(DefaultStateKeeperDispatcher$SavedState)) : null) != null ? tmp$.map : null;
    this.suppliers_0 = HashMap_init();
  }
  DefaultStateKeeperDispatcher.prototype.save = function () {
    var tmp$ = this.parcelableContainerFactory_0;
    var $receiver = this.suppliers_0;
    var destination = HashMap_init();
    var tmp$_0;
    tmp$_0 = $receiver.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var tmp$_1 = destination.put_xwzc9p$;
      var tmp$_2 = element.key;
      var supplier = element.value;
      tmp$_1.call(destination, tmp$_2, this.parcelableContainerFactory_0(supplier()));
    }
    return tmp$.call(this, new DefaultStateKeeperDispatcher$SavedState(destination));
  };
  DefaultStateKeeperDispatcher.prototype.consume_1u9s49$ = function (key, clazz) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.savedState_0) != null ? tmp$.remove_11rb$(key) : null) != null ? tmp$_0.consume_728rax$(clazz) : null;
  };
  DefaultStateKeeperDispatcher.prototype.register_w4n6vf$ = function (key, supplier) {
    var $receiver = this.suppliers_0;
    var tmp$;
    if (!!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this.suppliers_0.put_xwzc9p$(key, supplier);
  };
  DefaultStateKeeperDispatcher.prototype.unregister_61zpoe$ = function (key) {
    var $receiver = this.suppliers_0;
    var tmp$;
    if (!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this.suppliers_0.remove_11rb$(key);
  };
  function DefaultStateKeeperDispatcher$SavedState(map) {
    this.map = map;
  }
  DefaultStateKeeperDispatcher$SavedState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SavedState',
    interfaces: [Parcelable]
  };
  DefaultStateKeeperDispatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultStateKeeperDispatcher',
    interfaces: [StateKeeperDispatcher]
  };
  function DefaultStateKeeperDispatcher_init(savedState, $this) {
    $this = $this || Object.create(DefaultStateKeeperDispatcher.prototype);
    DefaultStateKeeperDispatcher.call($this, savedState, DefaultStateKeeperDispatcher_init$lambda);
    return $this;
  }
  function DefaultStateKeeperDispatcher_init$lambda(it) {
    return ParcelableContainer(it);
  }
  function StateKeeper() {
  }
  StateKeeper.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StateKeeper',
    interfaces: []
  };
  function StateKeeperDispatcher() {
  }
  StateKeeperDispatcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StateKeeperDispatcher',
    interfaces: [StateKeeper]
  };
  function StateKeeperDispatcher_0(savedState) {
    if (savedState === void 0)
      savedState = null;
    return DefaultStateKeeperDispatcher_init(savedState);
  }
  var consume = defineInlineFunction('Essenty-state-keeper-js-legacy.com.arkivanov.essenty.statekeeper.consume_x0vw8x$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, key) {
      return $receiver.consume_1u9s49$(key, getKClass(T_0));
    };
  }));
  function StateKeeperOwner() {
  }
  StateKeeperOwner.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StateKeeperOwner',
    interfaces: []
  };
  $$importsForInline$$['Essenty-parcelable-js-legacy'] = $module$Essenty_parcelable_js_legacy;
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$essenty = package$arkivanov.essenty || (package$arkivanov.essenty = {});
  var package$statekeeper = package$essenty.statekeeper || (package$essenty.statekeeper = {});
  package$statekeeper.DefaultStateKeeperDispatcher_init_8jz5ip$ = DefaultStateKeeperDispatcher_init;
  package$statekeeper.DefaultStateKeeperDispatcher = DefaultStateKeeperDispatcher;
  package$statekeeper.StateKeeper = StateKeeper;
  package$statekeeper.StateKeeperDispatcher = StateKeeperDispatcher;
  package$statekeeper.stateKeeperDispatcher = StateKeeperDispatcher_0;
  package$statekeeper.StateKeeperOwner = StateKeeperOwner;
  Kotlin.defineModule('Essenty-state-keeper-js-legacy', _);
  return _;
}));

//# sourceMappingURL=Essenty-state-keeper-js-legacy.js.map
