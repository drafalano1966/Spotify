(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'MVIKotlin-utils-internal-js-legacy', 'MVIKotlin-rx-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('MVIKotlin-utils-internal-js-legacy'), require('MVIKotlin-rx-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-rx-internal-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MVIKotlin-rx-internal-js-legacy'.");
    }if (typeof this['MVIKotlin-utils-internal-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-rx-internal-js-legacy'. Its dependency 'MVIKotlin-utils-internal-js-legacy' was not found. Please, check whether 'MVIKotlin-utils-internal-js-legacy' is loaded prior to 'MVIKotlin-rx-internal-js-legacy'.");
    }if (typeof this['MVIKotlin-rx-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-rx-internal-js-legacy'. Its dependency 'MVIKotlin-rx-js-legacy' was not found. Please, check whether 'MVIKotlin-rx-js-legacy' is loaded prior to 'MVIKotlin-rx-internal-js-legacy'.");
    }root['MVIKotlin-rx-internal-js-legacy'] = factory(typeof this['MVIKotlin-rx-internal-js-legacy'] === 'undefined' ? {} : this['MVIKotlin-rx-internal-js-legacy'], kotlin, this['MVIKotlin-utils-internal-js-legacy'], this['MVIKotlin-rx-js-legacy']);
  }
}(this, function (_, Kotlin, $module$MVIKotlin_utils_internal_js_legacy, $module$MVIKotlin_rx_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var getValue = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.getValue_7q65s$;
  var setValue = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.setValue_dvyc16$;
  var freeze = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.freeze_irb06o$;
  var Unit = Kotlin.kotlin.Unit;
  var IsolatedRef = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.IsolatedRef;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var plus = Kotlin.kotlin.collections.plus_e8164j$;
  var minus = Kotlin.kotlin.collections.minus_4pa84t$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var isMainThread = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.isMainThread;
  var getCallableRef = Kotlin.getCallableRef;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var atomic = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.atomic_mh5how$;
  var getValue_0 = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.getValue_iv1vl5$;
  var setValue_0 = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.setValue_vdyhaa$;
  var atomic_0 = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.atomic_6taknv$;
  var Disposable = $module$MVIKotlin_rx_js_legacy.com.arkivanov.mvikotlin.rx.Disposable;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var plus_0 = Kotlin.kotlin.collections.plus_qloxvw$;
  var getAndUpdate = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.getAndUpdate_nomvim$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Observer = $module$MVIKotlin_rx_js_legacy.com.arkivanov.mvikotlin.rx.Observer;
  BaseSubject$Event$OnSubscribe.prototype = Object.create(BaseSubject$Event.prototype);
  BaseSubject$Event$OnSubscribe.prototype.constructor = BaseSubject$Event$OnSubscribe;
  BaseSubject$Event$OnNext.prototype = Object.create(BaseSubject$Event.prototype);
  BaseSubject$Event$OnNext.prototype.constructor = BaseSubject$Event$OnNext;
  BaseSubject$Event$OnComplete.prototype = Object.create(BaseSubject$Event.prototype);
  BaseSubject$Event$OnComplete.prototype.constructor = BaseSubject$Event$OnComplete;
  BaseSubject$Event$OnDispose.prototype = Object.create(BaseSubject$Event.prototype);
  BaseSubject$Event$OnDispose.prototype.constructor = BaseSubject$Event$OnDispose;
  BehaviorSubjectImpl.prototype = Object.create(BaseSubject.prototype);
  BehaviorSubjectImpl.prototype.constructor = BehaviorSubjectImpl;
  PublishSubjectImpl.prototype = Object.create(BaseSubject.prototype);
  PublishSubjectImpl.prototype.constructor = PublishSubjectImpl;
  function Disposable$ObjectLiteral(closure$onDispose) {
    this.closure$onDispose = closure$onDispose;
    this.isDisposed_i9y4e$_0 = atomic_0(false);
  }
  Object.defineProperty(Disposable$ObjectLiteral.prototype, 'isDisposed', {
    configurable: true,
    get: function () {
      return getValue_0(this.isDisposed_i9y4e$_0, this, Disposable$ObjectLiteral$isDisposed_metadata);
    },
    set: function (isDisposed) {
      setValue_0(this.isDisposed_i9y4e$_0, this, Disposable$ObjectLiteral$isDisposed_metadata, isDisposed);
    }
  });
  Disposable$ObjectLiteral.prototype.dispose = function () {
    this.isDisposed = true;
    this.closure$onDispose(this);
  };
  Disposable$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Disposable]
  };
  function BaseSubject(isOnMainThread) {
    if (isOnMainThread === void 0)
      isOnMainThread = getCallableRef('isMainThread', function () {
        return isMainThread();
      });
    this.isOnMainThread_0 = isOnMainThread;
    this.serializer_0 = new Serializer(getCallableRef('onEvent', function ($receiver, p1) {
      return $receiver.onEvent_0(p1), Unit;
    }.bind(null, this)));
    this.observers_hf2xuu$_0 = atomic(emptyMap());
    this.lock_0 = new Lock();
  }
  var BaseSubject$observers_metadata = new PropertyMetadata('observers');
  Object.defineProperty(BaseSubject.prototype, 'observers_0', {
    configurable: true,
    get: function () {
      return getValue(this.observers_hf2xuu$_0, this, BaseSubject$observers_metadata);
    },
    set: function (observers) {
      setValue(this.observers_hf2xuu$_0, this, BaseSubject$observers_metadata, observers);
    }
  });
  Object.defineProperty(BaseSubject.prototype, 'isActive', {
    configurable: true,
    get: function () {
      return this.observers_0 != null;
    }
  });
  function BaseSubject$subscribe$lambda(this$BaseSubject) {
    return function ($receiver) {
      this$BaseSubject.serializer_0.onNext_11rb$(new BaseSubject$Event$OnDispose($receiver));
      return Unit;
    };
  }
  BaseSubject.prototype.subscribe = function (observer) {
    if (!this.isOnMainThread_0()) {
      freeze(observer);
    }var disposable = new Disposable$ObjectLiteral(BaseSubject$subscribe$lambda(this));
    var $receiver = this.lock_0;
    $receiver.lock();
    try {
      this.serializer_0.onNext_11rb$(new BaseSubject$Event$OnSubscribe(new IsolatedRef(observer), disposable));
    }finally {
      $receiver.unlock();
    }
    return disposable;
  };
  BaseSubject.prototype.onNext = function (value) {
    var $receiver = this.lock_0;
    $receiver.lock();
    try {
      this.serializer_0.onNext_11rb$(new BaseSubject$Event$OnNext(value));
    }finally {
      $receiver.unlock();
    }
  };
  BaseSubject.prototype.onComplete = function () {
    var $receiver = this.lock_0;
    $receiver.lock();
    try {
      this.serializer_0.onNext_11rb$(BaseSubject$Event$OnComplete_getInstance());
    }finally {
      $receiver.unlock();
    }
  };
  BaseSubject.prototype.onEvent_0 = function (event) {
    if (Kotlin.isType(event, BaseSubject$Event$OnSubscribe))
      this.onSubscribeEvent_0(event.observer, event.disposable);
    else if (Kotlin.isType(event, BaseSubject$Event$OnNext))
      this.onNextEvent_0(event.value);
    else if (Kotlin.isType(event, BaseSubject$Event$OnComplete))
      this.onCompleteEvent_0();
    else if (Kotlin.isType(event, BaseSubject$Event$OnDispose))
      this.onDisposeEvent_0(event.disposable);
    else
      Kotlin.noWhenBranchMatched();
  };
  BaseSubject.prototype.onSubscribeEvent_0 = function (observer, disposable) {
    var currentObservers = this.observers_0;
    if (currentObservers == null) {
      observer.value.onComplete();
      disposable.dispose();
    } else {
      this.observers_0 = plus(currentObservers, to(disposable, observer));
      this.onAfterSubscribe_jhhz7r$(observer.value);
    }
  };
  BaseSubject.prototype.onAfterSubscribe_jhhz7r$ = function (observer) {
  };
  BaseSubject.prototype.onNextEvent_0 = function (value) {
    var tmp$, tmp$_0;
    this.onBeforeNext_11rb$(value);
    if ((tmp$_0 = (tmp$ = this.observers_0) != null ? tmp$.values : null) != null) {
      var tmp$_1;
      tmp$_1 = tmp$_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        element.value.onNext(value);
      }
    }};
  BaseSubject.prototype.onBeforeNext_11rb$ = function (value) {
  };
  BaseSubject.prototype.onCompleteEvent_0 = function () {
    var tmp$;
    if ((tmp$ = this.observers_0) != null) {
      var tmp$_0;
      tmp$_0 = tmp$.entries.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var disposable = element.key;
        var observer = element.value;
        observer.value.onComplete();
        disposable.dispose();
      }
    }this.observers_0 = null;
  };
  BaseSubject.prototype.onDisposeEvent_0 = function (disposable) {
    var tmp$;
    this.observers_0 = (tmp$ = this.observers_0) != null ? minus(tmp$, disposable) : null;
  };
  function BaseSubject$Event() {
  }
  function BaseSubject$Event$OnSubscribe(observer, disposable) {
    BaseSubject$Event.call(this);
    this.observer = observer;
    this.disposable = disposable;
  }
  BaseSubject$Event$OnSubscribe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnSubscribe',
    interfaces: [BaseSubject$Event]
  };
  function BaseSubject$Event$OnNext(value) {
    BaseSubject$Event.call(this);
    this.value = value;
  }
  BaseSubject$Event$OnNext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnNext',
    interfaces: [BaseSubject$Event]
  };
  function BaseSubject$Event$OnComplete() {
    BaseSubject$Event$OnComplete_instance = this;
    BaseSubject$Event.call(this);
  }
  BaseSubject$Event$OnComplete.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'OnComplete',
    interfaces: [BaseSubject$Event]
  };
  var BaseSubject$Event$OnComplete_instance = null;
  function BaseSubject$Event$OnComplete_getInstance() {
    if (BaseSubject$Event$OnComplete_instance === null) {
      new BaseSubject$Event$OnComplete();
    }return BaseSubject$Event$OnComplete_instance;
  }
  function BaseSubject$Event$OnDispose(disposable) {
    BaseSubject$Event.call(this);
    this.disposable = disposable;
  }
  BaseSubject$Event$OnDispose.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnDispose',
    interfaces: [BaseSubject$Event]
  };
  BaseSubject$Event.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Event',
    interfaces: []
  };
  BaseSubject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseSubject',
    interfaces: [Subject]
  };
  function BehaviorSubject() {
  }
  BehaviorSubject.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BehaviorSubject',
    interfaces: [Subject]
  };
  function BehaviorSubject_0(initialValue) {
    return new BehaviorSubjectImpl(initialValue);
  }
  function BehaviorSubjectImpl(initialValue) {
    BaseSubject.call(this);
    this.value_45bkbx$_0 = atomic(initialValue);
  }
  var BehaviorSubjectImpl$value_metadata = new PropertyMetadata('value');
  Object.defineProperty(BehaviorSubjectImpl.prototype, 'value', {
    configurable: true,
    get: function () {
      return getValue(this.value_45bkbx$_0, this, BehaviorSubjectImpl$value_metadata);
    },
    set: function (value) {
      setValue(this.value_45bkbx$_0, this, BehaviorSubjectImpl$value_metadata, value);
    }
  });
  BehaviorSubjectImpl.prototype.onAfterSubscribe_jhhz7r$ = function (observer) {
    BaseSubject.prototype.onAfterSubscribe_jhhz7r$.call(this, observer);
    observer.onNext(this.value);
  };
  BehaviorSubjectImpl.prototype.onBeforeNext_11rb$ = function (value) {
    BaseSubject.prototype.onBeforeNext_11rb$.call(this, value);
    this.value = value;
  };
  BehaviorSubjectImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BehaviorSubjectImpl',
    interfaces: [BehaviorSubject, BaseSubject]
  };
  var Disposable$ObjectLiteral$isDisposed_metadata = new PropertyMetadata('isDisposed');
  var Disposable_0 = defineInlineFunction('MVIKotlin-rx-internal-js-legacy.com.arkivanov.mvikotlin.rx.internal.Disposable_t3gkq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var getValue = _.$$importsForInline$$['MVIKotlin-utils-internal-js-legacy'].com.arkivanov.mvikotlin.utils.internal.getValue_iv1vl5$;
    var setValue = _.$$importsForInline$$['MVIKotlin-utils-internal-js-legacy'].com.arkivanov.mvikotlin.utils.internal.setValue_vdyhaa$;
    var atomic = _.$$importsForInline$$['MVIKotlin-utils-internal-js-legacy'].com.arkivanov.mvikotlin.utils.internal.atomic_6taknv$;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Disposable = _.$$importsForInline$$['MVIKotlin-rx-js-legacy'].com.arkivanov.mvikotlin.rx.Disposable;
    function Disposable$lambda($receiver) {
      return Unit;
    }
    function Disposable$ObjectLiteral(closure$onDispose) {
      this.closure$onDispose = closure$onDispose;
      this.isDisposed_i9y4e$_0 = atomic(false);
    }
    Object.defineProperty(Disposable$ObjectLiteral.prototype, 'isDisposed', {
      configurable: true,
      get: function () {
        return getValue(this.isDisposed_i9y4e$_0, this, Disposable$ObjectLiteral$isDisposed_metadata);
      },
      set: function (isDisposed) {
        setValue(this.isDisposed_i9y4e$_0, this, Disposable$ObjectLiteral$isDisposed_metadata, isDisposed);
      }
    });
    Disposable$ObjectLiteral.prototype.dispose = function () {
      this.isDisposed = true;
      this.closure$onDispose(this);
    };
    Disposable$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [Disposable]
    };
    return function (onDispose) {
      if (onDispose === void 0)
        onDispose = Disposable$lambda;
      return new Disposable$ObjectLiteral(onDispose);
    };
  }));
  var synchronized = defineInlineFunction('MVIKotlin-rx-internal-js-legacy.com.arkivanov.mvikotlin.rx.internal.synchronized_dqqeel$', function ($receiver, block) {
    var tmp$;
    $receiver.lock();
    try {
      tmp$ = block();
    }finally {
      $receiver.unlock();
    }
    return tmp$;
  });
  function PublishSubject() {
  }
  PublishSubject.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PublishSubject',
    interfaces: [Subject]
  };
  function PublishSubject_0() {
    return new PublishSubjectImpl();
  }
  function PublishSubjectImpl() {
    BaseSubject.call(this);
  }
  PublishSubjectImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PublishSubjectImpl',
    interfaces: [PublishSubject, BaseSubject]
  };
  function Serializer(onValue) {
    this.onValue_0 = onValue;
    this.state_0 = atomic(new Serializer$State());
  }
  function Serializer$onNext$lambda(closure$value) {
    return function (it) {
      if (it.isDraining) {
        return it.copy_e2cujn$(plus_0(it.queue, closure$value));
      } else {
        return it.copy_e2cujn$(void 0, true);
      }
    };
  }
  Serializer.prototype.onNext_11rb$ = function (value) {
    var oldState = getAndUpdate(this.state_0, Serializer$onNext$lambda(value));
    if (!oldState.isDraining) {
      this.onValue_0(value);
      this.drain_0();
    }};
  function Serializer$drain$lambda(it) {
    if (!it.queue.isEmpty()) {
      return it.copy_e2cujn$(drop(it.queue, 1));
    } else {
      return it.copy_e2cujn$(void 0, false);
    }
  }
  Serializer.prototype.drain_0 = function () {
    while (true) {
      var oldState = getAndUpdate(this.state_0, Serializer$drain$lambda);
      if (oldState.queue.isEmpty()) {
        break;
      }this.onValue_0(first(oldState.queue));
    }
  };
  function Serializer$State(queue, isDraining) {
    if (queue === void 0)
      queue = emptyList();
    if (isDraining === void 0)
      isDraining = false;
    this.queue = queue;
    this.isDraining = isDraining;
  }
  Serializer$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  Serializer$State.prototype.component1 = function () {
    return this.queue;
  };
  Serializer$State.prototype.component2 = function () {
    return this.isDraining;
  };
  Serializer$State.prototype.copy_e2cujn$ = function (queue, isDraining) {
    return new Serializer$State(queue === void 0 ? this.queue : queue, isDraining === void 0 ? this.isDraining : isDraining);
  };
  Serializer$State.prototype.toString = function () {
    return 'State(queue=' + Kotlin.toString(this.queue) + (', isDraining=' + Kotlin.toString(this.isDraining)) + ')';
  };
  Serializer$State.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.queue) | 0;
    result = result * 31 + Kotlin.hashCode(this.isDraining) | 0;
    return result;
  };
  Serializer$State.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.queue, other.queue) && Kotlin.equals(this.isDraining, other.isDraining)))));
  };
  Serializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Serializer',
    interfaces: []
  };
  function Subject() {
  }
  Subject.prototype.onNext = function (value) {
  };
  Subject.prototype.onComplete = function () {
  };
  Subject.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Subject',
    interfaces: [Observer]
  };
  function Lock() {
  }
  Lock.prototype.lock = function () {
  };
  Lock.prototype.unlock = function () {
  };
  Lock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Lock',
    interfaces: []
  };
  $$importsForInline$$['MVIKotlin-rx-internal-js-legacy'] = _;
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$mvikotlin = package$arkivanov.mvikotlin || (package$arkivanov.mvikotlin = {});
  var package$rx = package$mvikotlin.rx || (package$mvikotlin.rx = {});
  var package$internal = package$rx.internal || (package$rx.internal = {});
  package$internal.BaseSubject = BaseSubject;
  package$internal.BehaviorSubject = BehaviorSubject;
  package$internal.BehaviorSubject_mh5how$ = BehaviorSubject_0;
  $$importsForInline$$['MVIKotlin-utils-internal-js-legacy'] = $module$MVIKotlin_utils_internal_js_legacy;
  $$importsForInline$$['MVIKotlin-rx-js-legacy'] = $module$MVIKotlin_rx_js_legacy;
  package$internal.Disposable_t3gkq$ = Disposable_0;
  package$internal.synchronized_dqqeel$ = synchronized;
  package$internal.PublishSubject = PublishSubject;
  package$internal.PublishSubject_287e2$ = PublishSubject_0;
  package$internal.Serializer = Serializer;
  package$internal.Subject = Subject;
  package$internal.Lock = Lock;
  BehaviorSubject.prototype.onNext = Subject.prototype.onNext;
  BehaviorSubject.prototype.onComplete = Subject.prototype.onComplete;
  PublishSubject.prototype.onNext = Subject.prototype.onNext;
  PublishSubject.prototype.onComplete = Subject.prototype.onComplete;
  Kotlin.defineModule('MVIKotlin-rx-internal-js-legacy', _);
  return _;
}));

//# sourceMappingURL=MVIKotlin-rx-internal-js-legacy.js.map
