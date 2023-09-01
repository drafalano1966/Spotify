(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-coroutines-core', 'MVIKotlin-mvikotlin-js-legacy', 'MVIKotlin-utils-internal-js-legacy', 'MVIKotlin-rx-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'), require('MVIKotlin-mvikotlin-js-legacy'), require('MVIKotlin-utils-internal-js-legacy'), require('MVIKotlin-rx-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-extensions-coroutines-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MVIKotlin-mvikotlin-extensions-coroutines-js-legacy'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-extensions-coroutines-js-legacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'MVIKotlin-mvikotlin-extensions-coroutines-js-legacy'.");
    }if (typeof this['MVIKotlin-mvikotlin-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-extensions-coroutines-js-legacy'. Its dependency 'MVIKotlin-mvikotlin-js-legacy' was not found. Please, check whether 'MVIKotlin-mvikotlin-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-extensions-coroutines-js-legacy'.");
    }if (typeof this['MVIKotlin-utils-internal-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-extensions-coroutines-js-legacy'. Its dependency 'MVIKotlin-utils-internal-js-legacy' was not found. Please, check whether 'MVIKotlin-utils-internal-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-extensions-coroutines-js-legacy'.");
    }if (typeof this['MVIKotlin-rx-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-extensions-coroutines-js-legacy'. Its dependency 'MVIKotlin-rx-js-legacy' was not found. Please, check whether 'MVIKotlin-rx-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-extensions-coroutines-js-legacy'.");
    }root['MVIKotlin-mvikotlin-extensions-coroutines-js-legacy'] = factory(typeof this['MVIKotlin-mvikotlin-extensions-coroutines-js-legacy'] === 'undefined' ? {} : this['MVIKotlin-mvikotlin-extensions-coroutines-js-legacy'], kotlin, this['kotlinx-coroutines-core'], this['MVIKotlin-mvikotlin-js-legacy'], this['MVIKotlin-utils-internal-js-legacy'], this['MVIKotlin-rx-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlinx_coroutines_core, $module$MVIKotlin_mvikotlin_js_legacy, $module$MVIKotlin_utils_internal_js_legacy, $module$MVIKotlin_rx_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var attachTo = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.binder.attachTo_49wvml$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var assertOnMainThread = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.utils.assertOnMainThread;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var get_isActive = $module$kotlinx_coroutines_core.kotlinx.coroutines.get_isActive_e9pf1l$;
  var FlowCollector = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.FlowCollector;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Binder = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.binder.Binder;
  var initialize = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.initialize_1hlm9$;
  var requireValue = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.requireValue_2p8z43$;
  var cancel = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancel_q2ti5d$;
  var atomic = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.atomic_30y1fr$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope_1fupul$;
  var Bootstrapper = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.Bootstrapper;
  var Executor = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.Executor;
  var getCallableRef = Kotlin.getCallableRef;
  var observer = $module$MVIKotlin_rx_js_legacy.com.arkivanov.mvikotlin.rx.observer_jwhn2g$;
  var awaitClose = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.awaitClose_msfyrq$;
  var callbackFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.callbackFlow_b9ud7o$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  function bind(mainContext, builder) {
    if (mainContext === void 0)
      mainContext = coroutines.Dispatchers.Main;
    var $receiver = new BuilderBinder(mainContext);
    builder($receiver);
    return $receiver;
  }
  function bind_0(lifecycle, mode, mainContext, builder) {
    if (mainContext === void 0)
      mainContext = coroutines.Dispatchers.Main;
    return attachTo(bind(mainContext, builder), lifecycle, mode);
  }
  function BindingsBuilder() {
  }
  BindingsBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BindingsBuilder',
    interfaces: []
  };
  function BuilderBinder(mainContext) {
    this.mainContext_0 = mainContext;
    this.bindings_0 = ArrayList_init();
    this.job_0 = null;
  }
  BuilderBinder.prototype.bindTo_706ovd$ = function ($receiver, consumer) {
    var $receiver_0 = this.bindings_0;
    var element = new Binding($receiver, consumer);
    $receiver_0.add_11rb$(element);
  };
  function Coroutine$BuilderBinder$bindTo$lambda(closure$viewRenderer_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$viewRenderer = closure$viewRenderer_0;
    this.local$it = it_0;
  }
  Coroutine$BuilderBinder$bindTo$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuilderBinder$bindTo$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuilderBinder$bindTo$lambda.prototype.constructor = Coroutine$BuilderBinder$bindTo$lambda;
  Coroutine$BuilderBinder$bindTo$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            assertOnMainThread();
            return this.local$closure$viewRenderer.render(this.local$it), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BuilderBinder$bindTo$lambda(closure$viewRenderer_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$BuilderBinder$bindTo$lambda(closure$viewRenderer_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BuilderBinder.prototype.bindTo_kggmaz$ = function ($receiver, viewRenderer) {
    this.bindTo_706ovd$($receiver, BuilderBinder$bindTo$lambda(viewRenderer));
  };
  function Coroutine$BuilderBinder$bindTo$lambda_0(closure$store_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$store = closure$store_0;
    this.local$it = it_0;
  }
  Coroutine$BuilderBinder$bindTo$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuilderBinder$bindTo$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuilderBinder$bindTo$lambda_0.prototype.constructor = Coroutine$BuilderBinder$bindTo$lambda_0;
  Coroutine$BuilderBinder$bindTo$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$store.accept(this.local$it), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BuilderBinder$bindTo$lambda_0(closure$store_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$BuilderBinder$bindTo$lambda_0(closure$store_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BuilderBinder.prototype.bindTo_c242v8$ = function ($receiver, store) {
    this.bindTo_706ovd$($receiver, BuilderBinder$bindTo$lambda_0(store));
  };
  function Coroutine$BuilderBinder$start$lambda(this$BuilderBinder_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$BuilderBinder = this$BuilderBinder_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$BuilderBinder$start$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuilderBinder$start$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuilderBinder$start$lambda.prototype.constructor = Coroutine$BuilderBinder$start$lambda;
  Coroutine$BuilderBinder$start$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            tmp$ = this.local$this$BuilderBinder.bindings_0.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              this.local$this$BuilderBinder.start_0(this.local$$receiver, element);
            }

            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BuilderBinder$start$lambda(this$BuilderBinder_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$BuilderBinder$start$lambda(this$BuilderBinder_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BuilderBinder.prototype.start = function () {
    this.job_0 = launch(coroutines.GlobalScope, this.mainContext_0, void 0, BuilderBinder$start$lambda(this));
  };
  function Coroutine$BuilderBinder$start$lambda$lambda(this$_0, closure$binding_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$closure$binding = closure$binding_0;
    this.local$it = it_0;
  }
  Coroutine$BuilderBinder$start$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuilderBinder$start$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuilderBinder$start$lambda$lambda.prototype.constructor = Coroutine$BuilderBinder$start$lambda$lambda;
  Coroutine$BuilderBinder$start$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (get_isActive(this.local$this$)) {
              this.state_0 = 2;
              this.result_0 = this.local$closure$binding.consumer(this.local$it, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BuilderBinder$start$lambda$lambda(this$_0, closure$binding_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$BuilderBinder$start$lambda$lambda(this$_0, closure$binding_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuilderBinder$start$lambda_0(closure$binding_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$binding = closure$binding_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$BuilderBinder$start$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuilderBinder$start$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuilderBinder$start$lambda_0.prototype.constructor = Coroutine$BuilderBinder$start$lambda_0;
  Coroutine$BuilderBinder$start$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$binding.source.collect_42ocv1$(new FlowCollector(BuilderBinder$start$lambda$lambda(this.local$$receiver, this.local$closure$binding)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BuilderBinder$start$lambda_0(closure$binding_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$BuilderBinder$start$lambda_0(closure$binding_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BuilderBinder.prototype.start_0 = function ($receiver, binding) {
    launch($receiver, void 0, void 0, BuilderBinder$start$lambda_0(binding));
  };
  BuilderBinder.prototype.stop = function () {
    var tmp$;
    (tmp$ = this.job_0) != null ? (tmp$.cancel_x5z25k$(), Unit) : null;
    this.job_0 = null;
  };
  BuilderBinder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuilderBinder',
    interfaces: [Binder, BindingsBuilder]
  };
  function Binding(source, consumer) {
    this.source = source;
    this.consumer = consumer;
  }
  Binding.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Binding',
    interfaces: []
  };
  function CoroutineBootstrapper(mainContext) {
    if (mainContext === void 0)
      mainContext = coroutines.Dispatchers.Main;
    this.actionConsumer_no69oh$_0 = atomic();
    this.scope = CoroutineScope(mainContext);
  }
  CoroutineBootstrapper.prototype.init = function (actionConsumer) {
    initialize(this.actionConsumer_no69oh$_0, actionConsumer);
  };
  CoroutineBootstrapper.prototype.dispatch_trkh7z$ = function (action) {
    requireValue(this.actionConsumer_no69oh$_0)(action);
  };
  CoroutineBootstrapper.prototype.dispose = function () {
    cancel(this.scope);
  };
  CoroutineBootstrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoroutineBootstrapper',
    interfaces: [Bootstrapper]
  };
  function CoroutineExecutor(mainContext) {
    if (mainContext === void 0)
      mainContext = coroutines.Dispatchers.Main;
    this.callbacks_j92bit$_0 = atomic();
    this.getState_1dwt86$_0 = CoroutineExecutor$getState$lambda(this);
    this.scope = CoroutineScope(mainContext);
  }
  CoroutineExecutor.prototype.init = function (callbacks) {
    initialize(this.callbacks_j92bit$_0, callbacks);
  };
  CoroutineExecutor.prototype.executeIntent = function (intent) {
    this.executeIntent_233t6$(intent, this.getState_1dwt86$_0);
  };
  CoroutineExecutor.prototype.executeIntent_233t6$ = function (intent, getState) {
  };
  CoroutineExecutor.prototype.executeAction = function (action) {
    this.executeAction_bqodau$(action, this.getState_1dwt86$_0);
  };
  CoroutineExecutor.prototype.executeAction_bqodau$ = function (action, getState) {
  };
  CoroutineExecutor.prototype.dispose = function () {
    cancel(this.scope);
  };
  CoroutineExecutor.prototype.dispatch_bbkuyd$ = function (message) {
    requireValue(this.callbacks_j92bit$_0).onMessage(message);
  };
  CoroutineExecutor.prototype.publish_sumc6v$ = function (label) {
    requireValue(this.callbacks_j92bit$_0).onLabel(label);
  };
  function CoroutineExecutor$getState$lambda(this$CoroutineExecutor) {
    return function () {
      return requireValue(this$CoroutineExecutor.callbacks_j92bit$_0).state;
    };
  }
  CoroutineExecutor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoroutineExecutor',
    interfaces: [Executor]
  };
  function toFlow$lambda$lambda(this$) {
    return function () {
      this$.channel.close_dbl4no$();
      return Unit;
    };
  }
  function toFlow$lambda$lambda_0(this$) {
    return function (it) {
      this$.channel.trySend_11rb$(it);
      return Unit;
    };
  }
  function Coroutine$toFlow$lambda(closure$subscribe_0, this$toFlow_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$subscribe = closure$subscribe_0;
    this.local$this$toFlow = this$toFlow_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toFlow$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toFlow$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toFlow$lambda.prototype.constructor = Coroutine$toFlow$lambda;
  Coroutine$toFlow$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var disposable = this.local$closure$subscribe(this.local$this$toFlow, observer(toFlow$lambda$lambda(this.local$$receiver), toFlow$lambda$lambda_0(this.local$$receiver)));
            this.state_0 = 2;
            this.result_0 = awaitClose(this.local$$receiver, getCallableRef('dispose', function ($receiver) {
              return $receiver.dispose(), Unit;
            }.bind(null, disposable)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toFlow$lambda(closure$subscribe_0, this$toFlow_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$toFlow$lambda(closure$subscribe_0, this$toFlow_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function get_states($receiver) {
    return callbackFlow(toFlow$lambda(getCallableRef('states', function ($receiver, p1) {
      return $receiver.states(p1);
    }), $receiver));
  }
  function get_labels($receiver) {
    return callbackFlow(toFlow$lambda(getCallableRef('labels', function ($receiver, p1) {
      return $receiver.labels(p1);
    }), $receiver));
  }
  function SuspendBootstrapper(mainContext) {
    if (mainContext === void 0)
      mainContext = coroutines.Dispatchers.Main;
    this.actionConsumer_wnptaz$_0 = atomic();
    this.scope_yu7ox$_0 = CoroutineScope(mainContext);
  }
  SuspendBootstrapper.prototype.init = function (actionConsumer) {
    initialize(this.actionConsumer_wnptaz$_0, actionConsumer);
  };
  SuspendBootstrapper.prototype.dispatch_trkh7z$ = function (action) {
    requireValue(this.actionConsumer_wnptaz$_0)(action);
  };
  function Coroutine$SuspendBootstrapper$invoke$lambda(this$SuspendBootstrapper_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$SuspendBootstrapper = this$SuspendBootstrapper_0;
  }
  Coroutine$SuspendBootstrapper$invoke$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SuspendBootstrapper$invoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SuspendBootstrapper$invoke$lambda.prototype.constructor = Coroutine$SuspendBootstrapper$invoke$lambda;
  Coroutine$SuspendBootstrapper$invoke$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$SuspendBootstrapper.bootstrap(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function SuspendBootstrapper$invoke$lambda(this$SuspendBootstrapper_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SuspendBootstrapper$invoke$lambda(this$SuspendBootstrapper_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SuspendBootstrapper.prototype.invoke = function () {
    launch(this.scope_yu7ox$_0, void 0, void 0, SuspendBootstrapper$invoke$lambda(this));
  };
  SuspendBootstrapper.prototype.dispose = function () {
    cancel(this.scope_yu7ox$_0);
  };
  SuspendBootstrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SuspendBootstrapper',
    interfaces: [Bootstrapper]
  };
  function SuspendExecutor(mainContext) {
    if (mainContext === void 0)
      mainContext = coroutines.Dispatchers.Main;
    this.callbacks_hsk49b$_0 = atomic();
    this.getState_rayihy$_0 = SuspendExecutor$getState$lambda(this);
    this.scope_axk7o5$_0 = CoroutineScope(mainContext);
  }
  SuspendExecutor.prototype.init = function (callbacks) {
    initialize(this.callbacks_hsk49b$_0, callbacks);
  };
  function Coroutine$SuspendExecutor$executeIntent$lambda(closure$intent_0, this$SuspendExecutor_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$intent = closure$intent_0;
    this.local$this$SuspendExecutor = this$SuspendExecutor_0;
  }
  Coroutine$SuspendExecutor$executeIntent$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SuspendExecutor$executeIntent$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SuspendExecutor$executeIntent$lambda.prototype.constructor = Coroutine$SuspendExecutor$executeIntent$lambda;
  Coroutine$SuspendExecutor$executeIntent$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$SuspendExecutor.executeIntent_233t6$(this.local$closure$intent, this.local$this$SuspendExecutor.getState_rayihy$_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function SuspendExecutor$executeIntent$lambda(closure$intent_0, this$SuspendExecutor_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SuspendExecutor$executeIntent$lambda(closure$intent_0, this$SuspendExecutor_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SuspendExecutor.prototype.executeIntent = function (intent) {
    launch(this.scope_axk7o5$_0, void 0, void 0, SuspendExecutor$executeIntent$lambda(intent, this));
  };
  SuspendExecutor.prototype.executeIntent_233t6$ = function (intent, getState, continuation) {
  };
  function Coroutine$SuspendExecutor$executeAction$lambda(closure$action_0, this$SuspendExecutor_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$action = closure$action_0;
    this.local$this$SuspendExecutor = this$SuspendExecutor_0;
  }
  Coroutine$SuspendExecutor$executeAction$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SuspendExecutor$executeAction$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SuspendExecutor$executeAction$lambda.prototype.constructor = Coroutine$SuspendExecutor$executeAction$lambda;
  Coroutine$SuspendExecutor$executeAction$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$SuspendExecutor.executeAction_bqodau$(this.local$closure$action, this.local$this$SuspendExecutor.getState_rayihy$_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function SuspendExecutor$executeAction$lambda(closure$action_0, this$SuspendExecutor_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SuspendExecutor$executeAction$lambda(closure$action_0, this$SuspendExecutor_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SuspendExecutor.prototype.executeAction = function (action) {
    launch(this.scope_axk7o5$_0, void 0, void 0, SuspendExecutor$executeAction$lambda(action, this));
  };
  SuspendExecutor.prototype.executeAction_bqodau$ = function (action, getState, continuation) {
  };
  SuspendExecutor.prototype.dispose = function () {
    cancel(this.scope_axk7o5$_0);
  };
  SuspendExecutor.prototype.dispatch_bbkuyd$ = function (message) {
    requireValue(this.callbacks_hsk49b$_0).onMessage(message);
  };
  SuspendExecutor.prototype.publish_sumc6v$ = function (label) {
    requireValue(this.callbacks_hsk49b$_0).onLabel(label);
  };
  function SuspendExecutor$getState$lambda(this$SuspendExecutor) {
    return function () {
      return requireValue(this$SuspendExecutor.callbacks_hsk49b$_0).state;
    };
  }
  SuspendExecutor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SuspendExecutor',
    interfaces: [Executor]
  };
  var toFlow = defineInlineFunction('MVIKotlin-mvikotlin-extensions-coroutines-js-legacy.com.arkivanov.mvikotlin.extensions.coroutines.toFlow_fy6tx9$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var observer = _.$$importsForInline$$['MVIKotlin-rx-js-legacy'].com.arkivanov.mvikotlin.rx.observer_jwhn2g$;
    var getCallableRef = Kotlin.getCallableRef;
    var awaitClose = _.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.channels.awaitClose_msfyrq$;
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var callbackFlow = _.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.flow.callbackFlow_b9ud7o$;
    function toFlow$lambda$lambda(this$) {
      return function () {
        this$.channel.close_dbl4no$();
        return Unit;
      };
    }
    function toFlow$lambda$lambda_0(this$) {
      return function (it) {
        this$.channel.trySend_11rb$(it);
        return Unit;
      };
    }
    function Coroutine$toFlow$lambda(closure$subscribe_0, this$toFlow_0, $receiver_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$closure$subscribe = closure$subscribe_0;
      this.local$this$toFlow = this$toFlow_0;
      this.local$$receiver = $receiver_0;
    }
    Coroutine$toFlow$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$toFlow$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$toFlow$lambda.prototype.constructor = Coroutine$toFlow$lambda;
    Coroutine$toFlow$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              var disposable = this.local$closure$subscribe(this.local$this$toFlow, observer(toFlow$lambda$lambda(this.local$$receiver), toFlow$lambda$lambda_0(this.local$$receiver)));
              this.state_0 = 2;
              this.result_0 = awaitClose(this.local$$receiver, getCallableRef('dispose', function ($receiver) {
                return $receiver.dispose(), Unit;
              }.bind(null, disposable)), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        } catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          } else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function toFlow$lambda(closure$subscribe_0, this$toFlow_0) {
      return function ($receiver_0, continuation_0, suspended) {
        var instance = new Coroutine$toFlow$lambda(closure$subscribe_0, this$toFlow_0, $receiver_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    return function ($receiver, subscribe) {
      return callbackFlow(toFlow$lambda(subscribe, $receiver));
    };
  }));
  function toFlow$lambda$lambda_1(this$) {
    return function () {
      this$.channel.close_dbl4no$();
      return Unit;
    };
  }
  function toFlow$lambda$lambda_2(this$) {
    return function (it) {
      this$.channel.trySend_11rb$(it);
      return Unit;
    };
  }
  function Coroutine$toFlow$lambda_0(closure$subscribe_0, this$toFlow_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$subscribe = closure$subscribe_0;
    this.local$this$toFlow = this$toFlow_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toFlow$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toFlow$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toFlow$lambda_0.prototype.constructor = Coroutine$toFlow$lambda_0;
  Coroutine$toFlow$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var disposable = this.local$closure$subscribe(this.local$this$toFlow, observer(toFlow$lambda$lambda_1(this.local$$receiver), toFlow$lambda$lambda_2(this.local$$receiver)));
            this.state_0 = 2;
            this.result_0 = awaitClose(this.local$$receiver, getCallableRef('dispose', function ($receiver) {
              return $receiver.dispose(), Unit;
            }.bind(null, disposable)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toFlow$lambda_0(closure$subscribe_0, this$toFlow_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$toFlow$lambda_0(closure$subscribe_0, this$toFlow_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function get_events($receiver) {
    return callbackFlow(toFlow$lambda_0(getCallableRef('events', function ($receiver, p1) {
      return $receiver.events(p1);
    }), $receiver));
  }
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$mvikotlin = package$arkivanov.mvikotlin || (package$arkivanov.mvikotlin = {});
  var package$extensions = package$mvikotlin.extensions || (package$mvikotlin.extensions = {});
  var package$coroutines = package$extensions.coroutines || (package$extensions.coroutines = {});
  package$coroutines.bind_bjgpxj$ = bind;
  package$coroutines.bind_n6n3wt$ = bind_0;
  package$coroutines.BindingsBuilder = BindingsBuilder;
  package$coroutines.CoroutineBootstrapper = CoroutineBootstrapper;
  package$coroutines.CoroutineExecutor = CoroutineExecutor;
  $$importsForInline$$['MVIKotlin-mvikotlin-extensions-coroutines-js-legacy'] = _;
  package$coroutines.get_states_xvg8xv$ = get_states;
  package$coroutines.get_labels_12iif3$ = get_labels;
  package$coroutines.SuspendBootstrapper = SuspendBootstrapper;
  package$coroutines.SuspendExecutor = SuspendExecutor;
  $$importsForInline$$['MVIKotlin-rx-js-legacy'] = $module$MVIKotlin_rx_js_legacy;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$coroutines.toFlow_fy6tx9$ = toFlow;
  package$coroutines.get_events_a8b4ye$ = get_events;
  Kotlin.defineModule('MVIKotlin-mvikotlin-extensions-coroutines-js-legacy', _);
  return _;
}));

//# sourceMappingURL=MVIKotlin-mvikotlin-extensions-coroutines-js-legacy.js.map
