(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-utils-internal-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MVIKotlin-utils-internal-js-legacy'.");
    }root['MVIKotlin-utils-internal-js-legacy'] = factory(typeof this['MVIKotlin-utils-internal-js-legacy'] === 'undefined' ? {} : this['MVIKotlin-utils-internal-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function AtomicRef() {
  }
  AtomicRef.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AtomicRef',
    interfaces: []
  };
  function AtomicBoolean() {
  }
  AtomicBoolean.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AtomicBoolean',
    interfaces: []
  };
  function AtomicInt() {
  }
  AtomicInt.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AtomicInt',
    interfaces: []
  };
  function atomic() {
    return atomic_0(null);
  }
  function initialize($receiver, value) {
    if (!$receiver.compareAndSet_xwzc9q$(null, value)) {
      throw IllegalStateException_init('Value is already initialized: ' + $receiver);
    }}
  function requireValue($receiver) {
    var value = $receiver.value;
    var requireNotNull$result;
    if (value == null) {
      var message = 'Value was not initialized';
      throw IllegalArgumentException_init(message.toString());
    } else {
      requireNotNull$result = value;
    }
    return requireNotNull$result;
  }
  function getValue($receiver, thisRef, property) {
    return $receiver.value;
  }
  function setValue($receiver, thisRef, property, value) {
    $receiver.value = value;
  }
  function getValue_0($receiver, thisRef, property) {
    return $receiver.value;
  }
  function setValue_0($receiver, thisRef, property, value) {
    $receiver.value = value;
  }
  function getValue_1($receiver, thisRef, property) {
    return $receiver.value;
  }
  function setValue_1($receiver, thisRef, property, value) {
    $receiver.value = value;
  }
  function getAndUpdate($receiver, block) {
    var oldValue;
    do {
      oldValue = $receiver.value;
    }
     while (!$receiver.compareAndSet_xwzc9q$(oldValue, block(oldValue)));
    return oldValue;
  }
  var LOG_TAG;
  function withLogTag($receiver) {
    return '[' + LOG_TAG + ']: ' + $receiver;
  }
  var isAssertOnMainThreadEnabled;
  var isAssertOnMainThreadEnabled_metadata = new PropertyMetadata('isAssertOnMainThreadEnabled');
  function get_isAssertOnMainThreadEnabled() {
    return getValue(isAssertOnMainThreadEnabled, this, isAssertOnMainThreadEnabled_metadata);
  }
  function set_isAssertOnMainThreadEnabled(isAssertOnMainThreadEnabled_0) {
    setValue(isAssertOnMainThreadEnabled, this, isAssertOnMainThreadEnabled_metadata, isAssertOnMainThreadEnabled_0);
  }
  var mainThreadIdRef;
  function assertOnMainThread() {
    if (get_isAssertOnMainThreadEnabled()) {
      if (!isMainThread()) {
        var message = 'Not on Main thread, current thread is: ' + getCurrentThreadDescription();
        throw IllegalArgumentException_init(message.toString());
      }}}
  function isMainThread() {
    var tmp$, tmp$_0;
    var $receiver = mainThreadIdRef;
    var initAndGet$result;
    initAndGet$break: do {
      while (true) {
        var v = $receiver.value;
        if (v != null) {
          initAndGet$result = v;
          break initAndGet$break;
        }var id = getMainThreadId();
        if (id == null) {
          logE('Main thread id is undefined, main thread assert is disabled');
        }v = new MainThreadIdHolder(id);
        if ($receiver.compareAndSet_xwzc9q$(null, v)) {
          initAndGet$result = v;
          break initAndGet$break;
        }}
    }
     while (false);
    var mainThreadId = initAndGet$result;
    return (tmp$_0 = (tmp$ = mainThreadId.id) != null ? isMainThread_0(tmp$) : null) != null ? tmp$_0 : true;
  }
  function initAndGet($receiver, init) {
    while (true) {
      var v = $receiver.value;
      if (v != null) {
        return v;
      }v = init();
      if ($receiver.compareAndSet_xwzc9q$(null, v)) {
        return v;
      }}
  }
  function MainThreadIdHolder(id) {
    this.id = id;
  }
  MainThreadIdHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainThreadIdHolder',
    interfaces: []
  };
  function atomic_0(value) {
    return new AtomicRefImpl(value);
  }
  function AtomicRefImpl(value) {
    this.value_ghnrqi$_0 = value;
  }
  Object.defineProperty(AtomicRefImpl.prototype, 'value', {
    get: function () {
      return this.value_ghnrqi$_0;
    },
    set: function (value) {
      this.value_ghnrqi$_0 = value;
    }
  });
  AtomicRefImpl.prototype.compareAndSet_xwzc9q$ = function (expected, new_0) {
    if (this.value === expected) {
      this.value = new_0;
      return true;
    } else {
      return false;
    }
  };
  AtomicRefImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicRefImpl',
    interfaces: [AtomicRef]
  };
  function atomic_1(value) {
    return new AtomicBooleanImpl(value);
  }
  function AtomicBooleanImpl(value) {
    this.value_pddtep$_0 = value;
  }
  Object.defineProperty(AtomicBooleanImpl.prototype, 'value', {
    get: function () {
      return this.value_pddtep$_0;
    },
    set: function (value) {
      this.value_pddtep$_0 = value;
    }
  });
  AtomicBooleanImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicBooleanImpl',
    interfaces: [AtomicBoolean]
  };
  function atomic_2(value) {
    return new AtomicIntImpl(value);
  }
  function AtomicIntImpl(value) {
    this.value_q212py$_0 = value;
  }
  Object.defineProperty(AtomicIntImpl.prototype, 'value', {
    get: function () {
      return this.value_q212py$_0;
    },
    set: function (value) {
      this.value_q212py$_0 = value;
    }
  });
  AtomicIntImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicIntImpl',
    interfaces: [AtomicInt]
  };
  function logV(text) {
    console.log(withLogTag(text));
  }
  function logE(text) {
    console.error(withLogTag(text));
  }
  function getMainThreadId() {
    return new MainThreadId();
  }
  function isMainThread_0(mainThreadId) {
    return true;
  }
  function getCurrentThreadDescription() {
    return 'Main thread';
  }
  function MainThreadId() {
  }
  MainThreadId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainThreadId',
    interfaces: []
  };
  function ensureNeverFrozen($receiver) {
    return $receiver;
  }
  function freeze($receiver) {
    return $receiver;
  }
  function get_isFrozen($receiver) {
    return false;
  }
  function IsolatedRef(value) {
    this.value = value;
  }
  IsolatedRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsolatedRef',
    interfaces: []
  };
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$mvikotlin = package$arkivanov.mvikotlin || (package$arkivanov.mvikotlin = {});
  var package$utils = package$mvikotlin.utils || (package$mvikotlin.utils = {});
  var package$internal = package$utils.internal || (package$utils.internal = {});
  package$internal.AtomicRef = AtomicRef;
  package$internal.AtomicBoolean = AtomicBoolean;
  package$internal.AtomicInt = AtomicInt;
  package$internal.atomic_30y1fr$ = atomic;
  package$internal.initialize_1hlm9$ = initialize;
  package$internal.requireValue_2p8z43$ = requireValue;
  package$internal.getValue_iv1vl5$ = getValue;
  package$internal.setValue_vdyhaa$ = setValue;
  package$internal.getValue_yo0geo$ = getValue_0;
  package$internal.setValue_xnwllu$ = setValue_0;
  package$internal.getValue_7q65s$ = getValue_1;
  package$internal.setValue_dvyc16$ = setValue_1;
  package$internal.getAndUpdate_nomvim$ = getAndUpdate;
  Object.defineProperty(package$internal, 'LOG_TAG_8be2vx$', {
    get: function () {
      return LOG_TAG;
    }
  });
  package$internal.withLogTag_7efafi$ = withLogTag;
  Object.defineProperty(package$internal, 'isAssertOnMainThreadEnabled', {
    get: get_isAssertOnMainThreadEnabled,
    set: set_isAssertOnMainThreadEnabled
  });
  package$internal.assertOnMainThread = assertOnMainThread;
  $$importsForInline$$['MVIKotlin-utils-internal-js-legacy'] = _;
  package$internal.isMainThread = isMainThread;
  package$internal.atomic_mh5how$ = atomic_0;
  package$internal.atomic_6taknv$ = atomic_1;
  package$internal.atomic_za3lpa$ = atomic_2;
  package$internal.logV_61zpoe$ = logV;
  package$internal.logE_61zpoe$ = logE;
  package$internal.getMainThreadId_8be2vx$ = getMainThreadId;
  package$internal.isMainThread_lvqq48$ = isMainThread_0;
  package$internal.getCurrentThreadDescription_8be2vx$ = getCurrentThreadDescription;
  package$internal.MainThreadId = MainThreadId;
  package$internal.ensureNeverFrozen_irb06o$ = ensureNeverFrozen;
  package$internal.freeze_irb06o$ = freeze;
  package$internal.get_isFrozen_s8jyvk$ = get_isFrozen;
  package$internal.IsolatedRef = IsolatedRef;
  LOG_TAG = 'MVIKotlin';
  isAssertOnMainThreadEnabled = atomic_1(true);
  mainThreadIdRef = atomic_0(null);
  Kotlin.defineModule('MVIKotlin-utils-internal-js-legacy', _);
  return _;
}));

//# sourceMappingURL=MVIKotlin-utils-internal-js-legacy.js.map
