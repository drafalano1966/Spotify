(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'Essenty-utils-internal-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('Essenty-utils-internal-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Essenty-instance-keeper-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Essenty-instance-keeper-js-legacy'.");
    }if (typeof this['Essenty-utils-internal-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-instance-keeper-js-legacy'. Its dependency 'Essenty-utils-internal-js-legacy' was not found. Please, check whether 'Essenty-utils-internal-js-legacy' is loaded prior to 'Essenty-instance-keeper-js-legacy'.");
    }root['Essenty-instance-keeper-js-legacy'] = factory(typeof this['Essenty-instance-keeper-js-legacy'] === 'undefined' ? {} : this['Essenty-instance-keeper-js-legacy'], kotlin, this['Essenty-utils-internal-js-legacy']);
  }
}(this, function (_, Kotlin, $module$Essenty_utils_internal_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var ensureNeverFrozen = $module$Essenty_utils_internal_js_legacy.com.arkivanov.essenty.utils.internal.ensureNeverFrozen_irb06o$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Map = Kotlin.kotlin.collections.Map;
  var throwCCE = Kotlin.throwCCE;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  function DefaultInstanceKeeperDispatcher() {
    ensureNeverFrozen(this);
    this.map_0 = HashMap_init();
  }
  DefaultInstanceKeeperDispatcher.prototype.get_za3rmp$ = function (key) {
    return this.map_0.get_11rb$(key);
  };
  DefaultInstanceKeeperDispatcher.prototype.put_fz40mb$ = function (key, instance) {
    var $receiver = this.map_0;
    var tmp$;
    if (!!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      var message = 'Another instance is already associated with the key: ' + key.toString();
      throw IllegalStateException_init(message.toString());
    }this.map_0.put_xwzc9p$(key, instance);
  };
  DefaultInstanceKeeperDispatcher.prototype.remove_za3rmp$ = function (key) {
    return this.map_0.remove_11rb$(key);
  };
  DefaultInstanceKeeperDispatcher.prototype.destroy = function () {
    var tmp$;
    tmp$ = this.map_0.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.onDestroy();
    }
    this.map_0.clear();
  };
  DefaultInstanceKeeperDispatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultInstanceKeeperDispatcher',
    interfaces: [InstanceKeeperDispatcher]
  };
  function InstanceKeeper() {
  }
  function InstanceKeeper$Instance() {
  }
  InstanceKeeper$Instance.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Instance',
    interfaces: []
  };
  InstanceKeeper.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InstanceKeeper',
    interfaces: []
  };
  function InstanceKeeperDispatcher() {
  }
  InstanceKeeperDispatcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InstanceKeeperDispatcher',
    interfaces: [InstanceKeeper]
  };
  function InstanceKeeperDispatcher_0() {
    return new DefaultInstanceKeeperDispatcher();
  }
  var getOrCreate = defineInlineFunction('Essenty-instance-keeper-js-legacy.com.arkivanov.essenty.instancekeeper.getOrCreate_st27ol$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, key, factory) {
      var tmp$;
      var instance = (tmp$ = $receiver.get_za3rmp$(key)) == null || isT(tmp$) ? tmp$ : throwCCE();
      if (instance == null) {
        instance = factory();
        $receiver.put_fz40mb$(key, instance);
      }return instance;
    };
  }));
  var getOrCreate_0 = defineInlineFunction('Essenty-instance-keeper-js-legacy.com.arkivanov.essenty.instancekeeper.getOrCreate_e1n6ue$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, factory) {
      var key = getKClass(T_0);
      var tmp$;
      var instance = (tmp$ = $receiver.get_za3rmp$(key)) == null || isT(tmp$) ? tmp$ : throwCCE();
      if (instance == null) {
        instance = factory();
        $receiver.put_fz40mb$(key, instance);
      }return instance;
    };
  }));
  function InstanceKeeperOwner() {
  }
  InstanceKeeperOwner.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InstanceKeeperOwner',
    interfaces: []
  };
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$essenty = package$arkivanov.essenty || (package$arkivanov.essenty = {});
  var package$instancekeeper = package$essenty.instancekeeper || (package$essenty.instancekeeper = {});
  package$instancekeeper.DefaultInstanceKeeperDispatcher = DefaultInstanceKeeperDispatcher;
  InstanceKeeper.Instance = InstanceKeeper$Instance;
  package$instancekeeper.InstanceKeeper = InstanceKeeper;
  package$instancekeeper.InstanceKeeperDispatcher = InstanceKeeperDispatcher;
  package$instancekeeper.instanceKeeperDispatcher = InstanceKeeperDispatcher_0;
  $$importsForInline$$['Essenty-instance-keeper-js-legacy'] = _;
  package$instancekeeper.InstanceKeeperOwner = InstanceKeeperOwner;
  Kotlin.defineModule('Essenty-instance-keeper-js-legacy', _);
  return _;
}));

//# sourceMappingURL=Essenty-instance-keeper-js-legacy.js.map
