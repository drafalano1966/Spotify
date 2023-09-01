(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-atomicfu', 'Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-atomicfu'), require('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'i18n4k-i18n4k-core-jsLegacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'i18n4k-i18n4k-core-jsLegacy'.");
    }if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'i18n4k-i18n4k-core-jsLegacy'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'i18n4k-i18n4k-core-jsLegacy'.");
    }if (typeof this['Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'i18n4k-i18n4k-core-jsLegacy'. Its dependency 'Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy' was not found. Please, check whether 'Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy' is loaded prior to 'i18n4k-i18n4k-core-jsLegacy'.");
    }root['i18n4k-i18n4k-core-jsLegacy'] = factory(typeof this['i18n4k-i18n4k-core-jsLegacy'] === 'undefined' ? {} : this['i18n4k-i18n4k-core-jsLegacy'], kotlin, this['kotlinx-atomicfu'], this['Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy']);
  }
}(this, function (_, Kotlin, $module$kotlinx_atomicfu, $module$Kotlin_Immutable_Collections_kotlinx_collections_immutable_jsLegacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var binarySearch = Kotlin.kotlin.collections.binarySearch_jhx6be$;
  var substringBefore = Kotlin.kotlin.text.substringBefore_j4ogox$;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var atomic = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$ref$1;
  var atomic_0 = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$boolean$1;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var persistentMapOf = $module$Kotlin_Immutable_Collections_kotlinx_collections_immutable_jsLegacy.kotlinx.collections.immutable.persistentMapOf_q3lmfv$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var equals = Kotlin.equals;
  var hashCode = Kotlin.hashCode;
  var AbstractList = Kotlin.kotlin.collections.AbstractList;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var toString = Kotlin.toString;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var unboxChar = Kotlin.unboxChar;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var numberToDouble = Kotlin.numberToDouble;
  var startsWith = Kotlin.kotlin.text.startsWith_li3zpu$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init;
  var lineSequence = Kotlin.kotlin.text.lineSequence_gw00vp$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_7epoxm$;
  var Pair = Kotlin.kotlin.Pair;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var throwCCE = Kotlin.throwCCE;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var roundToLong = Kotlin.kotlin.math.roundToLong_yrwdxr$;
  var L0 = Kotlin.Long.ZERO;
  var contains_0 = Kotlin.kotlin.text.contains_sgbm27$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var numberToInt = Kotlin.numberToInt;
  var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var Math_0 = Math;
  var toChar = Kotlin.toChar;
  var Throwable = Error;
  MessageBundle$LocalizedString0.prototype = Object.create(AbstractLocalizedString.prototype);
  MessageBundle$LocalizedString0.prototype.constructor = MessageBundle$LocalizedString0;
  MessageBundle$LocalizedStringN.prototype = Object.create(AbstractLocalizedString.prototype);
  MessageBundle$LocalizedStringN.prototype.constructor = MessageBundle$LocalizedStringN;
  MessageFormatter$getMaxParameterIndex$ObjectLiteral.prototype = Object.create(AbstractList.prototype);
  MessageFormatter$getMaxParameterIndex$ObjectLiteral.prototype.constructor = MessageFormatter$getMaxParameterIndex$ObjectLiteral;
  MessagesProviderViaLoadingText.prototype = Object.create(MessagesProviderViaLoading.prototype);
  MessagesProviderViaLoadingText.prototype.constructor = MessagesProviderViaLoadingText;
  MessagesProviderViaText.prototype = Object.create(MessagesProviderViaLoadingText.prototype);
  MessagesProviderViaText.prototype.constructor = MessagesProviderViaText;
  LocalizedStringNumber.prototype = Object.create(AbstractLocalizedString.prototype);
  LocalizedStringNumber.prototype.constructor = LocalizedStringNumber;
  ParameterisedLocalizedString.prototype = Object.create(AbstractLocalizedString.prototype);
  ParameterisedLocalizedString.prototype.constructor = ParameterisedLocalizedString;
  var i18n4k;
  function get_language($receiver) {
    return $receiver.getLanguage();
  }
  function get_country($receiver) {
    return $receiver.getCountry();
  }
  function get_variant($receiver) {
    return $receiver.getVariant();
  }
  function forLocaleTag(languageTag) {
    var underscore1 = indexOf(languageTag, '_');
    if (underscore1 < 0)
      return Locale_init(languageTag);
    var underscore2 = indexOf(languageTag, '_', underscore1 + 1 | 0);
    if (underscore2 < 0) {
      var tmp$ = languageTag.substring(0, underscore1);
      var startIndex = underscore1 + 1 | 0;
      return Locale_init_0(tmp$, languageTag.substring(startIndex));
    }var tmp$_0 = languageTag.substring(0, underscore1);
    var startIndex_0 = underscore1 + 1 | 0;
    var tmp$_1 = languageTag.substring(startIndex_0, underscore2);
    var startIndex_1 = underscore2 + 1 | 0;
    return new Locale(tmp$_0, tmp$_1, languageTag.substring(startIndex_1));
  }
  function toTag($receiver) {
    if ($receiver.country.length === 0)
      return $receiver.language;
    if ($receiver.variant.length === 0)
      return $receiver.language + '_' + $receiver.country;
    return $receiver.language + '_' + $receiver.country + '_' + $receiver.variant;
  }
  function getDisplayNameInLocale($receiver) {
    var it = binarySearch(localeTags, $receiver.language);
    var displayLanguage = it < 0 ? $receiver.language : localeDisplayName.get_za3lpa$(it);
    if ($receiver.country.length === 0)
      return displayLanguage;
    var it_0 = binarySearch(localeTags, $receiver.language + '_' + $receiver.country);
    var displayCountry = it_0 < 0 ? displayLanguage + ' (' + $receiver.country + ')' : localeDisplayName.get_za3lpa$(it_0);
    if ($receiver.variant.length === 0)
      return displayCountry;
    var it_1 = binarySearch(localeTags, $receiver.language + '_' + $receiver.country + '_' + $receiver.variant);
    return it_1 < 0 ? substringBefore(displayCountry, ')') + ',' + $receiver.variant + ')' : localeDisplayName.get_za3lpa$(it_1);
  }
  var localeTags;
  var localeDisplayName;
  function I18n4kConfig() {
  }
  I18n4kConfig.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'I18n4kConfig',
    interfaces: []
  };
  function I18n4kConfigDefault() {
    this.defaultLocaleRef_0 = atomic(Locale_init('en'));
    this.localeRef_0 = atomic(systemLocale);
    this.messageFormatterRef_0 = atomic(MessageFormatterDefault_getInstance());
    this.treadBlankStringAsNullRef_0 = atomic_0(true);
  }
  I18n4kConfigDefault.prototype.restoreDefaultSettings = function () {
    this.defaultLocale = Locale_init('en');
    this.locale = systemLocale;
    this.messageFormatter = MessageFormatterDefault_getInstance();
    this.treadBlankStringAsNull = true;
  };
  Object.defineProperty(I18n4kConfigDefault.prototype, 'defaultLocale', {
    configurable: true,
    get: function () {
      return this.defaultLocaleRef_0.kotlinx$atomicfu$value;
    },
    set: function (value) {
      this.defaultLocaleRef_0.kotlinx$atomicfu$value = value;
    }
  });
  Object.defineProperty(I18n4kConfigDefault.prototype, 'locale', {
    configurable: true,
    get: function () {
      return this.localeRef_0.kotlinx$atomicfu$value;
    },
    set: function (value) {
      this.localeRef_0.kotlinx$atomicfu$value = value;
    }
  });
  Object.defineProperty(I18n4kConfigDefault.prototype, 'messageFormatter', {
    configurable: true,
    get: function () {
      return this.messageFormatterRef_0.kotlinx$atomicfu$value;
    },
    set: function (value) {
      this.messageFormatterRef_0.kotlinx$atomicfu$value = value;
    }
  });
  Object.defineProperty(I18n4kConfigDefault.prototype, 'treadBlankStringAsNull', {
    configurable: true,
    get: function () {
      return this.treadBlankStringAsNullRef_0.kotlinx$atomicfu$value;
    },
    set: function (value) {
      this.treadBlankStringAsNullRef_0.kotlinx$atomicfu$value = value;
    }
  });
  I18n4kConfigDefault.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'I18n4kConfigDefault',
    interfaces: [I18n4kConfig]
  };
  function I18n4kConfigDelegate(configProvider) {
    this.configProvider = configProvider;
  }
  Object.defineProperty(I18n4kConfigDelegate.prototype, 'defaultLocale', {
    configurable: true,
    get: function () {
      return this.configProvider().defaultLocale;
    }
  });
  Object.defineProperty(I18n4kConfigDelegate.prototype, 'locale', {
    configurable: true,
    get: function () {
      return this.configProvider().locale;
    }
  });
  Object.defineProperty(I18n4kConfigDelegate.prototype, 'messageFormatter', {
    configurable: true,
    get: function () {
      return this.configProvider().messageFormatter;
    }
  });
  Object.defineProperty(I18n4kConfigDelegate.prototype, 'treadBlankStringAsNull', {
    configurable: true,
    get: function () {
      return this.configProvider().treadBlankStringAsNull;
    }
  });
  I18n4kConfigDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'I18n4kConfigDelegate',
    interfaces: [I18n4kConfig]
  };
  function I18n4kConfigImmutable(defaultLocale, locale, messageFormatter, treadBlankStringAsNull) {
    this.defaultLocale_rfawxl$_0 = defaultLocale;
    this.locale_ja24li$_0 = locale;
    this.messageFormatter_94lnlv$_0 = messageFormatter;
    this.treadBlankStringAsNull_ykg86s$_0 = treadBlankStringAsNull;
  }
  Object.defineProperty(I18n4kConfigImmutable.prototype, 'defaultLocale', {
    get: function () {
      return this.defaultLocale_rfawxl$_0;
    }
  });
  Object.defineProperty(I18n4kConfigImmutable.prototype, 'locale', {
    get: function () {
      return this.locale_ja24li$_0;
    }
  });
  Object.defineProperty(I18n4kConfigImmutable.prototype, 'messageFormatter', {
    get: function () {
      return this.messageFormatter_94lnlv$_0;
    }
  });
  Object.defineProperty(I18n4kConfigImmutable.prototype, 'treadBlankStringAsNull', {
    get: function () {
      return this.treadBlankStringAsNull_ykg86s$_0;
    }
  });
  I18n4kConfigImmutable.prototype.withLocaleTag_61zpoe$ = function (languageCodeNew) {
    return this.withLocale_te4f9r$(forLocaleTag(languageCodeNew));
  };
  I18n4kConfigImmutable.prototype.withLocale_te4f9r$ = function (localeNew) {
    return new I18n4kConfigImmutable(this.defaultLocale, localeNew, this.messageFormatter, this.treadBlankStringAsNull);
  };
  I18n4kConfigImmutable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'I18n4kConfigImmutable',
    interfaces: [I18n4kConfig]
  };
  function I18n4kConfigImmutable_init($this) {
    $this = $this || Object.create(I18n4kConfigImmutable.prototype);
    I18n4kConfigImmutable.call($this, Locale_init('en'), systemLocale, MessageFormatterDefault_getInstance(), true);
    return $this;
  }
  I18n4kConfigImmutable.prototype.component1 = function () {
    return this.defaultLocale;
  };
  I18n4kConfigImmutable.prototype.component2 = function () {
    return this.locale;
  };
  I18n4kConfigImmutable.prototype.component3 = function () {
    return this.messageFormatter;
  };
  I18n4kConfigImmutable.prototype.component4 = function () {
    return this.treadBlankStringAsNull;
  };
  I18n4kConfigImmutable.prototype.copy_gyvct5$ = function (defaultLocale, locale, messageFormatter, treadBlankStringAsNull) {
    return new I18n4kConfigImmutable(defaultLocale === void 0 ? this.defaultLocale : defaultLocale, locale === void 0 ? this.locale : locale, messageFormatter === void 0 ? this.messageFormatter : messageFormatter, treadBlankStringAsNull === void 0 ? this.treadBlankStringAsNull : treadBlankStringAsNull);
  };
  I18n4kConfigImmutable.prototype.toString = function () {
    return 'I18n4kConfigImmutable(defaultLocale=' + Kotlin.toString(this.defaultLocale) + (', locale=' + Kotlin.toString(this.locale)) + (', messageFormatter=' + Kotlin.toString(this.messageFormatter)) + (', treadBlankStringAsNull=' + Kotlin.toString(this.treadBlankStringAsNull)) + ')';
  };
  I18n4kConfigImmutable.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.defaultLocale) | 0;
    result = result * 31 + Kotlin.hashCode(this.locale) | 0;
    result = result * 31 + Kotlin.hashCode(this.messageFormatter) | 0;
    result = result * 31 + Kotlin.hashCode(this.treadBlankStringAsNull) | 0;
    return result;
  };
  I18n4kConfigImmutable.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.defaultLocale, other.defaultLocale) && Kotlin.equals(this.locale, other.locale) && Kotlin.equals(this.messageFormatter, other.messageFormatter) && Kotlin.equals(this.treadBlankStringAsNull, other.treadBlankStringAsNull)))));
  };
  function MessageBundle() {
    this.localeToStringsRef_5fvw1u$_0 = atomic(persistentMapOf());
  }
  MessageBundle.prototype.registerTranslation_srfcdy$ = function (messagesProvider) {
    var $receiver = this.localeToStringsRef_5fvw1u$_0;
    update$break: do {
      while (true) {
        var cur = $receiver.kotlinx$atomicfu$value;
        var upd = cur.put_xwzc9p$(messagesProvider.locale, messagesProvider);
        if ($receiver.atomicfu$compareAndSet(cur, upd))
          break update$break;
      }
    }
     while (false);
  };
  MessageBundle.prototype.registerTranslationFactory_l2qqwk$ = function (messagesProviderFactory) {
    messagesProviderFactory.loadMessagesProvider_fxften$(getCallableRef('registerTranslation', function ($receiver, p1) {
      return $receiver.registerTranslation_srfcdy$(p1), Unit;
    }.bind(null, this)));
  };
  MessageBundle.prototype.unregisterAllTranslations = function () {
    var $receiver = this.localeToStringsRef_5fvw1u$_0;
    update$break: do {
      while (true) {
        var cur = $receiver.kotlinx$atomicfu$value;
        var upd = persistentMapOf();
        if ($receiver.atomicfu$compareAndSet(cur, upd))
          break update$break;
      }
    }
     while (false);
  };
  Object.defineProperty(MessageBundle.prototype, 'locales', {
    configurable: true,
    get: function () {
      return this.localeToStringsRef_5fvw1u$_0.kotlinx$atomicfu$value.keys;
    }
  });
  MessageBundle.prototype.getString0_49rtwm$ = function (index, locale) {
    if (index < 0)
      throw IllegalArgumentException_init('Index must be greater or equal to 0');
    var messages = this.localeToStringsRef_5fvw1u$_0.kotlinx$atomicfu$value.get_11rb$(locale != null ? locale : i18n4k.locale);
    var string = null;
    if (messages !== null && index < messages.size)
      string = messages.get_za3lpa$(index);
    if (i18n4k.treadBlankStringAsNull && (string != null ? isBlank(string) : null) === true)
      string = null;
    if (string === null)
      messages = this.localeToStringsRef_5fvw1u$_0.kotlinx$atomicfu$value.get_11rb$(i18n4k.defaultLocale);
    if (messages !== null && index < messages.size)
      string = messages.get_za3lpa$(index);
    if (i18n4k.treadBlankStringAsNull && (string != null ? isBlank(string) : null) === true)
      string = null;
    if (string === null)
      return '?' + index + '?';
    return string;
  };
  MessageBundle.prototype.getStringN_3f6j22$ = function (index, parameters, locale) {
    return i18n4k.messageFormatter.format_8w3ukd$(this.getString0_49rtwm$(index, locale), parameters, locale != null ? locale : i18n4k.locale);
  };
  MessageBundle.prototype.getLocalizedString0_za3lpa$ = function (index) {
    return new MessageBundle$LocalizedString0(this, index);
  };
  MessageBundle.prototype.getLocalizedString1_vux3hl$ = function (index, p0) {
    return new MessageBundle$LocalizedStringN(this, index, listOf(p0));
  };
  MessageBundle.prototype.getLocalizedString2_k9x532$ = function (index, p0, p1) {
    return new MessageBundle$LocalizedStringN(this, index, listOf_0([p0, p1]));
  };
  MessageBundle.prototype.getLocalizedString3_ew52v$ = function (index, p0, p1, p2) {
    return new MessageBundle$LocalizedStringN(this, index, listOf_0([p0, p1, p2]));
  };
  MessageBundle.prototype.getLocalizedString4_2p79gi$ = function (index, p0, p1, p2, p3) {
    return new MessageBundle$LocalizedStringN(this, index, listOf_0([p0, p1, p2, p3]));
  };
  MessageBundle.prototype.getLocalizedString5_pz2c7r$ = function (index, p0, p1, p2, p3, p4) {
    return new MessageBundle$LocalizedStringN(this, index, listOf_0([p0, p1, p2, p3, p4]));
  };
  MessageBundle.prototype.getLocalizedStringFactory1_za3lpa$ = function (index) {
    return new MessageBundle$LocalizedStringFactory1Bundled(this, index);
  };
  MessageBundle.prototype.getLocalizedStringFactory2_za3lpa$ = function (index) {
    return new MessageBundle$LocalizedStringFactory2Bundled(this, index);
  };
  MessageBundle.prototype.getLocalizedStringFactory3_za3lpa$ = function (index) {
    return new MessageBundle$LocalizedStringFactory3Bundled(this, index);
  };
  MessageBundle.prototype.getLocalizedStringFactory4_za3lpa$ = function (index) {
    return new MessageBundle$LocalizedStringFactory4Bundled(this, index);
  };
  MessageBundle.prototype.getLocalizedStringFactory5_za3lpa$ = function (index) {
    return new MessageBundle$LocalizedStringFactory5Bundled(this, index);
  };
  function MessageBundle$LocalizedString0(messages, key) {
    AbstractLocalizedString.call(this);
    this.messages_0 = messages;
    this.key_0 = key;
  }
  MessageBundle$LocalizedString0.prototype.toString = function () {
    return this.toString_c8nk8g$(null);
  };
  MessageBundle$LocalizedString0.prototype.toString_c8nk8g$ = function (locale) {
    return this.messages_0.getString0_49rtwm$(this.key_0, locale);
  };
  MessageBundle$LocalizedString0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, MessageBundle$LocalizedString0))
      return false;
    if (!equals(this.messages_0, other.messages_0))
      return false;
    if (this.key_0 !== other.key_0)
      return false;
    return true;
  };
  MessageBundle$LocalizedString0.prototype.hashCode = function () {
    var result = hashCode(this.messages_0);
    result = (31 * result | 0) + this.key_0 | 0;
    return result;
  };
  MessageBundle$LocalizedString0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalizedString0',
    interfaces: [AbstractLocalizedString]
  };
  function MessageBundle$LocalizedStringN(messages, key, parameters) {
    AbstractLocalizedString.call(this);
    this.messages_0 = messages;
    this.key_0 = key;
    this.parameters_0 = parameters;
  }
  MessageBundle$LocalizedStringN.prototype.toString = function () {
    return this.toString_c8nk8g$(null);
  };
  MessageBundle$LocalizedStringN.prototype.toString_c8nk8g$ = function (locale) {
    return this.messages_0.getStringN_3f6j22$(this.key_0, this.parameters_0, locale);
  };
  MessageBundle$LocalizedStringN.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, MessageBundle$LocalizedStringN))
      return false;
    if (!equals(this.messages_0, other.messages_0))
      return false;
    if (this.key_0 !== other.key_0)
      return false;
    if (!equals(this.parameters_0, other.parameters_0))
      return false;
    return true;
  };
  MessageBundle$LocalizedStringN.prototype.hashCode = function () {
    var result = hashCode(this.messages_0);
    result = (31 * result | 0) + this.key_0 | 0;
    result = (31 * result | 0) + hashCode(this.parameters_0) | 0;
    return result;
  };
  MessageBundle$LocalizedStringN.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalizedStringN',
    interfaces: [AbstractLocalizedString]
  };
  function MessageBundle$LocalizedStringFactory1Bundled(messages, index) {
    this.messages_0 = messages;
    this.index_0 = index;
  }
  MessageBundle$LocalizedStringFactory1Bundled.prototype.toString = function () {
    return this.toString_c8nk8g$(null);
  };
  MessageBundle$LocalizedStringFactory1Bundled.prototype.toString_c8nk8g$ = function (locale) {
    return this.messages_0.getString0_49rtwm$(this.index_0, locale);
  };
  MessageBundle$LocalizedStringFactory1Bundled.prototype.createString_vzvl31$$default = function (p0, locale) {
    return this.messages_0.getStringN_3f6j22$(this.index_0, listOf(p0), locale);
  };
  MessageBundle$LocalizedStringFactory1Bundled.prototype.createLocalizedString_za3rmp$ = function (p0) {
    return this.messages_0.getLocalizedString1_vux3hl$(this.index_0, p0);
  };
  MessageBundle$LocalizedStringFactory1Bundled.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalizedStringFactory1Bundled',
    interfaces: [LocalizedStringFactory1]
  };
  MessageBundle$LocalizedStringFactory1Bundled.prototype.component1_0 = function () {
    return this.messages_0;
  };
  MessageBundle$LocalizedStringFactory1Bundled.prototype.component2_0 = function () {
    return this.index_0;
  };
  MessageBundle$LocalizedStringFactory1Bundled.prototype.copy_vmld02$ = function (messages, index) {
    return new MessageBundle$LocalizedStringFactory1Bundled(messages === void 0 ? this.messages_0 : messages, index === void 0 ? this.index_0 : index);
  };
  MessageBundle$LocalizedStringFactory1Bundled.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.messages_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.index_0) | 0;
    return result;
  };
  MessageBundle$LocalizedStringFactory1Bundled.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.messages_0, other.messages_0) && Kotlin.equals(this.index_0, other.index_0)))));
  };
  function MessageBundle$LocalizedStringFactory2Bundled(messages, index) {
    this.messages_0 = messages;
    this.index_0 = index;
  }
  MessageBundle$LocalizedStringFactory2Bundled.prototype.toString = function () {
    return this.toString_c8nk8g$(null);
  };
  MessageBundle$LocalizedStringFactory2Bundled.prototype.toString_c8nk8g$ = function (locale) {
    return this.messages_0.getString0_49rtwm$(this.index_0, locale);
  };
  MessageBundle$LocalizedStringFactory2Bundled.prototype.createString_kwt2uo$$default = function (p0, p1, locale) {
    return this.messages_0.getStringN_3f6j22$(this.index_0, listOf_0([p0, p1]), locale);
  };
  MessageBundle$LocalizedStringFactory2Bundled.prototype.createLocalizedString_wn2jw4$ = function (p0, p1) {
    return this.messages_0.getLocalizedString2_k9x532$(this.index_0, p0, p1);
  };
  MessageBundle$LocalizedStringFactory2Bundled.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalizedStringFactory2Bundled',
    interfaces: [LocalizedStringFactory2]
  };
  MessageBundle$LocalizedStringFactory2Bundled.prototype.component1_0 = function () {
    return this.messages_0;
  };
  MessageBundle$LocalizedStringFactory2Bundled.prototype.component2_0 = function () {
    return this.index_0;
  };
  MessageBundle$LocalizedStringFactory2Bundled.prototype.copy_vmld02$ = function (messages, index) {
    return new MessageBundle$LocalizedStringFactory2Bundled(messages === void 0 ? this.messages_0 : messages, index === void 0 ? this.index_0 : index);
  };
  MessageBundle$LocalizedStringFactory2Bundled.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.messages_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.index_0) | 0;
    return result;
  };
  MessageBundle$LocalizedStringFactory2Bundled.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.messages_0, other.messages_0) && Kotlin.equals(this.index_0, other.index_0)))));
  };
  function MessageBundle$LocalizedStringFactory3Bundled(messages, index) {
    this.messages_0 = messages;
    this.index_0 = index;
  }
  MessageBundle$LocalizedStringFactory3Bundled.prototype.toString = function () {
    return this.toString_c8nk8g$(null);
  };
  MessageBundle$LocalizedStringFactory3Bundled.prototype.toString_c8nk8g$ = function (locale) {
    return this.messages_0.getString0_49rtwm$(this.index_0, locale);
  };
  MessageBundle$LocalizedStringFactory3Bundled.prototype.createString_lfxg0z$$default = function (p0, p1, p2, locale) {
    return this.messages_0.getStringN_3f6j22$(this.index_0, listOf_0([p0, p1, p2]), locale);
  };
  MessageBundle$LocalizedStringFactory3Bundled.prototype.createLocalizedString_2br51b$ = function (p0, p1, p2) {
    return this.messages_0.getLocalizedString3_ew52v$(this.index_0, p0, p1, p2);
  };
  MessageBundle$LocalizedStringFactory3Bundled.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalizedStringFactory3Bundled',
    interfaces: [LocalizedStringFactory3]
  };
  MessageBundle$LocalizedStringFactory3Bundled.prototype.component1_0 = function () {
    return this.messages_0;
  };
  MessageBundle$LocalizedStringFactory3Bundled.prototype.component2_0 = function () {
    return this.index_0;
  };
  MessageBundle$LocalizedStringFactory3Bundled.prototype.copy_vmld02$ = function (messages, index) {
    return new MessageBundle$LocalizedStringFactory3Bundled(messages === void 0 ? this.messages_0 : messages, index === void 0 ? this.index_0 : index);
  };
  MessageBundle$LocalizedStringFactory3Bundled.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.messages_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.index_0) | 0;
    return result;
  };
  MessageBundle$LocalizedStringFactory3Bundled.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.messages_0, other.messages_0) && Kotlin.equals(this.index_0, other.index_0)))));
  };
  function MessageBundle$LocalizedStringFactory4Bundled(messages, index) {
    this.messages_0 = messages;
    this.index_0 = index;
  }
  MessageBundle$LocalizedStringFactory4Bundled.prototype.toString = function () {
    return this.toString_c8nk8g$(null);
  };
  MessageBundle$LocalizedStringFactory4Bundled.prototype.toString_c8nk8g$ = function (locale) {
    return this.messages_0.getString0_49rtwm$(this.index_0, locale);
  };
  MessageBundle$LocalizedStringFactory4Bundled.prototype.createString_we6r9s$$default = function (p0, p1, p2, p3, locale) {
    return this.messages_0.getStringN_3f6j22$(this.index_0, listOf_0([p0, p1, p2, p3]), locale);
  };
  MessageBundle$LocalizedStringFactory4Bundled.prototype.createLocalizedString_vl6e50$ = function (p0, p1, p2, p3) {
    return this.messages_0.getLocalizedString4_2p79gi$(this.index_0, p0, p1, p2, p3);
  };
  MessageBundle$LocalizedStringFactory4Bundled.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalizedStringFactory4Bundled',
    interfaces: [LocalizedStringFactory4]
  };
  MessageBundle$LocalizedStringFactory4Bundled.prototype.component1_0 = function () {
    return this.messages_0;
  };
  MessageBundle$LocalizedStringFactory4Bundled.prototype.component2_0 = function () {
    return this.index_0;
  };
  MessageBundle$LocalizedStringFactory4Bundled.prototype.copy_vmld02$ = function (messages, index) {
    return new MessageBundle$LocalizedStringFactory4Bundled(messages === void 0 ? this.messages_0 : messages, index === void 0 ? this.index_0 : index);
  };
  MessageBundle$LocalizedStringFactory4Bundled.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.messages_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.index_0) | 0;
    return result;
  };
  MessageBundle$LocalizedStringFactory4Bundled.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.messages_0, other.messages_0) && Kotlin.equals(this.index_0, other.index_0)))));
  };
  function MessageBundle$LocalizedStringFactory5Bundled(messages, index) {
    this.messages_0 = messages;
    this.index_0 = index;
  }
  MessageBundle$LocalizedStringFactory5Bundled.prototype.toString = function () {
    return this.toString_c8nk8g$(null);
  };
  MessageBundle$LocalizedStringFactory5Bundled.prototype.toString_c8nk8g$ = function (locale) {
    return this.messages_0.getString0_49rtwm$(this.index_0, locale);
  };
  MessageBundle$LocalizedStringFactory5Bundled.prototype.createString_5wukoz$$default = function (p0, p1, p2, p3, p4, locale) {
    return this.messages_0.getStringN_3f6j22$(this.index_0, listOf_0([p0, p1, p2, p3, p4]), locale);
  };
  MessageBundle$LocalizedStringFactory5Bundled.prototype.createLocalizedString_rhf5lr$ = function (p0, p1, p2, p3, p4) {
    return this.messages_0.getLocalizedString5_pz2c7r$(this.index_0, p0, p1, p2, p3, p4);
  };
  MessageBundle$LocalizedStringFactory5Bundled.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalizedStringFactory5Bundled',
    interfaces: [LocalizedStringFactory5]
  };
  MessageBundle$LocalizedStringFactory5Bundled.prototype.component1_0 = function () {
    return this.messages_0;
  };
  MessageBundle$LocalizedStringFactory5Bundled.prototype.component2_0 = function () {
    return this.index_0;
  };
  MessageBundle$LocalizedStringFactory5Bundled.prototype.copy_vmld02$ = function (messages, index) {
    return new MessageBundle$LocalizedStringFactory5Bundled(messages === void 0 ? this.messages_0 : messages, index === void 0 ? this.index_0 : index);
  };
  MessageBundle$LocalizedStringFactory5Bundled.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.messages_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.index_0) | 0;
    return result;
  };
  MessageBundle$LocalizedStringFactory5Bundled.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.messages_0, other.messages_0) && Kotlin.equals(this.index_0, other.index_0)))));
  };
  MessageBundle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessageBundle',
    interfaces: []
  };
  function MessageFormatter() {
  }
  function MessageFormatter$getMaxParameterIndex$ObjectLiteral(closure$parameterIndex) {
    this.closure$parameterIndex = closure$parameterIndex;
    AbstractList.call(this);
  }
  Object.defineProperty(MessageFormatter$getMaxParameterIndex$ObjectLiteral.prototype, 'size', {
    configurable: true,
    get: function () {
      return 2147483647;
    }
  });
  MessageFormatter$getMaxParameterIndex$ObjectLiteral.prototype.get_za3lpa$ = function (index) {
    if (index > this.closure$parameterIndex.v)
      this.closure$parameterIndex.v = index;
    return '';
  };
  MessageFormatter$getMaxParameterIndex$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AbstractList]
  };
  MessageFormatter.prototype.getMaxParameterIndex_kqnu5d$ = function (message, locale) {
    var parameterIndex = {v: -1};
    var l = new MessageFormatter$getMaxParameterIndex$ObjectLiteral(parameterIndex);
    this.format_8w3ukd$(message, l, locale);
    return parameterIndex.v;
  };
  MessageFormatter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MessageFormatter',
    interfaces: []
  };
  function MessageFormatterDefault() {
    MessageFormatterDefault_instance = this;
    this.valueFormatters_0 = mapOf([to(MessageNumberFormatter_getInstance().FORMAT_STYLE_AREA, MessageNumberFormatter_getInstance()), to(MessageNumberFormatter_getInstance().FORMAT_STYLE_LENGTH, MessageNumberFormatter_getInstance()), to(MessageNumberFormatter_getInstance().FORMAT_STYLE_NUMBER, MessageNumberFormatter_getInstance()), to(MessageNumberFormatter_getInstance().FORMAT_STYLE_TIMESPAN, MessageNumberFormatter_getInstance()), to(MessageNumberFormatter_getInstance().FORMAT_STYLE_WEIGHT, MessageNumberFormatter_getInstance())]);
  }
  MessageFormatterDefault.prototype.format_8w3ukd$ = function (message, parameters, locale) {
    var tmp$;
    var buffer = StringBuilder_init(message.length * 2 | 0);
    var argumentPartStartIndex = 0;
    var argumentIndex = null;
    var argumentFormatType = null;
    var argumentFormatStyle = null;
    var inQuote = false;
    var inBraces = false;
    var index = 0;
    tmp$ = iterator(message);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      if (inQuote)
        if (c === 39) {
          if (message.charCodeAt(index - 1 | 0) === 39)
            buffer.append_s8itvh$(39);
          inQuote = false;
        } else
          buffer.append_s8itvh$(c);
      else if (inBraces) {
        if (c === 44 || c === 125) {
          var argumentPart = trim(message.substring(argumentPartStartIndex, index));
          argumentPartStartIndex = index + 1 | 0;
          if (argumentIndex == null)
            argumentIndex = argumentPart;
          else if (argumentFormatType == null)
            argumentFormatType = argumentPart;
          else if (argumentFormatStyle == null)
            argumentFormatStyle = argumentPart;
        }if (c === 125) {
          var argObject = null;
          var argIndex = toIntOrNull(toString(argumentIndex));
          if (argIndex !== null && parameters.size > argIndex)
            argObject = parameters.get_za3lpa$(argIndex);
          if (argObject == null)
            buffer.append_s8itvh$(123).append_gw00v9$(argumentIndex).append_s8itvh$(125);
          else
            buffer.append_gw00v9$(this.formatParameter_0(argObject, argumentFormatType, argumentFormatStyle, locale));
          inBraces = false;
          argumentIndex = null;
          argumentFormatType = null;
          argumentFormatStyle = null;
        }} else if (c === 39)
        inQuote = true;
      else if (c === 123) {
        inBraces = true;
        argumentPartStartIndex = index + 1 | 0;
      } else {
        buffer.append_s8itvh$(c);
      }
      index = index + 1 | 0;
    }
    return buffer.toString();
  };
  MessageFormatterDefault.prototype.formatParameter_0 = function (p, formatType, formatStyle, locale) {
    var tmp$, tmp$_0;
    if (formatType != null) {
      if ((tmp$_0 = (tmp$ = this.valueFormatters_0.get_11rb$(formatType)) != null ? tmp$.format_t5z14j$(p, formatType, formatStyle, locale) : null) != null) {
        return tmp$_0;
      }}if (Kotlin.isType(p, LocalizedString))
      return p.toString_c8nk8g$(locale);
    return p.toString();
  };
  MessageFormatterDefault.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MessageFormatterDefault',
    interfaces: [MessageFormatter]
  };
  var MessageFormatterDefault_instance = null;
  function MessageFormatterDefault_getInstance() {
    if (MessageFormatterDefault_instance === null) {
      new MessageFormatterDefault();
    }return MessageFormatterDefault_instance;
  }
  function MessageNumberFormatter() {
    MessageNumberFormatter_instance = this;
    this.FORMAT_STYLE_NUMBER = 'number';
    this.FORMAT_STYLE_LENGTH = 'length';
    this.FORMAT_STYLE_AREA = 'area';
    this.FORMAT_STYLE_WEIGHT = 'weight';
    this.FORMAT_STYLE_TIMESPAN = 'timespan';
  }
  MessageNumberFormatter.prototype.format_t5z14j$ = function (value, formatType, formatStyle, locale) {
    var tmp$;
    if (!Kotlin.isNumber(value)) {
      if (Kotlin.isType(value, LocalizedString))
        return value.toString_c8nk8g$(locale);
      return value.toString();
    }var precision = this.parsePrecisionFromFormatStyle_0(formatStyle);
    var tailingFractionZeros = this.parseTailingFractionZerosFromFormatStyle_0(formatStyle);
    switch (formatType) {
      case 'number':
        tmp$ = LocalizedStringNumber$Companion_getInstance().formatNumber_tk7xm6$(value, precision, tailingFractionZeros, locale);
        break;
      case 'length':
        tmp$ = LocalizedStringNumber$Companion_getInstance().getFormattedLength_4n3wzt$(numberToDouble(value), numberToDouble(value), precision, tailingFractionZeros).toString_c8nk8g$(locale);
        break;
      case 'area':
        tmp$ = LocalizedStringNumber$Companion_getInstance().getFormattedArea_4n3wzt$(numberToDouble(value), numberToDouble(value), precision, tailingFractionZeros).toString_c8nk8g$(locale);
        break;
      case 'weight':
        tmp$ = LocalizedStringNumber$Companion_getInstance().getFormattedWeight_4n3wzt$(numberToDouble(value), numberToDouble(value), precision, tailingFractionZeros).toString_c8nk8g$(locale);
        break;
      case 'timespan':
        tmp$ = LocalizedStringNumber$Companion_getInstance().getFormattedTimeSpan_14dthe$(numberToDouble(value)).toString_c8nk8g$(locale);
        break;
      default:tmp$ = value.toString();
        break;
    }
    return tmp$;
  };
  MessageNumberFormatter.prototype.parsePrecisionFromFormatStyle_0 = function (formatStyle) {
    var tmp$;
    if (formatStyle == null || !startsWith(formatStyle, '%'))
      return 2147483647;
    var idxStart = indexOf(formatStyle, '.');
    if (idxStart < 0 || (idxStart + 1 | 0) >= formatStyle.length)
      return 2147483647;
    idxStart = idxStart + 1 | 0;
    var idxEnd = idxStart;
    if (formatStyle.charCodeAt(idxEnd) === 45) {
      idxEnd = idxEnd + 1 | 0;
    }while (formatStyle.length > idxEnd && isDigit(formatStyle.charCodeAt(idxEnd))) {
      idxEnd = idxEnd + 1 | 0;
    }
    return (tmp$ = toIntOrNull(Kotlin.subSequence(formatStyle, idxStart, idxEnd).toString())) != null ? tmp$ : 2147483647;
  };
  MessageNumberFormatter.prototype.parseTailingFractionZerosFromFormatStyle_0 = function (formatStyle) {
    if (formatStyle == null || !startsWith(formatStyle, '%'))
      return false;
    return contains(formatStyle, '.0');
  };
  MessageNumberFormatter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MessageNumberFormatter',
    interfaces: [MessageValueFormatter]
  };
  var MessageNumberFormatter_instance = null;
  function MessageNumberFormatter_getInstance() {
    if (MessageNumberFormatter_instance === null) {
      new MessageNumberFormatter();
    }return MessageNumberFormatter_instance;
  }
  function MessageValueFormatter() {
  }
  MessageValueFormatter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MessageValueFormatter',
    interfaces: []
  };
  function MessagesProvider() {
  }
  MessagesProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MessagesProvider',
    interfaces: []
  };
  function MessagesProviderFactory() {
  }
  MessagesProviderFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MessagesProviderFactory',
    interfaces: []
  };
  function MessagesProviderViaList(locale, list) {
    this.locale_1s236w$_0 = locale;
    this.list_0 = list;
  }
  Object.defineProperty(MessagesProviderViaList.prototype, 'locale', {
    get: function () {
      return this.locale_1s236w$_0;
    }
  });
  Object.defineProperty(MessagesProviderViaList.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.list_0.size;
    }
  });
  MessagesProviderViaList.prototype.get_za3lpa$ = function (index) {
    return this.list_0.get_za3lpa$(index);
  };
  MessagesProviderViaList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessagesProviderViaList',
    interfaces: [MessagesProvider]
  };
  function MessagesProviderViaLoading() {
    this.data_dyto06$_piwwmh$_0 = lazy(MessagesProviderViaLoading$data$lambda(this));
  }
  Object.defineProperty(MessagesProviderViaLoading.prototype, 'data_dyto06$_0', {
    configurable: true,
    get: function () {
      return this.data_dyto06$_piwwmh$_0.value;
    }
  });
  Object.defineProperty(MessagesProviderViaLoading.prototype, 'locale', {
    configurable: true,
    get: function () {
      return this.data_dyto06$_0.first;
    }
  });
  MessagesProviderViaLoading.prototype.get_za3lpa$ = function (index) {
    return this.data_dyto06$_0.second.get_za3lpa$(index);
  };
  Object.defineProperty(MessagesProviderViaLoading.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.data_dyto06$_0.second.size;
    }
  });
  function MessagesProviderViaLoading$data$lambda(this$MessagesProviderViaLoading) {
    return function () {
      return this$MessagesProviderViaLoading.load();
    };
  }
  MessagesProviderViaLoading.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessagesProviderViaLoading',
    interfaces: [MessagesProvider]
  };
  function MessagesProviderViaLoadingText(expectedLocale) {
    if (expectedLocale === void 0)
      expectedLocale = null;
    MessagesProviderViaLoading.call(this);
    this.expectedLocale_npdo1h$_0 = expectedLocale;
  }
  MessagesProviderViaLoadingText.prototype.load = function () {
    var tmp$, tmp$_0, tmp$_1;
    var tempList = ArrayList_init();
    var current = StringBuilder_init_0();
    var isNull = true;
    tmp$ = lineSequence(this.loadText()).iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      var tmp$_2 = startsWith_0(line, '^');
      if (tmp$_2) {
        var tmp$_3;
        tmp$_2 = equals(trim(Kotlin.isCharSequence(tmp$_3 = line) ? tmp$_3 : throwCCE()).toString(), '^');
      }if (tmp$_2) {
        tempList.add_11rb$(isNull ? null : current.toString());
        current.setLength_za3lpa$(0);
        isNull = true;
        continue;
      }if (!isNull)
        current.append_pdl1vj$('\n');
      current.append_pdl1vj$(startsWith_0(line, '^') ? line.substring(1) : line);
      isNull = false;
    }
    tempList.add_11rb$(current.toString());
    tmp$_1 = (tmp$_0 = tempList.isEmpty() ? null : tempList.get_za3lpa$(0)) != null ? forLocaleTag(tmp$_0) : null;
    if (tmp$_1 == null) {
      throw IllegalArgumentException_init('Locale tag of loaded data is null');
    }var locale = tmp$_1;
    if (this.expectedLocale_npdo1h$_0 != null && !equals(locale, this.expectedLocale_npdo1h$_0)) {
      throw IllegalArgumentException_init('Language code of loaded data (' + toString(tempList.get_za3lpa$(0)) + ') does not match expected code (' + toString(this.expectedLocale_npdo1h$_0) + ') ');
    }return new Pair(locale, tempList.subList_vux9f0$(1, tempList.size));
  };
  MessagesProviderViaLoadingText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessagesProviderViaLoadingText',
    interfaces: [MessagesProviderViaLoading]
  };
  function MessagesProviderViaText(expectedLocale, text) {
    if (expectedLocale === void 0)
      expectedLocale = null;
    MessagesProviderViaLoadingText.call(this, expectedLocale);
    this.expectedLocale_0 = expectedLocale;
    this.text_0 = text;
  }
  MessagesProviderViaText.prototype.loadText = function () {
    return this.text_0;
  };
  MessagesProviderViaText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessagesProviderViaText',
    interfaces: [MessagesProviderViaLoadingText]
  };
  function AbstractLocalizedString() {
  }
  AbstractLocalizedString.prototype.toString = function () {
    return this.toString_c8nk8g$(null);
  };
  AbstractLocalizedString.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractLocalizedString',
    interfaces: [LocalizedString]
  };
  function EmptyLocalizedString() {
    EmptyLocalizedString_instance = this;
  }
  EmptyLocalizedString.prototype.toString = function () {
    return '';
  };
  EmptyLocalizedString.prototype.toString_c8nk8g$ = function (locale) {
    return '';
  };
  EmptyLocalizedString.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EmptyLocalizedString',
    interfaces: [LocalizedString]
  };
  var EmptyLocalizedString_instance = null;
  function EmptyLocalizedString_getInstance() {
    if (EmptyLocalizedString_instance === null) {
      new EmptyLocalizedString();
    }return EmptyLocalizedString_instance;
  }
  function LocalizedStringNumber(number, precision, tailingFractionZeros) {
    LocalizedStringNumber$Companion_getInstance();
    if (precision === void 0)
      precision = 2147483647;
    if (tailingFractionZeros === void 0)
      tailingFractionZeros = false;
    AbstractLocalizedString.call(this);
    this.number = number;
    this.precision = precision;
    this.tailingFractionZeros = tailingFractionZeros;
  }
  LocalizedStringNumber.prototype.toString = function () {
    return this.toString_c8nk8g$(null);
  };
  LocalizedStringNumber.prototype.toString_c8nk8g$ = function (locale) {
    return LocalizedStringNumber$Companion_getInstance().formatNumber_tk7xm6$(this.number, this.precision, this.tailingFractionZeros, locale != null ? locale : i18n4k.locale).toString();
  };
  function LocalizedStringNumber$Companion() {
    LocalizedStringNumber$Companion_instance = this;
    this.defaultNumberFormattingInfo_0 = new LocalizedStringNumber$NumberFormattingInfo(46, 44, 3, 0);
    this.numberFormattingInfoPerLocaleId = mutableMapOf([to('de', new LocalizedStringNumber$NumberFormattingInfo(44, 46, 3, 0))]);
  }
  LocalizedStringNumber$Companion.prototype.formatNumber_tk7xm6$ = function (number, precision, tailingFractionZeros, locale) {
    var tmp$;
    if (precision === 2147483647)
      tmp$ = this.doubleToString_0(numberToDouble(number));
    else
      tmp$ = this.roundToString_0(numberToDouble(number), precision);
    var b = tmp$;
    if (!tailingFractionZeros)
      this.removeTailingZeros_0(b);
    var f = this.getNumberFormattingInfo_c8nk8g$(locale);
    var fractionSignIndex = b.indexOf_61zpoe$('.');
    if (fractionSignIndex < 0 && (f.groupIntegerSize <= 0 || b.length < f.groupIntegerSize))
      return b.toString();
    var startsWithPlusOrMinus = b.charCodeAt(0) === 43 || b.charCodeAt(0) === 45;
    if (fractionSignIndex >= 0) {
      b.set_6t1mh3$(fractionSignIndex, unboxChar(f.fractionSign));
      if (f.groupFractionSize > 0) {
        var idx = fractionSignIndex + 1 + f.groupFractionSize | 0;
        while (idx < b.length) {
          b.insert_6t1mh3$(idx, unboxChar(f.groupingSign));
          idx = idx + (1 + f.groupFractionSize) | 0;
        }
      }} else
      fractionSignIndex = b.length;
    if (f.groupIntegerSize > 0) {
      var idx_0 = fractionSignIndex - f.groupIntegerSize | 0;
      while (startsWithPlusOrMinus ? idx_0 > 1 : idx_0 > 0) {
        b.insert_6t1mh3$(idx_0, unboxChar(f.groupingSign));
        idx_0 = idx_0 - f.groupIntegerSize | 0;
      }
    }return b.toString();
  };
  LocalizedStringNumber$Companion.prototype.getNumberFormattingInfo_c8nk8g$ = function (locale) {
    var f = locale == null ? null : this.numberFormattingInfoPerLocaleId.get_11rb$(locale.language);
    return f != null ? f : this.defaultNumberFormattingInfo_0;
  };
  LocalizedStringNumber$Companion.prototype.roundToString_0 = function (number, precision) {
    var negativ = number < 0.0;
    var modifiedNumber = Math_0.abs(number);
    var x = -precision;
    var f = Math_0.pow(10.0, x);
    if (precision !== 0)
      modifiedNumber /= f;
    var text;
    if (precision < 0) {
      var roundedValue = round(modifiedNumber) * f;
      if (roundedValue === 0.0)
        return new StringBuilder('0');
      text = new StringBuilder(roundedValue.toString());
      this.removeTailingZeros_0(text);
    } else if (modifiedNumber > Long$Companion$MAX_VALUE.toNumber()) {
      text = new StringBuilder(number.toString());
    } else {
      var longValue = roundToLong(modifiedNumber);
      if (equals(longValue, L0)) {
        text = new StringBuilder('0');
        if (precision > 0) {
          text.append_pdl1vj$('.');
          for (var i = 1; i <= precision; i++)
            text.append_pdl1vj$('0');
        }return text;
      }text = new StringBuilder(longValue.toString());
      if (precision > 0) {
        var signIndex = text.length - precision | 0;
        while (signIndex < 0) {
          text.insert_vqvrqt$(0, '0');
          signIndex = signIndex + 1 | 0;
        }
        text.insert_vqvrqt$(signIndex, signIndex === 0 ? '0.' : '.');
      }}
    if (negativ)
      text.insert_vqvrqt$(0, '-');
    this.normalizeNumber_0(text);
    return text;
  };
  LocalizedStringNumber$Companion.prototype.doubleToString_0 = function (number) {
    var text = new StringBuilder(number.toString());
    this.normalizeNumber_0(text);
    var fractionSignIndex = text.indexOf_61zpoe$('.');
    if (contains_0(text, 101, true)) {
      var a = text.indexOf_61zpoe$('e');
      var b = text.indexOf_61zpoe$('E');
      var exponentSignIndex = Math_0.max(a, b);
      var exponent = toInt(text.substring_za3lpa$(exponentSignIndex + 1 | 0));
      if (exponent < 0 && fractionSignIndex >= 0 && fractionSignIndex < exponentSignIndex)
        exponent = exponent - (exponentSignIndex - fractionSignIndex - 1) | 0;
      if (abs(exponent) >= 16)
        return text;
      if (exponent < 0)
        text = this.roundToString_0(number, -exponent | 0);
      else
        text = this.roundToString_0(number, 14 - exponent | 0);
    } else {
      if (fractionSignIndex < 0)
        return text;
      var numberLength = text.length;
      if (number < 0) {
        numberLength = numberLength - 1 | 0;
      }if (Math_0.abs(number) < 1) {
        numberLength = numberLength - 1 | 0;
      }if (numberLength > 16) {
        var b_0 = text.length - fractionSignIndex - 3 | 0;
        text = this.roundToString_0(number, Math_0.max(0, b_0));
      }}
    this.removeTailingZeros_0(text);
    return text;
  };
  LocalizedStringNumber$Companion.prototype.removeTailingZeros_0 = function (text) {
    var fractionSignIndex = text.indexOf_61zpoe$('.');
    if (fractionSignIndex < 0)
      return;
    for (var i = text.length - 1 | 0; i >= fractionSignIndex; i--) {
      var digit = text.charCodeAt(i);
      if (digit === 46) {
        text.setLength_za3lpa$(i);
        break;
      }if (digit !== 48) {
        text.setLength_za3lpa$(i + 1 | 0);
        break;
      }}
  };
  LocalizedStringNumber$Companion.prototype.normalizeNumber_0 = function (text) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = get_indices(text);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var i = tmp$_0; i <= tmp$_1; i += tmp$_2) {
      if (!isDigit(text.charCodeAt(i))) {
        var $receiver = text.charCodeAt(i);
        text.set_6t1mh3$(i, toChar(String.fromCharCode($receiver).toLowerCase().charCodeAt(0)));
      }}
    while (true) {
      var plusSign = text.indexOf_61zpoe$('+');
      if (plusSign < 0)
        break;
      text.deleteAt_za3lpa$(plusSign);
    }
  };
  LocalizedStringNumber$Companion.prototype.getFormattedLength_14dthe$ = function (meters) {
    return this.getFormattedLength_4n3wzt$(meters, meters, 2147483647, true);
  };
  LocalizedStringNumber$Companion.prototype.getFormattedLength_4n3wzt$ = function (meters, unitValue, precision, tailingFractionZeros) {
    var tmp$;
    var meters_0 = meters;
    var unitValue_0 = unitValue;
    if ((tmp$ = this.getSpecialDoubleValuesString_0(meters_0)) != null) {
      return new SimpleLocalizedString(tmp$);
    }var x = unitValue_0;
    unitValue_0 = Math_0.abs(x);
    var unit = 'm';
    if (unitValue_0 < 1) {
      meters_0 *= 1000.0;
      unit = 'mm';
    } else if (unitValue_0 >= 1000) {
      meters_0 *= 0.001;
      unit = 'km';
    }return new ParameterisedLocalizedString('{0} {1}', listOf_0([new LocalizedStringNumber(meters_0, precision, tailingFractionZeros), unit]));
  };
  LocalizedStringNumber$Companion.prototype.getFormattedWeight_14dthe$ = function (grams) {
    return this.getFormattedWeight_4n3wzt$(grams, grams, 2147483647, true);
  };
  LocalizedStringNumber$Companion.prototype.getFormattedWeight_4n3wzt$ = function (grams, unitValue, precision, tailingFractionZeros) {
    var tmp$;
    var grams_0 = grams;
    var unitValue_0 = unitValue;
    if ((tmp$ = this.getSpecialDoubleValuesString_0(grams_0)) != null) {
      return new SimpleLocalizedString(tmp$);
    }var x = unitValue_0;
    unitValue_0 = Math_0.abs(x);
    var unit = 'g';
    if (unitValue_0 < 1) {
      grams_0 *= 1000.0;
      unit = 'mg';
    } else if (unitValue_0 >= 1000000) {
      grams_0 *= 1.0E-6;
      unit = 't';
    } else if (unitValue_0 >= 1000) {
      grams_0 *= 0.001;
      unit = 'kg';
    }return new ParameterisedLocalizedString('{0} {1}', listOf_0([new LocalizedStringNumber(grams_0, precision, tailingFractionZeros), unit]));
  };
  LocalizedStringNumber$Companion.prototype.getFormattedArea_14dthe$ = function (squareMeters) {
    return this.getFormattedArea_4n3wzt$(squareMeters, squareMeters, 2147483647, true);
  };
  LocalizedStringNumber$Companion.prototype.getFormattedArea_4n3wzt$ = function (squareMeters, unitValue, precision, tailingFractionZeros) {
    var tmp$;
    var squareMeters_0 = squareMeters;
    var unitValue_0 = unitValue;
    if ((tmp$ = this.getSpecialDoubleValuesString_0(squareMeters_0)) != null) {
      return new SimpleLocalizedString(tmp$);
    }var x = unitValue_0;
    unitValue_0 = Math_0.abs(x);
    var unit = 'm\xB2';
    if (unitValue_0 < 0.001) {
      squareMeters_0 *= 1000000.0;
      unit = 'mm\xB2';
    }if (unitValue_0 >= 100000) {
      squareMeters_0 /= 1000000.0;
      unit = 'km\xB2';
    }return new ParameterisedLocalizedString('{0} {1}', listOf_0([new LocalizedStringNumber(squareMeters_0, precision, tailingFractionZeros), unit]));
  };
  LocalizedStringNumber$Companion.prototype.getFormattedTimeSpan_14dthe$ = function (durationInSeconds) {
    var tmp$;
    var durationInSeconds_0 = durationInSeconds;
    if ((tmp$ = this.getSpecialDoubleValuesString_0(durationInSeconds_0)) != null) {
      return new SimpleLocalizedString(tmp$);
    }var sign = '';
    if (durationInSeconds_0 < 0.0) {
      sign = '-';
      durationInSeconds_0 = -durationInSeconds_0;
    }if (durationInSeconds_0 > 2147483647)
      return new SimpleLocalizedString(toBoxedChar(33));
    if (durationInSeconds_0 < 1.0) {
      return new SimpleLocalizedString(sign + durationInSeconds_0 + ' s');
    }if (durationInSeconds_0 < 60.0) {
      var seconds = new LocalizedStringNumber(durationInSeconds_0, 1);
      return new ParameterisedLocalizedString(sign + '{0} s', listOf(seconds));
    }var secondsTotal = numberToInt(round(durationInSeconds_0));
    var seconds_0 = secondsTotal % 60;
    var minutes = (secondsTotal / 60 | 0) % 60;
    var hours = ((secondsTotal / 60 | 0) / 60 | 0) % 24;
    var days = ((secondsTotal / 60 | 0) / 60 | 0) / 24 | 0;
    var sb = StringBuilder_init_0();
    sb.append_pdl1vj$(sign);
    if (days > 0)
      sb.append_s8jyv4$(days).append_pdl1vj$('d ');
    if (hours > 0) {
      sb.append_s8jyv4$(hours);
      if (minutes > 0 || seconds_0 > 0) {
        sb.append_pdl1vj$(':');
        if (minutes < 10)
          sb.append_pdl1vj$('0');
        sb.append_s8jyv4$(minutes);
      }if (seconds_0 > 0) {
        sb.append_pdl1vj$(':');
        if (seconds_0 < 10)
          sb.append_pdl1vj$('0');
        sb.append_s8jyv4$(seconds_0);
      }sb.append_pdl1vj$(' h');
    } else if (minutes > 0) {
      sb.append_s8jyv4$(minutes);
      if (seconds_0 > 0) {
        sb.append_pdl1vj$(':');
        if (seconds_0 < 10)
          sb.append_pdl1vj$('0');
        sb.append_s8jyv4$(seconds_0);
      }sb.append_pdl1vj$(' min');
    } else if (seconds_0 > 0) {
      sb.append_s8jyv4$(seconds_0).append_pdl1vj$(' s');
    }return new SimpleLocalizedString(sb.toString());
  };
  LocalizedStringNumber$Companion.prototype.getSpecialDoubleValuesString_0 = function (v) {
    if (isInfinite(v)) {
      return v > 0 ? '\u221E' : '-\u221E';
    }return isNaN_0(v) ? 'NaN' : null;
  };
  LocalizedStringNumber$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LocalizedStringNumber$Companion_instance = null;
  function LocalizedStringNumber$Companion_getInstance() {
    if (LocalizedStringNumber$Companion_instance === null) {
      new LocalizedStringNumber$Companion();
    }return LocalizedStringNumber$Companion_instance;
  }
  function LocalizedStringNumber$NumberFormattingInfo(fractionSign, groupingSign, groupIntegerSize, groupFractionSize) {
    this.fractionSign = toBoxedChar(fractionSign);
    this.groupingSign = toBoxedChar(groupingSign);
    this.groupIntegerSize = groupIntegerSize;
    this.groupFractionSize = groupFractionSize;
  }
  LocalizedStringNumber$NumberFormattingInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NumberFormattingInfo',
    interfaces: []
  };
  LocalizedStringNumber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalizedStringNumber',
    interfaces: [AbstractLocalizedString]
  };
  LocalizedStringNumber.prototype.component1 = function () {
    return this.number;
  };
  LocalizedStringNumber.prototype.component2 = function () {
    return this.precision;
  };
  LocalizedStringNumber.prototype.component3 = function () {
    return this.tailingFractionZeros;
  };
  LocalizedStringNumber.prototype.copy_gd1tgv$ = function (number, precision, tailingFractionZeros) {
    return new LocalizedStringNumber(number === void 0 ? this.number : number, precision === void 0 ? this.precision : precision, tailingFractionZeros === void 0 ? this.tailingFractionZeros : tailingFractionZeros);
  };
  LocalizedStringNumber.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.precision) | 0;
    result = result * 31 + Kotlin.hashCode(this.tailingFractionZeros) | 0;
    return result;
  };
  LocalizedStringNumber.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.number, other.number) && Kotlin.equals(this.precision, other.precision) && Kotlin.equals(this.tailingFractionZeros, other.tailingFractionZeros)))));
  };
  function isDigit($receiver) {
    var tmp$;
    switch ($receiver) {
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        tmp$ = true;
        break;
      default:tmp$ = false;
        break;
    }
    return tmp$;
  }
  function LocalizedString() {
  }
  LocalizedString.prototype.invoke = function () {
    return this.toString_c8nk8g$(null);
  };
  LocalizedString.prototype.invoke_c8nk8g$ = function (locale) {
    return this.toString_c8nk8g$(locale);
  };
  LocalizedString.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LocalizedString',
    interfaces: []
  };
  function LocalizedStringFactory1() {
  }
  LocalizedStringFactory1.prototype.createString_vzvl31$ = function (p0, locale, callback$default) {
    if (locale === void 0)
      locale = null;
    return callback$default ? callback$default(p0, locale) : this.createString_vzvl31$$default(p0, locale);
  };
  LocalizedStringFactory1.prototype.invoke_vzvl31$$default = function (p0, locale) {
    return this.createString_vzvl31$(p0, locale);
  };
  LocalizedStringFactory1.prototype.invoke_vzvl31$ = function (p0, locale, callback$default) {
    if (locale === void 0)
      locale = null;
    return callback$default ? callback$default(p0, locale) : this.invoke_vzvl31$$default(p0, locale);
  };
  LocalizedStringFactory1.prototype.get_za3rmp$ = function (p0) {
    return this.createLocalizedString_za3rmp$(p0);
  };
  LocalizedStringFactory1.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LocalizedStringFactory1',
    interfaces: []
  };
  function LocalizedStringFactory2() {
  }
  LocalizedStringFactory2.prototype.createString_kwt2uo$ = function (p0, p1, locale, callback$default) {
    if (locale === void 0)
      locale = null;
    return callback$default ? callback$default(p0, p1, locale) : this.createString_kwt2uo$$default(p0, p1, locale);
  };
  LocalizedStringFactory2.prototype.invoke_kwt2uo$$default = function (p0, p1, locale) {
    return this.createString_kwt2uo$(p0, p1, locale);
  };
  LocalizedStringFactory2.prototype.invoke_kwt2uo$ = function (p0, p1, locale, callback$default) {
    if (locale === void 0)
      locale = null;
    return callback$default ? callback$default(p0, p1, locale) : this.invoke_kwt2uo$$default(p0, p1, locale);
  };
  LocalizedStringFactory2.prototype.get_wn2jw4$ = function (p0, p1) {
    return this.createLocalizedString_wn2jw4$(p0, p1);
  };
  LocalizedStringFactory2.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LocalizedStringFactory2',
    interfaces: []
  };
  function LocalizedStringFactory3() {
  }
  LocalizedStringFactory3.prototype.createString_lfxg0z$ = function (p0, p1, p2, locale, callback$default) {
    if (locale === void 0)
      locale = null;
    return callback$default ? callback$default(p0, p1, p2, locale) : this.createString_lfxg0z$$default(p0, p1, p2, locale);
  };
  LocalizedStringFactory3.prototype.invoke_lfxg0z$$default = function (p0, p1, p2, locale) {
    return this.createString_lfxg0z$(p0, p1, p2, locale);
  };
  LocalizedStringFactory3.prototype.invoke_lfxg0z$ = function (p0, p1, p2, locale, callback$default) {
    if (locale === void 0)
      locale = null;
    return callback$default ? callback$default(p0, p1, p2, locale) : this.invoke_lfxg0z$$default(p0, p1, p2, locale);
  };
  LocalizedStringFactory3.prototype.get_2br51b$ = function (p0, p1, p2) {
    return this.createLocalizedString_2br51b$(p0, p1, p2);
  };
  LocalizedStringFactory3.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LocalizedStringFactory3',
    interfaces: []
  };
  function LocalizedStringFactory4() {
  }
  LocalizedStringFactory4.prototype.createString_we6r9s$ = function (p0, p1, p2, p3, locale, callback$default) {
    if (locale === void 0)
      locale = null;
    return callback$default ? callback$default(p0, p1, p2, p3, locale) : this.createString_we6r9s$$default(p0, p1, p2, p3, locale);
  };
  LocalizedStringFactory4.prototype.invoke_we6r9s$$default = function (p0, p1, p2, p3, locale) {
    return this.createString_we6r9s$(p0, p1, p2, p3, locale);
  };
  LocalizedStringFactory4.prototype.invoke_we6r9s$ = function (p0, p1, p2, p3, locale, callback$default) {
    if (locale === void 0)
      locale = null;
    return callback$default ? callback$default(p0, p1, p2, p3, locale) : this.invoke_we6r9s$$default(p0, p1, p2, p3, locale);
  };
  LocalizedStringFactory4.prototype.get_vl6e50$ = function (p0, p1, p2, p3) {
    return this.createLocalizedString_vl6e50$(p0, p1, p2, p3);
  };
  LocalizedStringFactory4.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LocalizedStringFactory4',
    interfaces: []
  };
  function LocalizedStringFactory5() {
  }
  LocalizedStringFactory5.prototype.createString_5wukoz$ = function (p0, p1, p2, p3, p4, locale, callback$default) {
    if (locale === void 0)
      locale = null;
    return callback$default ? callback$default(p0, p1, p2, p3, p4, locale) : this.createString_5wukoz$$default(p0, p1, p2, p3, p4, locale);
  };
  LocalizedStringFactory5.prototype.invoke_5wukoz$$default = function (p0, p1, p2, p3, p4, locale) {
    return this.createString_5wukoz$(p0, p1, p2, p3, p4, locale);
  };
  LocalizedStringFactory5.prototype.invoke_5wukoz$ = function (p0, p1, p2, p3, p4, locale, callback$default) {
    if (locale === void 0)
      locale = null;
    return callback$default ? callback$default(p0, p1, p2, p3, p4, locale) : this.invoke_5wukoz$$default(p0, p1, p2, p3, p4, locale);
  };
  LocalizedStringFactory5.prototype.get_rhf5lr$ = function (p0, p1, p2, p3, p4) {
    return this.createLocalizedString_rhf5lr$(p0, p1, p2, p3, p4);
  };
  LocalizedStringFactory5.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LocalizedStringFactory5',
    interfaces: []
  };
  function ParameterisedLocalizedString(message, parameter) {
    AbstractLocalizedString.call(this);
    this.message_0 = message;
    this.parameter_0 = parameter;
  }
  ParameterisedLocalizedString.prototype.toString_c8nk8g$ = function (locale) {
    var tmp$, tmp$_0, tmp$_1;
    var l = locale != null ? locale : i18n4k.locale;
    return i18n4k.messageFormatter.format_8w3ukd$((tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = this.message_0, LocalizedString) ? tmp$ : null) != null ? tmp$_0.toString_c8nk8g$(l) : null) != null ? tmp$_1 : this.message_0.toString(), this.parameter_0, l);
  };
  ParameterisedLocalizedString.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParameterisedLocalizedString',
    interfaces: [AbstractLocalizedString]
  };
  function SimpleLocalizedString(value) {
    this.value_0 = value;
  }
  SimpleLocalizedString.prototype.toString = function () {
    return this.value_0.toString();
  };
  SimpleLocalizedString.prototype.toString_c8nk8g$ = function (locale) {
    return this.value_0.toString();
  };
  SimpleLocalizedString.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleLocalizedString',
    interfaces: [LocalizedString]
  };
  function Locale(language, country, variant) {
    this.language = language;
    this.country = country;
    this.variant = variant;
  }
  Locale.prototype.getLanguage = function () {
    return this.language;
  };
  Locale.prototype.getCountry = function () {
    return this.country;
  };
  Locale.prototype.getVariant = function () {
    return this.variant;
  };
  Locale.prototype.toString = function () {
    return toTag(this);
  };
  Locale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Locale',
    interfaces: []
  };
  function Locale_init(language, $this) {
    $this = $this || Object.create(Locale.prototype);
    Locale.call($this, language, '', '');
    return $this;
  }
  function Locale_init_0(language, country, $this) {
    $this = $this || Object.create(Locale.prototype);
    Locale.call($this, language, country, '');
    return $this;
  }
  Locale.prototype.component1 = function () {
    return this.language;
  };
  Locale.prototype.component2 = function () {
    return this.country;
  };
  Locale.prototype.component3 = function () {
    return this.variant;
  };
  Locale.prototype.copy_6hosri$ = function (language, country, variant) {
    return new Locale(language === void 0 ? this.language : language, country === void 0 ? this.country : country, variant === void 0 ? this.variant : variant);
  };
  Locale.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.language) | 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    result = result * 31 + Kotlin.hashCode(this.variant) | 0;
    return result;
  };
  Locale.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.language, other.language) && Kotlin.equals(this.country, other.country) && Kotlin.equals(this.variant, other.variant)))));
  };
  var systemLocale;
  function MessagesProviderFactoryViaFetch(expectedLocale, pathToResource, onLoaded, onFailed) {
    if (expectedLocale === void 0)
      expectedLocale = null;
    if (onLoaded === void 0)
      onLoaded = null;
    if (onFailed === void 0)
      onFailed = null;
    this.expectedLocale_0 = expectedLocale;
    this.pathToResource_0 = pathToResource;
    this.onLoaded_0 = onLoaded;
    this.onFailed_0 = onFailed;
  }
  function MessagesProviderFactoryViaFetch$loadMessagesProvider$lambda(promise) {
    return promise.text();
  }
  function MessagesProviderFactoryViaFetch$loadMessagesProvider$lambda_0(closure$consumer, this$MessagesProviderFactoryViaFetch) {
    return function (text) {
      var tmp$, tmp$_0;
      try {
        closure$consumer(new MessagesProviderViaText(this$MessagesProviderFactoryViaFetch.expectedLocale_0, text));
        return (tmp$ = this$MessagesProviderFactoryViaFetch.onLoaded_0) != null ? tmp$() : null;
      } catch (throwable) {
        if (Kotlin.isType(throwable, Throwable)) {
          return (tmp$_0 = this$MessagesProviderFactoryViaFetch.onFailed_0) != null ? tmp$_0(throwable) : null;
        } else
          throw throwable;
      }
    };
  }
  function MessagesProviderFactoryViaFetch$loadMessagesProvider$lambda_1(this$MessagesProviderFactoryViaFetch) {
    return function (throwable) {
      var tmp$;
      return (tmp$ = this$MessagesProviderFactoryViaFetch.onFailed_0) != null ? tmp$(throwable) : null;
    };
  }
  MessagesProviderFactoryViaFetch.prototype.loadMessagesProvider_fxften$ = function (consumer) {
    var headers = new Headers();
    headers.append('encoding', "text/plain;charset='charset=utf-8'");
    var tmp$ = window;
    var tmp$_0 = this.pathToResource_0;
    var method;
    var body;
    var referrer;
    var referrerPolicy;
    var mode;
    var credentials;
    var cache;
    var redirect;
    var integrity;
    var keepalive;
    var window_0;
    method = undefined;
    body = undefined;
    referrer = undefined;
    referrerPolicy = undefined;
    mode = undefined;
    credentials = undefined;
    cache = undefined;
    redirect = undefined;
    integrity = undefined;
    keepalive = undefined;
    window_0 = undefined;
    var o = {};
    o['method'] = method;
    o['headers'] = headers;
    o['body'] = body;
    o['referrer'] = referrer;
    o['referrerPolicy'] = referrerPolicy;
    o['mode'] = mode;
    o['credentials'] = credentials;
    o['cache'] = cache;
    o['redirect'] = redirect;
    o['integrity'] = integrity;
    o['keepalive'] = keepalive;
    o['window'] = window_0;
    tmp$.fetch(tmp$_0, o).then(MessagesProviderFactoryViaFetch$loadMessagesProvider$lambda).then(MessagesProviderFactoryViaFetch$loadMessagesProvider$lambda_0(consumer, this)).catch(MessagesProviderFactoryViaFetch$loadMessagesProvider$lambda_1(this));
  };
  MessagesProviderFactoryViaFetch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessagesProviderFactoryViaFetch',
    interfaces: [MessagesProviderFactory]
  };
  var package$de = _.de || (_.de = {});
  var package$comahe = package$de.comahe || (package$de.comahe = {});
  var package$i18n4k = package$comahe.i18n4k || (package$comahe.i18n4k = {});
  Object.defineProperty(package$i18n4k, 'i18n4k', {
    get: function () {
      return i18n4k;
    },
    set: function (value) {
      i18n4k = value;
    }
  });
  package$i18n4k.get_language_c8nk8w$ = get_language;
  package$i18n4k.get_country_c8nk8w$ = get_country;
  package$i18n4k.get_variant_c8nk8w$ = get_variant;
  package$i18n4k.forLocaleTag_61zpoe$ = forLocaleTag;
  package$i18n4k.toTag_c8nk8w$ = toTag;
  package$i18n4k.getDisplayNameInLocale_c8nk8w$ = getDisplayNameInLocale;
  var package$config = package$i18n4k.config || (package$i18n4k.config = {});
  package$config.I18n4kConfig = I18n4kConfig;
  package$config.I18n4kConfigDefault = I18n4kConfigDefault;
  package$config.I18n4kConfigDelegate = I18n4kConfigDelegate;
  package$config.I18n4kConfigImmutable_init = I18n4kConfigImmutable_init;
  package$config.I18n4kConfigImmutable = I18n4kConfigImmutable;
  $$importsForInline$$['kotlinx-atomicfu'] = $module$kotlinx_atomicfu;
  MessageBundle.LocalizedString0 = MessageBundle$LocalizedString0;
  MessageBundle.LocalizedStringN = MessageBundle$LocalizedStringN;
  MessageBundle.LocalizedStringFactory2Bundled = MessageBundle$LocalizedStringFactory2Bundled;
  MessageBundle.LocalizedStringFactory3Bundled = MessageBundle$LocalizedStringFactory3Bundled;
  MessageBundle.LocalizedStringFactory4Bundled = MessageBundle$LocalizedStringFactory4Bundled;
  MessageBundle.LocalizedStringFactory5Bundled = MessageBundle$LocalizedStringFactory5Bundled;
  var package$messages = package$i18n4k.messages || (package$i18n4k.messages = {});
  package$messages.MessageBundle = MessageBundle;
  var package$formatter = package$messages.formatter || (package$messages.formatter = {});
  package$formatter.MessageFormatter = MessageFormatter;
  Object.defineProperty(package$formatter, 'MessageFormatterDefault', {
    get: MessageFormatterDefault_getInstance
  });
  Object.defineProperty(package$formatter, 'MessageNumberFormatter', {
    get: MessageNumberFormatter_getInstance
  });
  package$formatter.MessageValueFormatter = MessageValueFormatter;
  var package$providers = package$messages.providers || (package$messages.providers = {});
  package$providers.MessagesProvider = MessagesProvider;
  package$providers.MessagesProviderFactory = MessagesProviderFactory;
  package$providers.MessagesProviderViaList = MessagesProviderViaList;
  package$providers.MessagesProviderViaLoading = MessagesProviderViaLoading;
  package$providers.MessagesProviderViaLoadingText = MessagesProviderViaLoadingText;
  package$providers.MessagesProviderViaText = MessagesProviderViaText;
  var package$strings = package$i18n4k.strings || (package$i18n4k.strings = {});
  package$strings.AbstractLocalizedString = AbstractLocalizedString;
  Object.defineProperty(package$strings, 'EmptyLocalizedString', {
    get: EmptyLocalizedString_getInstance
  });
  Object.defineProperty(LocalizedStringNumber, 'Companion', {
    get: LocalizedStringNumber$Companion_getInstance
  });
  LocalizedStringNumber.NumberFormattingInfo = LocalizedStringNumber$NumberFormattingInfo;
  package$strings.LocalizedStringNumber = LocalizedStringNumber;
  package$strings.isDigit_nupfqh$ = isDigit;
  package$strings.LocalizedString = LocalizedString;
  package$strings.LocalizedStringFactory1 = LocalizedStringFactory1;
  package$strings.LocalizedStringFactory2 = LocalizedStringFactory2;
  package$strings.LocalizedStringFactory3 = LocalizedStringFactory3;
  package$strings.LocalizedStringFactory4 = LocalizedStringFactory4;
  package$strings.LocalizedStringFactory5 = LocalizedStringFactory5;
  package$strings.ParameterisedLocalizedString = ParameterisedLocalizedString;
  package$strings.SimpleLocalizedString = SimpleLocalizedString;
  package$i18n4k.Locale_init_61zpoe$ = Locale_init;
  package$i18n4k.Locale_init_puj7f4$ = Locale_init_0;
  package$i18n4k.Locale = Locale;
  Object.defineProperty(package$i18n4k, 'systemLocale', {
    get: function () {
      return systemLocale;
    }
  });
  var package$provider = package$messages.provider || (package$messages.provider = {});
  package$provider.MessagesProviderFactoryViaFetch = MessagesProviderFactoryViaFetch;
  AbstractLocalizedString.prototype.invoke = LocalizedString.prototype.invoke;
  AbstractLocalizedString.prototype.invoke_c8nk8g$ = LocalizedString.prototype.invoke_c8nk8g$;
  MessageBundle$LocalizedStringFactory1Bundled.prototype.invoke_vzvl31$$default = LocalizedStringFactory1.prototype.invoke_vzvl31$$default;
  MessageBundle$LocalizedStringFactory1Bundled.prototype.get_za3rmp$ = LocalizedStringFactory1.prototype.get_za3rmp$;
  MessageBundle$LocalizedStringFactory1Bundled.prototype.createString_vzvl31$ = LocalizedStringFactory1.prototype.createString_vzvl31$;
  MessageBundle$LocalizedStringFactory1Bundled.prototype.invoke_vzvl31$ = LocalizedStringFactory1.prototype.invoke_vzvl31$;
  MessageBundle$LocalizedStringFactory2Bundled.prototype.invoke_kwt2uo$$default = LocalizedStringFactory2.prototype.invoke_kwt2uo$$default;
  MessageBundle$LocalizedStringFactory2Bundled.prototype.get_wn2jw4$ = LocalizedStringFactory2.prototype.get_wn2jw4$;
  MessageBundle$LocalizedStringFactory2Bundled.prototype.createString_kwt2uo$ = LocalizedStringFactory2.prototype.createString_kwt2uo$;
  MessageBundle$LocalizedStringFactory2Bundled.prototype.invoke_kwt2uo$ = LocalizedStringFactory2.prototype.invoke_kwt2uo$;
  MessageBundle$LocalizedStringFactory3Bundled.prototype.invoke_lfxg0z$$default = LocalizedStringFactory3.prototype.invoke_lfxg0z$$default;
  MessageBundle$LocalizedStringFactory3Bundled.prototype.get_2br51b$ = LocalizedStringFactory3.prototype.get_2br51b$;
  MessageBundle$LocalizedStringFactory3Bundled.prototype.createString_lfxg0z$ = LocalizedStringFactory3.prototype.createString_lfxg0z$;
  MessageBundle$LocalizedStringFactory3Bundled.prototype.invoke_lfxg0z$ = LocalizedStringFactory3.prototype.invoke_lfxg0z$;
  MessageBundle$LocalizedStringFactory4Bundled.prototype.invoke_we6r9s$$default = LocalizedStringFactory4.prototype.invoke_we6r9s$$default;
  MessageBundle$LocalizedStringFactory4Bundled.prototype.get_vl6e50$ = LocalizedStringFactory4.prototype.get_vl6e50$;
  MessageBundle$LocalizedStringFactory4Bundled.prototype.createString_we6r9s$ = LocalizedStringFactory4.prototype.createString_we6r9s$;
  MessageBundle$LocalizedStringFactory4Bundled.prototype.invoke_we6r9s$ = LocalizedStringFactory4.prototype.invoke_we6r9s$;
  MessageBundle$LocalizedStringFactory5Bundled.prototype.invoke_5wukoz$$default = LocalizedStringFactory5.prototype.invoke_5wukoz$$default;
  MessageBundle$LocalizedStringFactory5Bundled.prototype.get_rhf5lr$ = LocalizedStringFactory5.prototype.get_rhf5lr$;
  MessageBundle$LocalizedStringFactory5Bundled.prototype.createString_5wukoz$ = LocalizedStringFactory5.prototype.createString_5wukoz$;
  MessageBundle$LocalizedStringFactory5Bundled.prototype.invoke_5wukoz$ = LocalizedStringFactory5.prototype.invoke_5wukoz$;
  MessageFormatterDefault.prototype.getMaxParameterIndex_kqnu5d$ = MessageFormatter.prototype.getMaxParameterIndex_kqnu5d$;
  EmptyLocalizedString.prototype.invoke = LocalizedString.prototype.invoke;
  EmptyLocalizedString.prototype.invoke_c8nk8g$ = LocalizedString.prototype.invoke_c8nk8g$;
  SimpleLocalizedString.prototype.invoke = LocalizedString.prototype.invoke;
  SimpleLocalizedString.prototype.invoke_c8nk8g$ = LocalizedString.prototype.invoke_c8nk8g$;
  i18n4k = new I18n4kConfigDefault();
  localeTags = arrayListOf(['ar', 'ar_AE', 'ar_BH', 'ar_DZ', 'ar_EG', 'ar_IQ', 'ar_JO', 'ar_KW', 'ar_LB', 'ar_LY', 'ar_MA', 'ar_OM', 'ar_QA', 'ar_SA', 'ar_SD', 'ar_SY', 'ar_TN', 'ar_YE', 'be', 'be_BY', 'bg', 'bg_BG', 'ca', 'ca_ES', 'cs', 'cs_CZ', 'da', 'da_DK', 'de', 'de_AT', 'de_CH', 'de_DE', 'de_GR', 'de_LU', 'el', 'el_CY', 'el_GR', 'en', 'en_AU', 'en_CA', 'en_GB', 'en_IE', 'en_IN', 'en_MT', 'en_NZ', 'en_PH', 'en_SG', 'en_US', 'en_ZA', 'es', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_CU', 'es_DO', 'es_EC', 'es_ES', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PE', 'es_PR', 'es_PY', 'es_SV', 'es_US', 'es_UY', 'es_VE', 'et', 'et_EE', 'fi', 'fi_FI', 'fr', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_FR', 'fr_LU', 'ga', 'ga_IE', 'hi', 'hi_IN', 'hr', 'hr_HR', 'hu', 'hu_HU', 'in', 'in_ID', 'is', 'is_IS', 'it', 'it_CH', 'it_IT', 'iw', 'iw_IL', 'ja', 'ja_JP', 'ko', 'ko_KR', 'lt', 'lt_LT', 'lv', 'lv_LV', 'mk', 'mk_MK', 'ms', 'ms_MY', 'mt', 'mt_MT', 'nl', 'nl_BE', 'nl_NL', 'no', 'no_NO', 'no_NO_NY', 'pl', 'pl_PL', 'pt', 'pt_BR', 'pt_PT', 'ro', 'ro_RO', 'ru', 'ru_RU', 'sk', 'sk_SK', 'sl', 'sl_SI', 'sq', 'sq_AL', 'sr', 'sr_BA', 'sr_BA_#Latn', 'sr_CS', 'sr_ME', 'sr_ME_#Latn', 'sr_RS', 'sr_RS_#Latn', 'sr__#Latn', 'sv', 'sv_SE', 'th', 'th_TH', 'tr', 'tr_TR', 'uk', 'uk_UA', 'vi', 'vi_VN', 'zh', 'zh_CN', 'zh_HK', 'zh_SG', 'zh_TW']);
  localeDisplayName = arrayListOf(['\u0627\u0644\u0639\u0631\u0628\u064A\u0629', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0628\u062D\u0631\u064A\u0646)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u062C\u0632\u0627\u0626\u0631)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0645\u0635\u0631)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0639\u0631\u0627\u0642)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0623\u0631\u062F\u0646)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0643\u0648\u064A\u062A)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0644\u0628\u0646\u0627\u0646)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0644\u064A\u0628\u064A\u0627)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0645\u063A\u0631\u0628)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0633\u0644\u0637\u0646\u0629 \u0639\u0645\u0627\u0646)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0642\u0637\u0631)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0633\u0648\u062F\u0627\u0646)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0633\u0648\u0631\u064A\u0627)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u062A\u0648\u0646\u0633)', '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u064A\u0645\u0646)', '\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0456', '\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0456 (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)', '\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438', '\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)', 'catal\xE0', 'catal\xE0 (Espanya)', '\u010De\u0161tina', '\u010De\u0161tina (\u010Cesk\xE1 republika)', 'Dansk', 'Dansk (Danmark)', 'Deutsch', 'Deutsch (\xD6sterreich)', 'Deutsch (Schweiz)', 'Deutsch (Deutschland)', 'Deutsch (Griechenland)', 'Deutsch (Luxemburg)', '\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC', '\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)', '\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)', 'English', 'English (Australia)', 'English (Canada)', 'English (United Kingdom)', 'English (Ireland)', 'English (India)', 'English (Malta)', 'English (New Zealand)', 'English (Philippines)', 'English (Singapore)', 'English (United States)', 'English (South Africa)', 'espa\xF1ol', 'espa\xF1ol (Argentina)', 'espa\xF1ol (Bolivia)', 'espa\xF1ol (Chile)', 'espa\xF1ol (Colombia)', 'espa\xF1ol (Costa Rica)', 'espa\xF1ol (Cuba)', 'espa\xF1ol (Rep\xFAblica Dominicana)', 'espa\xF1ol (Ecuador)', 'espa\xF1ol (Espa\xF1a)', 'espa\xF1ol (Guatemala)', 'espa\xF1ol (Honduras)', 'espa\xF1ol (M\xE9xico)', 'espa\xF1ol (Nicaragua)', 'espa\xF1ol (Panam\xE1)', 'espa\xF1ol (Per\xFA)', 'espa\xF1ol (Puerto Rico)', 'espa\xF1ol (Paraguay)', 'espa\xF1ol (El Salvador)', 'espa\xF1ol (Estados Unidos)', 'espa\xF1ol (Uruguay)', 'espa\xF1ol (Venezuela)', 'Eesti', 'Eesti (Eesti)', 'suomi', 'suomi (Suomi)', 'fran\xE7ais', 'fran\xE7ais (Belgique)', 'fran\xE7ais (Canada)', 'fran\xE7ais (Suisse)', 'fran\xE7ais (France)', 'fran\xE7ais (Luxembourg)', 'Gaeilge', 'Gaeilge (\xC9ire)', '\u0939\u093F\u0902\u0926\u0940', '\u0939\u093F\u0902\u0926\u0940 (\u092D\u093E\u0930\u0924)', 'hrvatski', 'hrvatski (Hrvatska)', 'magyar', 'magyar (Magyarorsz\xE1g)', 'Bahasa Indonesia', 'Bahasa Indonesia (Indonesia)', '\xEDslenska', '\xEDslenska (\xCDsland)', 'italiano', 'italiano (Svizzera)', 'italiano (Italia)', '\u05E2\u05D1\u05E8\u05D9\u05EA', '\u05E2\u05D1\u05E8\u05D9\u05EA (\u05D9\u05E9\u05E8\u05D0\u05DC)', '\u65E5\u672C\u8A9E', '\u65E5\u672C\u8A9E (\u65E5\u672C)', '\uD55C\uAD6D\uC5B4', '\uD55C\uAD6D\uC5B4 (\uB300\uD55C\uBBFC\uAD6D)', 'Lietuvi\u0173', 'Lietuvi\u0173 (Lietuva)', 'Latvie\u0161u', 'Latvie\u0161u (Latvija)', '\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438', '\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438 (\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)', 'Bahasa Melayu', 'Bahasa Melayu (Malaysia)', 'Malti', 'Malti (Malta)', 'Nederlands', 'Nederlands (Belgi\xEB)', 'Nederlands (Nederland)', 'norsk', 'norsk (Norge)', 'norsk (Norge,nynorsk)', 'polski', 'polski (Polska)', 'portugu\xEAs', 'portugu\xEAs (Brasil)', 'portugu\xEAs (Portugal)', 'rom\xE2n\u0103', 'rom\xE2n\u0103 (Rom\xE2nia)', '\u0440\u0443\u0441\u0441\u043A\u0438\u0439', '\u0440\u0443\u0441\u0441\u043A\u0438\u0439 (\u0420\u043E\u0441\u0441\u0438\u044F)', 'Sloven\u010Dina', 'Sloven\u010Dina (Slovensk\xE1 republika)', 'Sloven\u0161\u010Dina', 'Sloven\u0161\u010Dina (Slovenija)', 'shqip', 'shqip (Shqip\xEBria)', '\u0421\u0440\u043F\u0441\u043A\u0438', '\u0421\u0440\u043F\u0441\u043A\u0438 (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)', 'Srpski (Latin,Bosna i Hercegovina)', '\u0421\u0440\u043F\u0441\u043A\u0438 (\u0421\u0440\u0431\u0438\u0458\u0430 \u0438 \u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430)', '\u0421\u0440\u043F\u0441\u043A\u0438 (Montenegro)', 'Srpski (Latin,Crna Gora)', '\u0421\u0440\u043F\u0441\u043A\u0438 (Serbia)', 'Srpski (Latin,Srbija)', 'Srpski (Latin)', 'svenska', 'svenska (Sverige)', '\u0E44\u0E17\u0E22', '\u0E44\u0E17\u0E22 (\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22)', 'T\xFCrk\xE7e', 'T\xFCrk\xE7e (T\xFCrkiye)', '\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430', '\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)', 'Ti\u1EBFng Vi\u1EC7t', 'Ti\u1EBFng Vi\u1EC7t (Vi\u1EC7t Nam)', '\u4E2D\u6587', '\u4E2D\u6587 (\u4E2D\u56FD)', '\u4E2D\u6587 (\u9999\u6E2F)', '\u4E2D\u6587 (\u65B0\u52A0\u5761)', '\u4E2D\u6587 (\u53F0\u7063)']);
  systemLocale = Locale_init(window.navigator.language);
  Kotlin.defineModule('i18n4k-i18n4k-core-jsLegacy', _);
  return _;
}));

//# sourceMappingURL=i18n4k-i18n4k-core-jsLegacy.js.map
