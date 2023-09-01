(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy'.");
    }root['MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy'] = factory(typeof this['MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy'] === 'undefined' ? {} : this['MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Enum = Kotlin.kotlin.Enum;
  var unboxChar = Kotlin.unboxChar;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var toBoxedChar = Kotlin.toBoxedChar;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var wrapFunction = Kotlin.wrapFunction;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var L255 = Kotlin.Long.fromInt(255);
  var toShort = Kotlin.toShort;
  var toChar = Kotlin.toChar;
  var toByte = Kotlin.toByte;
  var decodeToString = Kotlin.kotlin.text.decodeToString_964n91$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var longArray = Kotlin.longArray;
  var charArray = Kotlin.charArray;
  var booleanArray = Kotlin.booleanArray;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var takeHighestOneBit = Kotlin.kotlin.takeHighestOneBit_s8ev3n$;
  var toRawBits = Kotlin.doubleToRawBits;
  var encodeToByteArray = Kotlin.kotlin.text.encodeToByteArray_pdl1vz$;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  StoreEventType.prototype = Object.create(Enum.prototype);
  StoreEventType.prototype.constructor = StoreEventType;
  Type.prototype = Object.create(Enum.prototype);
  Type.prototype.constructor = Type;
  TimeTravelCommand$StartRecording.prototype = Object.create(TimeTravelCommand.prototype);
  TimeTravelCommand$StartRecording.prototype.constructor = TimeTravelCommand$StartRecording;
  TimeTravelCommand$StopRecording.prototype = Object.create(TimeTravelCommand.prototype);
  TimeTravelCommand$StopRecording.prototype.constructor = TimeTravelCommand$StopRecording;
  TimeTravelCommand$MoveToStart.prototype = Object.create(TimeTravelCommand.prototype);
  TimeTravelCommand$MoveToStart.prototype.constructor = TimeTravelCommand$MoveToStart;
  TimeTravelCommand$StepBackward.prototype = Object.create(TimeTravelCommand.prototype);
  TimeTravelCommand$StepBackward.prototype.constructor = TimeTravelCommand$StepBackward;
  TimeTravelCommand$StepForward.prototype = Object.create(TimeTravelCommand.prototype);
  TimeTravelCommand$StepForward.prototype.constructor = TimeTravelCommand$StepForward;
  TimeTravelCommand$MoveToEnd.prototype = Object.create(TimeTravelCommand.prototype);
  TimeTravelCommand$MoveToEnd.prototype.constructor = TimeTravelCommand$MoveToEnd;
  TimeTravelCommand$Cancel.prototype = Object.create(TimeTravelCommand.prototype);
  TimeTravelCommand$Cancel.prototype.constructor = TimeTravelCommand$Cancel;
  TimeTravelCommand$DebugEvent.prototype = Object.create(TimeTravelCommand.prototype);
  TimeTravelCommand$DebugEvent.prototype.constructor = TimeTravelCommand$DebugEvent;
  TimeTravelCommand$AnalyzeEvent.prototype = Object.create(TimeTravelCommand.prototype);
  TimeTravelCommand$AnalyzeEvent.prototype.constructor = TimeTravelCommand$AnalyzeEvent;
  TimeTravelCommand$ExportEvents.prototype = Object.create(TimeTravelCommand.prototype);
  TimeTravelCommand$ExportEvents.prototype.constructor = TimeTravelCommand$ExportEvents;
  TimeTravelCommand$ImportEvents.prototype = Object.create(TimeTravelCommand.prototype);
  TimeTravelCommand$ImportEvents.prototype.constructor = TimeTravelCommand$ImportEvents;
  Type_0.prototype = Object.create(Enum.prototype);
  Type_0.prototype.constructor = Type_0;
  TimeTravelEventsUpdate$All.prototype = Object.create(TimeTravelEventsUpdate.prototype);
  TimeTravelEventsUpdate$All.prototype.constructor = TimeTravelEventsUpdate$All;
  TimeTravelEventsUpdate$New.prototype = Object.create(TimeTravelEventsUpdate.prototype);
  TimeTravelEventsUpdate$New.prototype.constructor = TimeTravelEventsUpdate$New;
  TimeTravelStateUpdate$Mode.prototype = Object.create(Enum.prototype);
  TimeTravelStateUpdate$Mode.prototype.constructor = TimeTravelStateUpdate$Mode;
  ProtoObjectType.prototype = Object.create(Enum.prototype);
  ProtoObjectType.prototype.constructor = ProtoObjectType;
  var DEFAULT_PORT;
  function ProtoObject() {
  }
  ProtoObject.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ProtoObject',
    interfaces: []
  };
  function writeStoreEventType($receiver, storeEventType) {
    writeEnum($receiver, storeEventType);
  }
  function readStoreEventType($receiver) {
    return StoreEventType.values()[$receiver.readByte()];
  }
  function StoreEventType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
    var $receiver = this.name.toLowerCase();
    var tmp$;
    if ($receiver.length > 0) {
      var $receiver_0 = unboxChar(toBoxedChar($receiver.charCodeAt(0)));
      tmp$ = String.fromCharCode($receiver_0).toUpperCase().toString() + $receiver.substring(1);
    } else
      tmp$ = $receiver;
    this.title = tmp$;
  }
  function StoreEventType_initFields() {
    StoreEventType_initFields = function () {
    };
    StoreEventType$INTENT_instance = new StoreEventType('INTENT', 0);
    StoreEventType$ACTION_instance = new StoreEventType('ACTION', 1);
    StoreEventType$MESSAGE_instance = new StoreEventType('MESSAGE', 2);
    StoreEventType$STATE_instance = new StoreEventType('STATE', 3);
    StoreEventType$LABEL_instance = new StoreEventType('LABEL', 4);
  }
  var StoreEventType$INTENT_instance;
  function StoreEventType$INTENT_getInstance() {
    StoreEventType_initFields();
    return StoreEventType$INTENT_instance;
  }
  var StoreEventType$ACTION_instance;
  function StoreEventType$ACTION_getInstance() {
    StoreEventType_initFields();
    return StoreEventType$ACTION_instance;
  }
  var StoreEventType$MESSAGE_instance;
  function StoreEventType$MESSAGE_getInstance() {
    StoreEventType_initFields();
    return StoreEventType$MESSAGE_instance;
  }
  var StoreEventType$STATE_instance;
  function StoreEventType$STATE_getInstance() {
    StoreEventType_initFields();
    return StoreEventType$STATE_instance;
  }
  var StoreEventType$LABEL_instance;
  function StoreEventType$LABEL_getInstance() {
    StoreEventType_initFields();
    return StoreEventType$LABEL_instance;
  }
  StoreEventType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StoreEventType',
    interfaces: [Enum]
  };
  function StoreEventType$values() {
    return [StoreEventType$INTENT_getInstance(), StoreEventType$ACTION_getInstance(), StoreEventType$MESSAGE_getInstance(), StoreEventType$STATE_getInstance(), StoreEventType$LABEL_getInstance()];
  }
  StoreEventType.values = StoreEventType$values;
  function StoreEventType$valueOf(name) {
    switch (name) {
      case 'INTENT':
        return StoreEventType$INTENT_getInstance();
      case 'ACTION':
        return StoreEventType$ACTION_getInstance();
      case 'MESSAGE':
        return StoreEventType$MESSAGE_getInstance();
      case 'STATE':
        return StoreEventType$STATE_getInstance();
      case 'LABEL':
        return StoreEventType$LABEL_getInstance();
      default:throwISE('No enum constant com.arkivanov.mvikotlin.timetravel.proto.internal.data.storeeventtype.StoreEventType.' + name);
    }
  }
  StoreEventType.valueOf_61zpoe$ = StoreEventType$valueOf;
  function writeTimeTravelCommand($receiver, timeTravelCommand) {
    if (Kotlin.isType(timeTravelCommand, TimeTravelCommand$StartRecording))
      writeEnum($receiver, Type$START_RECORDING_getInstance());
    else if (Kotlin.isType(timeTravelCommand, TimeTravelCommand$StopRecording))
      writeEnum($receiver, Type$STOP_RECORDING_getInstance());
    else if (Kotlin.isType(timeTravelCommand, TimeTravelCommand$MoveToStart))
      writeEnum($receiver, Type$MOVE_TO_START_getInstance());
    else if (Kotlin.isType(timeTravelCommand, TimeTravelCommand$StepBackward))
      writeEnum($receiver, Type$STEP_BACKWARD_getInstance());
    else if (Kotlin.isType(timeTravelCommand, TimeTravelCommand$StepForward))
      writeEnum($receiver, Type$STEP_FORWARD_getInstance());
    else if (Kotlin.isType(timeTravelCommand, TimeTravelCommand$MoveToEnd))
      writeEnum($receiver, Type$MOVE_TO_END_getInstance());
    else if (Kotlin.isType(timeTravelCommand, TimeTravelCommand$Cancel))
      writeEnum($receiver, Type$CANCEL_getInstance());
    else if (Kotlin.isType(timeTravelCommand, TimeTravelCommand$DebugEvent)) {
      writeEnum($receiver, Type$DEBUG_EVENT_getInstance());
      writeLong($receiver, timeTravelCommand.eventId);
    } else if (Kotlin.isType(timeTravelCommand, TimeTravelCommand$AnalyzeEvent)) {
      writeEnum($receiver, Type$ANALYZE_EVENT_getInstance());
      writeLong($receiver, timeTravelCommand.eventId);
    } else if (Kotlin.isType(timeTravelCommand, TimeTravelCommand$ExportEvents))
      writeEnum($receiver, Type$EXPORT_EVENTS_getInstance());
    else if (Kotlin.isType(timeTravelCommand, TimeTravelCommand$ImportEvents)) {
      writeEnum($receiver, Type$IMPORT_EVENTS_getInstance());
      writeByteArray($receiver, timeTravelCommand.data);
    } else
      Kotlin.noWhenBranchMatched();
  }
  function readTimeTravelCommand($receiver) {
    switch (Type.values()[$receiver.readByte()].name) {
      case 'START_RECORDING':
        return TimeTravelCommand$StartRecording_getInstance();
      case 'STOP_RECORDING':
        return TimeTravelCommand$StopRecording_getInstance();
      case 'MOVE_TO_START':
        return TimeTravelCommand$MoveToStart_getInstance();
      case 'STEP_BACKWARD':
        return TimeTravelCommand$StepBackward_getInstance();
      case 'STEP_FORWARD':
        return TimeTravelCommand$StepForward_getInstance();
      case 'MOVE_TO_END':
        return TimeTravelCommand$MoveToEnd_getInstance();
      case 'CANCEL':
        return TimeTravelCommand$Cancel_getInstance();
      case 'DEBUG_EVENT':
        return new TimeTravelCommand$DebugEvent(readLong($receiver));
      case 'ANALYZE_EVENT':
        return new TimeTravelCommand$AnalyzeEvent(readLong($receiver));
      case 'EXPORT_EVENTS':
        return TimeTravelCommand$ExportEvents_getInstance();
      case 'IMPORT_EVENTS':
        return new TimeTravelCommand$ImportEvents(ensureNotNull(readByteArray($receiver)));
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Type_initFields() {
    Type_initFields = function () {
    };
    Type$START_RECORDING_instance = new Type('START_RECORDING', 0);
    Type$STOP_RECORDING_instance = new Type('STOP_RECORDING', 1);
    Type$MOVE_TO_START_instance = new Type('MOVE_TO_START', 2);
    Type$STEP_BACKWARD_instance = new Type('STEP_BACKWARD', 3);
    Type$STEP_FORWARD_instance = new Type('STEP_FORWARD', 4);
    Type$MOVE_TO_END_instance = new Type('MOVE_TO_END', 5);
    Type$CANCEL_instance = new Type('CANCEL', 6);
    Type$DEBUG_EVENT_instance = new Type('DEBUG_EVENT', 7);
    Type$ANALYZE_EVENT_instance = new Type('ANALYZE_EVENT', 8);
    Type$EXPORT_EVENTS_instance = new Type('EXPORT_EVENTS', 9);
    Type$IMPORT_EVENTS_instance = new Type('IMPORT_EVENTS', 10);
  }
  var Type$START_RECORDING_instance;
  function Type$START_RECORDING_getInstance() {
    Type_initFields();
    return Type$START_RECORDING_instance;
  }
  var Type$STOP_RECORDING_instance;
  function Type$STOP_RECORDING_getInstance() {
    Type_initFields();
    return Type$STOP_RECORDING_instance;
  }
  var Type$MOVE_TO_START_instance;
  function Type$MOVE_TO_START_getInstance() {
    Type_initFields();
    return Type$MOVE_TO_START_instance;
  }
  var Type$STEP_BACKWARD_instance;
  function Type$STEP_BACKWARD_getInstance() {
    Type_initFields();
    return Type$STEP_BACKWARD_instance;
  }
  var Type$STEP_FORWARD_instance;
  function Type$STEP_FORWARD_getInstance() {
    Type_initFields();
    return Type$STEP_FORWARD_instance;
  }
  var Type$MOVE_TO_END_instance;
  function Type$MOVE_TO_END_getInstance() {
    Type_initFields();
    return Type$MOVE_TO_END_instance;
  }
  var Type$CANCEL_instance;
  function Type$CANCEL_getInstance() {
    Type_initFields();
    return Type$CANCEL_instance;
  }
  var Type$DEBUG_EVENT_instance;
  function Type$DEBUG_EVENT_getInstance() {
    Type_initFields();
    return Type$DEBUG_EVENT_instance;
  }
  var Type$ANALYZE_EVENT_instance;
  function Type$ANALYZE_EVENT_getInstance() {
    Type_initFields();
    return Type$ANALYZE_EVENT_instance;
  }
  var Type$EXPORT_EVENTS_instance;
  function Type$EXPORT_EVENTS_getInstance() {
    Type_initFields();
    return Type$EXPORT_EVENTS_instance;
  }
  var Type$IMPORT_EVENTS_instance;
  function Type$IMPORT_EVENTS_getInstance() {
    Type_initFields();
    return Type$IMPORT_EVENTS_instance;
  }
  Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Type$values() {
    return [Type$START_RECORDING_getInstance(), Type$STOP_RECORDING_getInstance(), Type$MOVE_TO_START_getInstance(), Type$STEP_BACKWARD_getInstance(), Type$STEP_FORWARD_getInstance(), Type$MOVE_TO_END_getInstance(), Type$CANCEL_getInstance(), Type$DEBUG_EVENT_getInstance(), Type$ANALYZE_EVENT_getInstance(), Type$EXPORT_EVENTS_getInstance(), Type$IMPORT_EVENTS_getInstance()];
  }
  Type.values = Type$values;
  function Type$valueOf(name) {
    switch (name) {
      case 'START_RECORDING':
        return Type$START_RECORDING_getInstance();
      case 'STOP_RECORDING':
        return Type$STOP_RECORDING_getInstance();
      case 'MOVE_TO_START':
        return Type$MOVE_TO_START_getInstance();
      case 'STEP_BACKWARD':
        return Type$STEP_BACKWARD_getInstance();
      case 'STEP_FORWARD':
        return Type$STEP_FORWARD_getInstance();
      case 'MOVE_TO_END':
        return Type$MOVE_TO_END_getInstance();
      case 'CANCEL':
        return Type$CANCEL_getInstance();
      case 'DEBUG_EVENT':
        return Type$DEBUG_EVENT_getInstance();
      case 'ANALYZE_EVENT':
        return Type$ANALYZE_EVENT_getInstance();
      case 'EXPORT_EVENTS':
        return Type$EXPORT_EVENTS_getInstance();
      case 'IMPORT_EVENTS':
        return Type$IMPORT_EVENTS_getInstance();
      default:throwISE('No enum constant com.arkivanov.mvikotlin.timetravel.proto.internal.data.timetravelcomand.Type.' + name);
    }
  }
  Type.valueOf_61zpoe$ = Type$valueOf;
  function TimeTravelCommand() {
  }
  function TimeTravelCommand$StartRecording() {
    TimeTravelCommand$StartRecording_instance = this;
    TimeTravelCommand.call(this);
  }
  TimeTravelCommand$StartRecording.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StartRecording',
    interfaces: [TimeTravelCommand]
  };
  var TimeTravelCommand$StartRecording_instance = null;
  function TimeTravelCommand$StartRecording_getInstance() {
    if (TimeTravelCommand$StartRecording_instance === null) {
      new TimeTravelCommand$StartRecording();
    }return TimeTravelCommand$StartRecording_instance;
  }
  function TimeTravelCommand$StopRecording() {
    TimeTravelCommand$StopRecording_instance = this;
    TimeTravelCommand.call(this);
  }
  TimeTravelCommand$StopRecording.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StopRecording',
    interfaces: [TimeTravelCommand]
  };
  var TimeTravelCommand$StopRecording_instance = null;
  function TimeTravelCommand$StopRecording_getInstance() {
    if (TimeTravelCommand$StopRecording_instance === null) {
      new TimeTravelCommand$StopRecording();
    }return TimeTravelCommand$StopRecording_instance;
  }
  function TimeTravelCommand$MoveToStart() {
    TimeTravelCommand$MoveToStart_instance = this;
    TimeTravelCommand.call(this);
  }
  TimeTravelCommand$MoveToStart.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MoveToStart',
    interfaces: [TimeTravelCommand]
  };
  var TimeTravelCommand$MoveToStart_instance = null;
  function TimeTravelCommand$MoveToStart_getInstance() {
    if (TimeTravelCommand$MoveToStart_instance === null) {
      new TimeTravelCommand$MoveToStart();
    }return TimeTravelCommand$MoveToStart_instance;
  }
  function TimeTravelCommand$StepBackward() {
    TimeTravelCommand$StepBackward_instance = this;
    TimeTravelCommand.call(this);
  }
  TimeTravelCommand$StepBackward.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StepBackward',
    interfaces: [TimeTravelCommand]
  };
  var TimeTravelCommand$StepBackward_instance = null;
  function TimeTravelCommand$StepBackward_getInstance() {
    if (TimeTravelCommand$StepBackward_instance === null) {
      new TimeTravelCommand$StepBackward();
    }return TimeTravelCommand$StepBackward_instance;
  }
  function TimeTravelCommand$StepForward() {
    TimeTravelCommand$StepForward_instance = this;
    TimeTravelCommand.call(this);
  }
  TimeTravelCommand$StepForward.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StepForward',
    interfaces: [TimeTravelCommand]
  };
  var TimeTravelCommand$StepForward_instance = null;
  function TimeTravelCommand$StepForward_getInstance() {
    if (TimeTravelCommand$StepForward_instance === null) {
      new TimeTravelCommand$StepForward();
    }return TimeTravelCommand$StepForward_instance;
  }
  function TimeTravelCommand$MoveToEnd() {
    TimeTravelCommand$MoveToEnd_instance = this;
    TimeTravelCommand.call(this);
  }
  TimeTravelCommand$MoveToEnd.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MoveToEnd',
    interfaces: [TimeTravelCommand]
  };
  var TimeTravelCommand$MoveToEnd_instance = null;
  function TimeTravelCommand$MoveToEnd_getInstance() {
    if (TimeTravelCommand$MoveToEnd_instance === null) {
      new TimeTravelCommand$MoveToEnd();
    }return TimeTravelCommand$MoveToEnd_instance;
  }
  function TimeTravelCommand$Cancel() {
    TimeTravelCommand$Cancel_instance = this;
    TimeTravelCommand.call(this);
  }
  TimeTravelCommand$Cancel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Cancel',
    interfaces: [TimeTravelCommand]
  };
  var TimeTravelCommand$Cancel_instance = null;
  function TimeTravelCommand$Cancel_getInstance() {
    if (TimeTravelCommand$Cancel_instance === null) {
      new TimeTravelCommand$Cancel();
    }return TimeTravelCommand$Cancel_instance;
  }
  function TimeTravelCommand$DebugEvent(eventId) {
    TimeTravelCommand.call(this);
    this.eventId = eventId;
  }
  TimeTravelCommand$DebugEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DebugEvent',
    interfaces: [TimeTravelCommand]
  };
  TimeTravelCommand$DebugEvent.prototype.component1 = function () {
    return this.eventId;
  };
  TimeTravelCommand$DebugEvent.prototype.copy_s8cxhz$ = function (eventId) {
    return new TimeTravelCommand$DebugEvent(eventId === void 0 ? this.eventId : eventId);
  };
  TimeTravelCommand$DebugEvent.prototype.toString = function () {
    return 'DebugEvent(eventId=' + Kotlin.toString(this.eventId) + ')';
  };
  TimeTravelCommand$DebugEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.eventId) | 0;
    return result;
  };
  TimeTravelCommand$DebugEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.eventId, other.eventId))));
  };
  function TimeTravelCommand$AnalyzeEvent(eventId) {
    TimeTravelCommand.call(this);
    this.eventId = eventId;
  }
  TimeTravelCommand$AnalyzeEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnalyzeEvent',
    interfaces: [TimeTravelCommand]
  };
  TimeTravelCommand$AnalyzeEvent.prototype.component1 = function () {
    return this.eventId;
  };
  TimeTravelCommand$AnalyzeEvent.prototype.copy_s8cxhz$ = function (eventId) {
    return new TimeTravelCommand$AnalyzeEvent(eventId === void 0 ? this.eventId : eventId);
  };
  TimeTravelCommand$AnalyzeEvent.prototype.toString = function () {
    return 'AnalyzeEvent(eventId=' + Kotlin.toString(this.eventId) + ')';
  };
  TimeTravelCommand$AnalyzeEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.eventId) | 0;
    return result;
  };
  TimeTravelCommand$AnalyzeEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.eventId, other.eventId))));
  };
  function TimeTravelCommand$ExportEvents() {
    TimeTravelCommand$ExportEvents_instance = this;
    TimeTravelCommand.call(this);
  }
  TimeTravelCommand$ExportEvents.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ExportEvents',
    interfaces: [TimeTravelCommand]
  };
  var TimeTravelCommand$ExportEvents_instance = null;
  function TimeTravelCommand$ExportEvents_getInstance() {
    if (TimeTravelCommand$ExportEvents_instance === null) {
      new TimeTravelCommand$ExportEvents();
    }return TimeTravelCommand$ExportEvents_instance;
  }
  function TimeTravelCommand$ImportEvents(data) {
    TimeTravelCommand.call(this);
    this.data = data;
  }
  TimeTravelCommand$ImportEvents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImportEvents',
    interfaces: [TimeTravelCommand]
  };
  TimeTravelCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeTravelCommand',
    interfaces: [ProtoObject]
  };
  function writeTimeTravelEvent($receiver, timeTravelEvent) {
    writeLong($receiver, timeTravelEvent.id);
    writeString($receiver, timeTravelEvent.storeName);
    writeEnum($receiver, timeTravelEvent.type);
    writeString($receiver, timeTravelEvent.valueType);
  }
  function readTimeTravelEvent($receiver) {
    return new TimeTravelEvent(readLong($receiver), ensureNotNull(readString($receiver)), StoreEventType.values()[$receiver.readByte()], ensureNotNull(readString($receiver)));
  }
  function TimeTravelEvent(id, storeName, type, valueType) {
    this.id = id;
    this.storeName = storeName;
    this.type = type;
    this.valueType = valueType;
  }
  TimeTravelEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeTravelEvent',
    interfaces: []
  };
  TimeTravelEvent.prototype.component1 = function () {
    return this.id;
  };
  TimeTravelEvent.prototype.component2 = function () {
    return this.storeName;
  };
  TimeTravelEvent.prototype.component3 = function () {
    return this.type;
  };
  TimeTravelEvent.prototype.component4 = function () {
    return this.valueType;
  };
  TimeTravelEvent.prototype.copy_yx1fya$ = function (id, storeName, type, valueType) {
    return new TimeTravelEvent(id === void 0 ? this.id : id, storeName === void 0 ? this.storeName : storeName, type === void 0 ? this.type : type, valueType === void 0 ? this.valueType : valueType);
  };
  TimeTravelEvent.prototype.toString = function () {
    return 'TimeTravelEvent(id=' + Kotlin.toString(this.id) + (', storeName=' + Kotlin.toString(this.storeName)) + (', type=' + Kotlin.toString(this.type)) + (', valueType=' + Kotlin.toString(this.valueType)) + ')';
  };
  TimeTravelEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.storeName) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.valueType) | 0;
    return result;
  };
  TimeTravelEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.storeName, other.storeName) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.valueType, other.valueType)))));
  };
  var readList$lambda = wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    return function (closure$readItem) {
      return function ($receiver, it) {
        var list = ArrayList_init(it);
        for (var index = 0; index < it; index++) {
          list.add_11rb$(closure$readItem($receiver));
        }
        return list;
      };
    };
  });
  function writeTimeTravelEventsUpdate($receiver, timeTravelEventsUpdate) {
    if (Kotlin.isType(timeTravelEventsUpdate, TimeTravelEventsUpdate$All))
      writeTimeTravelEventsUpdateAll($receiver, timeTravelEventsUpdate);
    else if (Kotlin.isType(timeTravelEventsUpdate, TimeTravelEventsUpdate$New))
      writeTimeTravelEventsUpdateNew($receiver, timeTravelEventsUpdate);
    else
      Kotlin.noWhenBranchMatched();
  }
  function writeTimeTravelEventsUpdateAll($receiver, timeTravelEventsUpdate) {
    writeEnum($receiver, Type$ALL_getInstance());
    var collection = timeTravelEventsUpdate.events;
    if (collection == null) {
      writeInt($receiver, -1);
    } else {
      writeInt($receiver, collection.size);
      var tmp$;
      tmp$ = collection.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        writeTimeTravelEvent($receiver, element);
      }
    }
  }
  function writeTimeTravelEventsUpdateNew($receiver, timeTravelEventsUpdate) {
    writeEnum($receiver, Type$NEW_getInstance());
    var collection = timeTravelEventsUpdate.events;
    if (collection == null) {
      writeInt($receiver, -1);
    } else {
      writeInt($receiver, collection.size);
      var tmp$;
      tmp$ = collection.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        writeTimeTravelEvent($receiver, element);
      }
    }
  }
  function readTimeTravelEventsUpdate($receiver) {
    switch (Type_0.values()[$receiver.readByte()].name) {
      case 'ALL':
        return readTimeTravelEventsUpdateAll($receiver);
      case 'NEW':
        return readTimeTravelEventsUpdateNew($receiver);
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function readTimeTravelEventsUpdateAll($receiver) {
    var tmp$;
    var $receiver_0 = readInt($receiver);
    var tmp$_0;
    if ((tmp$ = $receiver_0 >= 0 ? $receiver_0 : null) != null) {
      var list = ArrayList_init(tmp$);
      for (var index = 0; index < tmp$; index++) {
        list.add_11rb$(readTimeTravelEvent($receiver));
      }
      tmp$_0 = list;
    } else
      tmp$_0 = null;
    return new TimeTravelEventsUpdate$All(ensureNotNull(tmp$_0));
  }
  function readTimeTravelEventsUpdateNew($receiver) {
    var tmp$;
    var $receiver_0 = readInt($receiver);
    var tmp$_0;
    if ((tmp$ = $receiver_0 >= 0 ? $receiver_0 : null) != null) {
      var list = ArrayList_init(tmp$);
      for (var index = 0; index < tmp$; index++) {
        list.add_11rb$(readTimeTravelEvent($receiver));
      }
      tmp$_0 = list;
    } else
      tmp$_0 = null;
    return new TimeTravelEventsUpdate$New(ensureNotNull(tmp$_0));
  }
  function Type_0(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Type_initFields_0() {
    Type_initFields_0 = function () {
    };
    Type$ALL_instance = new Type_0('ALL', 0);
    Type$NEW_instance = new Type_0('NEW', 1);
  }
  var Type$ALL_instance;
  function Type$ALL_getInstance() {
    Type_initFields_0();
    return Type$ALL_instance;
  }
  var Type$NEW_instance;
  function Type$NEW_getInstance() {
    Type_initFields_0();
    return Type$NEW_instance;
  }
  Type_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Type$values_0() {
    return [Type$ALL_getInstance(), Type$NEW_getInstance()];
  }
  Type_0.values = Type$values_0;
  function Type$valueOf_0(name) {
    switch (name) {
      case 'ALL':
        return Type$ALL_getInstance();
      case 'NEW':
        return Type$NEW_getInstance();
      default:throwISE('No enum constant com.arkivanov.mvikotlin.timetravel.proto.internal.data.timetraveleventsupdate.Type.' + name);
    }
  }
  Type_0.valueOf_61zpoe$ = Type$valueOf_0;
  function TimeTravelEventsUpdate() {
  }
  function TimeTravelEventsUpdate$All(events) {
    TimeTravelEventsUpdate.call(this);
    this.events = events;
  }
  TimeTravelEventsUpdate$All.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'All',
    interfaces: [TimeTravelEventsUpdate]
  };
  TimeTravelEventsUpdate$All.prototype.component1 = function () {
    return this.events;
  };
  TimeTravelEventsUpdate$All.prototype.copy_gu8iyu$ = function (events) {
    return new TimeTravelEventsUpdate$All(events === void 0 ? this.events : events);
  };
  TimeTravelEventsUpdate$All.prototype.toString = function () {
    return 'All(events=' + Kotlin.toString(this.events) + ')';
  };
  TimeTravelEventsUpdate$All.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.events) | 0;
    return result;
  };
  TimeTravelEventsUpdate$All.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.events, other.events))));
  };
  function TimeTravelEventsUpdate$New(events) {
    TimeTravelEventsUpdate.call(this);
    this.events = events;
  }
  TimeTravelEventsUpdate$New.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'New',
    interfaces: [TimeTravelEventsUpdate]
  };
  TimeTravelEventsUpdate$New.prototype.component1 = function () {
    return this.events;
  };
  TimeTravelEventsUpdate$New.prototype.copy_gu8iyu$ = function (events) {
    return new TimeTravelEventsUpdate$New(events === void 0 ? this.events : events);
  };
  TimeTravelEventsUpdate$New.prototype.toString = function () {
    return 'New(events=' + Kotlin.toString(this.events) + ')';
  };
  TimeTravelEventsUpdate$New.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.events) | 0;
    return result;
  };
  TimeTravelEventsUpdate$New.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.events, other.events))));
  };
  TimeTravelEventsUpdate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeTravelEventsUpdate',
    interfaces: []
  };
  function writeTimeTravelEventValue($receiver, timeTravelEventValue) {
    writeLong($receiver, timeTravelEventValue.eventId);
    writeValueNode($receiver, timeTravelEventValue.value);
  }
  function readTimeTravelEventValue($receiver) {
    return new TimeTravelEventValue(readLong($receiver), readValueNode($receiver));
  }
  function TimeTravelEventValue(eventId, value) {
    this.eventId = eventId;
    this.value = value;
  }
  TimeTravelEventValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeTravelEventValue',
    interfaces: [ProtoObject]
  };
  TimeTravelEventValue.prototype.component1 = function () {
    return this.eventId;
  };
  TimeTravelEventValue.prototype.component2 = function () {
    return this.value;
  };
  TimeTravelEventValue.prototype.copy_9qj4ca$ = function (eventId, value) {
    return new TimeTravelEventValue(eventId === void 0 ? this.eventId : eventId, value === void 0 ? this.value : value);
  };
  TimeTravelEventValue.prototype.toString = function () {
    return 'TimeTravelEventValue(eventId=' + Kotlin.toString(this.eventId) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  TimeTravelEventValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.eventId) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  TimeTravelEventValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.eventId, other.eventId) && Kotlin.equals(this.value, other.value)))));
  };
  function writeTimeTravelExport($receiver, timeTravelExport) {
    writeByteArray($receiver, timeTravelExport.data);
  }
  function readTimeTravelExport($receiver) {
    return new TimeTravelExport(ensureNotNull(readByteArray($receiver)));
  }
  function TimeTravelExport(data) {
    this.data = data;
  }
  TimeTravelExport.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeTravelExport',
    interfaces: [ProtoObject]
  };
  function writeTimeTravelStateUpdate($receiver, timeTravelStateUpdate) {
    writeTimeTravelEventsUpdate($receiver, timeTravelStateUpdate.eventsUpdate);
    writeInt($receiver, timeTravelStateUpdate.selectedEventIndex);
    writeEnum($receiver, timeTravelStateUpdate.mode);
  }
  function readTimeTravelStateUpdate($receiver) {
    return new TimeTravelStateUpdate(readTimeTravelEventsUpdate($receiver), readInt($receiver), TimeTravelStateUpdate$Mode.values()[$receiver.readByte()]);
  }
  function TimeTravelStateUpdate(eventsUpdate, selectedEventIndex, mode) {
    this.eventsUpdate = eventsUpdate;
    this.selectedEventIndex = selectedEventIndex;
    this.mode = mode;
  }
  function TimeTravelStateUpdate$Mode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TimeTravelStateUpdate$Mode_initFields() {
    TimeTravelStateUpdate$Mode_initFields = function () {
    };
    TimeTravelStateUpdate$Mode$IDLE_instance = new TimeTravelStateUpdate$Mode('IDLE', 0);
    TimeTravelStateUpdate$Mode$RECORDING_instance = new TimeTravelStateUpdate$Mode('RECORDING', 1);
    TimeTravelStateUpdate$Mode$STOPPED_instance = new TimeTravelStateUpdate$Mode('STOPPED', 2);
  }
  var TimeTravelStateUpdate$Mode$IDLE_instance;
  function TimeTravelStateUpdate$Mode$IDLE_getInstance() {
    TimeTravelStateUpdate$Mode_initFields();
    return TimeTravelStateUpdate$Mode$IDLE_instance;
  }
  var TimeTravelStateUpdate$Mode$RECORDING_instance;
  function TimeTravelStateUpdate$Mode$RECORDING_getInstance() {
    TimeTravelStateUpdate$Mode_initFields();
    return TimeTravelStateUpdate$Mode$RECORDING_instance;
  }
  var TimeTravelStateUpdate$Mode$STOPPED_instance;
  function TimeTravelStateUpdate$Mode$STOPPED_getInstance() {
    TimeTravelStateUpdate$Mode_initFields();
    return TimeTravelStateUpdate$Mode$STOPPED_instance;
  }
  TimeTravelStateUpdate$Mode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mode',
    interfaces: [Enum]
  };
  function TimeTravelStateUpdate$Mode$values() {
    return [TimeTravelStateUpdate$Mode$IDLE_getInstance(), TimeTravelStateUpdate$Mode$RECORDING_getInstance(), TimeTravelStateUpdate$Mode$STOPPED_getInstance()];
  }
  TimeTravelStateUpdate$Mode.values = TimeTravelStateUpdate$Mode$values;
  function TimeTravelStateUpdate$Mode$valueOf(name) {
    switch (name) {
      case 'IDLE':
        return TimeTravelStateUpdate$Mode$IDLE_getInstance();
      case 'RECORDING':
        return TimeTravelStateUpdate$Mode$RECORDING_getInstance();
      case 'STOPPED':
        return TimeTravelStateUpdate$Mode$STOPPED_getInstance();
      default:throwISE('No enum constant com.arkivanov.mvikotlin.timetravel.proto.internal.data.timetravelstateupdate.TimeTravelStateUpdate.Mode.' + name);
    }
  }
  TimeTravelStateUpdate$Mode.valueOf_61zpoe$ = TimeTravelStateUpdate$Mode$valueOf;
  TimeTravelStateUpdate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeTravelStateUpdate',
    interfaces: [ProtoObject]
  };
  TimeTravelStateUpdate.prototype.component1 = function () {
    return this.eventsUpdate;
  };
  TimeTravelStateUpdate.prototype.component2 = function () {
    return this.selectedEventIndex;
  };
  TimeTravelStateUpdate.prototype.component3 = function () {
    return this.mode;
  };
  TimeTravelStateUpdate.prototype.copy_4xkcst$ = function (eventsUpdate, selectedEventIndex, mode) {
    return new TimeTravelStateUpdate(eventsUpdate === void 0 ? this.eventsUpdate : eventsUpdate, selectedEventIndex === void 0 ? this.selectedEventIndex : selectedEventIndex, mode === void 0 ? this.mode : mode);
  };
  TimeTravelStateUpdate.prototype.toString = function () {
    return 'TimeTravelStateUpdate(eventsUpdate=' + Kotlin.toString(this.eventsUpdate) + (', selectedEventIndex=' + Kotlin.toString(this.selectedEventIndex)) + (', mode=' + Kotlin.toString(this.mode)) + ')';
  };
  TimeTravelStateUpdate.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.eventsUpdate) | 0;
    result = result * 31 + Kotlin.hashCode(this.selectedEventIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.mode) | 0;
    return result;
  };
  TimeTravelStateUpdate.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.eventsUpdate, other.eventsUpdate) && Kotlin.equals(this.selectedEventIndex, other.selectedEventIndex) && Kotlin.equals(this.mode, other.mode)))));
  };
  var readList$lambda_0 = wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    return function (closure$readItem) {
      return function ($receiver, it) {
        var list = ArrayList_init(it);
        for (var index = 0; index < it; index++) {
          list.add_11rb$(closure$readItem($receiver));
        }
        return list;
      };
    };
  });
  function writeValueNode($receiver, valueNode) {
    writeString($receiver, valueNode.name);
    writeString($receiver, valueNode.type);
    writeString($receiver, valueNode.value);
    var collection = valueNode.children;
    if (collection == null) {
      writeInt($receiver, -1);
    } else {
      writeInt($receiver, collection.size);
      var tmp$;
      tmp$ = collection.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        writeValueNode($receiver, element);
      }
    }
  }
  function readValueNode($receiver) {
    var tmp$ = readString($receiver);
    var tmp$_0 = ensureNotNull(readString($receiver));
    var tmp$_1 = readString($receiver);
    var tmp$_2;
    var $receiver_0 = readInt($receiver);
    var tmp$_3;
    if ((tmp$_2 = $receiver_0 >= 0 ? $receiver_0 : null) != null) {
      var list = ArrayList_init(tmp$_2);
      for (var index = 0; index < tmp$_2; index++) {
        list.add_11rb$(readValueNode($receiver));
      }
      tmp$_3 = list;
    } else
      tmp$_3 = null;
    return new ValueNode(tmp$, tmp$_0, tmp$_1, ensureNotNull(tmp$_3));
  }
  function ValueNode(name, type, value, children) {
    if (name === void 0)
      name = null;
    if (value === void 0)
      value = null;
    if (children === void 0)
      children = emptyList();
    this.name = name;
    this.type = type;
    this.value = value;
    this.children = children;
    var $receiver = StringBuilder_init();
    if (this.name != null) {
      $receiver.append_pdl1vj$(this.name);
      $receiver.append_pdl1vj$(': ');
    }$receiver.append_pdl1vj$(this.type);
    if (this.value != null) {
      $receiver.append_pdl1vj$(' = ');
      $receiver.append_pdl1vj$(this.value);
    }this.title = $receiver.toString();
  }
  ValueNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValueNode',
    interfaces: []
  };
  ValueNode.prototype.component1 = function () {
    return this.name;
  };
  ValueNode.prototype.component2 = function () {
    return this.type;
  };
  ValueNode.prototype.component3 = function () {
    return this.value;
  };
  ValueNode.prototype.component4 = function () {
    return this.children;
  };
  ValueNode.prototype.copy_toh6zq$ = function (name, type, value, children) {
    return new ValueNode(name === void 0 ? this.name : name, type === void 0 ? this.type : type, value === void 0 ? this.value : value, children === void 0 ? this.children : children);
  };
  ValueNode.prototype.toString = function () {
    return 'ValueNode(name=' + Kotlin.toString(this.name) + (', type=' + Kotlin.toString(this.type)) + (', value=' + Kotlin.toString(this.value)) + (', children=' + Kotlin.toString(this.children)) + ')';
  };
  ValueNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.children) | 0;
    return result;
  };
  ValueNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.children, other.children)))));
  };
  var FRAME_SEPARATOR;
  var PROTO_VERSION;
  function DataReader(data) {
    this.data_0 = data;
    this.index_0 = 0;
  }
  DataReader.prototype.readByte = function () {
    var tmp$;
    return this.data_0[tmp$ = this.index_0, this.index_0 = tmp$ + 1 | 0, tmp$];
  };
  DataReader.prototype.read_mj6st8$ = function (array, startIndex, endIndex) {
    if (startIndex === void 0)
      startIndex = 0;
    if (endIndex === void 0)
      endIndex = array.length;
    arrayCopy(this.data_0, array, startIndex, this.index_0, this.index_0 + endIndex - startIndex | 0);
    this.index_0 = this.index_0 + (endIndex - startIndex) | 0;
  };
  DataReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataReader',
    interfaces: []
  };
  function readInt($receiver) {
    return $receiver.readByte() & 255 | ($receiver.readByte() & 255) << 8 | ($receiver.readByte() & 255) << 16 | ($receiver.readByte() & 255) << 24;
  }
  function readLong($receiver) {
    return Kotlin.Long.fromInt($receiver.readByte()).and(L255).or(Kotlin.Long.fromInt($receiver.readByte()).and(L255).shiftLeft(8)).or(Kotlin.Long.fromInt($receiver.readByte()).and(L255).shiftLeft(16)).or(Kotlin.Long.fromInt($receiver.readByte()).and(L255).shiftLeft(24)).or(Kotlin.Long.fromInt($receiver.readByte()).and(L255).shiftLeft(32)).or(Kotlin.Long.fromInt($receiver.readByte()).and(L255).shiftLeft(40)).or(Kotlin.Long.fromInt($receiver.readByte()).and(L255).shiftLeft(48)).or(Kotlin.Long.fromInt($receiver.readByte()).and(L255).shiftLeft(56));
  }
  function readShort($receiver) {
    return toShort(readInt($receiver));
  }
  function readChar($receiver) {
    return toChar(readInt($receiver));
  }
  function readDouble($receiver) {
    var bits = readLong($receiver);
    return Kotlin.doubleFromBits(bits);
  }
  function readBoolean($receiver) {
    return $receiver.readByte() !== toByte(0);
  }
  function readString($receiver) {
    var tmp$;
    return (tmp$ = readByteArray($receiver)) != null ? decodeToString(tmp$) : null;
  }
  function readByteArray($receiver) {
    var tmp$;
    var $receiver_0 = readInt($receiver);
    return (tmp$ = $receiver_0 >= 0 ? $receiver_0 : null) != null ? readByteArray_0($receiver, tmp$) : null;
  }
  function readIntArray($receiver) {
    var tmp$;
    var $receiver_0 = readInt($receiver);
    var tmp$_0;
    if ((tmp$ = $receiver_0 >= 0 ? $receiver_0 : null) != null) {
      var array = new Int32Array(tmp$);
      var tmp$_1;
      tmp$_1 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_1; i++) {
        array[i] = readInt($receiver);
      }
      tmp$_0 = array;
    } else
      tmp$_0 = null;
    return tmp$_0;
  }
  function readLongArray($receiver) {
    var tmp$;
    var $receiver_0 = readInt($receiver);
    var tmp$_0;
    if ((tmp$ = $receiver_0 >= 0 ? $receiver_0 : null) != null) {
      var array = longArray(tmp$, false);
      var tmp$_1;
      tmp$_1 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_1; i++) {
        array[i] = readLong($receiver);
      }
      tmp$_0 = array;
    } else
      tmp$_0 = null;
    return tmp$_0;
  }
  function readShortArray($receiver) {
    var tmp$;
    var $receiver_0 = readInt($receiver);
    var tmp$_0;
    if ((tmp$ = $receiver_0 >= 0 ? $receiver_0 : null) != null) {
      var array = new Int16Array(tmp$);
      var tmp$_1;
      tmp$_1 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_1; i++) {
        array[i] = readShort($receiver);
      }
      tmp$_0 = array;
    } else
      tmp$_0 = null;
    return tmp$_0;
  }
  function readFloatArray($receiver) {
    var tmp$;
    var $receiver_0 = readInt($receiver);
    var tmp$_0;
    if ((tmp$ = $receiver_0 >= 0 ? $receiver_0 : null) != null) {
      var array = new Float32Array(tmp$);
      var tmp$_1;
      tmp$_1 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_1; i++) {
        array[i] = readFloat($receiver);
      }
      tmp$_0 = array;
    } else
      tmp$_0 = null;
    return tmp$_0;
  }
  function readDoubleArray($receiver) {
    var tmp$;
    var $receiver_0 = readInt($receiver);
    var tmp$_0;
    if ((tmp$ = $receiver_0 >= 0 ? $receiver_0 : null) != null) {
      var array = new Float64Array(tmp$);
      var tmp$_1;
      tmp$_1 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_1; i++) {
        array[i] = readDouble($receiver);
      }
      tmp$_0 = array;
    } else
      tmp$_0 = null;
    return tmp$_0;
  }
  function readCharArray($receiver) {
    var tmp$;
    var $receiver_0 = readInt($receiver);
    var tmp$_0;
    if ((tmp$ = $receiver_0 >= 0 ? $receiver_0 : null) != null) {
      var tmp$_1;
      var array = charArray(tmp$, null);
      tmp$_1 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_1; i++) {
        var value = unboxChar(toBoxedChar(readChar($receiver)));
        array[i] = value;
      }
      tmp$_0 = array;
    } else
      tmp$_0 = null;
    return tmp$_0;
  }
  function readBooleanArray($receiver) {
    var tmp$;
    var $receiver_0 = readInt($receiver);
    var tmp$_0;
    if ((tmp$ = $receiver_0 >= 0 ? $receiver_0 : null) != null) {
      var array = booleanArray(tmp$, false);
      var tmp$_1;
      tmp$_1 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_1; i++) {
        array[i] = readBoolean($receiver);
      }
      tmp$_0 = array;
    } else
      tmp$_0 = null;
    return tmp$_0;
  }
  var readList = defineInlineFunction('MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy.com.arkivanov.mvikotlin.timetravel.proto.internal.io.readList_tobj1c$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var readList$lambda = wrapFunction(function () {
      var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
      return function (closure$readItem) {
        return function ($receiver, it) {
          var list = ArrayList_init(it);
          for (var index = 0; index < it; index++) {
            list.add_11rb$(closure$readItem($receiver));
          }
          return list;
        };
      };
    });
    return function ($receiver, readItem) {
      var tmp$;
      var $receiver_0 = readInt($receiver);
      var tmp$_0;
      if ((tmp$ = $receiver_0 >= 0 ? $receiver_0 : null) != null) {
        var list = ArrayList_init(tmp$);
        for (var index = 0; index < tmp$; index++) {
          list.add_11rb$(readItem($receiver));
        }
        tmp$_0 = list;
      } else
        tmp$_0 = null;
      return tmp$_0;
    };
  }));
  var readMap = defineInlineFunction('MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy.com.arkivanov.mvikotlin.timetravel.proto.internal.io.readMap_5a1wx8$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
    var readMap$lambda = wrapFunction(function () {
      var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
      return function (closure$readValue, closure$readKey) {
        return function ($receiver, it) {
          var map = LinkedHashMap_init();
          for (var index = 0; index < it; index++) {
            var closure$readValue_0 = closure$readValue;
            var key = closure$readKey($receiver);
            var value = closure$readValue_0($receiver);
            map.put_xwzc9p$(key, value);
          }
          return map;
        };
      };
    });
    return function ($receiver, readKey, readValue) {
      var tmp$;
      var $receiver_0 = readInt($receiver);
      var tmp$_0;
      if ((tmp$ = $receiver_0 >= 0 ? $receiver_0 : null) != null) {
        var map = LinkedHashMap_init();
        for (var index = 0; index < tmp$; index++) {
          var key = readKey($receiver);
          var value = readValue($receiver);
          map.put_xwzc9p$(key, value);
        }
        tmp$_0 = map;
      } else
        tmp$_0 = null;
      return tmp$_0;
    };
  }));
  var readEnum = defineInlineFunction('MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy.com.arkivanov.mvikotlin.timetravel.proto.internal.io.readEnum_94zchi$', function (T_0, isT, $receiver) {
    return T_0.values()[$receiver.readByte()];
  });
  function readByteArray_0($receiver, size) {
    if (size === 0) {
      return new Int8Array(0);
    } else {
      var $receiver_0 = new Int8Array(size);
      $receiver.read_mj6st8$($receiver_0);
      return $receiver_0;
    }
  }
  function readSized($receiver, read) {
    var tmp$;
    var $receiver_0 = readInt($receiver);
    return (tmp$ = $receiver_0 >= 0 ? $receiver_0 : null) != null ? read($receiver, tmp$) : null;
  }
  function DataWriter() {
    this.data_jq1udm$_0 = new Int8Array(1024);
    this.size_jhnp1d$_0 = 0;
  }
  Object.defineProperty(DataWriter.prototype, 'data', {
    configurable: true,
    get: function () {
      return this.data_jq1udm$_0;
    },
    set: function (data) {
      this.data_jq1udm$_0 = data;
    }
  });
  Object.defineProperty(DataWriter.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.size_jhnp1d$_0;
    },
    set: function (size) {
      this.size_jhnp1d$_0 = size;
    }
  });
  DataWriter.prototype.reset = function () {
    this.size = 0;
  };
  DataWriter.prototype.writeByte_s8j3t7$ = function (value) {
    var tmp$;
    this.ensureFreeSpace_0(1);
    this.data[tmp$ = this.size, this.size = tmp$ + 1 | 0, tmp$] = value;
  };
  DataWriter.prototype.write_mj6st8$ = function (array, startIndex, endIndex) {
    if (startIndex === void 0)
      startIndex = 0;
    if (endIndex === void 0)
      endIndex = array.length;
    var dataSize = endIndex - startIndex | 0;
    this.ensureFreeSpace_0(dataSize);
    arrayCopy(array, this.data, this.size, startIndex, endIndex);
    this.size = this.size + dataSize | 0;
  };
  DataWriter.prototype.ensureFreeSpace_0 = function (size) {
    var requiredSize = this.size + size | 0;
    if (this.data.length < requiredSize) {
      this.data = copyOf(this.data, this.getNextPowerOfTwo_0(requiredSize));
    }};
  DataWriter.prototype.getNextPowerOfTwo_0 = function ($receiver) {
    var tmp$, tmp$_0;
    var $receiver_0 = takeHighestOneBit($receiver);
    return (tmp$_0 = (tmp$ = !($receiver_0 === $receiver) ? $receiver_0 : null) != null ? tmp$ << 1 : null) != null ? tmp$_0 : $receiver;
  };
  DataWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataWriter',
    interfaces: []
  };
  function writeInt($receiver, value) {
    $receiver.writeByte_s8j3t7$(toByte(value & 255));
    $receiver.writeByte_s8j3t7$(toByte(value >> 8 & 255));
    $receiver.writeByte_s8j3t7$(toByte(value >> 16 & 255));
    $receiver.writeByte_s8j3t7$(toByte(value >> 24 & 255));
  }
  function writeLong($receiver, value) {
    $receiver.writeByte_s8j3t7$(toByte(value.and(L255).toInt()));
    $receiver.writeByte_s8j3t7$(toByte(value.shiftRight(8).and(L255).toInt()));
    $receiver.writeByte_s8j3t7$(toByte(value.shiftRight(16).and(L255).toInt()));
    $receiver.writeByte_s8j3t7$(toByte(value.shiftRight(24).and(L255).toInt()));
    $receiver.writeByte_s8j3t7$(toByte(value.shiftRight(32).and(L255).toInt()));
    $receiver.writeByte_s8j3t7$(toByte(value.shiftRight(40).and(L255).toInt()));
    $receiver.writeByte_s8j3t7$(toByte(value.shiftRight(48).and(L255).toInt()));
    $receiver.writeByte_s8j3t7$(toByte(value.shiftRight(56).and(L255).toInt()));
  }
  function writeShort($receiver, value) {
    writeInt($receiver, value);
  }
  function writeChar($receiver, value) {
    writeInt($receiver, value | 0);
  }
  function writeDouble($receiver, value) {
    writeLong($receiver, toRawBits(value));
  }
  function writeBoolean($receiver, value) {
    $receiver.writeByte_s8j3t7$(value ? 1 : 0);
  }
  function writeString($receiver, value) {
    writeByteArray($receiver, value != null ? encodeToByteArray(value) : null);
  }
  function writeByteArray($receiver, array) {
    if (array == null) {
      writeInt($receiver, -1);
    } else {
      writeInt($receiver, array.length);
      if (!(array.length === 0)) {
        $receiver.write_mj6st8$(array);
      }}
  }
  function writeIntArray($receiver, array) {
    if (array == null) {
      writeInt($receiver, -1);
    } else {
      writeInt($receiver, array.length);
      var action = getCallableRef('writeInt', function ($receiver, p1) {
        return writeInt($receiver, p1), Unit;
      }.bind(null, $receiver));
      var tmp$;
      for (tmp$ = 0; tmp$ !== array.length; ++tmp$) {
        var element = array[tmp$];
        action(element);
      }
    }
  }
  function writeLongArray($receiver, array) {
    if (array == null) {
      writeInt($receiver, -1);
    } else {
      writeInt($receiver, array.length);
      var action = getCallableRef('writeLong', function ($receiver, p1) {
        return writeLong($receiver, p1), Unit;
      }.bind(null, $receiver));
      var tmp$;
      for (tmp$ = 0; tmp$ !== array.length; ++tmp$) {
        var element = array[tmp$];
        action(element);
      }
    }
  }
  function writeShortArray($receiver, array) {
    if (array == null) {
      writeInt($receiver, -1);
    } else {
      writeInt($receiver, array.length);
      var action = getCallableRef('writeShort', function ($receiver, p1) {
        return writeShort($receiver, p1), Unit;
      }.bind(null, $receiver));
      var tmp$;
      for (tmp$ = 0; tmp$ !== array.length; ++tmp$) {
        var element = array[tmp$];
        action(element);
      }
    }
  }
  function writeFloatArray($receiver, array) {
    if (array == null) {
      writeInt($receiver, -1);
    } else {
      writeInt($receiver, array.length);
      var action = getCallableRef('writeFloat', function ($receiver, p1) {
        return writeFloat($receiver, p1), Unit;
      }.bind(null, $receiver));
      var tmp$;
      for (tmp$ = 0; tmp$ !== array.length; ++tmp$) {
        var element = array[tmp$];
        action(element);
      }
    }
  }
  function writeDoubleArray($receiver, array) {
    if (array == null) {
      writeInt($receiver, -1);
    } else {
      writeInt($receiver, array.length);
      var action = getCallableRef('writeDouble', function ($receiver, p1) {
        return writeDouble($receiver, p1), Unit;
      }.bind(null, $receiver));
      var tmp$;
      for (tmp$ = 0; tmp$ !== array.length; ++tmp$) {
        var element = array[tmp$];
        action(element);
      }
    }
  }
  function writeCharArray($receiver, array) {
    if (array == null) {
      writeInt($receiver, -1);
    } else {
      writeInt($receiver, array.length);
      var action = getCallableRef('writeChar', function ($receiver, p1) {
        return writeChar($receiver, unboxChar(p1)), Unit;
      }.bind(null, $receiver));
      var tmp$;
      for (tmp$ = 0; tmp$ !== array.length; ++tmp$) {
        var element = unboxChar(array[tmp$]);
        action(toBoxedChar(element));
      }
    }
  }
  function writeBooleanArray($receiver, array) {
    if (array == null) {
      writeInt($receiver, -1);
    } else {
      writeInt($receiver, array.length);
      var action = getCallableRef('writeBoolean', function ($receiver, p1) {
        return writeBoolean($receiver, p1), Unit;
      }.bind(null, $receiver));
      var tmp$;
      for (tmp$ = 0; tmp$ !== array.length; ++tmp$) {
        var element = array[tmp$];
        action(element);
      }
    }
  }
  var writeCollection = defineInlineFunction('MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy.com.arkivanov.mvikotlin.timetravel.proto.internal.io.writeCollection_f0ucdh$', wrapFunction(function () {
    var writeInt = _.com.arkivanov.mvikotlin.timetravel.proto.internal.io.writeInt_ilezc6$;
    return function ($receiver, collection, writeItem) {
      if (collection == null) {
        writeInt($receiver, -1);
      } else {
        writeInt($receiver, collection.size);
        var tmp$;
        tmp$ = collection.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          writeItem($receiver, element);
        }
      }
    };
  }));
  var writeMap = defineInlineFunction('MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy.com.arkivanov.mvikotlin.timetravel.proto.internal.io.writeMap_fi4r61$', wrapFunction(function () {
    var writeInt = _.com.arkivanov.mvikotlin.timetravel.proto.internal.io.writeInt_ilezc6$;
    return function ($receiver, map, writeKey, writeValue) {
      if (map == null) {
        writeInt($receiver, -1);
      } else {
        writeInt($receiver, map.size);
        var tmp$;
        tmp$ = map.entries.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          var key = element.key;
          var value = element.value;
          writeKey($receiver, key);
          writeValue($receiver, value);
        }
      }
    };
  }));
  function writeEnum($receiver, enum_0) {
    $receiver.writeByte_s8j3t7$(toByte(enum_0.ordinal));
  }
  function ProtoDecoder() {
  }
  ProtoDecoder.prototype.decode_fqrh44$ = function (data) {
    var tmp$;
    var reader = new DataReader(data);
    var protoVersion = readInt(reader);
    if (!(protoVersion === PROTO_VERSION)) {
      var message = 'Invalid proto version received. Expected ' + PROTO_VERSION + ', received ' + protoVersion + '.';
      throw IllegalStateException_init(message.toString());
    }switch (ProtoObjectType.values()[reader.readByte()].name) {
      case 'TIME_TRAVEL_STATE_UPDATE':
        tmp$ = readTimeTravelStateUpdate(reader);
        break;
      case 'TIME_TRAVEL_COMMAND':
        tmp$ = readTimeTravelCommand(reader);
        break;
      case 'TIME_TRAVEL_EVENT_VALUE':
        tmp$ = readTimeTravelEventValue(reader);
        break;
      case 'TIME_TRAVEL_EXPORT':
        tmp$ = readTimeTravelExport(reader);
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  ProtoDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProtoDecoder',
    interfaces: []
  };
  function ProtoEncoder(consume) {
    this.consume_0 = consume;
    this.writer_0 = new DataWriter();
  }
  ProtoEncoder.prototype.encode_qcctbg$ = function (obj) {
    this.writer_0.reset();
    this.encode_0(this.writer_0, obj);
    this.consume_0(this.writer_0.data, this.writer_0.size);
  };
  ProtoEncoder.prototype.encode_0 = function ($receiver, obj) {
    if (Kotlin.isType(obj, TimeTravelStateUpdate)) {
      var type = ProtoObjectType$TIME_TRAVEL_STATE_UPDATE_getInstance();
      writeInt(this.writer_0, PROTO_VERSION);
      writeEnum(this.writer_0, type);
      writeTimeTravelStateUpdate(this.writer_0, obj);
    } else if (Kotlin.isType(obj, TimeTravelCommand)) {
      var type_0 = ProtoObjectType$TIME_TRAVEL_COMMAND_getInstance();
      writeInt(this.writer_0, PROTO_VERSION);
      writeEnum(this.writer_0, type_0);
      writeTimeTravelCommand(this.writer_0, obj);
    } else if (Kotlin.isType(obj, TimeTravelEventValue)) {
      var type_1 = ProtoObjectType$TIME_TRAVEL_EVENT_VALUE_getInstance();
      writeInt(this.writer_0, PROTO_VERSION);
      writeEnum(this.writer_0, type_1);
      writeTimeTravelEventValue(this.writer_0, obj);
    } else if (Kotlin.isType(obj, TimeTravelExport)) {
      var type_2 = ProtoObjectType$TIME_TRAVEL_EXPORT_getInstance();
      writeInt(this.writer_0, PROTO_VERSION);
      writeEnum(this.writer_0, type_2);
      writeTimeTravelExport(this.writer_0, obj);
    } else
      throw IllegalArgumentException_init('Unsupported proto object type: ' + $receiver);
  };
  ProtoEncoder.prototype.writeTyped_0 = function (type, block) {
    writeInt(this.writer_0, PROTO_VERSION);
    writeEnum(this.writer_0, type);
    block(this.writer_0);
  };
  ProtoEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProtoEncoder',
    interfaces: []
  };
  function ProtoFrameDecoder(consume) {
    this.consume_0 = consume;
    this.buffer_0 = new Int8Array(1024);
    this.index_0 = 0;
  }
  ProtoFrameDecoder.prototype.accept_ir89t6$ = function (data, size) {
    for (var i = 0; i < size; i++) {
      this.ensureFreeSpace_0();
      this.buffer_0[this.index_0] = data[i];
      this.index_0 = this.index_0 + 1 | 0;
      if (this.isFullFrame_0()) {
        this.consume_0(this.buffer_0);
        this.index_0 = 0;
      }}
  };
  ProtoFrameDecoder.prototype.isFullFrame_0 = function () {
    if (this.index_0 < FRAME_SEPARATOR.length) {
      return false;
    }for (var i = 0; i !== FRAME_SEPARATOR.length; ++i) {
      if (this.buffer_0[this.index_0 - FRAME_SEPARATOR.length + i | 0] !== FRAME_SEPARATOR[i]) {
        return false;
      }}
    return true;
  };
  ProtoFrameDecoder.prototype.ensureFreeSpace_0 = function () {
    if (this.index_0 >= this.buffer_0.length) {
      this.buffer_0 = copyOf(this.buffer_0, this.buffer_0.length * 2 | 0);
    }};
  ProtoFrameDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProtoFrameDecoder',
    interfaces: []
  };
  function ProtoFrameEncoder(consume) {
    this.consume_0 = consume;
  }
  ProtoFrameEncoder.prototype.accept_ir89t6$ = function (data, size) {
    this.consume_0(data, size);
    this.consume_0(FRAME_SEPARATOR, FRAME_SEPARATOR.length);
  };
  ProtoFrameEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProtoFrameEncoder',
    interfaces: []
  };
  function ProtoObjectType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ProtoObjectType_initFields() {
    ProtoObjectType_initFields = function () {
    };
    ProtoObjectType$TIME_TRAVEL_STATE_UPDATE_instance = new ProtoObjectType('TIME_TRAVEL_STATE_UPDATE', 0);
    ProtoObjectType$TIME_TRAVEL_COMMAND_instance = new ProtoObjectType('TIME_TRAVEL_COMMAND', 1);
    ProtoObjectType$TIME_TRAVEL_EVENT_VALUE_instance = new ProtoObjectType('TIME_TRAVEL_EVENT_VALUE', 2);
    ProtoObjectType$TIME_TRAVEL_EXPORT_instance = new ProtoObjectType('TIME_TRAVEL_EXPORT', 3);
  }
  var ProtoObjectType$TIME_TRAVEL_STATE_UPDATE_instance;
  function ProtoObjectType$TIME_TRAVEL_STATE_UPDATE_getInstance() {
    ProtoObjectType_initFields();
    return ProtoObjectType$TIME_TRAVEL_STATE_UPDATE_instance;
  }
  var ProtoObjectType$TIME_TRAVEL_COMMAND_instance;
  function ProtoObjectType$TIME_TRAVEL_COMMAND_getInstance() {
    ProtoObjectType_initFields();
    return ProtoObjectType$TIME_TRAVEL_COMMAND_instance;
  }
  var ProtoObjectType$TIME_TRAVEL_EVENT_VALUE_instance;
  function ProtoObjectType$TIME_TRAVEL_EVENT_VALUE_getInstance() {
    ProtoObjectType_initFields();
    return ProtoObjectType$TIME_TRAVEL_EVENT_VALUE_instance;
  }
  var ProtoObjectType$TIME_TRAVEL_EXPORT_instance;
  function ProtoObjectType$TIME_TRAVEL_EXPORT_getInstance() {
    ProtoObjectType_initFields();
    return ProtoObjectType$TIME_TRAVEL_EXPORT_instance;
  }
  ProtoObjectType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProtoObjectType',
    interfaces: [Enum]
  };
  function ProtoObjectType$values() {
    return [ProtoObjectType$TIME_TRAVEL_STATE_UPDATE_getInstance(), ProtoObjectType$TIME_TRAVEL_COMMAND_getInstance(), ProtoObjectType$TIME_TRAVEL_EVENT_VALUE_getInstance(), ProtoObjectType$TIME_TRAVEL_EXPORT_getInstance()];
  }
  ProtoObjectType.values = ProtoObjectType$values;
  function ProtoObjectType$valueOf(name) {
    switch (name) {
      case 'TIME_TRAVEL_STATE_UPDATE':
        return ProtoObjectType$TIME_TRAVEL_STATE_UPDATE_getInstance();
      case 'TIME_TRAVEL_COMMAND':
        return ProtoObjectType$TIME_TRAVEL_COMMAND_getInstance();
      case 'TIME_TRAVEL_EVENT_VALUE':
        return ProtoObjectType$TIME_TRAVEL_EVENT_VALUE_getInstance();
      case 'TIME_TRAVEL_EXPORT':
        return ProtoObjectType$TIME_TRAVEL_EXPORT_getInstance();
      default:throwISE('No enum constant com.arkivanov.mvikotlin.timetravel.proto.internal.io.ProtoObjectType.' + name);
    }
  }
  ProtoObjectType.valueOf_61zpoe$ = ProtoObjectType$valueOf;
  function readFloat($receiver) {
    return readDouble($receiver);
  }
  function writeFloat($receiver, value) {
    writeDouble($receiver, value);
  }
  function ValueParser() {
  }
  ValueParser.prototype.parseValue_za3rmp$ = function (obj) {
    return new ValueNode(void 0, this.parseType_za3rmp$(obj), obj.toString());
  };
  ValueParser.prototype.parseType_za3rmp$ = function (obj) {
    var tmp$;
    return (tmp$ = Kotlin.getKClassFromExpression(obj).simpleName) != null ? tmp$ : 'Any?';
  };
  ValueParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValueParser',
    interfaces: []
  };
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$mvikotlin = package$arkivanov.mvikotlin || (package$arkivanov.mvikotlin = {});
  var package$timetravel = package$mvikotlin.timetravel || (package$mvikotlin.timetravel = {});
  var package$proto = package$timetravel.proto || (package$timetravel.proto = {});
  var package$internal = package$proto.internal || (package$proto.internal = {});
  Object.defineProperty(package$internal, 'DEFAULT_PORT', {
    get: function () {
      return DEFAULT_PORT;
    }
  });
  var package$data = package$internal.data || (package$internal.data = {});
  package$data.ProtoObject = ProtoObject;
  var package$storeeventtype = package$data.storeeventtype || (package$data.storeeventtype = {});
  package$storeeventtype.writeStoreEventType_cgdivn$ = writeStoreEventType;
  $$importsForInline$$['MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy'] = _;
  package$storeeventtype.readStoreEventType_95b5rc$ = readStoreEventType;
  Object.defineProperty(StoreEventType, 'INTENT', {
    get: StoreEventType$INTENT_getInstance
  });
  Object.defineProperty(StoreEventType, 'ACTION', {
    get: StoreEventType$ACTION_getInstance
  });
  Object.defineProperty(StoreEventType, 'MESSAGE', {
    get: StoreEventType$MESSAGE_getInstance
  });
  Object.defineProperty(StoreEventType, 'STATE', {
    get: StoreEventType$STATE_getInstance
  });
  Object.defineProperty(StoreEventType, 'LABEL', {
    get: StoreEventType$LABEL_getInstance
  });
  package$storeeventtype.StoreEventType = StoreEventType;
  var package$timetravelcomand = package$data.timetravelcomand || (package$data.timetravelcomand = {});
  package$timetravelcomand.writeTimeTravelCommand_gcc2uq$ = writeTimeTravelCommand;
  package$timetravelcomand.readTimeTravelCommand_95b5rc$ = readTimeTravelCommand;
  Object.defineProperty(TimeTravelCommand, 'StartRecording', {
    get: TimeTravelCommand$StartRecording_getInstance
  });
  Object.defineProperty(TimeTravelCommand, 'StopRecording', {
    get: TimeTravelCommand$StopRecording_getInstance
  });
  Object.defineProperty(TimeTravelCommand, 'MoveToStart', {
    get: TimeTravelCommand$MoveToStart_getInstance
  });
  Object.defineProperty(TimeTravelCommand, 'StepBackward', {
    get: TimeTravelCommand$StepBackward_getInstance
  });
  Object.defineProperty(TimeTravelCommand, 'StepForward', {
    get: TimeTravelCommand$StepForward_getInstance
  });
  Object.defineProperty(TimeTravelCommand, 'MoveToEnd', {
    get: TimeTravelCommand$MoveToEnd_getInstance
  });
  Object.defineProperty(TimeTravelCommand, 'Cancel', {
    get: TimeTravelCommand$Cancel_getInstance
  });
  TimeTravelCommand.DebugEvent = TimeTravelCommand$DebugEvent;
  TimeTravelCommand.AnalyzeEvent = TimeTravelCommand$AnalyzeEvent;
  Object.defineProperty(TimeTravelCommand, 'ExportEvents', {
    get: TimeTravelCommand$ExportEvents_getInstance
  });
  TimeTravelCommand.ImportEvents = TimeTravelCommand$ImportEvents;
  package$timetravelcomand.TimeTravelCommand = TimeTravelCommand;
  var package$timetravelevent = package$data.timetravelevent || (package$data.timetravelevent = {});
  package$timetravelevent.writeTimeTravelEvent_meu9h9$ = writeTimeTravelEvent;
  package$timetravelevent.readTimeTravelEvent_95b5rc$ = readTimeTravelEvent;
  package$timetravelevent.TimeTravelEvent = TimeTravelEvent;
  var package$timetraveleventsupdate = package$data.timetraveleventsupdate || (package$data.timetraveleventsupdate = {});
  package$timetraveleventsupdate.writeTimeTravelEventsUpdate_og7ur7$ = writeTimeTravelEventsUpdate;
  package$timetraveleventsupdate.readTimeTravelEventsUpdate_95b5rc$ = readTimeTravelEventsUpdate;
  TimeTravelEventsUpdate.All = TimeTravelEventsUpdate$All;
  TimeTravelEventsUpdate.New = TimeTravelEventsUpdate$New;
  package$timetraveleventsupdate.TimeTravelEventsUpdate = TimeTravelEventsUpdate;
  var package$timetraveleventvalue = package$data.timetraveleventvalue || (package$data.timetraveleventvalue = {});
  package$timetraveleventvalue.writeTimeTravelEventValue_3gzi0d$ = writeTimeTravelEventValue;
  package$timetraveleventvalue.readTimeTravelEventValue_95b5rc$ = readTimeTravelEventValue;
  package$timetraveleventvalue.TimeTravelEventValue = TimeTravelEventValue;
  var package$timetravelexport = package$data.timetravelexport || (package$data.timetravelexport = {});
  package$timetravelexport.writeTimeTravelExport_usnjn1$ = writeTimeTravelExport;
  package$timetravelexport.readTimeTravelExport_95b5rc$ = readTimeTravelExport;
  package$timetravelexport.TimeTravelExport = TimeTravelExport;
  var package$timetravelstateupdate = package$data.timetravelstateupdate || (package$data.timetravelstateupdate = {});
  package$timetravelstateupdate.writeTimeTravelStateUpdate_2e55wj$ = writeTimeTravelStateUpdate;
  package$timetravelstateupdate.readTimeTravelStateUpdate_95b5rc$ = readTimeTravelStateUpdate;
  Object.defineProperty(TimeTravelStateUpdate$Mode, 'IDLE', {
    get: TimeTravelStateUpdate$Mode$IDLE_getInstance
  });
  Object.defineProperty(TimeTravelStateUpdate$Mode, 'RECORDING', {
    get: TimeTravelStateUpdate$Mode$RECORDING_getInstance
  });
  Object.defineProperty(TimeTravelStateUpdate$Mode, 'STOPPED', {
    get: TimeTravelStateUpdate$Mode$STOPPED_getInstance
  });
  TimeTravelStateUpdate.Mode = TimeTravelStateUpdate$Mode;
  package$timetravelstateupdate.TimeTravelStateUpdate = TimeTravelStateUpdate;
  var package$value = package$data.value || (package$data.value = {});
  package$value.writeValueNode_3r309x$ = writeValueNode;
  package$value.readValueNode_95b5rc$ = readValueNode;
  package$value.ValueNode = ValueNode;
  var package$io = package$internal.io || (package$internal.io = {});
  Object.defineProperty(package$io, 'FRAME_SEPARATOR_8be2vx$', {
    get: function () {
      return FRAME_SEPARATOR;
    }
  });
  Object.defineProperty(package$io, 'PROTO_VERSION_8be2vx$', {
    get: function () {
      return PROTO_VERSION;
    }
  });
  package$io.DataReader = DataReader;
  package$io.readInt_95b5rc$ = readInt;
  package$io.readLong_95b5rc$ = readLong;
  package$io.readShort_95b5rc$ = readShort;
  package$io.readChar_95b5rc$ = readChar;
  package$io.readDouble_95b5rc$ = readDouble;
  package$io.readBoolean_95b5rc$ = readBoolean;
  package$io.readString_95b5rc$ = readString;
  package$io.readByteArray_95b5rc$ = readByteArray;
  package$io.readIntArray_95b5rc$ = readIntArray;
  package$io.readLongArray_95b5rc$ = readLongArray;
  package$io.readShortArray_95b5rc$ = readShortArray;
  package$io.readFloatArray_95b5rc$ = readFloatArray;
  package$io.readDoubleArray_95b5rc$ = readDoubleArray;
  package$io.readCharArray_95b5rc$ = readCharArray;
  package$io.readBooleanArray_95b5rc$ = readBooleanArray;
  package$io.readList_tobj1c$ = readList;
  package$io.readMap_5a1wx8$ = readMap;
  package$io.DataWriter = DataWriter;
  package$io.writeInt_ilezc6$ = writeInt;
  package$io.writeLong_86y21b$ = writeLong;
  package$io.writeShort_u8ul47$ = writeShort;
  package$io.writeChar_873yet$ = writeChar;
  package$io.writeDouble_785746$ = writeDouble;
  package$io.writeBoolean_iis4od$ = writeBoolean;
  package$io.writeString_kbgard$ = writeString;
  package$io.writeByteArray_28squ5$ = writeByteArray;
  package$io.writeIntArray_ddbx6o$ = writeIntArray;
  package$io.writeLongArray_lgukq1$ = writeLongArray;
  package$io.writeShortArray_joi2q5$ = writeShortArray;
  package$io.writeFloatArray_pxu1g3$ = writeFloatArray;
  package$io.writeDoubleArray_x1vbbo$ = writeDoubleArray;
  package$io.writeCharArray_3s68kx$ = writeCharArray;
  package$io.writeBooleanArray_480d2x$ = writeBooleanArray;
  package$io.writeCollection_f0ucdh$ = writeCollection;
  package$io.writeMap_fi4r61$ = writeMap;
  package$io.writeEnum_hbq4qw$ = writeEnum;
  package$io.ProtoDecoder = ProtoDecoder;
  package$io.ProtoEncoder = ProtoEncoder;
  package$io.ProtoFrameDecoder = ProtoFrameDecoder;
  package$io.ProtoFrameEncoder = ProtoFrameEncoder;
  Object.defineProperty(ProtoObjectType, 'TIME_TRAVEL_STATE_UPDATE', {
    get: ProtoObjectType$TIME_TRAVEL_STATE_UPDATE_getInstance
  });
  Object.defineProperty(ProtoObjectType, 'TIME_TRAVEL_COMMAND', {
    get: ProtoObjectType$TIME_TRAVEL_COMMAND_getInstance
  });
  Object.defineProperty(ProtoObjectType, 'TIME_TRAVEL_EVENT_VALUE', {
    get: ProtoObjectType$TIME_TRAVEL_EVENT_VALUE_getInstance
  });
  Object.defineProperty(ProtoObjectType, 'TIME_TRAVEL_EXPORT', {
    get: ProtoObjectType$TIME_TRAVEL_EXPORT_getInstance
  });
  package$io.ProtoObjectType = ProtoObjectType;
  package$io.readFloat_95b5rc$ = readFloat;
  package$io.writeFloat_u1rsxz$ = writeFloat;
  package$value.ValueParser = ValueParser;
  DEFAULT_PORT = 6379;
  FRAME_SEPARATOR = new Int8Array([0, 127, 0, -128 | 0, 1, 127, -1 | 0, -128 | 0]);
  PROTO_VERSION = 1;
  Kotlin.defineModule('MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy', _);
  return _;
}));

//# sourceMappingURL=MVIKotlin-mvikotlin-timetravel-proto-internal-js-legacy.js.map
