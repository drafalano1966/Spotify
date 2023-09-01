(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-coroutines-core', 'sqldelight-runtime-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'), require('sqldelight-runtime-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'sqldelight-coroutines-extensions-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'sqldelight-coroutines-extensions-js-legacy'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'sqldelight-coroutines-extensions-js-legacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'sqldelight-coroutines-extensions-js-legacy'.");
    }if (typeof this['sqldelight-runtime-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'sqldelight-coroutines-extensions-js-legacy'. Its dependency 'sqldelight-runtime-js-legacy' was not found. Please, check whether 'sqldelight-runtime-js-legacy' is loaded prior to 'sqldelight-coroutines-extensions-js-legacy'.");
    }root['sqldelight-coroutines-extensions-js-legacy'] = factory(typeof this['sqldelight-coroutines-extensions-js-legacy'] === 'undefined' ? {} : this['sqldelight-coroutines-extensions-js-legacy'], kotlin, this['kotlinx-coroutines-core'], this['sqldelight-runtime-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlinx_coroutines_core, $module$sqldelight_runtime_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_lsve6m$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Query$Listener = $module$sqldelight_runtime_js_legacy.com.squareup.sqldelight.Query.Listener;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var flow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.flow_sxz0o1$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var withContext = $module$kotlinx_coroutines_core.kotlinx.coroutines.withContext_i5cbzn$;
  var wrapFunction = Kotlin.wrapFunction;
  var Flow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.Flow;
  function unsafeFlow$ObjectLiteral(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$.prototype.constructor = Coroutine$collect_42ocv1$;
  Coroutine$collect_42ocv1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.closure$block(this.local$collector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
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
  unsafeFlow$ObjectLiteral.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow]};
  function Coroutine$unsafeTransform$lambda$lambda(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda;
  Coroutine$unsafeTransform$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$this$, this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function unsafeTransform$lambda$lambda(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var unsafeTransform$lambda = wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var FlowCollector = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.FlowCollector;
    function collect$ObjectLiteral(closure$action) {
      this.closure$action = closure$action;
    }
    collect$ObjectLiteral.prototype.emit_11rb$ = function (value, continuation) {
      return this.closure$action(value, continuation);
    };
    collect$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
    function Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$closure$transform = closure$transform_0;
      this.local$this$unsafeTransform = this$unsafeTransform_0;
      this.local$$receiver = $receiver_0;
    }
    Coroutine$unsafeTransform$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$unsafeTransform$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$unsafeTransform$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda;
    Coroutine$unsafeTransform$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda(this.local$closure$transform, this.local$$receiver)), this);
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
    return function (closure$transform_0, this$unsafeTransform_0) {
      return function ($receiver_0, continuation_0, suspended) {
        var instance = new Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    };
  });
  function Coroutine$map$lambda(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$map$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$map$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map$lambda.prototype.constructor = Coroutine$map$lambda;
  Coroutine$map$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.emit_11rb$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
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
  function map$lambda(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$map$lambda(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function unsafeFlow$ObjectLiteral_0(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$_0($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$_0.prototype.constructor = Coroutine$collect_42ocv1$_0;
  Coroutine$collect_42ocv1$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.closure$block(this.local$collector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
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
  unsafeFlow$ObjectLiteral_0.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$_0(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow]};
  function Coroutine$unsafeTransform$lambda$lambda_0(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda_0.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda_0;
  Coroutine$unsafeTransform$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$this$, this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function unsafeTransform$lambda$lambda_0(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda_0(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var unsafeTransform$lambda_0 = wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var FlowCollector = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.FlowCollector;
    function collect$ObjectLiteral(closure$action) {
      this.closure$action = closure$action;
    }
    collect$ObjectLiteral.prototype.emit_11rb$ = function (value, continuation) {
      return this.closure$action(value, continuation);
    };
    collect$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
    function Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$closure$transform = closure$transform_0;
      this.local$this$unsafeTransform = this$unsafeTransform_0;
      this.local$$receiver = $receiver_0;
    }
    Coroutine$unsafeTransform$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$unsafeTransform$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$unsafeTransform$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda;
    Coroutine$unsafeTransform$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda_0(this.local$closure$transform, this.local$$receiver)), this);
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
    return function (closure$transform_0, this$unsafeTransform_0) {
      return function ($receiver_0, continuation_0, suspended) {
        var instance = new Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    };
  });
  function Coroutine$mapNotNull$lambda(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$mapNotNull$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$mapNotNull$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapNotNull$lambda.prototype.constructor = Coroutine$mapNotNull$lambda;
  Coroutine$mapNotNull$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            if (this.local$tmp$ == null) {
              return;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            var transformed = this.local$tmp$;
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.emit_11rb$(transformed, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  function mapNotNull$lambda(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$mapNotNull$lambda(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function asFlow$lambda$ObjectLiteral(closure$channel) {
    this.closure$channel = closure$channel;
  }
  asFlow$lambda$ObjectLiteral.prototype.queryResultsChanged = function () {
    this.closure$channel.trySend_11rb$(Unit);
  };
  asFlow$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Query$Listener]
  };
  function Coroutine$asFlow$lambda(this$asFlow_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 9;
    this.local$this$asFlow = this$asFlow_0;
    this.local$tmp$ = void 0;
    this.local$listener = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$asFlow$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$asFlow$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$asFlow$lambda.prototype.constructor = Coroutine$asFlow$lambda;
  Coroutine$asFlow$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var channel = Channel(-1);
            channel.trySend_11rb$(Unit);
            this.local$listener = new asFlow$lambda$ObjectLiteral(channel);
            this.local$this$asFlow.addListener_oql060$(this.local$listener);
            this.exceptionState_0 = 7;
            this.local$tmp$ = channel.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            this.state_0 = 2;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            if (!this.result_0) {
              this.state_0 = 5;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            var item = this.local$tmp$.next();
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.emit_11rb$(this.local$this$asFlow, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            this.finallyPath_0 = [6];
            this.state_0 = 8;
            continue;
          case 6:
            return Unit;
          case 7:
            this.finallyPath_0 = [9];
            this.state_0 = 8;
            continue;
          case 8:
            this.exceptionState_0 = 9;
            this.local$this$asFlow.removeListener_oql060$(this.local$listener);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 9:
            throw this.exception_0;
          default:this.state_0 = 9;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 9) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function asFlow$lambda(this$asFlow_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$asFlow$lambda(this$asFlow_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function asFlow($receiver) {
    return flow(asFlow$lambda($receiver));
  }
  function Coroutine$mapToOne$lambda$lambda(closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$mapToOne$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapToOne$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapToOne$lambda$lambda.prototype.constructor = Coroutine$mapToOne$lambda$lambda;
  Coroutine$mapToOne$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$it.executeAsOne();
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
  function mapToOne$lambda$lambda(closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$mapToOne$lambda$lambda(closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$mapToOne$lambda(closure$context_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$context = closure$context_0;
    this.local$it = it_0;
  }
  Coroutine$mapToOne$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapToOne$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapToOne$lambda.prototype.constructor = Coroutine$mapToOne$lambda;
  Coroutine$mapToOne$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = withContext(this.local$closure$context, mapToOne$lambda$lambda(this.local$it), this);
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
  function mapToOne$lambda(closure$context_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$mapToOne$lambda(closure$context_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function mapToOne($receiver, context) {
    if (context === void 0)
      context = coroutines.Dispatchers.Default;
    return new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(mapToOne$lambda(context)), $receiver));
  }
  function Coroutine$mapToOneOrDefault$lambda$lambda(closure$it_0, closure$defaultValue_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$closure$defaultValue = closure$defaultValue_0;
  }
  Coroutine$mapToOneOrDefault$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapToOneOrDefault$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapToOneOrDefault$lambda$lambda.prototype.constructor = Coroutine$mapToOneOrDefault$lambda$lambda;
  Coroutine$mapToOneOrDefault$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            return (tmp$ = this.local$closure$it.executeAsOneOrNull()) != null ? tmp$ : this.local$closure$defaultValue;
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
  function mapToOneOrDefault$lambda$lambda(closure$it_0, closure$defaultValue_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$mapToOneOrDefault$lambda$lambda(closure$it_0, closure$defaultValue_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$mapToOneOrDefault$lambda(closure$context_0, closure$defaultValue_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$context = closure$context_0;
    this.local$closure$defaultValue = closure$defaultValue_0;
    this.local$it = it_0;
  }
  Coroutine$mapToOneOrDefault$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapToOneOrDefault$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapToOneOrDefault$lambda.prototype.constructor = Coroutine$mapToOneOrDefault$lambda;
  Coroutine$mapToOneOrDefault$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = withContext(this.local$closure$context, mapToOneOrDefault$lambda$lambda(this.local$it, this.local$closure$defaultValue), this);
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
  function mapToOneOrDefault$lambda(closure$context_0, closure$defaultValue_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$mapToOneOrDefault$lambda(closure$context_0, closure$defaultValue_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function mapToOneOrDefault($receiver, defaultValue, context) {
    if (context === void 0)
      context = coroutines.Dispatchers.Default;
    return new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(mapToOneOrDefault$lambda(context, defaultValue)), $receiver));
  }
  function Coroutine$mapToOneOrNull$lambda$lambda(closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$mapToOneOrNull$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapToOneOrNull$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapToOneOrNull$lambda$lambda.prototype.constructor = Coroutine$mapToOneOrNull$lambda$lambda;
  Coroutine$mapToOneOrNull$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$it.executeAsOneOrNull();
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
  function mapToOneOrNull$lambda$lambda(closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$mapToOneOrNull$lambda$lambda(closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$mapToOneOrNull$lambda(closure$context_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$context = closure$context_0;
    this.local$it = it_0;
  }
  Coroutine$mapToOneOrNull$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapToOneOrNull$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapToOneOrNull$lambda.prototype.constructor = Coroutine$mapToOneOrNull$lambda;
  Coroutine$mapToOneOrNull$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = withContext(this.local$closure$context, mapToOneOrNull$lambda$lambda(this.local$it), this);
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
  function mapToOneOrNull$lambda(closure$context_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$mapToOneOrNull$lambda(closure$context_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function mapToOneOrNull($receiver, context) {
    if (context === void 0)
      context = coroutines.Dispatchers.Default;
    return new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(mapToOneOrNull$lambda(context)), $receiver));
  }
  function Coroutine$mapToOneNotNull$lambda$lambda(closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$mapToOneNotNull$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapToOneNotNull$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapToOneNotNull$lambda$lambda.prototype.constructor = Coroutine$mapToOneNotNull$lambda$lambda;
  Coroutine$mapToOneNotNull$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$it.executeAsOneOrNull();
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
  function mapToOneNotNull$lambda$lambda(closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$mapToOneNotNull$lambda$lambda(closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$mapToOneNotNull$lambda(closure$context_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$context = closure$context_0;
    this.local$it = it_0;
  }
  Coroutine$mapToOneNotNull$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapToOneNotNull$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapToOneNotNull$lambda.prototype.constructor = Coroutine$mapToOneNotNull$lambda;
  Coroutine$mapToOneNotNull$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = withContext(this.local$closure$context, mapToOneNotNull$lambda$lambda(this.local$it), this);
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
  function mapToOneNotNull$lambda(closure$context_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$mapToOneNotNull$lambda(closure$context_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function mapToOneNotNull($receiver, context) {
    if (context === void 0)
      context = coroutines.Dispatchers.Default;
    return new unsafeFlow$ObjectLiteral_0(unsafeTransform$lambda_0(mapNotNull$lambda(mapToOneNotNull$lambda(context)), $receiver));
  }
  function Coroutine$mapToList$lambda$lambda(closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$mapToList$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapToList$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapToList$lambda$lambda.prototype.constructor = Coroutine$mapToList$lambda$lambda;
  Coroutine$mapToList$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$it.executeAsList();
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
  function mapToList$lambda$lambda(closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$mapToList$lambda$lambda(closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$mapToList$lambda(closure$context_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$context = closure$context_0;
    this.local$it = it_0;
  }
  Coroutine$mapToList$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapToList$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapToList$lambda.prototype.constructor = Coroutine$mapToList$lambda;
  Coroutine$mapToList$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = withContext(this.local$closure$context, mapToList$lambda$lambda(this.local$it), this);
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
  function mapToList$lambda(closure$context_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$mapToList$lambda(closure$context_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function mapToList($receiver, context) {
    if (context === void 0)
      context = coroutines.Dispatchers.Default;
    return new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(mapToList$lambda(context)), $receiver));
  }
  var package$com = _.com || (_.com = {});
  var package$squareup = package$com.squareup || (package$com.squareup = {});
  var package$sqldelight = package$squareup.sqldelight || (package$squareup.sqldelight = {});
  var package$runtime = package$sqldelight.runtime || (package$sqldelight.runtime = {});
  var package$coroutines = package$runtime.coroutines || (package$runtime.coroutines = {});
  package$coroutines.asFlow_l67ndn$ = asFlow;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$coroutines.mapToOne_rznlxh$ = mapToOne;
  package$coroutines.mapToOneOrDefault_2ld8i3$ = mapToOneOrDefault;
  package$coroutines.mapToOneOrNull_rznlxh$ = mapToOneOrNull;
  package$coroutines.mapToOneNotNull_rznlxh$ = mapToOneNotNull;
  package$coroutines.mapToList_rznlxh$ = mapToList;
  Kotlin.defineModule('sqldelight-coroutines-extensions-js-legacy', _);
  return _;
}));

//# sourceMappingURL=sqldelight-coroutines-extensions-js-legacy.js.map
