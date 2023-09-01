(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'Essenty-lifecycle-js-legacy', 'Essenty-instance-keeper-js-legacy', 'MVIKotlin-utils-internal-js-legacy', 'MVIKotlin-rx-internal-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('Essenty-lifecycle-js-legacy'), require('Essenty-instance-keeper-js-legacy'), require('MVIKotlin-utils-internal-js-legacy'), require('MVIKotlin-rx-internal-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MVIKotlin-mvikotlin-js-legacy'.");
    }if (typeof this['Essenty-lifecycle-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-js-legacy'. Its dependency 'Essenty-lifecycle-js-legacy' was not found. Please, check whether 'Essenty-lifecycle-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-js-legacy'.");
    }if (typeof this['Essenty-instance-keeper-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-js-legacy'. Its dependency 'Essenty-instance-keeper-js-legacy' was not found. Please, check whether 'Essenty-instance-keeper-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-js-legacy'.");
    }if (typeof this['MVIKotlin-utils-internal-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-js-legacy'. Its dependency 'MVIKotlin-utils-internal-js-legacy' was not found. Please, check whether 'MVIKotlin-utils-internal-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-js-legacy'.");
    }if (typeof this['MVIKotlin-rx-internal-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-js-legacy'. Its dependency 'MVIKotlin-rx-internal-js-legacy' was not found. Please, check whether 'MVIKotlin-rx-internal-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-js-legacy'.");
    }root['MVIKotlin-mvikotlin-js-legacy'] = factory(typeof this['MVIKotlin-mvikotlin-js-legacy'] === 'undefined' ? {} : this['MVIKotlin-mvikotlin-js-legacy'], kotlin, this['Essenty-lifecycle-js-legacy'], this['Essenty-instance-keeper-js-legacy'], this['MVIKotlin-utils-internal-js-legacy'], this['MVIKotlin-rx-internal-js-legacy']);
  }
}(this, function (_, Kotlin, $module$Essenty_lifecycle_js_legacy, $module$Essenty_instance_keeper_js_legacy, $module$MVIKotlin_utils_internal_js_legacy, $module$MVIKotlin_rx_internal_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var subscribe = $module$Essenty_lifecycle_js_legacy.com.arkivanov.essenty.lifecycle.subscribe_a2ubdc$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var InstanceKeeper$Instance = $module$Essenty_instance_keeper_js_legacy.com.arkivanov.essenty.instancekeeper.InstanceKeeper.Instance;
  var throwCCE = Kotlin.throwCCE;
  var initialize = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.initialize_1hlm9$;
  var requireValue = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.requireValue_2p8z43$;
  var atomic = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.atomic_30y1fr$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var internal = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal;
  var assertOnMainThread = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.assertOnMainThread;
  var ensureNeverFrozen = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.ensureNeverFrozen_irb06o$;
  var PublishSubject = $module$MVIKotlin_rx_internal_js_legacy.com.arkivanov.mvikotlin.rx.internal.PublishSubject_287e2$;
  BinderLifecycleMode.prototype = Object.create(Enum.prototype);
  BinderLifecycleMode.prototype.constructor = BinderLifecycleMode;
  StoreEventType.prototype = Object.create(Enum.prototype);
  StoreEventType.prototype.constructor = StoreEventType;
  function MainThread() {
  }
  MainThread.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainThread',
    interfaces: [Annotation]
  };
  function Binder() {
  }
  Binder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Binder',
    interfaces: []
  };
  function attachTo($receiver, lifecycle, mode) {
    switch (mode.name) {
      case 'CREATE_DESTROY':
        subscribe(lifecycle, getCallableRef('start', function ($receiver) {
          return $receiver.start(), Unit;
        }.bind(null, $receiver)), void 0, void 0, void 0, void 0, getCallableRef('stop', function ($receiver) {
          return $receiver.stop(), Unit;
        }.bind(null, $receiver)));
        break;
      case 'START_STOP':
        subscribe(lifecycle, void 0, getCallableRef('start', function ($receiver) {
          return $receiver.start(), Unit;
        }.bind(null, $receiver)), void 0, void 0, getCallableRef('stop', function ($receiver) {
          return $receiver.stop(), Unit;
        }.bind(null, $receiver)));
        break;
      case 'RESUME_PAUSE':
        subscribe(lifecycle, void 0, void 0, getCallableRef('start', function ($receiver) {
          return $receiver.start(), Unit;
        }.bind(null, $receiver)), getCallableRef('stop', function ($receiver) {
          return $receiver.stop(), Unit;
        }.bind(null, $receiver)));
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
    return $receiver;
  }
  function BinderLifecycleMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BinderLifecycleMode_initFields() {
    BinderLifecycleMode_initFields = function () {
    };
    BinderLifecycleMode$CREATE_DESTROY_instance = new BinderLifecycleMode('CREATE_DESTROY', 0);
    BinderLifecycleMode$START_STOP_instance = new BinderLifecycleMode('START_STOP', 1);
    BinderLifecycleMode$RESUME_PAUSE_instance = new BinderLifecycleMode('RESUME_PAUSE', 2);
  }
  var BinderLifecycleMode$CREATE_DESTROY_instance;
  function BinderLifecycleMode$CREATE_DESTROY_getInstance() {
    BinderLifecycleMode_initFields();
    return BinderLifecycleMode$CREATE_DESTROY_instance;
  }
  var BinderLifecycleMode$START_STOP_instance;
  function BinderLifecycleMode$START_STOP_getInstance() {
    BinderLifecycleMode_initFields();
    return BinderLifecycleMode$START_STOP_instance;
  }
  var BinderLifecycleMode$RESUME_PAUSE_instance;
  function BinderLifecycleMode$RESUME_PAUSE_getInstance() {
    BinderLifecycleMode_initFields();
    return BinderLifecycleMode$RESUME_PAUSE_instance;
  }
  BinderLifecycleMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BinderLifecycleMode',
    interfaces: [Enum]
  };
  function BinderLifecycleMode$values() {
    return [BinderLifecycleMode$CREATE_DESTROY_getInstance(), BinderLifecycleMode$START_STOP_getInstance(), BinderLifecycleMode$RESUME_PAUSE_getInstance()];
  }
  BinderLifecycleMode.values = BinderLifecycleMode$values;
  function BinderLifecycleMode$valueOf(name) {
    switch (name) {
      case 'CREATE_DESTROY':
        return BinderLifecycleMode$CREATE_DESTROY_getInstance();
      case 'START_STOP':
        return BinderLifecycleMode$START_STOP_getInstance();
      case 'RESUME_PAUSE':
        return BinderLifecycleMode$RESUME_PAUSE_getInstance();
      default:throwISE('No enum constant com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode.' + name);
    }
  }
  BinderLifecycleMode.valueOf_61zpoe$ = BinderLifecycleMode$valueOf;
  function getStore$lambda(closure$factory) {
    return function () {
      return new StoreInstance(closure$factory());
    };
  }
  function getStore($receiver, key, factory) {
    var tmp$;
    var instance = (tmp$ = $receiver.get_za3rmp$(key)) == null || Kotlin.isType(tmp$, StoreInstance) ? tmp$ : throwCCE();
    if (instance == null) {
      instance = getStore$lambda(factory)();
      $receiver.put_fz40mb$(key, instance);
    }return instance.store;
  }
  var getStore_0 = defineInlineFunction('MVIKotlin-mvikotlin-js-legacy.com.arkivanov.mvikotlin.core.instancekeeper.getStore_l0o0l0$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var getStore = _.com.arkivanov.mvikotlin.core.instancekeeper.getStore_g75k8n$;
    return function (T_0, isT, $receiver, factory) {
      return getStore($receiver, getKClass(T_0), factory);
    };
  }));
  function StoreInstance(store) {
    this.store = store;
  }
  StoreInstance.prototype.onDestroy = function () {
    this.store.dispose();
  };
  StoreInstance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StoreInstance',
    interfaces: [InstanceKeeper$Instance]
  };
  function Bootstrapper() {
  }
  Bootstrapper.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Bootstrapper',
    interfaces: []
  };
  function Executor() {
  }
  function Executor$Callbacks() {
  }
  Executor$Callbacks.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Callbacks',
    interfaces: []
  };
  Executor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Executor',
    interfaces: []
  };
  function Reducer(f) {
    this.function$ = f;
  }
  Reducer.prototype.reduce = function ($receiver, msg) {
    return this.function$($receiver, msg);
  };
  Reducer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Reducer',
    interfaces: []
  };
  function SimpleBootstrapper(actions) {
    this.actions_0 = actions;
    this.actionConsumer_0 = atomic();
  }
  SimpleBootstrapper.prototype.init = function (actionConsumer) {
    initialize(this.actionConsumer_0, actionConsumer);
  };
  SimpleBootstrapper.prototype.dispose = function () {
  };
  SimpleBootstrapper.prototype.invoke = function () {
    var $receiver = this.actions_0;
    var action = getCallableRef('invoke', function ($receiver, p1) {
      return $receiver(p1);
    }.bind(null, requireValue(this.actionConsumer_0)));
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      action(element);
    }
  };
  SimpleBootstrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleBootstrapper',
    interfaces: [Bootstrapper]
  };
  function Store() {
  }
  Store.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Store',
    interfaces: []
  };
  function StoreEventType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function StoreEventType_initFields() {
    StoreEventType_initFields = function () {
    };
    StoreEventType$INTENT_instance = new StoreEventType('INTENT', 0);
    StoreEventType$ACTION_instance = new StoreEventType('ACTION', 1);
    StoreEventType$MESSAGE_instance = new StoreEventType('MESSAGE', 2);
    StoreEventType$STATE_instance = new StoreEventType('STATE', 3);
    StoreEventType$LABEL_instance = new StoreEventType('LABEL', 4);
  }
  var StoreEventType$INTENT_instance;
  function StoreEventType$INTENT_getInstance() {
    StoreEventType_initFields();
    return StoreEventType$INTENT_instance;
  }
  var StoreEventType$ACTION_instance;
  function StoreEventType$ACTION_getInstance() {
    StoreEventType_initFields();
    return StoreEventType$ACTION_instance;
  }
  var StoreEventType$MESSAGE_instance;
  function StoreEventType$MESSAGE_getInstance() {
    StoreEventType_initFields();
    return StoreEventType$MESSAGE_instance;
  }
  var StoreEventType$STATE_instance;
  function StoreEventType$STATE_getInstance() {
    StoreEventType_initFields();
    return StoreEventType$STATE_instance;
  }
  var StoreEventType$LABEL_instance;
  function StoreEventType$LABEL_getInstance() {
    StoreEventType_initFields();
    return StoreEventType$LABEL_instance;
  }
  StoreEventType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StoreEventType',
    interfaces: [Enum]
  };
  function StoreEventType$values() {
    return [StoreEventType$INTENT_getInstance(), StoreEventType$ACTION_getInstance(), StoreEventType$MESSAGE_getInstance(), StoreEventType$STATE_getInstance(), StoreEventType$LABEL_getInstance()];
  }
  StoreEventType.values = StoreEventType$values;
  function StoreEventType$valueOf(name) {
    switch (name) {
      case 'INTENT':
        return StoreEventType$INTENT_getInstance();
      case 'ACTION':
        return StoreEventType$ACTION_getInstance();
      case 'MESSAGE':
        return StoreEventType$MESSAGE_getInstance();
      case 'STATE':
        return StoreEventType$STATE_getInstance();
      case 'LABEL':
        return StoreEventType$LABEL_getInstance();
      default:throwISE('No enum constant com.arkivanov.mvikotlin.core.store.StoreEventType.' + name);
    }
  }
  StoreEventType.valueOf_61zpoe$ = StoreEventType$valueOf;
  function StoreFactory() {
    StoreFactory$Companion_getInstance();
  }
  StoreFactory.prototype.create = function (name, isAutoInit, initialState, bootstrapper, executorFactory, reducer, callback$default) {
    var tmp$;
    if (name === void 0)
      name = null;
    if (isAutoInit === void 0)
      isAutoInit = true;
    if (bootstrapper === void 0)
      bootstrapper = null;
    if (reducer === void 0)
      reducer = Kotlin.isType(tmp$ = StoreFactory$Companion_getInstance().bypassReducer_0, Reducer) ? tmp$ : throwCCE();
    return callback$default ? callback$default(name, isAutoInit, initialState, bootstrapper, executorFactory, reducer) : this.create$default(name, isAutoInit, initialState, bootstrapper, executorFactory, reducer);
  };
  function StoreFactory$Companion() {
    StoreFactory$Companion_instance = this;
    this.bypassReducer_0 = new Reducer(StoreFactory$Companion$bypassReducer$lambda);
  }
  function StoreFactory$Companion$bypassReducer$lambda($receiver, it) {
    return $receiver;
  }
  StoreFactory$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StoreFactory$Companion_instance = null;
  function StoreFactory$Companion_getInstance() {
    if (StoreFactory$Companion_instance === null) {
      new StoreFactory$Companion();
    }return StoreFactory$Companion_instance;
  }
  StoreFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StoreFactory',
    interfaces: []
  };
  function create($receiver, name, isAutoInit, initialState, reducer) {
    if (name === void 0)
      name = null;
    if (isAutoInit === void 0)
      isAutoInit = true;
    return $receiver.create(name, isAutoInit, initialState, void 0, getCallableRef('BypassExecutor', function () {
      return new BypassExecutor();
    }), reducer);
  }
  function BypassExecutor() {
    this.callbacks_0 = atomic();
  }
  BypassExecutor.prototype.init = function (callbacks) {
    initialize(this.callbacks_0, callbacks);
  };
  BypassExecutor.prototype.executeIntent = function (intent) {
    requireValue(this.callbacks_0).onMessage(intent);
  };
  BypassExecutor.prototype.executeAction = function (action) {
  };
  BypassExecutor.prototype.dispose = function () {
  };
  BypassExecutor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BypassExecutor',
    interfaces: [Executor]
  };
  var diff = defineInlineFunction('MVIKotlin-mvikotlin-js-legacy.com.arkivanov.mvikotlin.core.utils.diff_dse0vn$', wrapFunction(function () {
    var DiffBuilder = _.com.arkivanov.mvikotlin.core.utils.DiffBuilder;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var ViewRenderer = _.com.arkivanov.mvikotlin.core.view.ViewRenderer;
    diff$ObjectLiteral.prototype = Object.create(DiffBuilder.prototype);
    diff$ObjectLiteral.prototype.constructor = diff$ObjectLiteral;
    function diff$ObjectLiteral() {
      DiffBuilder.call(this);
    }
    diff$ObjectLiteral.prototype.render = function (model) {
      var tmp$;
      tmp$ = this.binders.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element.render(model);
      }
    };
    diff$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [ViewRenderer, DiffBuilder]
    };
    return function (block) {
      var builder = new diff$ObjectLiteral();
      block(builder);
      return builder;
    };
  }));
  function DiffBuilder() {
    this.binders = ArrayList_init();
  }
  DiffBuilder.prototype.diff_bkwfhj$ = defineInlineFunction('MVIKotlin-mvikotlin-js-legacy.com.arkivanov.mvikotlin.core.utils.DiffBuilder.diff_bkwfhj$', wrapFunction(function () {
    var equals = Kotlin.equals;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var ViewRenderer = _.com.arkivanov.mvikotlin.core.view.ViewRenderer;
    function DiffBuilder$diff$lambda(a, b) {
      return equals(a, b);
    }
    function DiffBuilder$diff$ObjectLiteral(closure$get, closure$compare, closure$set) {
      this.closure$get = closure$get;
      this.closure$compare = closure$compare;
      this.closure$set = closure$set;
      this.oldValue_0 = null;
    }
    DiffBuilder$diff$ObjectLiteral.prototype.render = function (model) {
      var newValue = this.closure$get(model);
      var oldValue = this.oldValue_0;
      this.oldValue_0 = newValue;
      if (oldValue == null || !this.closure$compare(newValue, oldValue)) {
        this.closure$set(newValue);
      }};
    DiffBuilder$diff$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [ViewRenderer]
    };
    return function (get, compare, set) {
      if (compare === void 0)
        compare = DiffBuilder$diff$lambda;
      var $receiver = this.binders;
      var element = new DiffBuilder$diff$ObjectLiteral(get, compare, set);
      $receiver.add_11rb$(element);
    };
  }));
  DiffBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DiffBuilder',
    interfaces: []
  };
  function get_isAssertOnMainThreadEnabled() {
    return internal.isAssertOnMainThreadEnabled;
  }
  function set_isAssertOnMainThreadEnabled(value) {
    internal.isAssertOnMainThreadEnabled = value;
  }
  function assertOnMainThread_0() {
    assertOnMainThread();
  }
  function BaseMviView() {
    ensureNeverFrozen(this);
    this.renderer_ly8fyi$_0 = null;
    this.subject_ld0nrj$_0 = PublishSubject();
  }
  Object.defineProperty(BaseMviView.prototype, 'renderer', {
    configurable: true,
    get: function () {
      return this.renderer_ly8fyi$_0;
    }
  });
  BaseMviView.prototype.events = function (observer) {
    return this.subject_ld0nrj$_0.subscribe(observer);
  };
  BaseMviView.prototype.dispatch = function (event) {
    this.subject_ld0nrj$_0.onNext(event);
  };
  BaseMviView.prototype.render = function (model) {
    var tmp$;
    (tmp$ = this.renderer) != null ? (tmp$.render(model), Unit) : null;
  };
  BaseMviView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseMviView',
    interfaces: [MviView]
  };
  function MviView() {
  }
  MviView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MviView',
    interfaces: [ViewEvents, ViewRenderer]
  };
  function ViewEvents() {
  }
  ViewEvents.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ViewEvents',
    interfaces: []
  };
  function ViewRenderer() {
  }
  ViewRenderer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ViewRenderer',
    interfaces: []
  };
  function JvmSerializable() {
  }
  JvmSerializable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JvmSerializable',
    interfaces: []
  };
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$mvikotlin = package$arkivanov.mvikotlin || (package$arkivanov.mvikotlin = {});
  var package$core = package$mvikotlin.core || (package$mvikotlin.core = {});
  var package$annotations = package$core.annotations || (package$core.annotations = {});
  package$annotations.MainThread = MainThread;
  var package$binder = package$core.binder || (package$core.binder = {});
  package$binder.Binder = Binder;
  package$binder.attachTo_49wvml$ = attachTo;
  Object.defineProperty(BinderLifecycleMode, 'CREATE_DESTROY', {
    get: BinderLifecycleMode$CREATE_DESTROY_getInstance
  });
  Object.defineProperty(BinderLifecycleMode, 'START_STOP', {
    get: BinderLifecycleMode$START_STOP_getInstance
  });
  Object.defineProperty(BinderLifecycleMode, 'RESUME_PAUSE', {
    get: BinderLifecycleMode$RESUME_PAUSE_getInstance
  });
  package$binder.BinderLifecycleMode = BinderLifecycleMode;
  $$importsForInline$$['Essenty-instance-keeper-js-legacy'] = $module$Essenty_instance_keeper_js_legacy;
  var package$instancekeeper = package$core.instancekeeper || (package$core.instancekeeper = {});
  package$instancekeeper.getStore_g75k8n$ = getStore;
  var package$store = package$core.store || (package$core.store = {});
  package$store.Bootstrapper = Bootstrapper;
  Executor.Callbacks = Executor$Callbacks;
  package$store.Executor = Executor;
  package$store.Reducer = Reducer;
  package$store.SimpleBootstrapper = SimpleBootstrapper;
  package$store.Store = Store;
  Object.defineProperty(StoreEventType, 'INTENT', {
    get: StoreEventType$INTENT_getInstance
  });
  Object.defineProperty(StoreEventType, 'ACTION', {
    get: StoreEventType$ACTION_getInstance
  });
  Object.defineProperty(StoreEventType, 'MESSAGE', {
    get: StoreEventType$MESSAGE_getInstance
  });
  Object.defineProperty(StoreEventType, 'STATE', {
    get: StoreEventType$STATE_getInstance
  });
  Object.defineProperty(StoreEventType, 'LABEL', {
    get: StoreEventType$LABEL_getInstance
  });
  package$store.StoreEventType = StoreEventType;
  package$store.StoreFactory = StoreFactory;
  package$store.create_faxr1a$ = create;
  var package$utils = package$core.utils || (package$core.utils = {});
  package$utils.DiffBuilder = DiffBuilder;
  var package$view = package$core.view || (package$core.view = {});
  package$view.ViewRenderer = ViewRenderer;
  $$importsForInline$$['MVIKotlin-mvikotlin-js-legacy'] = _;
  package$utils.diff_dse0vn$ = diff;
  Object.defineProperty(package$utils, 'isAssertOnMainThreadEnabled', {
    get: get_isAssertOnMainThreadEnabled,
    set: set_isAssertOnMainThreadEnabled
  });
  package$utils.assertOnMainThread = assertOnMainThread_0;
  package$view.BaseMviView = BaseMviView;
  package$view.MviView = MviView;
  package$view.ViewEvents = ViewEvents;
  package$utils.JvmSerializable = JvmSerializable;
  Kotlin.defineModule('MVIKotlin-mvikotlin-js-legacy', _);
  return _;
}));

//# sourceMappingURL=MVIKotlin-mvikotlin-js-legacy.js.map
