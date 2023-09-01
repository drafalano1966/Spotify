(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'Essenty-lifecycle-js-legacy', 'Essenty-state-keeper-js-legacy', 'Essenty-instance-keeper-js-legacy', 'Essenty-back-pressed-js-legacy', 'Essenty-parcelable-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('Essenty-lifecycle-js-legacy'), require('Essenty-state-keeper-js-legacy'), require('Essenty-instance-keeper-js-legacy'), require('Essenty-back-pressed-js-legacy'), require('Essenty-parcelable-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Decompose-decompose-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Decompose-decompose-js-legacy'.");
    }if (typeof this['Essenty-lifecycle-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-decompose-js-legacy'. Its dependency 'Essenty-lifecycle-js-legacy' was not found. Please, check whether 'Essenty-lifecycle-js-legacy' is loaded prior to 'Decompose-decompose-js-legacy'.");
    }if (typeof this['Essenty-state-keeper-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-decompose-js-legacy'. Its dependency 'Essenty-state-keeper-js-legacy' was not found. Please, check whether 'Essenty-state-keeper-js-legacy' is loaded prior to 'Decompose-decompose-js-legacy'.");
    }if (typeof this['Essenty-instance-keeper-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-decompose-js-legacy'. Its dependency 'Essenty-instance-keeper-js-legacy' was not found. Please, check whether 'Essenty-instance-keeper-js-legacy' is loaded prior to 'Decompose-decompose-js-legacy'.");
    }if (typeof this['Essenty-back-pressed-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-decompose-js-legacy'. Its dependency 'Essenty-back-pressed-js-legacy' was not found. Please, check whether 'Essenty-back-pressed-js-legacy' is loaded prior to 'Decompose-decompose-js-legacy'.");
    }if (typeof this['Essenty-parcelable-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-decompose-js-legacy'. Its dependency 'Essenty-parcelable-js-legacy' was not found. Please, check whether 'Essenty-parcelable-js-legacy' is loaded prior to 'Decompose-decompose-js-legacy'.");
    }root['Decompose-decompose-js-legacy'] = factory(typeof this['Decompose-decompose-js-legacy'] === 'undefined' ? {} : this['Decompose-decompose-js-legacy'], kotlin, this['Essenty-lifecycle-js-legacy'], this['Essenty-state-keeper-js-legacy'], this['Essenty-instance-keeper-js-legacy'], this['Essenty-back-pressed-js-legacy'], this['Essenty-parcelable-js-legacy']);
  }
}(this, function (_, Kotlin, $module$Essenty_lifecycle_js_legacy, $module$Essenty_state_keeper_js_legacy, $module$Essenty_instance_keeper_js_legacy, $module$Essenty_back_pressed_js_legacy, $module$Essenty_parcelable_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var LifecycleOwner = $module$Essenty_lifecycle_js_legacy.com.arkivanov.essenty.lifecycle.LifecycleOwner;
  var StateKeeperOwner = $module$Essenty_state_keeper_js_legacy.com.arkivanov.essenty.statekeeper.StateKeeperOwner;
  var InstanceKeeperOwner = $module$Essenty_instance_keeper_js_legacy.com.arkivanov.essenty.instancekeeper.InstanceKeeperOwner;
  var BackPressedHandlerOwner = $module$Essenty_back_pressed_js_legacy.com.arkivanov.essenty.backpressed.BackPressedHandlerOwner;
  var StateKeeperDispatcher = $module$Essenty_state_keeper_js_legacy.com.arkivanov.essenty.statekeeper.stateKeeperDispatcher;
  var InstanceKeeperDispatcher = $module$Essenty_instance_keeper_js_legacy.com.arkivanov.essenty.instancekeeper.instanceKeeperDispatcher;
  var BackPressedDispatcher = $module$Essenty_back_pressed_js_legacy.com.arkivanov.essenty.backpressed.backPressedDispatcher;
  var getCallableRef = Kotlin.getCallableRef;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var ArrayDeque_init = Kotlin.kotlin.collections.ArrayDeque_init_287e2$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var Unit = Kotlin.kotlin.Unit;
  var Lifecycle$Callbacks = $module$Essenty_lifecycle_js_legacy.com.arkivanov.essenty.lifecycle.Lifecycle.Callbacks;
  var InstanceKeeper$Instance = $module$Essenty_instance_keeper_js_legacy.com.arkivanov.essenty.instancekeeper.InstanceKeeper.Instance;
  var throwCCE = Kotlin.throwCCE;
  var Lifecycle$State = $module$Essenty_lifecycle_js_legacy.com.arkivanov.essenty.lifecycle.Lifecycle.State;
  var Lifecycle = $module$Essenty_lifecycle_js_legacy.com.arkivanov.essenty.lifecycle.Lifecycle;
  var LifecycleRegistry = $module$Essenty_lifecycle_js_legacy.com.arkivanov.essenty.lifecycle.lifecycleRegistry;
  var asReversed = Kotlin.kotlin.collections.asReversed_2p1efm$;
  var destroy = $module$Essenty_lifecycle_js_legacy.com.arkivanov.essenty.lifecycle.destroy_8jbdtl$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var dropLast = Kotlin.kotlin.collections.dropLast_yzln2o$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ParcelableContainer = $module$Essenty_parcelable_js_legacy.com.arkivanov.essenty.parcelable.parcelableContainer;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var resume = $module$Essenty_lifecycle_js_legacy.com.arkivanov.essenty.lifecycle.resume_8jbdtl$;
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var pause = $module$Essenty_lifecycle_js_legacy.com.arkivanov.essenty.lifecycle.pause_8jbdtl$;
  var stop = $module$Essenty_lifecycle_js_legacy.com.arkivanov.essenty.lifecycle.stop_8jbdtl$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var getKClass = Kotlin.getKClass;
  var consumeRequired = $module$Essenty_parcelable_js_legacy.com.arkivanov.essenty.parcelable.consumeRequired_a9mkii$;
  var Parcelable = $module$Essenty_parcelable_js_legacy.com.arkivanov.essenty.parcelable.Parcelable;
  var ParcelableContainer_0 = $module$Essenty_parcelable_js_legacy.com.arkivanov.essenty.parcelable.ParcelableContainer;
  var plus_0 = Kotlin.kotlin.collections.plus_xfiyik$;
  var minus = Kotlin.kotlin.collections.minus_xfiyik$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var subscribe = $module$Essenty_lifecycle_js_legacy.com.arkivanov.essenty.lifecycle.subscribe_a2ubdc$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var equals = Kotlin.equals;
  var JsMath = Math;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var hashCode = Kotlin.hashCode;
  var take = Kotlin.kotlin.collections.take_ba2ldo$;
  var plus_1 = Kotlin.kotlin.collections.plus_mydzjv$;
  var asReversed_0 = Kotlin.kotlin.collections.asReversed_vvxzk3$;
  Child$Created.prototype = Object.create(Child.prototype);
  Child$Created.prototype.constructor = Child$Created;
  Child$Destroyed.prototype = Object.create(Child.prototype);
  Child$Destroyed.prototype.constructor = Child$Destroyed;
  RouterEntry$Created.prototype = Object.create(RouterEntry.prototype);
  RouterEntry$Created.prototype.constructor = RouterEntry$Created;
  RouterEntry$Destroyed.prototype = Object.create(RouterEntry.prototype);
  RouterEntry$Destroyed.prototype.constructor = RouterEntry$Destroyed;
  MutableValue.prototype = Object.create(Value.prototype);
  MutableValue.prototype.constructor = MutableValue;
  MutableValueImpl.prototype = Object.create(MutableValue.prototype);
  MutableValueImpl.prototype.constructor = MutableValueImpl;
  ObserveLifecycleMode.prototype = Object.create(Enum.prototype);
  ObserveLifecycleMode.prototype.constructor = ObserveLifecycleMode;
  MappedValue.prototype = Object.create(Value.prototype);
  MappedValue.prototype.constructor = MappedValue;
  function InternalDecomposeApi() {
  }
  InternalDecomposeApi.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InternalDecomposeApi',
    interfaces: [Annotation]
  };
  function ExperimentalDecomposeApi() {
  }
  ExperimentalDecomposeApi.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExperimentalDecomposeApi',
    interfaces: [Annotation]
  };
  function Child() {
  }
  function Child$Created(configuration, instance) {
    Child.call(this);
    this.configuration_zdzmwp$_0 = configuration;
    this.instance = instance;
  }
  Object.defineProperty(Child$Created.prototype, 'configuration', {
    get: function () {
      return this.configuration_zdzmwp$_0;
    }
  });
  Child$Created.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Created',
    interfaces: [Child]
  };
  Child$Created.prototype.component1 = function () {
    return this.configuration;
  };
  Child$Created.prototype.component2 = function () {
    return this.instance;
  };
  Child$Created.prototype.copy_wuswzg$ = function (configuration, instance) {
    return new Child$Created(configuration === void 0 ? this.configuration : configuration, instance === void 0 ? this.instance : instance);
  };
  Child$Created.prototype.toString = function () {
    return 'Created(configuration=' + Kotlin.toString(this.configuration) + (', instance=' + Kotlin.toString(this.instance)) + ')';
  };
  Child$Created.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.configuration) | 0;
    result = result * 31 + Kotlin.hashCode(this.instance) | 0;
    return result;
  };
  Child$Created.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.configuration, other.configuration) && Kotlin.equals(this.instance, other.instance)))));
  };
  function Child$Destroyed(configuration) {
    Child.call(this);
    this.configuration_83uht4$_0 = configuration;
  }
  Object.defineProperty(Child$Destroyed.prototype, 'configuration', {
    get: function () {
      return this.configuration_83uht4$_0;
    }
  });
  Child$Destroyed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Destroyed',
    interfaces: [Child]
  };
  Child$Destroyed.prototype.component1 = function () {
    return this.configuration;
  };
  Child$Destroyed.prototype.copy_trkh7z$ = function (configuration) {
    return new Child$Destroyed(configuration === void 0 ? this.configuration : configuration);
  };
  Child$Destroyed.prototype.toString = function () {
    return 'Destroyed(configuration=' + Kotlin.toString(this.configuration) + ')';
  };
  Child$Destroyed.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.configuration) | 0;
    return result;
  };
  Child$Destroyed.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.configuration, other.configuration))));
  };
  Child.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Child',
    interfaces: []
  };
  function ComponentContext() {
  }
  ComponentContext.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ComponentContext',
    interfaces: [BackPressedHandlerOwner, InstanceKeeperOwner, StateKeeperOwner, LifecycleOwner]
  };
  function childContext($receiver, key, lifecycle) {
    if (lifecycle === void 0)
      lifecycle = null;
    return new DefaultComponentContext(lifecycle == null ? $receiver.lifecycle : MergedLifecycle_init($receiver.lifecycle, lifecycle), child_2($receiver.stateKeeper, key, lifecycle), child_1($receiver.instanceKeeper, key, lifecycle), child_0($receiver.backPressedHandler, lifecycle));
  }
  function child($receiver, key) {
    return childContext($receiver, key);
  }
  function DefaultComponentContext(lifecycle, stateKeeper, instanceKeeper, backPressedHandler) {
    if (stateKeeper === void 0)
      stateKeeper = null;
    if (instanceKeeper === void 0)
      instanceKeeper = null;
    if (backPressedHandler === void 0)
      backPressedHandler = null;
    this.lifecycle_uyk1oo$_0 = lifecycle;
    this.stateKeeper_knm0gh$_0 = stateKeeper != null ? stateKeeper : StateKeeperDispatcher();
    this.instanceKeeper_1w6345$_0 = instanceKeeper != null ? instanceKeeper : attachTo(InstanceKeeperDispatcher(), this.lifecycle);
    this.backPressedHandler_6lgwlv$_0 = backPressedHandler != null ? backPressedHandler : BackPressedDispatcher();
    this.backPressedDispatcher_xvit9s$_0 = lazy(DefaultComponentContext$backPressedDispatcher$lambda(this));
  }
  Object.defineProperty(DefaultComponentContext.prototype, 'lifecycle', {
    get: function () {
      return this.lifecycle_uyk1oo$_0;
    }
  });
  Object.defineProperty(DefaultComponentContext.prototype, 'stateKeeper', {
    configurable: true,
    get: function () {
      return this.stateKeeper_knm0gh$_0;
    }
  });
  Object.defineProperty(DefaultComponentContext.prototype, 'instanceKeeper', {
    configurable: true,
    get: function () {
      return this.instanceKeeper_1w6345$_0;
    }
  });
  Object.defineProperty(DefaultComponentContext.prototype, 'backPressedHandler', {
    configurable: true,
    get: function () {
      return this.backPressedHandler_6lgwlv$_0;
    }
  });
  Object.defineProperty(DefaultComponentContext.prototype, 'backPressedDispatcher', {
    configurable: true,
    get: function () {
      return this.backPressedDispatcher_xvit9s$_0.value;
    }
  });
  function DefaultComponentContext$backPressedDispatcher$lambda(this$DefaultComponentContext) {
    return function () {
      var $receiver = BackPressedDispatcher();
      this$DefaultComponentContext.backPressedHandler.register_u332lz$(getCallableRef('onBackPressed', function ($receiver) {
        return $receiver.onBackPressed();
      }.bind(null, $receiver)));
      return $receiver;
    };
  }
  DefaultComponentContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultComponentContext',
    interfaces: [ComponentContext]
  };
  function DefaultComponentContext_init(lifecycle, $this) {
    $this = $this || Object.create(DefaultComponentContext.prototype);
    DefaultComponentContext.call($this, lifecycle, null, null, null);
    return $this;
  }
  function SerializedQueue(onValue) {
    this.onValue_0 = onValue;
    ensureNeverFrozen(this);
    this.queue_0 = ArrayDeque_init();
  }
  SerializedQueue.prototype.offer_11rb$ = function (value) {
    this.queue_0.addLast_11rb$(value);
    if (this.queue_0.size === 1) {
      this.drain_0();
    }};
  SerializedQueue.prototype.drain_0 = function () {
    do {
      this.onValue_0(this.queue_0.first());
      this.queue_0.removeFirst();
      var isNotEmpty$result;
      isNotEmpty$result = !this.queue_0.isEmpty();
    }
     while (isNotEmpty$result);
  };
  SerializedQueue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializedQueue',
    interfaces: []
  };
  function isUnique($receiver) {
    return toSet($receiver).size === $receiver.size;
  }
  function doOnDestroy$ObjectLiteral(closure$block) {
    this.closure$block = closure$block;
  }
  doOnDestroy$ObjectLiteral.prototype.onDestroy = function () {
    this.closure$block();
  };
  doOnDestroy$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Lifecycle$Callbacks]};
  function child$lambda(closure$handler, this$child) {
    return function () {
      this$child.unregister_u332lz$(closure$handler);
      return Unit;
    };
  }
  function child_0($receiver, lifecycle) {
    var child = BackPressedDispatcher();
    var handler = getCallableRef('onBackPressed', function ($receiver) {
      return $receiver.onBackPressed();
    }.bind(null, child));
    $receiver.register_u332lz$(handler);
    if (lifecycle != null) {
      lifecycle.subscribe_pvr6dn$(new doOnDestroy$ObjectLiteral(child$lambda(handler, $receiver)));
    }return child;
  }
  function doOnDestroy$ObjectLiteral_0(closure$block) {
    this.closure$block = closure$block;
  }
  doOnDestroy$ObjectLiteral_0.prototype.onDestroy = function () {
    this.closure$block();
  };
  doOnDestroy$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Lifecycle$Callbacks]};
  function child$lambda_0(closure$key, this$child) {
    return function () {
      var tmp$;
      (tmp$ = this$child.remove_za3rmp$(closure$key)) != null ? (tmp$.onDestroy(), Unit) : null;
      return Unit;
    };
  }
  function child_1($receiver, key, lifecycle) {
    var factory = getCallableRef('ChildInstanceKeeperProvider', function () {
      return new ChildInstanceKeeperProvider();
    });
    var tmp$;
    var instance = (tmp$ = $receiver.get_za3rmp$(key)) == null || Kotlin.isType(tmp$, ChildInstanceKeeperProvider) ? tmp$ : throwCCE();
    if (instance == null) {
      instance = factory();
      $receiver.put_fz40mb$(key, instance);
    }var registry = instance.instanceKeeperRegistry;
    if (lifecycle != null) {
      lifecycle.subscribe_pvr6dn$(new doOnDestroy$ObjectLiteral_0(child$lambda_0(key, $receiver)));
    }return registry;
  }
  function ChildInstanceKeeperProvider() {
    this.instanceKeeperRegistry = InstanceKeeperDispatcher();
  }
  ChildInstanceKeeperProvider.prototype.onDestroy = function () {
    this.instanceKeeperRegistry.destroy();
  };
  ChildInstanceKeeperProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChildInstanceKeeperProvider',
    interfaces: [InstanceKeeper$Instance]
  };
  function doOnDestroy$ObjectLiteral_1(closure$block) {
    this.closure$block = closure$block;
  }
  doOnDestroy$ObjectLiteral_1.prototype.onDestroy = function () {
    this.closure$block();
  };
  doOnDestroy$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [Lifecycle$Callbacks]};
  function attachTo($receiver, lifecycle) {
    var block = getCallableRef('destroy', function ($receiver) {
      return $receiver.destroy(), Unit;
    }.bind(null, $receiver));
    lifecycle.subscribe_pvr6dn$(new doOnDestroy$ObjectLiteral_1(block));
    return $receiver;
  }
  function doOnDestroy$ObjectLiteral_2(closure$block) {
    this.closure$block = closure$block;
  }
  doOnDestroy$ObjectLiteral_2.prototype.onDestroy = function () {
    this.closure$block();
  };
  doOnDestroy$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [Lifecycle$Callbacks]};
  function MergedLifecycle(registry, lifecycle1, lifecycle2) {
    this.registry_0 = registry;
    if (lifecycle1.state === Lifecycle$State.DESTROYED || lifecycle2.state === Lifecycle$State.DESTROYED) {
      this.registry_0.onCreate();
      this.registry_0.onDestroy();
    } else {
      var state1 = {v: Lifecycle$State.INITIALIZED};
      var state2 = {v: Lifecycle$State.INITIALIZED};
      var observer1 = new MergedLifecycle$CallbacksImpl(this.registry_0, MergedLifecycle_init$lambda(state1), MergedLifecycle_init$lambda_0(state2));
      var observer2 = new MergedLifecycle$CallbacksImpl(this.registry_0, MergedLifecycle_init$lambda_1(state2), MergedLifecycle_init$lambda_2(state1));
      lifecycle1.subscribe_pvr6dn$(observer1);
      lifecycle2.subscribe_pvr6dn$(observer2);
      this.registry_0.subscribe_pvr6dn$(new doOnDestroy$ObjectLiteral_2(MergedLifecycle_init$lambda_3(lifecycle1, observer1, lifecycle2, observer2)));
    }
  }
  function MergedLifecycle$CallbacksImpl(registry, setState, getOtherState) {
    this.registry_0 = registry;
    this.setState_0 = setState;
    this.getOtherState_0 = getOtherState;
  }
  MergedLifecycle$CallbacksImpl.prototype.onCreate = function () {
    this.onUp_0(Lifecycle$State.CREATED, getCallableRef('onCreate', function ($receiver) {
      return $receiver.onCreate(), Unit;
    }.bind(null, this.registry_0)));
  };
  MergedLifecycle$CallbacksImpl.prototype.onStart = function () {
    this.onUp_0(Lifecycle$State.STARTED, getCallableRef('onStart', function ($receiver) {
      return $receiver.onStart(), Unit;
    }.bind(null, this.registry_0)));
  };
  MergedLifecycle$CallbacksImpl.prototype.onResume = function () {
    this.onUp_0(Lifecycle$State.RESUMED, getCallableRef('onResume', function ($receiver) {
      return $receiver.onResume(), Unit;
    }.bind(null, this.registry_0)));
  };
  MergedLifecycle$CallbacksImpl.prototype.onPause = function () {
    this.onDown_0(Lifecycle$State.STARTED, getCallableRef('onPause', function ($receiver) {
      return $receiver.onPause(), Unit;
    }.bind(null, this.registry_0)));
  };
  MergedLifecycle$CallbacksImpl.prototype.onStop = function () {
    this.onDown_0(Lifecycle$State.CREATED, getCallableRef('onStop', function ($receiver) {
      return $receiver.onStop(), Unit;
    }.bind(null, this.registry_0)));
  };
  MergedLifecycle$CallbacksImpl.prototype.onDestroy = function () {
    this.onDown_0(Lifecycle$State.INITIALIZED, getCallableRef('onDestroy', function ($receiver) {
      return $receiver.onDestroy(), Unit;
    }.bind(null, this.registry_0)));
  };
  MergedLifecycle$CallbacksImpl.prototype.onUp_0 = function (state, call) {
    this.setState_0(state);
    if (state.compareTo_11rb$(this.getOtherState_0()) <= 0) {
      call();
    }};
  MergedLifecycle$CallbacksImpl.prototype.onDown_0 = function (state, call) {
    if (state.compareTo_11rb$(this.getOtherState_0()) < 0) {
      call();
    }this.setState_0(state);
  };
  MergedLifecycle$CallbacksImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CallbacksImpl',
    interfaces: [Lifecycle$Callbacks]
  };
  Object.defineProperty(MergedLifecycle.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.registry_0.state;
    }
  });
  MergedLifecycle.prototype.subscribe_pvr6dn$ = function (callbacks) {
    return this.registry_0.subscribe_pvr6dn$(callbacks);
  };
  MergedLifecycle.prototype.unsubscribe_pvr6dn$ = function (callbacks) {
    return this.registry_0.unsubscribe_pvr6dn$(callbacks);
  };
  function MergedLifecycle_init$lambda(closure$state1) {
    return function (it) {
      closure$state1.v = it;
      return Unit;
    };
  }
  function MergedLifecycle_init$lambda_0(closure$state2) {
    return function () {
      return closure$state2.v;
    };
  }
  function MergedLifecycle_init$lambda_1(closure$state2) {
    return function (it) {
      closure$state2.v = it;
      return Unit;
    };
  }
  function MergedLifecycle_init$lambda_2(closure$state1) {
    return function () {
      return closure$state1.v;
    };
  }
  function MergedLifecycle_init$lambda_3(closure$lifecycle1, closure$observer1, closure$lifecycle2, closure$observer2) {
    return function () {
      closure$lifecycle1.unsubscribe_pvr6dn$(closure$observer1);
      closure$lifecycle2.unsubscribe_pvr6dn$(closure$observer2);
      return Unit;
    };
  }
  MergedLifecycle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MergedLifecycle',
    interfaces: [Lifecycle]
  };
  function MergedLifecycle_init(lifecycle1, lifecycle2, $this) {
    $this = $this || Object.create(MergedLifecycle.prototype);
    MergedLifecycle.call($this, LifecycleRegistry(), lifecycle1, lifecycle2);
    return $this;
  }
  function Router() {
  }
  Router.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Router',
    interfaces: []
  };
  function RouterEntry() {
  }
  function RouterEntry$Created(configuration, savedState, instance, lifecycleRegistry, stateKeeperDispatcher, instanceKeeperDispatcher, backPressedDispatcher) {
    if (savedState === void 0)
      savedState = null;
    RouterEntry.call(this);
    this.configuration_xkcunr$_0 = configuration;
    this.savedState_j09t7n$_0 = savedState;
    this.instance = instance;
    this.lifecycleRegistry = lifecycleRegistry;
    this.stateKeeperDispatcher = stateKeeperDispatcher;
    this.instanceKeeperDispatcher = instanceKeeperDispatcher;
    this.backPressedDispatcher = backPressedDispatcher;
  }
  Object.defineProperty(RouterEntry$Created.prototype, 'configuration', {
    get: function () {
      return this.configuration_xkcunr$_0;
    }
  });
  Object.defineProperty(RouterEntry$Created.prototype, 'savedState', {
    get: function () {
      return this.savedState_j09t7n$_0;
    }
  });
  RouterEntry$Created.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Created',
    interfaces: [RouterEntry]
  };
  RouterEntry$Created.prototype.component1 = function () {
    return this.configuration;
  };
  RouterEntry$Created.prototype.component2 = function () {
    return this.savedState;
  };
  RouterEntry$Created.prototype.component3 = function () {
    return this.instance;
  };
  RouterEntry$Created.prototype.component4 = function () {
    return this.lifecycleRegistry;
  };
  RouterEntry$Created.prototype.component5 = function () {
    return this.stateKeeperDispatcher;
  };
  RouterEntry$Created.prototype.component6 = function () {
    return this.instanceKeeperDispatcher;
  };
  RouterEntry$Created.prototype.component7 = function () {
    return this.backPressedDispatcher;
  };
  RouterEntry$Created.prototype.copy_iq7gvh$ = function (configuration, savedState, instance, lifecycleRegistry, stateKeeperDispatcher, instanceKeeperDispatcher, backPressedDispatcher) {
    return new RouterEntry$Created(configuration === void 0 ? this.configuration : configuration, savedState === void 0 ? this.savedState : savedState, instance === void 0 ? this.instance : instance, lifecycleRegistry === void 0 ? this.lifecycleRegistry : lifecycleRegistry, stateKeeperDispatcher === void 0 ? this.stateKeeperDispatcher : stateKeeperDispatcher, instanceKeeperDispatcher === void 0 ? this.instanceKeeperDispatcher : instanceKeeperDispatcher, backPressedDispatcher === void 0 ? this.backPressedDispatcher : backPressedDispatcher);
  };
  RouterEntry$Created.prototype.toString = function () {
    return 'Created(configuration=' + Kotlin.toString(this.configuration) + (', savedState=' + Kotlin.toString(this.savedState)) + (', instance=' + Kotlin.toString(this.instance)) + (', lifecycleRegistry=' + Kotlin.toString(this.lifecycleRegistry)) + (', stateKeeperDispatcher=' + Kotlin.toString(this.stateKeeperDispatcher)) + (', instanceKeeperDispatcher=' + Kotlin.toString(this.instanceKeeperDispatcher)) + (', backPressedDispatcher=' + Kotlin.toString(this.backPressedDispatcher)) + ')';
  };
  RouterEntry$Created.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.configuration) | 0;
    result = result * 31 + Kotlin.hashCode(this.savedState) | 0;
    result = result * 31 + Kotlin.hashCode(this.instance) | 0;
    result = result * 31 + Kotlin.hashCode(this.lifecycleRegistry) | 0;
    result = result * 31 + Kotlin.hashCode(this.stateKeeperDispatcher) | 0;
    result = result * 31 + Kotlin.hashCode(this.instanceKeeperDispatcher) | 0;
    result = result * 31 + Kotlin.hashCode(this.backPressedDispatcher) | 0;
    return result;
  };
  RouterEntry$Created.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.configuration, other.configuration) && Kotlin.equals(this.savedState, other.savedState) && Kotlin.equals(this.instance, other.instance) && Kotlin.equals(this.lifecycleRegistry, other.lifecycleRegistry) && Kotlin.equals(this.stateKeeperDispatcher, other.stateKeeperDispatcher) && Kotlin.equals(this.instanceKeeperDispatcher, other.instanceKeeperDispatcher) && Kotlin.equals(this.backPressedDispatcher, other.backPressedDispatcher)))));
  };
  function RouterEntry$Destroyed(configuration, savedState) {
    if (savedState === void 0)
      savedState = null;
    RouterEntry.call(this);
    this.configuration_vufsfa$_0 = configuration;
    this.savedState_lesury$_0 = savedState;
  }
  Object.defineProperty(RouterEntry$Destroyed.prototype, 'configuration', {
    get: function () {
      return this.configuration_vufsfa$_0;
    }
  });
  Object.defineProperty(RouterEntry$Destroyed.prototype, 'savedState', {
    get: function () {
      return this.savedState_lesury$_0;
    }
  });
  RouterEntry$Destroyed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Destroyed',
    interfaces: [RouterEntry]
  };
  RouterEntry$Destroyed.prototype.component1 = function () {
    return this.configuration;
  };
  RouterEntry$Destroyed.prototype.component2 = function () {
    return this.savedState;
  };
  RouterEntry$Destroyed.prototype.copy_ubwpos$ = function (configuration, savedState) {
    return new RouterEntry$Destroyed(configuration === void 0 ? this.configuration : configuration, savedState === void 0 ? this.savedState : savedState);
  };
  RouterEntry$Destroyed.prototype.toString = function () {
    return 'Destroyed(configuration=' + Kotlin.toString(this.configuration) + (', savedState=' + Kotlin.toString(this.savedState)) + ')';
  };
  RouterEntry$Destroyed.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.configuration) | 0;
    result = result * 31 + Kotlin.hashCode(this.savedState) | 0;
    return result;
  };
  RouterEntry$Destroyed.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.configuration, other.configuration) && Kotlin.equals(this.savedState, other.savedState)))));
  };
  RouterEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RouterEntry',
    interfaces: []
  };
  function destroy_0($receiver) {
    var tmp$;
    tmp$ = asReversed($receiver).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, RouterEntry$Created)) {
        element.instanceKeeperDispatcher.destroy();
        destroy(element.lifecycleRegistry);
      } else if (!Kotlin.isType(element, RouterEntry$Destroyed))
        Kotlin.noWhenBranchMatched();
    }
  }
  function RouterEntryFactory() {
  }
  RouterEntryFactory.prototype.invoke_1ptfvx$ = function (configuration, savedState, instanceKeeperDispatcher, callback$default) {
    if (savedState === void 0)
      savedState = null;
    if (instanceKeeperDispatcher === void 0)
      instanceKeeperDispatcher = null;
    return callback$default ? callback$default(configuration, savedState, instanceKeeperDispatcher) : this.invoke_1ptfvx$$default(configuration, savedState, instanceKeeperDispatcher);
  };
  RouterEntryFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RouterEntryFactory',
    interfaces: []
  };
  function RouterEntryFactoryImpl(lifecycle, childFactory) {
    this.lifecycle_0 = lifecycle;
    this.childFactory_0 = childFactory;
  }
  RouterEntryFactoryImpl.prototype.invoke_1ptfvx$$default = function (configuration, savedState, instanceKeeperDispatcher) {
    var componentLifecycleRegistry = LifecycleRegistry();
    var mergedLifecycle = MergedLifecycle_init(this.lifecycle_0, componentLifecycleRegistry);
    var stateKeeperDispatcher = StateKeeperDispatcher(savedState);
    var instanceKeeperRegistry = instanceKeeperDispatcher != null ? instanceKeeperDispatcher : InstanceKeeperDispatcher();
    var backPressedDispatcher = BackPressedDispatcher();
    var component = this.childFactory_0(configuration, new DefaultComponentContext(mergedLifecycle, stateKeeperDispatcher, instanceKeeperRegistry, backPressedDispatcher));
    return new RouterEntry$Created(configuration, void 0, component, componentLifecycleRegistry, stateKeeperDispatcher, instanceKeeperRegistry, backPressedDispatcher);
  };
  RouterEntryFactoryImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RouterEntryFactoryImpl',
    interfaces: [RouterEntryFactory]
  };
  function push$lambda(closure$configuration) {
    return function (it) {
      return plus(it, closure$configuration);
    };
  }
  function push($receiver, configuration) {
    $receiver.navigate_lbeuw8$(push$lambda(configuration));
  }
  function pop$lambda(it) {
    return dropLast(it, 1);
  }
  function pop($receiver) {
    $receiver.navigate_lbeuw8$(pop$lambda);
  }
  var popWhile = defineInlineFunction('Decompose-decompose-js-legacy.com.arkivanov.decompose.router.popWhile_tlpefg$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var popWhile$lambda = wrapFunction(function () {
      var take = Kotlin.kotlin.collections.take_ba2ldo$;
      var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
      return function (closure$predicate) {
        return function (it) {
          var predicate = closure$predicate;
          var dropLastWhile$result;
          dropLastWhile$break: do {
            if (!it.isEmpty()) {
              var iterator = it.listIterator_za3lpa$(it.size);
              while (iterator.hasPrevious()) {
                if (!predicate(iterator.previous())) {
                  dropLastWhile$result = take(it, iterator.nextIndex() + 1 | 0);
                  break dropLastWhile$break;
                }}
            }dropLastWhile$result = emptyList();
          }
           while (false);
          return dropLastWhile$result;
        };
      };
    });
    return function ($receiver, predicate) {
      $receiver.navigate_lbeuw8$(popWhile$lambda(predicate));
    };
  }));
  function replaceCurrent$lambda(closure$configuration) {
    return function (it) {
      return plus(dropLast(it, 1), closure$configuration);
    };
  }
  function replaceCurrent($receiver, configuration) {
    $receiver.navigate_lbeuw8$(replaceCurrent$lambda(configuration));
  }
  function bringToFront$lambda(closure$configuration) {
    return function (stack) {
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = stack.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$configuration_0 = closure$configuration;
        var tmp$_0;
        if (!((tmp$_0 = Kotlin.getKClassFromExpression(element)) != null ? tmp$_0.equals(Kotlin.getKClassFromExpression(closure$configuration_0)) : null))
          destination.add_11rb$(element);
      }
      return plus(destination, closure$configuration);
    };
  }
  function bringToFront($receiver, configuration) {
    $receiver.navigate_lbeuw8$(bringToFront$lambda(configuration));
  }
  function router($receiver, initialStack, configurationClass, key, handleBackButton, childFactory) {
    if (key === void 0)
      key = 'DefaultRouter';
    if (handleBackButton === void 0)
      handleBackButton = false;
    var routerEntryFactory = new RouterEntryFactoryImpl($receiver.lifecycle, childFactory);
    return new RouterImpl($receiver.lifecycle, $receiver.backPressedHandler, handleBackButton, new StackHolderImpl(initialStack, $receiver.lifecycle, key, new StackSaverImpl(configurationClass, $receiver.stateKeeper, getCallableRef('ParcelableContainer', function (p1) {
      return ParcelableContainer(p1);
    })), $receiver.instanceKeeper, routerEntryFactory), new StackNavigatorImpl(routerEntryFactory));
  }
  var router_0 = defineInlineFunction('Decompose-decompose-js-legacy.com.arkivanov.decompose.router.router_360rh5$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var router = _.com.arkivanov.decompose.router.router_37e0ht$;
    return function (C_0, isC, $receiver, initialStack, key, handleBackButton, childFactory) {
      if (key === void 0)
        key = 'DefaultRouter';
      if (handleBackButton === void 0)
        handleBackButton = false;
      return router($receiver, initialStack, getKClass(C_0), key, handleBackButton, childFactory);
    };
  }));
  var router_1 = defineInlineFunction('Decompose-decompose-js-legacy.com.arkivanov.decompose.router.router_az6lu$', wrapFunction(function () {
    var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
    var getKClass = Kotlin.getKClass;
    var router = _.com.arkivanov.decompose.router.router_37e0ht$;
    function router$lambda(closure$initialConfiguration) {
      return function () {
        return listOf(closure$initialConfiguration);
      };
    }
    return function (C_0, isC, $receiver, initialConfiguration, key, handleBackButton, childFactory) {
      if (key === void 0)
        key = 'DefaultRouter';
      if (handleBackButton === void 0)
        handleBackButton = false;
      return router($receiver, router$lambda(initialConfiguration), getKClass(C_0), key, handleBackButton, childFactory);
    };
  }));
  function router$lambda(closure$initialBackStack, closure$initialConfiguration) {
    return function () {
      return plus(closure$initialBackStack(), closure$initialConfiguration());
    };
  }
  function router_2($receiver, initialConfiguration, initialBackStack, configurationClass, key, handleBackButton, childFactory) {
    if (initialBackStack === void 0)
      initialBackStack = getCallableRef('emptyList', function () {
        return emptyList();
      });
    if (key === void 0)
      key = 'DefaultRouter';
    if (handleBackButton === void 0)
      handleBackButton = false;
    return router($receiver, router$lambda(initialBackStack, initialConfiguration), configurationClass, key, handleBackButton, childFactory);
  }
  var router_3 = defineInlineFunction('Decompose-decompose-js-legacy.com.arkivanov.decompose.router.router_7bxyoh$', wrapFunction(function () {
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getKClass = Kotlin.getKClass;
    var router = _.com.arkivanov.decompose.router.router_4pwgtj$;
    function router$lambda(closure$initialConfiguration) {
      return function () {
        return closure$initialConfiguration;
      };
    }
    function router$lambda_0(closure$initialBackStack) {
      return function () {
        return closure$initialBackStack;
      };
    }
    return function (C_0, isC, $receiver, initialConfiguration, initialBackStack, key, handleBackButton, childFactory) {
      if (initialBackStack === void 0)
        initialBackStack = emptyList();
      if (key === void 0)
        key = 'DefaultRouter';
      if (handleBackButton === void 0)
        handleBackButton = false;
      return router($receiver, router$lambda(initialConfiguration), router$lambda_0(initialBackStack), getKClass(C_0), key, handleBackButton, childFactory);
    };
  }));
  var router_4 = defineInlineFunction('Decompose-decompose-js-legacy.com.arkivanov.decompose.router.router_da7n5f$', wrapFunction(function () {
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getCallableRef = Kotlin.getCallableRef;
    var getKClass = Kotlin.getKClass;
    var router = _.com.arkivanov.decompose.router.router_4pwgtj$;
    return function (C_0, isC, $receiver, initialConfiguration, initialBackStack, key, handleBackButton, childFactory) {
      if (initialBackStack === void 0)
        initialBackStack = getCallableRef('emptyList', function () {
          return emptyList();
        });
      if (key === void 0)
        key = 'DefaultRouter';
      if (handleBackButton === void 0)
        handleBackButton = false;
      return router($receiver, initialConfiguration, initialBackStack, getKClass(C_0), key, handleBackButton, childFactory);
    };
  }));
  function doOnDestroy$ObjectLiteral_3(closure$block) {
    this.closure$block = closure$block;
  }
  doOnDestroy$ObjectLiteral_3.prototype.onDestroy = function () {
    this.closure$block();
  };
  doOnDestroy$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [Lifecycle$Callbacks]};
  function RouterImpl(lifecycle, backPressedHandler, popOnBackPressed, stackHolder, navigator) {
    this.backPressedHandler_0 = backPressedHandler;
    this.popOnBackPressed_0 = popOnBackPressed;
    this.stackHolder_0 = stackHolder;
    this.navigator_0 = navigator;
    ensureNeverFrozen(this);
    this.onBackPressedHandler_0 = getCallableRef('onBackPressed', function ($receiver) {
      return $receiver.onBackPressed_0();
    }.bind(null, this));
    this.state_o71ct6$_0 = MutableValue_0(this.toState_0(this.stackHolder_0.stack));
    this.queue_0 = new SerializedQueue(getCallableRef('navigateActual', function ($receiver, p1) {
      return $receiver.navigateActual_0(p1), Unit;
    }.bind(null, this)));
    this.backPressedHandler_0.register_u332lz$(this.onBackPressedHandler_0);
    var block = getCallableRef('destroy', function ($receiver) {
      return $receiver.destroy_0(), Unit;
    }.bind(null, this));
    lifecycle.subscribe_pvr6dn$(new doOnDestroy$ObjectLiteral_3(block));
  }
  Object.defineProperty(RouterImpl.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.state_o71ct6$_0;
    }
  });
  RouterImpl.prototype.destroy_0 = function () {
    this.backPressedHandler_0.unregister_u332lz$(this.onBackPressedHandler_0);
  };
  RouterImpl.prototype.navigate_lbeuw8$ = function (transformer) {
    this.queue_0.offer_11rb$(transformer);
  };
  RouterImpl.prototype.navigateActual_0 = function (transformer) {
    var newStack = this.navigator_0.navigate_r5fr9n$(this.stackHolder_0.stack, transformer);
    this.stackHolder_0.stack = newStack;
    this.state.value = this.toState_0(newStack);
  };
  RouterImpl.prototype.onBackPressed_0 = function () {
    if (this.stackHolder_0.stack.active.backPressedDispatcher.onBackPressed())
      return true;
    else {
      var tmp$ = this.popOnBackPressed_0;
      if (tmp$) {
        tmp$ = !this.stackHolder_0.stack.backStack.isEmpty();
      }if (tmp$) {
        pop(this);
        return true;
      } else
        return false;
    }
  };
  RouterImpl.prototype.toState_0 = function ($receiver) {
    var tmp$ = new Child$Created($receiver.active.configuration, $receiver.active.instance);
    var $receiver_0 = $receiver.backStack;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(this.toRouterStateEntry_0(item));
    }
    return new RouterState(tmp$, destination);
  };
  RouterImpl.prototype.toRouterStateEntry_0 = function ($receiver) {
    if (Kotlin.isType($receiver, RouterEntry$Created))
      return new Child$Created($receiver.configuration, $receiver.instance);
    else if (Kotlin.isType($receiver, RouterEntry$Destroyed))
      return new Child$Destroyed($receiver.configuration);
    else
      return Kotlin.noWhenBranchMatched();
  };
  RouterImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RouterImpl',
    interfaces: [Router]
  };
  function RouterStack(active, backStack) {
    if (backStack === void 0)
      backStack = emptyList();
    this.active = active;
    this.backStack = backStack;
  }
  RouterStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RouterStack',
    interfaces: []
  };
  RouterStack.prototype.component1 = function () {
    return this.active;
  };
  RouterStack.prototype.component2 = function () {
    return this.backStack;
  };
  RouterStack.prototype.copy_f9wp4k$ = function (active, backStack) {
    return new RouterStack(active === void 0 ? this.active : active, backStack === void 0 ? this.backStack : backStack);
  };
  RouterStack.prototype.toString = function () {
    return 'RouterStack(active=' + Kotlin.toString(this.active) + (', backStack=' + Kotlin.toString(this.backStack)) + ')';
  };
  RouterStack.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.active) | 0;
    result = result * 31 + Kotlin.hashCode(this.backStack) | 0;
    return result;
  };
  RouterStack.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.active, other.active) && Kotlin.equals(this.backStack, other.backStack)))));
  };
  function RouterState(activeChild, backStack) {
    if (backStack === void 0)
      backStack = emptyList();
    this.activeChild = activeChild;
    this.backStack = backStack;
  }
  RouterState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RouterState',
    interfaces: []
  };
  function RouterState_init(configuration, instance, $this) {
    $this = $this || Object.create(RouterState.prototype);
    RouterState.call($this, new Child$Created(configuration, instance));
    return $this;
  }
  RouterState.prototype.component1 = function () {
    return this.activeChild;
  };
  RouterState.prototype.component2 = function () {
    return this.backStack;
  };
  RouterState.prototype.copy_byim2y$ = function (activeChild, backStack) {
    return new RouterState(activeChild === void 0 ? this.activeChild : activeChild, backStack === void 0 ? this.backStack : backStack);
  };
  RouterState.prototype.toString = function () {
    return 'RouterState(activeChild=' + Kotlin.toString(this.activeChild) + (', backStack=' + Kotlin.toString(this.backStack)) + ')';
  };
  RouterState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.activeChild) | 0;
    result = result * 31 + Kotlin.hashCode(this.backStack) | 0;
    return result;
  };
  RouterState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.activeChild, other.activeChild) && Kotlin.equals(this.backStack, other.backStack)))));
  };
  function StackHolder() {
  }
  StackHolder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StackHolder',
    interfaces: []
  };
  Delegates$observable$ObjectLiteral.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral.prototype.constructor = Delegates$observable$ObjectLiteral;
  function Delegates$observable$ObjectLiteral(closure$onChange, initialValue) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue);
  }
  Delegates$observable$ObjectLiteral.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function doOnDestroy$ObjectLiteral_4(closure$block) {
    this.closure$block = closure$block;
  }
  doOnDestroy$ObjectLiteral_4.prototype.onDestroy = function () {
    this.closure$block();
  };
  doOnDestroy$ObjectLiteral_4.$metadata$ = {kind: Kind_CLASS, interfaces: [Lifecycle$Callbacks]};
  function StackHolderImpl(initialStack, lifecycle, key, stackSaver, instanceKeeper, routerEntryFactory) {
    this.initialStack_0 = initialStack;
    this.key_0 = key;
    this.stackSaver_0 = stackSaver;
    this.routerEntryFactory_0 = routerEntryFactory;
    var key_0 = this.key_0;
    var factory = getCallableRef('RetainedInstance', function () {
      return new StackHolderImpl$RetainedInstance();
    });
    var tmp$;
    var instance = (tmp$ = instanceKeeper.get_za3rmp$(key_0)) == null || Kotlin.isType(tmp$, StackHolderImpl$RetainedInstance) ? tmp$ : throwCCE();
    if (instance == null) {
      instance = factory();
      instanceKeeper.put_fz40mb$(key_0, instance);
    }this.retainedInstance_0 = instance;
    var tmp$_0;
    this.stack_hia3lg$_0 = new Delegates$observable$ObjectLiteral(StackHolderImpl$stack$lambda(this), (tmp$_0 = this.restoreStack_0()) != null ? tmp$_0 : this.createInitialStack_0());
    this.stackSaver_0.register_jmexq9$(this.key_0, StackHolderImpl_init$lambda(this));
    this.retainedInstance_0.activeEntry = this.stack.active;
    resume(this.stack.active.lifecycleRegistry);
    var block = getCallableRef('destroy', function ($receiver) {
      return $receiver.destroy_0(), Unit;
    }.bind(null, this));
    lifecycle.subscribe_pvr6dn$(new doOnDestroy$ObjectLiteral_4(block));
  }
  var StackHolderImpl$stack_metadata = new PropertyMetadata('stack');
  Object.defineProperty(StackHolderImpl.prototype, 'stack', {
    configurable: true,
    get: function () {
      return this.stack_hia3lg$_0.getValue_lrcp0p$(this, StackHolderImpl$stack_metadata);
    },
    set: function (stack) {
      this.stack_hia3lg$_0.setValue_9rddgb$(this, StackHolderImpl$stack_metadata, stack);
    }
  });
  StackHolderImpl.prototype.destroy_0 = function () {
    this.stackSaver_0.unregister_61zpoe$(this.key_0);
    var stack = this.stack;
    destroy(stack.active.lifecycleRegistry);
    destroy_0(stack.backStack);
  };
  StackHolderImpl.prototype.createInitialStack_0 = function () {
    var initialStack = this.initialStack_0();
    if (!!initialStack.isEmpty()) {
      var message = 'Initial stack can not be empty';
      throw IllegalStateException_init(message.toString());
    }if (!isUnique(initialStack)) {
      var message_0 = 'Configurations in the initial stack must be unique';
      throw IllegalStateException_init(message_0.toString());
    }var tmp$ = this.routerEntryFactory_0.invoke_1ptfvx$(last(initialStack));
    var $receiver = dropLast(initialStack, 1);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(new RouterEntry$Destroyed(item));
    }
    return new RouterStack(tmp$, destination);
  };
  StackHolderImpl.prototype.restoreStack_0 = function () {
    var savedStack = this.stackSaver_0.restore_61zpoe$(this.key_0);
    var activeRetainedEntry = this.retainedInstance_0.activeEntry;
    var activeInstanceKeeperDispatcher = null;
    if (activeRetainedEntry != null) {
      if (savedStack != null) {
        activeInstanceKeeperDispatcher = activeRetainedEntry.instanceKeeperDispatcher;
      } else {
        this.retainedInstance_0.destroyActiveEntry();
      }
    }return savedStack != null ? this.restore_0(savedStack, activeInstanceKeeperDispatcher) : null;
  };
  StackHolderImpl.prototype.restore_0 = function ($receiver, activeInstanceKeeperDispatcher) {
    return new RouterStack(this.routerEntryFactory_0.invoke_1ptfvx$($receiver.active.configuration, $receiver.active.savedState, activeInstanceKeeperDispatcher), $receiver.backStack);
  };
  function StackHolderImpl$RetainedInstance() {
    this.activeEntry = null;
  }
  StackHolderImpl$RetainedInstance.prototype.onDestroy = function () {
    this.destroyActiveEntry();
  };
  StackHolderImpl$RetainedInstance.prototype.destroyActiveEntry = function () {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = this.activeEntry) != null ? tmp$.instanceKeeperDispatcher : null) != null ? (tmp$_0.destroy(), Unit) : null;
    this.activeEntry = null;
  };
  StackHolderImpl$RetainedInstance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RetainedInstance',
    interfaces: [InstanceKeeper$Instance]
  };
  function StackHolderImpl$stack$lambda(this$StackHolderImpl) {
    return function (f, f_0, newValue) {
      this$StackHolderImpl.retainedInstance_0.activeEntry = newValue.active;
      return Unit;
    };
  }
  function StackHolderImpl_init$lambda(this$StackHolderImpl) {
    return function () {
      return this$StackHolderImpl.stack;
    };
  }
  StackHolderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StackHolderImpl',
    interfaces: [StackHolder]
  };
  function StackNavigator() {
  }
  StackNavigator.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StackNavigator',
    interfaces: []
  };
  function StackNavigatorImpl(routerEntryFactory) {
    this.routerEntryFactory_0 = routerEntryFactory;
  }
  StackNavigatorImpl.prototype.navigate_r5fr9n$ = function (oldStack, transformer) {
    var tmp$;
    var $receiver = plus(oldStack.backStack, oldStack.active);
    var transform = getPropertyCallableRef('configuration', 1, function ($receiver) {
      return $receiver.configuration;
    });
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(transform(item));
    }
    var newConfigurationStack = transformer(destination);
    if (!!newConfigurationStack.isEmpty()) {
      var message = 'Configuration stack can not be empty';
      throw IllegalStateException_init(message.toString());
    }if (!isUnique(newConfigurationStack)) {
      var message_0 = 'Configurations in the stack must be unique';
      throw IllegalStateException_init(message_0.toString());
    }var newActiveConfiguration = last(newConfigurationStack);
    var newActiveEntry;
    if (newActiveConfiguration === oldStack.active.configuration) {
      newActiveEntry = oldStack.active;
    } else {
      var $receiver_0 = oldStack.backStack;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_1;
        tmp$_1 = $receiver_0.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          if (element.configuration === newActiveConfiguration) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      var entry = firstOrNull$result;
      if (Kotlin.isType(entry, RouterEntry$Created))
        tmp$ = entry.copy_iq7gvh$(void 0, null);
      else if (Kotlin.isType(entry, RouterEntry$Destroyed))
        tmp$ = this.routerEntryFactory_0.invoke_1ptfvx$(entry.configuration, entry.savedState);
      else if (entry == null)
        tmp$ = this.routerEntryFactory_0.invoke_1ptfvx$(newActiveConfiguration);
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      newActiveEntry = tmp$;
      pause(oldStack.active.lifecycleRegistry);
      resume(newActiveEntry.lifecycleRegistry);
      stop(oldStack.active.lifecycleRegistry);
      var none$result;
      none$break: do {
        var tmp$_2;
        if (Kotlin.isType(newConfigurationStack, Collection) && newConfigurationStack.isEmpty()) {
          none$result = true;
          break none$break;
        }tmp$_2 = newConfigurationStack.iterator();
        while (tmp$_2.hasNext()) {
          var element_0 = tmp$_2.next();
          if (element_0 === oldStack.active.configuration) {
            none$result = false;
            break none$break;
          }}
        none$result = true;
      }
       while (false);
      if (none$result) {
        oldStack.active.instanceKeeperDispatcher.destroy();
        destroy(oldStack.active.lifecycleRegistry);
      }}
    var $receiver_1 = dropLast(newConfigurationStack, 1);
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_3;
    tmp$_3 = $receiver_1.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      var tmp$_4 = destination_0.add_11rb$;
      var transform$result;
      var tmp$_5;
      if (oldStack.active.configuration === item_0) {
        transform$result = oldStack.active.copy_iq7gvh$(void 0, oldStack.active.stateKeeperDispatcher.save());
      } else {
        var $receiver_2 = oldStack.backStack;
        var firstOrNull$result_0;
        firstOrNull$break: do {
          var tmp$_6;
          tmp$_6 = $receiver_2.iterator();
          while (tmp$_6.hasNext()) {
            var element_1 = tmp$_6.next();
            if (element_1.configuration === item_0) {
              firstOrNull$result_0 = element_1;
              break firstOrNull$break;
            }}
          firstOrNull$result_0 = null;
        }
         while (false);
        transform$result = (tmp$_5 = firstOrNull$result_0) != null ? tmp$_5 : new RouterEntry$Destroyed(item_0);
      }
      tmp$_4.call(destination_0, transform$result);
    }
    var newBackStackEntries = destination_0;
    var $receiver_3 = oldStack.backStack;
    var destination_1 = ArrayList_init();
    var tmp$_7;
    tmp$_7 = $receiver_3.iterator();
    loop_label: while (tmp$_7.hasNext()) {
      var element_2 = tmp$_7.next();
      var none$result_0;
      none$break: do {
        var tmp$_8;
        if (Kotlin.isType(newConfigurationStack, Collection) && newConfigurationStack.isEmpty()) {
          none$result_0 = true;
          break none$break;
        }tmp$_8 = newConfigurationStack.iterator();
        while (tmp$_8.hasNext()) {
          var element_3 = tmp$_8.next();
          if (element_3 === element_2.configuration) {
            none$result_0 = false;
            break none$break;
          }}
        none$result_0 = true;
      }
       while (false);
      if (none$result_0)
        destination_1.add_11rb$(element_2);
    }
    destroy_0(destination_1);
    return new RouterStack(newActiveEntry, newBackStackEntries);
  };
  StackNavigatorImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StackNavigatorImpl',
    interfaces: [StackNavigator]
  };
  function StackSaver() {
  }
  function StackSaver$RestoredStack(active, backStack) {
    this.active = active;
    this.backStack = backStack;
  }
  StackSaver$RestoredStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RestoredStack',
    interfaces: []
  };
  StackSaver.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StackSaver',
    interfaces: []
  };
  function StackSaverImpl(configurationClass, stateKeeper, parcelableContainerFactory) {
    this.configurationClass_0 = configurationClass;
    this.stateKeeper_0 = stateKeeper;
    this.parcelableContainerFactory_0 = parcelableContainerFactory;
  }
  function StackSaverImpl$register$lambda(closure$supplier, this$StackSaverImpl) {
    return function () {
      return this$StackSaverImpl.save_0(closure$supplier());
    };
  }
  StackSaverImpl.prototype.register_jmexq9$ = function (key, supplier) {
    this.stateKeeper_0.register_w4n6vf$(key, StackSaverImpl$register$lambda(supplier, this));
  };
  StackSaverImpl.prototype.save_0 = function ($receiver) {
    var tmp$ = new StackSaverImpl$SavedEntry(this.parcelableContainerFactory_0($receiver.active.configuration), $receiver.active.stateKeeperDispatcher.save());
    var $receiver_0 = $receiver.backStack;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(new StackSaverImpl$SavedEntry(this.parcelableContainerFactory_0(item.configuration), item.savedState));
    }
    return new StackSaverImpl$SavedState(tmp$, destination);
  };
  StackSaverImpl.prototype.unregister_61zpoe$ = function (key) {
    this.stateKeeper_0.unregister_61zpoe$(key);
  };
  StackSaverImpl.prototype.restore_61zpoe$ = function (key) {
    var tmp$;
    return (tmp$ = this.stateKeeper_0.consume_1u9s49$(key, getKClass(StackSaverImpl$SavedState))) != null ? this.restore_0(tmp$) : null;
  };
  StackSaverImpl.prototype.restore_0 = function ($receiver) {
    var tmp$ = this.restore_1($receiver.active);
    var $receiver_0 = $receiver.backStack;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(this.restore_1(item));
    }
    return new StackSaver$RestoredStack(tmp$, destination);
  };
  StackSaverImpl.prototype.restore_1 = function ($receiver) {
    return new RouterEntry$Destroyed(consumeRequired($receiver.configuration, this.configurationClass_0), $receiver.savedState);
  };
  function StackSaverImpl$SavedState(active, backStack) {
    this.active = active;
    this.backStack = backStack;
  }
  StackSaverImpl$SavedState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SavedState',
    interfaces: [Parcelable]
  };
  function StackSaverImpl$SavedEntry(configuration, savedState) {
    this.configuration = configuration;
    this.savedState = savedState;
  }
  StackSaverImpl$SavedEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SavedEntry',
    interfaces: [Parcelable]
  };
  StackSaverImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StackSaverImpl',
    interfaces: [StackSaver]
  };
  function WebHistoryController() {
  }
  WebHistoryController.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WebHistoryController',
    interfaces: []
  };
  function doOnDestroy$ObjectLiteral_5(closure$block) {
    this.closure$block = closure$block;
  }
  doOnDestroy$ObjectLiteral_5.prototype.onDestroy = function () {
    this.closure$block();
  };
  doOnDestroy$ObjectLiteral_5.$metadata$ = {kind: Kind_CLASS, interfaces: [Lifecycle$Callbacks]};
  function child$lambda_1(closure$key, this$child) {
    return function () {
      this$child.unregister_61zpoe$(closure$key);
      return Unit;
    };
  }
  function child_2($receiver, key, lifecycle) {
    var stateKeeper = StateKeeperDispatcher($receiver.consume_1u9s49$(key, getKClass(ParcelableContainer_0)));
    $receiver.register_w4n6vf$(key, getCallableRef('save', function ($receiver) {
      return $receiver.save();
    }.bind(null, stateKeeper)));
    if (lifecycle != null) {
      lifecycle.subscribe_pvr6dn$(new doOnDestroy$ObjectLiteral_5(child$lambda_1(key, $receiver)));
    }return stateKeeper;
  }
  function MutableValue() {
    Value.call(this);
  }
  MutableValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutableValue',
    interfaces: [Value]
  };
  Delegates$observable$ObjectLiteral_0.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_0.prototype.constructor = Delegates$observable$ObjectLiteral_0;
  function Delegates$observable$ObjectLiteral_0(closure$onChange, initialValue) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue);
  }
  Delegates$observable$ObjectLiteral_0.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function MutableValue_0(initialValue) {
    return new MutableValueImpl(initialValue);
  }
  function MutableValueImpl(initialValue) {
    MutableValue.call(this);
    this.observers_0 = emptySet();
    this.value_ui44qa$_0 = new Delegates$observable$ObjectLiteral_0(MutableValueImpl$value$lambda(this), initialValue);
  }
  var MutableValueImpl$value_metadata = new PropertyMetadata('value');
  Object.defineProperty(MutableValueImpl.prototype, 'value', {
    configurable: true,
    get: function () {
      return this.value_ui44qa$_0.getValue_lrcp0p$(this, MutableValueImpl$value_metadata);
    },
    set: function (value) {
      this.value_ui44qa$_0.setValue_9rddgb$(this, MutableValueImpl$value_metadata, value);
    }
  });
  MutableValueImpl.prototype.subscribe_oh3mgy$ = function (observer) {
    this.observers_0 = plus_0(this.observers_0, observer);
    observer(this.value);
  };
  MutableValueImpl.prototype.unsubscribe_oh3mgy$ = function (observer) {
    this.observers_0 = minus(this.observers_0, observer);
  };
  function MutableValueImpl$value$lambda(this$MutableValueImpl) {
    return function (f, f_0, value) {
      var tmp$;
      tmp$ = this$MutableValueImpl.observers_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(value);
      }
      return Unit;
    };
  }
  MutableValueImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutableValueImpl',
    interfaces: [MutableValue]
  };
  var reduce = defineInlineFunction('Decompose-decompose-js-legacy.com.arkivanov.decompose.value.reduce_7wx5zb$', function ($receiver, reducer) {
    $receiver.value = reducer($receiver.value);
  });
  function Value() {
  }
  Value.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Value',
    interfaces: []
  };
  function getValue($receiver, thisRef, property) {
    return $receiver.value;
  }
  function observe$lambda(closure$observer, this$observe) {
    return function () {
      this$observe.subscribe_oh3mgy$(closure$observer);
      return Unit;
    };
  }
  function observe$lambda_0(closure$observer, this$observe) {
    return function () {
      this$observe.unsubscribe_oh3mgy$(closure$observer);
      return Unit;
    };
  }
  function observe$lambda_1(closure$observer, this$observe) {
    return function () {
      this$observe.subscribe_oh3mgy$(closure$observer);
      return Unit;
    };
  }
  function observe$lambda_2(closure$observer, this$observe) {
    return function () {
      this$observe.unsubscribe_oh3mgy$(closure$observer);
      return Unit;
    };
  }
  function observe$lambda_3(closure$observer, this$observe) {
    return function () {
      this$observe.subscribe_oh3mgy$(closure$observer);
      return Unit;
    };
  }
  function observe$lambda_4(closure$observer, this$observe) {
    return function () {
      this$observe.unsubscribe_oh3mgy$(closure$observer);
      return Unit;
    };
  }
  function observe($receiver, lifecycle, mode, observer) {
    if (mode === void 0)
      mode = ObserveLifecycleMode$START_STOP_getInstance();
    switch (mode.name) {
      case 'CREATE_DESTROY':
        subscribe(lifecycle, observe$lambda(observer, $receiver), void 0, void 0, void 0, void 0, observe$lambda_0(observer, $receiver));
        break;
      case 'START_STOP':
        subscribe(lifecycle, void 0, observe$lambda_1(observer, $receiver), void 0, void 0, observe$lambda_2(observer, $receiver));
        break;
      case 'RESUME_PAUSE':
        subscribe(lifecycle, void 0, void 0, observe$lambda_3(observer, $receiver), observe$lambda_4(observer, $receiver));
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  }
  function ObserveLifecycleMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ObserveLifecycleMode_initFields() {
    ObserveLifecycleMode_initFields = function () {
    };
    ObserveLifecycleMode$CREATE_DESTROY_instance = new ObserveLifecycleMode('CREATE_DESTROY', 0);
    ObserveLifecycleMode$START_STOP_instance = new ObserveLifecycleMode('START_STOP', 1);
    ObserveLifecycleMode$RESUME_PAUSE_instance = new ObserveLifecycleMode('RESUME_PAUSE', 2);
  }
  var ObserveLifecycleMode$CREATE_DESTROY_instance;
  function ObserveLifecycleMode$CREATE_DESTROY_getInstance() {
    ObserveLifecycleMode_initFields();
    return ObserveLifecycleMode$CREATE_DESTROY_instance;
  }
  var ObserveLifecycleMode$START_STOP_instance;
  function ObserveLifecycleMode$START_STOP_getInstance() {
    ObserveLifecycleMode_initFields();
    return ObserveLifecycleMode$START_STOP_instance;
  }
  var ObserveLifecycleMode$RESUME_PAUSE_instance;
  function ObserveLifecycleMode$RESUME_PAUSE_getInstance() {
    ObserveLifecycleMode_initFields();
    return ObserveLifecycleMode$RESUME_PAUSE_instance;
  }
  ObserveLifecycleMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObserveLifecycleMode',
    interfaces: [Enum]
  };
  function ObserveLifecycleMode$values() {
    return [ObserveLifecycleMode$CREATE_DESTROY_getInstance(), ObserveLifecycleMode$START_STOP_getInstance(), ObserveLifecycleMode$RESUME_PAUSE_getInstance()];
  }
  ObserveLifecycleMode.values = ObserveLifecycleMode$values;
  function ObserveLifecycleMode$valueOf(name) {
    switch (name) {
      case 'CREATE_DESTROY':
        return ObserveLifecycleMode$CREATE_DESTROY_getInstance();
      case 'START_STOP':
        return ObserveLifecycleMode$START_STOP_getInstance();
      case 'RESUME_PAUSE':
        return ObserveLifecycleMode$RESUME_PAUSE_getInstance();
      default:throwISE('No enum constant com.arkivanov.decompose.value.ObserveLifecycleMode.' + name);
    }
  }
  ObserveLifecycleMode.valueOf_61zpoe$ = ObserveLifecycleMode$valueOf;
  function map($receiver, mapper) {
    return new MappedValue($receiver, mapper);
  }
  function MappedValue(upstream, mapper) {
    Value.call(this);
    this.upstream_0 = upstream;
    this.mapper_0 = mapper;
    this.lastUpstreamValue_0 = this.upstream_0.value;
    this.lastDownstreamValue_0 = this.mapper_0(this.lastUpstreamValue_0);
    this.observers_0 = emptySet();
    this.upstreamObserver_0 = getCallableRef('onUpstreamValue', function ($receiver, p1) {
      return $receiver.onUpstreamValue_0(p1), Unit;
    }.bind(null, this));
  }
  Object.defineProperty(MappedValue.prototype, 'value', {
    configurable: true,
    get: function () {
      var upstreamValue = this.upstream_0.value;
      if (upstreamValue !== this.lastUpstreamValue_0) {
        this.lastUpstreamValue_0 = upstreamValue;
        this.lastDownstreamValue_0 = this.mapper_0(upstreamValue);
      }return this.lastDownstreamValue_0;
    }
  });
  MappedValue.prototype.onUpstreamValue_0 = function (value) {
    this.lastUpstreamValue_0 = value;
    var mappedValue = this.mapper_0(value);
    this.lastDownstreamValue_0 = mappedValue;
    var tmp$;
    tmp$ = this.observers_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(mappedValue);
    }
  };
  MappedValue.prototype.subscribe_oh3mgy$ = function (observer) {
    if (this.observers_0.isEmpty()) {
      this.upstream_0.subscribe_oh3mgy$(this.upstreamObserver_0);
    }this.observers_0 = plus_0(this.observers_0, observer);
    observer(this.value);
  };
  MappedValue.prototype.unsubscribe_oh3mgy$ = function (observer) {
    this.observers_0 = minus(this.observers_0, observer);
    if (this.observers_0.isEmpty()) {
      this.upstream_0.unsubscribe_oh3mgy$(this.upstreamObserver_0);
    }};
  MappedValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MappedValue',
    interfaces: [Value]
  };
  function startsWith($receiver, other) {
    if (other.size > $receiver.size) {
      return false;
    }for (var i = 0; i !== other.size; ++i) {
      if (!equals($receiver.get_za3lpa$(i), other.get_za3lpa$(i))) {
        return false;
      }}
    return true;
  }
  function findFirstDifferentIndex($receiver, other) {
    var a = $receiver.size;
    var b = other.size;
    var minSize = JsMath.min(a, b);
    if (minSize <= 0) {
      return -1;
    }var i = 0;
    while (i < minSize && equals($receiver.get_za3lpa$(i), other.get_za3lpa$(i))) {
      i = i + 1 | 0;
    }
    return i;
  }
  function configurations($receiver) {
    var $receiver_0 = $receiver.backStack;
    var transform = getPropertyCallableRef('configuration', 1, function ($receiver) {
      return $receiver.configuration;
    });
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(transform(item));
    }
    return plus(destination, $receiver.activeChild.configuration);
  }
  function subscribe$lambda(closure$old, closure$observer) {
    return function (new_0) {
      var tmp = closure$old.v;
      closure$old.v = new_0;
      closure$observer(new_0, tmp);
      return Unit;
    };
  }
  function subscribe_0($receiver, observer) {
    var old = {v: $receiver.value};
    $receiver.subscribe_oh3mgy$(subscribe$lambda(old, observer));
  }
  function DefaultWebHistoryController(window_0) {
    this.window_0 = window_0;
  }
  DefaultWebHistoryController.prototype.attach_yodeq4$ = function (router, getPath, getConfiguration) {
    var impl = new DefaultWebHistoryController$Impl(router, this.window_0, getPath, getConfiguration);
    subscribe_0(router.state, getCallableRef('onStateChanged', function ($receiver, p1, p2) {
      return $receiver.onStateChanged_agudys$(p1, p2), Unit;
    }.bind(null, impl)));
    this.window_0.onPopState = getCallableRef('onPopState', function ($receiver, p1) {
      return $receiver.onPopState_bzslf$(p1), Unit;
    }.bind(null, impl));
  };
  function DefaultWebHistoryController$Impl(router, window_0, getPath, getConfiguration) {
    this.router_0 = router;
    this.window_0 = window_0;
    this.getPath_0 = getPath;
    this.getConfiguration_0 = getConfiguration;
    this.isStateObserverFirstPass_0 = true;
    this.isStateObserverEnabled_0 = true;
  }
  function DefaultWebHistoryController$Impl$onStateChanged$lambda(this$Impl, closure$firstDifferentIndex, closure$newStack) {
    return function (it) {
      var tmp$;
      this$Impl.window_0.onPopState = getCallableRef('onPopState', function ($receiver, p1) {
        return $receiver.onPopState_bzslf$(p1), Unit;
      }.bind(null, this$Impl));
      tmp$ = get_lastIndex(closure$newStack);
      for (var i = closure$firstDifferentIndex; i <= tmp$; i++) {
        this$Impl.pushState_0(this$Impl.window_0.history, closure$newStack.get_za3lpa$(i));
      }
      return Unit;
    };
  }
  function DefaultWebHistoryController$Impl$onStateChanged$lambda_0(this$Impl, closure$newStack, closure$firstDifferentIndex) {
    return function (it) {
      var tmp$;
      this$Impl.window_0.onPopState = getCallableRef('onPopState', function ($receiver, p1) {
        return $receiver.onPopState_bzslf$(p1), Unit;
      }.bind(null, this$Impl));
      this$Impl.replaceState_0(this$Impl.window_0.history, closure$newStack.get_za3lpa$(closure$firstDifferentIndex));
      tmp$ = get_lastIndex(closure$newStack);
      for (var i = closure$firstDifferentIndex + 1 | 0; i <= tmp$; i++) {
        this$Impl.pushState_0(this$Impl.window_0.history, closure$newStack.get_za3lpa$(i));
      }
      return Unit;
    };
  }
  DefaultWebHistoryController$Impl.prototype.onStateChanged_agudys$ = function (newState, oldState) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (!this.isStateObserverEnabled_0) {
      return;
    }var newStack = configurations(newState);
    var oldStack = configurations(oldState);
    var firstDifferentIndex = findFirstDifferentIndex(oldStack, newStack);
    if (this.isStateObserverFirstPass_0) {
      this.isStateObserverFirstPass_0 = false;
      this.replaceState_0(this.window_0.history, newStack.get_za3lpa$(0));
      tmp$ = get_lastIndex(newStack);
      for (var i = 1; i <= tmp$; i++) {
        this.pushState_0(this.window_0.history, newStack.get_za3lpa$(i));
      }
    } else if (equals(newStack, oldStack))
      return;
    else if (startsWith(oldStack, newStack))
      this.window_0.history.go_za3lpa$(newStack.size - oldStack.size | 0);
    else if (startsWith(newStack, oldStack)) {
      tmp$_0 = oldStack.size;
      tmp$_1 = get_lastIndex(newStack);
      for (var i_0 = tmp$_0; i_0 <= tmp$_1; i_0++) {
        this.pushState_0(this.window_0.history, newStack.get_za3lpa$(i_0));
      }
    } else if (firstDifferentIndex === get_lastIndex(oldStack)) {
      this.replaceState_0(this.window_0.history, newStack.get_za3lpa$(firstDifferentIndex));
      tmp$_2 = get_lastIndex(newStack);
      for (var i_1 = firstDifferentIndex + 1 | 0; i_1 <= tmp$_2; i_1++) {
        this.pushState_0(this.window_0.history, newStack.get_za3lpa$(i_1));
      }
    } else if (firstDifferentIndex > 0) {
      this.window_0.onPopState = DefaultWebHistoryController$Impl$onStateChanged$lambda(this, firstDifferentIndex, newStack);
      this.window_0.history.go_za3lpa$(firstDifferentIndex - oldStack.size | 0);
    } else {
      this.window_0.onPopState = DefaultWebHistoryController$Impl$onStateChanged$lambda_0(this, newStack, firstDifferentIndex);
      this.window_0.history.go_za3lpa$(-get_lastIndex(oldStack) | 0);
    }
  };
  function DefaultWebHistoryController$Impl$onPopState$lambda(closure$stack, closure$indexInStack) {
    return function (it) {
      return take(closure$stack, closure$indexInStack + 1 | 0);
    };
  }
  function DefaultWebHistoryController$Impl$onPopState$lambda_0(closure$stack, closure$nextConfigurations) {
    return function (it) {
      return plus_1(closure$stack, closure$nextConfigurations);
    };
  }
  DefaultWebHistoryController$Impl.prototype.onPopState_bzslf$ = function (event) {
    var tmp$;
    tmp$ = this.getData_0(event);
    if (tmp$ == null) {
      return;
    }var newData = tmp$;
    var stack = configurations(this.router_0.state.value);
    var newConfigurationKey = newData.configurationKey;
    var indexOfLast$result;
    indexOfLast$break: do {
      var iterator = stack.listIterator_za3lpa$(stack.size);
      while (iterator.hasPrevious()) {
        if (hashCode(iterator.previous()) === newConfigurationKey) {
          indexOfLast$result = iterator.nextIndex();
          break indexOfLast$break;
        }}
      indexOfLast$result = -1;
    }
     while (false);
    var indexInStack = indexOfLast$result;
    if (indexInStack >= 0) {
      if (indexInStack < get_lastIndex(stack)) {
        this.isStateObserverEnabled_0 = false;
        this.router_0.navigate_lbeuw8$(DefaultWebHistoryController$Impl$onPopState$lambda(stack, indexInStack));
        this.isStateObserverEnabled_0 = true;
      }} else {
      var nextPaths = this.getNextPaths_0(last(stack), newData);
      var transform = this.getConfiguration_0;
      var destination = ArrayList_init_0(collectionSizeOrDefault(nextPaths, 10));
      var tmp$_0;
      tmp$_0 = nextPaths.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(transform(item));
      }
      var nextConfigurations = destination;
      this.isStateObserverEnabled_0 = false;
      this.router_0.navigate_lbeuw8$(DefaultWebHistoryController$Impl$onPopState$lambda_0(stack, nextConfigurations));
      this.isStateObserverEnabled_0 = true;
    }
  };
  DefaultWebHistoryController$Impl.prototype.getNextPaths_0 = function (currentConfiguration, nextData) {
    var paths = ArrayList_init();
    var currentConfigurationKey = hashCode(currentConfiguration);
    var data = nextData;
    while (data != null && data.configurationKey !== currentConfigurationKey) {
      var element = data.path;
      paths.add_11rb$(element);
      data = data.prev;
    }
    return asReversed_0(paths);
  };
  DefaultWebHistoryController$Impl.prototype.pushState_0 = function ($receiver, configuration) {
    var currentData = this.getData_1(this.window_0.history);
    var nextData = new DefaultWebHistoryController$PageData(hashCode(configuration), this.getPath_0(configuration), currentData);
    currentData != null ? (currentData.next = nextData) : null;
    $receiver.pushState_dzvdf1$(nextData, nextData.path);
  };
  DefaultWebHistoryController$Impl.prototype.replaceState_0 = function ($receiver, configuration) {
    var currentData = this.getData_1(this.window_0.history);
    var prevData = currentData != null ? currentData.prev : null;
    var nextData = currentData != null ? currentData.next : null;
    var newData = new DefaultWebHistoryController$PageData(hashCode(configuration), this.getPath_0(configuration), prevData, nextData);
    prevData != null ? (prevData.next = nextData) : null;
    nextData != null ? (nextData.prev = newData) : null;
    $receiver.replaceState_dzvdf1$(newData, newData.path);
  };
  DefaultWebHistoryController$Impl.prototype.getData_1 = function ($receiver) {
    var tmp$;
    return (tmp$ = $receiver.state) != null ? tmp$ : null;
  };
  DefaultWebHistoryController$Impl.prototype.getData_0 = function ($receiver) {
    var tmp$;
    return (tmp$ = $receiver.state) != null ? tmp$ : null;
  };
  DefaultWebHistoryController$Impl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Impl',
    interfaces: []
  };
  function DefaultWebHistoryController$PageData(configurationKey, path, prev, next) {
    if (prev === void 0)
      prev = null;
    if (next === void 0)
      next = null;
    this.configurationKey = configurationKey;
    this.path = path;
    this.prev = prev;
    this.next = next;
  }
  DefaultWebHistoryController$PageData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageData',
    interfaces: []
  };
  DefaultWebHistoryController$PageData.prototype.component1 = function () {
    return this.configurationKey;
  };
  DefaultWebHistoryController$PageData.prototype.component2 = function () {
    return this.path;
  };
  DefaultWebHistoryController$PageData.prototype.component3 = function () {
    return this.prev;
  };
  DefaultWebHistoryController$PageData.prototype.component4 = function () {
    return this.next;
  };
  DefaultWebHistoryController$PageData.prototype.copy_ugol8m$ = function (configurationKey, path, prev, next) {
    return new DefaultWebHistoryController$PageData(configurationKey === void 0 ? this.configurationKey : configurationKey, path === void 0 ? this.path : path, prev === void 0 ? this.prev : prev, next === void 0 ? this.next : next);
  };
  DefaultWebHistoryController$PageData.prototype.toString = function () {
    return 'PageData(configurationKey=' + Kotlin.toString(this.configurationKey) + (', path=' + Kotlin.toString(this.path)) + (', prev=' + Kotlin.toString(this.prev)) + (', next=' + Kotlin.toString(this.next)) + ')';
  };
  DefaultWebHistoryController$PageData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.configurationKey) | 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.prev) | 0;
    result = result * 31 + Kotlin.hashCode(this.next) | 0;
    return result;
  };
  DefaultWebHistoryController$PageData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.configurationKey, other.configurationKey) && Kotlin.equals(this.path, other.path) && Kotlin.equals(this.prev, other.prev) && Kotlin.equals(this.next, other.next)))));
  };
  function DefaultWebHistoryController$Window() {
  }
  DefaultWebHistoryController$Window.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Window',
    interfaces: []
  };
  function DefaultWebHistoryController$History() {
  }
  DefaultWebHistoryController$History.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'History',
    interfaces: []
  };
  function DefaultWebHistoryController$WindowImpl() {
    this.history_tufcxf$_0 = new DefaultWebHistoryController$HistoryImpl();
    this.onPopState_egjgic$_0 = getPropertyCallableRef('onpopstate', 0, function ($receiver) {
      return $receiver.onpopstate;
    }.bind(null, window), function ($receiver, value) {
      $receiver.onpopstate = value;
    }.bind(null, window));
  }
  Object.defineProperty(DefaultWebHistoryController$WindowImpl.prototype, 'history', {
    configurable: true,
    get: function () {
      return this.history_tufcxf$_0;
    }
  });
  Object.defineProperty(DefaultWebHistoryController$WindowImpl.prototype, 'onPopState', {
    configurable: true,
    get: function () {
      return this.onPopState_egjgic$_0.get();
    },
    set: function (onPopState) {
      this.onPopState_egjgic$_0.set(onPopState);
    }
  });
  DefaultWebHistoryController$WindowImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WindowImpl',
    interfaces: [DefaultWebHistoryController$Window]
  };
  function DefaultWebHistoryController$HistoryImpl() {
    this.state_w7e3dy$_0 = getPropertyCallableRef('state', 0, function ($receiver) {
      return $receiver.state;
    }.bind(null, window.history));
  }
  Object.defineProperty(DefaultWebHistoryController$HistoryImpl.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.state_w7e3dy$_0.get();
    }
  });
  DefaultWebHistoryController$HistoryImpl.prototype.go_za3lpa$ = function (delta) {
    window.history.go(delta);
  };
  DefaultWebHistoryController$HistoryImpl.prototype.pushState_dzvdf1$ = function (data, url) {
    window.history.pushState(data, '', url);
  };
  DefaultWebHistoryController$HistoryImpl.prototype.replaceState_dzvdf1$ = function (data, url) {
    window.history.replaceState(data, '', url);
  };
  DefaultWebHistoryController$HistoryImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HistoryImpl',
    interfaces: [DefaultWebHistoryController$History]
  };
  DefaultWebHistoryController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultWebHistoryController',
    interfaces: [WebHistoryController]
  };
  function DefaultWebHistoryController_init($this) {
    $this = $this || Object.create(DefaultWebHistoryController.prototype);
    DefaultWebHistoryController.call($this, new DefaultWebHistoryController$WindowImpl());
    return $this;
  }
  function ensureNeverFrozen($receiver) {
  }
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$decompose = package$arkivanov.decompose || (package$arkivanov.decompose = {});
  package$decompose.InternalDecomposeApi = InternalDecomposeApi;
  package$decompose.ExperimentalDecomposeApi = ExperimentalDecomposeApi;
  Child.Created = Child$Created;
  Child.Destroyed = Child$Destroyed;
  package$decompose.Child = Child;
  package$decompose.ComponentContext = ComponentContext;
  package$decompose.childContext_8g274y$ = childContext;
  package$decompose.child_n2rciq$ = child;
  package$decompose.DefaultComponentContext_init_6paved$ = DefaultComponentContext_init;
  package$decompose.DefaultComponentContext = DefaultComponentContext;
  package$decompose.SerializedQueue = SerializedQueue;
  package$decompose.isUnique_qm211$ = isUnique;
  $$importsForInline$$['Essenty-lifecycle-js-legacy'] = $module$Essenty_lifecycle_js_legacy;
  var package$backpressed = package$decompose.backpressed || (package$decompose.backpressed = {});
  package$backpressed.child_dza0ev$ = child_0;
  $$importsForInline$$['Essenty-instance-keeper-js-legacy'] = $module$Essenty_instance_keeper_js_legacy;
  var package$instancekeeper = package$decompose.instancekeeper || (package$decompose.instancekeeper = {});
  package$instancekeeper.child_hm5pd1$ = child_1;
  package$instancekeeper.attachTo_alnzhj$ = attachTo;
  var package$lifecycle = package$decompose.lifecycle || (package$decompose.lifecycle = {});
  package$lifecycle.MergedLifecycle_init_4k4kve$ = MergedLifecycle_init;
  package$lifecycle.MergedLifecycle = MergedLifecycle;
  var package$router = package$decompose.router || (package$decompose.router = {});
  package$router.Router = Router;
  RouterEntry.Created = RouterEntry$Created;
  RouterEntry.Destroyed = RouterEntry$Destroyed;
  package$router.RouterEntry = RouterEntry;
  package$router.destroy_1g9gks$ = destroy_0;
  package$router.RouterEntryFactory = RouterEntryFactory;
  package$router.RouterEntryFactoryImpl = RouterEntryFactoryImpl;
  package$router.push_jjm0gz$ = push;
  package$router.pop_1jxxrj$ = pop;
  package$router.popWhile_tlpefg$ = popWhile;
  package$router.replaceCurrent_jjm0gz$ = replaceCurrent;
  package$router.bringToFront_jjm0gz$ = bringToFront;
  package$router.router_37e0ht$ = router;
  package$router.router_4pwgtj$ = router_2;
  package$router.RouterImpl = RouterImpl;
  package$router.RouterStack = RouterStack;
  package$router.RouterState_init_5u2irk$ = RouterState_init;
  package$router.RouterState = RouterState;
  package$router.StackHolder = StackHolder;
  package$router.StackHolderImpl = StackHolderImpl;
  package$router.StackNavigator = StackNavigator;
  package$router.StackNavigatorImpl = StackNavigatorImpl;
  StackSaver.RestoredStack = StackSaver$RestoredStack;
  package$router.StackSaver = StackSaver;
  $$importsForInline$$['Essenty-state-keeper-js-legacy'] = $module$Essenty_state_keeper_js_legacy;
  package$router.StackSaverImpl = StackSaverImpl;
  var package$webhistory = package$router.webhistory || (package$router.webhistory = {});
  package$webhistory.WebHistoryController = WebHistoryController;
  var package$statekeeper = package$decompose.statekeeper || (package$decompose.statekeeper = {});
  package$statekeeper.child_mm9oy9$ = child_2;
  var package$value = package$decompose.value || (package$decompose.value = {});
  package$value.MutableValue = MutableValue;
  package$value.MutableValue_issdgt$ = MutableValue_0;
  $$importsForInline$$['Decompose-decompose-js-legacy'] = _;
  package$value.reduce_7wx5zb$ = reduce;
  package$value.Value = Value;
  package$value.getValue_buqbrs$ = getValue;
  package$value.observe_tkyuel$ = observe;
  Object.defineProperty(ObserveLifecycleMode, 'CREATE_DESTROY', {
    get: ObserveLifecycleMode$CREATE_DESTROY_getInstance
  });
  Object.defineProperty(ObserveLifecycleMode, 'START_STOP', {
    get: ObserveLifecycleMode$START_STOP_getInstance
  });
  Object.defineProperty(ObserveLifecycleMode, 'RESUME_PAUSE', {
    get: ObserveLifecycleMode$RESUME_PAUSE_getInstance
  });
  package$value.ObserveLifecycleMode = ObserveLifecycleMode;
  var package$operator = package$value.operator || (package$value.operator = {});
  package$operator.map_ilaus3$ = map;
  package$router.startsWith_7e0jhw$ = startsWith;
  package$router.findFirstDifferentIndex_7e0jhw$ = findFirstDifferentIndex;
  package$router.configurations_b0h3bk$ = configurations;
  package$router.subscribe_idlx1a$ = subscribe_0;
  DefaultWebHistoryController.Window = DefaultWebHistoryController$Window;
  DefaultWebHistoryController.History = DefaultWebHistoryController$History;
  package$webhistory.DefaultWebHistoryController_init = DefaultWebHistoryController_init;
  package$webhistory.DefaultWebHistoryController = DefaultWebHistoryController;
  package$decompose.ensureNeverFrozen_8ea4r1$ = ensureNeverFrozen;
  RouterEntryFactoryImpl.prototype.invoke_1ptfvx$ = RouterEntryFactory.prototype.invoke_1ptfvx$;
  doOnDestroy$ObjectLiteral.prototype.onCreate = Lifecycle$Callbacks.prototype.onCreate;
  doOnDestroy$ObjectLiteral.prototype.onStart = Lifecycle$Callbacks.prototype.onStart;
  doOnDestroy$ObjectLiteral.prototype.onResume = Lifecycle$Callbacks.prototype.onResume;
  doOnDestroy$ObjectLiteral.prototype.onPause = Lifecycle$Callbacks.prototype.onPause;
  doOnDestroy$ObjectLiteral.prototype.onStop = Lifecycle$Callbacks.prototype.onStop;
  doOnDestroy$ObjectLiteral_0.prototype.onCreate = Lifecycle$Callbacks.prototype.onCreate;
  doOnDestroy$ObjectLiteral_0.prototype.onStart = Lifecycle$Callbacks.prototype.onStart;
  doOnDestroy$ObjectLiteral_0.prototype.onResume = Lifecycle$Callbacks.prototype.onResume;
  doOnDestroy$ObjectLiteral_0.prototype.onPause = Lifecycle$Callbacks.prototype.onPause;
  doOnDestroy$ObjectLiteral_0.prototype.onStop = Lifecycle$Callbacks.prototype.onStop;
  doOnDestroy$ObjectLiteral_1.prototype.onCreate = Lifecycle$Callbacks.prototype.onCreate;
  doOnDestroy$ObjectLiteral_1.prototype.onStart = Lifecycle$Callbacks.prototype.onStart;
  doOnDestroy$ObjectLiteral_1.prototype.onResume = Lifecycle$Callbacks.prototype.onResume;
  doOnDestroy$ObjectLiteral_1.prototype.onPause = Lifecycle$Callbacks.prototype.onPause;
  doOnDestroy$ObjectLiteral_1.prototype.onStop = Lifecycle$Callbacks.prototype.onStop;
  doOnDestroy$ObjectLiteral_2.prototype.onCreate = Lifecycle$Callbacks.prototype.onCreate;
  doOnDestroy$ObjectLiteral_2.prototype.onStart = Lifecycle$Callbacks.prototype.onStart;
  doOnDestroy$ObjectLiteral_2.prototype.onResume = Lifecycle$Callbacks.prototype.onResume;
  doOnDestroy$ObjectLiteral_2.prototype.onPause = Lifecycle$Callbacks.prototype.onPause;
  doOnDestroy$ObjectLiteral_2.prototype.onStop = Lifecycle$Callbacks.prototype.onStop;
  doOnDestroy$ObjectLiteral_3.prototype.onCreate = Lifecycle$Callbacks.prototype.onCreate;
  doOnDestroy$ObjectLiteral_3.prototype.onStart = Lifecycle$Callbacks.prototype.onStart;
  doOnDestroy$ObjectLiteral_3.prototype.onResume = Lifecycle$Callbacks.prototype.onResume;
  doOnDestroy$ObjectLiteral_3.prototype.onPause = Lifecycle$Callbacks.prototype.onPause;
  doOnDestroy$ObjectLiteral_3.prototype.onStop = Lifecycle$Callbacks.prototype.onStop;
  doOnDestroy$ObjectLiteral_4.prototype.onCreate = Lifecycle$Callbacks.prototype.onCreate;
  doOnDestroy$ObjectLiteral_4.prototype.onStart = Lifecycle$Callbacks.prototype.onStart;
  doOnDestroy$ObjectLiteral_4.prototype.onResume = Lifecycle$Callbacks.prototype.onResume;
  doOnDestroy$ObjectLiteral_4.prototype.onPause = Lifecycle$Callbacks.prototype.onPause;
  doOnDestroy$ObjectLiteral_4.prototype.onStop = Lifecycle$Callbacks.prototype.onStop;
  doOnDestroy$ObjectLiteral_5.prototype.onCreate = Lifecycle$Callbacks.prototype.onCreate;
  doOnDestroy$ObjectLiteral_5.prototype.onStart = Lifecycle$Callbacks.prototype.onStart;
  doOnDestroy$ObjectLiteral_5.prototype.onResume = Lifecycle$Callbacks.prototype.onResume;
  doOnDestroy$ObjectLiteral_5.prototype.onPause = Lifecycle$Callbacks.prototype.onPause;
  doOnDestroy$ObjectLiteral_5.prototype.onStop = Lifecycle$Callbacks.prototype.onStop;
  Kotlin.defineModule('Decompose-decompose-js-legacy', _);
  return _;
}));

//# sourceMappingURL=Decompose-decompose-js-legacy.js.map
