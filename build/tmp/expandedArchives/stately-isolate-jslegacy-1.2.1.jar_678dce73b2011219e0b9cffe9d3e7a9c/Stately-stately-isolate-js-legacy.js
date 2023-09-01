(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Stately-stately-isolate-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Stately-stately-isolate-js-legacy'.");
    }root['Stately-stately-isolate-js-legacy'] = factory(typeof this['Stately-stately-isolate-js-legacy'] === 'undefined' ? {} : this['Stately-stately-isolate-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  Ok.prototype = Object.create(RunResult.prototype);
  Ok.prototype.constructor = Ok;
  Thrown.prototype = Object.create(RunResult.prototype);
  Thrown.prototype.constructor = Thrown;
  function IsolateState(stateHolder) {
    this.stateHolder_7jflnw$_0 = stateHolder;
  }
  Object.defineProperty(IsolateState.prototype, 'isDisposed', {
    configurable: true,
    get: function () {
      return this.stateHolder_7jflnw$_0.isDisposed;
    }
  });
  IsolateState.prototype.fork_issdgt$ = function (r) {
    if (this.stateHolder_7jflnw$_0.myThread) {
      return new StateHolder(r, this.stateHolder_7jflnw$_0.stateRunner);
    } else {
      throw IllegalStateException_init('Must fork state from the state thread');
    }
  };
  function IsolateState$access$lambda(closure$block, this$IsolateState) {
    return function () {
      return closure$block(this$IsolateState.stateHolder_7jflnw$_0.myState);
    };
  }
  IsolateState.prototype.access_m8mn37$ = function (block) {
    var tmp$;
    if (this.stateHolder_7jflnw$_0.myThread) {
      tmp$ = block(this.stateHolder_7jflnw$_0.myState);
    } else {
      tmp$ = this.stateHolder_7jflnw$_0.stateRunner.stateRun_klfg04$(IsolateState$access$lambda(block, this));
    }
    return tmp$;
  };
  function IsolateState$dispose$lambda(this$IsolateState) {
    return function () {
      this$IsolateState.stateHolder_7jflnw$_0.dispose();
      return Unit;
    };
  }
  IsolateState.prototype.dispose = function () {
    if (this.stateHolder_7jflnw$_0.myThread) {
      this.stateHolder_7jflnw$_0.dispose();
    } else {
      this.stateHolder_7jflnw$_0.stateRunner.stateRun_klfg04$(IsolateState$dispose$lambda(this));
    }
  };
  IsolateState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsolateState',
    interfaces: []
  };
  function IsolateState_init(stateRunner, producer, $this) {
    if (stateRunner === void 0)
      stateRunner = null;
    $this = $this || Object.create(IsolateState.prototype);
    IsolateState.call($this, createState(stateRunner, producer));
    return $this;
  }
  var defaultStateRunner;
  function createState$lambda(closure$producer, closure$runner) {
    return function () {
      return new StateHolder(closure$producer(), closure$runner);
    };
  }
  function createState(stateRunner, producer) {
    var runner = stateRunner != null ? stateRunner : defaultStateRunner;
    return runner.stateRun_klfg04$(createState$lambda(producer, runner));
  }
  function shutdownIsoRunner() {
    defaultStateRunner.stop();
  }
  function RunResult() {
  }
  RunResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RunResult',
    interfaces: []
  };
  function Ok(result) {
    RunResult.call(this);
    this.result = result;
  }
  Ok.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ok',
    interfaces: [RunResult]
  };
  Ok.prototype.component1 = function () {
    return this.result;
  };
  Ok.prototype.copy_11rb$ = function (result) {
    return new Ok(result === void 0 ? this.result : result);
  };
  Ok.prototype.toString = function () {
    return 'Ok(result=' + Kotlin.toString(this.result) + ')';
  };
  Ok.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.result) | 0;
    return result;
  };
  Ok.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.result, other.result))));
  };
  function Thrown(throwable) {
    RunResult.call(this);
    this.throwable = throwable;
  }
  Thrown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Thrown',
    interfaces: [RunResult]
  };
  Thrown.prototype.component1 = function () {
    return this.throwable;
  };
  Thrown.prototype.copy_tcv7n7$ = function (throwable) {
    return new Thrown(throwable === void 0 ? this.throwable : throwable);
  };
  Thrown.prototype.toString = function () {
    return 'Thrown(throwable=' + Kotlin.toString(this.throwable) + ')';
  };
  Thrown.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.throwable) | 0;
    return result;
  };
  Thrown.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.throwable, other.throwable))));
  };
  function StateRunner() {
  }
  StateRunner.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StateRunner',
    interfaces: []
  };
  function BackgroundStateRunner() {
  }
  BackgroundStateRunner.prototype.stateRun_klfg04$ = function (block) {
    return block();
  };
  BackgroundStateRunner.prototype.stop = function () {
  };
  BackgroundStateRunner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackgroundStateRunner',
    interfaces: [StateRunner]
  };
  function StateHolder(t, stateRunner) {
    this.stateRunner = stateRunner;
    this.myState = t;
    this._isDisposed_0 = false;
    this.myThread = true;
  }
  Object.defineProperty(StateHolder.prototype, 'isDisposed', {
    configurable: true,
    get: function () {
      return this._isDisposed_0;
    }
  });
  StateHolder.prototype.dispose = function () {
    if (!this.isDisposed)
      this._isDisposed_0 = true;
  };
  StateHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateHolder',
    interfaces: []
  };
  var package$co = _.co || (_.co = {});
  var package$touchlab = package$co.touchlab || (package$co.touchlab = {});
  var package$stately = package$touchlab.stately || (package$touchlab.stately = {});
  var package$isolate = package$stately.isolate || (package$stately.isolate = {});
  package$isolate.IsolateState_init_vi5l2i$ = IsolateState_init;
  package$isolate.IsolateState = IsolateState;
  Object.defineProperty(package$isolate, 'defaultStateRunner_8be2vx$', {
    get: function () {
      return defaultStateRunner;
    }
  });
  package$isolate.createState_vi5l2i$ = createState;
  package$isolate.shutdownIsoRunner = shutdownIsoRunner;
  package$isolate.RunResult = RunResult;
  package$isolate.Ok = Ok;
  package$isolate.Thrown = Thrown;
  package$isolate.StateRunner = StateRunner;
  package$isolate.BackgroundStateRunner = BackgroundStateRunner;
  package$isolate.StateHolder = StateHolder;
  defaultStateRunner = new BackgroundStateRunner();
  Kotlin.defineModule('Stately-stately-isolate-js-legacy', _);
  return _;
}));

//# sourceMappingURL=Stately-stately-isolate-js-legacy.js.map
