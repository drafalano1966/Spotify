(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'MultiplatformSettings-multiplatform-settings-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MultiplatformSettings-multiplatform-settings-js-legacy'.");
    }root['MultiplatformSettings-multiplatform-settings-js-legacy'] = factory(typeof this['MultiplatformSettings-multiplatform-settings-js-legacy'] === 'undefined' ? {} : this['MultiplatformSettings-multiplatform-settings-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var L0 = Kotlin.Long.ZERO;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var Long = Kotlin.Long;
  var getKClass = Kotlin.getKClass;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Annotation = Kotlin.kotlin.Annotation;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_pdl1vz$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_5cw0du$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  IntDelegate.prototype = Object.create(OptionalKeyDelegate.prototype);
  IntDelegate.prototype.constructor = IntDelegate;
  LongDelegate.prototype = Object.create(OptionalKeyDelegate.prototype);
  LongDelegate.prototype.constructor = LongDelegate;
  StringDelegate.prototype = Object.create(OptionalKeyDelegate.prototype);
  StringDelegate.prototype.constructor = StringDelegate;
  FloatDelegate.prototype = Object.create(OptionalKeyDelegate.prototype);
  FloatDelegate.prototype.constructor = FloatDelegate;
  DoubleDelegate.prototype = Object.create(OptionalKeyDelegate.prototype);
  DoubleDelegate.prototype.constructor = DoubleDelegate;
  BooleanDelegate.prototype = Object.create(OptionalKeyDelegate.prototype);
  BooleanDelegate.prototype.constructor = BooleanDelegate;
  NullableIntDelegate.prototype = Object.create(OptionalKeyDelegate.prototype);
  NullableIntDelegate.prototype.constructor = NullableIntDelegate;
  NullableLongDelegate.prototype = Object.create(OptionalKeyDelegate.prototype);
  NullableLongDelegate.prototype.constructor = NullableLongDelegate;
  NullableStringDelegate.prototype = Object.create(OptionalKeyDelegate.prototype);
  NullableStringDelegate.prototype.constructor = NullableStringDelegate;
  NullableFloatDelegate.prototype = Object.create(OptionalKeyDelegate.prototype);
  NullableFloatDelegate.prototype.constructor = NullableFloatDelegate;
  NullableDoubleDelegate.prototype = Object.create(OptionalKeyDelegate.prototype);
  NullableDoubleDelegate.prototype.constructor = NullableDoubleDelegate;
  NullableBooleanDelegate.prototype = Object.create(OptionalKeyDelegate.prototype);
  NullableBooleanDelegate.prototype.constructor = NullableBooleanDelegate;
  function int($receiver, key, defaultValue) {
    if (key === void 0)
      key = null;
    if (defaultValue === void 0)
      defaultValue = 0;
    return new IntDelegate($receiver, key, defaultValue);
  }
  function long($receiver, key, defaultValue) {
    if (key === void 0)
      key = null;
    if (defaultValue === void 0)
      defaultValue = L0;
    return new LongDelegate($receiver, key, defaultValue);
  }
  function string($receiver, key, defaultValue) {
    if (key === void 0)
      key = null;
    if (defaultValue === void 0)
      defaultValue = '';
    return new StringDelegate($receiver, key, defaultValue);
  }
  function float($receiver, key, defaultValue) {
    if (key === void 0)
      key = null;
    if (defaultValue === void 0)
      defaultValue = 0.0;
    return new FloatDelegate($receiver, key, defaultValue);
  }
  function double($receiver, key, defaultValue) {
    if (key === void 0)
      key = null;
    if (defaultValue === void 0)
      defaultValue = 0.0;
    return new DoubleDelegate($receiver, key, defaultValue);
  }
  function boolean($receiver, key, defaultValue) {
    if (key === void 0)
      key = null;
    if (defaultValue === void 0)
      defaultValue = false;
    return new BooleanDelegate($receiver, key, defaultValue);
  }
  function nullableInt($receiver, key) {
    if (key === void 0)
      key = null;
    return new NullableIntDelegate($receiver, key);
  }
  function nullableLong($receiver, key) {
    if (key === void 0)
      key = null;
    return new NullableLongDelegate($receiver, key);
  }
  function nullableString($receiver, key) {
    if (key === void 0)
      key = null;
    return new NullableStringDelegate($receiver, key);
  }
  function nullableFloat($receiver, key) {
    if (key === void 0)
      key = null;
    return new NullableFloatDelegate($receiver, key);
  }
  function nullableDouble($receiver, key) {
    if (key === void 0)
      key = null;
    return new NullableDoubleDelegate($receiver, key);
  }
  function nullableBoolean($receiver, key) {
    if (key === void 0)
      key = null;
    return new NullableBooleanDelegate($receiver, key);
  }
  function IntDelegate(settings, key, defaultValue) {
    OptionalKeyDelegate.call(this, key);
    this.settings_0 = settings;
    this.defaultValue_0 = defaultValue;
  }
  IntDelegate.prototype.getValue_61zpoe$ = function (key) {
    return this.settings_0.getInt_bm4lxs$(key, this.defaultValue_0);
  };
  IntDelegate.prototype.setValue_yuqcw7$ = function (key, value) {
    this.settings_0.putInt_bm4lxs$(key, value);
  };
  IntDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntDelegate',
    interfaces: [OptionalKeyDelegate]
  };
  function LongDelegate(settings, key, defaultValue) {
    OptionalKeyDelegate.call(this, key);
    this.settings_0 = settings;
    this.defaultValue_0 = defaultValue;
  }
  LongDelegate.prototype.getValue_61zpoe$ = function (key) {
    return this.settings_0.getLong_4wgjuj$(key, this.defaultValue_0);
  };
  LongDelegate.prototype.setValue_yuqcw7$ = function (key, value) {
    this.settings_0.putLong_4wgjuj$(key, value);
  };
  LongDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LongDelegate',
    interfaces: [OptionalKeyDelegate]
  };
  function StringDelegate(settings, key, defaultValue) {
    OptionalKeyDelegate.call(this, key);
    this.settings_0 = settings;
    this.defaultValue_0 = defaultValue;
  }
  StringDelegate.prototype.getValue_61zpoe$ = function (key) {
    return this.settings_0.getString_puj7f4$(key, this.defaultValue_0);
  };
  StringDelegate.prototype.setValue_yuqcw7$ = function (key, value) {
    this.settings_0.putString_puj7f4$(key, value);
  };
  StringDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringDelegate',
    interfaces: [OptionalKeyDelegate]
  };
  function FloatDelegate(settings, key, defaultValue) {
    OptionalKeyDelegate.call(this, key);
    this.settings_0 = settings;
    this.defaultValue_0 = defaultValue;
  }
  FloatDelegate.prototype.getValue_61zpoe$ = function (key) {
    return this.settings_0.getFloat_9sobi5$(key, this.defaultValue_0);
  };
  FloatDelegate.prototype.setValue_yuqcw7$ = function (key, value) {
    this.settings_0.putFloat_9sobi5$(key, value);
  };
  FloatDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FloatDelegate',
    interfaces: [OptionalKeyDelegate]
  };
  function DoubleDelegate(settings, key, defaultValue) {
    OptionalKeyDelegate.call(this, key);
    this.settings_0 = settings;
    this.defaultValue_0 = defaultValue;
  }
  DoubleDelegate.prototype.getValue_61zpoe$ = function (key) {
    return this.settings_0.getDouble_io5o9c$(key, this.defaultValue_0);
  };
  DoubleDelegate.prototype.setValue_yuqcw7$ = function (key, value) {
    this.settings_0.putDouble_io5o9c$(key, value);
  };
  DoubleDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleDelegate',
    interfaces: [OptionalKeyDelegate]
  };
  function BooleanDelegate(settings, key, defaultValue) {
    OptionalKeyDelegate.call(this, key);
    this.settings_0 = settings;
    this.defaultValue_0 = defaultValue;
  }
  BooleanDelegate.prototype.getValue_61zpoe$ = function (key) {
    return this.settings_0.getBoolean_ivxn3r$(key, this.defaultValue_0);
  };
  BooleanDelegate.prototype.setValue_yuqcw7$ = function (key, value) {
    this.settings_0.putBoolean_ivxn3r$(key, value);
  };
  BooleanDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BooleanDelegate',
    interfaces: [OptionalKeyDelegate]
  };
  function NullableIntDelegate(settings, key) {
    OptionalKeyDelegate.call(this, key);
    this.settings_0 = settings;
  }
  NullableIntDelegate.prototype.getValue_61zpoe$ = function (key) {
    var $receiver = this.settings_0;
    var get$result;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$ = PrimitiveClasses$intClass;
    if (equals(tmp$, PrimitiveClasses$intClass)) {
      get$result = (tmp$_0 = $receiver.getIntOrNull_61zpoe$(key)) == null || typeof tmp$_0 === 'number' ? tmp$_0 : throwCCE();
    } else if (equals(tmp$, getKClass(Long))) {
      get$result = (tmp$_1 = $receiver.getLongOrNull_61zpoe$(key)) == null || typeof tmp$_1 === 'number' ? tmp$_1 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$stringClass)) {
      get$result = (tmp$_2 = $receiver.getStringOrNull_61zpoe$(key)) == null || typeof tmp$_2 === 'number' ? tmp$_2 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$floatClass)) {
      get$result = (tmp$_3 = $receiver.getFloatOrNull_61zpoe$(key)) == null || typeof tmp$_3 === 'number' ? tmp$_3 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$doubleClass)) {
      get$result = (tmp$_4 = $receiver.getDoubleOrNull_61zpoe$(key)) == null || typeof tmp$_4 === 'number' ? tmp$_4 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$booleanClass)) {
      get$result = (tmp$_5 = $receiver.getBooleanOrNull_61zpoe$(key)) == null || typeof tmp$_5 === 'number' ? tmp$_5 : throwCCE();
    } else
      throw IllegalArgumentException_init('Invalid type!');
    return get$result;
  };
  NullableIntDelegate.prototype.setValue_yuqcw7$ = function (key, value) {
    var $receiver = this.settings_0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (value == null) {
      $receiver.remove_61zpoe$(key);
    } else {
      tmp$ = PrimitiveClasses$intClass;
      if (equals(tmp$, PrimitiveClasses$intClass)) {
        $receiver.putInt_bm4lxs$(key, typeof (tmp$_0 = value) === 'number' ? tmp$_0 : throwCCE());
      } else if (equals(tmp$, getKClass(Long))) {
        $receiver.putLong_4wgjuj$(key, Kotlin.isType(tmp$_1 = value, Kotlin.Long) ? tmp$_1 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$stringClass)) {
        $receiver.putString_puj7f4$(key, typeof (tmp$_2 = value) === 'string' ? tmp$_2 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$floatClass)) {
        $receiver.putFloat_9sobi5$(key, typeof (tmp$_3 = value) === 'number' ? tmp$_3 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$doubleClass)) {
        $receiver.putDouble_io5o9c$(key, typeof (tmp$_4 = value) === 'number' ? tmp$_4 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$booleanClass)) {
        $receiver.putBoolean_ivxn3r$(key, typeof (tmp$_5 = value) === 'boolean' ? tmp$_5 : throwCCE());
      } else
        throw IllegalArgumentException_init('Invalid type!');
    }
  };
  NullableIntDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullableIntDelegate',
    interfaces: [OptionalKeyDelegate]
  };
  function NullableLongDelegate(settings, key) {
    OptionalKeyDelegate.call(this, key);
    this.settings_0 = settings;
  }
  NullableLongDelegate.prototype.getValue_61zpoe$ = function (key) {
    var $receiver = this.settings_0;
    var get$result;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$ = getKClass(Long);
    if (equals(tmp$, PrimitiveClasses$intClass)) {
      get$result = (tmp$_0 = $receiver.getIntOrNull_61zpoe$(key)) == null || Kotlin.isType(tmp$_0, Kotlin.Long) ? tmp$_0 : throwCCE();
    } else if (equals(tmp$, getKClass(Long))) {
      get$result = (tmp$_1 = $receiver.getLongOrNull_61zpoe$(key)) == null || Kotlin.isType(tmp$_1, Kotlin.Long) ? tmp$_1 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$stringClass)) {
      get$result = (tmp$_2 = $receiver.getStringOrNull_61zpoe$(key)) == null || Kotlin.isType(tmp$_2, Kotlin.Long) ? tmp$_2 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$floatClass)) {
      get$result = (tmp$_3 = $receiver.getFloatOrNull_61zpoe$(key)) == null || Kotlin.isType(tmp$_3, Kotlin.Long) ? tmp$_3 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$doubleClass)) {
      get$result = (tmp$_4 = $receiver.getDoubleOrNull_61zpoe$(key)) == null || Kotlin.isType(tmp$_4, Kotlin.Long) ? tmp$_4 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$booleanClass)) {
      get$result = (tmp$_5 = $receiver.getBooleanOrNull_61zpoe$(key)) == null || Kotlin.isType(tmp$_5, Kotlin.Long) ? tmp$_5 : throwCCE();
    } else
      throw IllegalArgumentException_init('Invalid type!');
    return get$result;
  };
  NullableLongDelegate.prototype.setValue_yuqcw7$ = function (key, value) {
    var $receiver = this.settings_0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (value == null) {
      $receiver.remove_61zpoe$(key);
    } else {
      tmp$ = getKClass(Long);
      if (equals(tmp$, PrimitiveClasses$intClass)) {
        $receiver.putInt_bm4lxs$(key, typeof (tmp$_0 = value) === 'number' ? tmp$_0 : throwCCE());
      } else if (equals(tmp$, getKClass(Long))) {
        $receiver.putLong_4wgjuj$(key, Kotlin.isType(tmp$_1 = value, Kotlin.Long) ? tmp$_1 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$stringClass)) {
        $receiver.putString_puj7f4$(key, typeof (tmp$_2 = value) === 'string' ? tmp$_2 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$floatClass)) {
        $receiver.putFloat_9sobi5$(key, typeof (tmp$_3 = value) === 'number' ? tmp$_3 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$doubleClass)) {
        $receiver.putDouble_io5o9c$(key, typeof (tmp$_4 = value) === 'number' ? tmp$_4 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$booleanClass)) {
        $receiver.putBoolean_ivxn3r$(key, typeof (tmp$_5 = value) === 'boolean' ? tmp$_5 : throwCCE());
      } else
        throw IllegalArgumentException_init('Invalid type!');
    }
  };
  NullableLongDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullableLongDelegate',
    interfaces: [OptionalKeyDelegate]
  };
  function NullableStringDelegate(settings, key) {
    OptionalKeyDelegate.call(this, key);
    this.settings_0 = settings;
  }
  NullableStringDelegate.prototype.getValue_61zpoe$ = function (key) {
    var $receiver = this.settings_0;
    var get$result;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$ = PrimitiveClasses$stringClass;
    if (equals(tmp$, PrimitiveClasses$intClass)) {
      get$result = (tmp$_0 = $receiver.getIntOrNull_61zpoe$(key)) == null || typeof tmp$_0 === 'string' ? tmp$_0 : throwCCE();
    } else if (equals(tmp$, getKClass(Long))) {
      get$result = (tmp$_1 = $receiver.getLongOrNull_61zpoe$(key)) == null || typeof tmp$_1 === 'string' ? tmp$_1 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$stringClass)) {
      get$result = (tmp$_2 = $receiver.getStringOrNull_61zpoe$(key)) == null || typeof tmp$_2 === 'string' ? tmp$_2 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$floatClass)) {
      get$result = (tmp$_3 = $receiver.getFloatOrNull_61zpoe$(key)) == null || typeof tmp$_3 === 'string' ? tmp$_3 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$doubleClass)) {
      get$result = (tmp$_4 = $receiver.getDoubleOrNull_61zpoe$(key)) == null || typeof tmp$_4 === 'string' ? tmp$_4 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$booleanClass)) {
      get$result = (tmp$_5 = $receiver.getBooleanOrNull_61zpoe$(key)) == null || typeof tmp$_5 === 'string' ? tmp$_5 : throwCCE();
    } else
      throw IllegalArgumentException_init('Invalid type!');
    return get$result;
  };
  NullableStringDelegate.prototype.setValue_yuqcw7$ = function (key, value) {
    var $receiver = this.settings_0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (value == null) {
      $receiver.remove_61zpoe$(key);
    } else {
      tmp$ = PrimitiveClasses$stringClass;
      if (equals(tmp$, PrimitiveClasses$intClass)) {
        $receiver.putInt_bm4lxs$(key, typeof (tmp$_0 = value) === 'number' ? tmp$_0 : throwCCE());
      } else if (equals(tmp$, getKClass(Long))) {
        $receiver.putLong_4wgjuj$(key, Kotlin.isType(tmp$_1 = value, Kotlin.Long) ? tmp$_1 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$stringClass)) {
        $receiver.putString_puj7f4$(key, typeof (tmp$_2 = value) === 'string' ? tmp$_2 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$floatClass)) {
        $receiver.putFloat_9sobi5$(key, typeof (tmp$_3 = value) === 'number' ? tmp$_3 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$doubleClass)) {
        $receiver.putDouble_io5o9c$(key, typeof (tmp$_4 = value) === 'number' ? tmp$_4 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$booleanClass)) {
        $receiver.putBoolean_ivxn3r$(key, typeof (tmp$_5 = value) === 'boolean' ? tmp$_5 : throwCCE());
      } else
        throw IllegalArgumentException_init('Invalid type!');
    }
  };
  NullableStringDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullableStringDelegate',
    interfaces: [OptionalKeyDelegate]
  };
  function NullableFloatDelegate(settings, key) {
    OptionalKeyDelegate.call(this, key);
    this.settings_0 = settings;
  }
  NullableFloatDelegate.prototype.getValue_61zpoe$ = function (key) {
    var $receiver = this.settings_0;
    var get$result;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$ = PrimitiveClasses$floatClass;
    if (equals(tmp$, PrimitiveClasses$intClass)) {
      get$result = (tmp$_0 = $receiver.getIntOrNull_61zpoe$(key)) == null || typeof tmp$_0 === 'number' ? tmp$_0 : throwCCE();
    } else if (equals(tmp$, getKClass(Long))) {
      get$result = (tmp$_1 = $receiver.getLongOrNull_61zpoe$(key)) == null || typeof tmp$_1 === 'number' ? tmp$_1 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$stringClass)) {
      get$result = (tmp$_2 = $receiver.getStringOrNull_61zpoe$(key)) == null || typeof tmp$_2 === 'number' ? tmp$_2 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$floatClass)) {
      get$result = (tmp$_3 = $receiver.getFloatOrNull_61zpoe$(key)) == null || typeof tmp$_3 === 'number' ? tmp$_3 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$doubleClass)) {
      get$result = (tmp$_4 = $receiver.getDoubleOrNull_61zpoe$(key)) == null || typeof tmp$_4 === 'number' ? tmp$_4 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$booleanClass)) {
      get$result = (tmp$_5 = $receiver.getBooleanOrNull_61zpoe$(key)) == null || typeof tmp$_5 === 'number' ? tmp$_5 : throwCCE();
    } else
      throw IllegalArgumentException_init('Invalid type!');
    return get$result;
  };
  NullableFloatDelegate.prototype.setValue_yuqcw7$ = function (key, value) {
    var $receiver = this.settings_0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (value == null) {
      $receiver.remove_61zpoe$(key);
    } else {
      tmp$ = PrimitiveClasses$floatClass;
      if (equals(tmp$, PrimitiveClasses$intClass)) {
        $receiver.putInt_bm4lxs$(key, typeof (tmp$_0 = value) === 'number' ? tmp$_0 : throwCCE());
      } else if (equals(tmp$, getKClass(Long))) {
        $receiver.putLong_4wgjuj$(key, Kotlin.isType(tmp$_1 = value, Kotlin.Long) ? tmp$_1 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$stringClass)) {
        $receiver.putString_puj7f4$(key, typeof (tmp$_2 = value) === 'string' ? tmp$_2 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$floatClass)) {
        $receiver.putFloat_9sobi5$(key, typeof (tmp$_3 = value) === 'number' ? tmp$_3 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$doubleClass)) {
        $receiver.putDouble_io5o9c$(key, typeof (tmp$_4 = value) === 'number' ? tmp$_4 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$booleanClass)) {
        $receiver.putBoolean_ivxn3r$(key, typeof (tmp$_5 = value) === 'boolean' ? tmp$_5 : throwCCE());
      } else
        throw IllegalArgumentException_init('Invalid type!');
    }
  };
  NullableFloatDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullableFloatDelegate',
    interfaces: [OptionalKeyDelegate]
  };
  function NullableDoubleDelegate(settings, key) {
    OptionalKeyDelegate.call(this, key);
    this.settings_0 = settings;
  }
  NullableDoubleDelegate.prototype.getValue_61zpoe$ = function (key) {
    var $receiver = this.settings_0;
    var get$result;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$ = PrimitiveClasses$doubleClass;
    if (equals(tmp$, PrimitiveClasses$intClass)) {
      get$result = (tmp$_0 = $receiver.getIntOrNull_61zpoe$(key)) == null || typeof tmp$_0 === 'number' ? tmp$_0 : throwCCE();
    } else if (equals(tmp$, getKClass(Long))) {
      get$result = (tmp$_1 = $receiver.getLongOrNull_61zpoe$(key)) == null || typeof tmp$_1 === 'number' ? tmp$_1 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$stringClass)) {
      get$result = (tmp$_2 = $receiver.getStringOrNull_61zpoe$(key)) == null || typeof tmp$_2 === 'number' ? tmp$_2 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$floatClass)) {
      get$result = (tmp$_3 = $receiver.getFloatOrNull_61zpoe$(key)) == null || typeof tmp$_3 === 'number' ? tmp$_3 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$doubleClass)) {
      get$result = (tmp$_4 = $receiver.getDoubleOrNull_61zpoe$(key)) == null || typeof tmp$_4 === 'number' ? tmp$_4 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$booleanClass)) {
      get$result = (tmp$_5 = $receiver.getBooleanOrNull_61zpoe$(key)) == null || typeof tmp$_5 === 'number' ? tmp$_5 : throwCCE();
    } else
      throw IllegalArgumentException_init('Invalid type!');
    return get$result;
  };
  NullableDoubleDelegate.prototype.setValue_yuqcw7$ = function (key, value) {
    var $receiver = this.settings_0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (value == null) {
      $receiver.remove_61zpoe$(key);
    } else {
      tmp$ = PrimitiveClasses$doubleClass;
      if (equals(tmp$, PrimitiveClasses$intClass)) {
        $receiver.putInt_bm4lxs$(key, typeof (tmp$_0 = value) === 'number' ? tmp$_0 : throwCCE());
      } else if (equals(tmp$, getKClass(Long))) {
        $receiver.putLong_4wgjuj$(key, Kotlin.isType(tmp$_1 = value, Kotlin.Long) ? tmp$_1 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$stringClass)) {
        $receiver.putString_puj7f4$(key, typeof (tmp$_2 = value) === 'string' ? tmp$_2 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$floatClass)) {
        $receiver.putFloat_9sobi5$(key, typeof (tmp$_3 = value) === 'number' ? tmp$_3 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$doubleClass)) {
        $receiver.putDouble_io5o9c$(key, typeof (tmp$_4 = value) === 'number' ? tmp$_4 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$booleanClass)) {
        $receiver.putBoolean_ivxn3r$(key, typeof (tmp$_5 = value) === 'boolean' ? tmp$_5 : throwCCE());
      } else
        throw IllegalArgumentException_init('Invalid type!');
    }
  };
  NullableDoubleDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullableDoubleDelegate',
    interfaces: [OptionalKeyDelegate]
  };
  function NullableBooleanDelegate(settings, key) {
    OptionalKeyDelegate.call(this, key);
    this.settings_0 = settings;
  }
  NullableBooleanDelegate.prototype.getValue_61zpoe$ = function (key) {
    var $receiver = this.settings_0;
    var get$result;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$ = PrimitiveClasses$booleanClass;
    if (equals(tmp$, PrimitiveClasses$intClass)) {
      get$result = (tmp$_0 = $receiver.getIntOrNull_61zpoe$(key)) == null || typeof tmp$_0 === 'boolean' ? tmp$_0 : throwCCE();
    } else if (equals(tmp$, getKClass(Long))) {
      get$result = (tmp$_1 = $receiver.getLongOrNull_61zpoe$(key)) == null || typeof tmp$_1 === 'boolean' ? tmp$_1 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$stringClass)) {
      get$result = (tmp$_2 = $receiver.getStringOrNull_61zpoe$(key)) == null || typeof tmp$_2 === 'boolean' ? tmp$_2 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$floatClass)) {
      get$result = (tmp$_3 = $receiver.getFloatOrNull_61zpoe$(key)) == null || typeof tmp$_3 === 'boolean' ? tmp$_3 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$doubleClass)) {
      get$result = (tmp$_4 = $receiver.getDoubleOrNull_61zpoe$(key)) == null || typeof tmp$_4 === 'boolean' ? tmp$_4 : throwCCE();
    } else if (equals(tmp$, PrimitiveClasses$booleanClass)) {
      get$result = (tmp$_5 = $receiver.getBooleanOrNull_61zpoe$(key)) == null || typeof tmp$_5 === 'boolean' ? tmp$_5 : throwCCE();
    } else
      throw IllegalArgumentException_init('Invalid type!');
    return get$result;
  };
  NullableBooleanDelegate.prototype.setValue_yuqcw7$ = function (key, value) {
    var $receiver = this.settings_0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (value == null) {
      $receiver.remove_61zpoe$(key);
    } else {
      tmp$ = PrimitiveClasses$booleanClass;
      if (equals(tmp$, PrimitiveClasses$intClass)) {
        $receiver.putInt_bm4lxs$(key, typeof (tmp$_0 = value) === 'number' ? tmp$_0 : throwCCE());
      } else if (equals(tmp$, getKClass(Long))) {
        $receiver.putLong_4wgjuj$(key, Kotlin.isType(tmp$_1 = value, Kotlin.Long) ? tmp$_1 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$stringClass)) {
        $receiver.putString_puj7f4$(key, typeof (tmp$_2 = value) === 'string' ? tmp$_2 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$floatClass)) {
        $receiver.putFloat_9sobi5$(key, typeof (tmp$_3 = value) === 'number' ? tmp$_3 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$doubleClass)) {
        $receiver.putDouble_io5o9c$(key, typeof (tmp$_4 = value) === 'number' ? tmp$_4 : throwCCE());
      } else if (equals(tmp$, PrimitiveClasses$booleanClass)) {
        $receiver.putBoolean_ivxn3r$(key, typeof (tmp$_5 = value) === 'boolean' ? tmp$_5 : throwCCE());
      } else
        throw IllegalArgumentException_init('Invalid type!');
    }
  };
  NullableBooleanDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullableBooleanDelegate',
    interfaces: [OptionalKeyDelegate]
  };
  function OptionalKeyDelegate(key) {
    this.key_0 = key;
  }
  OptionalKeyDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    return this.getValue_61zpoe$((tmp$ = this.key_0) != null ? tmp$ : property.callableName);
  };
  OptionalKeyDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    var tmp$;
    this.setValue_yuqcw7$((tmp$ = this.key_0) != null ? tmp$ : property.callableName, value);
  };
  OptionalKeyDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OptionalKeyDelegate',
    interfaces: [ReadWriteProperty]
  };
  function ExperimentalSettingsApi() {
  }
  ExperimentalSettingsApi.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExperimentalSettingsApi',
    interfaces: [Annotation]
  };
  function ExperimentalSettingsImplementation() {
  }
  ExperimentalSettingsImplementation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExperimentalSettingsImplementation',
    interfaces: [Annotation]
  };
  function ExperimentalListener() {
  }
  ExperimentalListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExperimentalListener',
    interfaces: [Annotation]
  };
  var addIntListener = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.addIntListener_a82jlx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function addIntListener$lambda(closure$callback, closure$key, closure$defaultValue, this$addIntListener) {
      return function () {
        closure$callback(this$addIntListener.getInt_bm4lxs$(closure$key, closure$defaultValue));
        return Unit;
      };
    }
    return function ($receiver, key, defaultValue, callback) {
      if (defaultValue === void 0)
        defaultValue = 0;
      return $receiver.addListener_a4mwiz$(key, addIntListener$lambda(callback, key, defaultValue, $receiver));
    };
  }));
  var addIntOrNullListener = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.addIntOrNullListener_7v8vj8$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function addIntOrNullListener$lambda(closure$callback, closure$key, this$addIntOrNullListener) {
      return function () {
        closure$callback(this$addIntOrNullListener.getIntOrNull_61zpoe$(closure$key));
        return Unit;
      };
    }
    return function ($receiver, key, callback) {
      return $receiver.addListener_a4mwiz$(key, addIntOrNullListener$lambda(callback, key, $receiver));
    };
  }));
  var addLongListener = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.addLongListener_z47kez$', wrapFunction(function () {
    var L0 = Kotlin.Long.ZERO;
    var Unit = Kotlin.kotlin.Unit;
    function addLongListener$lambda(closure$callback, closure$key, closure$defaultValue, this$addLongListener) {
      return function () {
        closure$callback(this$addLongListener.getLong_4wgjuj$(closure$key, closure$defaultValue));
        return Unit;
      };
    }
    return function ($receiver, key, defaultValue, callback) {
      if (defaultValue === void 0)
        defaultValue = L0;
      return $receiver.addListener_a4mwiz$(key, addLongListener$lambda(callback, key, defaultValue, $receiver));
    };
  }));
  var addLongOrNullListener = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.addLongOrNullListener_l19fov$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function addLongOrNullListener$lambda(closure$callback, closure$key, this$addLongOrNullListener) {
      return function () {
        closure$callback(this$addLongOrNullListener.getLongOrNull_61zpoe$(closure$key));
        return Unit;
      };
    }
    return function ($receiver, key, callback) {
      return $receiver.addListener_a4mwiz$(key, addLongOrNullListener$lambda(callback, key, $receiver));
    };
  }));
  var addStringListener = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.addStringListener_y6ocmp$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function addStringListener$lambda(closure$callback, closure$key, closure$defaultValue, this$addStringListener) {
      return function () {
        closure$callback(this$addStringListener.getString_puj7f4$(closure$key, closure$defaultValue));
        return Unit;
      };
    }
    return function ($receiver, key, defaultValue, callback) {
      if (defaultValue === void 0)
        defaultValue = '';
      return $receiver.addListener_a4mwiz$(key, addStringListener$lambda(callback, key, defaultValue, $receiver));
    };
  }));
  var addStringOrNullListener = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.addStringOrNullListener_u9y746$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function addStringOrNullListener$lambda(closure$callback, closure$key, this$addStringOrNullListener) {
      return function () {
        closure$callback(this$addStringOrNullListener.getStringOrNull_61zpoe$(closure$key));
        return Unit;
      };
    }
    return function ($receiver, key, callback) {
      return $receiver.addListener_a4mwiz$(key, addStringOrNullListener$lambda(callback, key, $receiver));
    };
  }));
  var addFloatListener = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.addFloatListener_9bcja3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function addFloatListener$lambda(closure$callback, closure$key, closure$defaultValue, this$addFloatListener) {
      return function () {
        closure$callback(this$addFloatListener.getFloat_9sobi5$(closure$key, closure$defaultValue));
        return Unit;
      };
    }
    return function ($receiver, key, defaultValue, callback) {
      if (defaultValue === void 0)
        defaultValue = 0.0;
      return $receiver.addListener_a4mwiz$(key, addFloatListener$lambda(callback, key, defaultValue, $receiver));
    };
  }));
  var addFloatOrNullListener = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.addFloatOrNullListener_886jpr$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function addFloatOrNullListener$lambda(closure$callback, closure$key, this$addFloatOrNullListener) {
      return function () {
        closure$callback(this$addFloatOrNullListener.getFloatOrNull_61zpoe$(closure$key));
        return Unit;
      };
    }
    return function ($receiver, key, callback) {
      return $receiver.addListener_a4mwiz$(key, addFloatOrNullListener$lambda(callback, key, $receiver));
    };
  }));
  var addDoubleListener = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.addDoubleListener_2cmzyn$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function addDoubleListener$lambda(closure$callback, closure$key, closure$defaultValue, this$addDoubleListener) {
      return function () {
        closure$callback(this$addDoubleListener.getDouble_io5o9c$(closure$key, closure$defaultValue));
        return Unit;
      };
    }
    return function ($receiver, key, defaultValue, callback) {
      if (defaultValue === void 0)
        defaultValue = 0.0;
      return $receiver.addListener_a4mwiz$(key, addDoubleListener$lambda(callback, key, defaultValue, $receiver));
    };
  }));
  var addDoubleOrNullListener = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.addDoubleOrNullListener_38ve4m$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function addDoubleOrNullListener$lambda(closure$callback, closure$key, this$addDoubleOrNullListener) {
      return function () {
        closure$callback(this$addDoubleOrNullListener.getDoubleOrNull_61zpoe$(closure$key));
        return Unit;
      };
    }
    return function ($receiver, key, callback) {
      return $receiver.addListener_a4mwiz$(key, addDoubleOrNullListener$lambda(callback, key, $receiver));
    };
  }));
  var addBooleanListener = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.addBooleanListener_uorcm3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function addBooleanListener$lambda(closure$callback, closure$key, closure$defaultValue, this$addBooleanListener) {
      return function () {
        closure$callback(this$addBooleanListener.getBoolean_ivxn3r$(closure$key, closure$defaultValue));
        return Unit;
      };
    }
    return function ($receiver, key, defaultValue, callback) {
      if (defaultValue === void 0)
        defaultValue = false;
      return $receiver.addListener_a4mwiz$(key, addBooleanListener$lambda(callback, key, defaultValue, $receiver));
    };
  }));
  var addBooleanOrNullListener = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.addBooleanOrNullListener_7z07pf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function addBooleanOrNullListener$lambda(closure$callback, closure$key, this$addBooleanOrNullListener) {
      return function () {
        closure$callback(this$addBooleanOrNullListener.getBooleanOrNull_61zpoe$(closure$key));
        return Unit;
      };
    }
    return function ($receiver, key, callback) {
      return $receiver.addListener_a4mwiz$(key, addBooleanOrNullListener$lambda(callback, key, $receiver));
    };
  }));
  var contains = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.contains_45tf0n$', function ($receiver, key) {
    return $receiver.hasKey_61zpoe$(key);
  });
  var minusAssign = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.minusAssign_45tf0n$', function ($receiver, key) {
    $receiver.remove_61zpoe$(key);
  });
  var get_0 = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.get_atbrgr$', function ($receiver, key, defaultValue) {
    return $receiver.getInt_bm4lxs$(key, defaultValue);
  });
  var get_1 = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.get_jwhk3a$', function ($receiver, key, defaultValue) {
    return $receiver.getLong_4wgjuj$(key, defaultValue);
  });
  var get_2 = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.get_mbjk0b$', function ($receiver, key, defaultValue) {
    return $receiver.getString_puj7f4$(key, defaultValue);
  });
  var get_3 = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.get_me8use$', function ($receiver, key, defaultValue) {
    return $receiver.getFloat_9sobi5$(key, defaultValue);
  });
  var get_4 = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.get_f560uj$', function ($receiver, key, defaultValue) {
    return $receiver.getDouble_io5o9c$(key, defaultValue);
  });
  var get_5 = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.get_dtlb3i$', function ($receiver, key, defaultValue) {
    return $receiver.getBoolean_ivxn3r$(key, defaultValue);
  });
  var set = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.set_atbrgr$', function ($receiver, key, value) {
    $receiver.putInt_bm4lxs$(key, value);
  });
  var set_0 = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.set_jwhk3a$', function ($receiver, key, value) {
    $receiver.putLong_4wgjuj$(key, value);
  });
  var set_1 = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.set_mbjk0b$', function ($receiver, key, value) {
    $receiver.putString_puj7f4$(key, value);
  });
  var set_2 = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.set_me8use$', function ($receiver, key, value) {
    $receiver.putFloat_9sobi5$(key, value);
  });
  var set_3 = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.set_f560uj$', function ($receiver, key, value) {
    $receiver.putDouble_io5o9c$(key, value);
  });
  var set_4 = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.set_dtlb3i$', function ($receiver, key, value) {
    $receiver.putBoolean_ivxn3r$(key, value);
  });
  var get_6 = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.get_njh7k0$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
    var equals = Kotlin.equals;
    var Long = Kotlin.Long;
    var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
    var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
    var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
    var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    return function (T_0, isT, $receiver, key) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
      tmp$ = getKClass(T_0);
      if (equals(tmp$, PrimitiveClasses$intClass))
        return (tmp$_0 = $receiver.getIntOrNull_61zpoe$(key)) == null || isT(tmp$_0) ? tmp$_0 : throwCCE();
      else if (equals(tmp$, getKClass(Long)))
        return (tmp$_1 = $receiver.getLongOrNull_61zpoe$(key)) == null || isT(tmp$_1) ? tmp$_1 : throwCCE();
      else if (equals(tmp$, PrimitiveClasses$stringClass))
        return (tmp$_2 = $receiver.getStringOrNull_61zpoe$(key)) == null || isT(tmp$_2) ? tmp$_2 : throwCCE();
      else if (equals(tmp$, PrimitiveClasses$floatClass))
        return (tmp$_3 = $receiver.getFloatOrNull_61zpoe$(key)) == null || isT(tmp$_3) ? tmp$_3 : throwCCE();
      else if (equals(tmp$, PrimitiveClasses$doubleClass))
        return (tmp$_4 = $receiver.getDoubleOrNull_61zpoe$(key)) == null || isT(tmp$_4) ? tmp$_4 : throwCCE();
      else if (equals(tmp$, PrimitiveClasses$booleanClass))
        return (tmp$_5 = $receiver.getBooleanOrNull_61zpoe$(key)) == null || isT(tmp$_5) ? tmp$_5 : throwCCE();
      else
        throw IllegalArgumentException_init('Invalid type!');
    };
  }));
  var set_5 = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.set_eatwsm$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
    var equals = Kotlin.equals;
    var Long = Kotlin.Long;
    var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
    var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
    var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
    var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    return function (T_0, isT, $receiver, key, value) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
      if (value == null) {
        $receiver.remove_61zpoe$(key);
      } else {
        tmp$ = getKClass(T_0);
        if (equals(tmp$, PrimitiveClasses$intClass)) {
          $receiver.putInt_bm4lxs$(key, typeof (tmp$_0 = value) === 'number' ? tmp$_0 : throwCCE());
        } else if (equals(tmp$, getKClass(Long))) {
          $receiver.putLong_4wgjuj$(key, Kotlin.isType(tmp$_1 = value, Kotlin.Long) ? tmp$_1 : throwCCE());
        } else if (equals(tmp$, PrimitiveClasses$stringClass)) {
          $receiver.putString_puj7f4$(key, typeof (tmp$_2 = value) === 'string' ? tmp$_2 : throwCCE());
        } else if (equals(tmp$, PrimitiveClasses$floatClass)) {
          $receiver.putFloat_9sobi5$(key, typeof (tmp$_3 = value) === 'number' ? tmp$_3 : throwCCE());
        } else if (equals(tmp$, PrimitiveClasses$doubleClass)) {
          $receiver.putDouble_io5o9c$(key, typeof (tmp$_4 = value) === 'number' ? tmp$_4 : throwCCE());
        } else if (equals(tmp$, PrimitiveClasses$booleanClass)) {
          $receiver.putBoolean_ivxn3r$(key, typeof (tmp$_5 = value) === 'boolean' ? tmp$_5 : throwCCE());
        } else
          throw IllegalArgumentException_init('Invalid type!');
      }
    };
  }));
  var set_6 = defineInlineFunction('MultiplatformSettings-multiplatform-settings-js-legacy.com.russhwolf.settings.set_4oalx0$', function ($receiver, key, value) {
    $receiver.remove_61zpoe$(key);
  });
  function Settings() {
    Settings$Companion_getInstance();
  }
  function Settings$Companion() {
    Settings$Companion_instance = this;
  }
  Settings$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Settings$Companion_instance = null;
  function Settings$Companion_getInstance() {
    if (Settings$Companion_instance === null) {
      new Settings$Companion();
    }return Settings$Companion_instance;
  }
  function Settings$Factory() {
  }
  Settings$Factory.prototype.create_pdl1vj$ = function (name, callback$default) {
    if (name === void 0)
      name = null;
    return callback$default ? callback$default(name) : this.create_pdl1vj$$default(name);
  };
  Settings$Factory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Factory',
    interfaces: []
  };
  Settings.prototype.getInt_bm4lxs$ = function (key, defaultValue, callback$default) {
    if (defaultValue === void 0)
      defaultValue = 0;
    return callback$default ? callback$default(key, defaultValue) : this.getInt_bm4lxs$$default(key, defaultValue);
  };
  Settings.prototype.getLong_4wgjuj$ = function (key, defaultValue, callback$default) {
    if (defaultValue === void 0)
      defaultValue = L0;
    return callback$default ? callback$default(key, defaultValue) : this.getLong_4wgjuj$$default(key, defaultValue);
  };
  Settings.prototype.getString_puj7f4$ = function (key, defaultValue, callback$default) {
    if (defaultValue === void 0)
      defaultValue = '';
    return callback$default ? callback$default(key, defaultValue) : this.getString_puj7f4$$default(key, defaultValue);
  };
  Settings.prototype.getFloat_9sobi5$ = function (key, defaultValue, callback$default) {
    if (defaultValue === void 0)
      defaultValue = 0.0;
    return callback$default ? callback$default(key, defaultValue) : this.getFloat_9sobi5$$default(key, defaultValue);
  };
  Settings.prototype.getDouble_io5o9c$ = function (key, defaultValue, callback$default) {
    if (defaultValue === void 0)
      defaultValue = 0.0;
    return callback$default ? callback$default(key, defaultValue) : this.getDouble_io5o9c$$default(key, defaultValue);
  };
  Settings.prototype.getBoolean_ivxn3r$ = function (key, defaultValue, callback$default) {
    if (defaultValue === void 0)
      defaultValue = false;
    return callback$default ? callback$default(key, defaultValue) : this.getBoolean_ivxn3r$$default(key, defaultValue);
  };
  Settings.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Settings',
    interfaces: []
  };
  function ObservableSettings() {
  }
  ObservableSettings.prototype.removeListener_6z88im$ = function (listener) {
    listener.deactivate();
  };
  ObservableSettings.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ObservableSettings',
    interfaces: [Settings]
  };
  function SettingsListener() {
  }
  SettingsListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SettingsListener',
    interfaces: []
  };
  function ExperimentalJs() {
  }
  ExperimentalJs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExperimentalJs',
    interfaces: [Annotation]
  };
  function JsSettings(delegate) {
    if (delegate === void 0)
      delegate = localStorage;
    this.delegate_0 = delegate;
  }
  Object.defineProperty(JsSettings.prototype, 'keys', {
    configurable: true,
    get: function () {
      var size = this.size;
      var list = ArrayList_init(size);
      for (var index = 0; index < size; index++) {
        list.add_11rb$(ensureNotNull(this.delegate_0.key(index)));
      }
      return toSet(list);
    }
  });
  Object.defineProperty(JsSettings.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.delegate_0.length;
    }
  });
  JsSettings.prototype.clear = function () {
    this.delegate_0.clear();
  };
  JsSettings.prototype.remove_61zpoe$ = function (key) {
    this.delegate_0.removeItem(key);
  };
  JsSettings.prototype.hasKey_61zpoe$ = function (key) {
    return this.delegate_0[key] != null;
  };
  JsSettings.prototype.putInt_bm4lxs$ = function (key, value) {
    this.delegate_0[key] = value.toString();
  };
  JsSettings.prototype.getInt_bm4lxs$$default = function (key, defaultValue) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.delegate_0[key]) != null ? toInt(tmp$) : null) != null ? tmp$_0 : defaultValue;
  };
  JsSettings.prototype.getIntOrNull_61zpoe$ = function (key) {
    var tmp$;
    return (tmp$ = this.delegate_0[key]) != null ? toIntOrNull(tmp$) : null;
  };
  JsSettings.prototype.putLong_4wgjuj$ = function (key, value) {
    this.delegate_0[key] = value.toString();
  };
  JsSettings.prototype.getLong_4wgjuj$$default = function (key, defaultValue) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.delegate_0[key]) != null ? toLong(tmp$) : null) != null ? tmp$_0 : defaultValue;
  };
  JsSettings.prototype.getLongOrNull_61zpoe$ = function (key) {
    var tmp$;
    return (tmp$ = this.delegate_0[key]) != null ? toLongOrNull(tmp$) : null;
  };
  JsSettings.prototype.putString_puj7f4$ = function (key, value) {
    this.delegate_0[key] = value;
  };
  JsSettings.prototype.getString_puj7f4$$default = function (key, defaultValue) {
    var tmp$;
    return (tmp$ = this.delegate_0[key]) != null ? tmp$ : defaultValue;
  };
  JsSettings.prototype.getStringOrNull_61zpoe$ = function (key) {
    return this.delegate_0[key];
  };
  JsSettings.prototype.putFloat_9sobi5$ = function (key, value) {
    this.delegate_0[key] = value.toString();
  };
  JsSettings.prototype.getFloat_9sobi5$$default = function (key, defaultValue) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.delegate_0[key]) != null ? toDouble(tmp$) : null) != null ? tmp$_0 : defaultValue;
  };
  JsSettings.prototype.getFloatOrNull_61zpoe$ = function (key) {
    var tmp$;
    return (tmp$ = this.delegate_0[key]) != null ? toDoubleOrNull(tmp$) : null;
  };
  JsSettings.prototype.putDouble_io5o9c$ = function (key, value) {
    this.delegate_0[key] = value.toString();
  };
  JsSettings.prototype.getDouble_io5o9c$$default = function (key, defaultValue) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.delegate_0[key]) != null ? toDouble(tmp$) : null) != null ? tmp$_0 : defaultValue;
  };
  JsSettings.prototype.getDoubleOrNull_61zpoe$ = function (key) {
    var tmp$;
    return (tmp$ = this.delegate_0[key]) != null ? toDoubleOrNull(tmp$) : null;
  };
  JsSettings.prototype.putBoolean_ivxn3r$ = function (key, value) {
    this.delegate_0[key] = value.toString();
  };
  JsSettings.prototype.getBoolean_ivxn3r$$default = function (key, defaultValue) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.delegate_0[key]) != null ? toBoolean(tmp$) : null) != null ? tmp$_0 : defaultValue;
  };
  JsSettings.prototype.getBooleanOrNull_61zpoe$ = function (key) {
    var tmp$;
    return (tmp$ = this.delegate_0[key]) != null ? toBoolean(tmp$) : null;
  };
  JsSettings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsSettings',
    interfaces: [Settings]
  };
  var package$com = _.com || (_.com = {});
  var package$russhwolf = package$com.russhwolf || (package$com.russhwolf = {});
  var package$settings = package$russhwolf.settings || (package$russhwolf.settings = {});
  package$settings.int_od77zc$ = int;
  package$settings.long_pyysnx$ = long;
  package$settings.string_n66x8o$ = string;
  package$settings.float_nv2qp7$ = float;
  package$settings.double_uckgeg$ = double;
  package$settings.boolean_o61jvl$ = boolean;
  package$settings.nullableInt_d1w6g6$ = nullableInt;
  package$settings.nullableLong_d1w6g6$ = nullableLong;
  package$settings.nullableString_d1w6g6$ = nullableString;
  package$settings.nullableFloat_d1w6g6$ = nullableFloat;
  package$settings.nullableDouble_d1w6g6$ = nullableDouble;
  package$settings.nullableBoolean_d1w6g6$ = nullableBoolean;
  $$importsForInline$$['MultiplatformSettings-multiplatform-settings-js-legacy'] = _;
  package$settings.ExperimentalSettingsApi = ExperimentalSettingsApi;
  package$settings.ExperimentalSettingsImplementation = ExperimentalSettingsImplementation;
  package$settings.ExperimentalListener = ExperimentalListener;
  package$settings.addIntListener_a82jlx$ = addIntListener;
  package$settings.addIntOrNullListener_7v8vj8$ = addIntOrNullListener;
  package$settings.addLongListener_z47kez$ = addLongListener;
  package$settings.addLongOrNullListener_l19fov$ = addLongOrNullListener;
  package$settings.addStringListener_y6ocmp$ = addStringListener;
  package$settings.addStringOrNullListener_u9y746$ = addStringOrNullListener;
  package$settings.addFloatListener_9bcja3$ = addFloatListener;
  package$settings.addFloatOrNullListener_886jpr$ = addFloatOrNullListener;
  package$settings.addDoubleListener_2cmzyn$ = addDoubleListener;
  package$settings.addDoubleOrNullListener_38ve4m$ = addDoubleOrNullListener;
  package$settings.addBooleanListener_uorcm3$ = addBooleanListener;
  package$settings.addBooleanOrNullListener_7z07pf$ = addBooleanOrNullListener;
  package$settings.contains_45tf0n$ = contains;
  package$settings.minusAssign_45tf0n$ = minusAssign;
  package$settings.get_atbrgr$ = get_0;
  package$settings.get_jwhk3a$ = get_1;
  package$settings.get_mbjk0b$ = get_2;
  package$settings.get_me8use$ = get_3;
  package$settings.get_f560uj$ = get_4;
  package$settings.get_dtlb3i$ = get_5;
  package$settings.set_atbrgr$ = set;
  package$settings.set_jwhk3a$ = set_0;
  package$settings.set_mbjk0b$ = set_1;
  package$settings.set_me8use$ = set_2;
  package$settings.set_f560uj$ = set_3;
  package$settings.set_dtlb3i$ = set_4;
  package$settings.set_4oalx0$ = set_6;
  Object.defineProperty(Settings, 'Companion', {
    get: Settings$Companion_getInstance
  });
  Settings.Factory = Settings$Factory;
  package$settings.Settings = Settings;
  package$settings.ObservableSettings = ObservableSettings;
  package$settings.SettingsListener = SettingsListener;
  package$settings.ExperimentalJs = ExperimentalJs;
  package$settings.JsSettings = JsSettings;
  ObservableSettings.prototype.getInt_bm4lxs$ = Settings.prototype.getInt_bm4lxs$;
  ObservableSettings.prototype.getLong_4wgjuj$ = Settings.prototype.getLong_4wgjuj$;
  ObservableSettings.prototype.getString_puj7f4$ = Settings.prototype.getString_puj7f4$;
  ObservableSettings.prototype.getFloat_9sobi5$ = Settings.prototype.getFloat_9sobi5$;
  ObservableSettings.prototype.getDouble_io5o9c$ = Settings.prototype.getDouble_io5o9c$;
  ObservableSettings.prototype.getBoolean_ivxn3r$ = Settings.prototype.getBoolean_ivxn3r$;
  JsSettings.prototype.getInt_bm4lxs$ = Settings.prototype.getInt_bm4lxs$;
  JsSettings.prototype.getLong_4wgjuj$ = Settings.prototype.getLong_4wgjuj$;
  JsSettings.prototype.getString_puj7f4$ = Settings.prototype.getString_puj7f4$;
  JsSettings.prototype.getFloat_9sobi5$ = Settings.prototype.getFloat_9sobi5$;
  JsSettings.prototype.getDouble_io5o9c$ = Settings.prototype.getDouble_io5o9c$;
  JsSettings.prototype.getBoolean_ivxn3r$ = Settings.prototype.getBoolean_ivxn3r$;
  Kotlin.defineModule('MultiplatformSettings-multiplatform-settings-js-legacy', _);
  return _;
}));

//# sourceMappingURL=MultiplatformSettings-multiplatform-settings-js-legacy.js.map
