(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 's-kermit-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 's-kermit-js-legacy'.");
    }root['s-kermit-js-legacy'] = factory(typeof this['s-kermit-js-legacy'] === 'undefined' ? {} : this['s-kermit-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var wrapFunction = Kotlin.wrapFunction;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  CommonLogger.prototype = Object.create(Logger.prototype);
  CommonLogger.prototype.constructor = CommonLogger;
  Severity.prototype = Object.create(Enum.prototype);
  Severity.prototype.constructor = Severity;
  ConsoleLogger.prototype = Object.create(Logger.prototype);
  ConsoleLogger.prototype.constructor = ConsoleLogger;
  function CommonLogger(throwableStringProvider) {
    if (throwableStringProvider === void 0)
      throwableStringProvider = new PlatformThrowableStringProvider();
    Logger.call(this);
    this.throwableStringProvider_0 = throwableStringProvider;
  }
  CommonLogger.prototype.log_hbb6rz$$default = function (severity, message, tag, throwable) {
    println(severity.toString() + ': (' + tag + ') ' + message);
    if (throwable != null) {
      println(this.throwableStringProvider_0.getThrowableString_tcv7n7$(throwable));
    }};
  CommonLogger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommonLogger',
    interfaces: [Logger]
  };
  function Kermit$processLog$lambda(closure$message) {
    return function () {
      return closure$message();
    };
  }
  function Kermit(loggerList, defaultTag) {
    if (loggerList === void 0)
      loggerList = listOf(new CommonLogger());
    if (defaultTag === void 0)
      defaultTag = 'Kermit';
    this.loggerList_0 = loggerList;
    this.defaultTag_0 = defaultTag;
  }
  Kermit.prototype.withTag_61zpoe$ = function (defaultTag) {
    return new Kermit(this.loggerList_0, defaultTag);
  };
  Kermit.prototype.v_ttfnl4$ = function (tag, throwable, message) {
    if (tag === void 0)
      tag = this.defaultTag_0;
    if (throwable === void 0)
      throwable = null;
    var severity = Severity$Verbose_getInstance();
    var processedMessage = lazy(Kermit$processLog$lambda(message));
    var tmp$;
    tmp$ = this.loggerList_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.isLoggable_7vw6fh$(severity)) {
        element.v_gqh5ww$(processedMessage.value, tag, throwable);
      }}
  };
  Kermit.prototype.v_h4ejuu$ = function (withMessage) {
    this.v_ttfnl4$(void 0, void 0, withMessage);
  };
  Kermit.prototype.v_l35kib$ = function (withThrowable, message) {
    this.v_ttfnl4$(void 0, withThrowable, message);
  };
  Kermit.prototype.v_swpfbs$ = function (withTag, message) {
    this.v_ttfnl4$(withTag, void 0, message);
  };
  Kermit.prototype.d_ttfnl4$ = function (tag, throwable, message) {
    if (tag === void 0)
      tag = this.defaultTag_0;
    if (throwable === void 0)
      throwable = null;
    var severity = Severity$Debug_getInstance();
    var processedMessage = lazy(Kermit$processLog$lambda(message));
    var tmp$;
    tmp$ = this.loggerList_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.isLoggable_7vw6fh$(severity)) {
        element.d_gqh5ww$(processedMessage.value, tag, throwable);
      }}
  };
  Kermit.prototype.d_h4ejuu$ = function (withMessage) {
    this.d_ttfnl4$(void 0, void 0, withMessage);
  };
  Kermit.prototype.d_sd3n2e$ = function (withThrowable, message) {
    this.d_ttfnl4$(void 0, withThrowable, message);
  };
  Kermit.prototype.d_swpfbs$ = function (withTag, message) {
    this.d_ttfnl4$(withTag, void 0, message);
  };
  Kermit.prototype.i_ttfnl4$ = function (tag, throwable, message) {
    if (tag === void 0)
      tag = this.defaultTag_0;
    if (throwable === void 0)
      throwable = null;
    var severity = Severity$Info_getInstance();
    var processedMessage = lazy(Kermit$processLog$lambda(message));
    var tmp$;
    tmp$ = this.loggerList_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.isLoggable_7vw6fh$(severity)) {
        element.i_gqh5ww$(processedMessage.value, tag, throwable);
      }}
  };
  Kermit.prototype.i_h4ejuu$ = function (withMessage) {
    this.i_ttfnl4$(void 0, void 0, withMessage);
  };
  Kermit.prototype.i_sd3n2e$ = function (withThrowable, message) {
    this.i_ttfnl4$(void 0, withThrowable, message);
  };
  Kermit.prototype.i_swpfbs$ = function (withTag, message) {
    this.i_ttfnl4$(withTag, void 0, message);
  };
  Kermit.prototype.w_ttfnl4$ = function (tag, throwable, message) {
    if (tag === void 0)
      tag = this.defaultTag_0;
    if (throwable === void 0)
      throwable = null;
    var severity = Severity$Warn_getInstance();
    var processedMessage = lazy(Kermit$processLog$lambda(message));
    var tmp$;
    tmp$ = this.loggerList_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.isLoggable_7vw6fh$(severity)) {
        element.w_gqh5ww$(processedMessage.value, tag, throwable);
      }}
  };
  Kermit.prototype.w_h4ejuu$ = function (withMessage) {
    this.w_ttfnl4$(void 0, void 0, withMessage);
  };
  Kermit.prototype.w_sd3n2e$ = function (withThrowable, message) {
    this.w_ttfnl4$(void 0, withThrowable, message);
  };
  Kermit.prototype.w_swpfbs$ = function (withTag, message) {
    this.w_ttfnl4$(withTag, void 0, message);
  };
  Kermit.prototype.e_ttfnl4$ = function (tag, throwable, message) {
    if (tag === void 0)
      tag = this.defaultTag_0;
    if (throwable === void 0)
      throwable = null;
    var severity = Severity$Error_getInstance();
    var processedMessage = lazy(Kermit$processLog$lambda(message));
    var tmp$;
    tmp$ = this.loggerList_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.isLoggable_7vw6fh$(severity)) {
        element.e_gqh5ww$(processedMessage.value, tag, throwable);
      }}
  };
  Kermit.prototype.e_h4ejuu$ = function (withMessage) {
    this.e_ttfnl4$(void 0, void 0, withMessage);
  };
  Kermit.prototype.e_sd3n2e$ = function (withThrowable, message) {
    this.e_ttfnl4$(void 0, withThrowable, message);
  };
  Kermit.prototype.e_swpfbs$ = function (withTag, message) {
    this.e_ttfnl4$(withTag, void 0, message);
  };
  Kermit.prototype.wtf_ttfnl4$ = function (tag, throwable, message) {
    if (tag === void 0)
      tag = this.defaultTag_0;
    if (throwable === void 0)
      throwable = null;
    var severity = Severity$Assert_getInstance();
    var processedMessage = lazy(Kermit$processLog$lambda(message));
    var tmp$;
    tmp$ = this.loggerList_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.isLoggable_7vw6fh$(severity)) {
        element.wtf_gqh5ww$(processedMessage.value, tag, throwable);
      }}
  };
  Kermit.prototype.wtf_h4ejuu$ = function (withMessage) {
    this.wtf_ttfnl4$(void 0, void 0, withMessage);
  };
  Kermit.prototype.wtf_sd3n2e$ = function (withThrowable, message) {
    this.wtf_ttfnl4$(void 0, withThrowable, message);
  };
  Kermit.prototype.wtf_swpfbs$ = function (withTag, message) {
    this.wtf_ttfnl4$(withTag, void 0, message);
  };
  Kermit.prototype.log_lb0tcp$ = function (severity, tag, throwable, message) {
    if (tag === void 0)
      tag = this.defaultTag_0;
    var processedMessage = lazy(Kermit$processLog$lambda(message));
    var tmp$;
    tmp$ = this.loggerList_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.isLoggable_7vw6fh$(severity)) {
        element.log_hbb6rz$(severity, processedMessage.value, tag, throwable);
      }}
  };
  Kermit.prototype.processLog_0 = wrapFunction(function () {
    function Kermit$processLog$lambda(closure$message) {
      return function () {
        return closure$message();
      };
    }
    return function (severity, tag, throwable, message, loggingCall) {
      var processedMessage = lazy(Kermit$processLog$lambda(message));
      var tmp$;
      tmp$ = this.loggerList_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.isLoggable_7vw6fh$(severity)) {
          loggingCall(element, processedMessage.value, tag, throwable);
        }}
    };
  });
  Kermit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kermit',
    interfaces: []
  };
  function Kermit_init(loggers, $this) {
    $this = $this || Object.create(Kermit.prototype);
    Kermit.call($this, asList(loggers));
    return $this;
  }
  function Kermit_init_0(logger, $this) {
    $this = $this || Object.create(Kermit.prototype);
    Kermit.call($this, listOf(logger));
    return $this;
  }
  function Logger() {
  }
  Logger.prototype.isLoggable_7vw6fh$ = function (severity) {
    return true;
  };
  Logger.prototype.log_hbb6rz$ = function (severity, message, tag, throwable, callback$default) {
    if (throwable === void 0)
      throwable = null;
    callback$default ? callback$default(severity, message, tag, throwable) : this.log_hbb6rz$$default(severity, message, tag, throwable);
  };
  Logger.prototype.v_gqh5ww$$default = function (message, tag, throwable) {
    this.log_hbb6rz$(Severity$Verbose_getInstance(), message, tag, throwable);
  };
  Logger.prototype.v_gqh5ww$ = function (message, tag, throwable, callback$default) {
    if (throwable === void 0)
      throwable = null;
    callback$default ? callback$default(message, tag, throwable) : this.v_gqh5ww$$default(message, tag, throwable);
  };
  Logger.prototype.d_gqh5ww$$default = function (message, tag, throwable) {
    this.log_hbb6rz$(Severity$Debug_getInstance(), message, tag, throwable);
  };
  Logger.prototype.d_gqh5ww$ = function (message, tag, throwable, callback$default) {
    if (throwable === void 0)
      throwable = null;
    callback$default ? callback$default(message, tag, throwable) : this.d_gqh5ww$$default(message, tag, throwable);
  };
  Logger.prototype.i_gqh5ww$$default = function (message, tag, throwable) {
    this.log_hbb6rz$(Severity$Info_getInstance(), message, tag, throwable);
  };
  Logger.prototype.i_gqh5ww$ = function (message, tag, throwable, callback$default) {
    if (throwable === void 0)
      throwable = null;
    callback$default ? callback$default(message, tag, throwable) : this.i_gqh5ww$$default(message, tag, throwable);
  };
  Logger.prototype.w_gqh5ww$$default = function (message, tag, throwable) {
    this.log_hbb6rz$(Severity$Warn_getInstance(), message, tag, throwable);
  };
  Logger.prototype.w_gqh5ww$ = function (message, tag, throwable, callback$default) {
    if (throwable === void 0)
      throwable = null;
    callback$default ? callback$default(message, tag, throwable) : this.w_gqh5ww$$default(message, tag, throwable);
  };
  Logger.prototype.e_gqh5ww$$default = function (message, tag, throwable) {
    this.log_hbb6rz$(Severity$Error_getInstance(), message, tag, throwable);
  };
  Logger.prototype.e_gqh5ww$ = function (message, tag, throwable, callback$default) {
    if (throwable === void 0)
      throwable = null;
    callback$default ? callback$default(message, tag, throwable) : this.e_gqh5ww$$default(message, tag, throwable);
  };
  Logger.prototype.wtf_gqh5ww$$default = function (message, tag, throwable) {
    this.log_hbb6rz$(Severity$Assert_getInstance(), message, tag, throwable);
  };
  Logger.prototype.wtf_gqh5ww$ = function (message, tag, throwable, callback$default) {
    if (throwable === void 0)
      throwable = null;
    callback$default ? callback$default(message, tag, throwable) : this.wtf_gqh5ww$$default(message, tag, throwable);
  };
  Logger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Logger',
    interfaces: []
  };
  function Severity(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Severity_initFields() {
    Severity_initFields = function () {
    };
    Severity$Verbose_instance = new Severity('Verbose', 0);
    Severity$Debug_instance = new Severity('Debug', 1);
    Severity$Info_instance = new Severity('Info', 2);
    Severity$Warn_instance = new Severity('Warn', 3);
    Severity$Error_instance = new Severity('Error', 4);
    Severity$Assert_instance = new Severity('Assert', 5);
  }
  var Severity$Verbose_instance;
  function Severity$Verbose_getInstance() {
    Severity_initFields();
    return Severity$Verbose_instance;
  }
  var Severity$Debug_instance;
  function Severity$Debug_getInstance() {
    Severity_initFields();
    return Severity$Debug_instance;
  }
  var Severity$Info_instance;
  function Severity$Info_getInstance() {
    Severity_initFields();
    return Severity$Info_instance;
  }
  var Severity$Warn_instance;
  function Severity$Warn_getInstance() {
    Severity_initFields();
    return Severity$Warn_instance;
  }
  var Severity$Error_instance;
  function Severity$Error_getInstance() {
    Severity_initFields();
    return Severity$Error_instance;
  }
  var Severity$Assert_instance;
  function Severity$Assert_getInstance() {
    Severity_initFields();
    return Severity$Assert_instance;
  }
  Severity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Severity',
    interfaces: [Enum]
  };
  function Severity$values() {
    return [Severity$Verbose_getInstance(), Severity$Debug_getInstance(), Severity$Info_getInstance(), Severity$Warn_getInstance(), Severity$Error_getInstance(), Severity$Assert_getInstance()];
  }
  Severity.values = Severity$values;
  function Severity$valueOf(name) {
    switch (name) {
      case 'Verbose':
        return Severity$Verbose_getInstance();
      case 'Debug':
        return Severity$Debug_getInstance();
      case 'Info':
        return Severity$Info_getInstance();
      case 'Warn':
        return Severity$Warn_getInstance();
      case 'Error':
        return Severity$Error_getInstance();
      case 'Assert':
        return Severity$Assert_getInstance();
      default:throwISE('No enum constant co.touchlab.kermit.Severity.' + name);
    }
  }
  Severity.valueOf_61zpoe$ = Severity$valueOf;
  function ThrowableStringProvider() {
  }
  function ThrowableStringProvider$getThrowableString$lambda$printCause(this$) {
    return function closure$printCause($receiver, depth) {
      if (depth === void 0)
        depth = 0;
      var tmp$;
      this$.append_pdl1vj$('Caused by: ' + $receiver.toString() + '\n');
      if ((tmp$ = $receiver.cause) != null) {
        closure$printCause;
        var closure$printCause_0 = closure$printCause;
        if (tmp$ !== $receiver && depth < 2)
          closure$printCause_0(tmp$, depth + 1 | 0);
      }};
  }
  ThrowableStringProvider.prototype.getThrowableString_tcv7n7$ = function (throwable) {
    var $receiver = StringBuilder_init();
    var tmp$;
    var printCause = ThrowableStringProvider$getThrowableString$lambda$printCause($receiver);
    $receiver.append_pdl1vj$(throwable.toString() + '\n');
    (tmp$ = throwable.cause) != null ? (printCause(tmp$), Unit) : null;
    return $receiver.toString();
  };
  ThrowableStringProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ThrowableStringProvider',
    interfaces: []
  };
  function ConsoleLogger() {
    Logger.call(this);
  }
  ConsoleLogger.prototype.log_hbb6rz$$default = function (severity, message, tag, throwable) {
    console.log(severity.name, tag, message);
  };
  ConsoleLogger.prototype.v_gqh5ww$$default = function (message, tag, throwable) {
    console.log(tag, message, throwable);
  };
  ConsoleLogger.prototype.d_gqh5ww$$default = function (message, tag, throwable) {
    console.log(tag, message, throwable);
  };
  ConsoleLogger.prototype.i_gqh5ww$$default = function (message, tag, throwable) {
    console.info(tag, message, throwable);
  };
  ConsoleLogger.prototype.w_gqh5ww$$default = function (message, tag, throwable) {
    console.warn(tag, message, throwable);
  };
  ConsoleLogger.prototype.e_gqh5ww$$default = function (message, tag, throwable) {
    console.error(tag, message, throwable);
  };
  ConsoleLogger.prototype.wtf_gqh5ww$$default = function (message, tag, throwable) {
    console.error(tag, message, throwable);
  };
  ConsoleLogger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConsoleLogger',
    interfaces: [Logger]
  };
  function PlatformThrowableStringProvider() {
  }
  PlatformThrowableStringProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlatformThrowableStringProvider',
    interfaces: [ThrowableStringProvider]
  };
  var package$co = _.co || (_.co = {});
  var package$touchlab = package$co.touchlab || (package$co.touchlab = {});
  var package$kermit = package$touchlab.kermit || (package$touchlab.kermit = {});
  package$kermit.CommonLogger = CommonLogger;
  $$importsForInline$$['s-kermit-js-legacy'] = _;
  package$kermit.Kermit_init_r0inlp$ = Kermit_init;
  package$kermit.Kermit_init_bigt7k$ = Kermit_init_0;
  package$kermit.Kermit = Kermit;
  package$kermit.Logger = Logger;
  Object.defineProperty(Severity, 'Verbose', {
    get: Severity$Verbose_getInstance
  });
  Object.defineProperty(Severity, 'Debug', {
    get: Severity$Debug_getInstance
  });
  Object.defineProperty(Severity, 'Info', {
    get: Severity$Info_getInstance
  });
  Object.defineProperty(Severity, 'Warn', {
    get: Severity$Warn_getInstance
  });
  Object.defineProperty(Severity, 'Error', {
    get: Severity$Error_getInstance
  });
  Object.defineProperty(Severity, 'Assert', {
    get: Severity$Assert_getInstance
  });
  package$kermit.Severity = Severity;
  package$kermit.ThrowableStringProvider = ThrowableStringProvider;
  package$kermit.ConsoleLogger = ConsoleLogger;
  package$kermit.PlatformThrowableStringProvider = PlatformThrowableStringProvider;
  PlatformThrowableStringProvider.prototype.getThrowableString_tcv7n7$ = ThrowableStringProvider.prototype.getThrowableString_tcv7n7$;
  Kotlin.defineModule('s-kermit-js-legacy', _);
  return _;
}));

//# sourceMappingURL=s-kermit-js-legacy.js.map
