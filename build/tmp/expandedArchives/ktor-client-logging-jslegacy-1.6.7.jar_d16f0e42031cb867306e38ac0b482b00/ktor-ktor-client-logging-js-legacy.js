(function(root, factory) {
  if (typeof define === 'function' && define.amd) 
    define(['exports', 'kotlin', 'ktor-ktor-http-js-legacy', 'ktor-ktor-io-js-legacy', 'kotlinx-coroutines-core', 'ktor-ktor-client-core-js-legacy', 'ktor-ktor-utils-js-legacy'], factory);
  else if (typeof exports === 'object') 
    factory(module.exports, require('kotlin'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-io-js-legacy'), require('kotlinx-coroutines-core'), require('ktor-ktor-client-core-js-legacy'), require('ktor-ktor-utils-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-logging-js-legacy'.");
    }
    if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-client-logging-js-legacy'.");
    }
    if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-client-logging-js-legacy'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging-js-legacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-client-logging-js-legacy'.");
    }
    if (typeof this['ktor-ktor-client-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging-js-legacy'. Its dependency 'ktor-ktor-client-core-js-legacy' was not found. Please, check whether 'ktor-ktor-client-core-js-legacy' is loaded prior to 'ktor-ktor-client-logging-js-legacy'.");
    }
    if (typeof this['ktor-ktor-utils-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging-js-legacy'. Its dependency 'ktor-ktor-utils-js-legacy' was not found. Please, check whether 'ktor-ktor-utils-js-legacy' is loaded prior to 'ktor-ktor-client-logging-js-legacy'.");
    }
    root['ktor-ktor-client-logging-js-legacy'] = factory(typeof this['ktor-ktor-client-logging-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-client-logging-js-legacy'], kotlin, this['ktor-ktor-http-js-legacy'], this['ktor-ktor-io-js-legacy'], this['kotlinx-coroutines-core'], this['ktor-ktor-client-core-js-legacy'], this['ktor-ktor-utils-js-legacy']);
  }
}(this, function(_, Kotlin, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_io_js_legacy, $module$kotlinx_coroutines_core, $module$ktor_ktor_client_core_js_legacy, $module$ktor_ktor_utils_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var OutgoingContent$ReadChannelContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent.ReadChannelContent;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Url = $module$ktor_ktor_http_js_legacy.io.ktor.http.Url_pboq08$;
  var OutgoingContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent;
  var throwCCE = Kotlin.throwCCE;
  var http = $module$ktor_ktor_http_js_legacy.io.ktor.http;
  var Unit = Kotlin.kotlin.Unit;
  var toString = Kotlin.toString;
  var charset = $module$ktor_ktor_http_js_legacy.io.ktor.http.charset_10ldo9$;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var ByteChannel = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteChannel_6taknv$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var HttpSendPipeline = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.HttpSendPipeline;
  var Throwable = Error;
  var HttpReceivePipeline = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.HttpReceivePipeline;
  var HttpResponsePipeline = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.HttpResponsePipeline;
  var contentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.contentType_v1wgmc$;
  var ResponseObserver = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.features.observer.ResponseObserver;
  var AttributeKey = $module$ktor_ktor_utils_js_legacy.io.ktor.util.AttributeKey;
  var HttpClientFeature = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.features.HttpClientFeature;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Mutex = $module$kotlinx_coroutines_core.kotlinx.coroutines.sync.Mutex_6taknv$;
  var readRemaining = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.readRemaining_3dmw3p$;
  var readText = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readText_1lnizf$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
  var Collection = Kotlin.kotlin.collections.Collection;
  var writeFully = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.writeFully_4scpqu$;
  var close = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.close_x5qia6$;
  var OutgoingContent$ByteArrayContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent.ByteArrayContent;
  var copyToBoth = $module$ktor_ktor_utils_js_legacy.io.ktor.util.copyToBoth_xeww6r$;
  var OutgoingContent$WriteChannelContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent.WriteChannelContent;
  var writer = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.writer_x9a1ni$;
  LogLevel.prototype = Object.create(Enum.prototype);
  LogLevel.prototype.constructor = LogLevel;
  LoggedContent.prototype = Object.create(OutgoingContent$ReadChannelContent.prototype);
  LoggedContent.prototype.constructor = LoggedContent;
  function LogLevel(name, ordinal, info, headers, body) {
    Enum.call(this);
    this.info = info;
    this.headers = headers;
    this.body = body;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LogLevel_initFields() {
    LogLevel_initFields = function() {
};
    LogLevel$ALL_instance = new LogLevel('ALL', 0, true, true, true);
    LogLevel$HEADERS_instance = new LogLevel('HEADERS', 1, true, true, false);
    LogLevel$BODY_instance = new LogLevel('BODY', 2, true, false, true);
    LogLevel$INFO_instance = new LogLevel('INFO', 3, true, false, false);
    LogLevel$NONE_instance = new LogLevel('NONE', 4, false, false, false);
  }
  var LogLevel$ALL_instance;
  function LogLevel$ALL_getInstance() {
    LogLevel_initFields();
    return LogLevel$ALL_instance;
  }
  var LogLevel$HEADERS_instance;
  function LogLevel$HEADERS_getInstance() {
    LogLevel_initFields();
    return LogLevel$HEADERS_instance;
  }
  var LogLevel$BODY_instance;
  function LogLevel$BODY_getInstance() {
    LogLevel_initFields();
    return LogLevel$BODY_instance;
  }
  var LogLevel$INFO_instance;
  function LogLevel$INFO_getInstance() {
    LogLevel_initFields();
    return LogLevel$INFO_instance;
  }
  var LogLevel$NONE_instance;
  function LogLevel$NONE_getInstance() {
    LogLevel_initFields();
    return LogLevel$NONE_instance;
  }
  LogLevel.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'LogLevel', 
  interfaces: [Enum]};
  function LogLevel$values() {
    return [LogLevel$ALL_getInstance(), LogLevel$HEADERS_getInstance(), LogLevel$BODY_getInstance(), LogLevel$INFO_getInstance(), LogLevel$NONE_getInstance()];
  }
  LogLevel.values = LogLevel$values;
  function LogLevel$valueOf(name) {
    switch (name) {
      case 'ALL':
        return LogLevel$ALL_getInstance();
      case 'HEADERS':
        return LogLevel$HEADERS_getInstance();
      case 'BODY':
        return LogLevel$BODY_getInstance();
      case 'INFO':
        return LogLevel$INFO_getInstance();
      case 'NONE':
        return LogLevel$NONE_getInstance();
      default:
        throwISE('No enum constant io.ktor.client.features.logging.LogLevel.' + name);
    }
  }
  LogLevel.valueOf_61zpoe$ = LogLevel$valueOf;
  function LoggedContent(originalContent, channel) {
    OutgoingContent$ReadChannelContent.call(this);
    this.originalContent_0 = originalContent;
    this.channel_0 = channel;
    this.contentType_n4ra23$_0 = this.originalContent_0.contentType;
    this.contentLength_ht619l$_0 = this.originalContent_0.contentLength;
    this.status_zif456$_0 = this.originalContent_0.status;
    this.headers_4us8zi$_0 = this.originalContent_0.headers;
  }
  Object.defineProperty(LoggedContent.prototype, 'contentType', {
  configurable: true, 
  get: function() {
  return this.contentType_n4ra23$_0;
}});
  Object.defineProperty(LoggedContent.prototype, 'contentLength', {
  configurable: true, 
  get: function() {
  return this.contentLength_ht619l$_0;
}});
  Object.defineProperty(LoggedContent.prototype, 'status', {
  configurable: true, 
  get: function() {
  return this.status_zif456$_0;
}});
  Object.defineProperty(LoggedContent.prototype, 'headers', {
  configurable: true, 
  get: function() {
  return this.headers_4us8zi$_0;
}});
  LoggedContent.prototype.getProperty_yzaw86$ = function(key) {
  return this.originalContent_0.getProperty_yzaw86$(key);
};
  LoggedContent.prototype.setProperty_uuntuo$ = function(key, value) {
  this.originalContent_0.setProperty_uuntuo$(key, value);
};
  LoggedContent.prototype.readFrom = function() {
  return this.channel_0;
};
  LoggedContent.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'LoggedContent', 
  interfaces: [OutgoingContent$ReadChannelContent]};
  function Logger() {
    Logger$Companion_getInstance();
  }
  function Logger$Companion() {
    Logger$Companion_instance = this;
  }
  Logger$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var Logger$Companion_instance = null;
  function Logger$Companion_getInstance() {
    if (Logger$Companion_instance === null) {
      new Logger$Companion();
    }
    return Logger$Companion_instance;
  }
  Logger.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'Logger', 
  interfaces: []};
  function get_SIMPLE($receiver) {
    return new SimpleLogger();
  }
  function get_EMPTY$ObjectLiteral() {
  }
  get_EMPTY$ObjectLiteral.prototype.log_61zpoe$ = function(message) {
};
  get_EMPTY$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [Logger]};
  function get_EMPTY($receiver) {
    return new get_EMPTY$ObjectLiteral();
  }
  function SimpleLogger() {
  }
  SimpleLogger.prototype.log_61zpoe$ = function(message) {
  println('HttpClient: ' + message);
};
  SimpleLogger.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'SimpleLogger', 
  interfaces: [Logger]};
  var compareBy$lambda = wrapFunction(function() {
  var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
  return function(closure$selector) {
  return function(a, b) {
  var selector = closure$selector;
  return compareValues(selector(a), selector(b));
};
};
});
  function Logging(logger, level, filters) {
    Logging$Companion_getInstance();
    if (filters === void 0) 
      filters = emptyList();
    this.logger = logger;
    this.level = level;
    this.filters = filters;
    this.mutex_0 = Mutex();
  }
  function Logging$Config() {
    this.filters_8be2vx$ = ArrayList_init();
    this.logger = get_DEFAULT(Logger$Companion_getInstance());
    this.level = LogLevel$HEADERS_getInstance();
  }
  Logging$Config.prototype.filter_j4x09n$ = function(predicate) {
  this.filters_8be2vx$.add_11rb$(predicate);
};
  Logging$Config.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Config', 
  interfaces: []};
  function Coroutine$beginLogging_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$beginLogging_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$beginLogging_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$beginLogging_0.prototype.constructor = Coroutine$beginLogging_0;
  Coroutine$beginLogging_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.mutex_0.lock_s8jyv4$(void 0, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  Logging.prototype.beginLogging_0 = function(continuation_0, suspended) {
  var instance = new Coroutine$beginLogging_0(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  Logging.prototype.doneLogging_0 = function() {
  this.mutex_0.unlock_s8jyv4$();
};
  function Coroutine$logRequest_0($this, request_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_2 = void 0;
    this.local$request = request_0;
  }
  Coroutine$logRequest_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$logRequest_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$logRequest_0.prototype.constructor = Coroutine$logRequest_0;
  Coroutine$logRequest_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$, tmp$_0, tmp$_1;
        if (this.$this.level.info) {
          this.$this.logger.log_61zpoe$('REQUEST: ' + Url(this.local$request.url));
          this.$this.logger.log_61zpoe$('METHOD: ' + this.local$request.method);
        }
        var content = Kotlin.isType(tmp$ = this.local$request.body, OutgoingContent) ? tmp$ : throwCCE();
        if (this.$this.level.headers) {
          this.$this.logger.log_61zpoe$('COMMON HEADERS');
          this.$this.logHeaders_0(this.local$request.headers.entries());
          this.$this.logger.log_61zpoe$('CONTENT HEADERS');
          if ((tmp$_0 = content.contentLength) != null) {
            this.$this.logHeader_0(this.$this.logger, http.HttpHeaders.ContentLength, tmp$_0.toString());
          }
          if ((tmp$_1 = content.contentType) != null) {
            this.$this.logHeader_0(this.$this.logger, http.HttpHeaders.ContentType, tmp$_1.toString());
          }
          this.$this.logHeaders_0(content.headers.entries());
        }
        if (this.$this.level.body) {
          this.state_0 = 2;
          this.result_0 = this.$this.logRequestBody_0(content, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          this.local$tmp$_2 = null;
          this.state_0 = 3;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$_2 = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        return this.local$tmp$_2;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  Logging.prototype.logRequest_0 = function(request_0, continuation_0, suspended) {
  var instance = new Coroutine$logRequest_0(this, request_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  Logging.prototype.logResponse_0 = function(response) {
  if (this.level.info) {
    this.logger.log_61zpoe$('RESPONSE: ' + response.status);
    this.logger.log_61zpoe$('METHOD: ' + response.call.request.method);
    this.logger.log_61zpoe$('FROM: ' + response.call.request.url);
  }
  if (this.level.headers) {
    this.logger.log_61zpoe$('COMMON HEADERS');
    this.logHeaders_0(response.headers.entries());
  }
};
  function Coroutine$logResponseBody_0($this, contentType_0, content_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.$this = $this;
    this.local$$receiver = void 0;
    this.local$tmp$_0 = void 0;
    this.local$contentType = contentType_0;
    this.local$content = content_0;
  }
  Coroutine$logResponseBody_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$logResponseBody_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$logResponseBody_0.prototype.constructor = Coroutine$logResponseBody_0;
  Coroutine$logResponseBody_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$$receiver = this.$this.logger;
        var tmp$;
        var tmp$_0;
        this.local$$receiver.log_61zpoe$('BODY Content-Type: ' + toString(this.local$contentType));
        this.local$$receiver.log_61zpoe$('BODY START');
        this.local$tmp$_0 = (tmp$ = this.local$contentType != null ? charset(this.local$contentType) : null) != null ? tmp$ : charsets.Charsets.UTF_8;
        this.state_0 = 1;
        continue;
      case 1:
        this.exceptionState_0 = 3;
        this.state_0 = 2;
        this.result_0 = readRemaining(this.local$content, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 2:
        this.result_0 = readText(this.result_0, this.local$tmp$_0);
        this.exceptionState_0 = 7;
        this.state_0 = 5;
        continue;
      case 3:
        this.exceptionState_0 = 7;
        var cause = this.exception_0;
        if (Kotlin.isType(cause, Throwable)) {
          this.result_0 = null;
          this.exceptionState_0 = 3;
          this.state_0 = 6;
          continue;
        } else {
          throw cause;
        }
      case 4:
        this.state_0 = 5;
        continue;
      case 5:
        if (!false) {
          this.state_0 = 6;
          continue;
        }
        this.state_0 = 1;
        continue;
      case 6:
        var message = (tmp$_0 = this.result_0) != null ? tmp$_0 : '[response body omitted]';
        this.local$$receiver.log_61zpoe$(message);
        this.local$$receiver.log_61zpoe$('BODY END');
        return Unit;
      case 7:
        throw this.exception_0;
      default:
        this.state_0 = 7;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 7) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  Logging.prototype.logResponseBody_0 = function(contentType_0, content_0, continuation_0, suspended) {
  var instance = new Coroutine$logResponseBody_0(this, contentType_0, content_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  Logging.prototype.logRequestException_0 = function(context, cause) {
  if (this.level.info) {
    this.logger.log_61zpoe$('REQUEST ' + Url(context.url) + ' failed with exception: ' + cause);
  }
};
  Logging.prototype.logResponseException_0 = function(context, cause) {
  if (this.level.info) {
    this.logger.log_61zpoe$('RESPONSE ' + context.request.url + ' failed with exception: ' + cause);
  }
};
  function Logging$logHeaders$lambda(it) {
    return it.key;
  }
  Logging.prototype.logHeaders_0 = function(headers) {
  var sortedHeaders = sortedWith(toList(headers), new Comparator(compareBy$lambda(Logging$logHeaders$lambda)));
  var tmp$;
  tmp$ = sortedHeaders.iterator();
  while (tmp$.hasNext()) {
    var element = tmp$.next();
    var key = element.key;
    var values = element.value;
    this.logHeader_0(this.logger, key, joinToString(values, '; '));
  }
};
  Logging.prototype.logHeader_0 = function($receiver, key, value) {
  $receiver.log_61zpoe$('-> ' + key + ': ' + value);
};
  function Coroutine$Logging$logRequestBody$lambda(closure$channel_0, closure$charset_0, this$Logging_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 7;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$charset = closure$charset_0;
    this.local$this$Logging = this$Logging_0;
    this.local$$receiver = void 0;
    this.local$charset = void 0;
  }
  Coroutine$Logging$logRequestBody$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$Logging$logRequestBody$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Logging$logRequestBody$lambda.prototype.constructor = Coroutine$Logging$logRequestBody$lambda;
  Coroutine$Logging$logRequestBody$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        this.local$$receiver = this.local$closure$channel;
        this.local$charset = this.local$closure$charset;
        this.state_0 = 1;
        continue;
      case 1:
        this.exceptionState_0 = 3;
        this.state_0 = 2;
        this.result_0 = readRemaining(this.local$$receiver, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 2:
        this.result_0 = readText(this.result_0, this.local$charset);
        this.exceptionState_0 = 7;
        this.state_0 = 5;
        continue;
      case 3:
        this.exceptionState_0 = 7;
        var cause = this.exception_0;
        if (Kotlin.isType(cause, Throwable)) {
          this.result_0 = null;
          this.exceptionState_0 = 3;
          this.state_0 = 6;
          continue;
        } else {
          throw cause;
        }
      case 4:
        this.state_0 = 5;
        continue;
      case 5:
        if (!false) {
          this.state_0 = 6;
          continue;
        }
        this.state_0 = 1;
        continue;
      case 6:
        var text = (tmp$ = this.result_0) != null ? tmp$ : '[request body omitted]';
        this.local$this$Logging.logger.log_61zpoe$('BODY START');
        this.local$this$Logging.logger.log_61zpoe$(text);
        return this.local$this$Logging.logger.log_61zpoe$('BODY END') , Unit;
      case 7:
        throw this.exception_0;
      default:
        this.state_0 = 7;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 7) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function Logging$logRequestBody$lambda(closure$channel_0, closure$charset_0, this$Logging_0) {
    return function($receiver_0, continuation_0, suspended) {
  var instance = new Coroutine$Logging$logRequestBody$lambda(closure$channel_0, closure$charset_0, this$Logging_0, $receiver_0, this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  Logging.prototype.logRequestBody_0 = function(content, continuation) {
  var tmp$, tmp$_0;
  this.logger.log_61zpoe$('BODY Content-Type: ' + toString(content.contentType));
  var charset_0 = (tmp$_0 = (tmp$ = content.contentType) != null ? charset(tmp$) : null) != null ? tmp$_0 : charsets.Charsets.UTF_8;
  var channel = ByteChannel();
  launch(coroutines.GlobalScope, coroutines.Dispatchers.Unconfined, void 0, Logging$logRequestBody$lambda(channel, charset_0, this));
  return observe(content, channel, continuation);
};
  function Logging$Companion() {
    Logging$Companion_instance = this;
    this.key_oty3cz$_0 = new AttributeKey('ClientLogging');
  }
  Object.defineProperty(Logging$Companion.prototype, 'key', {
  configurable: true, 
  get: function() {
  return this.key_oty3cz$_0;
}});
  Logging$Companion.prototype.prepare_oh3mgy$$default = function(block) {
  var $receiver = new Logging$Config();
  block($receiver);
  var config = $receiver;
  return new Logging(config.logger, config.level, config.filters_8be2vx$);
};
  function Coroutine$Logging$Companion$install$lambda(closure$feature_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 12;
    this.local$closure$feature = closure$feature_0;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Logging$Companion$install$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$Logging$Companion$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Logging$Companion$install$lambda.prototype.constructor = Coroutine$Logging$Companion$install$lambda;
  Coroutine$Logging$Companion$install$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$ = this.local$closure$feature.filters.isEmpty();
        if (!tmp$) {
          var $receiver = this.local$closure$feature.filters;
          var any$result;
          any$break:
            do {
              var tmp$_0;
              if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                any$result = false;
                break any$break;
              }
              tmp$_0 = $receiver.iterator();
              while (tmp$_0.hasNext()) {
                var element = tmp$_0.next();
                if (element(this.local$$receiver.context)) {
                  any$result = true;
                  break any$break;
                }
              }
              any$result = false;
            } while (false);
          tmp$ = any$result;
        }
        if (tmp$) {
          this.exceptionState_0 = 3;
          this.state_0 = 1;
          this.result_0 = this.local$closure$feature.beginLogging_0(this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          this.local$tmp$ = null;
          this.state_0 = 6;
          continue;
        }
      case 1:
        this.state_0 = 2;
        this.result_0 = this.local$closure$feature.logRequest_0(this.local$$receiver.context, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 2:
        this.local$tmp$ = this.result_0;
        this.exceptionState_0 = 12;
        this.finallyPath_0 = [5];
        this.state_0 = 4;
        continue;
      case 3:
        this.finallyPath_0 = [12];
        this.exceptionState_0 = 4;
        var _ = this.exception_0;
        if (Kotlin.isType(_, Throwable)) {
          this.local$tmp$ = null;
        } else 
          throw _;
        this.finallyPath_0 = [5];
        this.state_0 = 4;
        continue;
      case 4:
        this.exceptionState_0 = 12;
        this.local$closure$feature.doneLogging_0();
        this.state_0 = this.finallyPath_0.shift();
        continue;
      case 5:
        this.state_0 = 6;
        continue;
      case 6:
        var response = this.local$tmp$;
        this.exceptionState_0 = 9;
        this.state_0 = 7;
        this.result_0 = this.local$$receiver.proceedWith_trkh7z$(response != null ? response : this.local$$receiver.subject, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 7:
        this.exceptionState_0 = 12;
        this.finallyPath_0 = [8];
        this.state_0 = 10;
        this.$returnValue = this.result_0;
        continue;
      case 8:
        return this.$returnValue;
      case 9:
        this.finallyPath_0 = [12];
        this.exceptionState_0 = 10;
        var cause = this.exception_0;
        if (Kotlin.isType(cause, Throwable)) {
          this.local$closure$feature.logRequestException_0(this.local$$receiver.context, cause);
          throw cause;
        } else 
          throw cause;
      case 10:
        this.exceptionState_0 = 12;
        this.state_0 = this.finallyPath_0.shift();
        continue;
      case 11:
        return;
      case 12:
        throw this.exception_0;
      default:
        this.state_0 = 12;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 12) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function Logging$Companion$install$lambda(closure$feature_0) {
    return function($receiver_0, it_0, continuation_0, suspended) {
  var instance = new Coroutine$Logging$Companion$install$lambda(closure$feature_0, $receiver_0, it_0, this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  function Coroutine$Logging$Companion$install$lambda_0(closure$feature_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 7;
    this.local$closure$feature = closure$feature_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Logging$Companion$install$lambda_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$Logging$Companion$install$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Logging$Companion$install$lambda_0.prototype.constructor = Coroutine$Logging$Companion$install$lambda_0;
  Coroutine$Logging$Companion$install$lambda_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.exceptionState_0 = 4;
        this.state_0 = 1;
        this.result_0 = this.local$closure$feature.beginLogging_0(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        this.local$closure$feature.logResponse_0(this.local$$receiver.context.response);
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.proceedWith_trkh7z$(this.local$$receiver.subject, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 2:
        this.exceptionState_0 = 7;
        this.finallyPath_0 = [3];
        this.state_0 = 5;
        this.$returnValue = this.result_0;
        continue;
      case 3:
        return this.$returnValue;
      case 4:
        this.finallyPath_0 = [7];
        this.exceptionState_0 = 5;
        var cause = this.exception_0;
        if (Kotlin.isType(cause, Throwable)) {
          this.local$closure$feature.logResponseException_0(this.local$$receiver.context, cause);
          throw cause;
        } else 
          throw cause;
      case 5:
        this.exceptionState_0 = 7;
        if (!this.local$closure$feature.level.body) {
          this.local$closure$feature.doneLogging_0();
        }
        this.state_0 = this.finallyPath_0.shift();
        continue;
      case 6:
        return;
      case 7:
        throw this.exception_0;
      default:
        this.state_0 = 7;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 7) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function Logging$Companion$install$lambda_0(closure$feature_0) {
    return function($receiver_0, it_0, continuation_0, suspended) {
  var instance = new Coroutine$Logging$Companion$install$lambda_0(closure$feature_0, $receiver_0, it_0, this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  function Coroutine$Logging$Companion$install$lambda_1(closure$feature_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 4;
    this.local$closure$feature = closure$feature_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Logging$Companion$install$lambda_1.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$Logging$Companion$install$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Logging$Companion$install$lambda_1.prototype.constructor = Coroutine$Logging$Companion$install$lambda_1;
  Coroutine$Logging$Companion$install$lambda_1.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.exceptionState_0 = 2;
        this.state_0 = 1;
        this.result_0 = this.local$$receiver.proceed(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        return this.result_0;
      case 2:
        this.exceptionState_0 = 4;
        var cause = this.exception_0;
        if (Kotlin.isType(cause, Throwable)) {
          this.local$closure$feature.logResponseException_0(this.local$$receiver.context, cause);
          throw cause;
        } else 
          throw cause;
      case 3:
        return;
      case 4:
        throw this.exception_0;
      default:
        this.state_0 = 4;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 4) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function Logging$Companion$install$lambda_1(closure$feature_0) {
    return function($receiver_0, it_0, continuation_0, suspended) {
  var instance = new Coroutine$Logging$Companion$install$lambda_1(closure$feature_0, $receiver_0, it_0, this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  function Coroutine$Logging$Companion$install$lambda_2(closure$feature_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.local$closure$feature = closure$feature_0;
    this.local$it = it_0;
  }
  Coroutine$Logging$Companion$install$lambda_2.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$Logging$Companion$install$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Logging$Companion$install$lambda_2.prototype.constructor = Coroutine$Logging$Companion$install$lambda_2;
  Coroutine$Logging$Companion$install$lambda_2.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.exceptionState_0 = 3;
        this.state_0 = 1;
        this.result_0 = this.local$closure$feature.logResponseBody_0(contentType(this.local$it), this.local$it.content, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        this.exceptionState_0 = 8;
        this.finallyPath_0 = [2];
        this.state_0 = 6;
        this.$returnValue = this.result_0;
        continue;
      case 2:
        return this.$returnValue;
      case 3:
        this.finallyPath_0 = [8];
        this.exceptionState_0 = 6;
        var _ = this.exception_0;
        if (Kotlin.isType(_, Throwable)) {
          this.exceptionState_0 = 8;
          this.finallyPath_0 = [4];
          this.state_0 = 6;
          this.$returnValue = Unit;
          continue;
        } else {
          throw _;
        }
      case 4:
        return this.$returnValue;
      case 5:
        this.finallyPath_0 = [7];
        this.state_0 = 6;
        continue;
      case 6:
        this.exceptionState_0 = 8;
        this.local$closure$feature.doneLogging_0();
        this.state_0 = this.finallyPath_0.shift();
        continue;
      case 7:
        return;
      case 8:
        throw this.exception_0;
      default:
        this.state_0 = 8;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 8) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function Logging$Companion$install$lambda_2(closure$feature_0) {
    return function(it_0, continuation_0, suspended) {
  var instance = new Coroutine$Logging$Companion$install$lambda_2(closure$feature_0, it_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  Logging$Companion.prototype.install_wojrb5$ = function(feature, scope) {
  scope.sendPipeline.intercept_h71y74$(HttpSendPipeline.Phases.Monitoring, Logging$Companion$install$lambda(feature));
  scope.receivePipeline.intercept_h71y74$(HttpReceivePipeline.Phases.State, Logging$Companion$install$lambda_0(feature));
  scope.responsePipeline.intercept_h71y74$(HttpResponsePipeline.Phases.Receive, Logging$Companion$install$lambda_1(feature));
  if (!feature.level.body) {
    return;
  }
  var observer = Logging$Companion$install$lambda_2(feature);
  ResponseObserver.Feature.install_wojrb5$(new ResponseObserver(observer), scope);
};
  Logging$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: [HttpClientFeature]};
  var Logging$Companion_instance = null;
  function Logging$Companion_getInstance() {
    if (Logging$Companion_instance === null) {
      new Logging$Companion();
    }
    return Logging$Companion_instance;
  }
  Logging.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Logging', 
  interfaces: []};
  function Logging_init(logger, level, $this) {
    $this = $this || Object.create(Logging.prototype);
    Logging.call($this, logger, level, emptyList());
    return $this;
  }
  function Logging$lambda($receiver) {
    return Unit;
  }
  function Logging_0($receiver, block) {
    if (block === void 0) 
      block = Logging$lambda;
    $receiver.install_xlxg29$(Logging$Companion_getInstance(), block);
  }
  function Coroutine$tryReadText($receiver_0, charset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$$receiver = $receiver_0;
    this.local$charset = charset_0;
  }
  Coroutine$tryReadText.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$tryReadText.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadText.prototype.constructor = Coroutine$tryReadText;
  Coroutine$tryReadText.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.exceptionState_0 = 2;
        this.state_0 = 1;
        this.result_0 = readRemaining(this.local$$receiver, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        return readText(this.result_0, this.local$charset);
      case 2:
        this.exceptionState_0 = 5;
        var cause = this.exception_0;
        if (Kotlin.isType(cause, Throwable)) {
          return null;
        } else {
          throw cause;
        }
      case 3:
        this.state_0 = 4;
        continue;
      case 4:
        return;
      case 5:
        throw this.exception_0;
      default:
        this.state_0 = 5;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 5) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function tryReadText($receiver_0, charset_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadText($receiver_0, charset_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-client-logging-js-legacy.io.ktor.client.features.logging.tryReadText_ttwl20$', wrapFunction(function() {
  var readRemaining = _.$$importsForInline$$['ktor-ktor-io-js-legacy'].io.ktor.utils.io.readRemaining_3dmw3p$;
  var readText = _.$$importsForInline$$['ktor-ktor-io-js-legacy'].io.ktor.utils.io.core.readText_1lnizf$;
  var Throwable = Error;
  return function($receiver, charset, continuation) {
  try {
    Kotlin.suspendCall(readRemaining($receiver, Kotlin.coroutineReceiver()));
    return readText(Kotlin.coroutineResult(Kotlin.coroutineReceiver()), charset);
  }  catch (cause) {
  if (Kotlin.isType(cause, Throwable)) {
    return null;
  } else 
    throw cause;
}
};
}));
  function Coroutine$observe($receiver_0, log_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$log = log_0;
  }
  Coroutine$observe.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$observe.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$observe.prototype.constructor = Coroutine$observe;
  Coroutine$observe.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (Kotlin.isType(this.local$$receiver, OutgoingContent$ByteArrayContent)) {
          this.state_0 = 4;
          this.result_0 = writeFully(this.local$log, this.local$$receiver.bytes(), this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          if (Kotlin.isType(this.local$$receiver, OutgoingContent$ReadChannelContent)) {
            var responseChannel = ByteChannel();
            var content = this.local$$receiver.readFrom();
            copyToBoth(content, this.local$log, responseChannel);
            return new LoggedContent(this.local$$receiver, responseChannel);
          } else {
            if (Kotlin.isType(this.local$$receiver, OutgoingContent$WriteChannelContent)) {
              var responseChannel_0 = ByteChannel();
              var content_0 = toReadChannel(this.local$$receiver);
              copyToBoth(content_0, this.local$log, responseChannel_0);
              return new LoggedContent(this.local$$receiver, responseChannel_0);
            } else {
              close(this.local$log);
              return this.local$$receiver;
            }
          }
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        continue;
      case 3:
        this.state_0 = 5;
        continue;
      case 4:
        close(this.local$log);
        return this.local$$receiver;
      case 5:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function observe($receiver_0, log_0, continuation_0, suspended) {
    var instance = new Coroutine$observe($receiver_0, log_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$toReadChannel$lambda(this$toReadChannel_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$toReadChannel = this$toReadChannel_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toReadChannel$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$toReadChannel$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toReadChannel$lambda.prototype.constructor = Coroutine$toReadChannel$lambda;
  Coroutine$toReadChannel$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$this$toReadChannel.writeTo_h3x4ir$(this.local$$receiver.channel, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function toReadChannel$lambda(this$toReadChannel_0) {
    return function($receiver_0, continuation_0, suspended) {
  var instance = new Coroutine$toReadChannel$lambda(this$toReadChannel_0, $receiver_0, this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  function toReadChannel($receiver) {
    return writer(coroutines.GlobalScope, coroutines.Dispatchers.Unconfined, void 0, toReadChannel$lambda($receiver)).channel;
  }
  function get_DEFAULT($receiver) {
    return get_SIMPLE($receiver);
  }
  Object.defineProperty(LogLevel, 'ALL', {
  get: LogLevel$ALL_getInstance});
  Object.defineProperty(LogLevel, 'HEADERS', {
  get: LogLevel$HEADERS_getInstance});
  Object.defineProperty(LogLevel, 'BODY', {
  get: LogLevel$BODY_getInstance});
  Object.defineProperty(LogLevel, 'INFO', {
  get: LogLevel$INFO_getInstance});
  Object.defineProperty(LogLevel, 'NONE', {
  get: LogLevel$NONE_getInstance});
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  var package$features = package$client.features || (package$client.features = {});
  var package$logging = package$features.logging || (package$features.logging = {});
  package$logging.LogLevel = LogLevel;
  package$logging.LoggedContent = LoggedContent;
  Object.defineProperty(Logger, 'Companion', {
  get: Logger$Companion_getInstance});
  package$logging.Logger = Logger;
  package$logging.get_SIMPLE_3z44iy$ = get_SIMPLE;
  package$logging.get_EMPTY_3z44iy$ = get_EMPTY;
  Logging.Config = Logging$Config;
  $$importsForInline$$['ktor-ktor-client-logging-js-legacy'] = _;
  Object.defineProperty(Logging, 'Companion', {
  get: Logging$Companion_getInstance});
  package$logging.Logging_init_ctpnbw$ = Logging_init;
  package$logging.Logging = Logging;
  package$logging.Logging_erekmq$ = Logging_0;
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  package$logging.tryReadText_ttwl20$ = tryReadText;
  package$logging.observe_hgwr3r$ = observe;
  package$logging.get_DEFAULT_3z44iy$ = get_DEFAULT;
  Logging$Companion.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  Kotlin.defineModule('ktor-ktor-client-logging-js-legacy', _);
  return _;
}));
