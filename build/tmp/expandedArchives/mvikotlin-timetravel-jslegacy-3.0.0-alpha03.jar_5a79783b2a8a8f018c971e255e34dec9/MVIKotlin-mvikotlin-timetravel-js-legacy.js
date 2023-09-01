(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'MVIKotlin-mvikotlin-js-legacy', 'MVIKotlin-utils-internal-js-legacy', 'MVIKotlin-rx-js-legacy', 'MVIKotlin-rx-internal-js-legacy', 'MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('MVIKotlin-mvikotlin-js-legacy'), require('MVIKotlin-utils-internal-js-legacy'), require('MVIKotlin-rx-js-legacy'), require('MVIKotlin-rx-internal-js-legacy'), require('MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-timetravel-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MVIKotlin-mvikotlin-timetravel-js-legacy'.");
    }if (typeof this['MVIKotlin-mvikotlin-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-timetravel-js-legacy'. Its dependency 'MVIKotlin-mvikotlin-js-legacy' was not found. Please, check whether 'MVIKotlin-mvikotlin-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-timetravel-js-legacy'.");
    }if (typeof this['MVIKotlin-utils-internal-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-timetravel-js-legacy'. Its dependency 'MVIKotlin-utils-internal-js-legacy' was not found. Please, check whether 'MVIKotlin-utils-internal-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-timetravel-js-legacy'.");
    }if (typeof this['MVIKotlin-rx-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-timetravel-js-legacy'. Its dependency 'MVIKotlin-rx-js-legacy' was not found. Please, check whether 'MVIKotlin-rx-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-timetravel-js-legacy'.");
    }if (typeof this['MVIKotlin-rx-internal-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-timetravel-js-legacy'. Its dependency 'MVIKotlin-rx-internal-js-legacy' was not found. Please, check whether 'MVIKotlin-rx-internal-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-timetravel-js-legacy'.");
    }if (typeof this['MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-timetravel-js-legacy'. Its dependency 'MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy' was not found. Please, check whether 'MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy' is loaded prior to 'MVIKotlin-mvikotlin-timetravel-js-legacy'.");
    }root['MVIKotlin-mvikotlin-timetravel-js-legacy'] = factory(typeof this['MVIKotlin-mvikotlin-timetravel-js-legacy'] === 'undefined' ? {} : this['MVIKotlin-mvikotlin-timetravel-js-legacy'], kotlin, this['MVIKotlin-mvikotlin-js-legacy'], this['MVIKotlin-utils-internal-js-legacy'], this['MVIKotlin-rx-js-legacy'], this['MVIKotlin-rx-internal-js-legacy'], this['MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy']);
  }
}(this, function (_, Kotlin, $module$MVIKotlin_mvikotlin_js_legacy, $module$MVIKotlin_utils_internal_js_legacy, $module$MVIKotlin_rx_js_legacy, $module$MVIKotlin_rx_internal_js_legacy, $module$MVIKotlin_mvikotlin_timetravel_proto_internal_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var JvmSerializable = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.utils.JvmSerializable;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var assertOnMainThread = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.utils.assertOnMainThread;
  var toString = Kotlin.toString;
  var logE = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.logE_61zpoe$;
  var Unit = Kotlin.kotlin.Unit;
  var observer = $module$MVIKotlin_rx_js_legacy.com.arkivanov.mvikotlin.rx.observer_jwhn2g$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var equals = Kotlin.equals;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var StoreEventType = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.StoreEventType;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var ArrayDeque_init = Kotlin.kotlin.collections.ArrayDeque_init_287e2$;
  var ensureNeverFrozen = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.ensureNeverFrozen_irb06o$;
  var L1 = Kotlin.Long.ONE;
  var BehaviorSubject = $module$MVIKotlin_rx_internal_js_legacy.com.arkivanov.mvikotlin.rx.internal.BehaviorSubject_mh5how$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Map = Kotlin.kotlin.collections.Map;
  var throwCCE = Kotlin.throwCCE;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ValueParser = $module$MVIKotlin_mvikotlin_timetravel_proto_internal_js_legacy.com.arkivanov.mvikotlin.timetravel.proto.internal.data.value.ValueParser;
  var TimeTravelEvent = $module$MVIKotlin_mvikotlin_timetravel_proto_internal_js_legacy.com.arkivanov.mvikotlin.timetravel.proto.internal.data.timetravelevent.TimeTravelEvent;
  var StoreEventType_0 = $module$MVIKotlin_mvikotlin_timetravel_proto_internal_js_legacy.com.arkivanov.mvikotlin.timetravel.proto.internal.data.storeeventtype.StoreEventType;
  var TimeTravelStateUpdate$Mode = $module$MVIKotlin_mvikotlin_timetravel_proto_internal_js_legacy.com.arkivanov.mvikotlin.timetravel.proto.internal.data.timetravelstateupdate.TimeTravelStateUpdate.Mode;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var TimeTravelStateUpdate = $module$MVIKotlin_mvikotlin_timetravel_proto_internal_js_legacy.com.arkivanov.mvikotlin.timetravel.proto.internal.data.timetravelstateupdate.TimeTravelStateUpdate;
  var TimeTravelEventsUpdate$All = $module$MVIKotlin_mvikotlin_timetravel_proto_internal_js_legacy.com.arkivanov.mvikotlin.timetravel.proto.internal.data.timetraveleventsupdate.TimeTravelEventsUpdate.All;
  var TimeTravelEventsUpdate$New = $module$MVIKotlin_mvikotlin_timetravel_proto_internal_js_legacy.com.arkivanov.mvikotlin.timetravel.proto.internal.data.timetraveleventsupdate.TimeTravelEventsUpdate.New;
  var Store = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.Store;
  var StoreFactory = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.StoreFactory;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var getValue = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.getValue_7q65s$;
  var setValue = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.setValue_dvyc16$;
  var Executor$Callbacks = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.Executor.Callbacks;
  var getValue_0 = Kotlin.kotlin.collections.getValue_t9ocha$;
  var Any = Object;
  var atomic = $module$MVIKotlin_utils_internal_js_legacy.com.arkivanov.mvikotlin.utils.internal.atomic_mh5how$;
  var PublishSubject = $module$MVIKotlin_rx_internal_js_legacy.com.arkivanov.mvikotlin.rx.internal.PublishSubject_287e2$;
  var StoreEventType$values = $module$MVIKotlin_mvikotlin_js_legacy.com.arkivanov.mvikotlin.core.store.StoreEventType.values;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var getValue_1 = $module$MVIKotlin_rx_internal_js_legacy.$$importsForInline$$['MVIKotlin-utils-internal-js-legacy'].com.arkivanov.mvikotlin.utils.internal.getValue_iv1vl5$;
  var setValue_0 = $module$MVIKotlin_rx_internal_js_legacy.$$importsForInline$$['MVIKotlin-utils-internal-js-legacy'].com.arkivanov.mvikotlin.utils.internal.setValue_vdyhaa$;
  var atomic_0 = $module$MVIKotlin_rx_internal_js_legacy.$$importsForInline$$['MVIKotlin-utils-internal-js-legacy'].com.arkivanov.mvikotlin.utils.internal.atomic_6taknv$;
  var Disposable = $module$MVIKotlin_rx_internal_js_legacy.$$importsForInline$$['MVIKotlin-rx-js-legacy'].com.arkivanov.mvikotlin.rx.Disposable;
  TimeTravelState$Mode.prototype = Object.create(Enum.prototype);
  TimeTravelState$Mode.prototype.constructor = TimeTravelState$Mode;
  TimeTravelExportSerializer$Result$Success.prototype = Object.create(TimeTravelExportSerializer$Result.prototype);
  TimeTravelExportSerializer$Result$Success.prototype.constructor = TimeTravelExportSerializer$Result$Success;
  TimeTravelExportSerializer$Result$Error.prototype = Object.create(TimeTravelExportSerializer$Result.prototype);
  TimeTravelExportSerializer$Result$Error.prototype.constructor = TimeTravelExportSerializer$Result$Error;
  function TimeTravelEvent_0(id, storeName, type, value, state) {
    this.id = id;
    this.storeName = storeName;
    this.type = type;
    this.value = value;
    this.state = state;
  }
  TimeTravelEvent_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeTravelEvent',
    interfaces: [JvmSerializable]
  };
  TimeTravelEvent_0.prototype.component1 = function () {
    return this.id;
  };
  TimeTravelEvent_0.prototype.component2 = function () {
    return this.storeName;
  };
  TimeTravelEvent_0.prototype.component3 = function () {
    return this.type;
  };
  TimeTravelEvent_0.prototype.component4 = function () {
    return this.value;
  };
  TimeTravelEvent_0.prototype.component5 = function () {
    return this.state;
  };
  TimeTravelEvent_0.prototype.copy_telnv3$ = function (id, storeName, type, value, state) {
    return new TimeTravelEvent_0(id === void 0 ? this.id : id, storeName === void 0 ? this.storeName : storeName, type === void 0 ? this.type : type, value === void 0 ? this.value : value, state === void 0 ? this.state : state);
  };
  TimeTravelEvent_0.prototype.toString = function () {
    return 'TimeTravelEvent(id=' + Kotlin.toString(this.id) + (', storeName=' + Kotlin.toString(this.storeName)) + (', type=' + Kotlin.toString(this.type)) + (', value=' + Kotlin.toString(this.value)) + (', state=' + Kotlin.toString(this.state)) + ')';
  };
  TimeTravelEvent_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.storeName) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    return result;
  };
  TimeTravelEvent_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.storeName, other.storeName) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.state, other.state)))));
  };
  function TimeTravelState(events, selectedEventIndex, mode) {
    if (events === void 0)
      events = emptyList();
    if (selectedEventIndex === void 0)
      selectedEventIndex = -1;
    if (mode === void 0)
      mode = TimeTravelState$Mode$IDLE_getInstance();
    this.events = events;
    this.selectedEventIndex = selectedEventIndex;
    this.mode = mode;
  }
  function TimeTravelState$Mode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TimeTravelState$Mode_initFields() {
    TimeTravelState$Mode_initFields = function () {
    };
    TimeTravelState$Mode$IDLE_instance = new TimeTravelState$Mode('IDLE', 0);
    TimeTravelState$Mode$RECORDING_instance = new TimeTravelState$Mode('RECORDING', 1);
    TimeTravelState$Mode$STOPPED_instance = new TimeTravelState$Mode('STOPPED', 2);
  }
  var TimeTravelState$Mode$IDLE_instance;
  function TimeTravelState$Mode$IDLE_getInstance() {
    TimeTravelState$Mode_initFields();
    return TimeTravelState$Mode$IDLE_instance;
  }
  var TimeTravelState$Mode$RECORDING_instance;
  function TimeTravelState$Mode$RECORDING_getInstance() {
    TimeTravelState$Mode_initFields();
    return TimeTravelState$Mode$RECORDING_instance;
  }
  var TimeTravelState$Mode$STOPPED_instance;
  function TimeTravelState$Mode$STOPPED_getInstance() {
    TimeTravelState$Mode_initFields();
    return TimeTravelState$Mode$STOPPED_instance;
  }
  TimeTravelState$Mode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mode',
    interfaces: [Enum]
  };
  function TimeTravelState$Mode$values() {
    return [TimeTravelState$Mode$IDLE_getInstance(), TimeTravelState$Mode$RECORDING_getInstance(), TimeTravelState$Mode$STOPPED_getInstance()];
  }
  TimeTravelState$Mode.values = TimeTravelState$Mode$values;
  function TimeTravelState$Mode$valueOf(name) {
    switch (name) {
      case 'IDLE':
        return TimeTravelState$Mode$IDLE_getInstance();
      case 'RECORDING':
        return TimeTravelState$Mode$RECORDING_getInstance();
      case 'STOPPED':
        return TimeTravelState$Mode$STOPPED_getInstance();
      default:throwISE('No enum constant com.arkivanov.mvikotlin.timetravel.TimeTravelState.Mode.' + name);
    }
  }
  TimeTravelState$Mode.valueOf_61zpoe$ = TimeTravelState$Mode$valueOf;
  TimeTravelState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeTravelState',
    interfaces: []
  };
  TimeTravelState.prototype.component1 = function () {
    return this.events;
  };
  TimeTravelState.prototype.component2 = function () {
    return this.selectedEventIndex;
  };
  TimeTravelState.prototype.component3 = function () {
    return this.mode;
  };
  TimeTravelState.prototype.copy_z9vp01$ = function (events, selectedEventIndex, mode) {
    return new TimeTravelState(events === void 0 ? this.events : events, selectedEventIndex === void 0 ? this.selectedEventIndex : selectedEventIndex, mode === void 0 ? this.mode : mode);
  };
  TimeTravelState.prototype.toString = function () {
    return 'TimeTravelState(events=' + Kotlin.toString(this.events) + (', selectedEventIndex=' + Kotlin.toString(this.selectedEventIndex)) + (', mode=' + Kotlin.toString(this.mode)) + ')';
  };
  TimeTravelState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.events) | 0;
    result = result * 31 + Kotlin.hashCode(this.selectedEventIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.mode) | 0;
    return result;
  };
  TimeTravelState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.events, other.events) && Kotlin.equals(this.selectedEventIndex, other.selectedEventIndex) && Kotlin.equals(this.mode, other.mode)))));
  };
  function TimeTravelController() {
  }
  TimeTravelController.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TimeTravelController',
    interfaces: []
  };
  function TimeTravelControllerImpl() {
    ensureNeverFrozen(this);
    this.eventId_0 = L1;
    this.stateSubject_0 = BehaviorSubject(new TimeTravelState());
    this.postponedEvents_0 = ArrayList_init();
    this.stores_0 = HashMap_init();
  }
  Object.defineProperty(TimeTravelControllerImpl.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.stateSubject_0.value;
    }
  });
  TimeTravelControllerImpl.prototype.states_8qe50$ = function (observer) {
    return this.stateSubject_0.subscribe(observer);
  };
  TimeTravelControllerImpl.prototype.attachStore_u52jqk$ = function (store, name) {
    assertOnMainThread();
    if (name != null) {
      var $receiver = this.stores_0;
      var tmp$;
      if (!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(name)) {
        this.addStore_0(store, name);
        return;
      }logE('Could not enable time travel for the store: ' + toString(name) + '. Duplicate store name.');
    }this.bypassStore_0(store);
  };
  function TimeTravelControllerImpl$addStore$lambda(this$TimeTravelControllerImpl, closure$name) {
    return function () {
      var $receiver = this$TimeTravelControllerImpl.stores_0;
      var key = closure$name;
      $receiver.remove_11rb$(key);
      return Unit;
    };
  }
  function TimeTravelControllerImpl$addStore$lambda_0(this$TimeTravelControllerImpl, closure$name) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      tmp$_0 = (tmp$ = this$TimeTravelControllerImpl.eventId_0, this$TimeTravelControllerImpl.eventId_0 = tmp$.inc(), tmp$);
      tmp$_1 = it.type;
      tmp$_2 = it.value;
      tmp$_3 = it.state;
      tmp$_4 = new TimeTravelEvent_0(tmp$_0, closure$name, tmp$_1, tmp$_2, tmp$_3);
      this$TimeTravelControllerImpl.onEvent_0(tmp$_4);
      return Unit;
    };
  }
  TimeTravelControllerImpl.prototype.addStore_0 = function (store, name) {
    this.stores_0.put_xwzc9p$(name, store);
    store.events_mvkdod$(observer(TimeTravelControllerImpl$addStore$lambda(this, name), TimeTravelControllerImpl$addStore$lambda_0(this, name)));
  };
  function TimeTravelControllerImpl$bypassStore$lambda(closure$store) {
    return function (event) {
      closure$store.process_fpuznb$(event.type, event.value);
      return Unit;
    };
  }
  TimeTravelControllerImpl.prototype.bypassStore_0 = function (store) {
    store.events_mvkdod$(observer(void 0, TimeTravelControllerImpl$bypassStore$lambda(store)));
  };
  TimeTravelControllerImpl.prototype.startRecording = function () {
    assertOnMainThread();
    if (this.state.mode === TimeTravelState$Mode$IDLE_getInstance()) {
      this.stateSubject_0.onNext(this.state.copy_z9vp01$(void 0, void 0, TimeTravelState$Mode$RECORDING_getInstance()));
    }};
  TimeTravelControllerImpl.prototype.stopRecording = function () {
    assertOnMainThread();
    if (this.state.mode === TimeTravelState$Mode$RECORDING_getInstance()) {
      var tmp$ = this.stateSubject_0;
      var it = this.state;
      tmp$.onNext(it.copy_z9vp01$(void 0, void 0, !it.events.isEmpty() ? TimeTravelState$Mode$STOPPED_getInstance() : TimeTravelState$Mode$IDLE_getInstance()));
    }};
  TimeTravelControllerImpl.prototype.moveToStart = function () {
    assertOnMainThread();
    if (this.state.mode === TimeTravelState$Mode$STOPPED_getInstance()) {
      this.move_0(this.state.events, this.state.selectedEventIndex, -1);
    }};
  TimeTravelControllerImpl.prototype.stepBackward = function () {
    assertOnMainThread();
    if (this.state.mode === TimeTravelState$Mode$STOPPED_getInstance()) {
      this.step_0(this.state.events, this.state.selectedEventIndex, false);
    }};
  TimeTravelControllerImpl.prototype.stepForward = function () {
    assertOnMainThread();
    if (this.state.mode === TimeTravelState$Mode$STOPPED_getInstance()) {
      this.step_0(this.state.events, this.state.selectedEventIndex, true);
    }};
  TimeTravelControllerImpl.prototype.moveToEnd = function () {
    assertOnMainThread();
    if (this.state.mode === TimeTravelState$Mode$STOPPED_getInstance()) {
      this.move_0(this.state.events, this.state.selectedEventIndex, get_lastIndex(this.state.events));
    }};
  TimeTravelControllerImpl.prototype.cancel = function () {
    assertOnMainThread();
    if (this.state.mode !== TimeTravelState$Mode$IDLE_getInstance()) {
      var oldMode = this.state.mode;
      this.stateSubject_0.onNext(this.state.copy_z9vp01$(emptyList(), -1, TimeTravelState$Mode$IDLE_getInstance()));
      if (oldMode !== TimeTravelState$Mode$RECORDING_getInstance()) {
        var tmp$;
        tmp$ = this.stores_0.values.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          element.restoreState();
        }
        var tmp$_0;
        tmp$_0 = this.postponedEvents_0.iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          this.process_0(element_0);
        }
      }this.postponedEvents_0.clear();
    }};
  TimeTravelControllerImpl.prototype.debugEvent_s8cxhz$ = function (eventId) {
    var tmp$, tmp$_0;
    assertOnMainThread();
    if (this.state.mode === TimeTravelState$Mode$STOPPED_getInstance()) {
      var $receiver = this.state.events;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_1;
        tmp$_1 = $receiver.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          if (equals(element.id, eventId)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      tmp$ = firstOrNull$result;
      if (tmp$ == null) {
        return;
      }var event = tmp$;
      (tmp$_0 = this.stores_0.get_11rb$(event.storeName)) != null ? (tmp$_0.debug_iqrs9u$(event.type, event.value, event.state), Unit) : null;
    }};
  TimeTravelControllerImpl.prototype.export = function () {
    assertOnMainThread();
    if (!(this.state.mode === TimeTravelState$Mode$STOPPED_getInstance())) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }var $receiver = this.state.events;
    var destination = HashSet_init();
    var transform = getPropertyCallableRef('storeName', 1, function ($receiver) {
      return $receiver.storeName;
    });
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(transform(item));
    }
    var usedStoreNames = destination;
    var tmp$_0 = this.state.events;
    var $receiver_0 = this.stores_0;
    var destination_0 = LinkedHashMap_init(mapCapacity($receiver_0.size));
    var tmp$_1;
    tmp$_1 = $receiver_0.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      destination_0.put_xwzc9p$(element.key, element.value.state);
    }
    var tmp$_2;
    var result = LinkedHashMap_init_0();
    tmp$_2 = destination_0.entries.iterator();
    while (tmp$_2.hasNext()) {
      var entry = tmp$_2.next();
      if (!usedStoreNames.contains_11rb$(entry.key)) {
        result.put_xwzc9p$(entry.key, entry.value);
      }}
    return new TimeTravelExport(tmp$_0, result);
  };
  TimeTravelControllerImpl.prototype.import_lnqn8b$ = function (export_0) {
    assertOnMainThread();
    if (this.state.mode === TimeTravelState$Mode$IDLE_getInstance()) {
      this.stateSubject_0.onNext(this.state.copy_z9vp01$(export_0.recordedEvents, -1, TimeTravelState$Mode$STOPPED_getInstance()));
      var tmp$;
      tmp$ = export_0.unusedStoreStates.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var name = element.key;
        var state = element.value;
        var tmp$_0;
        (tmp$_0 = this.stores_0.get_11rb$(name)) != null ? (tmp$_0.process_fpuznb$(StoreEventType.STATE, state), Unit) : null;
      }
      this.moveToEnd();
    }};
  TimeTravelControllerImpl.prototype.onEvent_0 = function (event) {
    switch (this.state.mode.name) {
      case 'RECORDING':
        var tmp$ = this.stateSubject_0;
        var it = this.state;
        tmp$.onNext(it.copy_z9vp01$(plus(it.events, event), it.events.size));
        this.process_0(event);
        break;
      case 'IDLE':
        this.process_0(event);
        break;
      case 'STOPPED':
        if (event.type === StoreEventType.MESSAGE) {
          this.process_0(event);
        } else {
          this.postponedEvents_0.add_11rb$(event);
        }

        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  TimeTravelControllerImpl.prototype.step_0 = function (events, from, isForward) {
    var tmp$, tmp$_0;
    if (isForward) {
      tmp$ = new IntRange(from + 1 | 0, get_lastIndex(events));
    } else {
      tmp$ = downTo(from - 1 | 0, -1);
    }
    var progression = tmp$;
    tmp$_0 = progression.iterator();
    while (tmp$_0.hasNext()) {
      var i = tmp$_0.next();
      var item = getOrNull(events, i);
      if (item == null || item.type === StoreEventType.STATE) {
        this.move_0(events, from, i);
        break;
      }}
  };
  TimeTravelControllerImpl.prototype.move_0 = function (events, from, to, publish) {
    if (publish === void 0)
      publish = true;
    var tmp$, tmp$_0;
    if (from === to) {
      return;
    }var set = HashSet_init();
    var deque = ArrayDeque_init();
    var isForward = to > from;
    if (isForward) {
      tmp$ = downTo(to, from + 1 | 0);
    } else {
      tmp$ = new IntRange(to + 1 | 0, from);
    }
    var progression = tmp$;
    tmp$_0 = progression.iterator();
    while (tmp$_0.hasNext()) {
      var i = tmp$_0.next();
      var event = events.get_za3lpa$(i);
      if (event.type === StoreEventType.STATE && this.stores_0.containsKey_11rb$(event.storeName) && !set.contains_11rb$(event.storeName)) {
        set.add_11rb$(event.storeName);
        deque.addLast_11rb$(event);
        if (set.size === this.stores_0.size) {
          break;
        }}}
    while (!deque.isEmpty()) {
      var $receiver = deque.removeFirst();
      if ($receiver.type === StoreEventType.STATE && !isForward) {
        this.process_0($receiver, $receiver.state);
      } else {
        this.process_0($receiver);
      }
    }
    if (publish) {
      this.stateSubject_0.onNext(this.state.copy_z9vp01$(events, to));
    }};
  TimeTravelControllerImpl.prototype.process_0 = function (event, previousValue) {
    if (previousValue === void 0)
      previousValue = null;
    var tmp$;
    (tmp$ = this.stores_0.get_11rb$(event.storeName)) != null ? (tmp$.process_fpuznb$(event.type, previousValue != null ? previousValue : event.value), Unit) : null;
  };
  TimeTravelControllerImpl.prototype.swapState_0 = function (reducer) {
    this.stateSubject_0.onNext(reducer(this.state));
  };
  TimeTravelControllerImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeTravelControllerImpl',
    interfaces: [TimeTravelController]
  };
  function get_timeTravelController() {
    return TimeTravelControllerHolder_getInstance().impl;
  }
  function TimeTravelControllerHolder() {
    TimeTravelControllerHolder_instance = this;
    this.impl_9sqjdf$_0 = lazy(TimeTravelControllerHolder$impl$lambda);
  }
  Object.defineProperty(TimeTravelControllerHolder.prototype, 'impl', {
    configurable: true,
    get: function () {
      return this.impl_9sqjdf$_0.value;
    }
  });
  function TimeTravelControllerHolder$impl$lambda() {
    assertOnMainThread();
    return new TimeTravelControllerImpl();
  }
  TimeTravelControllerHolder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TimeTravelControllerHolder',
    interfaces: []
  };
  var TimeTravelControllerHolder_instance = null;
  function TimeTravelControllerHolder_getInstance() {
    if (TimeTravelControllerHolder_instance === null) {
      new TimeTravelControllerHolder();
    }return TimeTravelControllerHolder_instance;
  }
  function TimeTravelExport(recordedEvents, unusedStoreStates) {
    this.recordedEvents = recordedEvents;
    this.unusedStoreStates = unusedStoreStates;
  }
  TimeTravelExport.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeTravelExport',
    interfaces: [JvmSerializable]
  };
  TimeTravelExport.prototype.component1 = function () {
    return this.recordedEvents;
  };
  TimeTravelExport.prototype.component2 = function () {
    return this.unusedStoreStates;
  };
  TimeTravelExport.prototype.copy_p1qaaa$ = function (recordedEvents, unusedStoreStates) {
    return new TimeTravelExport(recordedEvents === void 0 ? this.recordedEvents : recordedEvents, unusedStoreStates === void 0 ? this.unusedStoreStates : unusedStoreStates);
  };
  TimeTravelExport.prototype.toString = function () {
    return 'TimeTravelExport(recordedEvents=' + Kotlin.toString(this.recordedEvents) + (', unusedStoreStates=' + Kotlin.toString(this.unusedStoreStates)) + ')';
  };
  TimeTravelExport.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.recordedEvents) | 0;
    result = result * 31 + Kotlin.hashCode(this.unusedStoreStates) | 0;
    return result;
  };
  TimeTravelExport.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.recordedEvents, other.recordedEvents) && Kotlin.equals(this.unusedStoreStates, other.unusedStoreStates)))));
  };
  function TimeTravelExportSerializer() {
  }
  function TimeTravelExportSerializer$Result() {
  }
  function TimeTravelExportSerializer$Result$Success(data) {
    TimeTravelExportSerializer$Result.call(this);
    this.data = data;
  }
  TimeTravelExportSerializer$Result$Success.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Success',
    interfaces: [TimeTravelExportSerializer$Result]
  };
  function TimeTravelExportSerializer$Result$Error(exception) {
    TimeTravelExportSerializer$Result.call(this);
    this.exception = exception;
  }
  TimeTravelExportSerializer$Result$Error.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Error',
    interfaces: [TimeTravelExportSerializer$Result]
  };
  TimeTravelExportSerializer$Result.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Result',
    interfaces: []
  };
  TimeTravelExportSerializer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TimeTravelExportSerializer',
    interfaces: []
  };
  function toProto($receiver) {
    var valueParser = new ValueParser();
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(toProto_0(item, valueParser));
    }
    return destination;
  }
  function toProto_0($receiver, valueParser) {
    return new TimeTravelEvent($receiver.id, $receiver.storeName, toProto_1($receiver.type), valueParser.parseType_za3rmp$($receiver.value));
  }
  function toProto_1($receiver) {
    switch ($receiver.name) {
      case 'INTENT':
        return StoreEventType_0.INTENT;
      case 'ACTION':
        return StoreEventType_0.ACTION;
      case 'MESSAGE':
        return StoreEventType_0.MESSAGE;
      case 'STATE':
        return StoreEventType_0.STATE;
      case 'LABEL':
        return StoreEventType_0.LABEL;
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function toProto_2($receiver) {
    switch ($receiver.name) {
      case 'IDLE':
        return TimeTravelStateUpdate$Mode.IDLE;
      case 'RECORDING':
        return TimeTravelStateUpdate$Mode.RECORDING;
      case 'STOPPED':
        return TimeTravelStateUpdate$Mode.STOPPED;
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function StateDiff() {
    this.previousState_0 = null;
  }
  StateDiff.prototype.invoke_jfmpw0$ = function (state) {
    var previousState = this.previousState_0;
    var update = new TimeTravelStateUpdate(this.diffEvents_0(state.events, previousState != null ? previousState.events : null), state.selectedEventIndex, toProto_2(state.mode));
    this.previousState_0 = state;
    return update;
  };
  StateDiff.prototype.diffEvents_0 = function (new_0, previous) {
    if (previous == null)
      return new TimeTravelEventsUpdate$All(toProto(new_0));
    else if (new_0.size > previous.size)
      return new TimeTravelEventsUpdate$New(toProto(new_0.subList_vux9f0$(previous.size, new_0.size)));
    else if (new_0.size === previous.size)
      return new TimeTravelEventsUpdate$New(emptyList());
    else
      return new TimeTravelEventsUpdate$All(toProto(new_0));
  };
  StateDiff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateDiff',
    interfaces: []
  };
  function TimeTravelStore() {
  }
  function TimeTravelStore$Event(type, value, state) {
    this.type = type;
    this.value = value;
    this.state = state;
  }
  TimeTravelStore$Event.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Event',
    interfaces: []
  };
  TimeTravelStore$Event.prototype.component1 = function () {
    return this.type;
  };
  TimeTravelStore$Event.prototype.component2 = function () {
    return this.value;
  };
  TimeTravelStore$Event.prototype.component3 = function () {
    return this.state;
  };
  TimeTravelStore$Event.prototype.copy_iqrs9u$ = function (type, value, state) {
    return new TimeTravelStore$Event(type === void 0 ? this.type : type, value === void 0 ? this.value : value, state === void 0 ? this.state : state);
  };
  TimeTravelStore$Event.prototype.toString = function () {
    return 'Event(type=' + Kotlin.toString(this.type) + (', value=' + Kotlin.toString(this.value)) + (', state=' + Kotlin.toString(this.state)) + ')';
  };
  TimeTravelStore$Event.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    return result;
  };
  TimeTravelStore$Event.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.state, other.state)))));
  };
  TimeTravelStore.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TimeTravelStore',
    interfaces: [Store]
  };
  function TimeTravelStoreFactory() {
  }
  TimeTravelStoreFactory.prototype.create$default = function (name, isAutoInit, initialState, bootstrapper, executorFactory, reducer) {
    var $receiver = new TimeTravelStoreImpl(initialState, bootstrapper, executorFactory, reducer);
    TimeTravelControllerHolder_getInstance().impl.attachStore_u52jqk$($receiver, name);
    if (isAutoInit) {
      $receiver.init();
    }return $receiver;
  };
  TimeTravelStoreFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeTravelStoreFactory',
    interfaces: [StoreFactory]
  };
  function Disposable$lambda($receiver) {
    return Unit;
  }
  function Disposable$ObjectLiteral(closure$onDispose) {
    this.closure$onDispose = closure$onDispose;
    this.isDisposed_i9y4e$_0 = atomic_0(false);
  }
  Object.defineProperty(Disposable$ObjectLiteral.prototype, 'isDisposed', {configurable: true, get: function () {
    return getValue_1(this.isDisposed_i9y4e$_0, this, Disposable$ObjectLiteral$isDisposed_metadata);
  }, set: function (isDisposed) {
    setValue_0(this.isDisposed_i9y4e$_0, this, Disposable$ObjectLiteral$isDisposed_metadata, isDisposed);
  }});
  Disposable$ObjectLiteral.prototype.dispose = function () {
    this.isDisposed = true;
    this.closure$onDispose(this);
  };
  Disposable$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Disposable]};
  function TimeTravelStoreImpl(initialState, bootstrapper, executorFactory, reducer) {
    this.bootstrapper_0 = bootstrapper;
    this.executorFactory_0 = executorFactory;
    this.reducer_0 = reducer;
    this.executor_0 = this.executorFactory_0();
    this.internalState_cja09r$_0 = atomic(initialState);
    this.stateSubject_0 = BehaviorSubject(initialState);
    this.labelSubject_0 = PublishSubject();
    var $receiver = StoreEventType$values();
    var result = LinkedHashMap_init(coerceAtLeast(mapCapacity($receiver.length), 16));
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      result.put_xwzc9p$(element, PublishSubject());
    }
    this.eventSubjects_0 = result;
    this.debuggingExecutor_cqvljg$_0 = atomic(null);
    this.eventProcessor_0 = new TimeTravelStoreImpl$EventProcessor(this);
    this.eventDebugger_0 = new TimeTravelStoreImpl$EventDebugger(this);
  }
  var TimeTravelStoreImpl$internalState_metadata = new PropertyMetadata('internalState');
  Object.defineProperty(TimeTravelStoreImpl.prototype, 'internalState_0', {
    configurable: true,
    get: function () {
      return getValue(this.internalState_cja09r$_0, this, TimeTravelStoreImpl$internalState_metadata);
    },
    set: function (internalState) {
      setValue(this.internalState_cja09r$_0, this, TimeTravelStoreImpl$internalState_metadata, internalState);
    }
  });
  Object.defineProperty(TimeTravelStoreImpl.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.stateSubject_0.value;
    }
  });
  Object.defineProperty(TimeTravelStoreImpl.prototype, 'isDisposed', {
    configurable: true,
    get: function () {
      return !this.stateSubject_0.isActive;
    }
  });
  var TimeTravelStoreImpl$debuggingExecutor_metadata = new PropertyMetadata('debuggingExecutor');
  Object.defineProperty(TimeTravelStoreImpl.prototype, 'debuggingExecutor_0', {
    configurable: true,
    get: function () {
      return getValue(this.debuggingExecutor_cqvljg$_0, this, TimeTravelStoreImpl$debuggingExecutor_metadata);
    },
    set: function (debuggingExecutor) {
      setValue(this.debuggingExecutor_cqvljg$_0, this, TimeTravelStoreImpl$debuggingExecutor_metadata, debuggingExecutor);
    }
  });
  TimeTravelStoreImpl.prototype.states = function (observer) {
    return this.stateSubject_0.subscribe(observer);
  };
  TimeTravelStoreImpl.prototype.labels = function (observer) {
    return this.labelSubject_0.subscribe(observer);
  };
  function TimeTravelStoreImpl$events$lambda(closure$disposables) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$disposables.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element.dispose();
      }
      return Unit;
    };
  }
  TimeTravelStoreImpl.prototype.events_mvkdod$ = function (observer) {
    var $receiver = this.eventSubjects_0.values;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.subscribe(observer));
    }
    var disposables = destination;
    return new Disposable$ObjectLiteral(TimeTravelStoreImpl$events$lambda(disposables));
  };
  TimeTravelStoreImpl.prototype.accept = function (intent) {
    assertOnMainThread();
    if (!this.isDisposed) {
      this.onEvent_0(StoreEventType.INTENT, intent, this.state);
    }};
  TimeTravelStoreImpl.prototype.dispose = function () {
    assertOnMainThread();
    if (!this.isDisposed) {
      var tmp$, tmp$_0;
      (tmp$ = this.debuggingExecutor_0) != null ? (tmp$.dispose(), Unit) : null;
      this.debuggingExecutor_0 = null;
      (tmp$_0 = this.bootstrapper_0) != null ? (tmp$_0.dispose(), Unit) : null;
      this.executor_0.dispose();
      this.stateSubject_0.onComplete();
      this.labelSubject_0.onComplete();
      var tmp$_1;
      tmp$_1 = this.eventSubjects_0.values.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        element.onComplete();
      }
    }};
  function TimeTravelStoreImpl$init$ObjectLiteral(this$TimeTravelStoreImpl) {
    this.this$TimeTravelStoreImpl = this$TimeTravelStoreImpl;
  }
  Object.defineProperty(TimeTravelStoreImpl$init$ObjectLiteral.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.this$TimeTravelStoreImpl.internalState_0;
    }
  });
  TimeTravelStoreImpl$init$ObjectLiteral.prototype.onMessage = function (message) {
    this.this$TimeTravelStoreImpl.onEvent_0(StoreEventType.MESSAGE, message, this.state);
  };
  TimeTravelStoreImpl$init$ObjectLiteral.prototype.onLabel = function (label) {
    this.this$TimeTravelStoreImpl.onEvent_0(StoreEventType.LABEL, label, this.state);
  };
  TimeTravelStoreImpl$init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Executor$Callbacks]
  };
  function TimeTravelStoreImpl$init$lambda(this$TimeTravelStoreImpl) {
    return function (it) {
      this$TimeTravelStoreImpl.onEvent_0(StoreEventType.ACTION, it, this$TimeTravelStoreImpl.state);
      return Unit;
    };
  }
  TimeTravelStoreImpl.prototype.init = function () {
    var tmp$, tmp$_0;
    assertOnMainThread();
    this.executor_0.init(new TimeTravelStoreImpl$init$ObjectLiteral(this));
    (tmp$ = this.bootstrapper_0) != null ? (tmp$.init(TimeTravelStoreImpl$init$lambda(this)), Unit) : null;
    (tmp$_0 = this.bootstrapper_0) != null ? (tmp$_0.invoke(), Unit) : null;
  };
  TimeTravelStoreImpl.prototype.restoreState = function () {
    assertOnMainThread();
    if (!this.isDisposed) {
      this.changeState_0(this.internalState_0);
    }};
  TimeTravelStoreImpl.prototype.process_fpuznb$ = function (type, value) {
    this.eventProcessor_0.process_fpuznb$(type, value);
  };
  TimeTravelStoreImpl.prototype.debug_iqrs9u$ = function (type, value, state) {
    this.eventDebugger_0.debug_iqrs9u$(type, value, state);
  };
  TimeTravelStoreImpl.prototype.onEvent_0 = function (type, value, state) {
    assertOnMainThread();
    if (!this.isDisposed) {
      getValue_0(this.eventSubjects_0, type).onNext(new TimeTravelStore$Event(type, value, state));
    }};
  TimeTravelStoreImpl.prototype.changeState_0 = function (state) {
    this.stateSubject_0.onNext(state);
  };
  TimeTravelStoreImpl.prototype.doIfNotDisposed_0 = function (block) {
    if (!this.isDisposed) {
      block();
    }};
  function TimeTravelStoreImpl$EventProcessor($outer) {
    this.$outer = $outer;
  }
  TimeTravelStoreImpl$EventProcessor.prototype.process_fpuznb$ = function (type, value) {
    assertOnMainThread();
    var $this = this.$outer;
    this.$outer;
    if (!$this.isDisposed) {
      var this$TimeTravelStoreImpl = this.$outer;
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      switch (type.name) {
        case 'INTENT':
          this$TimeTravelStoreImpl.executor_0.executeIntent(Kotlin.isType(tmp$ = value, Any) ? tmp$ : throwCCE());
          break;
        case 'ACTION':
          this$TimeTravelStoreImpl.executor_0.executeAction(Kotlin.isType(tmp$_0 = value, Any) ? tmp$_0 : throwCCE());
          break;
        case 'MESSAGE':
          this.processMessage_0(Kotlin.isType(tmp$_1 = value, Any) ? tmp$_1 : throwCCE());
          break;
        case 'STATE':
          this$TimeTravelStoreImpl.changeState_0(Kotlin.isType(tmp$_2 = value, Any) ? tmp$_2 : throwCCE());
          break;
        case 'LABEL':
          this$TimeTravelStoreImpl.labelSubject_0.onNext(Kotlin.isType(tmp$_3 = value, Any) ? tmp$_3 : throwCCE());
          break;
        default:Kotlin.noWhenBranchMatched();
          break;
      }
    }};
  TimeTravelStoreImpl$EventProcessor.prototype.processMessage_0 = function (message) {
    var previousState = this.$outer.internalState_0;
    var newState = this.$outer.reducer_0.reduce(previousState, message);
    this.$outer.internalState_0 = newState;
    this.$outer.onEvent_0(StoreEventType.STATE, newState, previousState);
  };
  TimeTravelStoreImpl$EventProcessor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EventProcessor',
    interfaces: []
  };
  function TimeTravelStoreImpl$EventDebugger($outer) {
    this.$outer = $outer;
  }
  TimeTravelStoreImpl$EventDebugger.prototype.debug_iqrs9u$ = function (type, value, state) {
    assertOnMainThread();
    if (!this.$outer.isDisposed) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
      switch (type.name) {
        case 'INTENT':
          this.debugIntent_0(Kotlin.isType(tmp$ = value, Any) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = state, Any) ? tmp$_0 : throwCCE());
          break;
        case 'ACTION':
          this.debugAction_0(Kotlin.isType(tmp$_1 = value, Any) ? tmp$_1 : throwCCE(), Kotlin.isType(tmp$_2 = state, Any) ? tmp$_2 : throwCCE());
          break;
        case 'MESSAGE':
          this.debugMessage_0(Kotlin.isType(tmp$_3 = value, Any) ? tmp$_3 : throwCCE(), Kotlin.isType(tmp$_4 = state, Any) ? tmp$_4 : throwCCE());
          break;
        case 'STATE':
          throw IllegalArgumentException_init("Can't debug event of type: " + type);
        case 'LABEL':
          this.debugLabel_0(Kotlin.isType(tmp$_5 = value, Any) ? tmp$_5 : throwCCE());
          break;
        default:Kotlin.noWhenBranchMatched();
          break;
      }
    }};
  function TimeTravelStoreImpl$EventDebugger$debugIntent$lambda(closure$intent) {
    return function ($receiver) {
      $receiver.executeIntent(closure$intent);
      return Unit;
    };
  }
  TimeTravelStoreImpl$EventDebugger.prototype.debugIntent_0 = function (intent, initialState) {
    this.debugExecutor_0(initialState, TimeTravelStoreImpl$EventDebugger$debugIntent$lambda(intent));
  };
  function TimeTravelStoreImpl$EventDebugger$debugAction$lambda(closure$action) {
    return function ($receiver) {
      $receiver.executeAction(closure$action);
      return Unit;
    };
  }
  TimeTravelStoreImpl$EventDebugger.prototype.debugAction_0 = function (action, initialState) {
    this.debugExecutor_0(initialState, TimeTravelStoreImpl$EventDebugger$debugAction$lambda(action));
  };
  function TimeTravelStoreImpl$EventDebugger$debugExecutor$lambda$ObjectLiteral(closure$localState, this$TimeTravelStoreImpl) {
    this.closure$localState = closure$localState;
    this.this$TimeTravelStoreImpl = this$TimeTravelStoreImpl;
  }
  var TimeTravelStoreImpl$EventDebugger$debugExecutor$localState_metadata = new PropertyMetadata('localState');
  Object.defineProperty(TimeTravelStoreImpl$EventDebugger$debugExecutor$lambda$ObjectLiteral.prototype, 'state', {
    configurable: true,
    get: function () {
      return getValue(this.closure$localState, null, TimeTravelStoreImpl$EventDebugger$debugExecutor$localState_metadata);
    }
  });
  TimeTravelStoreImpl$EventDebugger$debugExecutor$lambda$ObjectLiteral.prototype.onMessage = function (message) {
    assertOnMainThread();
    var tmp$ = this.closure$localState;
    var $receiver = this.this$TimeTravelStoreImpl.reducer_0;
    this.closure$localState;
    setValue(tmp$, null, TimeTravelStoreImpl$EventDebugger$debugExecutor$localState_metadata, $receiver.reduce(getValue(this.closure$localState, null, TimeTravelStoreImpl$EventDebugger$debugExecutor$localState_metadata), message));
  };
  TimeTravelStoreImpl$EventDebugger$debugExecutor$lambda$ObjectLiteral.prototype.onLabel = function (label) {
    assertOnMainThread();
  };
  TimeTravelStoreImpl$EventDebugger$debugExecutor$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Executor$Callbacks]
  };
  TimeTravelStoreImpl$EventDebugger.prototype.debugExecutor_0 = function (initialState, execute) {
    var tmp$;
    var localState = atomic(initialState);
    var $receiver = this.$outer.executorFactory_0();
    this.$outer;
    $receiver.init(new TimeTravelStoreImpl$EventDebugger$debugExecutor$lambda$ObjectLiteral(localState, this.$outer));
    execute($receiver);
    var executor = $receiver;
    (tmp$ = this.$outer.debuggingExecutor_0) != null ? (tmp$.dispose(), Unit) : null;
    this.$outer.debuggingExecutor_0 = executor;
  };
  TimeTravelStoreImpl$EventDebugger.prototype.debugMessage_0 = function (message, initialState) {
    this.$outer.reducer_0.reduce(initialState, message);
  };
  TimeTravelStoreImpl$EventDebugger.prototype.debugLabel_0 = function (label) {
    this.$outer.labelSubject_0.onNext(label);
  };
  TimeTravelStoreImpl$EventDebugger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EventDebugger',
    interfaces: []
  };
  TimeTravelStoreImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeTravelStoreImpl',
    interfaces: [TimeTravelStore]
  };
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$mvikotlin = package$arkivanov.mvikotlin || (package$arkivanov.mvikotlin = {});
  var package$timetravel = package$mvikotlin.timetravel || (package$mvikotlin.timetravel = {});
  package$timetravel.TimeTravelEvent = TimeTravelEvent_0;
  Object.defineProperty(TimeTravelState$Mode, 'IDLE', {
    get: TimeTravelState$Mode$IDLE_getInstance
  });
  Object.defineProperty(TimeTravelState$Mode, 'RECORDING', {
    get: TimeTravelState$Mode$RECORDING_getInstance
  });
  Object.defineProperty(TimeTravelState$Mode, 'STOPPED', {
    get: TimeTravelState$Mode$STOPPED_getInstance
  });
  TimeTravelState.Mode = TimeTravelState$Mode;
  package$timetravel.TimeTravelState = TimeTravelState;
  var package$controller = package$timetravel.controller || (package$timetravel.controller = {});
  package$controller.TimeTravelController = TimeTravelController;
  $$importsForInline$$['MVIKotlin-mvikotlin-timetravel-js-legacy'] = _;
  package$controller.TimeTravelControllerImpl = TimeTravelControllerImpl;
  Object.defineProperty(package$controller, 'timeTravelController', {
    get: get_timeTravelController
  });
  Object.defineProperty(package$controller, 'TimeTravelControllerHolder', {
    get: TimeTravelControllerHolder_getInstance
  });
  var package$export = package$timetravel.export || (package$timetravel.export = {});
  package$export.TimeTravelExport = TimeTravelExport;
  TimeTravelExportSerializer$Result.Success = TimeTravelExportSerializer$Result$Success;
  TimeTravelExportSerializer$Result.Error = TimeTravelExportSerializer$Result$Error;
  TimeTravelExportSerializer.Result = TimeTravelExportSerializer$Result;
  package$export.TimeTravelExportSerializer = TimeTravelExportSerializer;
  var package$server = package$timetravel.server || (package$timetravel.server = {});
  package$server.toProto_lpyk00$ = toProto;
  package$server.toProto_6rjsaz$ = toProto_2;
  package$server.StateDiff = StateDiff;
  TimeTravelStore.Event = TimeTravelStore$Event;
  var package$store = package$timetravel.store || (package$timetravel.store = {});
  package$store.TimeTravelStore = TimeTravelStore;
  package$store.TimeTravelStoreFactory = TimeTravelStoreFactory;
  $$importsForInline$$['MVIKotlin-rx-internal-js-legacy'] = $module$MVIKotlin_rx_internal_js_legacy;
  package$store.TimeTravelStoreImpl = TimeTravelStoreImpl;
  TimeTravelStoreFactory.prototype.create = StoreFactory.prototype.create;
  Kotlin.defineModule('MVIKotlin-mvikotlin-timetravel-js-legacy', _);
  return _;
}));

//# sourceMappingURL=MVIKotlin-mvikotlin-timetravel-js-legacy.js.map
