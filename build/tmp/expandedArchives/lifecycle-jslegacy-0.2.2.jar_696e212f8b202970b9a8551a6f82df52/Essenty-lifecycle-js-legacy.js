(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'Essenty-utils-internal-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('Essenty-utils-internal-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Essenty-lifecycle-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Essenty-lifecycle-js-legacy'.");
    }if (typeof this['Essenty-utils-internal-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-lifecycle-js-legacy'. Its dependency 'Essenty-utils-internal-js-legacy' was not found. Please, check whether 'Essenty-utils-internal-js-legacy' is loaded prior to 'Essenty-lifecycle-js-legacy'.");
    }root['Essenty-lifecycle-js-legacy'] = factory(typeof this['Essenty-lifecycle-js-legacy'] === 'undefined' ? {} : this['Essenty-lifecycle-js-legacy'], kotlin, this['Essenty-utils-internal-js-legacy']);
  }
}(this, function (_, Kotlin, $module$Essenty_utils_internal_js_legacy) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var minus = Kotlin.kotlin.collections.minus_xfiyik$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var ensureNeverFrozen = $module$Essenty_utils_internal_js_legacy.com.arkivanov.essenty.utils.internal.ensureNeverFrozen_irb06o$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  Lifecycle$State.prototype = Object.create(Enum.prototype);
  Lifecycle$State.prototype.constructor = Lifecycle$State;
  function Lifecycle() {
  }
  function Lifecycle$State(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Lifecycle$State_initFields() {
    Lifecycle$State_initFields = function () {
    };
    Lifecycle$State$DESTROYED_instance = new Lifecycle$State('DESTROYED', 0);
    Lifecycle$State$INITIALIZED_instance = new Lifecycle$State('INITIALIZED', 1);
    Lifecycle$State$CREATED_instance = new Lifecycle$State('CREATED', 2);
    Lifecycle$State$STARTED_instance = new Lifecycle$State('STARTED', 3);
    Lifecycle$State$RESUMED_instance = new Lifecycle$State('RESUMED', 4);
  }
  var Lifecycle$State$DESTROYED_instance;
  function Lifecycle$State$DESTROYED_getInstance() {
    Lifecycle$State_initFields();
    return Lifecycle$State$DESTROYED_instance;
  }
  var Lifecycle$State$INITIALIZED_instance;
  function Lifecycle$State$INITIALIZED_getInstance() {
    Lifecycle$State_initFields();
    return Lifecycle$State$INITIALIZED_instance;
  }
  var Lifecycle$State$CREATED_instance;
  function Lifecycle$State$CREATED_getInstance() {
    Lifecycle$State_initFields();
    return Lifecycle$State$CREATED_instance;
  }
  var Lifecycle$State$STARTED_instance;
  function Lifecycle$State$STARTED_getInstance() {
    Lifecycle$State_initFields();
    return Lifecycle$State$STARTED_instance;
  }
  var Lifecycle$State$RESUMED_instance;
  function Lifecycle$State$RESUMED_getInstance() {
    Lifecycle$State_initFields();
    return Lifecycle$State$RESUMED_instance;
  }
  Lifecycle$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: [Enum]
  };
  function Lifecycle$State$values() {
    return [Lifecycle$State$DESTROYED_getInstance(), Lifecycle$State$INITIALIZED_getInstance(), Lifecycle$State$CREATED_getInstance(), Lifecycle$State$STARTED_getInstance(), Lifecycle$State$RESUMED_getInstance()];
  }
  Lifecycle$State.values = Lifecycle$State$values;
  function Lifecycle$State$valueOf(name) {
    switch (name) {
      case 'DESTROYED':
        return Lifecycle$State$DESTROYED_getInstance();
      case 'INITIALIZED':
        return Lifecycle$State$INITIALIZED_getInstance();
      case 'CREATED':
        return Lifecycle$State$CREATED_getInstance();
      case 'STARTED':
        return Lifecycle$State$STARTED_getInstance();
      case 'RESUMED':
        return Lifecycle$State$RESUMED_getInstance();
      default:throwISE('No enum constant com.arkivanov.essenty.lifecycle.Lifecycle.State.' + name);
    }
  }
  Lifecycle$State.valueOf_61zpoe$ = Lifecycle$State$valueOf;
  function Lifecycle$Callbacks() {
  }
  Lifecycle$Callbacks.prototype.onCreate = function () {
  };
  Lifecycle$Callbacks.prototype.onStart = function () {
  };
  Lifecycle$Callbacks.prototype.onResume = function () {
  };
  Lifecycle$Callbacks.prototype.onPause = function () {
  };
  Lifecycle$Callbacks.prototype.onStop = function () {
  };
  Lifecycle$Callbacks.prototype.onDestroy = function () {
  };
  Lifecycle$Callbacks.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Callbacks',
    interfaces: []
  };
  Lifecycle.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Lifecycle',
    interfaces: []
  };
  function subscribe$ObjectLiteral(closure$onCreate, closure$onStart, closure$onResume, closure$onPause, closure$onStop, closure$onDestroy) {
    this.closure$onCreate = closure$onCreate;
    this.closure$onStart = closure$onStart;
    this.closure$onResume = closure$onResume;
    this.closure$onPause = closure$onPause;
    this.closure$onStop = closure$onStop;
    this.closure$onDestroy = closure$onDestroy;
  }
  subscribe$ObjectLiteral.prototype.onCreate = function () {
    var tmp$;
    (tmp$ = this.closure$onCreate) != null ? tmp$() : null;
  };
  subscribe$ObjectLiteral.prototype.onStart = function () {
    var tmp$;
    (tmp$ = this.closure$onStart) != null ? tmp$() : null;
  };
  subscribe$ObjectLiteral.prototype.onResume = function () {
    var tmp$;
    (tmp$ = this.closure$onResume) != null ? tmp$() : null;
  };
  subscribe$ObjectLiteral.prototype.onPause = function () {
    var tmp$;
    (tmp$ = this.closure$onPause) != null ? tmp$() : null;
  };
  subscribe$ObjectLiteral.prototype.onStop = function () {
    var tmp$;
    (tmp$ = this.closure$onStop) != null ? tmp$() : null;
  };
  subscribe$ObjectLiteral.prototype.onDestroy = function () {
    var tmp$;
    (tmp$ = this.closure$onDestroy) != null ? tmp$() : null;
  };
  subscribe$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Lifecycle$Callbacks]
  };
  function subscribe($receiver, onCreate, onStart, onResume, onPause, onStop, onDestroy) {
    if (onCreate === void 0)
      onCreate = null;
    if (onStart === void 0)
      onStart = null;
    if (onResume === void 0)
      onResume = null;
    if (onPause === void 0)
      onPause = null;
    if (onStop === void 0)
      onStop = null;
    if (onDestroy === void 0)
      onDestroy = null;
    var $receiver_0 = new subscribe$ObjectLiteral(onCreate, onStart, onResume, onPause, onStop, onDestroy);
    getCallableRef('subscribe', function ($receiver, p1) {
      return $receiver.subscribe_pvr6dn$(p1), Unit;
    }.bind(null, $receiver))($receiver_0);
    return $receiver_0;
  }
  var doOnCreate = defineInlineFunction('Essenty-lifecycle-js-legacy.com.arkivanov.essenty.lifecycle.doOnCreate_oox6wb$', wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Lifecycle$Callbacks = _.com.arkivanov.essenty.lifecycle.Lifecycle.Callbacks;
    doOnCreate$ObjectLiteral.prototype.onStart = Lifecycle$Callbacks.prototype.onStart;
    doOnCreate$ObjectLiteral.prototype.onResume = Lifecycle$Callbacks.prototype.onResume;
    doOnCreate$ObjectLiteral.prototype.onPause = Lifecycle$Callbacks.prototype.onPause;
    doOnCreate$ObjectLiteral.prototype.onStop = Lifecycle$Callbacks.prototype.onStop;
    doOnCreate$ObjectLiteral.prototype.onDestroy = Lifecycle$Callbacks.prototype.onDestroy;
    function doOnCreate$ObjectLiteral(this$doOnCreate, closure$block) {
      this.this$doOnCreate = this$doOnCreate;
      this.closure$block = closure$block;
    }
    doOnCreate$ObjectLiteral.prototype.onCreate = function () {
      this.this$doOnCreate.unsubscribe_pvr6dn$(this);
      this.closure$block();
    };
    doOnCreate$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [Lifecycle$Callbacks]
    };
    return function ($receiver, block) {
      $receiver.subscribe_pvr6dn$(new doOnCreate$ObjectLiteral($receiver, block));
    };
  }));
  var doOnStart = defineInlineFunction('Essenty-lifecycle-js-legacy.com.arkivanov.essenty.lifecycle.doOnStart_7e2q1g$', wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Lifecycle$Callbacks = _.com.arkivanov.essenty.lifecycle.Lifecycle.Callbacks;
    doOnStart$ObjectLiteral.prototype.onCreate = Lifecycle$Callbacks.prototype.onCreate;
    doOnStart$ObjectLiteral.prototype.onResume = Lifecycle$Callbacks.prototype.onResume;
    doOnStart$ObjectLiteral.prototype.onPause = Lifecycle$Callbacks.prototype.onPause;
    doOnStart$ObjectLiteral.prototype.onStop = Lifecycle$Callbacks.prototype.onStop;
    doOnStart$ObjectLiteral.prototype.onDestroy = Lifecycle$Callbacks.prototype.onDestroy;
    function doOnStart$ObjectLiteral(closure$isOneTime, this$doOnStart, closure$block) {
      this.closure$isOneTime = closure$isOneTime;
      this.this$doOnStart = this$doOnStart;
      this.closure$block = closure$block;
    }
    doOnStart$ObjectLiteral.prototype.onStart = function () {
      if (this.closure$isOneTime) {
        this.this$doOnStart.unsubscribe_pvr6dn$(this);
      }this.closure$block();
    };
    doOnStart$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [Lifecycle$Callbacks]
    };
    return function ($receiver, isOneTime, block) {
      if (isOneTime === void 0)
        isOneTime = false;
      $receiver.subscribe_pvr6dn$(new doOnStart$ObjectLiteral(isOneTime, $receiver, block));
    };
  }));
  var doOnResume = defineInlineFunction('Essenty-lifecycle-js-legacy.com.arkivanov.essenty.lifecycle.doOnResume_7e2q1g$', wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Lifecycle$Callbacks = _.com.arkivanov.essenty.lifecycle.Lifecycle.Callbacks;
    doOnResume$ObjectLiteral.prototype.onCreate = Lifecycle$Callbacks.prototype.onCreate;
    doOnResume$ObjectLiteral.prototype.onStart = Lifecycle$Callbacks.prototype.onStart;
    doOnResume$ObjectLiteral.prototype.onPause = Lifecycle$Callbacks.prototype.onPause;
    doOnResume$ObjectLiteral.prototype.onStop = Lifecycle$Callbacks.prototype.onStop;
    doOnResume$ObjectLiteral.prototype.onDestroy = Lifecycle$Callbacks.prototype.onDestroy;
    function doOnResume$ObjectLiteral(closure$isOneTime, this$doOnResume, closure$block) {
      this.closure$isOneTime = closure$isOneTime;
      this.this$doOnResume = this$doOnResume;
      this.closure$block = closure$block;
    }
    doOnResume$ObjectLiteral.prototype.onResume = function () {
      if (this.closure$isOneTime) {
        this.this$doOnResume.unsubscribe_pvr6dn$(this);
      }this.closure$block();
    };
    doOnResume$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [Lifecycle$Callbacks]
    };
    return function ($receiver, isOneTime, block) {
      if (isOneTime === void 0)
        isOneTime = false;
      $receiver.subscribe_pvr6dn$(new doOnResume$ObjectLiteral(isOneTime, $receiver, block));
    };
  }));
  var doOnPause = defineInlineFunction('Essenty-lifecycle-js-legacy.com.arkivanov.essenty.lifecycle.doOnPause_7e2q1g$', wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Lifecycle$Callbacks = _.com.arkivanov.essenty.lifecycle.Lifecycle.Callbacks;
    doOnPause$ObjectLiteral.prototype.onCreate = Lifecycle$Callbacks.prototype.onCreate;
    doOnPause$ObjectLiteral.prototype.onStart = Lifecycle$Callbacks.prototype.onStart;
    doOnPause$ObjectLiteral.prototype.onResume = Lifecycle$Callbacks.prototype.onResume;
    doOnPause$ObjectLiteral.prototype.onStop = Lifecycle$Callbacks.prototype.onStop;
    doOnPause$ObjectLiteral.prototype.onDestroy = Lifecycle$Callbacks.prototype.onDestroy;
    function doOnPause$ObjectLiteral(closure$isOneTime, this$doOnPause, closure$block) {
      this.closure$isOneTime = closure$isOneTime;
      this.this$doOnPause = this$doOnPause;
      this.closure$block = closure$block;
    }
    doOnPause$ObjectLiteral.prototype.onPause = function () {
      if (this.closure$isOneTime) {
        this.this$doOnPause.unsubscribe_pvr6dn$(this);
      }this.closure$block();
    };
    doOnPause$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [Lifecycle$Callbacks]
    };
    return function ($receiver, isOneTime, block) {
      if (isOneTime === void 0)
        isOneTime = false;
      $receiver.subscribe_pvr6dn$(new doOnPause$ObjectLiteral(isOneTime, $receiver, block));
    };
  }));
  var doOnStop = defineInlineFunction('Essenty-lifecycle-js-legacy.com.arkivanov.essenty.lifecycle.doOnStop_7e2q1g$', wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Lifecycle$Callbacks = _.com.arkivanov.essenty.lifecycle.Lifecycle.Callbacks;
    doOnStop$ObjectLiteral.prototype.onCreate = Lifecycle$Callbacks.prototype.onCreate;
    doOnStop$ObjectLiteral.prototype.onStart = Lifecycle$Callbacks.prototype.onStart;
    doOnStop$ObjectLiteral.prototype.onResume = Lifecycle$Callbacks.prototype.onResume;
    doOnStop$ObjectLiteral.prototype.onPause = Lifecycle$Callbacks.prototype.onPause;
    doOnStop$ObjectLiteral.prototype.onDestroy = Lifecycle$Callbacks.prototype.onDestroy;
    function doOnStop$ObjectLiteral(closure$isOneTime, this$doOnStop, closure$block) {
      this.closure$isOneTime = closure$isOneTime;
      this.this$doOnStop = this$doOnStop;
      this.closure$block = closure$block;
    }
    doOnStop$ObjectLiteral.prototype.onStop = function () {
      if (this.closure$isOneTime) {
        this.this$doOnStop.unsubscribe_pvr6dn$(this);
      }this.closure$block();
    };
    doOnStop$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [Lifecycle$Callbacks]
    };
    return function ($receiver, isOneTime, block) {
      if (isOneTime === void 0)
        isOneTime = false;
      $receiver.subscribe_pvr6dn$(new doOnStop$ObjectLiteral(isOneTime, $receiver, block));
    };
  }));
  var doOnDestroy = defineInlineFunction('Essenty-lifecycle-js-legacy.com.arkivanov.essenty.lifecycle.doOnDestroy_oox6wb$', wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Lifecycle$Callbacks = _.com.arkivanov.essenty.lifecycle.Lifecycle.Callbacks;
    doOnDestroy$ObjectLiteral.prototype.onCreate = Lifecycle$Callbacks.prototype.onCreate;
    doOnDestroy$ObjectLiteral.prototype.onStart = Lifecycle$Callbacks.prototype.onStart;
    doOnDestroy$ObjectLiteral.prototype.onResume = Lifecycle$Callbacks.prototype.onResume;
    doOnDestroy$ObjectLiteral.prototype.onPause = Lifecycle$Callbacks.prototype.onPause;
    doOnDestroy$ObjectLiteral.prototype.onStop = Lifecycle$Callbacks.prototype.onStop;
    function doOnDestroy$ObjectLiteral(closure$block) {
      this.closure$block = closure$block;
    }
    doOnDestroy$ObjectLiteral.prototype.onDestroy = function () {
      this.closure$block();
    };
    doOnDestroy$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [Lifecycle$Callbacks]
    };
    return function ($receiver, block) {
      $receiver.subscribe_pvr6dn$(new doOnDestroy$ObjectLiteral(block));
    };
  }));
  function LifecycleOwner() {
  }
  LifecycleOwner.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LifecycleOwner',
    interfaces: []
  };
  function LifecycleRegistry() {
  }
  LifecycleRegistry.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LifecycleRegistry',
    interfaces: [Lifecycle$Callbacks, Lifecycle]
  };
  function LifecycleRegistry_0() {
    return new LifecycleRegistryImpl();
  }
  function create($receiver) {
    if ($receiver.state === Lifecycle$State$INITIALIZED_getInstance()) {
      $receiver.onCreate();
    }}
  function start($receiver) {
    create($receiver);
    if ($receiver.state === Lifecycle$State$CREATED_getInstance()) {
      $receiver.onStart();
    }}
  function resume($receiver) {
    start($receiver);
    if ($receiver.state === Lifecycle$State$STARTED_getInstance()) {
      $receiver.onResume();
    }}
  function pause($receiver) {
    if ($receiver.state === Lifecycle$State$RESUMED_getInstance()) {
      $receiver.onPause();
    }}
  function stop($receiver) {
    pause($receiver);
    if ($receiver.state === Lifecycle$State$STARTED_getInstance()) {
      $receiver.onStop();
    }}
  function destroy($receiver) {
    stop($receiver);
    if ($receiver.state === Lifecycle$State$CREATED_getInstance()) {
      $receiver.onDestroy();
    }}
  function LifecycleRegistryImpl() {
    ensureNeverFrozen(this);
    this.callbacks_0 = emptySet();
    this._state_0 = Lifecycle$State$INITIALIZED_getInstance();
  }
  Object.defineProperty(LifecycleRegistryImpl.prototype, 'state', {
    configurable: true,
    get: function () {
      return this._state_0;
    }
  });
  LifecycleRegistryImpl.prototype.subscribe_pvr6dn$ = function (callbacks) {
    if (!!this.callbacks_0.contains_11rb$(callbacks)) {
      var message = 'Already subscribed';
      throw IllegalStateException_init(message.toString());
    }this.callbacks_0 = plus(this.callbacks_0, callbacks);
    var state = this._state_0;
    if (state.compareTo_11rb$(Lifecycle$State$CREATED_getInstance()) >= 0) {
      callbacks.onCreate();
    }if (state.compareTo_11rb$(Lifecycle$State$STARTED_getInstance()) >= 0) {
      callbacks.onStart();
    }if (state.compareTo_11rb$(Lifecycle$State$RESUMED_getInstance()) >= 0) {
      callbacks.onResume();
    }};
  LifecycleRegistryImpl.prototype.unsubscribe_pvr6dn$ = function (callbacks) {
    this.callbacks_0 = minus(this.callbacks_0, callbacks);
  };
  LifecycleRegistryImpl.prototype.onCreate = function () {
    this.checkState_0(Lifecycle$State$INITIALIZED_getInstance());
    this._state_0 = Lifecycle$State$CREATED_getInstance();
    var tmp$;
    tmp$ = this.callbacks_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.onCreate();
    }
  };
  LifecycleRegistryImpl.prototype.onStart = function () {
    this.checkState_0(Lifecycle$State$CREATED_getInstance());
    this._state_0 = Lifecycle$State$STARTED_getInstance();
    var tmp$;
    tmp$ = this.callbacks_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.onStart();
    }
  };
  LifecycleRegistryImpl.prototype.onResume = function () {
    this.checkState_0(Lifecycle$State$STARTED_getInstance());
    this._state_0 = Lifecycle$State$RESUMED_getInstance();
    var tmp$;
    tmp$ = this.callbacks_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.onResume();
    }
  };
  LifecycleRegistryImpl.prototype.onPause = function () {
    this.checkState_0(Lifecycle$State$RESUMED_getInstance());
    this._state_0 = Lifecycle$State$STARTED_getInstance();
    var tmp$;
    tmp$ = reversed(this.callbacks_0).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.onPause();
    }
  };
  LifecycleRegistryImpl.prototype.onStop = function () {
    this.checkState_0(Lifecycle$State$STARTED_getInstance());
    this._state_0 = Lifecycle$State$CREATED_getInstance();
    var tmp$;
    tmp$ = reversed(this.callbacks_0).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.onStop();
    }
  };
  LifecycleRegistryImpl.prototype.onDestroy = function () {
    this.checkState_0(Lifecycle$State$CREATED_getInstance());
    this._state_0 = Lifecycle$State$DESTROYED_getInstance();
    var tmp$;
    tmp$ = reversed(this.callbacks_0).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.onDestroy();
    }
    this.callbacks_0 = emptySet();
  };
  LifecycleRegistryImpl.prototype.checkState_0 = function (required) {
    if (!(this._state_0 === required)) {
      var message = 'Expected state ' + required + ' but was ' + this._state_0;
      throw IllegalStateException_init(message.toString());
    }};
  LifecycleRegistryImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LifecycleRegistryImpl',
    interfaces: [LifecycleRegistry]
  };
  Object.defineProperty(Lifecycle$State, 'DESTROYED', {
    get: Lifecycle$State$DESTROYED_getInstance
  });
  Object.defineProperty(Lifecycle$State, 'INITIALIZED', {
    get: Lifecycle$State$INITIALIZED_getInstance
  });
  Object.defineProperty(Lifecycle$State, 'CREATED', {
    get: Lifecycle$State$CREATED_getInstance
  });
  Object.defineProperty(Lifecycle$State, 'STARTED', {
    get: Lifecycle$State$STARTED_getInstance
  });
  Object.defineProperty(Lifecycle$State, 'RESUMED', {
    get: Lifecycle$State$RESUMED_getInstance
  });
  Lifecycle.State = Lifecycle$State;
  Lifecycle.Callbacks = Lifecycle$Callbacks;
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$essenty = package$arkivanov.essenty || (package$arkivanov.essenty = {});
  var package$lifecycle = package$essenty.lifecycle || (package$essenty.lifecycle = {});
  package$lifecycle.Lifecycle = Lifecycle;
  package$lifecycle.subscribe_a2ubdc$ = subscribe;
  package$lifecycle.doOnCreate_oox6wb$ = doOnCreate;
  package$lifecycle.doOnStart_7e2q1g$ = doOnStart;
  package$lifecycle.doOnResume_7e2q1g$ = doOnResume;
  package$lifecycle.doOnPause_7e2q1g$ = doOnPause;
  package$lifecycle.doOnStop_7e2q1g$ = doOnStop;
  package$lifecycle.doOnDestroy_oox6wb$ = doOnDestroy;
  package$lifecycle.LifecycleOwner = LifecycleOwner;
  package$lifecycle.LifecycleRegistry = LifecycleRegistry;
  package$lifecycle.lifecycleRegistry = LifecycleRegistry_0;
  package$lifecycle.create_8jbdtl$ = create;
  package$lifecycle.start_8jbdtl$ = start;
  package$lifecycle.resume_8jbdtl$ = resume;
  package$lifecycle.pause_8jbdtl$ = pause;
  package$lifecycle.stop_8jbdtl$ = stop;
  package$lifecycle.destroy_8jbdtl$ = destroy;
  package$lifecycle.LifecycleRegistryImpl = LifecycleRegistryImpl;
  LifecycleRegistry.prototype.onCreate = Lifecycle$Callbacks.prototype.onCreate;
  LifecycleRegistry.prototype.onStart = Lifecycle$Callbacks.prototype.onStart;
  LifecycleRegistry.prototype.onResume = Lifecycle$Callbacks.prototype.onResume;
  LifecycleRegistry.prototype.onPause = Lifecycle$Callbacks.prototype.onPause;
  LifecycleRegistry.prototype.onStop = Lifecycle$Callbacks.prototype.onStop;
  LifecycleRegistry.prototype.onDestroy = Lifecycle$Callbacks.prototype.onDestroy;
  Kotlin.defineModule('Essenty-lifecycle-js-legacy', _);
  return _;
}));

//# sourceMappingURL=Essenty-lifecycle-js-legacy.js.map
