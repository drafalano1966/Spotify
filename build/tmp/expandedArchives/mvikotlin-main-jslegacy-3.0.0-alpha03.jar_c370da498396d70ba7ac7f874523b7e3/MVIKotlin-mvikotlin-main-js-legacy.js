(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'MVIKotlin-mvikotlin-js-legacy', 'MVIKotlin-rx-js-legacy', 'MVIKotlin-rx-internal-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('MVIKotlin-mvikotlin-js-legacy'), require('MVIKotlin-rx-js-legacy'), require('MVIKotlin-rx-internal-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-main-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MVIKotlin-mvikotlin-main-js-legacy'.");
    }if (typeof this['MVIKotlin-mvikotlin-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-main-js-legacy'. Its dependency 'MVIKotlin-mvikotlin-js-legacy' was not found. Please, check whether 'MVIKotlin-mvikotlin-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-main-js-legacy'.");
    }if (typeof this['MVIKotlin-rx-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-main-js-legacy'. Its dependency 'MVIKotlin-rx-js-legacy' was not found. Please, check whether 'MVIKotlin-rx-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-main-js-legacy'.");
    }if (typeof this['MVIKotlin-rx-internal-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-main-js-legacy'. Its dependency 'MVIKotlin-rx-internal-js-legacy' was not found. Please, check whether 'MVIKotlin-rx-internal-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-main-js-legacy'.");
    }root['MVIKotlin-mvikotlin-main-js-legacy'] = factory(typeof this['MVIKotlin-mvikotlin-main-js-legacy'] === 'undefined' ? {} : this['MVIKotlin-mvikotlin-main-js-legacy'], kotlin, this['MVIKotlin-mvikotlin-js-legacy'], this['MVIKotlin-rx-js-legacy'], this['MVIKotlin-rx-internal-js-legacy']);
  }
}(this, function (_, Kotlin, $module$MVIKotlin_mvikotlin_js_legacy, $module$MVIKotlin_rx_js_legacy, $module$MVIKotlin_rx_internal_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var assertOnMainThread = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.utils.assertOnMainThread;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var observer = $module$MVIKotlin_rx_js_legacy.com.arkivanov.mvikotlin.rx.observer_jwhn2g$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Executor$Callbacks = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.Executor.Callbacks;
  var PublishSubject = $module$MVIKotlin_rx_internal_js_legacy.com.arkivanov.mvikotlin.rx.internal.PublishSubject_287e2$;
  var BehaviorSubject = $module$MVIKotlin_rx_internal_js_legacy.com.arkivanov.mvikotlin.rx.internal.BehaviorSubject_mh5how$;
  var Store = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.Store;
  var StoreFactory = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.StoreFactory;
  function DefaultStore(initialState, bootstrapper, executor, reducer) {
    this.bootstrapper_0 = bootstrapper;
    this.executor_0 = executor;
    this.reducer_0 = reducer;
    this.intentSubject_0 = PublishSubject();
    this.stateSubject_0 = BehaviorSubject(initialState);
    this.labelSubject_0 = PublishSubject();
  }
  Object.defineProperty(DefaultStore.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.stateSubject_0.value;
    }
  });
  Object.defineProperty(DefaultStore.prototype, 'isDisposed', {
    configurable: true,
    get: function () {
      return !this.stateSubject_0.isActive;
    }
  });
  function DefaultStore$init$ObjectLiteral(this$DefaultStore) {
    this.this$DefaultStore = this$DefaultStore;
  }
  Object.defineProperty(DefaultStore$init$ObjectLiteral.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.this$DefaultStore.stateSubject_0.value;
    }
  });
  DefaultStore$init$ObjectLiteral.prototype.onMessage = function (message) {
    assertOnMainThread();
    var $this = this.this$DefaultStore;
    this.this$DefaultStore;
    if (!$this.isDisposed) {
      var this$DefaultStore = this.this$DefaultStore;
      this$DefaultStore.stateSubject_0.onNext(this$DefaultStore.reducer_0.reduce(this$DefaultStore.stateSubject_0.value, message));
    }};
  DefaultStore$init$ObjectLiteral.prototype.onLabel = function (label) {
    assertOnMainThread();
    this.this$DefaultStore.labelSubject_0.onNext(label);
  };
  DefaultStore$init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Executor$Callbacks]
  };
  function DefaultStore$init$lambda(this$DefaultStore) {
    return function (action) {
      assertOnMainThread();
      var $this = this$DefaultStore;
      if (!$this.isDisposed) {
        this$DefaultStore.executor_0.executeAction(action);
      }return Unit;
    };
  }
  DefaultStore.prototype.init = function () {
    var tmp$, tmp$_0;
    assertOnMainThread();
    this.intentSubject_0.subscribe(observer(void 0, getCallableRef('onIntent', function ($receiver, p1) {
      return $receiver.onIntent_0(p1), Unit;
    }.bind(null, this))));
    this.executor_0.init(new DefaultStore$init$ObjectLiteral(this));
    (tmp$ = this.bootstrapper_0) != null ? (tmp$.init(DefaultStore$init$lambda(this)), Unit) : null;
    (tmp$_0 = this.bootstrapper_0) != null ? (tmp$_0.invoke(), Unit) : null;
  };
  DefaultStore.prototype.changeState_0 = function (func) {
    this.stateSubject_0.onNext(func(this.stateSubject_0.value));
  };
  DefaultStore.prototype.states = function (observer) {
    return this.stateSubject_0.subscribe(observer);
  };
  DefaultStore.prototype.labels = function (observer) {
    return this.labelSubject_0.subscribe(observer);
  };
  DefaultStore.prototype.accept = function (intent) {
    assertOnMainThread();
    this.intentSubject_0.onNext(intent);
  };
  DefaultStore.prototype.onIntent_0 = function (intent) {
    if (!this.isDisposed) {
      this.executor_0.executeIntent(intent);
    }};
  DefaultStore.prototype.dispose = function () {
    assertOnMainThread();
    if (!this.isDisposed) {
      var tmp$;
      (tmp$ = this.bootstrapper_0) != null ? (tmp$.dispose(), Unit) : null;
      this.executor_0.dispose();
      this.intentSubject_0.onComplete();
      this.stateSubject_0.onComplete();
      this.labelSubject_0.onComplete();
    }};
  DefaultStore.prototype.doIfNotDisposed_0 = function (block) {
    if (!this.isDisposed) {
      block();
    }};
  DefaultStore.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultStore',
    interfaces: [Store]
  };
  function DefaultStoreFactory() {
  }
  DefaultStoreFactory.prototype.create$default = function (name, isAutoInit, initialState, bootstrapper, executorFactory, reducer) {
    var $receiver = new DefaultStore(initialState, bootstrapper, executorFactory(), reducer);
    if (isAutoInit) {
      $receiver.init();
    }return $receiver;
  };
  DefaultStoreFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultStoreFactory',
    interfaces: [StoreFactory]
  };
  $$importsForInline$$['MVIKotlin-mvikotlin-main-js-legacy'] = _;
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$mvikotlin = package$arkivanov.mvikotlin || (package$arkivanov.mvikotlin = {});
  var package$main = package$mvikotlin.main || (package$mvikotlin.main = {});
  var package$store = package$main.store || (package$main.store = {});
  package$store.DefaultStore = DefaultStore;
  package$store.DefaultStoreFactory = DefaultStoreFactory;
  DefaultStoreFactory.prototype.create = StoreFactory.prototype.create;
  Kotlin.defineModule('MVIKotlin-mvikotlin-main-js-legacy', _);
  return _;
}));

//# sourceMappingURL=MVIKotlin-mvikotlin-main-js-legacy.js.map
