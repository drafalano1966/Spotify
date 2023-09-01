(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Stately-stately-concurrency-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Stately-stately-concurrency-js-legacy'.");
    }root['Stately-stately-concurrency-js-legacy'] = factory(typeof this['Stately-stately-concurrency-js-legacy'] === 'undefined' ? {} : this['Stately-stately-concurrency-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var equals = Kotlin.equals;
  var L1 = Kotlin.Long.ONE;
  var L_1 = Kotlin.Long.NEG_ONE;
  function AtomicBoolean(value_) {
    this.atom_0 = new AtomicInt(this.boolToInt_0(value_));
  }
  Object.defineProperty(AtomicBoolean.prototype, 'value', {
    configurable: true,
    get: function () {
      return get_value(this.atom_0) !== 0;
    },
    set: function (value) {
      set_value(this.atom_0, this.boolToInt_0(value));
    }
  });
  AtomicBoolean.prototype.compareAndSet_dqye30$ = function (expected, new_0) {
    return this.atom_0.compareAndSet_vux9f0$(this.boolToInt_0(expected), this.boolToInt_0(new_0));
  };
  AtomicBoolean.prototype.boolToInt_0 = function (b) {
    if (b) {
      return 1;
    } else {
      return 0;
    }
  };
  AtomicBoolean.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicBoolean',
    interfaces: []
  };
  function get_value($receiver) {
    return $receiver.get();
  }
  function set_value($receiver, value) {
    $receiver.set_za3lpa$(value);
  }
  function get_value_0($receiver) {
    return $receiver.get();
  }
  function set_value_0($receiver, value) {
    $receiver.set_s8cxhz$(value);
  }
  function get_value_1($receiver) {
    return $receiver.get();
  }
  function set_value_1($receiver, value) {
    $receiver.set_11rb$(value);
  }
  var withLock = defineInlineFunction('Stately-stately-concurrency-js-legacy.co.touchlab.stately.concurrency.withLock_ywt67d$', function ($receiver, block) {
    $receiver.lock();
    try {
      return block();
    }finally {
      $receiver.unlock();
    }
  });
  function get_value_2($receiver) {
    return $receiver.get();
  }
  function set_value_2($receiver, value) {
    $receiver.set_11rb$(value);
  }
  function AtomicInt(initialValue) {
    this.internalValue_0 = initialValue;
  }
  AtomicInt.prototype.addAndGet_za3lpa$ = function (delta) {
    this.internalValue_0 = this.internalValue_0 + delta | 0;
    return this.internalValue_0;
  };
  AtomicInt.prototype.compareAndSet_vux9f0$ = function (expected, new_0) {
    var tmp$;
    if (expected === this.internalValue_0) {
      this.internalValue_0 = new_0;
      tmp$ = true;
    } else {
      tmp$ = false;
    }
    return tmp$;
  };
  AtomicInt.prototype.get = function () {
    return this.internalValue_0;
  };
  AtomicInt.prototype.set_za3lpa$ = function (newValue) {
    this.internalValue_0 = newValue;
  };
  AtomicInt.prototype.incrementAndGet = function () {
    return this.addAndGet_za3lpa$(1);
  };
  AtomicInt.prototype.decrementAndGet = function () {
    return this.addAndGet_za3lpa$(-1);
  };
  AtomicInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicInt',
    interfaces: []
  };
  function AtomicLong(initialValue) {
    this.internalValue_0 = initialValue;
  }
  AtomicLong.prototype.addAndGet_s8cxhz$ = function (delta) {
    this.internalValue_0 = this.internalValue_0.add(delta);
    return this.internalValue_0;
  };
  AtomicLong.prototype.compareAndSet_3pjtqy$ = function (expected, new_0) {
    var tmp$;
    if (equals(expected, this.internalValue_0)) {
      this.internalValue_0 = new_0;
      tmp$ = true;
    } else {
      tmp$ = false;
    }
    return tmp$;
  };
  AtomicLong.prototype.get = function () {
    return this.internalValue_0;
  };
  AtomicLong.prototype.set_s8cxhz$ = function (newValue) {
    this.internalValue_0 = newValue;
  };
  AtomicLong.prototype.incrementAndGet = function () {
    return this.addAndGet_s8cxhz$(L1);
  };
  AtomicLong.prototype.decrementAndGet = function () {
    return this.addAndGet_s8cxhz$(L_1);
  };
  AtomicLong.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicLong',
    interfaces: []
  };
  function AtomicReference(initialValue) {
    this.internalValue_0 = initialValue;
  }
  AtomicReference.prototype.compareAndSet_xwzc9q$ = function (expected, new_0) {
    var tmp$;
    if (expected === this.internalValue_0) {
      this.internalValue_0 = new_0;
      tmp$ = true;
    } else {
      tmp$ = false;
    }
    return tmp$;
  };
  AtomicReference.prototype.get = function () {
    return this.internalValue_0;
  };
  AtomicReference.prototype.set_11rb$ = function (value_) {
    this.internalValue_0 = value_;
  };
  AtomicReference.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicReference',
    interfaces: []
  };
  function Lock() {
  }
  Lock.prototype.lock = function () {
  };
  Lock.prototype.unlock = function () {
  };
  Lock.prototype.tryLock = function () {
    return true;
  };
  Lock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Lock',
    interfaces: []
  };
  var close = defineInlineFunction('Stately-stately-concurrency-js-legacy.co.touchlab.stately.concurrency.close_v87w7v$', function ($receiver) {
  });
  function ThreadLocalRef() {
    this.localValue_rg6hz3$_0 = null;
  }
  ThreadLocalRef.prototype.remove = function () {
    set_value_2(this, null);
  };
  ThreadLocalRef.prototype.get = function () {
    return this.localValue_rg6hz3$_0;
  };
  ThreadLocalRef.prototype.set_11rb$ = function (value) {
    this.localValue_rg6hz3$_0 = value;
  };
  ThreadLocalRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThreadLocalRef',
    interfaces: []
  };
  function ThreadRef() {
  }
  ThreadRef.prototype.same = function () {
    return true;
  };
  ThreadRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThreadRef',
    interfaces: []
  };
  var package$co = _.co || (_.co = {});
  var package$touchlab = package$co.touchlab || (package$co.touchlab = {});
  var package$stately = package$touchlab.stately || (package$touchlab.stately = {});
  var package$concurrency = package$stately.concurrency || (package$stately.concurrency = {});
  package$concurrency.AtomicBoolean = AtomicBoolean;
  package$concurrency.get_value_tcdsr8$ = get_value;
  package$concurrency.set_value_5mkqfe$ = set_value;
  package$concurrency.get_value_dox0jl$ = get_value_0;
  package$concurrency.set_value_5rs5qi$ = set_value_0;
  package$concurrency.get_value_tj9aa6$ = get_value_1;
  package$concurrency.set_value_fmva18$ = set_value_1;
  $$importsForInline$$['Stately-stately-concurrency-js-legacy'] = _;
  package$concurrency.withLock_ywt67d$ = withLock;
  package$concurrency.get_value_fv8jfa$ = get_value_2;
  package$concurrency.set_value_3z634g$ = set_value_2;
  package$concurrency.AtomicInt = AtomicInt;
  package$concurrency.AtomicLong = AtomicLong;
  package$concurrency.AtomicReference = AtomicReference;
  package$concurrency.Lock = Lock;
  package$concurrency.close_v87w7v$ = close;
  package$concurrency.ThreadLocalRef = ThreadLocalRef;
  package$concurrency.ThreadRef = ThreadRef;
  Kotlin.defineModule('Stately-stately-concurrency-js-legacy', _);
  return _;
}));

//# sourceMappingURL=Stately-stately-concurrency-js-legacy.js.map
