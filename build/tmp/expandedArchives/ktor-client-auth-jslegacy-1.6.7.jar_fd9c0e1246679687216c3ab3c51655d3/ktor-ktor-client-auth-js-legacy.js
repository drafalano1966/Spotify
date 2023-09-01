(function(root, factory) {
  if (typeof define === 'function' && define.amd) 
    define(['exports', 'kotlin', 'ktor-ktor-client-core-js-legacy', 'ktor-ktor-utils-js-legacy', 'ktor-ktor-http-js-legacy', 'ktor-ktor-io-js-legacy'], factory);
  else if (typeof exports === 'object') 
    factory(module.exports, require('kotlin'), require('ktor-ktor-client-core-js-legacy'), require('ktor-ktor-utils-js-legacy'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-io-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-auth-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-auth-js-legacy'.");
    }
    if (typeof this['ktor-ktor-client-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-auth-js-legacy'. Its dependency 'ktor-ktor-client-core-js-legacy' was not found. Please, check whether 'ktor-ktor-client-core-js-legacy' is loaded prior to 'ktor-ktor-client-auth-js-legacy'.");
    }
    if (typeof this['ktor-ktor-utils-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-auth-js-legacy'. Its dependency 'ktor-ktor-utils-js-legacy' was not found. Please, check whether 'ktor-ktor-utils-js-legacy' is loaded prior to 'ktor-ktor-client-auth-js-legacy'.");
    }
    if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-auth-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-client-auth-js-legacy'.");
    }
    if (false) {

    }
    if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-auth-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-client-auth-js-legacy'.");
    }
    root['ktor-ktor-client-auth-js-legacy'] = factory(typeof this['ktor-ktor-client-auth-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-client-auth-js-legacy'], kotlin, this['ktor-ktor-client-core-js-legacy'], this['ktor-ktor-utils-js-legacy'], this['ktor-ktor-http-js-legacy'], this['ktor-ktor-io-js-legacy']);
  }
}(this, function(_, Kotlin, $module$ktor_ktor_client_core_js_legacy, $module$ktor_ktor_utils_js_legacy, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_io_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var HttpRequestPipeline = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.HttpRequestPipeline;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var AttributeKey = $module$ktor_ktor_utils_js_legacy.io.ktor.util.AttributeKey;
  var HttpSend = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.features.HttpSend;
  var feature = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.features.feature_ccg70z$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var HttpStatusCode = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpStatusCode;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_mqih57$;
  var http = $module$ktor_ktor_http_js_legacy.io.ktor.http;
  var parseAuthorizationHeader = $module$ktor_ktor_http_js_legacy.io.ktor.http.auth.parseAuthorizationHeader_61zpoe$;
  var HttpRequestBuilder = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.HttpRequestBuilder;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var HttpClientFeature = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.features.HttpClientFeature;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;


  var throwUPAE = Kotlin.throwUPAE;
  var auth = $module$ktor_ktor_http_js_legacy.io.ktor.http.auth;
  var equals = Kotlin.kotlin.text.equals_igcy3c$;
  var HttpAuthHeader$Parameterized = $module$ktor_ktor_http_js_legacy.io.ktor.http.auth.HttpAuthHeader.Parameterized;
  var equals_0 = Kotlin.equals;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var encodeBase64 = $module$ktor_ktor_utils_js_legacy.io.ktor.util.encodeBase64_964n91$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var encodeToByteArray = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.encodeToByteArray_fj4osb$;
  var headers = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.headers_nc42ot$;
  var URLBuilder = $module$ktor_ktor_http_js_legacy.io.ktor.http.URLBuilder;
  var takeFrom = $module$ktor_ktor_http_js_legacy.io.ktor.http.takeFrom_rs9g2p$;
  var toString = Kotlin.toString;
  var hex = $module$ktor_ktor_utils_js_legacy.io.ktor.util.hex_fqrh44$;
  var get_fullPath = $module$ktor_ktor_http_js_legacy.io.ktor.http.get_fullPath_5y8s0c$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var HttpAuthHeader$HttpAuthHeader$Parameterized_init = $module$ktor_ktor_http_js_legacy.io.ktor.http.auth.HttpAuthHeader.Parameterized_init_9j85vu$;
  var Digest = $module$ktor_ktor_utils_js_legacy.io.ktor.util.Digest_61zpoe$;
  var build = $module$ktor_ktor_utils_js_legacy.io.ktor.util.build_1mpr19$;
  var generateNonce = $module$ktor_ktor_utils_js_legacy.io.ktor.util.generateNonce;

  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function Auth(providers) {
    Auth$Feature_getInstance();
    if (providers === void 0) {
      providers = ArrayList_init();
    }
    this.providers = providers;
  }
  function Auth$Feature() {
    Auth$Feature_instance = this;
    this.key_6bts5$_0 = new AttributeKey('DigestAuth');
  }
  Object.defineProperty(Auth$Feature.prototype, 'key', {
  configurable: true, 
  get: function() {
  return this.key_6bts5$_0;
}});
  Auth$Feature.prototype.prepare_oh3mgy$$default = function(block) {
  var $receiver = new Auth();
  block($receiver);
  return $receiver;
};
  function Coroutine$Auth$Feature$install$lambda(closure$feature_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$feature = closure$feature_0;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Auth$Feature$install$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$Auth$Feature$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Auth$Feature$install$lambda.prototype.constructor = Coroutine$Auth$Feature$install$lambda;
  Coroutine$Auth$Feature$install$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var $receiver = this.local$closure$feature.providers;
        var destination = ArrayList_init();
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.sendWithoutRequest_s9rlw$(this.local$$receiver.context)) 
            destination.add_11rb$(element);
        }
        this.local$tmp$ = destination.iterator();
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        if (!this.local$tmp$.hasNext()) {
          this.state_0 = 4;
          continue;
        }
        var element_0 = this.local$tmp$.next();
        this.state_0 = 3;
        this.result_0 = element_0.addRequestHeaders_s9rlw$(this.local$$receiver.context, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        this.state_0 = 2;
        continue;
      case 4:
        return Unit;
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
  function Auth$Feature$install$lambda(closure$feature_0) {
    return function($receiver_0, it_0, continuation_0, suspended) {
  var instance = new Coroutine$Auth$Feature$install$lambda(closure$feature_0, $receiver_0, it_0, this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  function Coroutine$Auth$Feature$install$lambda_0(closure$circuitBreaker_0, closure$feature_0, $receiver_0, origin_0, context_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$circuitBreaker = closure$circuitBreaker_0;
    this.local$closure$feature = closure$feature_0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$call = void 0;
    this.local$candidateProviders = void 0;
    this.local$headerValue = void 0;
    this.local$authHeader = void 0;
    this.local$provider = void 0;
    this.local$request = void 0;
    this.local$$receiver = $receiver_0;
    this.local$origin = origin_0;
    this.local$context = context_0;
  }
  Coroutine$Auth$Feature$install$lambda_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$Auth$Feature$install$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Auth$Feature$install$lambda_0.prototype.constructor = Coroutine$Auth$Feature$install$lambda_0;
  Coroutine$Auth$Feature$install$lambda_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$, tmp$_0;
        if (!((tmp$ = this.local$origin.response.status) != null ? tmp$.equals(HttpStatusCode.Companion.Unauthorized) : null)) {
          return this.local$origin;
        } else {
          this.state_0 = 2;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        if (this.local$origin.request.attributes.contains_w48dwb$(this.local$closure$circuitBreaker)) {
          return this.local$origin;
        } else {
          this.state_0 = 3;
          continue;
        }
      case 3:
        this.local$call = this.local$origin;
        this.local$candidateProviders = HashSet_init(this.local$closure$feature.providers);
        this.state_0 = 4;
        continue;
      case 4:
        if (!((tmp$_0 = this.local$call.response.status) != null ? tmp$_0.equals(HttpStatusCode.Companion.Unauthorized) : null)) {
          this.state_0 = 12;
          continue;
        }
        this.local$headerValue = this.local$call.response.headers.get_61zpoe$(http.HttpHeaders.WWWAuthenticate);
        if (this.local$headerValue == null || this.local$headerValue.length === 0) {
          return this.local$call;
        } else {
          this.state_0 = 5;
          continue;
        }
      case 5:
        this.local$tmp$_1 = parseAuthorizationHeader(this.local$headerValue);
        if (this.local$tmp$_1 == null) {
          return this.local$call;
        } else {
          this.state_0 = 6;
          continue;
        }
      case 6:
        this.local$authHeader = this.local$tmp$_1;
        var firstOrNull$result;
        firstOrNull$break:
          do {
            var tmp$_1;
            tmp$_1 = this.local$candidateProviders.iterator();
            while (tmp$_1.hasNext()) {
              var element = tmp$_1.next();
              if (element.isApplicable_902e1j$(this.local$authHeader)) {
                firstOrNull$result = element;
                break firstOrNull$break;
              }
            }
            firstOrNull$result = null;
          } while (false);
        this.local$tmp$_2 = firstOrNull$result;
        if (this.local$tmp$_2 == null) {
          return this.local$call;
        } else {
          this.state_0 = 7;
          continue;
        }
      case 7:
        this.local$provider = this.local$tmp$_2;
        this.state_0 = 8;
        this.result_0 = this.local$provider.refreshToken_48zimp$(this.local$call.response, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 8:
        if (!this.result_0) {
          return this.local$call;
        } else {
          this.state_0 = 9;
          continue;
        }
      case 9:
        this.local$candidateProviders.remove_11rb$(this.local$provider);
        this.local$request = new HttpRequestBuilder();
        this.local$request.takeFromWithExecutionContext_s9rlw$(this.local$context);
        this.local$request.attributes.put_uuntuo$(AuthHeaderAttribute, this.local$authHeader);
        this.state_0 = 10;
        this.result_0 = this.local$provider.addRequestHeaders_s9rlw$(this.local$request, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 10:
        this.local$request.attributes.put_uuntuo$(this.local$closure$circuitBreaker, Unit);
        this.state_0 = 11;
        this.result_0 = this.local$$receiver.execute_s9rlw$(this.local$request, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 11:
        this.local$call = this.result_0;
        this.state_0 = 4;
        continue;
      case 12:
        return this.local$call;
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
  function Auth$Feature$install$lambda_0(closure$circuitBreaker_0, closure$feature_0) {
    return function($receiver_0, origin_0, context_0, continuation_0, suspended) {
  var instance = new Coroutine$Auth$Feature$install$lambda_0(closure$circuitBreaker_0, closure$feature_0, $receiver_0, origin_0, context_0, this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  Auth$Feature.prototype.install_wojrb5$ = function(feature_0, scope) {
  scope.requestPipeline.intercept_h71y74$(HttpRequestPipeline.Phases.State, Auth$Feature$install$lambda(feature_0));
  var circuitBreaker = new AttributeKey('auth-request');
  ensureNotNull(feature(scope, HttpSend.Feature)).intercept_vsqnz3$(Auth$Feature$install$lambda_0(circuitBreaker, feature_0));
};
  Auth$Feature.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Feature', 
  interfaces: [HttpClientFeature]};
  var Auth$Feature_instance = null;
  function Auth$Feature_getInstance() {
    if (Auth$Feature_instance === null) {
      new Auth$Feature();
    }
    return Auth$Feature_instance;
  }
  Auth.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Auth', 
  interfaces: []};
  function Auth_0($receiver, block) {
    $receiver.install_xlxg29$(Auth$Feature_getInstance(), block);
  }
  var AuthHeaderAttribute;
  function AuthProvider() {
  }
  AuthProvider.prototype.sendWithoutRequest_s9rlw$ = function(request) {
  return this.sendWithoutRequest;
};
  AuthProvider.prototype.refreshToken_48zimp$ = function(response, continuation) {
  return true;
};
  AuthProvider.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'AuthProvider', 
  interfaces: []};
  function AuthTokenHolder(loadTokens) {
    this.loadTokens_0 = loadTokens;
    this.initialized_0 = false;
    this.cachedBearerTokens_0 = null;
  }
  AuthTokenHolder.prototype.clearToken_8be2vx$ = function() {
  this.cachedBearerTokens_0 = null;
  this.initialized_0 = false;
};
  function Coroutine$loadToken_8be2vx$($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$loadToken_8be2vx$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$loadToken_8be2vx$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadToken_8be2vx$.prototype.constructor = Coroutine$loadToken_8be2vx$;
  Coroutine$loadToken_8be2vx$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if ((function(scope) {
  return scope.$this.initialized_0 === false ? function() {
  scope.$this.initialized_0 = true;
  return true;
}() : false;
})(this)) {
          this.state_0 = 2;
          this.result_0 = this.$this.loadTokens_0(this);
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
        var token = this.result_0;
        this.$this.cachedBearerTokens_0 = token;
        return token;
      case 3:
        return this.$this.cachedBearerTokens_0;
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
  AuthTokenHolder.prototype.loadToken_8be2vx$ = function(continuation_0, suspended) {
  var instance = new Coroutine$loadToken_8be2vx$(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$setToken_oeqx9q$($this, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$block = block_0;
  }
  Coroutine$setToken_oeqx9q$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$setToken_oeqx9q$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$setToken_oeqx9q$.prototype.constructor = Coroutine$setToken_oeqx9q$;
  Coroutine$setToken_oeqx9q$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$block(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var token = this.result_0;
        this.$this.cachedBearerTokens_0 = token;
        return token;
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
  AuthTokenHolder.prototype.setToken_oeqx9q$ = function(block_0, continuation_0, suspended) {
  var instance = new Coroutine$setToken_oeqx9q$(this, block_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  AuthTokenHolder.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'AuthTokenHolder', 
  interfaces: []};
  function basic($receiver, block) {
    var $receiver_0 = new BasicAuthConfig();
    block($receiver_0);
    $receiver.providers.add_11rb$(new BasicAuthProvider($receiver_0._credentials_8be2vx$, $receiver_0.realm, $receiver_0._sendWithoutRequest_8be2vx$));
  }
  function BasicAuthConfig() {
    this.username_dzdau4$_0 = this.username_dzdau4$_0;
    this.password_z60toh$_0 = this.password_z60toh$_0;
    this.sendWithoutRequest = false;
    this.realm = null;
    this._sendWithoutRequest_8be2vx$ = BasicAuthConfig$_sendWithoutRequest$lambda(this);
    this._credentials_8be2vx$ = BasicAuthConfig$_credentials$lambda(this);
  }
  Object.defineProperty(BasicAuthConfig.prototype, 'username', {
  configurable: true, 
  get: function() {
  if (this.username_dzdau4$_0 == null) 
    return throwUPAE('username');
  return this.username_dzdau4$_0;
}, 
  set: function(username) {
  this.username_dzdau4$_0 = username;
}});
  Object.defineProperty(BasicAuthConfig.prototype, 'password', {
  configurable: true, 
  get: function() {
  if (this.password_z60toh$_0 == null) 
    return throwUPAE('password');
  return this.password_z60toh$_0;
}, 
  set: function(password) {
  this.password_z60toh$_0 = password;
}});
  BasicAuthConfig.prototype.sendWithoutRequest_j4x09n$ = function(block) {
  this._sendWithoutRequest_8be2vx$ = block;
};
  BasicAuthConfig.prototype.credentials_2w1auh$ = function(block) {
  this._credentials_8be2vx$ = block;
};
  function BasicAuthConfig$_sendWithoutRequest$lambda(this$BasicAuthConfig) {
    return function(it) {
  return this$BasicAuthConfig.sendWithoutRequest;
};
  }
  function Coroutine$BasicAuthConfig$_credentials$lambda(this$BasicAuthConfig_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$BasicAuthConfig = this$BasicAuthConfig_0;
  }
  Coroutine$BasicAuthConfig$_credentials$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$BasicAuthConfig$_credentials$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BasicAuthConfig$_credentials$lambda.prototype.constructor = Coroutine$BasicAuthConfig$_credentials$lambda;
  Coroutine$BasicAuthConfig$_credentials$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        return new BasicAuthCredentials(this.local$this$BasicAuthConfig.username, this.local$this$BasicAuthConfig.password);
      case 1:
        throw this.exception_0;
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
  function BasicAuthConfig$_credentials$lambda(this$BasicAuthConfig_0) {
    return function(continuation_0, suspended) {
  var instance = new Coroutine$BasicAuthConfig$_credentials$lambda(this$BasicAuthConfig_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  BasicAuthConfig.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'BasicAuthConfig', 
  interfaces: []};
  function BasicAuthCredentials(username, password) {
    this.username = username;
    this.password = password;
  }
  BasicAuthCredentials.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'BasicAuthCredentials', 
  interfaces: []};
  function BasicAuthProvider(credentials, realm, sendWithoutRequestCallback) {
    if (realm === void 0) 
      realm = null;
    if (sendWithoutRequestCallback === void 0) 
      sendWithoutRequestCallback = BasicAuthProvider_init$lambda;
    this.credentials_0 = credentials;
    this.realm_0 = realm;
    this.sendWithoutRequestCallback_0 = sendWithoutRequestCallback;
    this.tokensHolder_0 = new AuthTokenHolder(this.credentials_0);
  }
  Object.defineProperty(BasicAuthProvider.prototype, 'sendWithoutRequest', {
  configurable: true, 
  get: function() {
  throw IllegalStateException_init('Deprecated'.toString());
}});
  BasicAuthProvider.prototype.sendWithoutRequest_s9rlw$ = function(request) {
  return this.sendWithoutRequestCallback_0(request);
};
  BasicAuthProvider.prototype.isApplicable_902e1j$ = function(auth_0) {
  if (!equals(auth.AuthScheme.Basic, auth_0.authScheme, true)) 
    return false;
  if (this.realm_0 != null) {
    if (!Kotlin.isType(auth_0, HttpAuthHeader$Parameterized)) 
      return false;
    return equals_0(auth_0.parameter_61zpoe$('realm'), this.realm_0);
  }
  return true;
};
  function Coroutine$addRequestHeaders_s9rlw$($this, request_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$request = request_0;
  }
  Coroutine$addRequestHeaders_s9rlw$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$addRequestHeaders_s9rlw$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addRequestHeaders_s9rlw$.prototype.constructor = Coroutine$addRequestHeaders_s9rlw$;
  Coroutine$addRequestHeaders_s9rlw$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.tokensHolder_0.loadToken_8be2vx$(this);
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
        var credentials = this.local$tmp$;
        this.local$request.headers.set_puj7f4$(http.HttpHeaders.Authorization, constructBasicAuthValue(credentials));
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
  BasicAuthProvider.prototype.addRequestHeaders_s9rlw$ = function(request_0, continuation_0, suspended) {
  var instance = new Coroutine$addRequestHeaders_s9rlw$(this, request_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$refreshToken_48zimp$($this, response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$refreshToken_48zimp$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$refreshToken_48zimp$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$refreshToken_48zimp$.prototype.constructor = Coroutine$refreshToken_48zimp$;
  Coroutine$refreshToken_48zimp$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.tokensHolder_0.setToken_oeqx9q$(this.$this.credentials_0, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return true;
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
  BasicAuthProvider.prototype.refreshToken_48zimp$ = function(response_0, continuation_0, suspended) {
  var instance = new Coroutine$refreshToken_48zimp$(this, response_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function BasicAuthProvider_init$lambda(it) {
    return false;
  }
  BasicAuthProvider.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'BasicAuthProvider', 
  interfaces: [AuthProvider]};
  function BasicAuthProvider_init(username, password, realm, sendWithoutRequest, $this) {
    if (realm === void 0) 
      realm = null;
    if (sendWithoutRequest === void 0) 
      sendWithoutRequest = false;
    $this = $this || Object.create(BasicAuthProvider.prototype);
    BasicAuthProvider.call($this, BasicAuthProvider_init$lambda_0(username, password), realm, BasicAuthProvider_init$lambda_1(sendWithoutRequest));
    return $this;
  }
  function Coroutine$BasicAuthProvider_init$lambda(closure$username_0, closure$password_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$username = closure$username_0;
    this.local$closure$password = closure$password_0;
  }
  Coroutine$BasicAuthProvider_init$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$BasicAuthProvider_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BasicAuthProvider_init$lambda.prototype.constructor = Coroutine$BasicAuthProvider_init$lambda;
  Coroutine$BasicAuthProvider_init$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        return new BasicAuthCredentials(this.local$closure$username, this.local$closure$password);
      case 1:
        throw this.exception_0;
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
  function BasicAuthProvider_init$lambda_0(closure$username_0, closure$password_0) {
    return function(continuation_0, suspended) {
  var instance = new Coroutine$BasicAuthProvider_init$lambda(closure$username_0, closure$password_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  function BasicAuthProvider_init$lambda_1(closure$sendWithoutRequest) {
    return function(it) {
  return closure$sendWithoutRequest;
};
  }
  function constructBasicAuthValue(credentials) {
    var authString = credentials.username + ':' + credentials.password;
    var authBuf = encodeBase64(encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), authString, 0, authString.length));
    return 'Basic ' + authBuf;
  }
  function bearer($receiver, block) {
    var $receiver_0 = new BearerAuthConfig();
    block($receiver_0);
    $receiver.providers.add_11rb$(new BearerAuthProvider($receiver_0._refreshTokens_8be2vx$, $receiver_0._loadTokens_8be2vx$, $receiver_0._sendWithoutRequest_8be2vx$, $receiver_0.realm));
  }
  function BearerTokens(accessToken, refreshToken) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
  BearerTokens.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'BearerTokens', 
  interfaces: []};
  function BearerAuthConfig() {
    this._refreshTokens_8be2vx$ = BearerAuthConfig$_refreshTokens$lambda;
    this._loadTokens_8be2vx$ = BearerAuthConfig$_loadTokens$lambda;
    this._sendWithoutRequest_8be2vx$ = BearerAuthConfig$_sendWithoutRequest$lambda;
    this.realm = null;
  }
  BearerAuthConfig.prototype.refreshTokens_z1lvxr$ = function(block) {
  this._refreshTokens_8be2vx$ = block;
};
  BearerAuthConfig.prototype.loadTokens_f1ioms$ = function(block) {
  this._loadTokens_8be2vx$ = block;
};
  BearerAuthConfig.prototype.sendWithoutRequest_j4x09n$ = function(block) {
  this._sendWithoutRequest_8be2vx$ = block;
};
  function Coroutine$BearerAuthConfig$_refreshTokens$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$BearerAuthConfig$_refreshTokens$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$BearerAuthConfig$_refreshTokens$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BearerAuthConfig$_refreshTokens$lambda.prototype.constructor = Coroutine$BearerAuthConfig$_refreshTokens$lambda;
  Coroutine$BearerAuthConfig$_refreshTokens$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        return null;
      case 1:
        throw this.exception_0;
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
  function BearerAuthConfig$_refreshTokens$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$BearerAuthConfig$_refreshTokens$lambda(it_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$BearerAuthConfig$_loadTokens$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$BearerAuthConfig$_loadTokens$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$BearerAuthConfig$_loadTokens$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BearerAuthConfig$_loadTokens$lambda.prototype.constructor = Coroutine$BearerAuthConfig$_loadTokens$lambda;
  Coroutine$BearerAuthConfig$_loadTokens$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        return null;
      case 1:
        throw this.exception_0;
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
  function BearerAuthConfig$_loadTokens$lambda(continuation_0, suspended) {
    var instance = new Coroutine$BearerAuthConfig$_loadTokens$lambda(continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function BearerAuthConfig$_sendWithoutRequest$lambda(it) {
    return true;
  }
  BearerAuthConfig.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'BearerAuthConfig', 
  interfaces: []};
  function BearerAuthProvider(refreshTokens, loadTokens, sendWithoutRequestCallback, realm) {
    if (sendWithoutRequestCallback === void 0) 
      sendWithoutRequestCallback = BearerAuthProvider_init$lambda;
    this.refreshTokens_0 = refreshTokens;
    this.sendWithoutRequestCallback_0 = sendWithoutRequestCallback;
    this.realm_0 = realm;
    this.tokensHolder_0 = new AuthTokenHolder(loadTokens);
  }
  Object.defineProperty(BearerAuthProvider.prototype, 'sendWithoutRequest', {
  configurable: true, 
  get: function() {
  throw IllegalStateException_init('Deprecated'.toString());
}});
  BearerAuthProvider.prototype.sendWithoutRequest_s9rlw$ = function(request) {
  return this.sendWithoutRequestCallback_0(request);
};
  BearerAuthProvider.prototype.isApplicable_902e1j$ = function(auth_0) {
  if (!equals_0(auth_0.authScheme, auth.AuthScheme.Bearer)) 
    return false;
  if (this.realm_0 == null) 
    return true;
  if (!Kotlin.isType(auth_0, HttpAuthHeader$Parameterized)) 
    return false;
  return equals_0(auth_0.parameter_61zpoe$('realm'), this.realm_0);
};
  function BearerAuthProvider$addRequestHeaders$lambda(closure$token) {
    return function($receiver) {
  var tokenValue = 'Bearer ' + closure$token.accessToken;
  if ($receiver.contains_61zpoe$(http.HttpHeaders.Authorization)) {
    $receiver.remove_61zpoe$(http.HttpHeaders.Authorization);
  }
  $receiver.append_puj7f4$(http.HttpHeaders.Authorization, tokenValue);
  return Unit;
};
  }
  function Coroutine$addRequestHeaders_s9rlw$_0($this, request_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$request = request_0;
  }
  Coroutine$addRequestHeaders_s9rlw$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$addRequestHeaders_s9rlw$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addRequestHeaders_s9rlw$_0.prototype.constructor = Coroutine$addRequestHeaders_s9rlw$_0;
  Coroutine$addRequestHeaders_s9rlw$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.tokensHolder_0.loadToken_8be2vx$(this);
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
        var token = this.local$tmp$;
        headers(this.local$request, BearerAuthProvider$addRequestHeaders$lambda(token));
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
  BearerAuthProvider.prototype.addRequestHeaders_s9rlw$ = function(request_0, continuation_0, suspended) {
  var instance = new Coroutine$addRequestHeaders_s9rlw$_0(this, request_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$BearerAuthProvider$refreshToken$lambda(this$BearerAuthProvider_0, closure$response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$BearerAuthProvider = this$BearerAuthProvider_0;
    this.local$closure$response = closure$response_0;
  }
  Coroutine$BearerAuthProvider$refreshToken$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$BearerAuthProvider$refreshToken$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BearerAuthProvider$refreshToken$lambda.prototype.constructor = Coroutine$BearerAuthProvider$refreshToken$lambda;
  Coroutine$BearerAuthProvider$refreshToken$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$this$BearerAuthProvider.refreshTokens_0(this.local$closure$response, this);
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
  function BearerAuthProvider$refreshToken$lambda(this$BearerAuthProvider_0, closure$response_0) {
    return function(continuation_0, suspended) {
  var instance = new Coroutine$BearerAuthProvider$refreshToken$lambda(this$BearerAuthProvider_0, closure$response_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  function Coroutine$refreshToken_48zimp$_0($this, response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$response = response_0;
  }
  Coroutine$refreshToken_48zimp$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$refreshToken_48zimp$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$refreshToken_48zimp$_0.prototype.constructor = Coroutine$refreshToken_48zimp$_0;
  Coroutine$refreshToken_48zimp$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.tokensHolder_0.setToken_oeqx9q$(BearerAuthProvider$refreshToken$lambda(this.$this, this.local$response), this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return this.result_0 != null;
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
  BearerAuthProvider.prototype.refreshToken_48zimp$ = function(response_0, continuation_0, suspended) {
  var instance = new Coroutine$refreshToken_48zimp$_0(this, response_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  BearerAuthProvider.prototype.clearToken = function(continuation) {
  this.tokensHolder_0.clearToken_8be2vx$();
};
  function BearerAuthProvider_init$lambda(it) {
    return true;
  }
  BearerAuthProvider.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'BearerAuthProvider', 
  interfaces: [AuthProvider]};
  function digest($receiver, block) {
    var $receiver_0 = new DigestAuthConfig();
    block($receiver_0);
    var config = $receiver_0;
    var $receiver_1 = $receiver.providers;
    var element = new DigestAuthProvider(config._credentials_8be2vx$, config.realm, config.algorithmName);
    $receiver_1.add_11rb$(element);
  }
  function DigestAuthConfig() {
    this.algorithmName = 'MD5';
    this.username = '';
    this.password = '';
    this.realm = null;
    this._credentials_8be2vx$ = DigestAuthConfig$_credentials$lambda(this);
  }
  DigestAuthConfig.prototype.credentials_tfj80z$ = function(block) {
  this._credentials_8be2vx$ = block;
};
  function Coroutine$DigestAuthConfig$_credentials$lambda(this$DigestAuthConfig_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$DigestAuthConfig = this$DigestAuthConfig_0;
  }
  Coroutine$DigestAuthConfig$_credentials$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$DigestAuthConfig$_credentials$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DigestAuthConfig$_credentials$lambda.prototype.constructor = Coroutine$DigestAuthConfig$_credentials$lambda;
  Coroutine$DigestAuthConfig$_credentials$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        return new DigestAuthCredentials(this.local$this$DigestAuthConfig.username, this.local$this$DigestAuthConfig.password);
      case 1:
        throw this.exception_0;
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
  function DigestAuthConfig$_credentials$lambda(this$DigestAuthConfig_0) {
    return function(continuation_0, suspended) {
  var instance = new Coroutine$DigestAuthConfig$_credentials$lambda(this$DigestAuthConfig_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  DigestAuthConfig.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'DigestAuthConfig', 
  interfaces: []};
  function DigestAuthCredentials(username, password) {
    this.username = username;
    this.password = password;
  }
  DigestAuthCredentials.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'DigestAuthCredentials', 
  interfaces: []};
  function DigestAuthProvider(credentials, realm, algorithmName) {
    if (realm === void 0) 
      realm = null;
    if (algorithmName === void 0) 
      algorithmName = 'MD5';
    this.credentials_0 = credentials;
    this.realm = realm;
    this.algorithmName = algorithmName;
    this.serverNonce_0 = null;
    this.qop_0 = null;
    this.opaque_0 = null;
    this.clientNonce_0 = generateNonce();
    this.requestCounter_0 = 0;
    this.tokenHolder_0 = new AuthTokenHolder(this.credentials_0);
  }
  Object.defineProperty(DigestAuthProvider.prototype, 'username', {
  configurable: true, 
  get: function() {
  throw IllegalStateException_init('Static username is not supported anymore'.toString());
}});
  Object.defineProperty(DigestAuthProvider.prototype, 'password', {
  configurable: true, 
  get: function() {
  throw IllegalStateException_init('Static username is not supported anymore'.toString());
}});
  Object.defineProperty(DigestAuthProvider.prototype, 'sendWithoutRequest', {
  configurable: true, 
  get: function() {
  throw IllegalStateException_init('Deprecated'.toString());
}});
  DigestAuthProvider.prototype.sendWithoutRequest_s9rlw$ = function(request) {
  return false;
};
  DigestAuthProvider.prototype.isApplicable_902e1j$ = function(auth_0) {
  var tmp$, tmp$_0;
  if (!Kotlin.isType(auth_0, HttpAuthHeader$Parameterized) || !equals_0(auth_0.authScheme, auth.AuthScheme.Digest)) 
    return false;
  tmp$ = auth_0.parameter_61zpoe$('nonce');
  if (tmp$ == null) {
    return false;
  }
  var newNonce = tmp$;
  var newQop = auth_0.parameter_61zpoe$('qop');
  var newOpaque = auth_0.parameter_61zpoe$('opaque');
  tmp$_0 = auth_0.parameter_61zpoe$('realm');
  if (tmp$_0 == null) {
    return false;
  }
  var newRealm = tmp$_0;
  if (!equals_0(newRealm, this.realm) && this.realm != null) {
    return false;
  }
  this.serverNonce_0 = newNonce;
  this.qop_0 = newQop;
  this.opaque_0 = newOpaque;
  return true;
};
  function DigestAuthProvider$addRequestHeaders$lambda(closure$auth) {
    return function($receiver) {
  $receiver.append_puj7f4$(http.HttpHeaders.Authorization, closure$auth.render());
  return Unit;
};
  }
  function Coroutine$addRequestHeaders_s9rlw$_1($this, request_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$nonceCount = void 0;
    this.local$methodName = void 0;
    this.local$url = void 0;
    this.local$nonce = void 0;
    this.local$serverOpaque = void 0;
    this.local$actualQop = void 0;
    this.local$credentials = void 0;
    this.local$start = void 0;
    this.local$request = request_0;
  }
  Coroutine$addRequestHeaders_s9rlw$_1.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$addRequestHeaders_s9rlw$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addRequestHeaders_s9rlw$_1.prototype.constructor = Coroutine$addRequestHeaders_s9rlw$_1;
  Coroutine$addRequestHeaders_s9rlw$_1.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$, tmp$_0, tmp$_1;
        this.local$nonceCount = (function(scope) {
  return ++scope.$this.requestCounter_0;
})(this);
        this.local$methodName = this.local$request.method.value.toUpperCase();
        this.local$url = takeFrom(new URLBuilder(), this.local$request.url).build();
        this.local$nonce = ensureNotNull(this.$this.serverNonce_0);
        this.local$serverOpaque = this.$this.opaque_0;
        this.local$actualQop = this.$this.qop_0;
        this.state_0 = 2;
        this.result_0 = this.$this.tokenHolder_0.loadToken_8be2vx$(this);
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
        this.local$credentials = this.local$tmp$;
        this.state_0 = 4;
        this.result_0 = this.$this.makeDigest_0(this.local$credentials.username + ':' + toString(this.$this.realm) + ':' + this.local$credentials.password, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 4:
        var credential = this.result_0;
        this.local$start = hex(credential);
        this.state_0 = 5;
        this.result_0 = this.$this.makeDigest_0(this.local$methodName + ':' + get_fullPath(this.local$url), this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 5:
        var end = hex(this.result_0);
        if (this.local$actualQop == null) {
          tmp$ = listOf([this.local$start, this.local$nonce, end]);
        } else {
          tmp$ = listOf([this.local$start, this.local$nonce, this.local$nonceCount, this.$this.clientNonce_0, this.local$actualQop, end]);
        }
        var tokenSequence = tmp$;
        this.state_0 = 6;
        this.result_0 = this.$this.makeDigest_0(joinToString(tokenSequence, ':'), this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 6:
        var token = this.result_0;
        var tmp$_2;
        if ((tmp$_1 = this.$this.realm) != null) 
          tmp$_2 = tmp$_1;
        else {
          var tmp$_3;
          if ((tmp$_0 = this.local$request.attributes.getOrNull_yzaw86$(AuthHeaderAttribute)) != null) {
            var tmp$_4, tmp$_5;
            tmp$_3 = (tmp$_5 = Kotlin.isType(tmp$_4 = tmp$_0, HttpAuthHeader$Parameterized) ? tmp$_4 : null) != null ? tmp$_5.parameter_61zpoe$('realm') : null;
          } else 
            tmp$_3 = null;
          tmp$_2 = tmp$_3;
        }
        var realm = tmp$_2;
        var tmp$_6 = auth.AuthScheme.Digest;
        var $receiver = LinkedHashMap_init();
        if (realm != null) {
          $receiver.put_xwzc9p$('realm', realm);
        }
        if (this.local$serverOpaque != null) {
          $receiver.put_xwzc9p$('opaque', this.local$serverOpaque);
        }
        var key = 'username';
        var value = this.local$credentials.username;
        $receiver.put_xwzc9p$(key, value);
        $receiver.put_xwzc9p$('nonce', this.local$nonce);
        var value_0 = this.$this.clientNonce_0;
        $receiver.put_xwzc9p$('cnonce', value_0);
        var key_0 = 'response';
        var value_1 = hex(token);
        $receiver.put_xwzc9p$(key_0, value_1);
        var value_2 = get_fullPath(this.local$url);
        $receiver.put_xwzc9p$('uri', value_2);
        if (this.local$actualQop != null) {
          $receiver.put_xwzc9p$('qop', this.local$actualQop);
        }
        var value_3 = this.local$nonceCount.toString();
        $receiver.put_xwzc9p$('nc', value_3);
        var auth_0 = HttpAuthHeader$HttpAuthHeader$Parameterized_init(tmp$_6, $receiver);
        headers(this.local$request, DigestAuthProvider$addRequestHeaders$lambda(auth_0));
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
  DigestAuthProvider.prototype.addRequestHeaders_s9rlw$ = function(request_0, continuation_0, suspended) {
  var instance = new Coroutine$addRequestHeaders_s9rlw$_1(this, request_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$refreshToken_48zimp$_1($this, response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$refreshToken_48zimp$_1.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$refreshToken_48zimp$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$refreshToken_48zimp$_1.prototype.constructor = Coroutine$refreshToken_48zimp$_1;
  Coroutine$refreshToken_48zimp$_1.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.tokenHolder_0.setToken_oeqx9q$(this.$this.credentials_0, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return true;
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
  DigestAuthProvider.prototype.refreshToken_48zimp$ = function(response_0, continuation_0, suspended) {
  var instance = new Coroutine$refreshToken_48zimp$_1(this, response_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  DigestAuthProvider.prototype.makeDigest_0 = function(data, continuation) {
  var digest = Digest(this.algorithmName);
  return build(digest, encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), data, 0, data.length), continuation);
};
  DigestAuthProvider.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'DigestAuthProvider', 
  interfaces: [AuthProvider]};
  function DigestAuthProvider_init(username, password, realm, algorithmName, $this) {
    if (realm === void 0) 
      realm = null;
    if (algorithmName === void 0) 
      algorithmName = 'MD5';
    $this = $this || Object.create(DigestAuthProvider.prototype);
    DigestAuthProvider.call($this, DigestAuthProvider_init$lambda(username, password), realm, algorithmName);
    return $this;
  }
  function Coroutine$DigestAuthProvider_init$lambda(closure$username_0, closure$password_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$username = closure$username_0;
    this.local$closure$password = closure$password_0;
  }
  Coroutine$DigestAuthProvider_init$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$DigestAuthProvider_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DigestAuthProvider_init$lambda.prototype.constructor = Coroutine$DigestAuthProvider_init$lambda;
  Coroutine$DigestAuthProvider_init$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        return new DigestAuthCredentials(this.local$closure$username, this.local$closure$password);
      case 1:
        throw this.exception_0;
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
  function DigestAuthProvider_init$lambda(closure$username_0, closure$password_0) {
    return function(continuation_0, suspended) {
  var instance = new Coroutine$DigestAuthProvider_init$lambda(closure$username_0, closure$password_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  Object.defineProperty(Auth, 'Feature', {
  get: Auth$Feature_getInstance});
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  var package$features = package$client.features || (package$client.features = {});
  var package$auth = package$features.auth || (package$features.auth = {});
  package$auth.Auth = Auth;
  package$auth.Auth_5fpl88$ = Auth_0;
  Object.defineProperty(package$auth, 'AuthHeaderAttribute_8be2vx$', {
  get: function() {
  return AuthHeaderAttribute;
}});
  package$auth.AuthProvider = AuthProvider;
  var package$providers = package$auth.providers || (package$auth.providers = {});
  package$providers.AuthTokenHolder = AuthTokenHolder;
  package$providers.basic_c7fts0$ = basic;
  package$providers.BasicAuthConfig = BasicAuthConfig;
  package$providers.BasicAuthCredentials = BasicAuthCredentials;
  package$providers.BasicAuthProvider_init_ii6ut2$ = BasicAuthProvider_init;
  package$providers.BasicAuthProvider = BasicAuthProvider;
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  package$providers.constructBasicAuthValue_16hz2r$ = constructBasicAuthValue;
  package$providers.bearer_f237t1$ = bearer;
  package$providers.BearerTokens = BearerTokens;
  package$providers.BearerAuthConfig = BearerAuthConfig;
  package$providers.BearerAuthProvider = BearerAuthProvider;
  package$providers.digest_lqu332$ = digest;
  package$providers.DigestAuthConfig = DigestAuthConfig;
  package$providers.DigestAuthCredentials = DigestAuthCredentials;
  package$providers.DigestAuthProvider_init_8ic32p$ = DigestAuthProvider_init;
  package$providers.DigestAuthProvider = DigestAuthProvider;
  Auth$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  AuthHeaderAttribute = new AttributeKey('AuthHeader');
  Kotlin.defineModule('ktor-ktor-client-auth-js-legacy', _);
  return _;
}));
