(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'core-koin-core-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'core-koin-core-js-legacy'.");
    }root['core-koin-core-js-legacy'] = factory(typeof this['core-koin-core-js-legacy'] === 'undefined' ? {} : this['core-koin-core-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Annotation = Kotlin.kotlin.Annotation;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var hashCode = Kotlin.hashCode;
  var toString = Kotlin.toString;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var equals = Kotlin.equals;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var throwCCE = Kotlin.throwCCE;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Map = Kotlin.kotlin.collections.Map;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var Any = Object;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_us0mfu$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var removeAll = Kotlin.kotlin.collections.removeAll_ye1y7v$;
  var ArrayDeque_init = Kotlin.kotlin.collections.ArrayDeque_init_287e2$;
  var addAll_0 = Kotlin.kotlin.collections.addAll_ipc267$;
  var DurationUnit = Kotlin.kotlin.time.DurationUnit;
  var Pair = Kotlin.kotlin.Pair;
  var TimeSource = Kotlin.kotlin.time.TimeSource;
  var TimedValue_init = Kotlin.kotlin.time.TimedValue;
  var plus_0 = Kotlin.kotlin.collections.plus_qloxvw$;
  var plus_1 = Kotlin.kotlin.collections.plus_drqvgf$;
  var toCharArray = Kotlin.kotlin.text.toCharArray_pdl1vz$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_355ntz$;
  var copyOfRange = Kotlin.kotlin.collections.copyOfRange_wlitf7$;
  var concatToString = Kotlin.kotlin.text.concatToString_355ntz$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Exception_init_0 = Kotlin.kotlin.Exception_init;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var Random = Kotlin.kotlin.random.Random;
  var LazyThreadSafetyMode = Kotlin.kotlin.LazyThreadSafetyMode;
  Kind.prototype = Object.create(Enum.prototype);
  Kind.prototype.constructor = Kind;
  BrokenDefinitionException.prototype = Object.create(Exception.prototype);
  BrokenDefinitionException.prototype.constructor = BrokenDefinitionException;
  ClosedScopeException.prototype = Object.create(Exception.prototype);
  ClosedScopeException.prototype.constructor = ClosedScopeException;
  DefinitionOverrideException.prototype = Object.create(Exception.prototype);
  DefinitionOverrideException.prototype.constructor = DefinitionOverrideException;
  DefinitionParameterException.prototype = Object.create(Exception.prototype);
  DefinitionParameterException.prototype.constructor = DefinitionParameterException;
  InstanceCreationException.prototype = Object.create(Exception.prototype);
  InstanceCreationException.prototype.constructor = InstanceCreationException;
  KoinAppAlreadyStartedException.prototype = Object.create(Exception.prototype);
  KoinAppAlreadyStartedException.prototype.constructor = KoinAppAlreadyStartedException;
  MissingPropertyException.prototype = Object.create(Exception.prototype);
  MissingPropertyException.prototype.constructor = MissingPropertyException;
  NoBeanDefFoundException.prototype = Object.create(Exception.prototype);
  NoBeanDefFoundException.prototype.constructor = NoBeanDefFoundException;
  NoParameterFoundException.prototype = Object.create(Exception.prototype);
  NoParameterFoundException.prototype.constructor = NoParameterFoundException;
  NoPropertyFileFoundException.prototype = Object.create(Exception.prototype);
  NoPropertyFileFoundException.prototype.constructor = NoPropertyFileFoundException;
  NoScopeDefFoundException.prototype = Object.create(Exception.prototype);
  NoScopeDefFoundException.prototype.constructor = NoScopeDefFoundException;
  ScopeAlreadyCreatedException.prototype = Object.create(Exception.prototype);
  ScopeAlreadyCreatedException.prototype.constructor = ScopeAlreadyCreatedException;
  ScopeNotCreatedException.prototype = Object.create(Exception.prototype);
  ScopeNotCreatedException.prototype.constructor = ScopeNotCreatedException;
  FactoryInstanceFactory.prototype = Object.create(InstanceFactory.prototype);
  FactoryInstanceFactory.prototype.constructor = FactoryInstanceFactory;
  ScopedInstanceFactory.prototype = Object.create(InstanceFactory.prototype);
  ScopedInstanceFactory.prototype.constructor = ScopedInstanceFactory;
  SingleInstanceFactory.prototype = Object.create(InstanceFactory.prototype);
  SingleInstanceFactory.prototype.constructor = SingleInstanceFactory;
  EmptyLogger.prototype = Object.create(Logger.prototype);
  EmptyLogger.prototype.constructor = EmptyLogger;
  Level.prototype = Object.create(Enum.prototype);
  Level.prototype.constructor = Level;
  PrintLogger.prototype = Object.create(Logger.prototype);
  PrintLogger.prototype.constructor = PrintLogger;
  function Koin() {
    this.scopeRegistry = new ScopeRegistry(this);
    this.instanceRegistry = new InstanceRegistry(this);
    this.propertyRegistry = new PropertyRegistry(this);
    this.logger_fz7z3t$_0 = new EmptyLogger();
  }
  Object.defineProperty(Koin.prototype, 'logger', {
    configurable: true,
    get: function () {
      return this.logger_fz7z3t$_0;
    },
    set: function (logger) {
      this.logger_fz7z3t$_0 = logger;
    }
  });
  Koin.prototype.setupLogger_vku47a$ = function (logger) {
    this.logger = logger;
  };
  Koin.prototype.inject_h6n7o$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.Koin.inject_h6n7o$', wrapFunction(function () {
    var mp = _.org.koin.mp;
    var wrapFunction = Kotlin.wrapFunction;
    var lazy = Kotlin.kotlin.lazy_kls4a0$;
    var Scope$inject$lambda = wrapFunction(function () {
      var getKClass = Kotlin.getKClass;
      return function (closure$qualifier, closure$parameters, typeClosure$T, isT, this$Scope) {
        return function () {
          var $this = this$Scope;
          var T_0 = typeClosure$T;
          var qualifier = closure$qualifier;
          var parameters = closure$parameters;
          return $this.get_twqkno$(getKClass(T_0), qualifier, parameters);
        };
      };
    });
    return function (T_0, isT, qualifier, mode, parameters) {
      if (qualifier === void 0)
        qualifier = null;
      if (mode === void 0)
        mode = mp.KoinPlatformTools.defaultLazyMode();
      if (parameters === void 0)
        parameters = null;
      return lazy(mode, Scope$inject$lambda(qualifier, parameters, T_0, isT, this.scopeRegistry.rootScope));
    };
  }));
  Koin.prototype.injectOrNull_h6n7o$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.Koin.injectOrNull_h6n7o$', wrapFunction(function () {
    var mp = _.org.koin.mp;
    var wrapFunction = Kotlin.wrapFunction;
    var lazy = Kotlin.kotlin.lazy_kls4a0$;
    var Scope$injectOrNull$lambda = wrapFunction(function () {
      var getKClass = Kotlin.getKClass;
      return function (closure$qualifier, closure$parameters, typeClosure$T, isT, this$Scope) {
        return function () {
          var $this = this$Scope;
          var T_0 = typeClosure$T;
          var qualifier = closure$qualifier;
          var parameters = closure$parameters;
          return $this.getOrNull_twqkno$(getKClass(T_0), qualifier, parameters);
        };
      };
    });
    return function (T_0, isT, qualifier, mode, parameters) {
      if (qualifier === void 0)
        qualifier = null;
      if (mode === void 0)
        mode = mp.KoinPlatformTools.defaultLazyMode();
      if (parameters === void 0)
        parameters = null;
      return lazy(mode, Scope$injectOrNull$lambda(qualifier, parameters, T_0, isT, this.scopeRegistry.rootScope));
    };
  }));
  Koin.prototype.get_5ol634$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.Koin.get_5ol634$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, qualifier, parameters) {
      if (qualifier === void 0)
        qualifier = null;
      if (parameters === void 0)
        parameters = null;
      return this.scopeRegistry.rootScope.get_twqkno$(getKClass(T_0), qualifier, parameters);
    };
  }));
  Koin.prototype.getOrNull_5ol634$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.Koin.getOrNull_5ol634$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, qualifier, parameters) {
      if (qualifier === void 0)
        qualifier = null;
      if (parameters === void 0)
        parameters = null;
      return this.scopeRegistry.rootScope.getOrNull_twqkno$(getKClass(T_0), qualifier, parameters);
    };
  }));
  Koin.prototype.get_twqkno$ = function (clazz, qualifier, parameters) {
    if (qualifier === void 0)
      qualifier = null;
    if (parameters === void 0)
      parameters = null;
    return this.scopeRegistry.rootScope.get_twqkno$(clazz, qualifier, parameters);
  };
  Koin.prototype.getOrNull_twqkno$ = function (clazz, qualifier, parameters) {
    if (qualifier === void 0)
      qualifier = null;
    if (parameters === void 0)
      parameters = null;
    return this.scopeRegistry.rootScope.getOrNull_twqkno$(clazz, qualifier, parameters);
  };
  Koin.prototype.declare_gnaxiq$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.Koin.declare_gnaxiq$', wrapFunction(function () {
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getKClass = Kotlin.getKClass;
    var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
    var plus = Kotlin.kotlin.collections.plus_mydzjv$;
    var mp = _.org.koin.mp;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var Scope$declare$lambda = wrapFunction(function () {
      var Kind = _.org.koin.core.definition.Kind;
      var ScopedInstanceFactory_init = _.org.koin.core.instance.ScopedInstanceFactory;
      var indexKey = _.org.koin.core.definition.indexKey_68vs3e$;
      var getKClass = Kotlin.getKClass;
      var BeanDefinition_init = _.org.koin.core.definition.BeanDefinition;
      function InstanceRegistry$declareInstance$lambda(closure$instance) {
        return function ($receiver, it) {
          return closure$instance;
        };
      }
      return function (this$Scope, closure$instance, closure$qualifier, closure$secondaryTypes, closure$allowOverride, typeClosure$T, isT) {
        return function () {
          var $this = this$Scope._koin.instanceRegistry;
          var T_0 = typeClosure$T;
          var instance = closure$instance;
          var qualifier = closure$qualifier;
          var secondaryTypes = closure$secondaryTypes;
          var allowOverride = closure$allowOverride;
          var scopeQualifier = this$Scope.scopeQualifier;
          var kind = Kind.Scoped;
          var def = new BeanDefinition_init(scopeQualifier, getKClass(T_0), qualifier, InstanceRegistry$declareInstance$lambda(instance), kind, secondaryTypes);
          var factory = new ScopedInstanceFactory_init(def);
          var indexKey_0 = indexKey(def.primaryType, def.qualifier, def.scopeQualifier);
          $this.saveMapping_ge94pm$(allowOverride, indexKey_0, factory);
          var tmp$;
          tmp$ = def.secondaryTypes.iterator();
          while (tmp$.hasNext()) {
            var element = tmp$.next();
            var index = indexKey(element, def.qualifier, def.scopeQualifier);
            $this.saveMapping_ge94pm$(allowOverride, index, factory);
          }
          return Unit;
        };
      };
    });
    return function (T_0, isT, instance, qualifier, secondaryTypes, allowOverride) {
      if (qualifier === void 0)
        qualifier = null;
      if (secondaryTypes === void 0)
        secondaryTypes = emptyList();
      if (allowOverride === void 0)
        allowOverride = true;
      var firstType = listOf(getKClass(T_0));
      var $this = this.scopeRegistry.rootScope;
      var secondaryTypes_0 = plus(firstType, secondaryTypes);
      mp.KoinPlatformTools.synchronized_eocq09$($this, Scope$declare$lambda($this, instance, qualifier, secondaryTypes_0, allowOverride, T_0, isT));
    };
  }));
  Koin.prototype.getAll_287e2$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.Koin.getAll_287e2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT) {
      return this.scopeRegistry.rootScope.getAll_1fyqsx$(getKClass(T_0));
    };
  }));
  function Koin$createScope$lambda(closure$scopeId, closure$qualifier) {
    return function () {
      return "|- create scope - id:'" + closure$scopeId + "' q:" + closure$qualifier;
    };
  }
  Koin.prototype.createScope_oofa6w$ = function (scopeId, qualifier, source) {
    if (source === void 0)
      source = null;
    this.logger.log_l8l5x0$(Level$DEBUG_getInstance(), Koin$createScope$lambda(scopeId, qualifier));
    return this.scopeRegistry.createScope_oofa6w$(scopeId, qualifier, source);
  };
  Koin.prototype.createScope_3kuc9$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.Koin.createScope_3kuc9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var TypeQualifier_init = _.org.koin.core.qualifier.TypeQualifier;
    var Level = _.org.koin.core.logger.Level;
    function Koin$createScope$lambda(closure$scopeId, closure$qualifier) {
      return function () {
        return "|- create scope - id:'" + closure$scopeId + "' q:" + closure$qualifier;
      };
    }
    return function (T_0, isT, scopeId, source) {
      if (source === void 0)
        source = null;
      var qualifier = new TypeQualifier_init(getKClass(T_0));
      this.logger.log_l8l5x0$(Level.DEBUG, Koin$createScope$lambda(scopeId, qualifier));
      return this.scopeRegistry.createScope_oofa6w$(scopeId, qualifier, source);
    };
  }));
  Koin.prototype.createScope_3zqiyt$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.Koin.createScope_3zqiyt$', wrapFunction(function () {
    var mp = _.org.koin.mp;
    var getKClass = Kotlin.getKClass;
    var TypeQualifier_init = _.org.koin.core.qualifier.TypeQualifier;
    var Level = _.org.koin.core.logger.Level;
    function Koin$createScope$lambda(closure$scopeId, closure$qualifier) {
      return function () {
        return "|- create scope - id:'" + closure$scopeId + "' q:" + closure$qualifier;
      };
    }
    return function (T_0, isT, scopeId) {
      if (scopeId === void 0)
        scopeId = mp.KoinPlatformTools.generateId();
      var qualifier = new TypeQualifier_init(getKClass(T_0));
      this.logger.log_l8l5x0$(Level.DEBUG, Koin$createScope$lambda(scopeId, qualifier));
      return this.scopeRegistry.createScope_oofa6w$(scopeId, qualifier, null);
    };
  }));
  function Koin$createScope$lambda_0(closure$scopeId, closure$qualifier) {
    return function () {
      return "|- create scope - id:'" + closure$scopeId + "' q:" + closure$qualifier;
    };
  }
  Koin.prototype.createScope_4g5dad$ = function (t) {
    var scopeId = getScopeId(t);
    var qualifier = getScopeName(t);
    this.logger.log_l8l5x0$(Level$DEBUG_getInstance(), Koin$createScope$lambda_0(scopeId, qualifier));
    return this.scopeRegistry.createScope_oofa6w$(scopeId, qualifier, null);
  };
  Koin.prototype.getOrCreateScope_oofa6w$ = function (scopeId, qualifier, source) {
    if (source === void 0)
      source = null;
    var tmp$;
    return (tmp$ = this.scopeRegistry.getScopeOrNull_61zpoe$(scopeId)) != null ? tmp$ : this.createScope_oofa6w$(scopeId, qualifier, source);
  };
  Koin.prototype.getOrCreateScope_3zqiyt$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.Koin.getOrCreateScope_3zqiyt$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var TypeQualifier_init = _.org.koin.core.qualifier.TypeQualifier;
    return function (T_0, isT, scopeId) {
      var tmp$;
      var qualifier = new TypeQualifier_init(getKClass(T_0));
      return (tmp$ = this.scopeRegistry.getScopeOrNull_61zpoe$(scopeId)) != null ? tmp$ : this.createScope_oofa6w$(scopeId, qualifier);
    };
  }));
  Koin.prototype.getScope_61zpoe$ = function (scopeId) {
    var tmp$;
    tmp$ = this.scopeRegistry.getScopeOrNull_61zpoe$(scopeId);
    if (tmp$ == null) {
      throw new ScopeNotCreatedException("No scope found for id '" + scopeId + "'");
    }return tmp$;
  };
  Koin.prototype.getScopeOrNull_61zpoe$ = function (scopeId) {
    return this.scopeRegistry.getScopeOrNull_61zpoe$(scopeId);
  };
  Koin.prototype.deleteScope_61zpoe$ = function (scopeId) {
    this.scopeRegistry.deleteScope_y4putb$(scopeId);
  };
  Koin.prototype.getProperty_fym6v3$ = function (key, defaultValue) {
    var tmp$;
    return (tmp$ = this.propertyRegistry.getProperty_ytbaoo$(key)) != null ? tmp$ : defaultValue;
  };
  Koin.prototype.getProperty_3zqiyt$ = function (key) {
    return this.propertyRegistry.getProperty_ytbaoo$(key);
  };
  Koin.prototype.setProperty_bm4g0d$ = function (key, value) {
    this.propertyRegistry.saveProperty_xhmm9q$(key, value);
  };
  Koin.prototype.deleteProperty_61zpoe$ = function (key) {
    this.propertyRegistry.deleteProperty_61zpoe$(key);
  };
  Koin.prototype.close = function () {
    this.scopeRegistry.close_8be2vx$();
    this.instanceRegistry.close_8be2vx$();
    this.propertyRegistry.close();
  };
  Koin.prototype.loadModules_o0ioeo$ = function (modules, allowOverride) {
    if (allowOverride === void 0)
      allowOverride = true;
    this.instanceRegistry.loadModules_rty5ir$(modules, allowOverride);
    this.scopeRegistry.loadScopes_y1vts9$(modules);
    this.createEagerInstances();
  };
  Koin.prototype.unloadModules_y1vts9$ = function (modules) {
    this.instanceRegistry.unloadModules_xp467u$(modules);
  };
  function Koin$createEagerInstances$lambda(this$Koin) {
    return function () {
      this$Koin.instanceRegistry.createAllEagerInstances_8be2vx$();
      return Unit;
    };
  }
  Koin.prototype.createEagerInstances = function () {
    if (this.logger.isAt_qh0bru$(Level$DEBUG_getInstance())) {
      this.logger.debug_61zpoe$('create eager instances ...');
      var duration = measureDuration(Koin$createEagerInstances$lambda(this));
      this.logger.debug_61zpoe$('eager instances created in ' + duration + ' ms');
    } else {
      this.instanceRegistry.createAllEagerInstances_8be2vx$();
    }
  };
  Koin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Koin',
    interfaces: []
  };
  function KoinApplication() {
    KoinApplication$Companion_getInstance();
    this.koin = new Koin();
    this.allowOverride_0 = true;
  }
  KoinApplication.prototype.modules_7zxgee$ = function (modules) {
    return this.modules_y1vts9$(listOf(modules));
  };
  KoinApplication.prototype.modules_nob6vr$ = function (modules) {
    return this.modules_y1vts9$(toList(modules));
  };
  function KoinApplication$modules$lambda(closure$modules, this$KoinApplication) {
    return function () {
      this$KoinApplication.loadModules_0(closure$modules);
      return Unit;
    };
  }
  KoinApplication.prototype.modules_y1vts9$ = function (modules) {
    if (this.koin.logger.isAt_qh0bru$(Level$INFO_getInstance())) {
      var duration = measureDuration(KoinApplication$modules$lambda(modules, this));
      var count = this.koin.instanceRegistry.size();
      this.koin.logger.info_61zpoe$('loaded ' + count + ' definitions - ' + duration + ' ms');
    } else {
      this.loadModules_0(modules);
    }
    return this;
  };
  KoinApplication.prototype.allowOverride_6taknv$ = function (override) {
    this.allowOverride_0 = override;
  };
  KoinApplication.prototype.loadModules_0 = function (modules) {
    this.koin.loadModules_o0ioeo$(modules, this.allowOverride_0);
  };
  KoinApplication.prototype.properties_y0zsll$ = function (values) {
    this.koin.propertyRegistry.saveProperties_x7u0o8$(values);
    return this;
  };
  KoinApplication.prototype.logger_vku47a$ = function (logger) {
    this.koin.setupLogger_vku47a$(logger);
    return this;
  };
  KoinApplication.prototype.printLogger_qh0bru$ = function (level) {
    if (level === void 0)
      level = Level$INFO_getInstance();
    this.koin.setupLogger_vku47a$(KoinPlatformTools_getInstance().defaultLogger_qh0bru$(level));
    return this;
  };
  KoinApplication.prototype.close = function () {
    this.koin.close();
  };
  KoinApplication.prototype.unloadModules_y1vts9$ = function (modules) {
    this.koin.unloadModules_y1vts9$(modules);
  };
  KoinApplication.prototype.unloadModules_7zxgee$ = function (module_0) {
    this.koin.unloadModules_y1vts9$(listOf(module_0));
  };
  function KoinApplication$Companion() {
    KoinApplication$Companion_instance = this;
  }
  KoinApplication$Companion.prototype.init = function () {
    var app = new KoinApplication();
    return app;
  };
  KoinApplication$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var KoinApplication$Companion_instance = null;
  function KoinApplication$Companion_getInstance() {
    if (KoinApplication$Companion_instance === null) {
      new KoinApplication$Companion();
    }return KoinApplication$Companion_instance;
  }
  KoinApplication.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KoinApplication',
    interfaces: []
  };
  function KoinExperimentalAPI() {
  }
  KoinExperimentalAPI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KoinExperimentalAPI',
    interfaces: [Annotation]
  };
  function KoinInternalApi() {
  }
  KoinInternalApi.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KoinInternalApi',
    interfaces: [Annotation]
  };
  function KoinComponent() {
  }
  KoinComponent.prototype.getKoin = function () {
    return KoinPlatformTools_getInstance().defaultContext().get();
  };
  KoinComponent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KoinComponent',
    interfaces: []
  };
  var get_0 = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.component.get_g7ddo0$', wrapFunction(function () {
    var KoinScopeComponent = _.org.koin.core.component.KoinScopeComponent;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, qualifier, parameters) {
      if (qualifier === void 0)
        qualifier = null;
      if (parameters === void 0)
        parameters = null;
      var tmp$;
      if (Kotlin.isType($receiver, KoinScopeComponent)) {
        tmp$ = $receiver.scope.get_twqkno$(getKClass(T_0), qualifier, parameters);
      } else {
        tmp$ = $receiver.getKoin().scopeRegistry.rootScope.get_twqkno$(getKClass(T_0), qualifier, parameters);
      }
      return tmp$;
    };
  }));
  var inject = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.component.inject_55zmv8$', wrapFunction(function () {
    var mp = _.org.koin.mp;
    var wrapFunction = Kotlin.wrapFunction;
    var lazy = Kotlin.kotlin.lazy_kls4a0$;
    var inject$lambda = wrapFunction(function () {
      var KoinScopeComponent = _.org.koin.core.component.KoinScopeComponent;
      var getKClass = Kotlin.getKClass;
      return function (closure$qualifier, closure$parameters, typeClosure$T, isT, this$inject) {
        return function () {
          var T_0 = typeClosure$T;
          var $receiver = this$inject;
          var qualifier = closure$qualifier;
          var parameters = closure$parameters;
          var tmp$;
          if (Kotlin.isType($receiver, KoinScopeComponent)) {
            tmp$ = $receiver.scope.get_twqkno$(getKClass(T_0), qualifier, parameters);
          } else {
            tmp$ = $receiver.getKoin().scopeRegistry.rootScope.get_twqkno$(getKClass(T_0), qualifier, parameters);
          }
          return tmp$;
        };
      };
    });
    return function (T_0, isT, $receiver, qualifier, mode, parameters) {
      if (qualifier === void 0)
        qualifier = null;
      if (mode === void 0)
        mode = mp.KoinPlatformTools.defaultLazyMode();
      if (parameters === void 0)
        parameters = null;
      return lazy(mode, inject$lambda(qualifier, parameters, T_0, isT, $receiver));
    };
  }));
  function KoinScopeComponent() {
  }
  KoinScopeComponent.prototype.closeScope = function () {
    if (this.scope.isNotClosed()) {
      this.scope.close();
    }};
  KoinScopeComponent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KoinScopeComponent',
    interfaces: [KoinComponent]
  };
  function getScopeId($receiver) {
    return getFullName(Kotlin.getKClassFromExpression($receiver)) + '@' + toString(hashCode($receiver));
  }
  function getScopeName($receiver) {
    return new TypeQualifier(Kotlin.getKClassFromExpression($receiver));
  }
  function createScope($receiver, source) {
    if (source === void 0)
      source = null;
    return $receiver.getKoin().createScope_oofa6w$(getScopeId($receiver), getScopeName($receiver), source);
  }
  function getScopeOrNull($receiver) {
    return $receiver.getKoin().getScopeOrNull_61zpoe$(getScopeId($receiver));
  }
  function newScope$lambda(this$newScope) {
    return function () {
      return createScope(this$newScope);
    };
  }
  function newScope($receiver) {
    return lazy(newScope$lambda($receiver));
  }
  function getOrCreateScope$lambda(this$getOrCreateScope) {
    return function () {
      var tmp$;
      return (tmp$ = getScopeOrNull(this$getOrCreateScope)) != null ? tmp$ : createScope(this$getOrCreateScope);
    };
  }
  function getOrCreateScope($receiver) {
    return lazy(getOrCreateScope$lambda($receiver));
  }
  function startKoin(koinApplication) {
    return KoinPlatformTools_getInstance().defaultContext().startKoin_ompzyr$(koinApplication);
  }
  function startKoin_0(appDeclaration) {
    return KoinPlatformTools_getInstance().defaultContext().startKoin_eciske$(appDeclaration);
  }
  function stopKoin() {
    KoinPlatformTools_getInstance().defaultContext().stopKoin();
  }
  function loadKoinModules(module_0) {
    KoinPlatformTools_getInstance().defaultContext().loadKoinModules_7zxgee$(module_0);
  }
  function loadKoinModules_0(modules) {
    KoinPlatformTools_getInstance().defaultContext().loadKoinModules_y1vts9$(modules);
  }
  function unloadKoinModules(module_0) {
    KoinPlatformTools_getInstance().defaultContext().unloadKoinModules_7zxgee$(module_0);
  }
  function unloadKoinModules_0(modules) {
    KoinPlatformTools_getInstance().defaultContext().unloadKoinModules_y1vts9$(modules);
  }
  function KoinContext() {
  }
  KoinContext.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KoinContext',
    interfaces: []
  };
  function BeanDefinition(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
    if (qualifier === void 0)
      qualifier = null;
    if (secondaryTypes === void 0) {
      secondaryTypes = emptyList();
    }this.scopeQualifier = scopeQualifier;
    this.primaryType = primaryType;
    this.qualifier = qualifier;
    this.definition = definition;
    this.kind = kind;
    this.secondaryTypes = secondaryTypes;
    this.callbacks = new Callbacks();
  }
  function BeanDefinition$toString$lambda(it) {
    return getFullName(it);
  }
  BeanDefinition.prototype.toString = function () {
    var tmp$, tmp$_0;
    var defKind = this.kind.toString();
    var defType = "'" + getFullName(this.primaryType) + "'";
    var defName = (tmp$ = this.qualifier != null ? ',qualifier:' + toString(this.qualifier) : null) != null ? tmp$ : '';
    var defScope = equals(this.scopeQualifier, ScopeRegistry$Companion_getInstance().rootScopeQualifier) ? '' : ',scope:' + this.scopeQualifier;
    if (!this.secondaryTypes.isEmpty()) {
      var typesAsString = joinToString(this.secondaryTypes, ',', void 0, void 0, void 0, void 0, BeanDefinition$toString$lambda);
      tmp$_0 = ',binds:' + typesAsString;
    } else
      tmp$_0 = '';
    var defOtherTypes = tmp$_0;
    return '[' + defKind + ':' + defType + defName + defScope + defOtherTypes + ']';
  };
  BeanDefinition.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    Kotlin.isType(tmp$ = other, BeanDefinition) ? tmp$ : throwCCE();
    if (!((tmp$_0 = this.primaryType) != null ? tmp$_0.equals(other.primaryType) : null))
      return false;
    if (!equals(this.qualifier, other.qualifier))
      return false;
    if (!equals(this.scopeQualifier, other.scopeQualifier))
      return false;
    return true;
  };
  BeanDefinition.prototype.hasType_xo1ogr$ = function (clazz) {
    var tmp$;
    return ((tmp$ = this.primaryType) != null ? tmp$.equals(clazz) : null) || this.secondaryTypes.contains_11rb$(clazz);
  };
  BeanDefinition.prototype.is_68vs3e$ = function (clazz, qualifier, scopeDefinition) {
    return this.hasType_xo1ogr$(clazz) && equals(this.qualifier, qualifier) && equals(this.scopeQualifier, scopeDefinition);
  };
  BeanDefinition.prototype.hashCode = function () {
    var tmp$, tmp$_0;
    var result = (tmp$_0 = (tmp$ = this.qualifier) != null ? hashCode(tmp$) : null) != null ? tmp$_0 : 0;
    result = (31 * result | 0) + this.primaryType.hashCode() | 0;
    result = (31 * result | 0) + hashCode(this.scopeQualifier) | 0;
    return result;
  };
  BeanDefinition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BeanDefinition',
    interfaces: []
  };
  BeanDefinition.prototype.component1 = function () {
    return this.scopeQualifier;
  };
  BeanDefinition.prototype.component2 = function () {
    return this.primaryType;
  };
  BeanDefinition.prototype.component3 = function () {
    return this.qualifier;
  };
  BeanDefinition.prototype.component4 = function () {
    return this.definition;
  };
  BeanDefinition.prototype.component5 = function () {
    return this.kind;
  };
  BeanDefinition.prototype.component6 = function () {
    return this.secondaryTypes;
  };
  BeanDefinition.prototype.copy_u87gmf$ = function (scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
    return new BeanDefinition(scopeQualifier === void 0 ? this.scopeQualifier : scopeQualifier, primaryType === void 0 ? this.primaryType : primaryType, qualifier === void 0 ? this.qualifier : qualifier, definition === void 0 ? this.definition : definition, kind === void 0 ? this.kind : kind, secondaryTypes === void 0 ? this.secondaryTypes : secondaryTypes);
  };
  function indexKey(clazz, typeQualifier, scopeQualifier) {
    var tmp$;
    var tq = (tmp$ = typeQualifier != null ? typeQualifier.value : null) != null ? tmp$ : '';
    return getFullName(clazz) + ':' + tq + ':' + scopeQualifier;
  }
  function Kind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Kind_initFields() {
    Kind_initFields = function () {
    };
    Kind$Singleton_instance = new Kind('Singleton', 0);
    Kind$Factory_instance = new Kind('Factory', 1);
    Kind$Scoped_instance = new Kind('Scoped', 2);
  }
  var Kind$Singleton_instance;
  function Kind$Singleton_getInstance() {
    Kind_initFields();
    return Kind$Singleton_instance;
  }
  var Kind$Factory_instance;
  function Kind$Factory_getInstance() {
    Kind_initFields();
    return Kind$Factory_instance;
  }
  var Kind$Scoped_instance;
  function Kind$Scoped_getInstance() {
    Kind_initFields();
    return Kind$Scoped_instance;
  }
  Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: [Enum]
  };
  function Kind$values() {
    return [Kind$Singleton_getInstance(), Kind$Factory_getInstance(), Kind$Scoped_getInstance()];
  }
  Kind.values = Kind$values;
  function Kind$valueOf(name) {
    switch (name) {
      case 'Singleton':
        return Kind$Singleton_getInstance();
      case 'Factory':
        return Kind$Factory_getInstance();
      case 'Scoped':
        return Kind$Scoped_getInstance();
      default:throwISE('No enum constant org.koin.core.definition.Kind.' + name);
    }
  }
  Kind.valueOf_61zpoe$ = Kind$valueOf;
  var createDefinition = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.definition.createDefinition_of93z$', wrapFunction(function () {
    var Kind = _.org.koin.core.definition.Kind;
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getKClass = Kotlin.getKClass;
    var BeanDefinition_init = _.org.koin.core.definition.BeanDefinition;
    return function (T_0, isT, kind, qualifier, definition, secondaryTypes, scopeQualifier) {
      if (kind === void 0)
        kind = Kind.Singleton;
      if (qualifier === void 0)
        qualifier = null;
      if (secondaryTypes === void 0)
        secondaryTypes = emptyList();
      return new BeanDefinition_init(scopeQualifier, getKClass(T_0), qualifier, definition, kind, secondaryTypes);
    };
  }));
  function Callbacks(onClose) {
    if (onClose === void 0)
      onClose = null;
    this.onClose = onClose;
  }
  Callbacks.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Callbacks',
    interfaces: []
  };
  Callbacks.prototype.component1 = function () {
    return this.onClose;
  };
  Callbacks.prototype.copy_rslci1$ = function (onClose) {
    return new Callbacks(onClose === void 0 ? this.onClose : onClose);
  };
  Callbacks.prototype.toString = function () {
    return 'Callbacks(onClose=' + Kotlin.toString(this.onClose) + ')';
  };
  Callbacks.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.onClose) | 0;
    return result;
  };
  Callbacks.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.onClose, other.onClose))));
  };
  function BrokenDefinitionException(msg) {
    Exception_init(msg, this);
    this.name = 'BrokenDefinitionException';
  }
  BrokenDefinitionException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrokenDefinitionException',
    interfaces: [Exception]
  };
  function ClosedScopeException(msg) {
    Exception_init(msg, this);
    this.name = 'ClosedScopeException';
  }
  ClosedScopeException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClosedScopeException',
    interfaces: [Exception]
  };
  function DefinitionOverrideException(msg) {
    Exception_init(msg, this);
    this.name = 'DefinitionOverrideException';
  }
  DefinitionOverrideException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefinitionOverrideException',
    interfaces: [Exception]
  };
  function DefinitionParameterException(str) {
    Exception_init(str, this);
    this.name = 'DefinitionParameterException';
  }
  DefinitionParameterException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefinitionParameterException',
    interfaces: [Exception]
  };
  function InstanceCreationException(msg, parent) {
    Exception.call(this, msg, parent);
    this.name = 'InstanceCreationException';
  }
  InstanceCreationException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstanceCreationException',
    interfaces: [Exception]
  };
  function KoinAppAlreadyStartedException(msg) {
    Exception_init(msg, this);
    this.name = 'KoinAppAlreadyStartedException';
  }
  KoinAppAlreadyStartedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KoinAppAlreadyStartedException',
    interfaces: [Exception]
  };
  function MissingPropertyException(msg) {
    Exception_init(msg, this);
    this.name = 'MissingPropertyException';
  }
  MissingPropertyException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MissingPropertyException',
    interfaces: [Exception]
  };
  function NoBeanDefFoundException(msg) {
    Exception_init(msg, this);
    this.name = 'NoBeanDefFoundException';
  }
  NoBeanDefFoundException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoBeanDefFoundException',
    interfaces: [Exception]
  };
  function NoParameterFoundException(msg) {
    Exception_init(msg, this);
    this.name = 'NoParameterFoundException';
  }
  NoParameterFoundException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoParameterFoundException',
    interfaces: [Exception]
  };
  function NoPropertyFileFoundException(msg) {
    Exception_init(msg, this);
    this.name = 'NoPropertyFileFoundException';
  }
  NoPropertyFileFoundException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoPropertyFileFoundException',
    interfaces: [Exception]
  };
  function NoScopeDefFoundException(s) {
    Exception_init(s, this);
    this.name = 'NoScopeDefFoundException';
  }
  NoScopeDefFoundException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoScopeDefFoundException',
    interfaces: [Exception]
  };
  function ScopeAlreadyCreatedException(s) {
    Exception_init(s, this);
    this.name = 'ScopeAlreadyCreatedException';
  }
  ScopeAlreadyCreatedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScopeAlreadyCreatedException',
    interfaces: [Exception]
  };
  function ScopeNotCreatedException(msg) {
    Exception_init(msg, this);
    this.name = 'ScopeNotCreatedException';
  }
  ScopeNotCreatedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScopeNotCreatedException',
    interfaces: [Exception]
  };
  function FactoryInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
  }
  FactoryInstanceFactory.prototype.isCreated_667mza$$default = function (context) {
    return false;
  };
  FactoryInstanceFactory.prototype.drop_otv0xz$$default = function (scope) {
    var tmp$;
    (tmp$ = this.beanDefinition.callbacks.onClose) != null ? tmp$(null) : null;
  };
  FactoryInstanceFactory.prototype.dropAll = function () {
  };
  FactoryInstanceFactory.prototype.get_djr8xh$ = function (context) {
    return this.create_djr8xh$(context);
  };
  FactoryInstanceFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FactoryInstanceFactory',
    interfaces: [InstanceFactory]
  };
  function InstanceContext(koin, scope, parameters) {
    if (parameters === void 0)
      parameters = null;
    this.koin = koin;
    this.scope = scope;
    this.parameters = parameters;
  }
  InstanceContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstanceContext',
    interfaces: []
  };
  function InstanceFactory(beanDefinition) {
    InstanceFactory$Companion_getInstance();
    this.beanDefinition = beanDefinition;
  }
  InstanceFactory.prototype.create_djr8xh$ = function (context) {
    var tmp$;
    var koin = context.koin;
    if (koin.logger.isAt_qh0bru$(Level$DEBUG_getInstance())) {
      koin.logger.debug_61zpoe$('| create instance for ' + this.beanDefinition);
    }try {
      var parameters = (tmp$ = context.parameters) != null ? tmp$ : emptyParametersHolder();
      return this.beanDefinition.definition(context.scope, parameters);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        var stack = KoinPlatformTools_getInstance().getStackTrace_3lhtaa$(e);
        koin.logger.error_61zpoe$('Instance creation error : could not create instance for ' + this.beanDefinition + ': ' + stack);
        throw new InstanceCreationException('Could not create instance for ' + this.beanDefinition, e);
      } else
        throw e;
    }
  };
  InstanceFactory.prototype.isCreated_667mza$ = function (context, callback$default) {
    if (context === void 0)
      context = null;
    return callback$default ? callback$default(context) : this.isCreated_667mza$$default(context);
  };
  InstanceFactory.prototype.drop_otv0xz$ = function (scope, callback$default) {
    if (scope === void 0)
      scope = null;
    callback$default ? callback$default(scope) : this.drop_otv0xz$$default(scope);
  };
  function InstanceFactory$Companion() {
    InstanceFactory$Companion_instance = this;
    this.ERROR_SEPARATOR = '\n\t';
  }
  InstanceFactory$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var InstanceFactory$Companion_instance = null;
  function InstanceFactory$Companion_getInstance() {
    if (InstanceFactory$Companion_instance === null) {
      new InstanceFactory$Companion();
    }return InstanceFactory$Companion_instance;
  }
  InstanceFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstanceFactory',
    interfaces: []
  };
  function ScopedInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
    this.values_0 = HashMap_init();
  }
  ScopedInstanceFactory.prototype.isCreated_667mza$$default = function (context) {
    var tmp$, tmp$_0;
    tmp$_0 = this.values_0;
    var key = (tmp$ = context != null ? context.scope : null) != null ? tmp$.id : null;
    var tmp$_1;
    return (Kotlin.isType(tmp$_1 = tmp$_0, Map) ? tmp$_1 : throwCCE()).get_11rb$(key) != null;
  };
  ScopedInstanceFactory.prototype.drop_otv0xz$$default = function (scope) {
    if (scope != null) {
      var tmp$;
      (tmp$ = this.beanDefinition.callbacks.onClose) != null ? tmp$(this.values_0.get_11rb$(scope.id)) : null;
      this.values_0.remove_11rb$(scope.id);
    }};
  ScopedInstanceFactory.prototype.create_djr8xh$ = function (context) {
    var tmp$, tmp$_0;
    if (this.values_0.get_11rb$(context.scope.id) == null) {
      tmp$_0 = InstanceFactory.prototype.create_djr8xh$.call(this, context);
    } else {
      var tmp$_1;
      if ((tmp$ = this.values_0.get_11rb$(context.scope.id)) != null)
        tmp$_1 = tmp$;
      else {
        throw IllegalStateException_init(('Scoped instance not found for ' + context.scope.id).toString());
      }
      tmp$_0 = tmp$_1;
    }
    return tmp$_0;
  };
  function ScopedInstanceFactory$get$lambda(closure$context, this$ScopedInstanceFactory) {
    return function () {
      if (!this$ScopedInstanceFactory.isCreated_667mza$(closure$context)) {
        var $receiver = this$ScopedInstanceFactory.values_0;
        var key = closure$context.scope.id;
        var value = this$ScopedInstanceFactory.create_djr8xh$(closure$context);
        $receiver.put_xwzc9p$(key, value);
      }return Unit;
    };
  }
  ScopedInstanceFactory.prototype.get_djr8xh$ = function (context) {
    var tmp$;
    if (!equals(context.scope.scopeQualifier, this.beanDefinition.scopeQualifier)) {
      throw IllegalStateException_init(('Wrong Scope: trying to open instance for ' + context.scope.id + ' in ' + this.beanDefinition).toString());
    }KoinPlatformTools_getInstance().synchronized_eocq09$(this, ScopedInstanceFactory$get$lambda(context, this));
    var tmp$_0;
    if ((tmp$ = this.values_0.get_11rb$(context.scope.id)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Scoped instance not found for ' + context.scope.id).toString());
    }
    return tmp$_0;
  };
  ScopedInstanceFactory.prototype.dropAll = function () {
    this.values_0.clear();
  };
  ScopedInstanceFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScopedInstanceFactory',
    interfaces: [InstanceFactory]
  };
  function SingleInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
    this.value_0 = null;
  }
  SingleInstanceFactory.prototype.getValue_0 = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.value_0) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init("Single instance created couldn't return value".toString());
    }
    return tmp$_0;
  };
  SingleInstanceFactory.prototype.isCreated_667mza$$default = function (context) {
    return this.value_0 != null;
  };
  SingleInstanceFactory.prototype.drop_otv0xz$$default = function (scope) {
    var tmp$;
    (tmp$ = this.beanDefinition.callbacks.onClose) != null ? tmp$(this.value_0) : null;
    this.value_0 = null;
  };
  SingleInstanceFactory.prototype.dropAll = function () {
    this.drop_otv0xz$();
  };
  SingleInstanceFactory.prototype.create_djr8xh$ = function (context) {
    var tmp$;
    if (this.value_0 == null) {
      tmp$ = InstanceFactory.prototype.create_djr8xh$.call(this, context);
    } else
      tmp$ = this.getValue_0();
    return tmp$;
  };
  function SingleInstanceFactory$get$lambda(closure$context, this$SingleInstanceFactory) {
    return function () {
      if (!this$SingleInstanceFactory.isCreated_667mza$(closure$context)) {
        this$SingleInstanceFactory.value_0 = this$SingleInstanceFactory.create_djr8xh$(closure$context);
      }return Unit;
    };
  }
  SingleInstanceFactory.prototype.get_djr8xh$ = function (context) {
    KoinPlatformTools_getInstance().synchronized_eocq09$(this, SingleInstanceFactory$get$lambda(context, this));
    return this.getValue_0();
  };
  SingleInstanceFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleInstanceFactory',
    interfaces: [InstanceFactory]
  };
  function EmptyLogger() {
    Logger.call(this, Level$NONE_getInstance());
  }
  EmptyLogger.prototype.log_6vf1gs$ = function (level, msg) {
  };
  EmptyLogger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmptyLogger',
    interfaces: [Logger]
  };
  function Logger(level) {
    if (level === void 0)
      level = Level$INFO_getInstance();
    this.level = level;
  }
  Logger.prototype.canLog_b0wrt8$_0 = function (level) {
    return this.level.compareTo_11rb$(level) <= 0;
  };
  Logger.prototype.doLog_yeperl$_0 = function (level, msg) {
    if (this.canLog_b0wrt8$_0(level)) {
      this.log_6vf1gs$(level, msg);
    }};
  Logger.prototype.debug_61zpoe$ = function (msg) {
    this.doLog_yeperl$_0(Level$DEBUG_getInstance(), msg);
  };
  Logger.prototype.info_61zpoe$ = function (msg) {
    this.doLog_yeperl$_0(Level$INFO_getInstance(), msg);
  };
  Logger.prototype.error_61zpoe$ = function (msg) {
    this.doLog_yeperl$_0(Level$ERROR_getInstance(), msg);
  };
  Logger.prototype.isAt_qh0bru$ = function (lvl) {
    return this.level.compareTo_11rb$(lvl) <= 0;
  };
  Logger.prototype.log_l8l5x0$ = function (lvl, msg) {
    if (this.isAt_qh0bru$(lvl))
      this.doLog_yeperl$_0(lvl, msg());
  };
  Logger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Logger',
    interfaces: []
  };
  var KOIN_TAG;
  function Level(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Level_initFields() {
    Level_initFields = function () {
    };
    Level$DEBUG_instance = new Level('DEBUG', 0);
    Level$INFO_instance = new Level('INFO', 1);
    Level$ERROR_instance = new Level('ERROR', 2);
    Level$NONE_instance = new Level('NONE', 3);
  }
  var Level$DEBUG_instance;
  function Level$DEBUG_getInstance() {
    Level_initFields();
    return Level$DEBUG_instance;
  }
  var Level$INFO_instance;
  function Level$INFO_getInstance() {
    Level_initFields();
    return Level$INFO_instance;
  }
  var Level$ERROR_instance;
  function Level$ERROR_getInstance() {
    Level_initFields();
    return Level$ERROR_instance;
  }
  var Level$NONE_instance;
  function Level$NONE_getInstance() {
    Level_initFields();
    return Level$NONE_instance;
  }
  Level.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Level',
    interfaces: [Enum]
  };
  function Level$values() {
    return [Level$DEBUG_getInstance(), Level$INFO_getInstance(), Level$ERROR_getInstance(), Level$NONE_getInstance()];
  }
  Level.values = Level$values;
  function Level$valueOf(name) {
    switch (name) {
      case 'DEBUG':
        return Level$DEBUG_getInstance();
      case 'INFO':
        return Level$INFO_getInstance();
      case 'ERROR':
        return Level$ERROR_getInstance();
      case 'NONE':
        return Level$NONE_getInstance();
      default:throwISE('No enum constant org.koin.core.logger.Level.' + name);
    }
  }
  Level.valueOf_61zpoe$ = Level$valueOf;
  function Module(createdAtStart) {
    if (createdAtStart === void 0)
      createdAtStart = false;
    this.createdAtStart = createdAtStart;
    this.eagerInstances_mb1ti8$_0 = HashSet_init();
    this.mappings = HashMap_init();
    this.scopes = HashSet_init();
  }
  Object.defineProperty(Module.prototype, 'eagerInstances', {
    configurable: true,
    get: function () {
      return this.eagerInstances_mb1ti8$_0;
    },
    set: function (eagerInstances) {
      this.eagerInstances_mb1ti8$_0 = eagerInstances;
    }
  });
  Object.defineProperty(Module.prototype, 'isLoaded', {
    configurable: true,
    get: function () {
      return this.mappings.size > 0;
    }
  });
  Module.prototype.scope_7i4dyu$ = function (qualifier, scopeSet) {
    scopeSet(new ScopeDSL(qualifier, this));
    this.scopes.add_11rb$(qualifier);
  };
  Module.prototype.scope_qk5v72$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.module.Module.scope_qk5v72$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var TypeQualifier_init = _.org.koin.core.qualifier.TypeQualifier;
    var ScopeDSL_init = _.org.koin.dsl.ScopeDSL;
    return function (T_0, isT, scopeSet) {
      var qualifier = new TypeQualifier_init(getKClass(T_0));
      scopeSet(new ScopeDSL_init(qualifier, this));
      this.scopes.add_11rb$(qualifier);
    };
  }));
  Module.prototype.single_t6ls8p$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.module.Module.single_t6ls8p$', wrapFunction(function () {
    var Kind = _.org.koin.core.definition.Kind;
    var ScopeRegistry = _.org.koin.core.registry.ScopeRegistry;
    var indexKey = _.org.koin.core.definition.indexKey_68vs3e$;
    var SingleInstanceFactory_init = _.org.koin.core.instance.SingleInstanceFactory;
    var Pair_init = Kotlin.kotlin.Pair;
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getKClass = Kotlin.getKClass;
    var BeanDefinition_init = _.org.koin.core.definition.BeanDefinition;
    return function (T_0, isT, qualifier, createdAtStart, definition) {
      if (qualifier === void 0)
        qualifier = null;
      if (createdAtStart === void 0)
        createdAtStart = false;
      var kind = Kind.Singleton;
      var scopeQualifier = ScopeRegistry.Companion.rootScopeQualifier;
      var secondaryTypes;
      secondaryTypes = emptyList();
      var def = new BeanDefinition_init(scopeQualifier, getKClass(T_0), qualifier, definition, kind, secondaryTypes);
      var mapping = indexKey(def.primaryType, qualifier, ScopeRegistry.Companion.rootScopeQualifier);
      var instanceFactory = new SingleInstanceFactory_init(def);
      this.saveMapping_fze439$(mapping, instanceFactory);
      if (createdAtStart || this.createdAtStart) {
        this.eagerInstances.add_11rb$(instanceFactory);
      }return new Pair_init(this, instanceFactory);
    };
  }));
  Module.prototype.saveMapping_fze439$ = function (mapping, factory, allowOverride) {
    if (allowOverride === void 0)
      allowOverride = false;
    var tmp$ = !allowOverride;
    if (tmp$) {
      var $receiver = this.mappings;
      var tmp$_0;
      tmp$ = (Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(mapping);
    }if (tmp$) {
      overrideError(factory, mapping);
    }this.mappings.put_xwzc9p$(mapping, factory);
  };
  Module.prototype.factory_bl86gq$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.module.Module.factory_bl86gq$', wrapFunction(function () {
    var ScopeRegistry = _.org.koin.core.registry.ScopeRegistry;
    var Kind = _.org.koin.core.definition.Kind;
    var indexKey = _.org.koin.core.definition.indexKey_68vs3e$;
    var FactoryInstanceFactory_init = _.org.koin.core.instance.FactoryInstanceFactory;
    var Pair_init = Kotlin.kotlin.Pair;
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getKClass = Kotlin.getKClass;
    var BeanDefinition_init = _.org.koin.core.definition.BeanDefinition;
    return function (T_0, isT, qualifier, definition) {
      if (qualifier === void 0)
        qualifier = null;
      var scopeQualifier = ScopeRegistry.Companion.rootScopeQualifier;
      var kind = Kind.Factory;
      var secondaryTypes;
      secondaryTypes = emptyList();
      var def = new BeanDefinition_init(scopeQualifier, getKClass(T_0), qualifier, definition, kind, secondaryTypes);
      var mapping = indexKey(def.primaryType, qualifier, scopeQualifier);
      var instanceFactory = new FactoryInstanceFactory_init(def);
      this.saveMapping_fze439$(mapping, instanceFactory);
      return new Pair_init(this, instanceFactory);
    };
  }));
  Module.prototype.factory_xqe3i8$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.module.Module.factory_xqe3i8$', wrapFunction(function () {
    var Kind = _.org.koin.core.definition.Kind;
    var indexKey = _.org.koin.core.definition.indexKey_68vs3e$;
    var FactoryInstanceFactory_init = _.org.koin.core.instance.FactoryInstanceFactory;
    var Pair_init = Kotlin.kotlin.Pair;
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getKClass = Kotlin.getKClass;
    var BeanDefinition_init = _.org.koin.core.definition.BeanDefinition;
    return function (T_0, isT, qualifier, definition, scopeQualifier) {
      if (qualifier === void 0)
        qualifier = null;
      var kind = Kind.Factory;
      var secondaryTypes;
      secondaryTypes = emptyList();
      var def = new BeanDefinition_init(scopeQualifier, getKClass(T_0), qualifier, definition, kind, secondaryTypes);
      var mapping = indexKey(def.primaryType, qualifier, scopeQualifier);
      var instanceFactory = new FactoryInstanceFactory_init(def);
      this.saveMapping_fze439$(mapping, instanceFactory);
      return new Pair_init(this, instanceFactory);
    };
  }));
  Module.prototype.plus_7zxgee$ = function (module_0) {
    return listOf_0([this, module_0]);
  };
  Module.prototype.plus_y1vts9$ = function (modules) {
    return plus(listOf(this), modules);
  };
  Module.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Module',
    interfaces: []
  };
  function overrideError(factory, mapping) {
    throw new DefinitionOverrideException('Already existing definition for ' + factory.beanDefinition + ' at ' + mapping);
  }
  function plus_2($receiver, module_0) {
    return plus($receiver, listOf(module_0));
  }
  function ParametersHolder(_values) {
    ParametersHolder$Companion_getInstance();
    if (_values === void 0) {
      _values = ArrayList_init();
    }this._values = _values;
  }
  Object.defineProperty(ParametersHolder.prototype, 'values', {
    configurable: true,
    get: function () {
      return this._values;
    }
  });
  ParametersHolder.prototype.elementAt_u6v07t$ = function (i, clazz) {
    var tmp$;
    if (this._values.size > i)
      return (tmp$ = this._values.get_za3lpa$(i)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    else
      throw new NoParameterFoundException("Can't get injected parameter #" + i + ' from ' + this + " for type '" + getFullName(clazz) + "'");
  };
  ParametersHolder.prototype.component1_287e2$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.parameter.ParametersHolder.component1_287e2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT) {
      return this.elementAt_u6v07t$(0, getKClass(T_0));
    };
  }));
  ParametersHolder.prototype.component2_287e2$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.parameter.ParametersHolder.component2_287e2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT) {
      return this.elementAt_u6v07t$(1, getKClass(T_0));
    };
  }));
  ParametersHolder.prototype.component3_287e2$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.parameter.ParametersHolder.component3_287e2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT) {
      return this.elementAt_u6v07t$(2, getKClass(T_0));
    };
  }));
  ParametersHolder.prototype.component4_287e2$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.parameter.ParametersHolder.component4_287e2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT) {
      return this.elementAt_u6v07t$(3, getKClass(T_0));
    };
  }));
  ParametersHolder.prototype.component5_287e2$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.parameter.ParametersHolder.component5_287e2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT) {
      return this.elementAt_u6v07t$(4, getKClass(T_0));
    };
  }));
  ParametersHolder.prototype.get_ww73n8$ = function (i) {
    var tmp$;
    return (tmp$ = this._values.get_za3lpa$(i)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  ParametersHolder.prototype.set_wh09dm$ = function (i, t) {
    var tmp$;
    this._values.set_wxm5ur$(i, Kotlin.isType(tmp$ = t, Any) ? tmp$ : throwCCE());
  };
  ParametersHolder.prototype.size = function () {
    return this._values.size;
  };
  ParametersHolder.prototype.isEmpty = function () {
    return this.size() === 0;
  };
  ParametersHolder.prototype.isNotEmpty = function () {
    return !this.isEmpty();
  };
  ParametersHolder.prototype.insert_vux3hl$ = function (index, value) {
    this._values.add_wxm5ur$(index, value);
    return this;
  };
  ParametersHolder.prototype.add_za3rmp$ = function (value) {
    this._values.add_11rb$(value);
    return this;
  };
  ParametersHolder.prototype.get_30y1fr$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.parameter.ParametersHolder.get_30y1fr$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var getFullName = _.org.koin.ext.getFullName_lr8r8q$;
    var DefinitionParameterException_init = _.org.koin.core.error.DefinitionParameterException;
    return function (T_0, isT) {
      var tmp$;
      tmp$ = this.getOrNull_1fyqsx$(getKClass(T_0));
      if (tmp$ == null) {
        throw new DefinitionParameterException_init("No value found for type '" + getFullName(getKClass(T_0)) + "'");
      }return tmp$;
    };
  }));
  ParametersHolder.prototype.getOrNull_1fyqsx$ = function (clazz) {
    var $receiver = this._values;
    var firstNotNullOfOrNull$result;
    firstNotNullOfOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        var result = clazz.isInstance_s8jyv4$(element) ? (tmp$_0 = element) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : null : null;
        if (result != null) {
          firstNotNullOfOrNull$result = result;
          break firstNotNullOfOrNull$break;
        }}
      firstNotNullOfOrNull$result = null;
    }
     while (false);
    return firstNotNullOfOrNull$result;
  };
  ParametersHolder.prototype.getOrNull_287e2$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.parameter.ParametersHolder.getOrNull_287e2$', function (T_0, isT) {
    var $receiver = this._values;
    var firstNotNullOfOrNull$result;
    firstNotNullOfOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var result = isT(element) ? element : null;
        if (result != null) {
          firstNotNullOfOrNull$result = result;
          break firstNotNullOfOrNull$break;
        }}
      firstNotNullOfOrNull$result = null;
    }
     while (false);
    return firstNotNullOfOrNull$result;
  });
  function ParametersHolder$Companion() {
    ParametersHolder$Companion_instance = this;
    this.MAX_PARAMS = 5;
  }
  ParametersHolder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ParametersHolder$Companion_instance = null;
  function ParametersHolder$Companion_getInstance() {
    if (ParametersHolder$Companion_instance === null) {
      new ParametersHolder$Companion();
    }return ParametersHolder$Companion_instance;
  }
  ParametersHolder.prototype.toString = function () {
    return 'DefinitionParameters' + toList_0(this._values);
  };
  ParametersHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParametersHolder',
    interfaces: []
  };
  function parametersOf(parameters) {
    return new ParametersHolder(toMutableList(parameters));
  }
  function emptyParametersHolder() {
    return new ParametersHolder();
  }
  function Qualifier() {
  }
  Qualifier.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Qualifier',
    interfaces: []
  };
  function named(name) {
    return new StringQualifier(name);
  }
  function named_0(enum_0) {
    return get_qualifier(enum_0);
  }
  function qualifier(name) {
    return new StringQualifier(name);
  }
  function qualifier_0(enum_0) {
    return get_qualifier(enum_0);
  }
  function _q(name) {
    return new StringQualifier(name);
  }
  var named_1 = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.qualifier.named_287e2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var TypeQualifier_init = _.org.koin.core.qualifier.TypeQualifier;
    return function (T_0, isT) {
      return new TypeQualifier_init(getKClass(T_0));
    };
  }));
  var qualifier_1 = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.qualifier.qualifier_287e2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var TypeQualifier_init = _.org.koin.core.qualifier.TypeQualifier;
    return function (T_0, isT) {
      return new TypeQualifier_init(getKClass(T_0));
    };
  }));
  var _q_0 = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.qualifier._q_287e2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var TypeQualifier_init = _.org.koin.core.qualifier.TypeQualifier;
    return function (T_0, isT) {
      return new TypeQualifier_init(getKClass(T_0));
    };
  }));
  function get_qualifier($receiver) {
    return new StringQualifier($receiver.toString().toLowerCase());
  }
  function StringQualifier(value) {
    this.value_peu23u$_0 = value;
  }
  Object.defineProperty(StringQualifier.prototype, 'value', {
    get: function () {
      return this.value_peu23u$_0;
    }
  });
  StringQualifier.prototype.toString = function () {
    return this.value;
  };
  StringQualifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringQualifier',
    interfaces: [Qualifier]
  };
  StringQualifier.prototype.component1 = function () {
    return this.value;
  };
  StringQualifier.prototype.copy_61zpoe$ = function (value) {
    return new StringQualifier(value === void 0 ? this.value : value);
  };
  StringQualifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  StringQualifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function TypeQualifier(type) {
    this.type = type;
    this.value_izc1dt$_0 = getFullName(this.type);
  }
  Object.defineProperty(TypeQualifier.prototype, 'value', {
    configurable: true,
    get: function () {
      return this.value_izc1dt$_0;
    }
  });
  TypeQualifier.prototype.toString = function () {
    return "q:'" + this.value + "'";
  };
  TypeQualifier.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, TypeQualifier) ? tmp$_0 : throwCCE();
    if (!equals(this.value, other.value))
      return false;
    return true;
  };
  TypeQualifier.prototype.hashCode = function () {
    return hashCode(this.value);
  };
  TypeQualifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeQualifier',
    interfaces: [Qualifier]
  };
  function InstanceRegistry(_koin) {
    this._koin = _koin;
    this._instances_0 = KoinPlatformTools_getInstance().safeHashMap_q3lmfv$();
    this.eagerInstances_0 = HashSet_init();
  }
  Object.defineProperty(InstanceRegistry.prototype, 'instances', {
    configurable: true,
    get: function () {
      return this._instances_0;
    }
  });
  InstanceRegistry.prototype.loadModules_rty5ir$ = function (modules, allowOverride) {
    var tmp$;
    tmp$ = modules.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.loadModule_0(element, allowOverride);
      this.eagerInstances_0.addAll_brywnq$(element.eagerInstances);
    }
  };
  InstanceRegistry.prototype.createAllEagerInstances_8be2vx$ = function () {
    this.createEagerInstances_0(this.eagerInstances_0);
    this.eagerInstances_0.clear();
  };
  InstanceRegistry.prototype.loadModule_0 = function (module_0, allowOverride) {
    var tmp$;
    tmp$ = module_0.mappings.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var mapping = element.key;
      var factory = element.value;
      this.saveMapping_ge94pm$(allowOverride, mapping, factory);
    }
  };
  InstanceRegistry.prototype.saveMapping_ge94pm$ = function (allowOverride, mapping, factory, logWarning) {
    if (logWarning === void 0)
      logWarning = true;
    if (this._instances_0.containsKey_11rb$(mapping)) {
      if (!allowOverride) {
        overrideError(factory, mapping);
      } else {
        if (logWarning)
          this._koin.logger.info_61zpoe$("Override Mapping '" + mapping + "' with " + factory.beanDefinition);
      }
    }if (this._koin.logger.isAt_qh0bru$(Level$DEBUG_getInstance()) && logWarning) {
      this._koin.logger.debug_61zpoe$("add mapping '" + mapping + "' for " + factory.beanDefinition);
    }this._instances_0.put_xwzc9p$(mapping, factory);
  };
  InstanceRegistry.prototype.createEagerInstances_0 = function (eagerInstances) {
    if (!eagerInstances.isEmpty()) {
      if (this._koin.logger.isAt_qh0bru$(Level$DEBUG_getInstance())) {
        this._koin.logger.debug_61zpoe$('Creating eager instances ...');
      }var defaultContext = new InstanceContext(this._koin, this._koin.scopeRegistry.rootScope);
      var tmp$;
      tmp$ = eagerInstances.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element.get_djr8xh$(defaultContext);
      }
    }};
  InstanceRegistry.prototype.resolveInstance_6qt7uq$ = function (qualifier, clazz, scopeQualifier, instanceContext) {
    var tmp$, tmp$_0;
    var indexKey_0 = indexKey(clazz, qualifier, scopeQualifier);
    return (tmp$_0 = (tmp$ = this._instances_0.get_11rb$(indexKey_0)) != null ? tmp$.get_djr8xh$(instanceContext) : null) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : null;
  };
  InstanceRegistry.prototype.declareInstance_odzs54$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.registry.InstanceRegistry.declareInstance_odzs54$', wrapFunction(function () {
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var Kind = _.org.koin.core.definition.Kind;
    var ScopedInstanceFactory_init = _.org.koin.core.instance.ScopedInstanceFactory;
    var indexKey = _.org.koin.core.definition.indexKey_68vs3e$;
    var getKClass = Kotlin.getKClass;
    var BeanDefinition_init = _.org.koin.core.definition.BeanDefinition;
    function InstanceRegistry$declareInstance$lambda(closure$instance) {
      return function ($receiver, it) {
        return closure$instance;
      };
    }
    return function (T_0, isT, instance, qualifier, secondaryTypes, allowOverride, scopeQualifier) {
      if (qualifier === void 0)
        qualifier = null;
      if (secondaryTypes === void 0)
        secondaryTypes = emptyList();
      if (allowOverride === void 0)
        allowOverride = true;
      var kind = Kind.Scoped;
      var def = new BeanDefinition_init(scopeQualifier, getKClass(T_0), qualifier, InstanceRegistry$declareInstance$lambda(instance), kind, secondaryTypes);
      var factory = new ScopedInstanceFactory_init(def);
      var indexKey_0 = indexKey(def.primaryType, def.qualifier, def.scopeQualifier);
      this.saveMapping_ge94pm$(allowOverride, indexKey_0, factory);
      var tmp$;
      tmp$ = def.secondaryTypes.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var index = indexKey(element, def.qualifier, def.scopeQualifier);
        this.saveMapping_ge94pm$(allowOverride, index, factory);
      }
    };
  }));
  InstanceRegistry.prototype.dropScopeInstances_8g0s21$ = function (scope) {
    var $receiver = this._instances_0.values;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, ScopedInstanceFactory))
        destination.add_11rb$(element);
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      element_0.drop_otv0xz$(scope);
    }
  };
  InstanceRegistry.prototype.close_8be2vx$ = function () {
    var tmp$;
    tmp$ = this._instances_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.key;
      var factory = element.value;
      factory.dropAll();
    }
    this._instances_0.clear();
  };
  InstanceRegistry.prototype.getAll_1gxr93$ = function (clazz, instanceContext) {
    var $receiver = this._instances_0.values;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (equals(element.beanDefinition.scopeQualifier, instanceContext.scope.scopeQualifier))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var tmp$_1;
      if (((tmp$_1 = element_0.beanDefinition.primaryType) != null ? tmp$_1.equals(clazz) : null) || element_0.beanDefinition.secondaryTypes.contains_11rb$(clazz))
        destination_0.add_11rb$(element_0);
    }
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault(destination_0, 10));
    var tmp$_2;
    tmp$_2 = destination_0.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      var tmp$_3;
      destination_1.add_11rb$((tmp$_3 = item.get_djr8xh$(instanceContext)) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE());
    }
    return destination_1;
  };
  InstanceRegistry.prototype.unloadModules_xp467u$ = function (modules) {
    var tmp$;
    tmp$ = modules.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.unloadModule_0(element);
    }
  };
  InstanceRegistry.prototype.unloadModule_0 = function (module_0) {
    var tmp$;
    tmp$ = module_0.mappings.keys.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if (this._instances_0.containsKey_11rb$(element)) {
        (tmp$_0 = this._instances_0.get_11rb$(element)) != null ? (tmp$_0.dropAll(), Unit) : null;
        this._instances_0.remove_11rb$(element);
      }}
  };
  InstanceRegistry.prototype.size = function () {
    return this._instances_0.size;
  };
  InstanceRegistry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstanceRegistry',
    interfaces: []
  };
  function PropertyRegistry(_koin) {
    this._koin_8be2vx$ = _koin;
    this._values_0 = KoinPlatformTools_getInstance().safeHashMap_q3lmfv$();
  }
  function PropertyRegistry$saveProperties$lambda(closure$properties) {
    return function () {
      return 'load ' + closure$properties.size + ' properties';
    };
  }
  PropertyRegistry.prototype.saveProperties_x7u0o8$ = function (properties) {
    this._koin_8be2vx$.logger.log_l8l5x0$(Level$DEBUG_getInstance(), PropertyRegistry$saveProperties$lambda(properties));
    this._values_0.putAll_a2k3zr$(properties);
  };
  PropertyRegistry.prototype.saveProperty_xhmm9q$ = function (key, value) {
    this._values_0.put_xwzc9p$(key, value);
  };
  PropertyRegistry.prototype.deleteProperty_61zpoe$ = function (key) {
    this._values_0.remove_11rb$(key);
  };
  PropertyRegistry.prototype.getProperty_ytbaoo$ = function (key) {
    var tmp$;
    return (tmp$ = this._values_0.get_11rb$(key)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : null;
  };
  PropertyRegistry.prototype.close = function () {
    this._values_0.clear();
  };
  PropertyRegistry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropertyRegistry',
    interfaces: []
  };
  function ScopeRegistry(_koin) {
    ScopeRegistry$Companion_getInstance();
    this._koin_0 = _koin;
    this._scopeDefinitions_0 = HashSet_init();
    this._scopes_0 = KoinPlatformTools_getInstance().safeHashMap_q3lmfv$();
    this.rootScope = new Scope(ScopeRegistry$Companion_getInstance().rootScopeQualifier, ScopeRegistry$Companion_getInstance().ROOT_SCOPE_ID_0, true, this._koin_0);
    this._scopeDefinitions_0.add_11rb$(this.rootScope.scopeQualifier);
    var $receiver = this._scopes_0;
    var key = this.rootScope.id;
    var value = this.rootScope;
    $receiver.put_xwzc9p$(key, value);
  }
  Object.defineProperty(ScopeRegistry.prototype, 'scopeDefinitions', {
    configurable: true,
    get: function () {
      return this._scopeDefinitions_0;
    }
  });
  ScopeRegistry.prototype.getScopeOrNull_61zpoe$ = function (scopeId) {
    return this._scopes_0.get_11rb$(scopeId);
  };
  ScopeRegistry.prototype.createScope_oofa6w$ = function (scopeId, qualifier, source) {
    if (source === void 0)
      source = null;
    if (!this._scopeDefinitions_0.contains_11rb$(qualifier)) {
      throw new NoScopeDefFoundException("Scope '" + qualifier + "' doesn't exist. Please declare it in a module.");
    }var $receiver = this._scopes_0;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(scopeId)) {
      throw new ScopeAlreadyCreatedException("Scope with id '" + scopeId + "' is already created");
    }var scope = new Scope(qualifier, scopeId, void 0, this._koin_0);
    if (source != null) {
      scope._source = source;
    }scope.linkTo_kxn90d$([this.rootScope]);
    this._scopes_0.put_xwzc9p$(scopeId, scope);
    return scope;
  };
  ScopeRegistry.prototype.deleteScope_y4putb$ = function (scopeId) {
    var tmp$;
    if ((tmp$ = this._scopes_0.get_11rb$(scopeId)) != null) {
      this.deleteScope_8g0s21$(tmp$);
    }};
  ScopeRegistry.prototype.deleteScope_8g0s21$ = function (scope) {
    this._koin_0.instanceRegistry.dropScopeInstances_8g0s21$(scope);
    this._scopes_0.remove_11rb$(scope.id);
  };
  ScopeRegistry.prototype.close_8be2vx$ = function () {
    this.closeAllScopes_0();
    this._scopes_0.clear();
    this._scopeDefinitions_0.clear();
  };
  ScopeRegistry.prototype.closeAllScopes_0 = function () {
    var tmp$;
    tmp$ = this._scopes_0.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.close();
    }
  };
  ScopeRegistry.prototype.loadScopes_y1vts9$ = function (modules) {
    var tmp$;
    tmp$ = modules.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.loadModule_0(element);
    }
  };
  ScopeRegistry.prototype.loadModule_0 = function (module_0) {
    this._scopeDefinitions_0.addAll_brywnq$(module_0.scopes);
  };
  function ScopeRegistry$Companion() {
    ScopeRegistry$Companion_instance = this;
    this.ROOT_SCOPE_ID_0 = '_';
    this.rootScopeQualifier = _q(this.ROOT_SCOPE_ID_0);
  }
  ScopeRegistry$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScopeRegistry$Companion_instance = null;
  function ScopeRegistry$Companion_getInstance() {
    if (ScopeRegistry$Companion_instance === null) {
      new ScopeRegistry$Companion();
    }return ScopeRegistry$Companion_instance;
  }
  ScopeRegistry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScopeRegistry',
    interfaces: []
  };
  function Scope(scopeQualifier, id, isRoot, _koin) {
    if (isRoot === void 0)
      isRoot = false;
    this.scopeQualifier = scopeQualifier;
    this.id = id;
    this.isRoot = isRoot;
    this._koin = _koin;
    this.linkedScopes_0 = ArrayList_init();
    this._source = null;
    this._callbacks_0 = ArrayList_init();
    this._parameterStack = ArrayDeque_init();
    this._closed_0 = false;
  }
  Object.defineProperty(Scope.prototype, 'closed', {
    configurable: true,
    get: function () {
      return this._closed_0;
    }
  });
  Scope.prototype.isNotClosed = function () {
    return !this.closed;
  };
  Object.defineProperty(Scope.prototype, 'logger', {
    configurable: true,
    get: function () {
      return this._koin.logger;
    }
  });
  Scope.prototype.create_hg2lym$ = function (links) {
    this.linkedScopes_0.addAll_brywnq$(links);
  };
  Scope.prototype.linkTo_kxn90d$ = function (scopes) {
    if (!this.isRoot) {
      addAll(this.linkedScopes_0, scopes);
    } else {
      throw IllegalStateException_init("Can't add scope link to a root scope".toString());
    }
  };
  Scope.prototype.unlink_kxn90d$ = function (scopes) {
    if (!this.isRoot) {
      removeAll(this.linkedScopes_0, scopes);
    } else {
      throw IllegalStateException_init("Can't remove scope link to a root scope".toString());
    }
  };
  Scope.prototype.inject_h6n7o$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.scope.Scope.inject_h6n7o$', wrapFunction(function () {
    var LazyThreadSafetyMode = Kotlin.kotlin.LazyThreadSafetyMode;
    var wrapFunction = Kotlin.wrapFunction;
    var lazy = Kotlin.kotlin.lazy_kls4a0$;
    var Scope$inject$lambda = wrapFunction(function () {
      var getKClass = Kotlin.getKClass;
      return function (closure$qualifier, closure$parameters, typeClosure$T, isT, this$Scope) {
        return function () {
          var $this = this$Scope;
          var T_0 = typeClosure$T;
          var qualifier = closure$qualifier;
          var parameters = closure$parameters;
          return $this.get_twqkno$(getKClass(T_0), qualifier, parameters);
        };
      };
    });
    return function (T_0, isT, qualifier, mode, parameters) {
      if (qualifier === void 0)
        qualifier = null;
      if (mode === void 0)
        mode = LazyThreadSafetyMode.SYNCHRONIZED;
      if (parameters === void 0)
        parameters = null;
      return lazy(mode, Scope$inject$lambda(qualifier, parameters, T_0, isT, this));
    };
  }));
  Scope.prototype.injectOrNull_h6n7o$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.scope.Scope.injectOrNull_h6n7o$', wrapFunction(function () {
    var LazyThreadSafetyMode = Kotlin.kotlin.LazyThreadSafetyMode;
    var wrapFunction = Kotlin.wrapFunction;
    var lazy = Kotlin.kotlin.lazy_kls4a0$;
    var Scope$injectOrNull$lambda = wrapFunction(function () {
      var getKClass = Kotlin.getKClass;
      return function (closure$qualifier, closure$parameters, typeClosure$T, isT, this$Scope) {
        return function () {
          var $this = this$Scope;
          var T_0 = typeClosure$T;
          var qualifier = closure$qualifier;
          var parameters = closure$parameters;
          return $this.getOrNull_twqkno$(getKClass(T_0), qualifier, parameters);
        };
      };
    });
    return function (T_0, isT, qualifier, mode, parameters) {
      if (qualifier === void 0)
        qualifier = null;
      if (mode === void 0)
        mode = LazyThreadSafetyMode.SYNCHRONIZED;
      if (parameters === void 0)
        parameters = null;
      return lazy(mode, Scope$injectOrNull$lambda(qualifier, parameters, T_0, isT, this));
    };
  }));
  Scope.prototype.get_5ol634$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.scope.Scope.get_5ol634$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, qualifier, parameters) {
      if (qualifier === void 0)
        qualifier = null;
      if (parameters === void 0)
        parameters = null;
      return this.get_twqkno$(getKClass(T_0), qualifier, parameters);
    };
  }));
  Scope.prototype.getOrNull_5ol634$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.scope.Scope.getOrNull_5ol634$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, qualifier, parameters) {
      if (qualifier === void 0)
        qualifier = null;
      if (parameters === void 0)
        parameters = null;
      return this.getOrNull_twqkno$(getKClass(T_0), qualifier, parameters);
    };
  }));
  Scope.prototype.getOrNull_twqkno$ = function (clazz, qualifier, parameters) {
    if (qualifier === void 0)
      qualifier = null;
    if (parameters === void 0)
      parameters = null;
    var tmp$;
    try {
      tmp$ = this.get_twqkno$(clazz, qualifier, parameters);
    } catch (e) {
      if (Kotlin.isType(e, ClosedScopeException)) {
        this._koin.logger.debug_61zpoe$('Scope closed - no instance found for ' + getFullName(clazz) + ' on scope ' + this.toString());
        tmp$ = null;
      } else if (Kotlin.isType(e, NoBeanDefFoundException)) {
        this._koin.logger.debug_61zpoe$('No instance found for ' + getFullName(clazz) + ' on scope ' + this.toString());
        tmp$ = null;
      } else
        throw e;
    }
    return tmp$;
  };
  function Scope$get$lambda(closure$qualifier, closure$clazz, closure$parameters, this$Scope) {
    return function () {
      return this$Scope.resolveInstance_0(closure$qualifier, closure$clazz, closure$parameters);
    };
  }
  Scope.prototype.get_twqkno$ = function (clazz, qualifier, parameters) {
    if (qualifier === void 0)
      qualifier = null;
    if (parameters === void 0)
      parameters = null;
    var tmp$, tmp$_0;
    if (this._koin.logger.isAt_qh0bru$(Level$DEBUG_getInstance())) {
      var qualifierString = (tmp$ = qualifier != null ? " with qualifier '" + toString(qualifier) + "'" : null) != null ? tmp$ : '';
      this._koin.logger.debug_61zpoe$("+- '" + getFullName(clazz) + "'" + qualifierString);
      var tmp$_1 = measureDurationForResult(Scope$get$lambda(qualifier, clazz, parameters, this));
      var instance = tmp$_1.component1()
      , duration = tmp$_1.component2();
      this._koin.logger.debug_61zpoe$("|- '" + getFullName(clazz) + "' in " + duration + ' ms');
      return instance;
    } else {
      tmp$_0 = this.resolveInstance_0(qualifier, clazz, parameters);
    }
    return tmp$_0;
  };
  Scope.prototype.resolveInstance_0 = function (qualifier, clazz, parameterDef) {
    if (this._closed_0) {
      throw new ClosedScopeException("Scope '" + this.id + "' is closed");
    }var parameters = parameterDef != null ? parameterDef() : null;
    if (parameters != null) {
      this._parameterStack.addFirst_11rb$(parameters);
    }var instanceContext = new InstanceContext(this._koin, this, parameters);
    var value = this.resolveValue_0(qualifier, clazz, instanceContext, parameterDef);
    if (parameters != null) {
      this._parameterStack.removeFirst();
    }return value;
  };
  function Scope$resolveValue$lambda$lambda(closure$clazz, closure$qualifier) {
    return function () {
      return "'" + getFullName(closure$clazz) + "' - q:'" + toString(closure$qualifier) + "' look in injected parameters";
    };
  }
  function Scope$resolveValue$lambda$lambda_0(closure$clazz, closure$qualifier) {
    return function () {
      return "'" + getFullName(closure$clazz) + "' - q:'" + toString(closure$qualifier) + "' look at scope source";
    };
  }
  function Scope$resolveValue$lambda$lambda_1(closure$clazz, closure$qualifier) {
    return function () {
      return "'" + getFullName(closure$clazz) + "' - q:'" + toString(closure$qualifier) + "' look in other scopes";
    };
  }
  function Scope$resolveValue$lambda$lambda_2(closure$clazz, closure$qualifier) {
    return function () {
      return "'" + getFullName(closure$clazz) + "' - q:'" + toString(closure$qualifier) + "' not found";
    };
  }
  Scope.prototype.resolveValue_0 = function (qualifier, clazz, instanceContext, parameterDef) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var tmp$_3;
    if ((tmp$ = this._koin.instanceRegistry.resolveInstance_6qt7uq$(qualifier, clazz, this.scopeQualifier, instanceContext)) != null)
      tmp$_3 = tmp$;
    else {
      var tmp$_4;
      this._koin.logger.log_l8l5x0$(Level$DEBUG_getInstance(), Scope$resolveValue$lambda$lambda(clazz, qualifier));
      tmp$_3 = (tmp$_4 = this._parameterStack.firstOrNull()) != null ? tmp$_4.getOrNull_1fyqsx$(clazz) : null;
    }
    var tmp$_5;
    if ((tmp$_0 = tmp$_3) != null)
      tmp$_5 = tmp$_0;
    else {
      var tmp$_6;
      this._koin.logger.log_l8l5x0$(Level$DEBUG_getInstance(), Scope$resolveValue$lambda$lambda_0(clazz, qualifier));
      var tmp$_7;
      if ((tmp$_6 = this._source) != null) {
        var block$result;
        var tmp$_8;
        if (clazz.isInstance_s8jyv4$(tmp$_6)) {
          block$result = (tmp$_8 = this._source) == null || Kotlin.isType(tmp$_8, Any) ? tmp$_8 : null;
        } else {
          block$result = null;
        }
        tmp$_7 = block$result;
      } else
        tmp$_7 = null;
      tmp$_5 = tmp$_7;
    }
    var tmp$_9;
    if ((tmp$_1 = tmp$_5) != null)
      tmp$_9 = tmp$_1;
    else {
      this._koin.logger.log_l8l5x0$(Level$DEBUG_getInstance(), Scope$resolveValue$lambda$lambda_1(clazz, qualifier));
      tmp$_9 = this.findInOtherScope_0(clazz, qualifier, parameterDef);
    }
    var tmp$_10;
    if ((tmp$_2 = tmp$_9) != null)
      tmp$_10 = tmp$_2;
    else {
      this._koin.logger.log_l8l5x0$(Level$DEBUG_getInstance(), Scope$resolveValue$lambda$lambda_2(clazz, qualifier));
      this._parameterStack.clear();
      tmp$_10 = this.throwDefinitionNotFound_0(qualifier, clazz);
    }
    return tmp$_10;
  };
  Scope.prototype.getFromSource_0 = function (clazz) {
    var tmp$;
    return clazz.isInstance_s8jyv4$(this._source) ? (tmp$ = this._source) == null || Kotlin.isType(tmp$, Any) ? tmp$ : null : null;
  };
  Scope.prototype.findInOtherScope_0 = function (clazz, qualifier, parameters) {
    var tmp$;
    var instance = null;
    tmp$ = this.linkedScopes_0.iterator();
    while (tmp$.hasNext()) {
      var scope = tmp$.next();
      instance = scope.getOrNull_twqkno$(clazz, qualifier, parameters);
      if (instance != null)
        break;
    }
    return instance;
  };
  Scope.prototype.throwDefinitionNotFound_0 = function (qualifier, clazz) {
    var tmp$;
    var qualifierString = (tmp$ = qualifier != null ? " & qualifier:'" + toString(qualifier) + "'" : null) != null ? tmp$ : '';
    throw new NoBeanDefFoundException("No definition found for class:'" + getFullName(clazz) + "'" + qualifierString + '. Check your definitions!');
  };
  Scope.prototype.declare_gnaxiq$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.scope.Scope.declare_gnaxiq$', wrapFunction(function () {
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var mp = _.org.koin.mp;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var Scope$declare$lambda = wrapFunction(function () {
      var Kind = _.org.koin.core.definition.Kind;
      var ScopedInstanceFactory_init = _.org.koin.core.instance.ScopedInstanceFactory;
      var indexKey = _.org.koin.core.definition.indexKey_68vs3e$;
      var getKClass = Kotlin.getKClass;
      var BeanDefinition_init = _.org.koin.core.definition.BeanDefinition;
      function InstanceRegistry$declareInstance$lambda(closure$instance) {
        return function ($receiver, it) {
          return closure$instance;
        };
      }
      return function (this$Scope, closure$instance, closure$qualifier, closure$secondaryTypes, closure$allowOverride, typeClosure$T, isT) {
        return function () {
          var $this = this$Scope._koin.instanceRegistry;
          var T_0 = typeClosure$T;
          var instance = closure$instance;
          var qualifier = closure$qualifier;
          var secondaryTypes = closure$secondaryTypes;
          var allowOverride = closure$allowOverride;
          var scopeQualifier = this$Scope.scopeQualifier;
          var kind = Kind.Scoped;
          var def = new BeanDefinition_init(scopeQualifier, getKClass(T_0), qualifier, InstanceRegistry$declareInstance$lambda(instance), kind, secondaryTypes);
          var factory = new ScopedInstanceFactory_init(def);
          var indexKey_0 = indexKey(def.primaryType, def.qualifier, def.scopeQualifier);
          $this.saveMapping_ge94pm$(allowOverride, indexKey_0, factory);
          var tmp$;
          tmp$ = def.secondaryTypes.iterator();
          while (tmp$.hasNext()) {
            var element = tmp$.next();
            var index = indexKey(element, def.qualifier, def.scopeQualifier);
            $this.saveMapping_ge94pm$(allowOverride, index, factory);
          }
          return Unit;
        };
      };
    });
    return function (T_0, isT, instance, qualifier, secondaryTypes, allowOverride) {
      if (qualifier === void 0)
        qualifier = null;
      if (secondaryTypes === void 0)
        secondaryTypes = emptyList();
      if (allowOverride === void 0)
        allowOverride = true;
      mp.KoinPlatformTools.synchronized_eocq09$(this, Scope$declare$lambda(this, instance, qualifier, secondaryTypes, allowOverride, T_0, isT));
    };
  }));
  Scope.prototype.getKoin = function () {
    return this._koin;
  };
  Scope.prototype.getScope_61zpoe$ = function (scopeID) {
    return this.getKoin().getScope_61zpoe$(scopeID);
  };
  Scope.prototype.registerCallback_5jdzpx$ = function (callback) {
    this._callbacks_0.add_11rb$(callback);
  };
  Scope.prototype.getAll_30y1fr$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.core.scope.Scope.getAll_30y1fr$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT) {
      return this.getAll_1fyqsx$(getKClass(T_0));
    };
  }));
  Scope.prototype.getAll_1fyqsx$ = function (clazz) {
    var context = new InstanceContext(this._koin, this);
    var tmp$ = this._koin.instanceRegistry.getAll_1gxr93$(clazz, context);
    var $receiver = this.linkedScopes_0;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var list = element.getAll_1fyqsx$(clazz);
      addAll_0(destination, list);
    }
    return plus(tmp$, destination);
  };
  Scope.prototype.getProperty_puj7f4$ = function (key, defaultValue) {
    return this._koin.getProperty_fym6v3$(key, defaultValue);
  };
  Scope.prototype.getPropertyOrNull_61zpoe$ = function (key) {
    return this._koin.getProperty_3zqiyt$(key);
  };
  Scope.prototype.getProperty_61zpoe$ = function (key) {
    var tmp$;
    tmp$ = this._koin.getProperty_3zqiyt$(key);
    if (tmp$ == null) {
      throw new MissingPropertyException("Property '" + key + "' not found");
    }return tmp$;
  };
  function Scope$close$lambda(this$Scope) {
    return function () {
      this$Scope._closed_0 = true;
      this$Scope.clearData_0();
      this$Scope._koin.scopeRegistry.deleteScope_8g0s21$(this$Scope);
      return Unit;
    };
  }
  Scope.prototype.close = function () {
    KoinPlatformTools_getInstance().synchronized_eocq09$(this, Scope$close$lambda(this));
  };
  Scope.prototype.clearData_0 = function () {
    this._source = null;
    if (this._koin.logger.isAt_qh0bru$(Level$DEBUG_getInstance())) {
      this._koin.logger.info_61zpoe$("closing scope:'" + this.id + "'");
    }var tmp$;
    tmp$ = this._callbacks_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.onScopeClose_8d4612$(this);
    }
    this._callbacks_0.clear();
  };
  Scope.prototype.toString = function () {
    return "['" + this.id + "']";
  };
  Scope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scope',
    interfaces: []
  };
  Scope.prototype.component1 = function () {
    return this.scopeQualifier;
  };
  Scope.prototype.component2 = function () {
    return this.id;
  };
  Scope.prototype.component3 = function () {
    return this.isRoot;
  };
  Scope.prototype.component4_8be2vx$ = function () {
    return this._koin;
  };
  Scope.prototype.copy_36bh4q$ = function (scopeQualifier, id, isRoot, _koin) {
    return new Scope(scopeQualifier === void 0 ? this.scopeQualifier : scopeQualifier, id === void 0 ? this.id : id, isRoot === void 0 ? this.isRoot : isRoot, _koin === void 0 ? this._koin : _koin);
  };
  Scope.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.scopeQualifier) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.isRoot) | 0;
    result = result * 31 + Kotlin.hashCode(this._koin) | 0;
    return result;
  };
  Scope.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.scopeQualifier, other.scopeQualifier) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.isRoot, other.isRoot) && Kotlin.equals(this._koin, other._koin)))));
  };
  function ScopeCallback() {
  }
  ScopeCallback.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ScopeCallback',
    interfaces: []
  };
  function measureDuration(code) {
    var mark = TimeSource.Monotonic.markNow();
    code();
    return mark.elapsedNow().toDouble_p6uejw$(DurationUnit.MILLISECONDS);
  }
  function measureDurationForResult(code) {
    var mark = TimeSource.Monotonic.markNow();
    var result = code();
    var result_0 = new TimedValue_init(result, mark.elapsedNow());
    return new Pair(result_0.value, result_0.duration.toDouble_p6uejw$(DurationUnit.MILLISECONDS));
  }
  function bind($receiver, clazz) {
    $receiver.second.beanDefinition.secondaryTypes = plus_0($receiver.second.beanDefinition.secondaryTypes, clazz);
    var mapping = indexKey(clazz, $receiver.second.beanDefinition.qualifier, $receiver.second.beanDefinition.scopeQualifier);
    $receiver.first.saveMapping_fze439$(mapping, $receiver.second, true);
    return $receiver;
  }
  var bind_0 = defineInlineFunction('core-koin-core-js-legacy.org.koin.dsl.bind_mo9z08$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var bind = _.org.koin.dsl.bind_z81wy5$;
    return function (T_0, isT, $receiver) {
      return bind($receiver, getKClass(T_0));
    };
  }));
  function binds($receiver, classes) {
    $receiver.second.beanDefinition.secondaryTypes = plus_1($receiver.second.beanDefinition.secondaryTypes, classes);
    var tmp$;
    for (tmp$ = 0; tmp$ !== classes.length; ++tmp$) {
      var element = classes[tmp$];
      var mapping = indexKey(element, $receiver.second.beanDefinition.qualifier, $receiver.second.beanDefinition.scopeQualifier);
      $receiver.first.saveMapping_fze439$(mapping, $receiver.second, true);
    }
    return $receiver;
  }
  function onClose($receiver, onClose) {
    $receiver.second.beanDefinition.callbacks = new Callbacks(onClose);
    return $receiver;
  }
  function koinApplication(appDeclaration) {
    if (appDeclaration === void 0)
      appDeclaration = null;
    var koinApplication = KoinApplication$Companion_getInstance().init();
    appDeclaration != null ? appDeclaration(koinApplication) : null;
    return koinApplication;
  }
  function module_0(createdAtStart, override, moduleDeclaration) {
    if (createdAtStart === void 0)
      createdAtStart = false;
    if (override === void 0)
      override = false;
    var module_0 = new Module(createdAtStart);
    moduleDeclaration(module_0);
    return module_0;
  }
  function module_1(createdAtStart, moduleDeclaration) {
    if (createdAtStart === void 0)
      createdAtStart = false;
    var module_0 = new Module(createdAtStart);
    moduleDeclaration(module_0);
    return module_0;
  }
  function ScopeDSL(scopeQualifier, module_0) {
    this.scopeQualifier = scopeQualifier;
    this.module = module_0;
  }
  ScopeDSL.prototype.single_bl86gq$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.dsl.ScopeDSL.single_bl86gq$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (T_0, isT, qualifier, definition) {
      if (qualifier === void 0)
        qualifier = null;
      throw IllegalStateException_init('Scoped definition is deprecated and has been replaced with Single scope definitions'.toString());
    };
  }));
  ScopeDSL.prototype.scoped_bl86gq$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.dsl.ScopeDSL.scoped_bl86gq$', wrapFunction(function () {
    var Kind = _.org.koin.core.definition.Kind;
    var indexKey = _.org.koin.core.definition.indexKey_68vs3e$;
    var ScopedInstanceFactory_init = _.org.koin.core.instance.ScopedInstanceFactory;
    var Pair_init = Kotlin.kotlin.Pair;
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getKClass = Kotlin.getKClass;
    var BeanDefinition_init = _.org.koin.core.definition.BeanDefinition;
    return function (T_0, isT, qualifier, definition) {
      if (qualifier === void 0)
        qualifier = null;
      var kind = Kind.Scoped;
      var scopeQualifier = this.scopeQualifier;
      var secondaryTypes;
      secondaryTypes = emptyList();
      var def = new BeanDefinition_init(scopeQualifier, getKClass(T_0), qualifier, definition, kind, secondaryTypes);
      var mapping = indexKey(def.primaryType, qualifier, this.scopeQualifier);
      var instanceFactory = new ScopedInstanceFactory_init(def);
      this.module.saveMapping_fze439$(mapping, instanceFactory);
      return new Pair_init(this.module, instanceFactory);
    };
  }));
  ScopeDSL.prototype.factory_bl86gq$ = defineInlineFunction('core-koin-core-js-legacy.org.koin.dsl.ScopeDSL.factory_bl86gq$', wrapFunction(function () {
    var Kind = _.org.koin.core.definition.Kind;
    var indexKey = _.org.koin.core.definition.indexKey_68vs3e$;
    var FactoryInstanceFactory_init = _.org.koin.core.instance.FactoryInstanceFactory;
    var Pair_init = Kotlin.kotlin.Pair;
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getKClass = Kotlin.getKClass;
    var BeanDefinition_init = _.org.koin.core.definition.BeanDefinition;
    return function (T_0, isT, qualifier, definition) {
      if (qualifier === void 0)
        qualifier = null;
      var $this = this.module;
      var scopeQualifier = this.scopeQualifier;
      var kind = Kind.Factory;
      var secondaryTypes;
      secondaryTypes = emptyList();
      var def = new BeanDefinition_init(scopeQualifier, getKClass(T_0), qualifier, definition, kind, secondaryTypes);
      var mapping = indexKey(def.primaryType, qualifier, scopeQualifier);
      var instanceFactory = new FactoryInstanceFactory_init(def);
      $this.saveMapping_fze439$(mapping, instanceFactory);
      return new Pair_init($this, instanceFactory);
    };
  }));
  ScopeDSL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScopeDSL',
    interfaces: []
  };
  var inject_0 = defineInlineFunction('core-koin-core-js-legacy.org.koin.ext.inject_58ahrt$', wrapFunction(function () {
    var mp = _.org.koin.mp;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver) {
      $receiver.set(mp.KoinPlatformTools.defaultContext().get().scopeRegistry.rootScope.get_twqkno$(getKClass(T_0), null, null));
    };
  }));
  var inject_1 = defineInlineFunction('core-koin-core-js-legacy.org.koin.ext.inject_54byik$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, koin) {
      $receiver.set(koin.scopeRegistry.rootScope.get_twqkno$(getKClass(T_0), null, null));
    };
  }));
  var inject_2 = defineInlineFunction('core-koin-core-js-legacy.org.koin.ext.inject_xl13zn$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, scope) {
      $receiver.set(scope.get_twqkno$(getKClass(T_0), null, null));
    };
  }));
  function getFullName($receiver) {
    var tmp$;
    return (tmp$ = classNames.get_11rb$($receiver)) != null ? tmp$ : saveCache($receiver);
  }
  function saveCache($receiver) {
    var name = KoinPlatformTools_getInstance().getClassName_xo1ogr$($receiver);
    classNames.put_xwzc9p$($receiver, name);
    return name;
  }
  var classNames;
  function clearQuotes($receiver) {
    var tmp$;
    var chars = toCharArray($receiver);
    var quoteChar = 34;
    if ($receiver.length <= 1)
      tmp$ = $receiver;
    else if (chars[0] === quoteChar && chars[get_lastIndex(chars)] === quoteChar)
      tmp$ = concatToString(copyOfRange(chars, 1, get_lastIndex(chars)));
    else
      tmp$ = $receiver;
    return tmp$;
  }
  function GlobalContext() {
    GlobalContext_instance = this;
    this._koin_0 = null;
  }
  GlobalContext.prototype.get = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this._koin_0) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init('KoinApplication has not been started'.toString());
    }
    return tmp$_0;
  };
  GlobalContext.prototype.getOrNull = function () {
    return this._koin_0;
  };
  GlobalContext.prototype.register_0 = function (koinApplication) {
    if (this._koin_0 != null) {
      throw new KoinAppAlreadyStartedException('A Koin Application has already been started');
    }this._koin_0 = koinApplication.koin;
  };
  GlobalContext.prototype.stopKoin = function () {
    var tmp$;
    (tmp$ = this._koin_0) != null ? (tmp$.close(), Unit) : null;
    this._koin_0 = null;
  };
  GlobalContext.prototype.startKoin_ompzyr$ = function (koinApplication) {
    this.register_0(koinApplication);
    return koinApplication;
  };
  GlobalContext.prototype.startKoin_eciske$ = function (appDeclaration) {
    var koinApplication = KoinApplication$Companion_getInstance().init();
    this.register_0(koinApplication);
    appDeclaration(koinApplication);
    return koinApplication;
  };
  GlobalContext.prototype.loadKoinModules_7zxgee$ = function (module_0) {
    this.get().loadModules_o0ioeo$(listOf(module_0));
  };
  GlobalContext.prototype.loadKoinModules_y1vts9$ = function (modules) {
    this.get().loadModules_o0ioeo$(modules);
  };
  GlobalContext.prototype.unloadKoinModules_7zxgee$ = function (module_0) {
    this.get().unloadModules_y1vts9$(listOf(module_0));
  };
  GlobalContext.prototype.unloadKoinModules_y1vts9$ = function (modules) {
    this.get().unloadModules_y1vts9$(modules);
  };
  GlobalContext.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GlobalContext',
    interfaces: [KoinContext]
  };
  var GlobalContext_instance = null;
  function GlobalContext_getInstance() {
    if (GlobalContext_instance === null) {
      new GlobalContext();
    }return GlobalContext_instance;
  }
  function PrintLogger(level) {
    if (level === void 0)
      level = Level$INFO_getInstance();
    Logger.call(this, level);
  }
  PrintLogger.prototype.log_6vf1gs$ = function (level, msg) {
    if (this.level.compareTo_11rb$(level) <= 0) {
      println('[' + level + '] ' + KOIN_TAG + ' ' + msg);
    }};
  PrintLogger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrintLogger',
    interfaces: [Logger]
  };
  function KoinPlatformTools() {
    KoinPlatformTools_instance = this;
  }
  KoinPlatformTools.prototype.getStackTrace_3lhtaa$ = function (e) {
    return e.toString() + toString(split(Exception_init_0().toString(), ['\n']));
  };
  KoinPlatformTools.prototype.getClassName_xo1ogr$ = function (kClass) {
    var tmp$;
    return (tmp$ = kClass.simpleName) != null ? tmp$ : 'KClass@' + kClass.hashCode();
  };
  KoinPlatformTools.prototype.generateId = function () {
    return hashCode(Random.Default.nextDouble()).toString();
  };
  KoinPlatformTools.prototype.defaultLazyMode = function () {
    return LazyThreadSafetyMode.NONE;
  };
  KoinPlatformTools.prototype.defaultLogger_qh0bru$ = function (level) {
    if (level === void 0)
      level = Level$INFO_getInstance();
    return new PrintLogger(level);
  };
  KoinPlatformTools.prototype.defaultContext = function () {
    return GlobalContext_getInstance();
  };
  KoinPlatformTools.prototype.synchronized_eocq09$ = function (lock, block) {
    return block();
  };
  KoinPlatformTools.prototype.safeHashMap_q3lmfv$ = function () {
    return HashMap_init();
  };
  KoinPlatformTools.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KoinPlatformTools',
    interfaces: []
  };
  var KoinPlatformTools_instance = null;
  function KoinPlatformTools_getInstance() {
    if (KoinPlatformTools_instance === null) {
      new KoinPlatformTools();
    }return KoinPlatformTools_instance;
  }
  var package$org = _.org || (_.org = {});
  var package$koin = package$org.koin || (package$org.koin = {});
  var package$mp = package$koin.mp || (package$koin.mp = {});
  $$importsForInline$$['core-koin-core-js-legacy'] = _;
  var package$core = package$koin.core || (package$koin.core = {});
  var package$logger = package$core.logger || (package$core.logger = {});
  package$logger.Level = Level;
  package$core.Koin = Koin;
  Object.defineProperty(KoinApplication, 'Companion', {
    get: KoinApplication$Companion_getInstance
  });
  package$core.KoinApplication = KoinApplication;
  package$core.KoinExperimentalAPI = KoinExperimentalAPI;
  var package$annotation = package$core.annotation || (package$core.annotation = {});
  package$annotation.KoinInternalApi = KoinInternalApi;
  var package$component = package$core.component || (package$core.component = {});
  package$component.KoinComponent = KoinComponent;
  package$component.KoinScopeComponent = KoinScopeComponent;
  package$component.getScopeId_irb06o$ = getScopeId;
  package$component.getScopeName_irb06o$ = getScopeName;
  package$component.createScope_qyeu$ = createScope;
  package$component.getScopeOrNull_a0fmu0$ = getScopeOrNull;
  package$component.newScope_a0fmu0$ = newScope;
  package$component.getOrCreateScope_a0fmu0$ = getOrCreateScope;
  var package$context = package$core.context || (package$core.context = {});
  package$context.startKoin_ompzyr$ = startKoin;
  package$context.startKoin_eciske$ = startKoin_0;
  package$context.stopKoin = stopKoin;
  package$context.loadKoinModules_7zxgee$ = loadKoinModules;
  package$context.loadKoinModules_y1vts9$ = loadKoinModules_0;
  package$context.unloadKoinModules_7zxgee$ = unloadKoinModules;
  package$context.unloadKoinModules_y1vts9$ = unloadKoinModules_0;
  package$context.KoinContext = KoinContext;
  var package$definition = package$core.definition || (package$core.definition = {});
  package$definition.BeanDefinition = BeanDefinition;
  package$definition.indexKey_68vs3e$ = indexKey;
  Object.defineProperty(Kind, 'Singleton', {
    get: Kind$Singleton_getInstance
  });
  Object.defineProperty(Kind, 'Factory', {
    get: Kind$Factory_getInstance
  });
  Object.defineProperty(Kind, 'Scoped', {
    get: Kind$Scoped_getInstance
  });
  package$definition.Kind = Kind;
  package$definition.Callbacks = Callbacks;
  var package$error = package$core.error || (package$core.error = {});
  package$error.BrokenDefinitionException = BrokenDefinitionException;
  package$error.ClosedScopeException = ClosedScopeException;
  package$error.DefinitionOverrideException = DefinitionOverrideException;
  package$error.DefinitionParameterException = DefinitionParameterException;
  package$error.InstanceCreationException = InstanceCreationException;
  package$error.KoinAppAlreadyStartedException = KoinAppAlreadyStartedException;
  package$error.MissingPropertyException = MissingPropertyException;
  package$error.NoBeanDefFoundException = NoBeanDefFoundException;
  package$error.NoParameterFoundException = NoParameterFoundException;
  package$error.NoPropertyFileFoundException = NoPropertyFileFoundException;
  package$error.NoScopeDefFoundException = NoScopeDefFoundException;
  package$error.ScopeAlreadyCreatedException = ScopeAlreadyCreatedException;
  package$error.ScopeNotCreatedException = ScopeNotCreatedException;
  var package$instance = package$core.instance || (package$core.instance = {});
  package$instance.FactoryInstanceFactory = FactoryInstanceFactory;
  package$instance.InstanceContext = InstanceContext;
  Object.defineProperty(InstanceFactory, 'Companion', {
    get: InstanceFactory$Companion_getInstance
  });
  package$instance.InstanceFactory = InstanceFactory;
  package$instance.ScopedInstanceFactory = ScopedInstanceFactory;
  package$instance.SingleInstanceFactory = SingleInstanceFactory;
  package$logger.EmptyLogger = EmptyLogger;
  package$logger.Logger = Logger;
  Object.defineProperty(package$logger, 'KOIN_TAG', {
    get: function () {
      return KOIN_TAG;
    }
  });
  Object.defineProperty(Level, 'DEBUG', {
    get: Level$DEBUG_getInstance
  });
  Object.defineProperty(Level, 'INFO', {
    get: Level$INFO_getInstance
  });
  Object.defineProperty(Level, 'ERROR', {
    get: Level$ERROR_getInstance
  });
  Object.defineProperty(Level, 'NONE', {
    get: Level$NONE_getInstance
  });
  var package$registry = package$core.registry || (package$core.registry = {});
  package$registry.ScopeRegistry = ScopeRegistry;
  var package$module = package$core.module || (package$core.module = {});
  package$module.Module = Module;
  package$module.overrideError_205m0e$ = overrideError;
  package$module.plus_daeujm$ = plus_2;
  var package$ext = package$koin.ext || (package$koin.ext = {});
  package$ext.getFullName_lr8r8q$ = getFullName;
  Object.defineProperty(ParametersHolder, 'Companion', {
    get: ParametersHolder$Companion_getInstance
  });
  var package$parameter = package$core.parameter || (package$core.parameter = {});
  package$parameter.ParametersHolder = ParametersHolder;
  package$parameter.parametersOf_yhszz7$ = parametersOf;
  package$parameter.emptyParametersHolder = emptyParametersHolder;
  var package$qualifier = package$core.qualifier || (package$core.qualifier = {});
  package$qualifier.Qualifier = Qualifier;
  package$qualifier.named_61zpoe$ = named;
  package$qualifier.named_bxkerw$ = named_0;
  package$qualifier.qualifier_61zpoe$ = qualifier;
  package$qualifier.qualifier_bxkerw$ = qualifier_0;
  package$qualifier._q_61zpoe$ = _q;
  package$qualifier.get_qualifier_y53ejt$ = get_qualifier;
  package$qualifier.StringQualifier = StringQualifier;
  package$qualifier.TypeQualifier = TypeQualifier;
  package$registry.InstanceRegistry = InstanceRegistry;
  package$registry.PropertyRegistry = PropertyRegistry;
  Object.defineProperty(ScopeRegistry, 'Companion', {
    get: ScopeRegistry$Companion_getInstance
  });
  var package$scope = package$core.scope || (package$core.scope = {});
  package$scope.Scope = Scope;
  package$scope.ScopeCallback = ScopeCallback;
  var package$time = package$core.time || (package$core.time = {});
  package$time.measureDuration_o14v8n$ = measureDuration;
  package$time.measureDurationForResult_klfg04$ = measureDurationForResult;
  var package$dsl = package$koin.dsl || (package$koin.dsl = {});
  package$dsl.bind_z81wy5$ = bind;
  package$dsl.binds_twjwev$ = binds;
  package$dsl.onClose_wahq8d$ = onClose;
  package$dsl.koinApplication_ili9nn$ = koinApplication;
  package$dsl.module_7dh9ex$ = module_0;
  package$dsl.module_3ue8jc$ = module_1;
  package$dsl.ScopeDSL = ScopeDSL;
  package$ext.saveCache_lr8r8q$ = saveCache;
  package$ext.clearQuotes_pdl1vz$ = clearQuotes;
  Object.defineProperty(package$context, 'GlobalContext', {
    get: GlobalContext_getInstance
  });
  package$logger.PrintLogger = PrintLogger;
  Object.defineProperty(package$mp, 'KoinPlatformTools', {
    get: KoinPlatformTools_getInstance
  });
  KoinScopeComponent.prototype.getKoin = KoinComponent.prototype.getKoin;
  KOIN_TAG = '[Koin]';
  classNames = KoinPlatformTools_getInstance().safeHashMap_q3lmfv$();
  Kotlin.defineModule('core-koin-core-js-legacy', _);
  return _;
}));

//# sourceMappingURL=core-koin-core-js-legacy.js.map
