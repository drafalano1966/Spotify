(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'MVIKotlin-utils-internal-js-legacy', 'MVIKotlin-mvikotlin-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('MVIKotlin-utils-internal-js-legacy'), require('MVIKotlin-mvikotlin-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-logging-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MVIKotlin-mvikotlin-logging-js-legacy'.");
    }if (typeof this['MVIKotlin-utils-internal-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-logging-js-legacy'. Its dependency 'MVIKotlin-utils-internal-js-legacy' was not found. Please, check whether 'MVIKotlin-utils-internal-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-logging-js-legacy'.");
    }if (typeof this['MVIKotlin-mvikotlin-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-logging-js-legacy'. Its dependency 'MVIKotlin-mvikotlin-js-legacy' was not found. Please, check whether 'MVIKotlin-mvikotlin-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-logging-js-legacy'.");
    }root['MVIKotlin-mvikotlin-logging-js-legacy'] = factory(typeof this['MVIKotlin-mvikotlin-logging-js-legacy'] === 'undefined' ? {} : this['MVIKotlin-mvikotlin-logging-js-legacy'], kotlin, this['MVIKotlin-utils-internal-js-legacy'], this['MVIKotlin-mvikotlin-js-legacy']);
  }
}(this, function (_, Kotlin, $module$MVIKotlin_utils_internal_js_legacy, $module$MVIKotlin_mvikotlin_js_legacy) {
  'use strict';
  var take = Kotlin.kotlin.text.take_6ic1pp$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var logV = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.logV_61zpoe$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var StoreEventType = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.StoreEventType;
  var Executor$Callbacks = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.Executor.Callbacks;
  var Executor = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.Executor;
  var Reducer = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.Reducer;
  var Store = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.Store;
  var toString = Kotlin.toString;
  var StoreFactory = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.StoreFactory;
  function DefaultLogFormatter(valueLengthLimit) {
    DefaultLogFormatter$Companion_getInstance();
    if (valueLengthLimit === void 0)
      valueLengthLimit = 256;
    this.valueLengthLimit_0 = valueLengthLimit;
  }
  DefaultLogFormatter.prototype.format_t7kqag$ = function (storeName, eventType, value) {
    var tmp$;
    var valueClassName = value != null ? Kotlin.getKClassFromExpression(value).simpleName : null;
    var valueText = this.valueLengthLimit_0 > 0 ? (tmp$ = value != null ? value.toString() : null) != null ? take(tmp$, this.valueLengthLimit_0) : null : null;
    return this.appendDefaultLogText_0(StringBuilder_init(), storeName, eventType, valueClassName, valueText).toString();
  };
  DefaultLogFormatter.prototype.appendDefaultLogText_0 = function ($receiver, storeName, eventType, valueClassName, valueText) {
    $receiver.append_pdl1vj$(storeName);
    $receiver.append_pdl1vj$(' (');
    $receiver.append_s8jyv4$(eventType);
    if (valueClassName != null) {
      $receiver.append_pdl1vj$(', ');
      $receiver.append_pdl1vj$(valueClassName);
    }$receiver.append_s8itvh$(41);
    if (valueText != null) {
      $receiver.append_pdl1vj$(': ');
      $receiver.append_pdl1vj$(valueText);
    }return $receiver;
  };
  function DefaultLogFormatter$Companion() {
    DefaultLogFormatter$Companion_instance = this;
    this.DEFAULT_VALUE_LENGTH_LIMIT = 256;
  }
  DefaultLogFormatter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DefaultLogFormatter$Companion_instance = null;
  function DefaultLogFormatter$Companion_getInstance() {
    if (DefaultLogFormatter$Companion_instance === null) {
      new DefaultLogFormatter$Companion();
    }return DefaultLogFormatter$Companion_instance;
  }
  DefaultLogFormatter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultLogFormatter',
    interfaces: [LogFormatter]
  };
  function DefaultLogger() {
    DefaultLogger_instance = this;
  }
  DefaultLogger.prototype.log_61zpoe$ = function (text) {
    logV(text);
  };
  DefaultLogger.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DefaultLogger',
    interfaces: [Logger]
  };
  var DefaultLogger_instance = null;
  function DefaultLogger_getInstance() {
    if (DefaultLogger_instance === null) {
      new DefaultLogger();
    }return DefaultLogger_instance;
  }
  function LogFormatter() {
  }
  LogFormatter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LogFormatter',
    interfaces: []
  };
  function Logger() {
  }
  Logger.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Logger',
    interfaces: []
  };
  function LoggerWrapper(logger, logFormatter) {
    this.logger_0 = logger;
    this.logFormatter_0 = logFormatter;
  }
  LoggerWrapper.prototype.log_61zpoe$ = function (text) {
    return this.logger_0.log_61zpoe$(text);
  };
  LoggerWrapper.prototype.format_t7kqag$ = function (storeName, eventType, value) {
    return this.logFormatter_0.format_t7kqag$(storeName, eventType, value);
  };
  LoggerWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggerWrapper',
    interfaces: [LogFormatter, Logger]
  };
  function log($receiver, storeName, eventType, value) {
    var tmp$;
    if ((tmp$ = $receiver.format_t7kqag$(storeName, eventType, value)) != null) {
      getCallableRef('log', function ($receiver, p1) {
        return $receiver.log_61zpoe$(p1), Unit;
      }.bind(null, $receiver))(tmp$);
    }}
  function LoggingExecutor(delegate, logger, storeName) {
    this.delegate_0 = delegate;
    this.logger_0 = logger;
    this.storeName_0 = storeName;
  }
  function LoggingExecutor$init$ObjectLiteral(closure$callbacks, this$LoggingExecutor) {
    this.closure$callbacks = closure$callbacks;
    this.this$LoggingExecutor = this$LoggingExecutor;
  }
  Object.defineProperty(LoggingExecutor$init$ObjectLiteral.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.closure$callbacks.state;
    }
  });
  LoggingExecutor$init$ObjectLiteral.prototype.onMessage = function (message) {
    log(this.this$LoggingExecutor.logger_0, this.this$LoggingExecutor.storeName_0, StoreEventType.MESSAGE, message);
    this.closure$callbacks.onMessage(message);
  };
  LoggingExecutor$init$ObjectLiteral.prototype.onLabel = function (label) {
    log(this.this$LoggingExecutor.logger_0, this.this$LoggingExecutor.storeName_0, StoreEventType.LABEL, label);
    this.closure$callbacks.onLabel(label);
  };
  LoggingExecutor$init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Executor$Callbacks]
  };
  LoggingExecutor.prototype.init = function (callbacks) {
    this.delegate_0.init(new LoggingExecutor$init$ObjectLiteral(callbacks, this));
  };
  LoggingExecutor.prototype.executeAction = function (action) {
    log(this.logger_0, this.storeName_0, StoreEventType.ACTION, action);
    this.delegate_0.executeAction(action);
  };
  LoggingExecutor.prototype.executeIntent = function (intent) {
    log(this.logger_0, this.storeName_0, StoreEventType.INTENT, intent);
    this.delegate_0.executeIntent(intent);
  };
  LoggingExecutor.prototype.dispose = function () {
    return this.delegate_0.dispose();
  };
  LoggingExecutor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggingExecutor',
    interfaces: [Executor]
  };
  function LoggingReducer(delegate, logger, storeName) {
    this.delegate_0 = delegate;
    this.logger_0 = logger;
    this.storeName_0 = storeName;
  }
  LoggingReducer.prototype.reduce = function ($receiver, msg) {
    var newState = this.delegate_0.reduce($receiver, msg);
    log(this.logger_0, this.storeName_0, StoreEventType.STATE, newState);
    return newState;
  };
  LoggingReducer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggingReducer',
    interfaces: [Reducer]
  };
  function LoggingStore(delegate, logger, name) {
    this.delegate_0 = delegate;
    this.logger_0 = logger;
    this.name_0 = name;
  }
  LoggingStore.prototype.init = function () {
    this.logger_0.log_61zpoe$(this.name_0 + ': initializing');
    this.delegate_0.init();
  };
  LoggingStore.prototype.dispose = function () {
    this.delegate_0.dispose();
    this.logger_0.log_61zpoe$(this.name_0 + ': disposed');
  };
  Object.defineProperty(LoggingStore.prototype, 'isDisposed', {
    configurable: true,
    get: function () {
      return this.delegate_0.isDisposed;
    }
  });
  Object.defineProperty(LoggingStore.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.delegate_0.state;
    }
  });
  LoggingStore.prototype.accept = function (intent) {
    return this.delegate_0.accept(intent);
  };
  LoggingStore.prototype.labels = function (observer) {
    return this.delegate_0.labels(observer);
  };
  LoggingStore.prototype.states = function (observer) {
    return this.delegate_0.states(observer);
  };
  LoggingStore.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggingStore',
    interfaces: [Store]
  };
  function LoggingStoreFactory(delegate, logger, logFormatter) {
    if (logger === void 0)
      logger = DefaultLogger_getInstance();
    if (logFormatter === void 0)
      logFormatter = new DefaultLogFormatter();
    this.delegate_0 = delegate;
    this.loggerWrapper_0 = new LoggerWrapper(logger, logFormatter);
  }
  function LoggingStoreFactory$create$lambda(closure$executorFactory, this$LoggingStoreFactory, closure$name) {
    return function () {
      return new LoggingExecutor(closure$executorFactory(), this$LoggingStoreFactory.loggerWrapper_0, closure$name);
    };
  }
  LoggingStoreFactory.prototype.create$default = function (name, isAutoInit, initialState, bootstrapper, executorFactory, reducer) {
    if (name == null) {
      return this.delegate_0.create(void 0, isAutoInit, initialState, bootstrapper, executorFactory, reducer);
    }this.loggerWrapper_0.log_61zpoe$(toString(name) + ': creating');
    var delegateStore = this.delegate_0.create(name, false, initialState, bootstrapper, LoggingStoreFactory$create$lambda(executorFactory, this, name), new LoggingReducer(reducer, this.loggerWrapper_0, name));
    var $receiver = new LoggingStore(delegateStore, this.loggerWrapper_0, name);
    if (isAutoInit) {
      $receiver.init();
    }return $receiver;
  };
  LoggingStoreFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggingStoreFactory',
    interfaces: [StoreFactory]
  };
  function LoggingStoreFactory_init(delegate, $this) {
    $this = $this || Object.create(LoggingStoreFactory.prototype);
    LoggingStoreFactory.call($this, delegate, DefaultLogger_getInstance(), new DefaultLogFormatter());
    return $this;
  }
  function formatLogText(storeName, eventType, value) {
    var tmp$;
    var valueClassName = value != null ? Kotlin.getKClassFromExpression(value).simpleName : null;
    var valueText = value != null ? value.toString() : null;
    if (valueClassName == null) {
      tmp$ = storeName + ' (' + eventType + '): ' + toString(valueText);
    } else {
      tmp$ = storeName + ' (' + eventType + ', ' + toString(valueClassName) + '): ' + toString(valueText);
    }
    return tmp$;
  }
  Object.defineProperty(DefaultLogFormatter, 'Companion', {
    get: DefaultLogFormatter$Companion_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$mvikotlin = package$arkivanov.mvikotlin || (package$arkivanov.mvikotlin = {});
  var package$logging = package$mvikotlin.logging || (package$mvikotlin.logging = {});
  var package$logger = package$logging.logger || (package$logging.logger = {});
  package$logger.DefaultLogFormatter = DefaultLogFormatter;
  Object.defineProperty(package$logger, 'DefaultLogger', {
    get: DefaultLogger_getInstance
  });
  package$logger.LogFormatter = LogFormatter;
  package$logger.Logger = Logger;
  package$logger.LoggerWrapper = LoggerWrapper;
  package$logger.log_b6yx87$ = log;
  var package$store = package$logging.store || (package$logging.store = {});
  package$store.LoggingExecutor = LoggingExecutor;
  package$store.LoggingReducer = LoggingReducer;
  package$store.LoggingStore = LoggingStore;
  package$store.LoggingStoreFactory_init_3o2p5k$ = LoggingStoreFactory_init;
  package$store.LoggingStoreFactory = LoggingStoreFactory;
  var package$utils = package$logging.utils || (package$logging.utils = {});
  package$utils.formatLogText_z0xiz9$ = formatLogText;
  LoggingStoreFactory.prototype.create = StoreFactory.prototype.create;
  Kotlin.defineModule('MVIKotlin-mvikotlin-logging-js-legacy', _);
  return _;
}));

//# sourceMappingURL=MVIKotlin-mvikotlin-logging-js-legacy.js.map
