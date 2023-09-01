(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy'.");
    }root['Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy'] = factory(typeof this['Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy'] === 'undefined' ? {} : this['Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Collection = Kotlin.kotlin.collections.Collection;
  var MutableCollection = Kotlin.kotlin.collections.MutableCollection;
  var AbstractList = Kotlin.kotlin.collections.AbstractList;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var List = Kotlin.kotlin.collections.List;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var Map = Kotlin.kotlin.collections.Map;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var Set = Kotlin.kotlin.collections.Set;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var equals = Kotlin.equals;
  var hashCode = Kotlin.hashCode;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var addAll_0 = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var addAll_1 = Kotlin.kotlin.collections.addAll_tj7pfx$;
  var removeAll = Kotlin.kotlin.collections.removeAll_ipc267$;
  var removeAll_0 = Kotlin.kotlin.collections.removeAll_ye1y7v$;
  var removeAll_1 = Kotlin.kotlin.collections.removeAll_tj7pfx$;
  var throwCCE = Kotlin.throwCCE;
  var putAll = Kotlin.kotlin.collections.putAll_cweazw$;
  var putAll_0 = Kotlin.kotlin.collections.putAll_5gv49o$;
  var putAll_1 = Kotlin.kotlin.collections.putAll_2ud8ki$;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var toCollection = Kotlin.kotlin.text.toCollection_7uruwd$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var ListIterator = Kotlin.kotlin.collections.ListIterator;
  var copyOf = Kotlin.kotlin.collections.copyOf_8ujjk8$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Any = Object;
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_dqglrj$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var fill = Kotlin.kotlin.collections.fill_jfbbbd$;
  var AbstractMutableList = Kotlin.kotlin.collections.AbstractMutableList;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ConcurrentModificationException_init = Kotlin.kotlin.ConcurrentModificationException_init;
  var IllegalStateException_init_0 = Kotlin.kotlin.IllegalStateException_init;
  var MutableListIterator = Kotlin.kotlin.collections.MutableListIterator;
  var copyOfRange = Kotlin.kotlin.collections.copyOfRange_5f8l3u$;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var lastIndexOf = Kotlin.kotlin.collections.lastIndexOf_mjy6jw$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var AbstractMap = Kotlin.kotlin.collections.AbstractMap;
  var AbstractMutableMap = Kotlin.kotlin.collections.AbstractMutableMap;
  var MutableMap$MutableEntry = Kotlin.kotlin.collections.MutableMap.MutableEntry;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var Array_0 = Array;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init;
  var AbstractMutableSet = Kotlin.kotlin.collections.AbstractMutableSet;
  var AbstractMutableCollection = Kotlin.kotlin.collections.AbstractMutableCollection;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var toString = Kotlin.toString;
  var AbstractSet = Kotlin.kotlin.collections.AbstractSet;
  var AbstractCollection = Kotlin.kotlin.collections.AbstractCollection;
  var countOneBits = Kotlin.kotlin.countOneBits_s8ev3n$;
  var takeLowestOneBit = Kotlin.kotlin.takeLowestOneBit_s8ev3n$;
  var countTrailingZeroBits = Kotlin.kotlin.countTrailingZeroBits_s8ev3n$;
  var removeAll_2 = Kotlin.kotlin.collections.removeAll_uhyeqt$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var ConcurrentModificationException_init_0 = Kotlin.kotlin.ConcurrentModificationException_init_pdl1vj$;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var AssertionError_init = Kotlin.kotlin.AssertionError_init_pdl1vj$;
  ImmutableList$SubList.prototype = Object.create(AbstractList.prototype);
  ImmutableList$SubList.prototype.constructor = ImmutableList$SubList;
  ImmutableSetAdapter.prototype = Object.create(ImmutableCollectionAdapter.prototype);
  ImmutableSetAdapter.prototype.constructor = ImmutableSetAdapter;
  SingleElementListIterator.prototype = Object.create(AbstractListIterator.prototype);
  SingleElementListIterator.prototype.constructor = SingleElementListIterator;
  AbstractPersistentList.prototype = Object.create(AbstractList.prototype);
  AbstractPersistentList.prototype.constructor = AbstractPersistentList;
  BufferIterator.prototype = Object.create(AbstractListIterator.prototype);
  BufferIterator.prototype.constructor = BufferIterator;
  PersistentVector.prototype = Object.create(AbstractPersistentList.prototype);
  PersistentVector.prototype.constructor = PersistentVector;
  PersistentVectorBuilder.prototype = Object.create(AbstractMutableList.prototype);
  PersistentVectorBuilder.prototype.constructor = PersistentVectorBuilder;
  PersistentVectorIterator.prototype = Object.create(AbstractListIterator.prototype);
  PersistentVectorIterator.prototype.constructor = PersistentVectorIterator;
  PersistentVectorMutableIterator.prototype = Object.create(AbstractListIterator.prototype);
  PersistentVectorMutableIterator.prototype.constructor = PersistentVectorMutableIterator;
  SmallPersistentVector.prototype = Object.create(AbstractPersistentList.prototype);
  SmallPersistentVector.prototype.constructor = SmallPersistentVector;
  TrieIterator.prototype = Object.create(AbstractListIterator.prototype);
  TrieIterator.prototype.constructor = TrieIterator;
  PersistentHashMap.prototype = Object.create(AbstractMap.prototype);
  PersistentHashMap.prototype.constructor = PersistentHashMap;
  PersistentHashMapBuilder.prototype = Object.create(AbstractMutableMap.prototype);
  PersistentHashMapBuilder.prototype.constructor = PersistentHashMapBuilder;
  TrieNodeMutableEntriesIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeMutableEntriesIterator.prototype.constructor = TrieNodeMutableEntriesIterator;
  MutableMapEntry.prototype = Object.create(MapEntry.prototype);
  MutableMapEntry.prototype.constructor = MutableMapEntry;
  PersistentHashMapBuilderBaseIterator.prototype = Object.create(PersistentHashMapBaseIterator.prototype);
  PersistentHashMapBuilderBaseIterator.prototype.constructor = PersistentHashMapBuilderBaseIterator;
  PersistentHashMapBuilderKeysIterator.prototype = Object.create(PersistentHashMapBuilderBaseIterator.prototype);
  PersistentHashMapBuilderKeysIterator.prototype.constructor = PersistentHashMapBuilderKeysIterator;
  PersistentHashMapBuilderValuesIterator.prototype = Object.create(PersistentHashMapBuilderBaseIterator.prototype);
  PersistentHashMapBuilderValuesIterator.prototype.constructor = PersistentHashMapBuilderValuesIterator;
  PersistentHashMapBuilderEntries.prototype = Object.create(AbstractMutableSet.prototype);
  PersistentHashMapBuilderEntries.prototype.constructor = PersistentHashMapBuilderEntries;
  PersistentHashMapBuilderKeys.prototype = Object.create(AbstractMutableSet.prototype);
  PersistentHashMapBuilderKeys.prototype.constructor = PersistentHashMapBuilderKeys;
  PersistentHashMapBuilderValues.prototype = Object.create(AbstractMutableCollection.prototype);
  PersistentHashMapBuilderValues.prototype.constructor = PersistentHashMapBuilderValues;
  TrieNodeKeysIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeKeysIterator.prototype.constructor = TrieNodeKeysIterator;
  TrieNodeValuesIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeValuesIterator.prototype.constructor = TrieNodeValuesIterator;
  TrieNodeEntriesIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeEntriesIterator.prototype.constructor = TrieNodeEntriesIterator;
  PersistentHashMapEntriesIterator.prototype = Object.create(PersistentHashMapBaseIterator.prototype);
  PersistentHashMapEntriesIterator.prototype.constructor = PersistentHashMapEntriesIterator;
  PersistentHashMapKeysIterator.prototype = Object.create(PersistentHashMapBaseIterator.prototype);
  PersistentHashMapKeysIterator.prototype.constructor = PersistentHashMapKeysIterator;
  PersistentHashMapValuesIterator.prototype = Object.create(PersistentHashMapBaseIterator.prototype);
  PersistentHashMapValuesIterator.prototype.constructor = PersistentHashMapValuesIterator;
  PersistentHashMapEntries.prototype = Object.create(AbstractSet.prototype);
  PersistentHashMapEntries.prototype.constructor = PersistentHashMapEntries;
  PersistentHashMapKeys.prototype = Object.create(AbstractSet.prototype);
  PersistentHashMapKeys.prototype.constructor = PersistentHashMapKeys;
  PersistentHashMapValues.prototype = Object.create(AbstractCollection.prototype);
  PersistentHashMapValues.prototype.constructor = PersistentHashMapValues;
  PersistentHashSet.prototype = Object.create(AbstractSet.prototype);
  PersistentHashSet.prototype.constructor = PersistentHashSet;
  PersistentHashSetBuilder.prototype = Object.create(AbstractMutableSet.prototype);
  PersistentHashSetBuilder.prototype.constructor = PersistentHashSetBuilder;
  PersistentHashSetMutableIterator.prototype = Object.create(PersistentHashSetIterator.prototype);
  PersistentHashSetMutableIterator.prototype.constructor = PersistentHashSetMutableIterator;
  PersistentOrderedMap.prototype = Object.create(AbstractMap.prototype);
  PersistentOrderedMap.prototype.constructor = PersistentOrderedMap;
  PersistentOrderedMapBuilder.prototype = Object.create(AbstractMutableMap.prototype);
  PersistentOrderedMapBuilder.prototype.constructor = PersistentOrderedMapBuilder;
  MutableMapEntry_0.prototype = Object.create(MapEntry.prototype);
  MutableMapEntry_0.prototype.constructor = MutableMapEntry_0;
  PersistentOrderedMapBuilderEntries.prototype = Object.create(AbstractMutableSet.prototype);
  PersistentOrderedMapBuilderEntries.prototype.constructor = PersistentOrderedMapBuilderEntries;
  PersistentOrderedMapBuilderKeys.prototype = Object.create(AbstractMutableSet.prototype);
  PersistentOrderedMapBuilderKeys.prototype.constructor = PersistentOrderedMapBuilderKeys;
  PersistentOrderedMapBuilderValues.prototype = Object.create(AbstractMutableCollection.prototype);
  PersistentOrderedMapBuilderValues.prototype.constructor = PersistentOrderedMapBuilderValues;
  PersistentOrderedMapEntries.prototype = Object.create(AbstractSet.prototype);
  PersistentOrderedMapEntries.prototype.constructor = PersistentOrderedMapEntries;
  PersistentOrderedMapKeys.prototype = Object.create(AbstractSet.prototype);
  PersistentOrderedMapKeys.prototype.constructor = PersistentOrderedMapKeys;
  PersistentOrderedMapValues.prototype = Object.create(AbstractCollection.prototype);
  PersistentOrderedMapValues.prototype.constructor = PersistentOrderedMapValues;
  PersistentOrderedSet.prototype = Object.create(AbstractSet.prototype);
  PersistentOrderedSet.prototype.constructor = PersistentOrderedSet;
  PersistentOrderedSetBuilder.prototype = Object.create(AbstractMutableSet.prototype);
  PersistentOrderedSetBuilder.prototype.constructor = PersistentOrderedSetBuilder;
  PersistentOrderedSetMutableIterator.prototype = Object.create(PersistentOrderedSetIterator.prototype);
  PersistentOrderedSetMutableIterator.prototype.constructor = PersistentOrderedSetMutableIterator;
  function ImmutableCollection() {
  }
  ImmutableCollection.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ImmutableCollection',
    interfaces: [Collection]
  };
  function PersistentCollection() {
  }
  function PersistentCollection$Builder() {
  }
  PersistentCollection$Builder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Builder',
    interfaces: [MutableCollection]
  };
  PersistentCollection.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PersistentCollection',
    interfaces: [ImmutableCollection]
  };
  function ImmutableList() {
  }
  ImmutableList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return new ImmutableList$SubList(this, fromIndex, toIndex);
  };
  function ImmutableList$SubList(source, fromIndex, toIndex) {
    AbstractList.call(this);
    this.source_0 = source;
    this.fromIndex_0 = fromIndex;
    this.toIndex_0 = toIndex;
    this._size_0 = 0;
    ListImplementation_getInstance().checkRangeIndexes_cub51b$(this.fromIndex_0, this.toIndex_0, this.source_0.size);
    this._size_0 = this.toIndex_0 - this.fromIndex_0 | 0;
  }
  ImmutableList$SubList.prototype.get_za3lpa$ = function (index) {
    ListImplementation_getInstance().checkElementIndex_6xvm5r$(index, this._size_0);
    return this.source_0.get_za3lpa$(this.fromIndex_0 + index | 0);
  };
  Object.defineProperty(ImmutableList$SubList.prototype, 'size', {
    configurable: true,
    get: function () {
      return this._size_0;
    }
  });
  ImmutableList$SubList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    ListImplementation_getInstance().checkRangeIndexes_cub51b$(fromIndex, toIndex, this._size_0);
    return new ImmutableList$SubList(this.source_0, this.fromIndex_0 + fromIndex | 0, this.fromIndex_0 + toIndex | 0);
  };
  ImmutableList$SubList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubList',
    interfaces: [AbstractList, ImmutableList]
  };
  ImmutableList.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ImmutableList',
    interfaces: [ImmutableCollection, List]
  };
  function PersistentList() {
  }
  function PersistentList$Builder() {
  }
  PersistentList$Builder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Builder',
    interfaces: [PersistentCollection$Builder, MutableList]
  };
  PersistentList.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PersistentList',
    interfaces: [PersistentCollection, ImmutableList]
  };
  function ImmutableMap() {
  }
  ImmutableMap.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ImmutableMap',
    interfaces: [Map]
  };
  function PersistentMap() {
  }
  function PersistentMap$Builder() {
  }
  PersistentMap$Builder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Builder',
    interfaces: [MutableMap]
  };
  PersistentMap.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PersistentMap',
    interfaces: [ImmutableMap]
  };
  function ImmutableSet() {
  }
  ImmutableSet.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ImmutableSet',
    interfaces: [ImmutableCollection, Set]
  };
  function PersistentSet() {
  }
  function PersistentSet$Builder() {
  }
  PersistentSet$Builder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Builder',
    interfaces: [PersistentCollection$Builder, MutableSet]
  };
  PersistentSet.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PersistentSet',
    interfaces: [PersistentCollection, ImmutableSet]
  };
  function ImmutableCollectionAdapter(impl) {
    this.impl_gt0ik7$_0 = impl;
  }
  ImmutableCollectionAdapter.prototype.equals = function (other) {
    return equals(this.impl_gt0ik7$_0, other);
  };
  ImmutableCollectionAdapter.prototype.hashCode = function () {
    return hashCode(this.impl_gt0ik7$_0);
  };
  ImmutableCollectionAdapter.prototype.toString = function () {
    return this.impl_gt0ik7$_0.toString();
  };
  Object.defineProperty(ImmutableCollectionAdapter.prototype, 'size', {
    get: function () {
      return this.impl_gt0ik7$_0.size;
    }
  });
  ImmutableCollectionAdapter.prototype.contains_11rb$ = function (element) {
    return this.impl_gt0ik7$_0.contains_11rb$(element);
  };
  ImmutableCollectionAdapter.prototype.containsAll_brywnq$ = function (elements) {
    return this.impl_gt0ik7$_0.containsAll_brywnq$(elements);
  };
  ImmutableCollectionAdapter.prototype.isEmpty = function () {
    return this.impl_gt0ik7$_0.isEmpty();
  };
  ImmutableCollectionAdapter.prototype.iterator = function () {
    return this.impl_gt0ik7$_0.iterator();
  };
  ImmutableCollectionAdapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImmutableCollectionAdapter',
    interfaces: [ImmutableCollection, Collection]
  };
  function ImmutableListAdapter(impl) {
    this.impl_0 = impl;
  }
  ImmutableListAdapter.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return new ImmutableListAdapter(this.impl_0.subList_vux9f0$(fromIndex, toIndex));
  };
  ImmutableListAdapter.prototype.equals = function (other) {
    return equals(this.impl_0, other);
  };
  ImmutableListAdapter.prototype.hashCode = function () {
    return hashCode(this.impl_0);
  };
  ImmutableListAdapter.prototype.toString = function () {
    return this.impl_0.toString();
  };
  Object.defineProperty(ImmutableListAdapter.prototype, 'size', {
    get: function () {
      return this.impl_0.size;
    }
  });
  ImmutableListAdapter.prototype.contains_11rb$ = function (element) {
    return this.impl_0.contains_11rb$(element);
  };
  ImmutableListAdapter.prototype.containsAll_brywnq$ = function (elements) {
    return this.impl_0.containsAll_brywnq$(elements);
  };
  ImmutableListAdapter.prototype.get_za3lpa$ = function (index) {
    return this.impl_0.get_za3lpa$(index);
  };
  ImmutableListAdapter.prototype.indexOf_11rb$ = function (element) {
    return this.impl_0.indexOf_11rb$(element);
  };
  ImmutableListAdapter.prototype.isEmpty = function () {
    return this.impl_0.isEmpty();
  };
  ImmutableListAdapter.prototype.iterator = function () {
    return this.impl_0.iterator();
  };
  ImmutableListAdapter.prototype.lastIndexOf_11rb$ = function (element) {
    return this.impl_0.lastIndexOf_11rb$(element);
  };
  ImmutableListAdapter.prototype.listIterator = function () {
    return this.impl_0.listIterator();
  };
  ImmutableListAdapter.prototype.listIterator_za3lpa$ = function (index) {
    return this.impl_0.listIterator_za3lpa$(index);
  };
  ImmutableListAdapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImmutableListAdapter',
    interfaces: [ImmutableList, List]
  };
  function ImmutableSetAdapter(impl) {
    ImmutableCollectionAdapter.call(this, impl);
  }
  ImmutableSetAdapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImmutableSetAdapter',
    interfaces: [ImmutableCollectionAdapter, ImmutableSet]
  };
  function ImmutableMapAdapter(impl) {
    this.impl_0 = impl;
    this.keys_vr4in$_0 = new ImmutableSetAdapter(this.impl_0.keys);
    this.values_ckmdpt$_0 = new ImmutableCollectionAdapter(this.impl_0.values);
    this.entries_nahagh$_0 = new ImmutableSetAdapter(this.impl_0.entries);
  }
  Object.defineProperty(ImmutableMapAdapter.prototype, 'keys', {
    configurable: true,
    get: function () {
      return this.keys_vr4in$_0;
    }
  });
  Object.defineProperty(ImmutableMapAdapter.prototype, 'values', {
    configurable: true,
    get: function () {
      return this.values_ckmdpt$_0;
    }
  });
  Object.defineProperty(ImmutableMapAdapter.prototype, 'entries', {
    configurable: true,
    get: function () {
      return this.entries_nahagh$_0;
    }
  });
  ImmutableMapAdapter.prototype.equals = function (other) {
    return equals(this.impl_0, other);
  };
  ImmutableMapAdapter.prototype.hashCode = function () {
    return hashCode(this.impl_0);
  };
  ImmutableMapAdapter.prototype.toString = function () {
    return this.impl_0.toString();
  };
  Object.defineProperty(ImmutableMapAdapter.prototype, 'size', {
    get: function () {
      return this.impl_0.size;
    }
  });
  ImmutableMapAdapter.prototype.containsKey_11rb$ = function (key) {
    return this.impl_0.containsKey_11rb$(key);
  };
  ImmutableMapAdapter.prototype.containsValue_11rc$ = function (value) {
    return this.impl_0.containsValue_11rc$(value);
  };
  ImmutableMapAdapter.prototype.get_11rb$ = function (key) {
    return this.impl_0.get_11rb$(key);
  };
  ImmutableMapAdapter.prototype.isEmpty = function () {
    return this.impl_0.isEmpty();
  };
  ImmutableMapAdapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImmutableMapAdapter',
    interfaces: [ImmutableMap, Map]
  };
  var mutate = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.mutate_vgo14u$', function ($receiver, mutator) {
    var $receiver_0 = $receiver.builder();
    mutator($receiver_0);
    return $receiver_0.build();
  });
  var mutate_0 = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.mutate_3l7z2w$', function ($receiver, mutator) {
    var $receiver_0 = $receiver.builder();
    mutator($receiver_0);
    return $receiver_0.build();
  });
  var mutate_1 = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.mutate_nyoq7e$', wrapFunction(function () {
    var PersistentMap = _.kotlinx.collections.immutable.PersistentMap;
    var throwCCE = Kotlin.throwCCE;
    return function ($receiver, mutator) {
      var tmp$;
      var $receiver_0 = (Kotlin.isType(tmp$ = $receiver, PersistentMap) ? tmp$ : throwCCE()).builder();
      mutator($receiver_0);
      return $receiver_0.build();
    };
  }));
  var plus = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.plus_rasrbt$', function ($receiver, element) {
    return $receiver.add_11rb$(element);
  });
  var minus = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.minus_rasrbt$', function ($receiver, element) {
    return $receiver.remove_11rb$(element);
  });
  function plus_0($receiver, elements) {
    var tmp$;
    if (Kotlin.isType(elements, Collection))
      tmp$ = $receiver.addAll_brywnq$(elements);
    else {
      var $receiver_0 = $receiver.builder();
      addAll($receiver_0, elements);
      tmp$ = $receiver_0.build();
    }
    return tmp$;
  }
  function plus_1($receiver, elements) {
    var $receiver_0 = $receiver.builder();
    addAll_0($receiver_0, elements);
    return $receiver_0.build();
  }
  function plus_2($receiver, elements) {
    var $receiver_0 = $receiver.builder();
    addAll_1($receiver_0, elements);
    return $receiver_0.build();
  }
  function minus_0($receiver, elements) {
    var tmp$;
    if (Kotlin.isType(elements, Collection))
      tmp$ = $receiver.removeAll_brywnq$(elements);
    else {
      var $receiver_0 = $receiver.builder();
      removeAll($receiver_0, elements);
      tmp$ = $receiver_0.build();
    }
    return tmp$;
  }
  function minus_1($receiver, elements) {
    var $receiver_0 = $receiver.builder();
    removeAll_0($receiver_0, elements);
    return $receiver_0.build();
  }
  function minus_2($receiver, elements) {
    var $receiver_0 = $receiver.builder();
    removeAll_1($receiver_0, elements);
    return $receiver_0.build();
  }
  var plus_3 = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.plus_stc0vb$', function ($receiver, element) {
    return $receiver.add_11rb$(element);
  });
  var minus_3 = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.minus_stc0vb$', function ($receiver, element) {
    return $receiver.remove_11rb$(element);
  });
  function plus_4($receiver, elements) {
    var tmp$;
    if (Kotlin.isType(elements, Collection))
      tmp$ = $receiver.addAll_brywnq$(elements);
    else {
      var $receiver_0 = $receiver.builder();
      addAll($receiver_0, elements);
      tmp$ = $receiver_0.build();
    }
    return tmp$;
  }
  function plus_5($receiver, elements) {
    var $receiver_0 = $receiver.builder();
    addAll_0($receiver_0, elements);
    return $receiver_0.build();
  }
  function plus_6($receiver, elements) {
    var $receiver_0 = $receiver.builder();
    addAll_1($receiver_0, elements);
    return $receiver_0.build();
  }
  function minus_4($receiver, elements) {
    var tmp$;
    if (Kotlin.isType(elements, Collection))
      tmp$ = $receiver.removeAll_brywnq$(elements);
    else {
      var $receiver_0 = $receiver.builder();
      removeAll($receiver_0, elements);
      tmp$ = $receiver_0.build();
    }
    return tmp$;
  }
  function minus_5($receiver, elements) {
    var $receiver_0 = $receiver.builder();
    removeAll_0($receiver_0, elements);
    return $receiver_0.build();
  }
  function minus_6($receiver, elements) {
    var $receiver_0 = $receiver.builder();
    removeAll_1($receiver_0, elements);
    return $receiver_0.build();
  }
  var plus_7 = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.plus_8rum3t$', function ($receiver, element) {
    return $receiver.add_11rb$(element);
  });
  var minus_7 = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.minus_8rum3t$', function ($receiver, element) {
    return $receiver.remove_11rb$(element);
  });
  function plus_8($receiver, elements) {
    var tmp$;
    if (Kotlin.isType(elements, Collection))
      tmp$ = $receiver.addAll_brywnq$(elements);
    else {
      var $receiver_0 = $receiver.builder();
      addAll($receiver_0, elements);
      tmp$ = $receiver_0.build();
    }
    return tmp$;
  }
  function plus_9($receiver, elements) {
    var $receiver_0 = $receiver.builder();
    addAll_0($receiver_0, elements);
    return $receiver_0.build();
  }
  function plus_10($receiver, elements) {
    var $receiver_0 = $receiver.builder();
    addAll_1($receiver_0, elements);
    return $receiver_0.build();
  }
  function minus_8($receiver, elements) {
    var tmp$;
    if (Kotlin.isType(elements, Collection))
      tmp$ = $receiver.removeAll_brywnq$(elements);
    else {
      var $receiver_0 = $receiver.builder();
      removeAll($receiver_0, elements);
      tmp$ = $receiver_0.build();
    }
    return tmp$;
  }
  function minus_9($receiver, elements) {
    var $receiver_0 = $receiver.builder();
    removeAll_0($receiver_0, elements);
    return $receiver_0.build();
  }
  function minus_10($receiver, elements) {
    var $receiver_0 = $receiver.builder();
    removeAll_1($receiver_0, elements);
    return $receiver_0.build();
  }
  var plus_11 = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.plus_c13jiu$', wrapFunction(function () {
    var PersistentMap = _.kotlinx.collections.immutable.PersistentMap;
    var throwCCE = Kotlin.throwCCE;
    return function ($receiver, pair) {
      var tmp$;
      return (Kotlin.isType(tmp$ = $receiver, PersistentMap) ? tmp$ : throwCCE()).put_xwzc9p$(pair.first, pair.second);
    };
  }));
  var plus_12 = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.plus_rrmxlt$', wrapFunction(function () {
    var putAll = _.kotlinx.collections.immutable.putAll_rrmxlt$;
    return function ($receiver, pairs) {
      return putAll($receiver, pairs);
    };
  }));
  var plus_13 = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.plus_79exe1$', wrapFunction(function () {
    var putAll = _.kotlinx.collections.immutable.putAll_79exe1$;
    return function ($receiver, pairs) {
      return putAll($receiver, pairs);
    };
  }));
  var plus_14 = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.plus_l28i8h$', wrapFunction(function () {
    var putAll = _.kotlinx.collections.immutable.putAll_l28i8h$;
    return function ($receiver, pairs) {
      return putAll($receiver, pairs);
    };
  }));
  var plus_15 = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.plus_pw1y0f$', wrapFunction(function () {
    var putAll = _.kotlinx.collections.immutable.putAll_pw1y0f$;
    return function ($receiver, map) {
      return putAll($receiver, map);
    };
  }));
  function putAll_2($receiver, map) {
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, PersistentMap) ? tmp$ : throwCCE()).putAll_a2k3zr$(map);
  }
  function putAll_3($receiver, pairs) {
    var tmp$;
    var $receiver_0 = (Kotlin.isType(tmp$ = $receiver, PersistentMap) ? tmp$ : throwCCE()).builder();
    putAll($receiver_0, pairs);
    return $receiver_0.build();
  }
  function putAll_4($receiver, pairs) {
    var tmp$;
    var $receiver_0 = (Kotlin.isType(tmp$ = $receiver, PersistentMap) ? tmp$ : throwCCE()).builder();
    putAll_0($receiver_0, pairs);
    return $receiver_0.build();
  }
  function putAll_5($receiver, pairs) {
    var tmp$;
    var $receiver_0 = (Kotlin.isType(tmp$ = $receiver, PersistentMap) ? tmp$ : throwCCE()).builder();
    putAll_1($receiver_0, pairs);
    return $receiver_0.build();
  }
  function minus_11($receiver, key) {
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, PersistentMap) ? tmp$ : throwCCE()).remove_11rb$(key);
  }
  function minus_12($receiver, keys) {
    var tmp$;
    var $receiver_0 = (Kotlin.isType(tmp$ = $receiver, PersistentMap) ? tmp$ : throwCCE()).builder();
    removeAll($receiver_0.keys, keys);
    return $receiver_0.build();
  }
  function minus_13($receiver, keys) {
    var tmp$;
    var $receiver_0 = (Kotlin.isType(tmp$ = $receiver, PersistentMap) ? tmp$ : throwCCE()).builder();
    removeAll_0($receiver_0.keys, keys);
    return $receiver_0.build();
  }
  function minus_14($receiver, keys) {
    var tmp$;
    var $receiver_0 = (Kotlin.isType(tmp$ = $receiver, PersistentMap) ? tmp$ : throwCCE()).builder();
    removeAll_1($receiver_0.keys, keys);
    return $receiver_0.build();
  }
  function persistentListOf(elements) {
    return persistentVectorOf().addAll_brywnq$(asList(elements));
  }
  function persistentListOf_0() {
    return persistentVectorOf();
  }
  function persistentSetOf(elements) {
    return PersistentOrderedSet$Companion_getInstance().emptyOf_tnbmyv$().addAll_brywnq$(asList(elements));
  }
  function persistentSetOf_0() {
    return PersistentOrderedSet$Companion_getInstance().emptyOf_tnbmyv$();
  }
  function persistentHashSetOf(elements) {
    return PersistentHashSet$Companion_getInstance().emptyOf_tnbmyv$().addAll_brywnq$(asList(elements));
  }
  function persistentHashSetOf_0() {
    return PersistentHashSet$Companion_getInstance().emptyOf_tnbmyv$();
  }
  function persistentMapOf(pairs) {
    var tmp$;
    var $receiver = (Kotlin.isType(tmp$ = PersistentOrderedMap$Companion_getInstance().emptyOf_3w54xu$(), PersistentMap) ? tmp$ : throwCCE()).builder();
    putAll_0($receiver, pairs);
    return $receiver.build();
  }
  function persistentMapOf_0() {
    return PersistentOrderedMap$Companion_getInstance().emptyOf_3w54xu$();
  }
  function persistentHashMapOf(pairs) {
    var tmp$;
    var $receiver = (Kotlin.isType(tmp$ = PersistentHashMap$Companion_getInstance().emptyOf_3w54xu$(), PersistentMap) ? tmp$ : throwCCE()).builder();
    putAll_0($receiver, pairs);
    return $receiver.build();
  }
  function persistentHashMapOf_0() {
    return PersistentHashMap$Companion_getInstance().emptyOf_3w54xu$();
  }
  function immutableListOf(elements) {
    return persistentListOf(elements.slice());
  }
  function immutableListOf_0() {
    return persistentListOf_0();
  }
  function immutableSetOf(elements) {
    return persistentSetOf(elements.slice());
  }
  function immutableSetOf_0() {
    return persistentSetOf_0();
  }
  function immutableHashSetOf(elements) {
    return persistentHashSetOf(elements.slice());
  }
  function immutableMapOf(pairs) {
    return persistentMapOf(pairs.slice());
  }
  function immutableHashMapOf(pairs) {
    return persistentHashMapOf(pairs.slice());
  }
  function toImmutableList($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, ImmutableList) ? tmp$ : null) != null ? tmp$_0 : toPersistentList($receiver);
  }
  function toPersistentList($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    return (tmp$_3 = (tmp$_2 = Kotlin.isType(tmp$ = $receiver, PersistentList) ? tmp$ : null) != null ? tmp$_2 : (tmp$_1 = Kotlin.isType(tmp$_0 = $receiver, PersistentList$Builder) ? tmp$_0 : null) != null ? tmp$_1.build() : null) != null ? tmp$_3 : plus_4(persistentListOf_0(), $receiver);
  }
  function toImmutableList_0($receiver) {
    return toPersistentList_0($receiver);
  }
  function toPersistentList_0($receiver) {
    var $receiver_0 = persistentListOf_0().builder();
    toCollection($receiver, $receiver_0);
    return $receiver_0.build();
  }
  function toPersistentSet($receiver) {
    var $receiver_0 = persistentSetOf_0().builder();
    toCollection($receiver, $receiver_0);
    return $receiver_0.build();
  }
  function toPersistentHashSet($receiver) {
    var $receiver_0 = persistentHashSetOf_0().builder();
    toCollection($receiver, $receiver_0);
    return $receiver_0.build();
  }
  function toImmutableSet($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    return (tmp$_3 = (tmp$_2 = Kotlin.isType(tmp$ = $receiver, ImmutableSet) ? tmp$ : null) != null ? tmp$_2 : (tmp$_1 = Kotlin.isType(tmp$_0 = $receiver, PersistentSet$Builder) ? tmp$_0 : null) != null ? tmp$_1.build() : null) != null ? tmp$_3 : plus_8(persistentSetOf_0(), $receiver);
  }
  function toPersistentSet_0($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    return (tmp$_3 = (tmp$_2 = Kotlin.isType(tmp$ = $receiver, PersistentOrderedSet) ? tmp$ : null) != null ? tmp$_2 : (tmp$_1 = Kotlin.isType(tmp$_0 = $receiver, PersistentOrderedSetBuilder) ? tmp$_0 : null) != null ? tmp$_1.build() : null) != null ? tmp$_3 : plus_8(PersistentOrderedSet$Companion_getInstance().emptyOf_tnbmyv$(), $receiver);
  }
  function toPersistentHashSet_0($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    return (tmp$_3 = (tmp$_2 = Kotlin.isType(tmp$ = $receiver, PersistentHashSet) ? tmp$ : null) != null ? tmp$_2 : (tmp$_1 = Kotlin.isType(tmp$_0 = $receiver, PersistentHashSetBuilder) ? tmp$_0 : null) != null ? tmp$_1.build() : null) != null ? tmp$_3 : plus_8(PersistentHashSet$Companion_getInstance().emptyOf_tnbmyv$(), $receiver);
  }
  function toImmutableMap($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    return (tmp$_3 = (tmp$_2 = Kotlin.isType(tmp$ = $receiver, ImmutableMap) ? tmp$ : null) != null ? tmp$_2 : (tmp$_1 = Kotlin.isType(tmp$_0 = $receiver, PersistentMap$Builder) ? tmp$_0 : null) != null ? tmp$_1.build() : null) != null ? tmp$_3 : persistentMapOf_0().putAll_a2k3zr$($receiver);
  }
  function toPersistentMap($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    return (tmp$_3 = (tmp$_2 = Kotlin.isType(tmp$ = $receiver, PersistentOrderedMap) ? tmp$ : null) != null ? tmp$_2 : (tmp$_1 = Kotlin.isType(tmp$_0 = $receiver, PersistentOrderedMapBuilder) ? tmp$_0 : null) != null ? tmp$_1.build() : null) != null ? tmp$_3 : PersistentOrderedMap$Companion_getInstance().emptyOf_3w54xu$().putAll_a2k3zr$($receiver);
  }
  function toPersistentHashMap($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    return (tmp$_3 = (tmp$_2 = Kotlin.isType(tmp$ = $receiver, PersistentHashMap) ? tmp$ : null) != null ? tmp$_2 : (tmp$_1 = Kotlin.isType(tmp$_0 = $receiver, PersistentHashMapBuilder) ? tmp$_0 : null) != null ? tmp$_1.build() : null) != null ? tmp$_3 : PersistentHashMap$Companion_getInstance().emptyOf_3w54xu$().putAll_a2k3zr$($receiver);
  }
  function AbstractListIterator(index, size) {
    this.index = index;
    this.size = size;
  }
  AbstractListIterator.prototype.hasNext = function () {
    return this.index < this.size;
  };
  AbstractListIterator.prototype.hasPrevious = function () {
    return this.index > 0;
  };
  AbstractListIterator.prototype.nextIndex = function () {
    return this.index;
  };
  AbstractListIterator.prototype.previousIndex = function () {
    return this.index - 1 | 0;
  };
  AbstractListIterator.prototype.checkHasNext_8be2vx$ = function () {
    if (!this.hasNext())
      throw NoSuchElementException_init();
  };
  AbstractListIterator.prototype.checkHasPrevious_8be2vx$ = function () {
    if (!this.hasPrevious())
      throw NoSuchElementException_init();
  };
  AbstractListIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractListIterator',
    interfaces: [ListIterator]
  };
  function SingleElementListIterator(element, index) {
    AbstractListIterator.call(this, index, 1);
    this.element_0 = element;
  }
  SingleElementListIterator.prototype.next = function () {
    this.checkHasNext_8be2vx$();
    this.index = this.index + 1 | 0;
    return this.element_0;
  };
  SingleElementListIterator.prototype.previous = function () {
    this.checkHasPrevious_8be2vx$();
    this.index = this.index - 1 | 0;
    return this.element_0;
  };
  SingleElementListIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleElementListIterator',
    interfaces: [AbstractListIterator]
  };
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  AbstractPersistentList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return PersistentList.prototype.subList_vux9f0$.call(this, fromIndex, toIndex);
  };
  AbstractPersistentList.prototype.addAll_brywnq$ = function (elements) {
    var $receiver = this.builder();
    $receiver.addAll_brywnq$(elements);
    return $receiver.build();
  };
  AbstractPersistentList.prototype.addAll_u57x28$ = function (index, c) {
    var $receiver = this.builder();
    $receiver.addAll_u57x28$(index, c);
    return $receiver.build();
  };
  AbstractPersistentList.prototype.remove_11rb$ = function (element) {
    var index = this.indexOf_11rb$(element);
    if (index !== -1) {
      return this.removeAt_za3lpa$(index);
    }return this;
  };
  function AbstractPersistentList$removeAll$lambda(closure$elements) {
    return function (it) {
      return closure$elements.contains_11rb$(it);
    };
  }
  AbstractPersistentList.prototype.removeAll_brywnq$ = function (elements) {
    return this.removeAll_ucl7l2$(AbstractPersistentList$removeAll$lambda(elements));
  };
  AbstractPersistentList.prototype.clear = function () {
    return persistentVectorOf();
  };
  AbstractPersistentList.prototype.contains_11rb$ = function (element) {
    return this.indexOf_11rb$(element) !== -1;
  };
  AbstractPersistentList.prototype.containsAll_brywnq$ = function (elements) {
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
        all$result = true;
        break all$break;
      }tmp$ = elements.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!this.contains_11rb$(element)) {
          all$result = false;
          break all$break;
        }}
      all$result = true;
    }
     while (false);
    return all$result;
  };
  AbstractPersistentList.prototype.iterator = function () {
    return this.listIterator();
  };
  AbstractPersistentList.prototype.listIterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  AbstractPersistentList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractPersistentList',
    interfaces: [AbstractList, PersistentList]
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.buffer_0 = buffer;
  }
  BufferIterator.prototype.next = function () {
    var tmp$;
    if (!this.hasNext()) {
      throw NoSuchElementException_init();
    }return this.buffer_0[tmp$ = this.index, this.index = tmp$ + 1 | 0, tmp$];
  };
  BufferIterator.prototype.previous = function () {
    if (!this.hasPrevious()) {
      throw NoSuchElementException_init();
    }return this.buffer_0[this.index = this.index - 1 | 0, this.index];
  };
  BufferIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BufferIterator',
    interfaces: [AbstractListIterator]
  };
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.root_0 = root;
    this.tail_0 = tail;
    this.size_ii0kf8$_0 = size;
    this.rootShift_0 = rootShift;
    if (!(this.size > 32)) {
      var message = 'Trie-based persistent vector should have at least ' + '33' + ' elements, got ' + this.size;
      throw IllegalArgumentException_init(message.toString());
    }assert((this.size - rootSize(this.size) | 0) <= coerceAtMost(this.tail_0.length, 32));
  }
  Object.defineProperty(PersistentVector.prototype, 'size', {
    get: function () {
      return this.size_ii0kf8$_0;
    }
  });
  PersistentVector.prototype.rootSize_0 = function () {
    return rootSize(this.size);
  };
  PersistentVector.prototype.add_11rb$ = function (element) {
    var tailSize = this.size - this.rootSize_0() | 0;
    if (tailSize < 32) {
      var newTail = copyOf(this.tail_0, 32);
      newTail[tailSize] = element;
      return new PersistentVector(this.root_0, newTail, this.size + 1 | 0, this.rootShift_0);
    }var newTail_0 = presizedBufferWith(element);
    return this.pushFilledTail_0(this.root_0, this.tail_0, newTail_0);
  };
  PersistentVector.prototype.pushFilledTail_0 = function (root, filledTail, newTail) {
    if (this.size >> 5 > 1 << this.rootShift_0) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = this.rootShift_0 + 5 | 0;
      newRoot = this.pushTail_0(newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, this.size + 1 | 0, newRootShift);
    }var newRoot_0 = this.pushTail_0(root, this.rootShift_0, filledTail);
    return new PersistentVector(newRoot_0, newTail, this.size + 1 | 0, this.rootShift_0);
  };
  PersistentVector.prototype.pushTail_0 = function (root, shift, tail) {
    var tmp$, tmp$_0;
    var bufferIndex = indexSegment(this.size - 1 | 0, shift);
    var newRootNode = (tmp$ = root != null ? copyOf(root, 32) : null) != null ? tmp$ : Kotlin.newArray(32, null);
    if (shift === 5) {
      newRootNode[bufferIndex] = tail;
    } else {
      newRootNode[bufferIndex] = this.pushTail_0((tmp$_0 = newRootNode[bufferIndex]) == null || Kotlin.isArray(tmp$_0) ? tmp$_0 : throwCCE(), shift - 5 | 0, tail);
    }
    return newRootNode;
  };
  PersistentVector.prototype.add_wxm5ur$ = function (index, element) {
    ListImplementation_getInstance().checkPositionIndex_6xvm5r$(index, this.size);
    if (index === this.size) {
      return this.add_11rb$(element);
    }var rootSize = this.rootSize_0();
    if (index >= rootSize) {
      return this.insertIntoTail_0(this.root_0, index - rootSize | 0, element);
    }var elementCarry = new ObjectRef(null);
    var newRoot = this.insertIntoRoot_0(this.root_0, this.rootShift_0, index, element, elementCarry);
    return this.insertIntoTail_0(newRoot, 0, elementCarry.value);
  };
  PersistentVector.prototype.insertIntoTail_0 = function (root, tailIndex, element) {
    var tailSize = this.size - this.rootSize_0() | 0;
    var newTail = copyOf(this.tail_0, 32);
    if (tailSize < 32) {
      arrayCopy(this.tail_0, newTail, tailIndex + 1 | 0, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, this.size + 1 | 0, this.rootShift_0);
    }var lastElement = this.tail_0[31];
    arrayCopy(this.tail_0, newTail, tailIndex + 1 | 0, tailIndex, tailSize - 1 | 0);
    newTail[tailIndex] = element;
    return this.pushFilledTail_0(root, newTail, presizedBufferWith(lastElement));
  };
  PersistentVector.prototype.insertIntoRoot_0 = function (root, shift, index, element, elementCarry) {
    var tmp$, tmp$_0;
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var newRoot = bufferIndex === 0 ? Kotlin.newArray(32, null) : copyOf(root, 32);
      arrayCopy(root, newRoot, bufferIndex + 1 | 0, bufferIndex, 31);
      elementCarry.value = root[31];
      newRoot[bufferIndex] = element;
      return newRoot;
    }var newRoot_0 = copyOf(root, 32);
    var lowerLevelShift = shift - 5 | 0;
    newRoot_0[bufferIndex] = this.insertIntoRoot_0(Kotlin.isArray(tmp$ = root[bufferIndex]) ? tmp$ : throwCCE(), lowerLevelShift, index, element, elementCarry);
    for (var i = bufferIndex + 1 | 0; i < 32; i++) {
      if (newRoot_0[i] == null)
        break;
      newRoot_0[i] = this.insertIntoRoot_0(Kotlin.isArray(tmp$_0 = root[i]) ? tmp$_0 : throwCCE(), lowerLevelShift, 0, elementCarry.value, elementCarry);
    }
    return newRoot_0;
  };
  PersistentVector.prototype.removeAt_za3lpa$ = function (index) {
    ListImplementation_getInstance().checkElementIndex_6xvm5r$(index, this.size);
    var rootSize = this.rootSize_0();
    if (index >= rootSize) {
      return this.removeFromTailAt_0(this.root_0, rootSize, this.rootShift_0, index - rootSize | 0);
    }var newRoot = this.removeFromRootAt_0(this.root_0, this.rootShift_0, index, new ObjectRef(this.tail_0[0]));
    return this.removeFromTailAt_0(newRoot, rootSize, this.rootShift_0, 0);
  };
  PersistentVector.prototype.removeFromTailAt_0 = function (root, rootSize, shift, index) {
    var tailSize = this.size - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return this.pullLastBufferFromRoot_0(root, rootSize, shift);
    }var newTail = copyOf(this.tail_0, 32);
    if (index < (tailSize - 1 | 0)) {
      arrayCopy(this.tail_0, newTail, index, index + 1 | 0, tailSize);
    }newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, rootSize + tailSize - 1 | 0, shift);
  };
  PersistentVector.prototype.pullLastBufferFromRoot_0 = function (root, rootSize, shift) {
    var tmp$, tmp$_0;
    if (shift === 0) {
      var buffer = root.length === 33 ? copyOf(root, 32) : root;
      return new SmallPersistentVector(buffer);
    }var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(this.pullLastBuffer_0(root, shift, rootSize - 1 | 0, tailCarry));
    var newTail = Kotlin.isArray(tmp$ = tailCarry.value) ? tmp$ : throwCCE();
    if (newRoot[1] == null) {
      var lowerLevelRoot = Kotlin.isArray(tmp$_0 = newRoot[0]) ? tmp$_0 : throwCCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - 5 | 0);
    }return new PersistentVector(newRoot, newTail, rootSize, shift);
  };
  PersistentVector.prototype.pullLastBuffer_0 = function (root, shift, index, tailCarry) {
    var tmp$, tmp$_0;
    var bufferIndex = indexSegment(index, shift);
    if (shift === 5) {
      tailCarry.value = root[bufferIndex];
      tmp$_0 = null;
    } else {
      tmp$_0 = this.pullLastBuffer_0(Kotlin.isArray(tmp$ = root[bufferIndex]) ? tmp$ : throwCCE(), shift - 5 | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp$_0;
    if (newBufferAtIndex == null && bufferIndex === 0) {
      return null;
    }var newRoot = copyOf(root, 32);
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  };
  PersistentVector.prototype.removeFromRootAt_0 = function (root, shift, index, tailCarry) {
    var tmp$, tmp$_0, tmp$_1;
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var newRoot = bufferIndex === 0 ? Kotlin.newArray(32, null) : copyOf(root, 32);
      arrayCopy(root, newRoot, bufferIndex, bufferIndex + 1 | 0, 32);
      newRoot[31] = tailCarry.value;
      tailCarry.value = root[bufferIndex];
      return newRoot;
    }var bufferLastIndex = 31;
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(this.rootSize_0() - 1 | 0, shift);
    }var newRoot_0 = copyOf(root, 32);
    var lowerLevelShift = shift - 5 | 0;
    tmp$ = bufferIndex + 1 | 0;
    for (var i = bufferLastIndex; i >= tmp$; i--) {
      newRoot_0[i] = this.removeFromRootAt_0(Kotlin.isArray(tmp$_0 = newRoot_0[i]) ? tmp$_0 : throwCCE(), lowerLevelShift, 0, tailCarry);
    }
    newRoot_0[bufferIndex] = this.removeFromRootAt_0(Kotlin.isArray(tmp$_1 = newRoot_0[bufferIndex]) ? tmp$_1 : throwCCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  };
  PersistentVector.prototype.removeAll_ucl7l2$ = function (predicate) {
    var $receiver = this.builder();
    $receiver.removeAllWithPredicate_ucl7l2$(predicate);
    return $receiver.build();
  };
  PersistentVector.prototype.builder = function () {
    return new PersistentVectorBuilder(this, this.root_0, this.tail_0, this.rootShift_0);
  };
  PersistentVector.prototype.listIterator_za3lpa$ = function (index) {
    var tmp$;
    ListImplementation_getInstance().checkPositionIndex_6xvm5r$(index, this.size);
    return new PersistentVectorIterator(this.root_0, Kotlin.isArray(tmp$ = this.tail_0) ? tmp$ : throwCCE(), index, this.size, (this.rootShift_0 / 5 | 0) + 1 | 0);
  };
  PersistentVector.prototype.bufferFor_0 = function (index) {
    var tmp$;
    if (this.rootSize_0() <= index) {
      return this.tail_0;
    }var buffer = this.root_0;
    var shift = this.rootShift_0;
    while (shift > 0) {
      buffer = Kotlin.isArray(tmp$ = buffer[indexSegment(index, shift)]) ? tmp$ : throwCCE();
      shift = shift - 5 | 0;
    }
    return buffer;
  };
  PersistentVector.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    ListImplementation_getInstance().checkElementIndex_6xvm5r$(index, this.size);
    var buffer = this.bufferFor_0(index);
    return (tmp$ = buffer[index & 31]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  PersistentVector.prototype.set_wxm5ur$ = function (index, element) {
    ListImplementation_getInstance().checkElementIndex_6xvm5r$(index, this.size);
    if (this.rootSize_0() <= index) {
      var newTail = copyOf(this.tail_0, 32);
      newTail[index & 31] = element;
      return new PersistentVector(this.root_0, newTail, this.size, this.rootShift_0);
    }var newRoot = this.setInRoot_0(this.root_0, this.rootShift_0, index, element);
    return new PersistentVector(newRoot, this.tail_0, this.size, this.rootShift_0);
  };
  PersistentVector.prototype.setInRoot_0 = function (root, shift, index, e) {
    var tmp$;
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf(root, 32);
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      newRoot[bufferIndex] = this.setInRoot_0(Kotlin.isArray(tmp$ = newRoot[bufferIndex]) ? tmp$ : throwCCE(), shift - 5 | 0, index, e);
    }
    return newRoot;
  };
  PersistentVector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentVector',
    interfaces: [AbstractPersistentList, PersistentList]
  };
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.vector_0 = vector;
    this.vectorRoot_0 = vectorRoot;
    this.vectorTail_0 = vectorTail;
    this.rootShift_8be2vx$ = rootShift;
    this.ownership_0 = new MutabilityOwnership();
    this.root_8be2vx$_8h2luw$_0 = this.vectorRoot_0;
    this.tail_8be2vx$_v4ooze$_0 = this.vectorTail_0;
    this.size_xo2h0r$_0 = this.vector_0.size;
  }
  Object.defineProperty(PersistentVectorBuilder.prototype, 'root_8be2vx$', {
    configurable: true,
    get: function () {
      return this.root_8be2vx$_8h2luw$_0;
    },
    set: function (root) {
      this.root_8be2vx$_8h2luw$_0 = root;
    }
  });
  Object.defineProperty(PersistentVectorBuilder.prototype, 'tail_8be2vx$', {
    configurable: true,
    get: function () {
      return this.tail_8be2vx$_v4ooze$_0;
    },
    set: function (tail) {
      this.tail_8be2vx$_v4ooze$_0 = tail;
    }
  });
  Object.defineProperty(PersistentVectorBuilder.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.size_xo2h0r$_0;
    },
    set: function (size) {
      this.size_xo2h0r$_0 = size;
    }
  });
  PersistentVectorBuilder.prototype.getModCount_8be2vx$ = function () {
    return this.modCount;
  };
  PersistentVectorBuilder.prototype.build = function () {
    var tmp$;
    if (this.root_8be2vx$ === this.vectorRoot_0 && this.tail_8be2vx$ === this.vectorTail_0) {
      tmp$ = this.vector_0;
    } else {
      this.ownership_0 = new MutabilityOwnership();
      this.vectorRoot_0 = this.root_8be2vx$;
      this.vectorTail_0 = this.tail_8be2vx$;
      if (this.root_8be2vx$ == null) {
        if (this.tail_8be2vx$.length === 0) {
          tmp$ = persistentVectorOf();
        } else {
          tmp$ = new SmallPersistentVector(copyOf(this.tail_8be2vx$, this.size));
        }
      } else {
        tmp$ = new PersistentVector(ensureNotNull(this.root_8be2vx$), this.tail_8be2vx$, this.size, this.rootShift_8be2vx$);
      }
    }
    this.vector_0 = tmp$;
    return this.vector_0;
  };
  PersistentVectorBuilder.prototype.rootSize_0 = function () {
    if (this.size <= 32) {
      return 0;
    }return rootSize(this.size);
  };
  PersistentVectorBuilder.prototype.tailSize_0 = function (size) {
    if (size <= 32) {
      return size;
    }return size - rootSize(size) | 0;
  };
  PersistentVectorBuilder.prototype.tailSize_1 = function () {
    return this.tailSize_0(this.size);
  };
  PersistentVectorBuilder.prototype.isMutable_0 = function (buffer) {
    return buffer.length === 33 && buffer[32] === this.ownership_0;
  };
  PersistentVectorBuilder.prototype.makeMutable_0 = function (buffer) {
    if (buffer == null) {
      return this.mutableBuffer_0();
    }if (this.isMutable_0(buffer)) {
      return buffer;
    }var destination = this.mutableBuffer_0();
    arrayCopy(buffer, destination, 0, 0, coerceAtMost(buffer.length, 32));
    return destination;
  };
  PersistentVectorBuilder.prototype.makeMutableShiftingRight_0 = function (buffer, distance) {
    if (this.isMutable_0(buffer)) {
      arrayCopy(buffer, buffer, distance, 0, 32 - distance | 0);
      return buffer;
    }var destination = this.mutableBuffer_0();
    arrayCopy(buffer, destination, distance, 0, 32 - distance | 0);
    return destination;
  };
  PersistentVectorBuilder.prototype.mutableBufferWith_0 = function (element) {
    var buffer = Kotlin.newArray(33, null);
    buffer[0] = element;
    buffer[32] = this.ownership_0;
    return buffer;
  };
  PersistentVectorBuilder.prototype.mutableBuffer_0 = function () {
    var buffer = Kotlin.newArray(33, null);
    buffer[32] = this.ownership_0;
    return buffer;
  };
  PersistentVectorBuilder.prototype.add_11rb$ = function (element) {
    this.modCount = this.modCount + 1 | 0;
    var tailSize = this.tailSize_1();
    if (tailSize < 32) {
      var mutableTail = this.makeMutable_0(this.tail_8be2vx$);
      mutableTail[tailSize] = element;
      this.tail_8be2vx$ = mutableTail;
      this.size = this.size + 1 | 0;
    } else {
      var newTail = this.mutableBufferWith_0(element);
      this.pushFilledTail_0(this.root_8be2vx$, this.tail_8be2vx$, newTail);
    }
    return true;
  };
  PersistentVectorBuilder.prototype.pushFilledTail_0 = function (root, filledTail, newTail) {
    if (this.size >> 5 > 1 << this.rootShift_8be2vx$) {
      this.root_8be2vx$ = this.pushTail_0(this.mutableBufferWith_0(root), filledTail, this.rootShift_8be2vx$ + 5 | 0);
      this.tail_8be2vx$ = newTail;
      this.rootShift_8be2vx$ = this.rootShift_8be2vx$ + 5 | 0;
      this.size = this.size + 1 | 0;
    } else if (root == null) {
      this.root_8be2vx$ = filledTail;
      this.tail_8be2vx$ = newTail;
      this.size = this.size + 1 | 0;
    } else {
      this.root_8be2vx$ = this.pushTail_0(root, filledTail, this.rootShift_8be2vx$);
      this.tail_8be2vx$ = newTail;
      this.size = this.size + 1 | 0;
    }
  };
  PersistentVectorBuilder.prototype.pushTail_0 = function (root, tail, shift) {
    var tmp$;
    var index = indexSegment(this.size - 1 | 0, shift);
    var mutableRoot = this.makeMutable_0(root);
    if (shift === 5) {
      mutableRoot[index] = tail;
    } else {
      mutableRoot[index] = this.pushTail_0((tmp$ = mutableRoot[index]) == null || Kotlin.isArray(tmp$) ? tmp$ : throwCCE(), tail, shift - 5 | 0);
    }
    return mutableRoot;
  };
  PersistentVectorBuilder.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    if (elements.isEmpty()) {
      return false;
    }this.modCount = this.modCount + 1 | 0;
    var tailSize = this.tailSize_1();
    var elementsIterator = elements.iterator();
    if ((32 - tailSize | 0) >= elements.size) {
      this.tail_8be2vx$ = this.copyToBuffer_0(this.makeMutable_0(this.tail_8be2vx$), tailSize, elementsIterator);
      this.size = this.size + elements.size | 0;
    } else {
      var buffersSize = (elements.size + tailSize - 1 | 0) / 32 | 0;
      var buffers = Kotlin.newArray(buffersSize, null);
      buffers[0] = this.copyToBuffer_0(this.makeMutable_0(this.tail_8be2vx$), tailSize, elementsIterator);
      for (var index = 1; index < buffersSize; index++) {
        buffers[index] = this.copyToBuffer_0(this.mutableBuffer_0(), 0, elementsIterator);
      }
      this.root_8be2vx$ = this.pushBuffersIncreasingHeightIfNeeded_0(this.root_8be2vx$, this.rootSize_0(), Kotlin.isArray(tmp$ = buffers) ? tmp$ : throwCCE());
      this.tail_8be2vx$ = this.copyToBuffer_0(this.mutableBuffer_0(), 0, elementsIterator);
      this.size = this.size + elements.size | 0;
    }
    return true;
  };
  PersistentVectorBuilder.prototype.copyToBuffer_0 = function (buffer, bufferIndex, sourceIterator) {
    var tmp$;
    var index = bufferIndex;
    while (index < 32 && sourceIterator.hasNext()) {
      buffer[tmp$ = index, index = tmp$ + 1 | 0, tmp$] = sourceIterator.next();
    }
    return buffer;
  };
  PersistentVectorBuilder.prototype.pushBuffersIncreasingHeightIfNeeded_0 = function (root, rootSize, buffers) {
    var tmp$;
    var buffersIterator = Kotlin.arrayIterator(buffers);
    if (rootSize >> 5 < 1 << this.rootShift_8be2vx$)
      tmp$ = this.pushBuffers_0(root, rootSize, this.rootShift_8be2vx$, buffersIterator);
    else
      tmp$ = this.makeMutable_0(root);
    var mutableRoot = tmp$;
    while (buffersIterator.hasNext()) {
      this.rootShift_8be2vx$ = this.rootShift_8be2vx$ + 5 | 0;
      mutableRoot = this.mutableBufferWith_0(mutableRoot);
      this.pushBuffers_0(mutableRoot, 1 << this.rootShift_8be2vx$, this.rootShift_8be2vx$, buffersIterator);
    }
    return mutableRoot;
  };
  PersistentVectorBuilder.prototype.pushBuffers_0 = function (root, rootSize, shift, buffersIterator) {
    var tmp$, tmp$_0;
    if (!buffersIterator.hasNext()) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(shift >= 0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }if (shift === 0) {
      return buffersIterator.next();
    }var mutableRoot = this.makeMutable_0(root);
    var index = indexSegment(rootSize, shift);
    mutableRoot[index] = this.pushBuffers_0((tmp$ = mutableRoot[index]) == null || Kotlin.isArray(tmp$) ? tmp$ : throwCCE(), rootSize, shift - 5 | 0, buffersIterator);
    while ((index = index + 1 | 0, index) < 32 && buffersIterator.hasNext()) {
      mutableRoot[index] = this.pushBuffers_0((tmp$_0 = mutableRoot[index]) == null || Kotlin.isArray(tmp$_0) ? tmp$_0 : throwCCE(), 0, shift - 5 | 0, buffersIterator);
    }
    return mutableRoot;
  };
  PersistentVectorBuilder.prototype.add_wxm5ur$ = function (index, element) {
    var tmp$;
    ListImplementation_getInstance().checkPositionIndex_6xvm5r$(index, this.size);
    if (index === this.size) {
      this.add_11rb$(element);
      return;
    }this.modCount = this.modCount + 1 | 0;
    var rootSize = this.rootSize_0();
    if (index >= rootSize) {
      this.insertIntoTail_0(this.root_8be2vx$, index - rootSize | 0, element);
      return;
    }var elementCarry = new ObjectRef(null);
    var newRest = this.insertIntoRoot_0(ensureNotNull(this.root_8be2vx$), this.rootShift_8be2vx$, index, element, elementCarry);
    this.insertIntoTail_0(newRest, 0, (tmp$ = elementCarry.value) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
  };
  PersistentVectorBuilder.prototype.insertIntoTail_0 = function (root, index, element) {
    var tailSize = this.tailSize_1();
    var mutableTail = this.makeMutable_0(this.tail_8be2vx$);
    if (tailSize < 32) {
      arrayCopy(this.tail_8be2vx$, mutableTail, index + 1 | 0, index, tailSize);
      mutableTail[index] = element;
      this.root_8be2vx$ = root;
      this.tail_8be2vx$ = mutableTail;
      this.size = this.size + 1 | 0;
    } else {
      var lastElement = this.tail_8be2vx$[31];
      arrayCopy(this.tail_8be2vx$, mutableTail, index + 1 | 0, index, 31);
      mutableTail[index] = element;
      this.pushFilledTail_0(root, mutableTail, this.mutableBufferWith_0(lastElement));
    }
  };
  PersistentVectorBuilder.prototype.insertIntoRoot_0 = function (root, shift, index, element, elementCarry) {
    var tmp$, tmp$_0;
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.value = root[31];
      var destination = this.makeMutable_0(root);
      arrayCopy(root, destination, bufferIndex + 1 | 0, bufferIndex, 31);
      var mutableRoot = destination;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }var mutableRoot_0 = this.makeMutable_0(root);
    var lowerLevelShift = shift - 5 | 0;
    mutableRoot_0[bufferIndex] = this.insertIntoRoot_0(Kotlin.isArray(tmp$ = mutableRoot_0[bufferIndex]) ? tmp$ : throwCCE(), lowerLevelShift, index, element, elementCarry);
    for (var i = bufferIndex + 1 | 0; i < 32; i++) {
      if (mutableRoot_0[i] == null)
        break;
      mutableRoot_0[i] = this.insertIntoRoot_0(Kotlin.isArray(tmp$_0 = mutableRoot_0[i]) ? tmp$_0 : throwCCE(), lowerLevelShift, 0, elementCarry.value, elementCarry);
    }
    return mutableRoot_0;
  };
  PersistentVectorBuilder.prototype.addAll_u57x28$ = function (index, elements) {
    var tmp$;
    ListImplementation_getInstance().checkPositionIndex_6xvm5r$(index, this.size);
    if (index === this.size) {
      return this.addAll_brywnq$(elements);
    }if (elements.isEmpty()) {
      return false;
    }this.modCount = this.modCount + 1 | 0;
    var unaffectedElementsCount = index >> 5 << 5;
    var buffersSize = (this.size - unaffectedElementsCount + elements.size - 1 | 0) / 32 | 0;
    if (buffersSize === 0) {
      assert(index >= this.rootSize_0());
      var startIndex = index & 31;
      var endIndex = index + elements.size - 1 & 31;
      var $receiver = this.tail_8be2vx$;
      var destination = this.makeMutable_0(this.tail_8be2vx$);
      arrayCopy($receiver, destination, endIndex + 1 | 0, startIndex, this.tailSize_1());
      var newTail = destination;
      this.copyToBuffer_0(newTail, startIndex, elements.iterator());
      this.tail_8be2vx$ = newTail;
      this.size = this.size + elements.size | 0;
      return true;
    }var buffers = Kotlin.newArray(buffersSize, null);
    var tailSize = this.tailSize_1();
    var newTailSize = this.tailSize_0(this.size + elements.size | 0);
    var newTail_0;
    if (index >= this.rootSize_0()) {
      newTail_0 = this.mutableBuffer_0();
      this.splitToBuffers_0(elements, index, this.tail_8be2vx$, tailSize, buffers, buffersSize, newTail_0);
    } else if (newTailSize > tailSize) {
      var rightShift = newTailSize - tailSize | 0;
      newTail_0 = this.makeMutableShiftingRight_0(this.tail_8be2vx$, rightShift);
      this.insertIntoRoot_1(elements, index, rightShift, buffers, buffersSize, newTail_0);
    } else {
      var $receiver_0 = this.tail_8be2vx$;
      var destination_0 = this.mutableBuffer_0();
      arrayCopy($receiver_0, destination_0, 0, tailSize - newTailSize | 0, tailSize);
      newTail_0 = destination_0;
      var rightShift_0 = 32 - (tailSize - newTailSize) | 0;
      var lastBuffer = this.makeMutableShiftingRight_0(this.tail_8be2vx$, rightShift_0);
      buffers[buffersSize - 1 | 0] = lastBuffer;
      this.insertIntoRoot_1(elements, index, rightShift_0, buffers, buffersSize - 1 | 0, lastBuffer);
    }
    this.root_8be2vx$ = this.pushBuffersIncreasingHeightIfNeeded_0(this.root_8be2vx$, unaffectedElementsCount, Kotlin.isArray(tmp$ = buffers) ? tmp$ : throwCCE());
    this.tail_8be2vx$ = newTail_0;
    this.size = this.size + elements.size | 0;
    return true;
  };
  PersistentVectorBuilder.prototype.insertIntoRoot_1 = function (elements, index, rightShift, buffers, nullBuffers, nextBuffer) {
    var value = this.root_8be2vx$;
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    } else {
      checkNotNull$result = value;
    }
    var startLeafIndex = index >> 5;
    var startLeaf = this.shiftLeafBuffers_0(startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer);
    var lastLeafIndex = (this.rootSize_0() >> 5) - 1 | 0;
    var newNullBuffers = nullBuffers - (lastLeafIndex - startLeafIndex) | 0;
    var newNextBuffer = newNullBuffers < nullBuffers ? ensureNotNull(buffers[newNullBuffers]) : nextBuffer;
    this.splitToBuffers_0(elements, index, startLeaf, 32, buffers, newNullBuffers, newNextBuffer);
  };
  PersistentVectorBuilder.prototype.shiftLeafBuffers_0 = function (startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer) {
    var value = this.root_8be2vx$;
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    } else {
      checkNotNull$result = value;
    }
    var leafCount = this.rootSize_0() >> 5;
    var leafBufferIterator = this.leafBufferIterator_0(leafCount);
    var bufferIndex = nullBuffers;
    var buffer = nextBuffer;
    while (leafBufferIterator.previousIndex() !== startLeafIndex) {
      var currentBuffer = leafBufferIterator.previous();
      arrayCopy(currentBuffer, buffer, 0, 32 - rightShift | 0, 32);
      buffer = this.makeMutableShiftingRight_0(currentBuffer, rightShift);
      buffers[bufferIndex = bufferIndex - 1 | 0, bufferIndex] = buffer;
    }
    return leafBufferIterator.previous();
  };
  PersistentVectorBuilder.prototype.splitToBuffers_0 = function (elements, index, startBuffer, startBufferSize, buffers, nullBuffers, nextBuffer) {
    var tmp$;
    if (!(nullBuffers >= 1)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var firstBuffer = this.makeMutable_0(startBuffer);
    buffers[0] = firstBuffer;
    var newNextBuffer = nextBuffer;
    var newNullBuffers = nullBuffers;
    var startBufferStartIndex = index & 31;
    var endBufferEndIndex = index + elements.size - 1 & 31;
    var elementsToShift = startBufferSize - startBufferStartIndex | 0;
    if ((endBufferEndIndex + elementsToShift | 0) < 32) {
      arrayCopy(firstBuffer, newNextBuffer, endBufferEndIndex + 1 | 0, startBufferStartIndex, startBufferSize);
    } else {
      var toCopyToLast = endBufferEndIndex + elementsToShift - 32 + 1 | 0;
      if (nullBuffers === 1) {
        newNextBuffer = firstBuffer;
      } else {
        newNextBuffer = this.mutableBuffer_0();
        buffers[newNullBuffers = newNullBuffers - 1 | 0, newNullBuffers] = newNextBuffer;
      }
      arrayCopy(firstBuffer, nextBuffer, 0, startBufferSize - toCopyToLast | 0, startBufferSize);
      arrayCopy(firstBuffer, newNextBuffer, endBufferEndIndex + 1 | 0, startBufferStartIndex, startBufferSize - toCopyToLast | 0);
    }
    var elementsIterator = elements.iterator();
    this.copyToBuffer_0(firstBuffer, startBufferStartIndex, elementsIterator);
    tmp$ = newNullBuffers;
    for (var i = 1; i < tmp$; i++) {
      buffers[i] = this.copyToBuffer_0(this.mutableBuffer_0(), 0, elementsIterator);
    }
    this.copyToBuffer_0(newNextBuffer, 0, elementsIterator);
  };
  PersistentVectorBuilder.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    ListImplementation_getInstance().checkElementIndex_6xvm5r$(index, this.size);
    var buffer = this.bufferFor_0(index);
    return (tmp$ = buffer[index & 31]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  PersistentVectorBuilder.prototype.bufferFor_0 = function (index) {
    var tmp$;
    if (this.rootSize_0() <= index) {
      return this.tail_8be2vx$;
    }var buffer = ensureNotNull(this.root_8be2vx$);
    var shift = this.rootShift_8be2vx$;
    while (shift > 0) {
      buffer = Kotlin.isArray(tmp$ = buffer[indexSegment(index, shift)]) ? tmp$ : throwCCE();
      shift = shift - 5 | 0;
    }
    return buffer;
  };
  PersistentVectorBuilder.prototype.removeAt_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    ListImplementation_getInstance().checkElementIndex_6xvm5r$(index, this.size);
    this.modCount = this.modCount + 1 | 0;
    var rootSize = this.rootSize_0();
    if (index >= rootSize) {
      return (tmp$ = this.removeFromTailAt_0(this.root_8be2vx$, rootSize, this.rootShift_8be2vx$, index - rootSize | 0)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    }var elementCarry = new ObjectRef(this.tail_8be2vx$[0]);
    var newRoot = this.removeFromRootAt_0(ensureNotNull(this.root_8be2vx$), this.rootShift_8be2vx$, index, elementCarry);
    this.removeFromTailAt_0(newRoot, rootSize, this.rootShift_8be2vx$, 0);
    return (tmp$_0 = elementCarry.value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  PersistentVectorBuilder.prototype.removeFromTailAt_0 = function (root, rootSize, shift, index) {
    var tailSize = this.size - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = this.tail_8be2vx$[0];
      this.pullLastBufferFromRoot_0(root, rootSize, shift);
    } else {
      removedElement = this.tail_8be2vx$[index];
      var $receiver = this.tail_8be2vx$;
      var destination = this.makeMutable_0(this.tail_8be2vx$);
      arrayCopy($receiver, destination, index, index + 1 | 0, tailSize);
      var mutableTail = destination;
      mutableTail[tailSize - 1 | 0] = null;
      this.root_8be2vx$ = root;
      this.tail_8be2vx$ = mutableTail;
      this.size = rootSize + tailSize - 1 | 0;
      this.rootShift_8be2vx$ = shift;
    }
    return removedElement;
  };
  PersistentVectorBuilder.prototype.removeFromRootAt_0 = function (root, shift, index, tailCarry) {
    var tmp$, tmp$_0, tmp$_1;
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      var destination = this.makeMutable_0(root);
      arrayCopy(root, destination, bufferIndex, bufferIndex + 1 | 0, 32);
      var mutableRoot = destination;
      mutableRoot[31] = tailCarry.value;
      tailCarry.value = removedElement;
      return mutableRoot;
    }var bufferLastIndex = 31;
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(this.rootSize_0() - 1 | 0, shift);
    }var mutableRoot_0 = this.makeMutable_0(root);
    var lowerLevelShift = shift - 5 | 0;
    tmp$ = bufferIndex + 1 | 0;
    for (var i = bufferLastIndex; i >= tmp$; i--) {
      mutableRoot_0[i] = this.removeFromRootAt_0(Kotlin.isArray(tmp$_0 = mutableRoot_0[i]) ? tmp$_0 : throwCCE(), lowerLevelShift, 0, tailCarry);
    }
    mutableRoot_0[bufferIndex] = this.removeFromRootAt_0(Kotlin.isArray(tmp$_1 = mutableRoot_0[bufferIndex]) ? tmp$_1 : throwCCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  };
  PersistentVectorBuilder.prototype.pullLastBufferFromRoot_0 = function (root, rootSize, shift) {
    var tmp$, tmp$_0;
    if (shift === 0) {
      this.root_8be2vx$ = null;
      this.tail_8be2vx$ = root != null ? root : [];
      this.size = rootSize;
      this.rootShift_8be2vx$ = shift;
      return;
    }var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(this.pullLastBuffer_0(ensureNotNull(root), shift, rootSize, tailCarry));
    this.tail_8be2vx$ = Kotlin.isArray(tmp$ = tailCarry.value) ? tmp$ : throwCCE();
    this.size = rootSize;
    if (newRoot[1] == null) {
      this.root_8be2vx$ = (tmp$_0 = newRoot[0]) == null || Kotlin.isArray(tmp$_0) ? tmp$_0 : throwCCE();
      this.rootShift_8be2vx$ = shift - 5 | 0;
    } else {
      this.root_8be2vx$ = newRoot;
      this.rootShift_8be2vx$ = shift;
    }
  };
  PersistentVectorBuilder.prototype.pullLastBuffer_0 = function (root, shift, rootSize, tailCarry) {
    var tmp$, tmp$_0;
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    if (shift === 5) {
      tailCarry.value = root[bufferIndex];
      tmp$_0 = null;
    } else {
      tmp$_0 = this.pullLastBuffer_0(Kotlin.isArray(tmp$ = root[bufferIndex]) ? tmp$ : throwCCE(), shift - 5 | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp$_0;
    if (newBufferAtIndex == null && bufferIndex === 0) {
      return null;
    }var mutableRoot = this.makeMutable_0(root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  };
  function PersistentVectorBuilder$removeAll$lambda(closure$elements) {
    return function (it) {
      return closure$elements.contains_11rb$(it);
    };
  }
  PersistentVectorBuilder.prototype.removeAll_brywnq$ = function (elements) {
    return this.removeAllWithPredicate_ucl7l2$(PersistentVectorBuilder$removeAll$lambda(elements));
  };
  PersistentVectorBuilder.prototype.removeAllWithPredicate_ucl7l2$ = function (predicate) {
    var anyRemoved = this.removeAll_0(predicate);
    if (anyRemoved) {
      this.modCount = this.modCount + 1 | 0;
    }return anyRemoved;
  };
  PersistentVectorBuilder.prototype.removeAll_0 = function (predicate) {
    var tmp$;
    var tailSize = this.tailSize_1();
    var bufferRef = new ObjectRef(null);
    if (this.root_8be2vx$ == null) {
      return this.removeAllFromTail_0(predicate, tailSize, bufferRef) !== tailSize;
    }var leafIterator = this.leafBufferIterator_0(0);
    var bufferSize = 32;
    while (bufferSize === 32 && leafIterator.hasNext()) {
      bufferSize = this.removeAll_1(predicate, leafIterator.next(), 32, bufferRef);
    }
    if (bufferSize === 32) {
      assert(!leafIterator.hasNext());
      var newTailSize = this.removeAllFromTail_0(predicate, tailSize, bufferRef);
      if (newTailSize === 0) {
        this.pullLastBufferFromRoot_0(this.root_8be2vx$, this.size, this.rootShift_8be2vx$);
      }return newTailSize !== tailSize;
    }var unaffectedElementsCount = leafIterator.previousIndex() << 5;
    var buffers = ArrayList_init();
    var recyclableBuffers = ArrayList_init();
    while (leafIterator.hasNext()) {
      var leaf = leafIterator.next();
      bufferSize = this.recyclableRemoveAll_0(predicate, leaf, 32, bufferSize, bufferRef, recyclableBuffers, buffers);
    }
    var newTailSize_0 = this.recyclableRemoveAll_0(predicate, this.tail_8be2vx$, tailSize, bufferSize, bufferRef, recyclableBuffers, buffers);
    var newTail = Kotlin.isArray(tmp$ = bufferRef.value) ? tmp$ : throwCCE();
    fill(newTail, null, newTailSize_0, 32);
    var newRoot = buffers.isEmpty() ? ensureNotNull(this.root_8be2vx$) : this.pushBuffers_0(this.root_8be2vx$, unaffectedElementsCount, this.rootShift_8be2vx$, buffers.iterator());
    var newRootSize = unaffectedElementsCount + (buffers.size << 5) | 0;
    this.root_8be2vx$ = this.retainFirst_0(newRoot, newRootSize);
    this.tail_8be2vx$ = newTail;
    this.size = newRootSize + newTailSize_0 | 0;
    return true;
  };
  PersistentVectorBuilder.prototype.retainFirst_0 = function (root, size) {
    var tmp$;
    if (!((size & 31) === 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (size === 0) {
      this.rootShift_8be2vx$ = 0;
      return null;
    }var lastIndex = size - 1 | 0;
    var newRoot = root;
    while (lastIndex >> this.rootShift_8be2vx$ === 0) {
      this.rootShift_8be2vx$ = this.rootShift_8be2vx$ - 5 | 0;
      newRoot = Kotlin.isArray(tmp$ = root[0]) ? tmp$ : throwCCE();
    }
    return this.nullifyAfter_0(newRoot, lastIndex, this.rootShift_8be2vx$);
  };
  PersistentVectorBuilder.prototype.nullifyAfter_0 = function (root, index, shift) {
    var tmp$;
    if (!(shift >= 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (shift === 0) {
      return root;
    }var lastIndex = indexSegment(index, shift);
    var newChild = this.nullifyAfter_0(Kotlin.isArray(tmp$ = root[lastIndex]) ? tmp$ : throwCCE(), index, shift - 5 | 0);
    var newRoot = root;
    if (lastIndex < 31 && newRoot[lastIndex + 1 | 0] != null) {
      if (this.isMutable_0(newRoot)) {
        fill(newRoot, null, lastIndex + 1 | 0, 32);
      }var $receiver = newRoot;
      var destination = this.mutableBuffer_0();
      arrayCopy($receiver, destination, 0, 0, lastIndex + 1 | 0);
      newRoot = destination;
    }if (newChild !== newRoot[lastIndex]) {
      newRoot = this.makeMutable_0(newRoot);
      newRoot[lastIndex] = newChild;
    }return newRoot;
  };
  PersistentVectorBuilder.prototype.removeAllFromTail_0 = function (predicate, tailSize, bufferRef) {
    var tmp$;
    var newTailSize = this.removeAll_1(predicate, this.tail_8be2vx$, tailSize, bufferRef);
    if (newTailSize === tailSize) {
      assert(bufferRef.value === this.tail_8be2vx$);
      return tailSize;
    }var newTail = Kotlin.isArray(tmp$ = bufferRef.value) ? tmp$ : throwCCE();
    fill(newTail, null, newTailSize, tailSize);
    this.tail_8be2vx$ = newTail;
    this.size = this.size - (tailSize - newTailSize) | 0;
    return newTailSize;
  };
  PersistentVectorBuilder.prototype.removeAll_1 = function (predicate, buffer, bufferSize, bufferRef) {
    var tmp$, tmp$_0;
    var newBuffer = buffer;
    var newBufferSize = bufferSize;
    var anyRemoved = false;
    for (var index = 0; index < bufferSize; index++) {
      var element = (tmp$ = buffer[index]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
      if (predicate(element)) {
        if (!anyRemoved) {
          newBuffer = this.makeMutable_0(buffer);
          newBufferSize = index;
          anyRemoved = true;
        }} else if (anyRemoved) {
        newBuffer[tmp$_0 = newBufferSize, newBufferSize = tmp$_0 + 1 | 0, tmp$_0] = element;
      }}
    bufferRef.value = newBuffer;
    return newBufferSize;
  };
  PersistentVectorBuilder.prototype.recyclableRemoveAll_0 = function (predicate, buffer, bufferSize, toBufferSize, bufferRef, recyclableBuffers, buffers) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.isMutable_0(buffer)) {
      recyclableBuffers.add_11rb$(buffer);
    }var toBuffer = Kotlin.isArray(tmp$ = bufferRef.value) ? tmp$ : throwCCE();
    var newToBuffer = toBuffer;
    var newToBufferSize = toBufferSize;
    for (var index = 0; index < bufferSize; index++) {
      var element = (tmp$_0 = buffer[index]) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
      if (!predicate(element)) {
        if (newToBufferSize === 32) {
          if (!recyclableBuffers.isEmpty()) {
            tmp$_1 = recyclableBuffers.removeAt_za3lpa$(recyclableBuffers.size - 1 | 0);
          } else {
            tmp$_1 = this.mutableBuffer_0();
          }
          newToBuffer = tmp$_1;
          newToBufferSize = 0;
        }newToBuffer[tmp$_2 = newToBufferSize, newToBufferSize = tmp$_2 + 1 | 0, tmp$_2] = element;
      }}
    bufferRef.value = newToBuffer;
    if (toBuffer !== bufferRef.value) {
      buffers.add_11rb$(toBuffer);
    }return newToBufferSize;
  };
  PersistentVectorBuilder.prototype.set_wxm5ur$ = function (index, element) {
    var tmp$, tmp$_0;
    ListImplementation_getInstance().checkElementIndex_6xvm5r$(index, this.size);
    if (this.rootSize_0() <= index) {
      var mutableTail = this.makeMutable_0(this.tail_8be2vx$);
      if (mutableTail !== this.tail_8be2vx$) {
        this.modCount = this.modCount + 1 | 0;
      }var tailIndex = index & 31;
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.tail_8be2vx$ = mutableTail;
      return (tmp$ = oldElement) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    }var oldElementCarry = new ObjectRef(null);
    this.root_8be2vx$ = this.setInRoot_0(ensureNotNull(this.root_8be2vx$), this.rootShift_8be2vx$, index, element, oldElementCarry);
    return (tmp$_0 = oldElementCarry.value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  PersistentVectorBuilder.prototype.setInRoot_0 = function (root, shift, index, e, oldElementCarry) {
    var tmp$;
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = this.makeMutable_0(root);
    if (shift === 0) {
      if (mutableRoot !== root) {
        this.modCount = this.modCount + 1 | 0;
      }oldElementCarry.value = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }mutableRoot[bufferIndex] = this.setInRoot_0(Kotlin.isArray(tmp$ = mutableRoot[bufferIndex]) ? tmp$ : throwCCE(), shift - 5 | 0, index, e, oldElementCarry);
    return mutableRoot;
  };
  PersistentVectorBuilder.prototype.iterator = function () {
    return this.listIterator();
  };
  PersistentVectorBuilder.prototype.listIterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  PersistentVectorBuilder.prototype.listIterator_za3lpa$ = function (index) {
    ListImplementation_getInstance().checkPositionIndex_6xvm5r$(index, this.size);
    return new PersistentVectorMutableIterator(this, index);
  };
  PersistentVectorBuilder.prototype.leafBufferIterator_0 = function (index) {
    var value = this.root_8be2vx$;
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    } else {
      checkNotNull$result = value;
    }
    var leafCount = this.rootSize_0() >> 5;
    ListImplementation_getInstance().checkPositionIndex_6xvm5r$(index, leafCount);
    if (this.rootShift_8be2vx$ === 0) {
      return new SingleElementListIterator(ensureNotNull(this.root_8be2vx$), index);
    }var trieHeight = this.rootShift_8be2vx$ / 5 | 0;
    return new TrieIterator(ensureNotNull(this.root_8be2vx$), index, leafCount, trieHeight);
  };
  PersistentVectorBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentVectorBuilder',
    interfaces: [PersistentList$Builder, AbstractMutableList]
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.tail_0 = tail;
    this.trieIterator_0 = null;
    var trieSize = rootSize(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.trieIterator_0 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  PersistentVectorIterator.prototype.next = function () {
    var tmp$;
    this.checkHasNext_8be2vx$();
    if (this.trieIterator_0.hasNext()) {
      this.index = this.index + 1 | 0;
      return this.trieIterator_0.next();
    }return this.tail_0[(tmp$ = this.index, this.index = tmp$ + 1 | 0, tmp$) - this.trieIterator_0.size | 0];
  };
  PersistentVectorIterator.prototype.previous = function () {
    this.checkHasPrevious_8be2vx$();
    if (this.index > this.trieIterator_0.size) {
      return this.tail_0[(this.index = this.index - 1 | 0, this.index) - this.trieIterator_0.size | 0];
    }this.index = this.index - 1 | 0;
    return this.trieIterator_0.previous();
  };
  PersistentVectorIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentVectorIterator',
    interfaces: [AbstractListIterator]
  };
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.size);
    this.builder_0 = builder;
    this.expectedModCount_0 = this.builder_0.getModCount_8be2vx$();
    this.trieIterator_0 = null;
    this.lastIteratedIndex_0 = -1;
    this.setupTrieIterator_0();
  }
  PersistentVectorMutableIterator.prototype.previous = function () {
    var tmp$, tmp$_0, tmp$_1;
    this.checkForComodification_0();
    this.checkHasPrevious_8be2vx$();
    this.lastIteratedIndex_0 = this.index - 1 | 0;
    tmp$_0 = this.trieIterator_0;
    if (tmp$_0 == null) {
      return (tmp$ = this.builder_0.tail_8be2vx$[this.index = this.index - 1 | 0, this.index]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    }var trieIterator = tmp$_0;
    if (this.index > trieIterator.size) {
      return (tmp$_1 = this.builder_0.tail_8be2vx$[(this.index = this.index - 1 | 0, this.index) - trieIterator.size | 0]) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    }this.index = this.index - 1 | 0;
    return trieIterator.previous();
  };
  PersistentVectorMutableIterator.prototype.next = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.checkForComodification_0();
    this.checkHasNext_8be2vx$();
    this.lastIteratedIndex_0 = this.index;
    tmp$_1 = this.trieIterator_0;
    if (tmp$_1 == null) {
      return (tmp$_0 = this.builder_0.tail_8be2vx$[tmp$ = this.index, this.index = tmp$ + 1 | 0, tmp$]) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    }var trieIterator = tmp$_1;
    if (trieIterator.hasNext()) {
      this.index = this.index + 1 | 0;
      return trieIterator.next();
    }return (tmp$_3 = this.builder_0.tail_8be2vx$[(tmp$_2 = this.index, this.index = tmp$_2 + 1 | 0, tmp$_2) - trieIterator.size | 0]) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE();
  };
  PersistentVectorMutableIterator.prototype.reset_0 = function () {
    this.size = this.builder_0.size;
    this.expectedModCount_0 = this.builder_0.getModCount_8be2vx$();
    this.lastIteratedIndex_0 = -1;
    this.setupTrieIterator_0();
  };
  PersistentVectorMutableIterator.prototype.setupTrieIterator_0 = function () {
    var root = this.builder_0.root_8be2vx$;
    if (root == null) {
      this.trieIterator_0 = null;
      return;
    }var trieSize = rootSize(this.builder_0.size);
    var trieIndex = coerceAtMost(this.index, trieSize);
    var trieHeight = (this.builder_0.rootShift_8be2vx$ / 5 | 0) + 1 | 0;
    if (this.trieIterator_0 == null) {
      this.trieIterator_0 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull(this.trieIterator_0).reset_6l36pp$(root, trieIndex, trieSize, trieHeight);
    }
  };
  PersistentVectorMutableIterator.prototype.add_11rb$ = function (element) {
    this.checkForComodification_0();
    this.builder_0.add_wxm5ur$(this.index, element);
    this.index = this.index + 1 | 0;
    this.reset_0();
  };
  PersistentVectorMutableIterator.prototype.remove = function () {
    this.checkForComodification_0();
    this.checkHasIterated_0();
    this.builder_0.removeAt_za3lpa$(this.lastIteratedIndex_0);
    if (this.lastIteratedIndex_0 < this.index)
      this.index = this.lastIteratedIndex_0;
    this.reset_0();
  };
  PersistentVectorMutableIterator.prototype.set_11rb$ = function (element) {
    this.checkForComodification_0();
    this.checkHasIterated_0();
    this.builder_0.set_wxm5ur$(this.lastIteratedIndex_0, element);
    this.expectedModCount_0 = this.builder_0.getModCount_8be2vx$();
    this.setupTrieIterator_0();
  };
  PersistentVectorMutableIterator.prototype.checkForComodification_0 = function () {
    if (this.expectedModCount_0 !== this.builder_0.getModCount_8be2vx$())
      throw ConcurrentModificationException_init();
  };
  PersistentVectorMutableIterator.prototype.checkHasIterated_0 = function () {
    if (this.lastIteratedIndex_0 === -1)
      throw IllegalStateException_init_0();
  };
  PersistentVectorMutableIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentVectorMutableIterator',
    interfaces: [AbstractListIterator, MutableListIterator]
  };
  function SmallPersistentVector(buffer) {
    SmallPersistentVector$Companion_getInstance();
    AbstractPersistentList.call(this);
    this.buffer_0 = buffer;
    assert(this.buffer_0.length <= 32);
  }
  Object.defineProperty(SmallPersistentVector.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.buffer_0.length;
    }
  });
  SmallPersistentVector.prototype.bufferOfSize_0 = function (size) {
    return Kotlin.newArray(size, null);
  };
  SmallPersistentVector.prototype.add_11rb$ = function (element) {
    if (this.size < 32) {
      var newBuffer = copyOf(this.buffer_0, this.size + 1 | 0);
      newBuffer[this.size] = element;
      return new SmallPersistentVector(newBuffer);
    }var tail = presizedBufferWith(element);
    return new PersistentVector(this.buffer_0, tail, this.size + 1 | 0, 0);
  };
  SmallPersistentVector.prototype.addAll_brywnq$ = function (elements) {
    var tmp$, tmp$_0;
    if ((this.size + elements.size | 0) <= 32) {
      var newBuffer = copyOf(this.buffer_0, this.size + elements.size | 0);
      var index = this.size;
      tmp$ = elements.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        newBuffer[tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }var $receiver = this.builder();
    $receiver.addAll_brywnq$(elements);
    return $receiver.build();
  };
  SmallPersistentVector.prototype.removeAll_ucl7l2$ = function (predicate) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var newBuffer = this.buffer_0;
    var newSize = this.size;
    var anyRemoved = false;
    tmp$ = this.size;
    for (var index = 0; index < tmp$; index++) {
      var element = (tmp$_0 = this.buffer_0[index]) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
      if (predicate(element)) {
        if (!anyRemoved) {
          newBuffer = this.buffer_0.slice();
          newSize = index;
          anyRemoved = true;
        }} else if (anyRemoved) {
        newBuffer[tmp$_1 = newSize, newSize = tmp$_1 + 1 | 0, tmp$_1] = element;
      }}
    tmp$_2 = newSize;
    if (tmp$_2 === this.size)
      tmp$_3 = this;
    else if (tmp$_2 === 0)
      tmp$_3 = SmallPersistentVector$Companion_getInstance().EMPTY;
    else
      tmp$_3 = new SmallPersistentVector(copyOfRange(newBuffer, 0, newSize));
    return tmp$_3;
  };
  SmallPersistentVector.prototype.addAll_u57x28$ = function (index, c) {
    var tmp$, tmp$_0;
    ListImplementation_getInstance().checkPositionIndex_6xvm5r$(index, this.size);
    if ((this.size + c.size | 0) <= 32) {
      var newBuffer = this.bufferOfSize_0(this.size + c.size | 0);
      arrayCopy(this.buffer_0, newBuffer, 0, 0, index);
      arrayCopy(this.buffer_0, newBuffer, index + c.size | 0, index, this.size);
      var position = index;
      tmp$ = c.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        newBuffer[tmp$_0 = position, position = tmp$_0 + 1 | 0, tmp$_0] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }var $receiver = this.builder();
    $receiver.addAll_u57x28$(index, c);
    return $receiver.build();
  };
  SmallPersistentVector.prototype.add_wxm5ur$ = function (index, element) {
    ListImplementation_getInstance().checkPositionIndex_6xvm5r$(index, this.size);
    if (index === this.size) {
      return this.add_11rb$(element);
    }if (this.size < 32) {
      var newBuffer = this.bufferOfSize_0(this.size + 1 | 0);
      arrayCopy(this.buffer_0, newBuffer, 0, 0, index);
      arrayCopy(this.buffer_0, newBuffer, index + 1 | 0, index, this.size);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }var root = this.buffer_0.slice();
    arrayCopy(this.buffer_0, root, index + 1 | 0, index, this.size - 1 | 0);
    root[index] = element;
    var tail = presizedBufferWith(this.buffer_0[31]);
    return new PersistentVector(root, tail, this.size + 1 | 0, 0);
  };
  SmallPersistentVector.prototype.removeAt_za3lpa$ = function (index) {
    ListImplementation_getInstance().checkElementIndex_6xvm5r$(index, this.size);
    if (this.size === 1) {
      return SmallPersistentVector$Companion_getInstance().EMPTY;
    }var newBuffer = copyOf(this.buffer_0, this.size - 1 | 0);
    arrayCopy(this.buffer_0, newBuffer, index, index + 1 | 0, this.size);
    return new SmallPersistentVector(newBuffer);
  };
  SmallPersistentVector.prototype.builder = function () {
    return new PersistentVectorBuilder(this, null, this.buffer_0, 0);
  };
  SmallPersistentVector.prototype.indexOf_11rb$ = function (element) {
    return indexOf(this.buffer_0, element);
  };
  SmallPersistentVector.prototype.lastIndexOf_11rb$ = function (element) {
    return lastIndexOf(this.buffer_0, element);
  };
  SmallPersistentVector.prototype.listIterator_za3lpa$ = function (index) {
    var tmp$;
    ListImplementation_getInstance().checkPositionIndex_6xvm5r$(index, this.size);
    return new BufferIterator(Kotlin.isArray(tmp$ = this.buffer_0) ? tmp$ : throwCCE(), index, this.size);
  };
  SmallPersistentVector.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    ListImplementation_getInstance().checkElementIndex_6xvm5r$(index, this.size);
    return (tmp$ = this.buffer_0[index]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  SmallPersistentVector.prototype.set_wxm5ur$ = function (index, element) {
    ListImplementation_getInstance().checkElementIndex_6xvm5r$(index, this.size);
    var newBuffer = this.buffer_0.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function SmallPersistentVector$Companion() {
    SmallPersistentVector$Companion_instance = this;
    this.EMPTY = new SmallPersistentVector([]);
  }
  SmallPersistentVector$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SmallPersistentVector$Companion_instance = null;
  function SmallPersistentVector$Companion_getInstance() {
    if (SmallPersistentVector$Companion_instance === null) {
      new SmallPersistentVector$Companion();
    }return SmallPersistentVector$Companion_instance;
  }
  SmallPersistentVector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SmallPersistentVector',
    interfaces: [AbstractPersistentList, ImmutableList]
  };
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.height_0 = height;
    this.path_0 = Kotlin.newArray(this.height_0, null);
    this.isInRightEdge_0 = index === size;
    this.path_0[0] = root;
    this.fillPath_0(index - (this.isInRightEdge_0 ? 1 : 0) | 0, 1);
  }
  TrieIterator.prototype.reset_6l36pp$ = function (root, index, size, height) {
    this.index = index;
    this.size = size;
    this.height_0 = height;
    if (this.path_0.length < height)
      this.path_0 = Kotlin.newArray(height, null);
    this.path_0[0] = root;
    this.isInRightEdge_0 = index === size;
    this.fillPath_0(index - (this.isInRightEdge_0 ? 1 : 0) | 0, 1);
  };
  TrieIterator.prototype.fillPath_0 = function (index, startLevel) {
    var tmp$;
    var shift = (this.height_0 - startLevel | 0) * 5 | 0;
    var i = startLevel;
    while (i < this.height_0) {
      this.path_0[i] = (Kotlin.isArray(tmp$ = this.path_0[i - 1 | 0]) ? tmp$ : throwCCE())[indexSegment(index, shift)];
      shift = shift - 5 | 0;
      i = i + 1 | 0;
    }
  };
  TrieIterator.prototype.fillPathIfNeeded_0 = function (indexPredicate) {
    var shift = 0;
    while (indexSegment(this.index, shift) === indexPredicate) {
      shift = shift + 5 | 0;
    }
    if (shift > 0) {
      var level = this.height_0 - 1 - (shift / 5 | 0) | 0;
      this.fillPath_0(this.index, level + 1 | 0);
    }};
  TrieIterator.prototype.elementAtCurrentIndex_0 = function () {
    var tmp$;
    var leafBufferIndex = this.index & 31;
    return (Kotlin.isArray(tmp$ = this.path_0[this.height_0 - 1 | 0]) ? tmp$ : throwCCE())[leafBufferIndex];
  };
  TrieIterator.prototype.next = function () {
    if (!this.hasNext()) {
      throw NoSuchElementException_init();
    }var result = this.elementAtCurrentIndex_0();
    this.index = this.index + 1 | 0;
    if (this.index === this.size) {
      this.isInRightEdge_0 = true;
      return result;
    }this.fillPathIfNeeded_0(0);
    return result;
  };
  TrieIterator.prototype.previous = function () {
    if (!this.hasPrevious()) {
      throw NoSuchElementException_init();
    }this.index = this.index - 1 | 0;
    if (this.isInRightEdge_0) {
      this.isInRightEdge_0 = false;
      return this.elementAtCurrentIndex_0();
    }this.fillPathIfNeeded_0(31);
    return this.elementAtCurrentIndex_0();
  };
  TrieIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrieIterator',
    interfaces: [AbstractListIterator]
  };
  var MAX_BUFFER_SIZE;
  var LOG_MAX_BUFFER_SIZE;
  var MAX_BUFFER_SIZE_MINUS_ONE;
  var MUTABLE_BUFFER_SIZE;
  function ObjectRef(value) {
    this.value = value;
  }
  ObjectRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjectRef',
    interfaces: []
  };
  function persistentVectorOf() {
    return SmallPersistentVector$Companion_getInstance().EMPTY;
  }
  function presizedBufferWith(element) {
    var buffer = Kotlin.newArray(32, null);
    buffer[0] = element;
    return buffer;
  }
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function rootSize(vectorSize) {
    return vectorSize - 1 & -32;
  }
  function PersistentHashMap(node, size) {
    PersistentHashMap$Companion_getInstance();
    AbstractMap.call(this);
    this.node_8be2vx$ = node;
    this.size_p4yskp$_0 = size;
  }
  Object.defineProperty(PersistentHashMap.prototype, 'size', {
    get: function () {
      return this.size_p4yskp$_0;
    }
  });
  Object.defineProperty(PersistentHashMap.prototype, 'keys', {
    configurable: true,
    get: function () {
      return new PersistentHashMapKeys(this);
    }
  });
  Object.defineProperty(PersistentHashMap.prototype, 'values', {
    configurable: true,
    get: function () {
      return new PersistentHashMapValues(this);
    }
  });
  Object.defineProperty(PersistentHashMap.prototype, 'entries', {
    configurable: true,
    get: function () {
      return this.createEntries_0();
    }
  });
  PersistentHashMap.prototype.createEntries_0 = function () {
    return new PersistentHashMapEntries(this);
  };
  PersistentHashMap.prototype.getEntries = function () {
    return this.createEntries_0();
  };
  PersistentHashMap.prototype.containsKey_11rb$ = function (key) {
    var tmp$;
    return this.node_8be2vx$.containsKey_k2qru7$((tmp$ = key != null ? hashCode(key) : null) != null ? tmp$ : 0, key, 0);
  };
  PersistentHashMap.prototype.get_11rb$ = function (key) {
    var tmp$;
    return this.node_8be2vx$.get_k2qru7$((tmp$ = key != null ? hashCode(key) : null) != null ? tmp$ : 0, key, 0);
  };
  PersistentHashMap.prototype.put_xwzc9p$ = function (key, value) {
    var tmp$;
    var tmp$_0;
    tmp$ = this.node_8be2vx$.put_cgqv3f$((tmp$_0 = key != null ? hashCode(key) : null) != null ? tmp$_0 : 0, key, value, 0);
    if (tmp$ == null) {
      return this;
    }var newNodeResult = tmp$;
    return new PersistentHashMap(newNodeResult.node, this.size + newNodeResult.sizeDelta | 0);
  };
  PersistentHashMap.prototype.remove_11rb$ = function (key) {
    var tmp$;
    var newNode = this.node_8be2vx$.remove_k2qru7$((tmp$ = key != null ? hashCode(key) : null) != null ? tmp$ : 0, key, 0);
    if (this.node_8be2vx$ === newNode) {
      return this;
    }if (newNode == null) {
      return PersistentHashMap$Companion_getInstance().emptyOf_3w54xu$();
    }return new PersistentHashMap(newNode, this.size - 1 | 0);
  };
  PersistentHashMap.prototype.remove_xwzc9p$ = function (key, value) {
    var tmp$;
    var newNode = this.node_8be2vx$.remove_cgqv3f$((tmp$ = key != null ? hashCode(key) : null) != null ? tmp$ : 0, key, value, 0);
    if (this.node_8be2vx$ === newNode) {
      return this;
    }if (newNode == null) {
      return PersistentHashMap$Companion_getInstance().emptyOf_3w54xu$();
    }return new PersistentHashMap(newNode, this.size - 1 | 0);
  };
  PersistentHashMap.prototype.putAll_a2k3zr$ = function (m) {
    var tmp$;
    var $receiver = (Kotlin.isType(tmp$ = this, PersistentMap) ? tmp$ : throwCCE()).builder();
    $receiver.putAll_a2k3zr$(m);
    return $receiver.build();
  };
  PersistentHashMap.prototype.clear = function () {
    return PersistentHashMap$Companion_getInstance().emptyOf_3w54xu$();
  };
  PersistentHashMap.prototype.builder = function () {
    return new PersistentHashMapBuilder(this);
  };
  function PersistentHashMap$Companion() {
    PersistentHashMap$Companion_instance = this;
    this.EMPTY_0 = new PersistentHashMap(TrieNode$Companion_getInstance().EMPTY_8be2vx$, 0);
  }
  PersistentHashMap$Companion.prototype.emptyOf_3w54xu$ = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.EMPTY_0, PersistentHashMap) ? tmp$ : throwCCE();
  };
  PersistentHashMap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PersistentHashMap$Companion_instance = null;
  function PersistentHashMap$Companion_getInstance() {
    if (PersistentHashMap$Companion_instance === null) {
      new PersistentHashMap$Companion();
    }return PersistentHashMap$Companion_instance;
  }
  PersistentHashMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMap',
    interfaces: [PersistentMap, AbstractMap]
  };
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.map_0 = map;
    this.ownership_8be2vx$_kmnnge$_0 = new MutabilityOwnership();
    this.node_8be2vx$ = this.map_0.node_8be2vx$;
    this.operationResult_8be2vx$ = null;
    this.modCount_8be2vx$ = 0;
    this.size_ypvqyu$_0 = this.map_0.size;
  }
  Object.defineProperty(PersistentHashMapBuilder.prototype, 'ownership_8be2vx$', {
    configurable: true,
    get: function () {
      return this.ownership_8be2vx$_kmnnge$_0;
    },
    set: function (ownership) {
      this.ownership_8be2vx$_kmnnge$_0 = ownership;
    }
  });
  Object.defineProperty(PersistentHashMapBuilder.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.size_ypvqyu$_0;
    },
    set: function (value) {
      this.size_ypvqyu$_0 = value;
      this.modCount_8be2vx$ = this.modCount_8be2vx$ + 1 | 0;
    }
  });
  PersistentHashMapBuilder.prototype.build = function () {
    var tmp$;
    if (this.node_8be2vx$ === this.map_0.node_8be2vx$) {
      tmp$ = this.map_0;
    } else {
      this.ownership_8be2vx$ = new MutabilityOwnership();
      tmp$ = new PersistentHashMap(this.node_8be2vx$, this.size);
    }
    this.map_0 = tmp$;
    return this.map_0;
  };
  Object.defineProperty(PersistentHashMapBuilder.prototype, 'entries', {
    configurable: true,
    get: function () {
      return new PersistentHashMapBuilderEntries(this);
    }
  });
  Object.defineProperty(PersistentHashMapBuilder.prototype, 'keys', {
    configurable: true,
    get: function () {
      return new PersistentHashMapBuilderKeys(this);
    }
  });
  Object.defineProperty(PersistentHashMapBuilder.prototype, 'values', {
    configurable: true,
    get: function () {
      return new PersistentHashMapBuilderValues(this);
    }
  });
  PersistentHashMapBuilder.prototype.containsKey_11rb$ = function (key) {
    var tmp$;
    return this.node_8be2vx$.containsKey_k2qru7$((tmp$ = key != null ? hashCode(key) : null) != null ? tmp$ : 0, key, 0);
  };
  PersistentHashMapBuilder.prototype.get_11rb$ = function (key) {
    var tmp$;
    return this.node_8be2vx$.get_k2qru7$((tmp$ = key != null ? hashCode(key) : null) != null ? tmp$ : 0, key, 0);
  };
  PersistentHashMapBuilder.prototype.put_xwzc9p$ = function (key, value) {
    this.operationResult_8be2vx$ = null;
    var tmp$;
    this.node_8be2vx$ = this.node_8be2vx$.mutablePut_6vy94v$((tmp$ = key != null ? hashCode(key) : null) != null ? tmp$ : 0, key, value, 0, this);
    return this.operationResult_8be2vx$;
  };
  PersistentHashMapBuilder.prototype.remove_11rb$ = function (key) {
    var tmp$, tmp$_0;
    this.operationResult_8be2vx$ = null;
    var tmp$_1;
    this.node_8be2vx$ = (tmp$_0 = this.node_8be2vx$.mutableRemove_fw9u4j$((tmp$_1 = key != null ? hashCode(key) : null) != null ? tmp$_1 : 0, key, 0, this)) != null ? tmp$_0 : Kotlin.isType(tmp$ = TrieNode$Companion_getInstance().EMPTY_8be2vx$, TrieNode) ? tmp$ : throwCCE();
    return this.operationResult_8be2vx$;
  };
  PersistentHashMapBuilder.prototype.remove_xwzc9p$ = function (key, value) {
    var tmp$, tmp$_0;
    var oldSize = this.size;
    var tmp$_1;
    this.node_8be2vx$ = (tmp$_0 = this.node_8be2vx$.mutableRemove_6vy94v$((tmp$_1 = key != null ? hashCode(key) : null) != null ? tmp$_1 : 0, key, value, 0, this)) != null ? tmp$_0 : Kotlin.isType(tmp$ = TrieNode$Companion_getInstance().EMPTY_8be2vx$, TrieNode) ? tmp$ : throwCCE();
    return oldSize !== this.size;
  };
  PersistentHashMapBuilder.prototype.clear = function () {
    var tmp$;
    this.node_8be2vx$ = Kotlin.isType(tmp$ = TrieNode$Companion_getInstance().EMPTY_8be2vx$, TrieNode) ? tmp$ : throwCCE();
    this.size = 0;
  };
  PersistentHashMapBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapBuilder',
    interfaces: [AbstractMutableMap, PersistentMap$Builder]
  };
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.parentIterator_0 = parentIterator;
  }
  TrieNodeMutableEntriesIterator.prototype.next = function () {
    var tmp$, tmp$_0;
    assert(this.hasNextKey());
    this.index_0 = this.index_0 + 2 | 0;
    return new MutableMapEntry(this.parentIterator_0, (tmp$ = this.buffer_0[this.index_0 - 2 | 0]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), (tmp$_0 = this.buffer_0[this.index_0 - 1 | 0]) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  };
  TrieNodeMutableEntriesIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrieNodeMutableEntriesIterator',
    interfaces: [TrieNodeBaseIterator]
  };
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.parentIterator_0 = parentIterator;
    this.value_dh5llm$_0 = value;
  }
  Object.defineProperty(MutableMapEntry.prototype, 'value', {
    get: function () {
      return this.value_dh5llm$_0;
    },
    set: function (value) {
      this.value_dh5llm$_0 = value;
    }
  });
  MutableMapEntry.prototype.setValue_11rc$ = function (newValue) {
    var result = this.value;
    this.value = newValue;
    this.parentIterator_0.setValue_xwzc9p$(this.key, newValue);
    return result;
  };
  MutableMapEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutableMapEntry',
    interfaces: [MutableMap$MutableEntry, MapEntry]
  };
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.node_8be2vx$, path);
    this.builder_0 = builder;
    this.lastIteratedKey_0 = null;
    this.nextWasInvoked_0 = false;
    this.expectedModCount_0 = this.builder_0.modCount_8be2vx$;
  }
  PersistentHashMapBuilderBaseIterator.prototype.next = function () {
    this.checkForComodification_0();
    this.lastIteratedKey_0 = this.currentKey_0();
    this.nextWasInvoked_0 = true;
    return PersistentHashMapBaseIterator.prototype.next.call(this);
  };
  PersistentHashMapBuilderBaseIterator.prototype.remove = function () {
    this.checkNextWasInvoked_0();
    if (this.hasNext()) {
      var currentKey = this.currentKey_0();
      var $receiver = this.builder_0;
      var key = this.lastIteratedKey_0;
      var tmp$;
      (Kotlin.isType(tmp$ = $receiver, MutableMap) ? tmp$ : throwCCE()).remove_11rb$(key);
      var tmp$_0;
      this.resetPath_0((tmp$_0 = currentKey != null ? hashCode(currentKey) : null) != null ? tmp$_0 : 0, this.builder_0.node_8be2vx$, currentKey, 0);
    } else {
      var $receiver_0 = this.builder_0;
      var key_0 = this.lastIteratedKey_0;
      var tmp$_1;
      (Kotlin.isType(tmp$_1 = $receiver_0, MutableMap) ? tmp$_1 : throwCCE()).remove_11rb$(key_0);
    }
    this.lastIteratedKey_0 = null;
    this.nextWasInvoked_0 = false;
    this.expectedModCount_0 = this.builder_0.modCount_8be2vx$;
  };
  PersistentHashMapBuilderBaseIterator.prototype.setValue_xwzc9p$ = function (key, newValue) {
    if (!this.builder_0.containsKey_11rb$(key))
      return;
    if (this.hasNext()) {
      var currentKey = this.currentKey_0();
      this.builder_0.put_xwzc9p$(key, newValue);
      var tmp$;
      this.resetPath_0((tmp$ = currentKey != null ? hashCode(currentKey) : null) != null ? tmp$ : 0, this.builder_0.node_8be2vx$, currentKey, 0);
    } else {
      this.builder_0.put_xwzc9p$(key, newValue);
    }
    this.expectedModCount_0 = this.builder_0.modCount_8be2vx$;
  };
  PersistentHashMapBuilderBaseIterator.prototype.resetPath_0 = function (keyHash, node, key, pathIndex) {
    var shift = pathIndex * 5 | 0;
    if (shift > 30) {
      this.path_0[pathIndex].reset_66e2ni$(node.buffer_8be2vx$, node.buffer_8be2vx$.length, 0);
      while (!equals(this.path_0[pathIndex].currentKey(), key)) {
        this.path_0[pathIndex].moveToNextKey();
      }
      this.pathLastIndex_0 = pathIndex;
      return;
    }var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (node.hasEntryAt_kcn2v3$(keyPositionMask)) {
      var keyIndex = node.entryKeyIndex_kcn2v3$(keyPositionMask);
      this.path_0[pathIndex].reset_66e2ni$(node.buffer_8be2vx$, 2 * node.entryCount_8be2vx$() | 0, keyIndex);
      this.pathLastIndex_0 = pathIndex;
      return;
    }var nodeIndex = node.nodeIndex_kcn2v3$(keyPositionMask);
    var targetNode = node.nodeAtIndex_kcn2v3$(nodeIndex);
    this.path_0[pathIndex].reset_66e2ni$(node.buffer_8be2vx$, 2 * node.entryCount_8be2vx$() | 0, nodeIndex);
    this.resetPath_0(keyHash, targetNode, key, pathIndex + 1 | 0);
  };
  PersistentHashMapBuilderBaseIterator.prototype.checkNextWasInvoked_0 = function () {
    if (!this.nextWasInvoked_0)
      throw IllegalStateException_init_0();
  };
  PersistentHashMapBuilderBaseIterator.prototype.checkForComodification_0 = function () {
    if (this.builder_0.modCount_8be2vx$ !== this.expectedModCount_0)
      throw ConcurrentModificationException_init();
  };
  PersistentHashMapBuilderBaseIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapBuilderBaseIterator',
    interfaces: [PersistentHashMapBaseIterator, MutableIterator]
  };
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var array = Array_0(8);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new TrieNodeMutableEntriesIterator(this);
    }
    this.base_0 = new PersistentHashMapBuilderBaseIterator(builder, array);
  }
  PersistentHashMapBuilderEntriesIterator.prototype.hasNext = function () {
    return this.base_0.hasNext();
  };
  PersistentHashMapBuilderEntriesIterator.prototype.next = function () {
    return this.base_0.next();
  };
  PersistentHashMapBuilderEntriesIterator.prototype.remove = function () {
    this.base_0.remove();
  };
  PersistentHashMapBuilderEntriesIterator.prototype.setValue_xwzc9p$ = function (key, newValue) {
    this.base_0.setValue_xwzc9p$(key, newValue);
  };
  PersistentHashMapBuilderEntriesIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapBuilderEntriesIterator',
    interfaces: [MutableIterator]
  };
  function PersistentHashMapBuilderKeysIterator(builder) {
    var array = Array_0(8);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new TrieNodeKeysIterator();
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, array);
  }
  PersistentHashMapBuilderKeysIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapBuilderKeysIterator',
    interfaces: [PersistentHashMapBuilderBaseIterator]
  };
  function PersistentHashMapBuilderValuesIterator(builder) {
    var array = Array_0(8);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new TrieNodeValuesIterator();
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, array);
  }
  PersistentHashMapBuilderValuesIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapBuilderValuesIterator',
    interfaces: [PersistentHashMapBuilderBaseIterator]
  };
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMutableSet.call(this);
    this.builder_0 = builder;
  }
  PersistentHashMapBuilderEntries.prototype.add_11rb$ = function (element) {
    throw UnsupportedOperationException_init();
  };
  PersistentHashMapBuilderEntries.prototype.clear = function () {
    this.builder_0.clear();
  };
  PersistentHashMapBuilderEntries.prototype.iterator = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.builder_0);
  };
  PersistentHashMapBuilderEntries.prototype.remove_11rb$ = function (element) {
    var tmp$;
    if (!Kotlin.isType((tmp$ = element) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), MutableMap$MutableEntry))
      return false;
    return this.builder_0.remove_xwzc9p$(element.key, element.value);
  };
  Object.defineProperty(PersistentHashMapBuilderEntries.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.builder_0.size;
    }
  });
  PersistentHashMapBuilderEntries.prototype.contains_11rb$ = function (element) {
    var tmp$, tmp$_0, tmp$_1;
    if (!Kotlin.isType((tmp$ = element) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), MutableMap$MutableEntry))
      return false;
    return (tmp$_1 = (tmp$_0 = this.builder_0.get_11rb$(element.key)) != null ? equals(tmp$_0, element.value) : null) != null ? tmp$_1 : element.value == null && this.builder_0.containsKey_11rb$(element.key);
  };
  PersistentHashMapBuilderEntries.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapBuilderEntries',
    interfaces: [AbstractMutableSet, MutableSet]
  };
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.builder_0 = builder;
  }
  PersistentHashMapBuilderKeys.prototype.add_11rb$ = function (element) {
    throw UnsupportedOperationException_init();
  };
  PersistentHashMapBuilderKeys.prototype.clear = function () {
    this.builder_0.clear();
  };
  PersistentHashMapBuilderKeys.prototype.iterator = function () {
    return new PersistentHashMapBuilderKeysIterator(this.builder_0);
  };
  PersistentHashMapBuilderKeys.prototype.remove_11rb$ = function (element) {
    if (this.builder_0.containsKey_11rb$(element)) {
      this.builder_0.remove_11rb$(element);
      return true;
    }return false;
  };
  Object.defineProperty(PersistentHashMapBuilderKeys.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.builder_0.size;
    }
  });
  PersistentHashMapBuilderKeys.prototype.contains_11rb$ = function (element) {
    return this.builder_0.containsKey_11rb$(element);
  };
  PersistentHashMapBuilderKeys.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapBuilderKeys',
    interfaces: [AbstractMutableSet, MutableSet]
  };
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.builder_0 = builder;
  }
  Object.defineProperty(PersistentHashMapBuilderValues.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.builder_0.size;
    }
  });
  PersistentHashMapBuilderValues.prototype.contains_11rb$ = function (element) {
    return this.builder_0.containsValue_11rc$(element);
  };
  PersistentHashMapBuilderValues.prototype.add_11rb$ = function (element) {
    throw UnsupportedOperationException_init();
  };
  PersistentHashMapBuilderValues.prototype.clear = function () {
    this.builder_0.clear();
  };
  PersistentHashMapBuilderValues.prototype.iterator = function () {
    return new PersistentHashMapBuilderValuesIterator(this.builder_0);
  };
  PersistentHashMapBuilderValues.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapBuilderValues',
    interfaces: [AbstractMutableCollection, MutableCollection]
  };
  var TRIE_MAX_HEIGHT;
  function TrieNodeBaseIterator() {
    this.buffer_gsie1e$_0 = TrieNode$Companion_getInstance().EMPTY_8be2vx$.buffer_8be2vx$;
    this.dataSize_0 = 0;
    this.index_0 = 0;
  }
  Object.defineProperty(TrieNodeBaseIterator.prototype, 'buffer_0', {
    configurable: true,
    get: function () {
      return this.buffer_gsie1e$_0;
    },
    set: function (buffer) {
      this.buffer_gsie1e$_0 = buffer;
    }
  });
  TrieNodeBaseIterator.prototype.reset_66e2ni$ = function (buffer, dataSize, index) {
    this.buffer_0 = buffer;
    this.dataSize_0 = dataSize;
    this.index_0 = index;
  };
  TrieNodeBaseIterator.prototype.reset_dz8xuo$ = function (buffer, dataSize) {
    this.reset_66e2ni$(buffer, dataSize, 0);
  };
  TrieNodeBaseIterator.prototype.hasNextKey = function () {
    return this.index_0 < this.dataSize_0;
  };
  TrieNodeBaseIterator.prototype.currentKey = function () {
    var tmp$;
    assert(this.hasNextKey());
    return (tmp$ = this.buffer_0[this.index_0]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  TrieNodeBaseIterator.prototype.moveToNextKey = function () {
    assert(this.hasNextKey());
    this.index_0 = this.index_0 + 2 | 0;
  };
  TrieNodeBaseIterator.prototype.hasNextNode = function () {
    assert(this.index_0 >= this.dataSize_0);
    return this.index_0 < this.buffer_0.length;
  };
  TrieNodeBaseIterator.prototype.currentNode = function () {
    var tmp$;
    assert(this.hasNextNode());
    return Kotlin.isType(tmp$ = this.buffer_0[this.index_0], TrieNode) ? tmp$ : throwCCE();
  };
  TrieNodeBaseIterator.prototype.moveToNextNode = function () {
    assert(this.hasNextNode());
    this.index_0 = this.index_0 + 1 | 0;
  };
  TrieNodeBaseIterator.prototype.hasNext = function () {
    return this.hasNextKey();
  };
  TrieNodeBaseIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrieNodeBaseIterator',
    interfaces: [Iterator]
  };
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  TrieNodeKeysIterator.prototype.next = function () {
    var tmp$;
    assert(this.hasNextKey());
    this.index_0 = this.index_0 + 2 | 0;
    return (tmp$ = this.buffer_0[this.index_0 - 2 | 0]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  TrieNodeKeysIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrieNodeKeysIterator',
    interfaces: [TrieNodeBaseIterator]
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  TrieNodeValuesIterator.prototype.next = function () {
    var tmp$;
    assert(this.hasNextKey());
    this.index_0 = this.index_0 + 2 | 0;
    return (tmp$ = this.buffer_0[this.index_0 - 1 | 0]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  TrieNodeValuesIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrieNodeValuesIterator',
    interfaces: [TrieNodeBaseIterator]
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  TrieNodeEntriesIterator.prototype.next = function () {
    var tmp$, tmp$_0;
    assert(this.hasNextKey());
    this.index_0 = this.index_0 + 2 | 0;
    return new MapEntry((tmp$ = this.buffer_0[this.index_0 - 2 | 0]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), (tmp$_0 = this.buffer_0[this.index_0 - 1 | 0]) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  };
  TrieNodeEntriesIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrieNodeEntriesIterator',
    interfaces: [TrieNodeBaseIterator]
  };
  function MapEntry(key, value) {
    this.key_wi43lk$_0 = key;
    this.value_n77q2e$_0 = value;
  }
  Object.defineProperty(MapEntry.prototype, 'key', {
    get: function () {
      return this.key_wi43lk$_0;
    }
  });
  Object.defineProperty(MapEntry.prototype, 'value', {
    get: function () {
      return this.value_n77q2e$_0;
    }
  });
  MapEntry.prototype.hashCode = function () {
    var $receiver = this.key;
    var tmp$;
    var tmp$_0 = (tmp$ = $receiver != null ? hashCode($receiver) : null) != null ? tmp$ : 0;
    var $receiver_0 = this.value;
    var tmp$_1;
    return tmp$_0 ^ ((tmp$_1 = $receiver_0 != null ? hashCode($receiver_0) : null) != null ? tmp$_1 : 0);
  };
  MapEntry.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = other, Map$Entry) ? tmp$ : null) != null ? equals(tmp$_0.key, this.key) && equals(tmp$_0.value, this.value) : null) != null ? tmp$_1 : false;
  };
  MapEntry.prototype.toString = function () {
    return toString(this.key) + '=' + toString(this.value);
  };
  MapEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapEntry',
    interfaces: [Map$Entry]
  };
  function PersistentHashMapBaseIterator(node, path) {
    this.path_0 = path;
    this.pathLastIndex_0 = 0;
    this._hasNext = true;
    this.path_0[0].reset_dz8xuo$(node.buffer_8be2vx$, 2 * node.entryCount_8be2vx$() | 0);
    this.pathLastIndex_0 = 0;
    this.ensureNextEntryIsReady_0();
  }
  PersistentHashMapBaseIterator.prototype.moveToNextNodeWithData_0 = function (pathIndex) {
    if (this.path_0[pathIndex].hasNextKey()) {
      return pathIndex;
    }if (this.path_0[pathIndex].hasNextNode()) {
      var node = this.path_0[pathIndex].currentNode();
      if (pathIndex === 6) {
        this.path_0[pathIndex + 1 | 0].reset_dz8xuo$(node.buffer_8be2vx$, node.buffer_8be2vx$.length);
      } else {
        this.path_0[pathIndex + 1 | 0].reset_dz8xuo$(node.buffer_8be2vx$, 2 * node.entryCount_8be2vx$() | 0);
      }
      return this.moveToNextNodeWithData_0(pathIndex + 1 | 0);
    }return -1;
  };
  PersistentHashMapBaseIterator.prototype.ensureNextEntryIsReady_0 = function () {
    if (this.path_0[this.pathLastIndex_0].hasNextKey()) {
      return;
    }for (var i = this.pathLastIndex_0; i >= 0; i--) {
      var result = this.moveToNextNodeWithData_0(i);
      if (result === -1 && this.path_0[i].hasNextNode()) {
        this.path_0[i].moveToNextNode();
        result = this.moveToNextNodeWithData_0(i);
      }if (result !== -1) {
        this.pathLastIndex_0 = result;
        return;
      }if (i > 0) {
        this.path_0[i - 1 | 0].moveToNextNode();
      }this.path_0[i].reset_dz8xuo$(TrieNode$Companion_getInstance().EMPTY_8be2vx$.buffer_8be2vx$, 0);
    }
    this._hasNext = false;
  };
  PersistentHashMapBaseIterator.prototype.currentKey_0 = function () {
    this.checkHasNext_0();
    return this.path_0[this.pathLastIndex_0].currentKey();
  };
  PersistentHashMapBaseIterator.prototype.hasNext = function () {
    return this._hasNext;
  };
  PersistentHashMapBaseIterator.prototype.next = function () {
    this.checkHasNext_0();
    var result = this.path_0[this.pathLastIndex_0].next();
    this.ensureNextEntryIsReady_0();
    return result;
  };
  PersistentHashMapBaseIterator.prototype.checkHasNext_0 = function () {
    if (!this.hasNext())
      throw NoSuchElementException_init();
  };
  PersistentHashMapBaseIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapBaseIterator',
    interfaces: [Iterator]
  };
  function PersistentHashMapEntriesIterator(node) {
    var array = Array_0(8);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new TrieNodeEntriesIterator();
    }
    PersistentHashMapBaseIterator.call(this, node, array);
  }
  PersistentHashMapEntriesIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapEntriesIterator',
    interfaces: [PersistentHashMapBaseIterator]
  };
  function PersistentHashMapKeysIterator(node) {
    var array = Array_0(8);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new TrieNodeKeysIterator();
    }
    PersistentHashMapBaseIterator.call(this, node, array);
  }
  PersistentHashMapKeysIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapKeysIterator',
    interfaces: [PersistentHashMapBaseIterator]
  };
  function PersistentHashMapValuesIterator(node) {
    var array = Array_0(8);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new TrieNodeValuesIterator();
    }
    PersistentHashMapBaseIterator.call(this, node, array);
  }
  PersistentHashMapValuesIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapValuesIterator',
    interfaces: [PersistentHashMapBaseIterator]
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.map_0 = map;
  }
  Object.defineProperty(PersistentHashMapEntries.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.map_0.size;
    }
  });
  PersistentHashMapEntries.prototype.contains_11rb$ = function (element) {
    var tmp$, tmp$_0, tmp$_1;
    if (!Kotlin.isType((tmp$ = element) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), Map$Entry))
      return false;
    return (tmp$_1 = (tmp$_0 = this.map_0.get_11rb$(element.key)) != null ? equals(tmp$_0, element.value) : null) != null ? tmp$_1 : element.value == null && this.map_0.containsKey_11rb$(element.key);
  };
  PersistentHashMapEntries.prototype.iterator = function () {
    return new PersistentHashMapEntriesIterator(this.map_0.node_8be2vx$);
  };
  PersistentHashMapEntries.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapEntries',
    interfaces: [AbstractSet, ImmutableSet]
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.map_0 = map;
  }
  Object.defineProperty(PersistentHashMapKeys.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.map_0.size;
    }
  });
  PersistentHashMapKeys.prototype.contains_11rb$ = function (element) {
    return this.map_0.containsKey_11rb$(element);
  };
  PersistentHashMapKeys.prototype.iterator = function () {
    return new PersistentHashMapKeysIterator(this.map_0.node_8be2vx$);
  };
  PersistentHashMapKeys.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapKeys',
    interfaces: [AbstractSet, ImmutableSet]
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.map_0 = map;
  }
  Object.defineProperty(PersistentHashMapValues.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.map_0.size;
    }
  });
  PersistentHashMapValues.prototype.contains_11rb$ = function (element) {
    return this.map_0.containsValue_11rc$(element);
  };
  PersistentHashMapValues.prototype.iterator = function () {
    return new PersistentHashMapValuesIterator(this.map_0.node_8be2vx$);
  };
  PersistentHashMapValues.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashMapValues',
    interfaces: [AbstractCollection, ImmutableCollection]
  };
  var MAX_BRANCHING_FACTOR;
  var LOG_MAX_BRANCHING_FACTOR;
  var MAX_BRANCHING_FACTOR_MINUS_ONE;
  var ENTRY_SIZE;
  var MAX_SHIFT;
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function insertEntryAtIndex($receiver, keyIndex, key, value) {
    var newBuffer = Kotlin.newArray($receiver.length + 2 | 0, null);
    arrayCopy($receiver, newBuffer, 0, 0, keyIndex);
    arrayCopy($receiver, newBuffer, keyIndex + 2 | 0, keyIndex, $receiver.length);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceEntryWithNode($receiver, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    var newBuffer = Kotlin.newArray($receiver.length - 2 + 1 | 0, null);
    arrayCopy($receiver, newBuffer, 0, 0, keyIndex);
    arrayCopy($receiver, newBuffer, keyIndex, keyIndex + 2 | 0, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    arrayCopy($receiver, newBuffer, newNodeIndex + 1 | 0, nodeIndex, $receiver.length);
    return newBuffer;
  }
  function replaceNodeWithEntry($receiver, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf($receiver, $receiver.length + 1 | 0);
    arrayCopy(newBuffer, newBuffer, nodeIndex + 2 | 0, nodeIndex + 1 | 0, $receiver.length);
    arrayCopy(newBuffer, newBuffer, keyIndex + 2 | 0, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeEntryAtIndex($receiver, keyIndex) {
    var newBuffer = Kotlin.newArray($receiver.length - 2 | 0, null);
    arrayCopy($receiver, newBuffer, 0, 0, keyIndex);
    arrayCopy($receiver, newBuffer, keyIndex, keyIndex + 2 | 0, $receiver.length);
    return newBuffer;
  }
  function removeNodeAtIndex($receiver, nodeIndex) {
    var newBuffer = Kotlin.newArray($receiver.length - 1 | 0, null);
    arrayCopy($receiver, newBuffer, 0, 0, nodeIndex);
    arrayCopy($receiver, newBuffer, nodeIndex, nodeIndex + 1 | 0, $receiver.length);
    return newBuffer;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    TrieNode$Companion_getInstance();
    this.dataMap_0 = dataMap;
    this.nodeMap_0 = nodeMap;
    this.ownedBy_0 = ownedBy;
    this.buffer_8be2vx$_2b47a1$_0 = buffer;
  }
  function TrieNode$ModificationResult(node, sizeDelta) {
    this.node = node;
    this.sizeDelta = sizeDelta;
  }
  TrieNode$ModificationResult.prototype.replaceNode_j4lice$ = defineInlineFunction('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.ModificationResult.replaceNode_j4lice$', function (operation) {
    this.node = operation(this.node);
    return this;
  });
  TrieNode$ModificationResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModificationResult',
    interfaces: []
  };
  TrieNode.prototype.asInsertResult_0 = function () {
    return new TrieNode$ModificationResult(this, 1);
  };
  TrieNode.prototype.asUpdateResult_0 = function () {
    return new TrieNode$ModificationResult(this, 0);
  };
  Object.defineProperty(TrieNode.prototype, 'buffer_8be2vx$', {
    configurable: true,
    get: function () {
      return this.buffer_8be2vx$_2b47a1$_0;
    },
    set: function (buffer) {
      this.buffer_8be2vx$_2b47a1$_0 = buffer;
    }
  });
  TrieNode.prototype.entryCount_8be2vx$ = function () {
    return countOneBits(this.dataMap_0);
  };
  TrieNode.prototype.hasEntryAt_kcn2v3$ = function (positionMask) {
    return (this.dataMap_0 & positionMask) !== 0;
  };
  TrieNode.prototype.hasNodeAt_0 = function (positionMask) {
    return (this.nodeMap_0 & positionMask) !== 0;
  };
  TrieNode.prototype.entryKeyIndex_kcn2v3$ = function (positionMask) {
    return 2 * countOneBits(this.dataMap_0 & positionMask - 1) | 0;
  };
  TrieNode.prototype.nodeIndex_kcn2v3$ = function (positionMask) {
    return this.buffer_8be2vx$.length - 1 - countOneBits(this.nodeMap_0 & positionMask - 1) | 0;
  };
  TrieNode.prototype.keyAtIndex_0 = function (keyIndex) {
    var tmp$;
    return (tmp$ = this.buffer_8be2vx$[keyIndex]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  TrieNode.prototype.valueAtKeyIndex_0 = function (keyIndex) {
    var tmp$;
    return (tmp$ = this.buffer_8be2vx$[keyIndex + 1 | 0]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  TrieNode.prototype.nodeAtIndex_kcn2v3$ = function (nodeIndex) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.buffer_8be2vx$[nodeIndex], TrieNode) ? tmp$ : throwCCE();
  };
  TrieNode.prototype.insertEntryAt_0 = function (positionMask, key, value) {
    var keyIndex = this.entryKeyIndex_kcn2v3$(positionMask);
    var newBuffer = insertEntryAtIndex(this.buffer_8be2vx$, keyIndex, key, value);
    return TrieNode_init(this.dataMap_0 | positionMask, this.nodeMap_0, newBuffer);
  };
  TrieNode.prototype.mutableInsertEntryAt_0 = function (positionMask, key, value, owner) {
    var keyIndex = this.entryKeyIndex_kcn2v3$(positionMask);
    if (this.ownedBy_0 === owner) {
      this.buffer_8be2vx$ = insertEntryAtIndex(this.buffer_8be2vx$, keyIndex, key, value);
      this.dataMap_0 = this.dataMap_0 | positionMask;
      return this;
    }var newBuffer = insertEntryAtIndex(this.buffer_8be2vx$, keyIndex, key, value);
    return new TrieNode(this.dataMap_0 | positionMask, this.nodeMap_0, newBuffer, owner);
  };
  TrieNode.prototype.updateValueAtIndex_0 = function (keyIndex, value) {
    var newBuffer = this.buffer_8be2vx$.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init(this.dataMap_0, this.nodeMap_0, newBuffer);
  };
  TrieNode.prototype.mutableUpdateValueAtIndex_0 = function (keyIndex, value, mutator) {
    if (this.ownedBy_0 === mutator.ownership_8be2vx$) {
      this.buffer_8be2vx$[keyIndex + 1 | 0] = value;
      return this;
    }mutator.modCount_8be2vx$ = mutator.modCount_8be2vx$ + 1 | 0;
    var newBuffer = this.buffer_8be2vx$.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode(this.dataMap_0, this.nodeMap_0, newBuffer, mutator.ownership_8be2vx$);
  };
  TrieNode.prototype.updateNodeAtIndex_0 = function (nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.buffer_8be2vx$;
    if (newNodeBuffer.length === 2 && newNode.nodeMap_0 === 0) {
      if (this.buffer_8be2vx$.length === 1) {
        newNode.dataMap_0 = this.nodeMap_0;
        return newNode;
      }var keyIndex = this.entryKeyIndex_kcn2v3$(positionMask);
      var newBuffer = replaceNodeWithEntry(this.buffer_8be2vx$, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init(this.dataMap_0 ^ positionMask, this.nodeMap_0 ^ positionMask, newBuffer);
    }var newBuffer_0 = copyOf(this.buffer_8be2vx$, this.buffer_8be2vx$.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init(this.dataMap_0, this.nodeMap_0, newBuffer_0);
  };
  TrieNode.prototype.mutableUpdateNodeAtIndex_0 = function (nodeIndex, newNode, owner) {
    if (this.buffer_8be2vx$.length === 1 && newNode.buffer_8be2vx$.length === 2 && newNode.nodeMap_0 === 0) {
      newNode.dataMap_0 = this.nodeMap_0;
      return newNode;
    }if (this.ownedBy_0 === owner) {
      this.buffer_8be2vx$[nodeIndex] = newNode;
      return this;
    }var newBuffer = this.buffer_8be2vx$.slice();
    newBuffer[nodeIndex] = newNode;
    return new TrieNode(this.dataMap_0, this.nodeMap_0, newBuffer, owner);
  };
  TrieNode.prototype.removeNodeAtIndex_0 = function (nodeIndex, positionMask) {
    if (this.buffer_8be2vx$.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex(this.buffer_8be2vx$, nodeIndex);
    return TrieNode_init(this.dataMap_0, this.nodeMap_0 ^ positionMask, newBuffer);
  };
  TrieNode.prototype.mutableRemoveNodeAtIndex_0 = function (nodeIndex, positionMask, owner) {
    if (this.buffer_8be2vx$.length === 1)
      return null;
    if (this.ownedBy_0 === owner) {
      this.buffer_8be2vx$ = removeNodeAtIndex(this.buffer_8be2vx$, nodeIndex);
      this.nodeMap_0 = this.nodeMap_0 ^ positionMask;
      return this;
    }var newBuffer = removeNodeAtIndex(this.buffer_8be2vx$, nodeIndex);
    return new TrieNode(this.dataMap_0, this.nodeMap_0 ^ positionMask, newBuffer, owner);
  };
  TrieNode.prototype.bufferMoveEntryToNode_0 = function (keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = this.keyAtIndex_0(keyIndex);
    var tmp$;
    var storedKeyHash = (tmp$ = storedKey != null ? hashCode(storedKey) : null) != null ? tmp$ : 0;
    var storedValue = this.valueAtKeyIndex_0(keyIndex);
    var newNode = this.makeNode_0(storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = this.nodeIndex_kcn2v3$(positionMask) + 1 | 0;
    return replaceEntryWithNode(this.buffer_8be2vx$, keyIndex, nodeIndex, newNode);
  };
  TrieNode.prototype.moveEntryToNode_0 = function (keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = this.bufferMoveEntryToNode_0(keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init(this.dataMap_0 ^ positionMask, this.nodeMap_0 | positionMask, newBuffer);
  };
  TrieNode.prototype.mutableMoveEntryToNode_0 = function (keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if (this.ownedBy_0 === owner) {
      this.buffer_8be2vx$ = this.bufferMoveEntryToNode_0(keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      this.dataMap_0 = this.dataMap_0 ^ positionMask;
      this.nodeMap_0 = this.nodeMap_0 | positionMask;
      return this;
    }var newBuffer = this.bufferMoveEntryToNode_0(keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode(this.dataMap_0 ^ positionMask, this.nodeMap_0 | positionMask, newBuffer, owner);
  };
  TrieNode.prototype.makeNode_0 = function (keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    var tmp$;
    if (shift > 30) {
      return new TrieNode(0, 0, [key1, value1, key2, value2], owner);
    }var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (setBit1 !== setBit2) {
      if (setBit1 < setBit2) {
        tmp$ = [key1, value1, key2, value2];
      } else {
        tmp$ = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp$;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }var node = this.makeNode_0(keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    return new TrieNode(0, 1 << setBit1, [node], owner);
  };
  TrieNode.prototype.removeEntryAtIndex_0 = function (keyIndex, positionMask) {
    if (this.buffer_8be2vx$.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex(this.buffer_8be2vx$, keyIndex);
    return TrieNode_init(this.dataMap_0 ^ positionMask, this.nodeMap_0, newBuffer);
  };
  TrieNode.prototype.mutableRemoveEntryAtIndex_0 = function (keyIndex, positionMask, mutator) {
    mutator.size = mutator.size - 1 | 0;
    mutator.operationResult_8be2vx$ = this.valueAtKeyIndex_0(keyIndex);
    if (this.buffer_8be2vx$.length === 2)
      return null;
    if (this.ownedBy_0 === mutator.ownership_8be2vx$) {
      this.buffer_8be2vx$ = removeEntryAtIndex(this.buffer_8be2vx$, keyIndex);
      this.dataMap_0 = this.dataMap_0 ^ positionMask;
      return this;
    }var newBuffer = removeEntryAtIndex(this.buffer_8be2vx$, keyIndex);
    return new TrieNode(this.dataMap_0 ^ positionMask, this.nodeMap_0, newBuffer, mutator.ownership_8be2vx$);
  };
  TrieNode.prototype.collisionRemoveEntryAtIndex_0 = function (i) {
    if (this.buffer_8be2vx$.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex(this.buffer_8be2vx$, i);
    return TrieNode_init(0, 0, newBuffer);
  };
  TrieNode.prototype.mutableCollisionRemoveEntryAtIndex_0 = function (i, mutator) {
    mutator.size = mutator.size - 1 | 0;
    mutator.operationResult_8be2vx$ = this.valueAtKeyIndex_0(i);
    if (this.buffer_8be2vx$.length === 2)
      return null;
    if (this.ownedBy_0 === mutator.ownership_8be2vx$) {
      this.buffer_8be2vx$ = removeEntryAtIndex(this.buffer_8be2vx$, i);
      return this;
    }var newBuffer = removeEntryAtIndex(this.buffer_8be2vx$, i);
    return new TrieNode(0, 0, newBuffer, mutator.ownership_8be2vx$);
  };
  TrieNode.prototype.collisionContainsKey_0 = function (key) {
    var tmp$;
    tmp$ = this.buffer_8be2vx$.length;
    for (var i = 0; i < tmp$; i += 2) {
      if (equals(key, this.buffer_8be2vx$[i]))
        return true;
    }
    return false;
  };
  TrieNode.prototype.collisionGet_0 = function (key) {
    var tmp$;
    tmp$ = this.buffer_8be2vx$.length;
    for (var i = 0; i < tmp$; i += 2) {
      if (equals(key, this.keyAtIndex_0(i))) {
        return this.valueAtKeyIndex_0(i);
      }}
    return null;
  };
  TrieNode.prototype.collisionPut_0 = function (key, value) {
    var tmp$;
    tmp$ = this.buffer_8be2vx$.length;
    for (var i = 0; i < tmp$; i += 2) {
      if (equals(key, this.keyAtIndex_0(i))) {
        if (value === this.valueAtKeyIndex_0(i)) {
          return null;
        }var newBuffer = this.buffer_8be2vx$.slice();
        newBuffer[i + 1 | 0] = value;
        return TrieNode_init(0, 0, newBuffer).asUpdateResult_0();
      }}
    var newBuffer_0 = insertEntryAtIndex(this.buffer_8be2vx$, 0, key, value);
    return TrieNode_init(0, 0, newBuffer_0).asInsertResult_0();
  };
  TrieNode.prototype.mutableCollisionPut_0 = function (key, value, mutator) {
    var tmp$;
    tmp$ = this.buffer_8be2vx$.length;
    for (var i = 0; i < tmp$; i += 2) {
      if (equals(key, this.keyAtIndex_0(i))) {
        mutator.operationResult_8be2vx$ = this.valueAtKeyIndex_0(i);
        if (this.ownedBy_0 === mutator.ownership_8be2vx$) {
          this.buffer_8be2vx$[i + 1 | 0] = value;
          return this;
        }mutator.modCount_8be2vx$ = mutator.modCount_8be2vx$ + 1 | 0;
        var newBuffer = this.buffer_8be2vx$.slice();
        newBuffer[i + 1 | 0] = value;
        return new TrieNode(0, 0, newBuffer, mutator.ownership_8be2vx$);
      }}
    mutator.size = mutator.size + 1 | 0;
    var newBuffer_0 = insertEntryAtIndex(this.buffer_8be2vx$, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.ownership_8be2vx$);
  };
  TrieNode.prototype.collisionRemove_0 = function (key) {
    var tmp$;
    tmp$ = this.buffer_8be2vx$.length;
    for (var i = 0; i < tmp$; i += 2) {
      if (equals(key, this.keyAtIndex_0(i))) {
        return this.collisionRemoveEntryAtIndex_0(i);
      }}
    return this;
  };
  TrieNode.prototype.mutableCollisionRemove_0 = function (key, mutator) {
    var tmp$;
    tmp$ = this.buffer_8be2vx$.length;
    for (var i = 0; i < tmp$; i += 2) {
      if (equals(key, this.keyAtIndex_0(i))) {
        return this.mutableCollisionRemoveEntryAtIndex_0(i, mutator);
      }}
    return this;
  };
  TrieNode.prototype.collisionRemove_1 = function (key, value) {
    var tmp$;
    tmp$ = this.buffer_8be2vx$.length;
    for (var i = 0; i < tmp$; i += 2) {
      if (equals(key, this.keyAtIndex_0(i)) && equals(value, this.valueAtKeyIndex_0(i))) {
        return this.collisionRemoveEntryAtIndex_0(i);
      }}
    return this;
  };
  TrieNode.prototype.mutableCollisionRemove_1 = function (key, value, mutator) {
    var tmp$;
    tmp$ = this.buffer_8be2vx$.length;
    for (var i = 0; i < tmp$; i += 2) {
      if (equals(key, this.keyAtIndex_0(i)) && equals(value, this.valueAtKeyIndex_0(i))) {
        return this.mutableCollisionRemoveEntryAtIndex_0(i, mutator);
      }}
    return this;
  };
  TrieNode.prototype.containsKey_k2qru7$ = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.hasEntryAt_kcn2v3$(keyPositionMask)) {
      return equals(key, this.keyAtIndex_0(this.entryKeyIndex_kcn2v3$(keyPositionMask)));
    }if (this.hasNodeAt_0(keyPositionMask)) {
      var targetNode = this.nodeAtIndex_kcn2v3$(this.nodeIndex_kcn2v3$(keyPositionMask));
      if (shift === 30) {
        return targetNode.collisionContainsKey_0(key);
      }return targetNode.containsKey_k2qru7$(keyHash, key, shift + 5 | 0);
    }return false;
  };
  TrieNode.prototype.get_k2qru7$ = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.hasEntryAt_kcn2v3$(keyPositionMask)) {
      var keyIndex = this.entryKeyIndex_kcn2v3$(keyPositionMask);
      if (equals(key, this.keyAtIndex_0(keyIndex))) {
        return this.valueAtKeyIndex_0(keyIndex);
      }return null;
    }if (this.hasNodeAt_0(keyPositionMask)) {
      var targetNode = this.nodeAtIndex_kcn2v3$(this.nodeIndex_kcn2v3$(keyPositionMask));
      if (shift === 30) {
        return targetNode.collisionGet_0(key);
      }return targetNode.get_k2qru7$(keyHash, key, shift + 5 | 0);
    }return null;
  };
  TrieNode.prototype.put_cgqv3f$ = function (keyHash, key, value, shift) {
    var tmp$, tmp$_0, tmp$_1;
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.hasEntryAt_kcn2v3$(keyPositionMask)) {
      var keyIndex = this.entryKeyIndex_kcn2v3$(keyPositionMask);
      if (equals(key, this.keyAtIndex_0(keyIndex))) {
        if (this.valueAtKeyIndex_0(keyIndex) === value)
          return null;
        return this.updateValueAtIndex_0(keyIndex, value).asUpdateResult_0();
      }return this.moveEntryToNode_0(keyIndex, keyPositionMask, keyHash, key, value, shift).asInsertResult_0();
    }if (this.hasNodeAt_0(keyPositionMask)) {
      var nodeIndex = this.nodeIndex_kcn2v3$(keyPositionMask);
      var targetNode = this.nodeAtIndex_kcn2v3$(nodeIndex);
      if (shift === 30) {
        tmp$ = targetNode.collisionPut_0(key, value);
        if (tmp$ == null) {
          return null;
        }tmp$_1 = tmp$;
      } else {
        tmp$_0 = targetNode.put_cgqv3f$(keyHash, key, value, shift + 5 | 0);
        if (tmp$_0 == null) {
          return null;
        }tmp$_1 = tmp$_0;
      }
      var putResult = tmp$_1;
      putResult.node = this.updateNodeAtIndex_0(nodeIndex, keyPositionMask, putResult.node);
      return putResult;
    }return this.insertEntryAt_0(keyPositionMask, key, value).asInsertResult_0();
  };
  TrieNode.prototype.mutablePut_6vy94v$ = function (keyHash, key, value, shift, mutator) {
    var tmp$;
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.hasEntryAt_kcn2v3$(keyPositionMask)) {
      var keyIndex = this.entryKeyIndex_kcn2v3$(keyPositionMask);
      if (equals(key, this.keyAtIndex_0(keyIndex))) {
        mutator.operationResult_8be2vx$ = this.valueAtKeyIndex_0(keyIndex);
        if (this.valueAtKeyIndex_0(keyIndex) === value) {
          return this;
        }return this.mutableUpdateValueAtIndex_0(keyIndex, value, mutator);
      }mutator.size = mutator.size + 1 | 0;
      return this.mutableMoveEntryToNode_0(keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.ownership_8be2vx$);
    }if (this.hasNodeAt_0(keyPositionMask)) {
      var nodeIndex = this.nodeIndex_kcn2v3$(keyPositionMask);
      var targetNode = this.nodeAtIndex_kcn2v3$(nodeIndex);
      if (shift === 30) {
        tmp$ = targetNode.mutableCollisionPut_0(key, value, mutator);
      } else {
        tmp$ = targetNode.mutablePut_6vy94v$(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp$;
      if (targetNode === newNode) {
        return this;
      }return this.mutableUpdateNodeAtIndex_0(nodeIndex, newNode, mutator.ownership_8be2vx$);
    }mutator.size = mutator.size + 1 | 0;
    return this.mutableInsertEntryAt_0(keyPositionMask, key, value, mutator.ownership_8be2vx$);
  };
  TrieNode.prototype.remove_k2qru7$ = function (keyHash, key, shift) {
    var tmp$;
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.hasEntryAt_kcn2v3$(keyPositionMask)) {
      var keyIndex = this.entryKeyIndex_kcn2v3$(keyPositionMask);
      if (equals(key, this.keyAtIndex_0(keyIndex))) {
        return this.removeEntryAtIndex_0(keyIndex, keyPositionMask);
      }return this;
    }if (this.hasNodeAt_0(keyPositionMask)) {
      var nodeIndex = this.nodeIndex_kcn2v3$(keyPositionMask);
      var targetNode = this.nodeAtIndex_kcn2v3$(nodeIndex);
      if (shift === 30) {
        tmp$ = targetNode.collisionRemove_0(key);
      } else {
        tmp$ = targetNode.remove_k2qru7$(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp$;
      return this.replaceNode_0(targetNode, newNode, nodeIndex, keyPositionMask);
    }return this;
  };
  TrieNode.prototype.replaceNode_0 = function (targetNode, newNode, nodeIndex, positionMask) {
    if (newNode == null)
      return this.removeNodeAtIndex_0(nodeIndex, positionMask);
    else if (targetNode !== newNode)
      return this.updateNodeAtIndex_0(nodeIndex, positionMask, newNode);
    else
      return this;
  };
  TrieNode.prototype.mutableRemove_fw9u4j$ = function (keyHash, key, shift, mutator) {
    var tmp$;
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.hasEntryAt_kcn2v3$(keyPositionMask)) {
      var keyIndex = this.entryKeyIndex_kcn2v3$(keyPositionMask);
      if (equals(key, this.keyAtIndex_0(keyIndex))) {
        return this.mutableRemoveEntryAtIndex_0(keyIndex, keyPositionMask, mutator);
      }return this;
    }if (this.hasNodeAt_0(keyPositionMask)) {
      var nodeIndex = this.nodeIndex_kcn2v3$(keyPositionMask);
      var targetNode = this.nodeAtIndex_kcn2v3$(nodeIndex);
      if (shift === 30) {
        tmp$ = targetNode.mutableCollisionRemove_0(key, mutator);
      } else {
        tmp$ = targetNode.mutableRemove_fw9u4j$(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp$;
      return this.mutableReplaceNode_0(targetNode, newNode, nodeIndex, keyPositionMask, mutator.ownership_8be2vx$);
    }return this;
  };
  TrieNode.prototype.mutableReplaceNode_0 = function (targetNode, newNode, nodeIndex, positionMask, owner) {
    if (newNode == null)
      return this.mutableRemoveNodeAtIndex_0(nodeIndex, positionMask, owner);
    else if (this.ownedBy_0 === owner || targetNode !== newNode)
      return this.mutableUpdateNodeAtIndex_0(nodeIndex, newNode, owner);
    else
      return this;
  };
  TrieNode.prototype.remove_cgqv3f$ = function (keyHash, key, value, shift) {
    var tmp$;
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.hasEntryAt_kcn2v3$(keyPositionMask)) {
      var keyIndex = this.entryKeyIndex_kcn2v3$(keyPositionMask);
      if (equals(key, this.keyAtIndex_0(keyIndex)) && equals(value, this.valueAtKeyIndex_0(keyIndex))) {
        return this.removeEntryAtIndex_0(keyIndex, keyPositionMask);
      }return this;
    }if (this.hasNodeAt_0(keyPositionMask)) {
      var nodeIndex = this.nodeIndex_kcn2v3$(keyPositionMask);
      var targetNode = this.nodeAtIndex_kcn2v3$(nodeIndex);
      if (shift === 30) {
        tmp$ = targetNode.collisionRemove_1(key, value);
      } else {
        tmp$ = targetNode.remove_cgqv3f$(keyHash, key, value, shift + 5 | 0);
      }
      var newNode = tmp$;
      return this.replaceNode_0(targetNode, newNode, nodeIndex, keyPositionMask);
    }return this;
  };
  TrieNode.prototype.mutableRemove_6vy94v$ = function (keyHash, key, value, shift, mutator) {
    var tmp$;
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.hasEntryAt_kcn2v3$(keyPositionMask)) {
      var keyIndex = this.entryKeyIndex_kcn2v3$(keyPositionMask);
      if (equals(key, this.keyAtIndex_0(keyIndex)) && equals(value, this.valueAtKeyIndex_0(keyIndex))) {
        return this.mutableRemoveEntryAtIndex_0(keyIndex, keyPositionMask, mutator);
      }return this;
    }if (this.hasNodeAt_0(keyPositionMask)) {
      var nodeIndex = this.nodeIndex_kcn2v3$(keyPositionMask);
      var targetNode = this.nodeAtIndex_kcn2v3$(nodeIndex);
      if (shift === 30) {
        tmp$ = targetNode.mutableCollisionRemove_1(key, value, mutator);
      } else {
        tmp$ = targetNode.mutableRemove_6vy94v$(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp$;
      return this.mutableReplaceNode_0(targetNode, newNode, nodeIndex, keyPositionMask, mutator.ownership_8be2vx$);
    }return this;
  };
  TrieNode.prototype.accept_m12eau$ = function (visitor) {
    this.accept_0(visitor, 0, 0);
  };
  TrieNode.prototype.accept_0 = function (visitor, hash, shift) {
    visitor(this, shift, hash, this.dataMap_0, this.nodeMap_0);
    var nodePositions = this.nodeMap_0;
    while (nodePositions !== 0) {
      var mask = takeLowestOneBit(nodePositions);
      var hashSegment = countTrailingZeroBits(mask);
      var childNode = this.nodeAtIndex_kcn2v3$(this.nodeIndex_kcn2v3$(mask));
      childNode.accept_0(visitor, hash + (hashSegment << shift) | 0, shift + 5 | 0);
      nodePositions = nodePositions - mask | 0;
    }
  };
  function TrieNode$Companion() {
    TrieNode$Companion_instance = this;
    this.EMPTY_8be2vx$ = TrieNode_init(0, 0, []);
  }
  TrieNode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TrieNode$Companion_instance = null;
  function TrieNode$Companion_getInstance() {
    if (TrieNode$Companion_instance === null) {
      new TrieNode$Companion();
    }return TrieNode$Companion_instance;
  }
  TrieNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrieNode',
    interfaces: []
  };
  function TrieNode_init(dataMap, nodeMap, buffer, $this) {
    $this = $this || Object.create(TrieNode.prototype);
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function PersistentHashSet(node, size) {
    PersistentHashSet$Companion_getInstance();
    AbstractSet.call(this);
    this.node_8be2vx$ = node;
    this.size_loqqr$_0 = size;
  }
  Object.defineProperty(PersistentHashSet.prototype, 'size', {
    get: function () {
      return this.size_loqqr$_0;
    }
  });
  PersistentHashSet.prototype.contains_11rb$ = function (element) {
    var tmp$;
    return this.node_8be2vx$.contains_k2qru7$((tmp$ = element != null ? hashCode(element) : null) != null ? tmp$ : 0, element, 0);
  };
  PersistentHashSet.prototype.add_11rb$ = function (element) {
    var tmp$;
    var newNode = this.node_8be2vx$.add_k2qru7$((tmp$ = element != null ? hashCode(element) : null) != null ? tmp$ : 0, element, 0);
    if (this.node_8be2vx$ === newNode) {
      return this;
    }return new PersistentHashSet(newNode, this.size + 1 | 0);
  };
  PersistentHashSet.prototype.addAll_brywnq$ = function (elements) {
    var $receiver = this.builder();
    $receiver.addAll_brywnq$(elements);
    return $receiver.build();
  };
  PersistentHashSet.prototype.remove_11rb$ = function (element) {
    var tmp$;
    var newNode = this.node_8be2vx$.remove_k2qru7$((tmp$ = element != null ? hashCode(element) : null) != null ? tmp$ : 0, element, 0);
    if (this.node_8be2vx$ === newNode) {
      return this;
    }return new PersistentHashSet(newNode, this.size - 1 | 0);
  };
  PersistentHashSet.prototype.removeAll_brywnq$ = function (elements) {
    var $receiver = this.builder();
    $receiver.removeAll_brywnq$(elements);
    return $receiver.build();
  };
  PersistentHashSet.prototype.removeAll_ucl7l2$ = function (predicate) {
    var $receiver = this.builder();
    removeAll_2($receiver, predicate);
    return $receiver.build();
  };
  PersistentHashSet.prototype.clear = function () {
    return PersistentHashSet$Companion_getInstance().emptyOf_tnbmyv$();
  };
  PersistentHashSet.prototype.iterator = function () {
    return new PersistentHashSetIterator(this.node_8be2vx$);
  };
  PersistentHashSet.prototype.builder = function () {
    return new PersistentHashSetBuilder(this);
  };
  function PersistentHashSet$Companion() {
    PersistentHashSet$Companion_instance = this;
    this.EMPTY_0 = new PersistentHashSet(TrieNode$Companion_getInstance_0().EMPTY_8be2vx$, 0);
  }
  PersistentHashSet$Companion.prototype.emptyOf_tnbmyv$ = function () {
    return PersistentHashSet$Companion_getInstance().EMPTY_0;
  };
  PersistentHashSet$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PersistentHashSet$Companion_instance = null;
  function PersistentHashSet$Companion_getInstance() {
    if (PersistentHashSet$Companion_instance === null) {
      new PersistentHashSet$Companion();
    }return PersistentHashSet$Companion_instance;
  }
  PersistentHashSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashSet',
    interfaces: [PersistentSet, AbstractSet]
  };
  function PersistentHashSetBuilder(set) {
    AbstractMutableSet.call(this);
    this.set_0 = set;
    this.ownership_8be2vx$_13z9iu$_0 = new MutabilityOwnership();
    this.node_8be2vx$_b60ndt$_0 = this.set_0.node_8be2vx$;
    this.modCount_8be2vx$_uxyl92$_0 = 0;
    this.size_ibs2pa$_0 = this.set_0.size;
  }
  Object.defineProperty(PersistentHashSetBuilder.prototype, 'ownership_8be2vx$', {
    configurable: true,
    get: function () {
      return this.ownership_8be2vx$_13z9iu$_0;
    },
    set: function (ownership) {
      this.ownership_8be2vx$_13z9iu$_0 = ownership;
    }
  });
  Object.defineProperty(PersistentHashSetBuilder.prototype, 'node_8be2vx$', {
    configurable: true,
    get: function () {
      return this.node_8be2vx$_b60ndt$_0;
    },
    set: function (node) {
      this.node_8be2vx$_b60ndt$_0 = node;
    }
  });
  Object.defineProperty(PersistentHashSetBuilder.prototype, 'modCount_8be2vx$', {
    configurable: true,
    get: function () {
      return this.modCount_8be2vx$_uxyl92$_0;
    },
    set: function (modCount) {
      this.modCount_8be2vx$_uxyl92$_0 = modCount;
    }
  });
  Object.defineProperty(PersistentHashSetBuilder.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.size_ibs2pa$_0;
    },
    set: function (value) {
      this.size_ibs2pa$_0 = value;
      this.modCount_8be2vx$ = this.modCount_8be2vx$ + 1 | 0;
    }
  });
  PersistentHashSetBuilder.prototype.build = function () {
    var tmp$;
    if (this.node_8be2vx$ === this.set_0.node_8be2vx$) {
      tmp$ = this.set_0;
    } else {
      this.ownership_8be2vx$ = new MutabilityOwnership();
      tmp$ = new PersistentHashSet(this.node_8be2vx$, this.size);
    }
    this.set_0 = tmp$;
    return this.set_0;
  };
  PersistentHashSetBuilder.prototype.contains_11rb$ = function (element) {
    var tmp$;
    return this.node_8be2vx$.contains_k2qru7$((tmp$ = element != null ? hashCode(element) : null) != null ? tmp$ : 0, element, 0);
  };
  PersistentHashSetBuilder.prototype.add_11rb$ = function (element) {
    var size = this.size;
    var tmp$;
    this.node_8be2vx$ = this.node_8be2vx$.mutableAdd_ouime0$((tmp$ = element != null ? hashCode(element) : null) != null ? tmp$ : 0, element, 0, this);
    return size !== this.size;
  };
  PersistentHashSetBuilder.prototype.remove_11rb$ = function (element) {
    var size = this.size;
    var tmp$;
    this.node_8be2vx$ = this.node_8be2vx$.mutableRemove_ouime0$((tmp$ = element != null ? hashCode(element) : null) != null ? tmp$ : 0, element, 0, this);
    return size !== this.size;
  };
  PersistentHashSetBuilder.prototype.clear = function () {
    var tmp$;
    this.node_8be2vx$ = Kotlin.isType(tmp$ = TrieNode$Companion_getInstance_0().EMPTY_8be2vx$, TrieNode_0) ? tmp$ : throwCCE();
    this.size = 0;
  };
  PersistentHashSetBuilder.prototype.iterator = function () {
    return new PersistentHashSetMutableIterator(this);
  };
  PersistentHashSetBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashSetBuilder',
    interfaces: [PersistentSet$Builder, AbstractMutableSet]
  };
  function PersistentHashSetIterator(node) {
    this.path_0 = mutableListOf([new TrieNodeIterator()]);
    this.pathLastIndex_0 = 0;
    this._hasNext = true;
    this.path_0.get_za3lpa$(0).reset_dz8xuo$(node.buffer);
    this.pathLastIndex_0 = 0;
    this.ensureNextElementIsReady_0();
  }
  PersistentHashSetIterator.prototype.moveToNextNodeWithData_0 = function (pathIndex) {
    if (this.path_0.get_za3lpa$(pathIndex).hasNextElement()) {
      return pathIndex;
    }if (this.path_0.get_za3lpa$(pathIndex).hasNextNode()) {
      var node = this.path_0.get_za3lpa$(pathIndex).currentNode();
      if ((pathIndex + 1 | 0) === this.path_0.size) {
        this.path_0.add_11rb$(new TrieNodeIterator());
      }this.path_0.get_za3lpa$(pathIndex + 1 | 0).reset_dz8xuo$(node.buffer);
      return this.moveToNextNodeWithData_0(pathIndex + 1 | 0);
    }return -1;
  };
  PersistentHashSetIterator.prototype.ensureNextElementIsReady_0 = function () {
    if (this.path_0.get_za3lpa$(this.pathLastIndex_0).hasNextElement()) {
      return;
    }for (var i = this.pathLastIndex_0; i >= 0; i--) {
      var result = this.moveToNextNodeWithData_0(i);
      if (result === -1 && this.path_0.get_za3lpa$(i).hasNextCell()) {
        this.path_0.get_za3lpa$(i).moveToNextCell();
        result = this.moveToNextNodeWithData_0(i);
      }if (result !== -1) {
        this.pathLastIndex_0 = result;
        return;
      }if (i > 0) {
        this.path_0.get_za3lpa$(i - 1 | 0).moveToNextCell();
      }this.path_0.get_za3lpa$(i).reset_dz8xuo$(TrieNode$Companion_getInstance_0().EMPTY_8be2vx$.buffer, 0);
    }
    this._hasNext = false;
  };
  PersistentHashSetIterator.prototype.hasNext = function () {
    return this._hasNext;
  };
  PersistentHashSetIterator.prototype.next = function () {
    if (!this._hasNext)
      throw NoSuchElementException_init();
    var result = this.path_0.get_za3lpa$(this.pathLastIndex_0).nextElement();
    this.ensureNextElementIsReady_0();
    return result;
  };
  PersistentHashSetIterator.prototype.currentElement_0 = function () {
    assert(this.hasNext());
    return this.path_0.get_za3lpa$(this.pathLastIndex_0).currentElement();
  };
  PersistentHashSetIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashSetIterator',
    interfaces: [Iterator]
  };
  function TrieNodeIterator() {
    this.buffer_0 = TrieNode$Companion_getInstance_0().EMPTY_8be2vx$.buffer;
    this.index_0 = 0;
  }
  TrieNodeIterator.prototype.reset_dz8xuo$ = function (buffer, index) {
    if (index === void 0)
      index = 0;
    this.buffer_0 = buffer;
    this.index_0 = index;
  };
  TrieNodeIterator.prototype.hasNextCell = function () {
    return this.index_0 < this.buffer_0.length;
  };
  TrieNodeIterator.prototype.moveToNextCell = function () {
    assert(this.hasNextCell());
    this.index_0 = this.index_0 + 1 | 0;
  };
  TrieNodeIterator.prototype.hasNextElement = function () {
    return this.hasNextCell() && !Kotlin.isType(this.buffer_0[this.index_0], TrieNode_0);
  };
  TrieNodeIterator.prototype.currentElement = function () {
    var tmp$;
    assert(this.hasNextElement());
    return (tmp$ = this.buffer_0[this.index_0]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  TrieNodeIterator.prototype.nextElement = function () {
    var tmp$, tmp$_0;
    assert(this.hasNextElement());
    return (tmp$_0 = this.buffer_0[tmp$ = this.index_0, this.index_0 = tmp$ + 1 | 0, tmp$]) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  TrieNodeIterator.prototype.hasNextNode = function () {
    return this.hasNextCell() && Kotlin.isType(this.buffer_0[this.index_0], TrieNode_0);
  };
  TrieNodeIterator.prototype.currentNode = function () {
    var tmp$;
    assert(this.hasNextNode());
    return Kotlin.isType(tmp$ = this.buffer_0[this.index_0], TrieNode_0) ? tmp$ : throwCCE();
  };
  TrieNodeIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrieNodeIterator',
    interfaces: []
  };
  function PersistentHashSetMutableIterator(builder) {
    PersistentHashSetIterator.call(this, builder.node_8be2vx$);
    this.builder_0 = builder;
    this.lastIteratedElement_0 = null;
    this.nextWasInvoked_0 = false;
    this.expectedModCount_0 = this.builder_0.modCount_8be2vx$;
  }
  PersistentHashSetMutableIterator.prototype.next = function () {
    this.checkForComodification_0();
    var next = PersistentHashSetIterator.prototype.next.call(this);
    this.lastIteratedElement_0 = next;
    this.nextWasInvoked_0 = true;
    return next;
  };
  PersistentHashSetMutableIterator.prototype.remove = function () {
    this.checkNextWasInvoked_0();
    if (this.hasNext()) {
      var currentElement = this.currentElement_0();
      var $receiver = this.builder_0;
      var element = this.lastIteratedElement_0;
      var tmp$;
      (Kotlin.isType(tmp$ = $receiver, MutableCollection) ? tmp$ : throwCCE()).remove_11rb$(element);
      var tmp$_0;
      this.resetPath_0((tmp$_0 = currentElement != null ? hashCode(currentElement) : null) != null ? tmp$_0 : 0, this.builder_0.node_8be2vx$, currentElement, 0);
    } else {
      var $receiver_0 = this.builder_0;
      var element_0 = this.lastIteratedElement_0;
      var tmp$_1;
      (Kotlin.isType(tmp$_1 = $receiver_0, MutableCollection) ? tmp$_1 : throwCCE()).remove_11rb$(element_0);
    }
    this.lastIteratedElement_0 = null;
    this.nextWasInvoked_0 = false;
    this.expectedModCount_0 = this.builder_0.modCount_8be2vx$;
  };
  PersistentHashSetMutableIterator.prototype.resetPath_0 = function (hashCode, node, element, pathIndex) {
    if (this.isCollision_0(node)) {
      var index = indexOf(node.buffer, element);
      assert(index !== -1);
      this.path_0.get_za3lpa$(pathIndex).reset_dz8xuo$(node.buffer, index);
      this.pathLastIndex_0 = pathIndex;
      return;
    }var position = 1 << indexSegment_1(hashCode, pathIndex * 5 | 0);
    var index_0 = node.indexOfCellAt_kcn2v3$(position);
    this.path_0.get_za3lpa$(pathIndex).reset_dz8xuo$(node.buffer, index_0);
    var cell = node.buffer[index_0];
    if (Kotlin.isType(cell, TrieNode_0)) {
      this.resetPath_0(hashCode, cell, element, pathIndex + 1 | 0);
    } else {
      this.pathLastIndex_0 = pathIndex;
    }
  };
  PersistentHashSetMutableIterator.prototype.isCollision_0 = function (node) {
    return node.bitmap === 0;
  };
  PersistentHashSetMutableIterator.prototype.checkNextWasInvoked_0 = function () {
    if (!this.nextWasInvoked_0)
      throw IllegalStateException_init_0();
  };
  PersistentHashSetMutableIterator.prototype.checkForComodification_0 = function () {
    if (this.builder_0.modCount_8be2vx$ !== this.expectedModCount_0)
      throw ConcurrentModificationException_init();
  };
  PersistentHashSetMutableIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentHashSetMutableIterator',
    interfaces: [MutableIterator, PersistentHashSetIterator]
  };
  var MAX_BRANCHING_FACTOR_0;
  var LOG_MAX_BRANCHING_FACTOR_0;
  var MAX_BRANCHING_FACTOR_MINUS_ONE_0;
  var MAX_SHIFT_0;
  function indexSegment_1(index, shift) {
    return index >> shift & 31;
  }
  function addElementAtIndex($receiver, index, element) {
    var newBuffer = Kotlin.newArray($receiver.length + 1 | 0, null);
    arrayCopy($receiver, newBuffer, 0, 0, index);
    arrayCopy($receiver, newBuffer, index + 1 | 0, index, $receiver.length);
    newBuffer[index] = element;
    return newBuffer;
  }
  function removeCellAtIndex($receiver, cellIndex) {
    var newBuffer = Kotlin.newArray($receiver.length - 1 | 0, null);
    arrayCopy($receiver, newBuffer, 0, 0, cellIndex);
    arrayCopy($receiver, newBuffer, cellIndex, cellIndex + 1 | 0, $receiver.length);
    return newBuffer;
  }
  function TrieNode_0(bitmap, buffer, ownedBy) {
    TrieNode$Companion_getInstance_0();
    this.bitmap = bitmap;
    this.buffer = buffer;
    this.ownedBy = ownedBy;
  }
  TrieNode_0.prototype.hasNoCellAt_0 = function (positionMask) {
    return (this.bitmap & positionMask) === 0;
  };
  TrieNode_0.prototype.indexOfCellAt_kcn2v3$ = function (positionMask) {
    return countOneBits(this.bitmap & positionMask - 1);
  };
  TrieNode_0.prototype.elementAtIndex_0 = function (index) {
    var tmp$;
    return (tmp$ = this.buffer[index]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  TrieNode_0.prototype.nodeAtIndex_0 = function (index) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.buffer[index], TrieNode_0) ? tmp$ : throwCCE();
  };
  TrieNode_0.prototype.addElementAt_0 = function (positionMask, element) {
    var index = this.indexOfCellAt_kcn2v3$(positionMask);
    var newBuffer = addElementAtIndex(this.buffer, index, element);
    return TrieNode_init_0(this.bitmap | positionMask, newBuffer);
  };
  TrieNode_0.prototype.mutableAddElementAt_0 = function (positionMask, element, owner) {
    var index = this.indexOfCellAt_kcn2v3$(positionMask);
    if (this.ownedBy === owner) {
      this.buffer = addElementAtIndex(this.buffer, index, element);
      this.bitmap = this.bitmap | positionMask;
      return this;
    }var newBuffer = addElementAtIndex(this.buffer, index, element);
    return new TrieNode_0(this.bitmap | positionMask, newBuffer, owner);
  };
  TrieNode_0.prototype.updateNodeAtIndex_0 = function (nodeIndex, newNode) {
    var cell;
    var newNodeBuffer = newNode.buffer;
    if (newNodeBuffer.length === 1 && !Kotlin.isType(newNodeBuffer[0], TrieNode_0)) {
      if (this.buffer.length === 1) {
        newNode.bitmap = this.bitmap;
        return newNode;
      }cell = newNodeBuffer[0];
    } else {
      cell = newNode;
    }
    var newBuffer = this.buffer.slice();
    newBuffer[nodeIndex] = cell;
    return TrieNode_init_0(this.bitmap, newBuffer);
  };
  TrieNode_0.prototype.mutableUpdateNodeAtIndex_0 = function (nodeIndex, newNode, owner) {
    var cell;
    var newNodeBuffer = newNode.buffer;
    if (newNodeBuffer.length === 1 && !Kotlin.isType(newNodeBuffer[0], TrieNode_0)) {
      if (this.buffer.length === 1) {
        newNode.bitmap = this.bitmap;
        return newNode;
      }cell = newNodeBuffer[0];
    } else {
      cell = newNode;
    }
    if (this.ownedBy === owner) {
      this.buffer[nodeIndex] = cell;
      return this;
    }var newBuffer = this.buffer.slice();
    newBuffer[nodeIndex] = cell;
    return new TrieNode_0(this.bitmap, newBuffer, owner);
  };
  TrieNode_0.prototype.makeNodeAtIndex_0 = function (elementIndex, newElementHash, newElement, shift, owner) {
    var storedElement = this.elementAtIndex_0(elementIndex);
    var tmp$;
    return this.makeNode_0((tmp$ = storedElement != null ? hashCode(storedElement) : null) != null ? tmp$ : 0, storedElement, newElementHash, newElement, shift + 5 | 0, owner);
  };
  TrieNode_0.prototype.moveElementToNode_0 = function (elementIndex, newElementHash, newElement, shift) {
    var newBuffer = this.buffer.slice();
    newBuffer[elementIndex] = this.makeNodeAtIndex_0(elementIndex, newElementHash, newElement, shift, null);
    return TrieNode_init_0(this.bitmap, newBuffer);
  };
  TrieNode_0.prototype.mutableMoveElementToNode_0 = function (elementIndex, newElementHash, newElement, shift, owner) {
    if (this.ownedBy === owner) {
      this.buffer[elementIndex] = this.makeNodeAtIndex_0(elementIndex, newElementHash, newElement, shift, owner);
      return this;
    }var newBuffer = this.buffer.slice();
    newBuffer[elementIndex] = this.makeNodeAtIndex_0(elementIndex, newElementHash, newElement, shift, owner);
    return new TrieNode_0(this.bitmap, newBuffer, owner);
  };
  TrieNode_0.prototype.makeNode_0 = function (elementHash1, element1, elementHash2, element2, shift, owner) {
    var tmp$;
    if (shift > 30) {
      return new TrieNode_0(0, [element1, element2], owner);
    }var setBit1 = indexSegment_1(elementHash1, shift);
    var setBit2 = indexSegment_1(elementHash2, shift);
    if (setBit1 !== setBit2) {
      if (setBit1 < setBit2) {
        tmp$ = [element1, element2];
      } else {
        tmp$ = [element2, element1];
      }
      var nodeBuffer = tmp$;
      return new TrieNode_0(1 << setBit1 | 1 << setBit2, nodeBuffer, owner);
    }var node = this.makeNode_0(elementHash1, element1, elementHash2, element2, shift + 5 | 0, owner);
    return new TrieNode_0(1 << setBit1, [node], owner);
  };
  TrieNode_0.prototype.removeCellAtIndex_0 = function (cellIndex, positionMask) {
    var newBuffer = removeCellAtIndex(this.buffer, cellIndex);
    return TrieNode_init_0(this.bitmap ^ positionMask, newBuffer);
  };
  TrieNode_0.prototype.mutableRemoveCellAtIndex_0 = function (cellIndex, positionMask, owner) {
    if (this.ownedBy === owner) {
      this.buffer = removeCellAtIndex(this.buffer, cellIndex);
      this.bitmap = this.bitmap ^ positionMask;
      return this;
    }var newBuffer = removeCellAtIndex(this.buffer, cellIndex);
    return new TrieNode_0(this.bitmap ^ positionMask, newBuffer, owner);
  };
  TrieNode_0.prototype.collisionRemoveElementAtIndex_0 = function (i) {
    var newBuffer = removeCellAtIndex(this.buffer, i);
    return TrieNode_init_0(0, newBuffer);
  };
  TrieNode_0.prototype.mutableCollisionRemoveElementAtIndex_0 = function (i, owner) {
    if (this.ownedBy === owner) {
      this.buffer = removeCellAtIndex(this.buffer, i);
      return this;
    }var newBuffer = removeCellAtIndex(this.buffer, i);
    return new TrieNode_0(0, newBuffer, owner);
  };
  TrieNode_0.prototype.collisionContainsElement_0 = function (element) {
    return contains(this.buffer, element);
  };
  TrieNode_0.prototype.collisionAdd_0 = function (element) {
    if (this.collisionContainsElement_0(element))
      return this;
    var newBuffer = addElementAtIndex(this.buffer, 0, element);
    return TrieNode_init_0(0, newBuffer);
  };
  TrieNode_0.prototype.mutableCollisionAdd_0 = function (element, mutator) {
    if (this.collisionContainsElement_0(element))
      return this;
    mutator.size = mutator.size + 1 | 0;
    if (this.ownedBy === mutator.ownership_8be2vx$) {
      this.buffer = addElementAtIndex(this.buffer, 0, element);
      return this;
    }var newBuffer = addElementAtIndex(this.buffer, 0, element);
    return new TrieNode_0(0, newBuffer, mutator.ownership_8be2vx$);
  };
  TrieNode_0.prototype.collisionRemove_0 = function (element) {
    var index = indexOf(this.buffer, element);
    if (index !== -1) {
      return this.collisionRemoveElementAtIndex_0(index);
    }return this;
  };
  TrieNode_0.prototype.mutableCollisionRemove_0 = function (element, mutator) {
    var index = indexOf(this.buffer, element);
    if (index !== -1) {
      mutator.size = mutator.size - 1 | 0;
      return this.mutableCollisionRemoveElementAtIndex_0(index, mutator.ownership_8be2vx$);
    }return this;
  };
  TrieNode_0.prototype.contains_k2qru7$ = function (elementHash, element, shift) {
    var cellPositionMask = 1 << indexSegment_1(elementHash, shift);
    if (this.hasNoCellAt_0(cellPositionMask)) {
      return false;
    }var cellIndex = this.indexOfCellAt_kcn2v3$(cellPositionMask);
    if (Kotlin.isType(this.buffer[cellIndex], TrieNode_0)) {
      var targetNode = this.nodeAtIndex_0(cellIndex);
      if (shift === 30) {
        return targetNode.collisionContainsElement_0(element);
      }return targetNode.contains_k2qru7$(elementHash, element, shift + 5 | 0);
    }return equals(element, this.buffer[cellIndex]);
  };
  TrieNode_0.prototype.add_k2qru7$ = function (elementHash, element, shift) {
    var tmp$;
    var cellPositionMask = 1 << indexSegment_1(elementHash, shift);
    if (this.hasNoCellAt_0(cellPositionMask)) {
      return this.addElementAt_0(cellPositionMask, element);
    }var cellIndex = this.indexOfCellAt_kcn2v3$(cellPositionMask);
    if (Kotlin.isType(this.buffer[cellIndex], TrieNode_0)) {
      var targetNode = this.nodeAtIndex_0(cellIndex);
      if (shift === 30) {
        tmp$ = targetNode.collisionAdd_0(element);
      } else {
        tmp$ = targetNode.add_k2qru7$(elementHash, element, shift + 5 | 0);
      }
      var newNode = tmp$;
      if (targetNode === newNode)
        return this;
      return this.updateNodeAtIndex_0(cellIndex, newNode);
    }if (equals(element, this.buffer[cellIndex]))
      return this;
    return this.moveElementToNode_0(cellIndex, elementHash, element, shift);
  };
  TrieNode_0.prototype.mutableAdd_ouime0$ = function (elementHash, element, shift, mutator) {
    var tmp$;
    var cellPosition = 1 << indexSegment_1(elementHash, shift);
    if (this.hasNoCellAt_0(cellPosition)) {
      mutator.size = mutator.size + 1 | 0;
      return this.mutableAddElementAt_0(cellPosition, element, mutator.ownership_8be2vx$);
    }var cellIndex = this.indexOfCellAt_kcn2v3$(cellPosition);
    if (Kotlin.isType(this.buffer[cellIndex], TrieNode_0)) {
      var targetNode = this.nodeAtIndex_0(cellIndex);
      if (shift === 30) {
        tmp$ = targetNode.mutableCollisionAdd_0(element, mutator);
      } else {
        tmp$ = targetNode.mutableAdd_ouime0$(elementHash, element, shift + 5 | 0, mutator);
      }
      var newNode = tmp$;
      if (targetNode === newNode)
        return this;
      return this.mutableUpdateNodeAtIndex_0(cellIndex, newNode, mutator.ownership_8be2vx$);
    }if (equals(element, this.buffer[cellIndex]))
      return this;
    mutator.size = mutator.size + 1 | 0;
    return this.mutableMoveElementToNode_0(cellIndex, elementHash, element, shift, mutator.ownership_8be2vx$);
  };
  TrieNode_0.prototype.remove_k2qru7$ = function (elementHash, element, shift) {
    var tmp$;
    var cellPositionMask = 1 << indexSegment_1(elementHash, shift);
    if (this.hasNoCellAt_0(cellPositionMask)) {
      return this;
    }var cellIndex = this.indexOfCellAt_kcn2v3$(cellPositionMask);
    if (Kotlin.isType(this.buffer[cellIndex], TrieNode_0)) {
      var targetNode = this.nodeAtIndex_0(cellIndex);
      if (shift === 30) {
        tmp$ = targetNode.collisionRemove_0(element);
      } else {
        tmp$ = targetNode.remove_k2qru7$(elementHash, element, shift + 5 | 0);
      }
      var newNode = tmp$;
      if (targetNode === newNode)
        return this;
      return this.updateNodeAtIndex_0(cellIndex, newNode);
    }if (equals(element, this.buffer[cellIndex])) {
      return this.removeCellAtIndex_0(cellIndex, cellPositionMask);
    }return this;
  };
  TrieNode_0.prototype.mutableRemove_ouime0$ = function (elementHash, element, shift, mutator) {
    var tmp$;
    var cellPositionMask = 1 << indexSegment_1(elementHash, shift);
    if (this.hasNoCellAt_0(cellPositionMask)) {
      return this;
    }var cellIndex = this.indexOfCellAt_kcn2v3$(cellPositionMask);
    if (Kotlin.isType(this.buffer[cellIndex], TrieNode_0)) {
      var targetNode = this.nodeAtIndex_0(cellIndex);
      if (shift === 30) {
        tmp$ = targetNode.mutableCollisionRemove_0(element, mutator);
      } else {
        tmp$ = targetNode.mutableRemove_ouime0$(elementHash, element, shift + 5 | 0, mutator);
      }
      var newNode = tmp$;
      if (this.ownedBy === mutator.ownership_8be2vx$ || targetNode !== newNode) {
        return this.mutableUpdateNodeAtIndex_0(cellIndex, newNode, mutator.ownership_8be2vx$);
      }return this;
    }if (equals(element, this.buffer[cellIndex])) {
      mutator.size = mutator.size - 1 | 0;
      return this.mutableRemoveCellAtIndex_0(cellIndex, cellPositionMask, mutator.ownership_8be2vx$);
    }return this;
  };
  function TrieNode$Companion_0() {
    TrieNode$Companion_instance_0 = this;
    this.EMPTY_8be2vx$ = TrieNode_init_0(0, []);
  }
  TrieNode$Companion_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TrieNode$Companion_instance_0 = null;
  function TrieNode$Companion_getInstance_0() {
    if (TrieNode$Companion_instance_0 === null) {
      new TrieNode$Companion_0();
    }return TrieNode$Companion_instance_0;
  }
  TrieNode_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrieNode',
    interfaces: []
  };
  function TrieNode_init_0(bitmap, buffer, $this) {
    $this = $this || Object.create(TrieNode_0.prototype);
    TrieNode_0.call($this, bitmap, buffer, null);
    return $this;
  }
  function LinkedValue(value, previous, next) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
  LinkedValue.prototype.withValue_11rb$ = function (newValue) {
    return new LinkedValue(newValue, this.previous, this.next);
  };
  LinkedValue.prototype.withPrevious_s8jyv4$ = function (newPrevious) {
    return new LinkedValue(this.value, newPrevious, this.next);
  };
  LinkedValue.prototype.withNext_s8jyv4$ = function (newNext) {
    return new LinkedValue(this.value, this.previous, newNext);
  };
  Object.defineProperty(LinkedValue.prototype, 'hasNext', {
    configurable: true,
    get: function () {
      return this.next !== EndOfChain_getInstance();
    }
  });
  Object.defineProperty(LinkedValue.prototype, 'hasPrevious', {
    configurable: true,
    get: function () {
      return this.previous !== EndOfChain_getInstance();
    }
  });
  LinkedValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedValue',
    interfaces: []
  };
  function LinkedValue_init(value, $this) {
    $this = $this || Object.create(LinkedValue.prototype);
    LinkedValue.call($this, value, EndOfChain_getInstance(), EndOfChain_getInstance());
    return $this;
  }
  function LinkedValue_init_0(value, previous, $this) {
    $this = $this || Object.create(LinkedValue.prototype);
    LinkedValue.call($this, value, previous, EndOfChain_getInstance());
    return $this;
  }
  function PersistentOrderedMap(firstKey, lastKey, hashMap) {
    PersistentOrderedMap$Companion_getInstance();
    AbstractMap.call(this);
    this.firstKey_8be2vx$ = firstKey;
    this.lastKey_8be2vx$ = lastKey;
    this.hashMap_8be2vx$ = hashMap;
  }
  Object.defineProperty(PersistentOrderedMap.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.hashMap_8be2vx$.size;
    }
  });
  Object.defineProperty(PersistentOrderedMap.prototype, 'keys', {
    configurable: true,
    get: function () {
      return new PersistentOrderedMapKeys(this);
    }
  });
  Object.defineProperty(PersistentOrderedMap.prototype, 'values', {
    configurable: true,
    get: function () {
      return new PersistentOrderedMapValues(this);
    }
  });
  Object.defineProperty(PersistentOrderedMap.prototype, 'entries', {
    configurable: true,
    get: function () {
      return this.createEntries_0();
    }
  });
  PersistentOrderedMap.prototype.createEntries_0 = function () {
    return new PersistentOrderedMapEntries(this);
  };
  PersistentOrderedMap.prototype.getEntries = function () {
    return this.createEntries_0();
  };
  PersistentOrderedMap.prototype.containsKey_11rb$ = function (key) {
    return this.hashMap_8be2vx$.containsKey_11rb$(key);
  };
  PersistentOrderedMap.prototype.get_11rb$ = function (key) {
    var tmp$;
    return (tmp$ = this.hashMap_8be2vx$.get_11rb$(key)) != null ? tmp$.value : null;
  };
  PersistentOrderedMap.prototype.put_xwzc9p$ = function (key, value) {
    var tmp$;
    if (this.isEmpty()) {
      var newMap = this.hashMap_8be2vx$.put_xwzc9p$(key, LinkedValue_init(value));
      return new PersistentOrderedMap(key, key, newMap);
    }var links = this.hashMap_8be2vx$.get_11rb$(key);
    if (links != null) {
      if (links.value === value) {
        return this;
      }var newMap_0 = this.hashMap_8be2vx$.put_xwzc9p$(key, links.withValue_11rb$(value));
      return new PersistentOrderedMap(this.firstKey_8be2vx$, this.lastKey_8be2vx$, newMap_0);
    }var lastKey = (tmp$ = this.lastKey_8be2vx$) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    var lastLinks = ensureNotNull(this.hashMap_8be2vx$.get_11rb$(lastKey));
    var newMap_1 = this.hashMap_8be2vx$.put_xwzc9p$(lastKey, lastLinks.withNext_s8jyv4$(key)).put_xwzc9p$(key, LinkedValue_init_0(value, lastKey));
    return new PersistentOrderedMap(this.firstKey_8be2vx$, key, newMap_1);
  };
  PersistentOrderedMap.prototype.remove_11rb$ = function (key) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.hashMap_8be2vx$.get_11rb$(key);
    if (tmp$ == null) {
      return this;
    }var links = tmp$;
    var newMap = this.hashMap_8be2vx$.remove_11rb$(key);
    if (links.hasPrevious) {
      var $receiver = newMap;
      var key_0 = links.previous;
      var tmp$_2;
      var previousLinks = ensureNotNull((Kotlin.isType(tmp$_2 = $receiver, Map) ? tmp$_2 : throwCCE()).get_11rb$(key_0));
      newMap = newMap.put_xwzc9p$((tmp$_0 = links.previous) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE(), previousLinks.withNext_s8jyv4$(links.next));
    }if (links.hasNext) {
      var $receiver_0 = newMap;
      var key_1 = links.next;
      var tmp$_3;
      var nextLinks = ensureNotNull((Kotlin.isType(tmp$_3 = $receiver_0, Map) ? tmp$_3 : throwCCE()).get_11rb$(key_1));
      newMap = newMap.put_xwzc9p$((tmp$_1 = links.next) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE(), nextLinks.withPrevious_s8jyv4$(links.previous));
    }var newFirstKey = !links.hasPrevious ? links.next : this.firstKey_8be2vx$;
    var newLastKey = !links.hasNext ? links.previous : this.lastKey_8be2vx$;
    return new PersistentOrderedMap(newFirstKey, newLastKey, newMap);
  };
  PersistentOrderedMap.prototype.remove_xwzc9p$ = function (key, value) {
    var tmp$;
    tmp$ = this.hashMap_8be2vx$.get_11rb$(key);
    if (tmp$ == null) {
      return this;
    }var links = tmp$;
    return equals(links.value, value) ? this.remove_11rb$(key) : this;
  };
  PersistentOrderedMap.prototype.putAll_a2k3zr$ = function (m) {
    var tmp$;
    var $receiver = (Kotlin.isType(tmp$ = this, PersistentMap) ? tmp$ : throwCCE()).builder();
    $receiver.putAll_a2k3zr$(m);
    return $receiver.build();
  };
  PersistentOrderedMap.prototype.clear = function () {
    return PersistentOrderedMap$Companion_getInstance().emptyOf_3w54xu$();
  };
  PersistentOrderedMap.prototype.builder = function () {
    return new PersistentOrderedMapBuilder(this);
  };
  function PersistentOrderedMap$Companion() {
    PersistentOrderedMap$Companion_instance = this;
    this.EMPTY_0 = new PersistentOrderedMap(EndOfChain_getInstance(), EndOfChain_getInstance(), PersistentHashMap$Companion_getInstance().emptyOf_3w54xu$());
  }
  PersistentOrderedMap$Companion.prototype.emptyOf_3w54xu$ = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.EMPTY_0, PersistentOrderedMap) ? tmp$ : throwCCE();
  };
  PersistentOrderedMap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PersistentOrderedMap$Companion_instance = null;
  function PersistentOrderedMap$Companion_getInstance() {
    if (PersistentOrderedMap$Companion_instance === null) {
      new PersistentOrderedMap$Companion();
    }return PersistentOrderedMap$Companion_instance;
  }
  PersistentOrderedMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMap',
    interfaces: [PersistentMap, AbstractMap]
  };
  function PersistentOrderedMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.map_0 = map;
    this.firstKey_8be2vx$_n71umf$_0 = this.map_0.firstKey_8be2vx$;
    this.lastKey_0 = this.map_0.lastKey_8be2vx$;
    this.hashMapBuilder_8be2vx$ = this.map_0.hashMap_8be2vx$.builder();
  }
  Object.defineProperty(PersistentOrderedMapBuilder.prototype, 'firstKey_8be2vx$', {
    configurable: true,
    get: function () {
      return this.firstKey_8be2vx$_n71umf$_0;
    },
    set: function (firstKey) {
      this.firstKey_8be2vx$_n71umf$_0 = firstKey;
    }
  });
  Object.defineProperty(PersistentOrderedMapBuilder.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.hashMapBuilder_8be2vx$.size;
    }
  });
  PersistentOrderedMapBuilder.prototype.build = function () {
    var tmp$;
    var newHashMap = this.hashMapBuilder_8be2vx$.build();
    if (newHashMap === this.map_0.hashMap_8be2vx$) {
      assert(this.firstKey_8be2vx$ === this.map_0.firstKey_8be2vx$);
      assert(this.lastKey_0 === this.map_0.lastKey_8be2vx$);
      tmp$ = this.map_0;
    } else {
      tmp$ = new PersistentOrderedMap(this.firstKey_8be2vx$, this.lastKey_0, newHashMap);
    }
    this.map_0 = tmp$;
    return this.map_0;
  };
  Object.defineProperty(PersistentOrderedMapBuilder.prototype, 'entries', {
    configurable: true,
    get: function () {
      return new PersistentOrderedMapBuilderEntries(this);
    }
  });
  Object.defineProperty(PersistentOrderedMapBuilder.prototype, 'keys', {
    configurable: true,
    get: function () {
      return new PersistentOrderedMapBuilderKeys(this);
    }
  });
  Object.defineProperty(PersistentOrderedMapBuilder.prototype, 'values', {
    configurable: true,
    get: function () {
      return new PersistentOrderedMapBuilderValues(this);
    }
  });
  PersistentOrderedMapBuilder.prototype.containsKey_11rb$ = function (key) {
    return this.hashMapBuilder_8be2vx$.containsKey_11rb$(key);
  };
  PersistentOrderedMapBuilder.prototype.get_11rb$ = function (key) {
    var tmp$;
    return (tmp$ = this.hashMapBuilder_8be2vx$.get_11rb$(key)) != null ? tmp$.value : null;
  };
  PersistentOrderedMapBuilder.prototype.put_xwzc9p$ = function (key, value) {
    var tmp$;
    var links = this.hashMapBuilder_8be2vx$.get_11rb$(key);
    if (links != null) {
      if (links.value === value) {
        return value;
      }var $receiver = this.hashMapBuilder_8be2vx$;
      var value_0 = links.withValue_11rb$(value);
      $receiver.put_xwzc9p$(key, value_0);
      return links.value;
    }if (this.isEmpty()) {
      this.firstKey_8be2vx$ = key;
      this.lastKey_0 = key;
      var $receiver_0 = this.hashMapBuilder_8be2vx$;
      var value_1 = LinkedValue_init(value);
      $receiver_0.put_xwzc9p$(key, value_1);
      return null;
    }var lastKey = (tmp$ = this.lastKey_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    var lastLinks = ensureNotNull(this.hashMapBuilder_8be2vx$.get_11rb$(lastKey));
    assert(!lastLinks.hasNext);
    var $receiver_1 = this.hashMapBuilder_8be2vx$;
    var value_2 = lastLinks.withNext_s8jyv4$(key);
    $receiver_1.put_xwzc9p$(lastKey, value_2);
    var $receiver_2 = this.hashMapBuilder_8be2vx$;
    var value_3 = LinkedValue_init_0(value, lastKey);
    $receiver_2.put_xwzc9p$(key, value_3);
    this.lastKey_0 = key;
    return null;
  };
  PersistentOrderedMapBuilder.prototype.remove_11rb$ = function (key) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$ = this.hashMapBuilder_8be2vx$.remove_11rb$(key);
    if (tmp$ == null) {
      return null;
    }var links = tmp$;
    if (links.hasPrevious) {
      var $receiver = this.hashMapBuilder_8be2vx$;
      var key_0 = links.previous;
      var tmp$_6;
      var previousLinks = ensureNotNull((Kotlin.isType(tmp$_6 = $receiver, Map) ? tmp$_6 : throwCCE()).get_11rb$(key_0));
      tmp$_2 = this.hashMapBuilder_8be2vx$;
      tmp$_1 = (tmp$_0 = links.previous) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
      var value = previousLinks.withNext_s8jyv4$(links.next);
      tmp$_2.put_xwzc9p$(tmp$_1, value);
    } else {
      this.firstKey_8be2vx$ = links.next;
    }
    if (links.hasNext) {
      var $receiver_0 = this.hashMapBuilder_8be2vx$;
      var key_1 = links.next;
      var tmp$_7;
      var nextLinks = ensureNotNull((Kotlin.isType(tmp$_7 = $receiver_0, Map) ? tmp$_7 : throwCCE()).get_11rb$(key_1));
      tmp$_5 = this.hashMapBuilder_8be2vx$;
      tmp$_4 = (tmp$_3 = links.next) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE();
      var value_0 = nextLinks.withPrevious_s8jyv4$(links.previous);
      tmp$_5.put_xwzc9p$(tmp$_4, value_0);
    } else {
      this.lastKey_0 = links.previous;
    }
    return links.value;
  };
  PersistentOrderedMapBuilder.prototype.remove_xwzc9p$ = function (key, value) {
    var tmp$, tmp$_0;
    tmp$ = this.hashMapBuilder_8be2vx$.get_11rb$(key);
    if (tmp$ == null) {
      return false;
    }var links = tmp$;
    if (!equals(links.value, value)) {
      tmp$_0 = false;
    } else {
      this.remove_11rb$(key);
      tmp$_0 = true;
    }
    return tmp$_0;
  };
  PersistentOrderedMapBuilder.prototype.clear = function () {
    this.hashMapBuilder_8be2vx$.clear();
    this.firstKey_8be2vx$ = EndOfChain_getInstance();
    this.lastKey_0 = EndOfChain_getInstance();
  };
  PersistentOrderedMapBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapBuilder',
    interfaces: [PersistentMap$Builder, AbstractMutableMap]
  };
  function PersistentOrderedMapBuilderLinksIterator(nextKey, builder) {
    this.nextKey_0 = nextKey;
    this.builder_8be2vx$ = builder;
    this.lastIteratedKey_8be2vx$ = EndOfChain_getInstance();
    this.nextWasInvoked_0 = false;
    this.expectedModCount_0 = this.builder_8be2vx$.hashMapBuilder_8be2vx$.modCount_8be2vx$;
    this.index_8be2vx$ = 0;
  }
  PersistentOrderedMapBuilderLinksIterator.prototype.hasNext = function () {
    return this.index_8be2vx$ < this.builder_8be2vx$.size;
  };
  function PersistentOrderedMapBuilderLinksIterator$next$lambda(this$PersistentOrderedMapBuilderLinksIterator) {
    return function () {
      throw ConcurrentModificationException_init_0('Hash code of a key (' + toString(this$PersistentOrderedMapBuilderLinksIterator.nextKey_0) + ') has changed after it was added to the persistent map.');
    };
  }
  PersistentOrderedMapBuilderLinksIterator.prototype.next = function () {
    var tmp$, tmp$_0;
    this.checkForComodification_0();
    this.checkHasNext_0();
    this.lastIteratedKey_8be2vx$ = this.nextKey_0;
    this.nextWasInvoked_0 = true;
    this.index_8be2vx$ = this.index_8be2vx$ + 1 | 0;
    tmp$_0 = this.builder_8be2vx$.hashMapBuilder_8be2vx$;
    var key = (tmp$ = this.nextKey_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    var tmp$_1;
    var result = (tmp$_1 = tmp$_0.get_11rb$(key)) != null ? tmp$_1 : PersistentOrderedMapBuilderLinksIterator$next$lambda(this)();
    this.nextKey_0 = result.next;
    return result;
  };
  PersistentOrderedMapBuilderLinksIterator.prototype.remove = function () {
    this.checkNextWasInvoked_0();
    var $receiver = this.builder_8be2vx$;
    var key = this.lastIteratedKey_8be2vx$;
    var tmp$;
    (Kotlin.isType(tmp$ = $receiver, MutableMap) ? tmp$ : throwCCE()).remove_11rb$(key);
    this.lastIteratedKey_8be2vx$ = null;
    this.nextWasInvoked_0 = false;
    this.expectedModCount_0 = this.builder_8be2vx$.hashMapBuilder_8be2vx$.modCount_8be2vx$;
    this.index_8be2vx$ = this.index_8be2vx$ - 1 | 0;
  };
  PersistentOrderedMapBuilderLinksIterator.prototype.checkHasNext_0 = function () {
    if (!this.hasNext())
      throw NoSuchElementException_init();
  };
  PersistentOrderedMapBuilderLinksIterator.prototype.checkNextWasInvoked_0 = function () {
    if (!this.nextWasInvoked_0)
      throw IllegalStateException_init_0();
  };
  PersistentOrderedMapBuilderLinksIterator.prototype.checkForComodification_0 = function () {
    if (this.builder_8be2vx$.hashMapBuilder_8be2vx$.modCount_8be2vx$ !== this.expectedModCount_0)
      throw ConcurrentModificationException_init();
  };
  PersistentOrderedMapBuilderLinksIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapBuilderLinksIterator',
    interfaces: [MutableIterator]
  };
  function PersistentOrderedMapBuilderEntriesIterator(map) {
    this.internal_0 = new PersistentOrderedMapBuilderLinksIterator(map.firstKey_8be2vx$, map);
  }
  PersistentOrderedMapBuilderEntriesIterator.prototype.hasNext = function () {
    return this.internal_0.hasNext();
  };
  PersistentOrderedMapBuilderEntriesIterator.prototype.next = function () {
    var tmp$;
    var links = this.internal_0.next();
    return new MutableMapEntry_0(this.internal_0.builder_8be2vx$.hashMapBuilder_8be2vx$, (tmp$ = this.internal_0.lastIteratedKey_8be2vx$) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), links);
  };
  PersistentOrderedMapBuilderEntriesIterator.prototype.remove = function () {
    this.internal_0.remove();
  };
  PersistentOrderedMapBuilderEntriesIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapBuilderEntriesIterator',
    interfaces: [MutableIterator]
  };
  function MutableMapEntry_0(mutableMap, key, links) {
    MapEntry.call(this, key, links.value);
    this.mutableMap_0 = mutableMap;
    this.links_0 = links;
  }
  Object.defineProperty(MutableMapEntry_0.prototype, 'value', {
    configurable: true,
    get: function () {
      return this.links_0.value;
    }
  });
  MutableMapEntry_0.prototype.setValue_11rc$ = function (newValue) {
    var result = this.links_0.value;
    this.links_0 = this.links_0.withValue_11rb$(newValue);
    var $receiver = this.mutableMap_0;
    var key = this.key;
    var value = this.links_0;
    $receiver.put_xwzc9p$(key, value);
    return result;
  };
  MutableMapEntry_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutableMapEntry',
    interfaces: [MutableMap$MutableEntry, MapEntry]
  };
  function PersistentOrderedMapBuilderKeysIterator(map) {
    this.internal_0 = new PersistentOrderedMapBuilderLinksIterator(map.firstKey_8be2vx$, map);
  }
  PersistentOrderedMapBuilderKeysIterator.prototype.hasNext = function () {
    return this.internal_0.hasNext();
  };
  PersistentOrderedMapBuilderKeysIterator.prototype.next = function () {
    var tmp$;
    this.internal_0.next();
    return (tmp$ = this.internal_0.lastIteratedKey_8be2vx$) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  PersistentOrderedMapBuilderKeysIterator.prototype.remove = function () {
    this.internal_0.remove();
  };
  PersistentOrderedMapBuilderKeysIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapBuilderKeysIterator',
    interfaces: [MutableIterator]
  };
  function PersistentOrderedMapBuilderValuesIterator(map) {
    this.internal_0 = new PersistentOrderedMapBuilderLinksIterator(map.firstKey_8be2vx$, map);
  }
  PersistentOrderedMapBuilderValuesIterator.prototype.hasNext = function () {
    return this.internal_0.hasNext();
  };
  PersistentOrderedMapBuilderValuesIterator.prototype.next = function () {
    return this.internal_0.next().value;
  };
  PersistentOrderedMapBuilderValuesIterator.prototype.remove = function () {
    this.internal_0.remove();
  };
  PersistentOrderedMapBuilderValuesIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapBuilderValuesIterator',
    interfaces: [MutableIterator]
  };
  function PersistentOrderedMapBuilderEntries(builder) {
    AbstractMutableSet.call(this);
    this.builder_0 = builder;
  }
  PersistentOrderedMapBuilderEntries.prototype.add_11rb$ = function (element) {
    throw UnsupportedOperationException_init();
  };
  PersistentOrderedMapBuilderEntries.prototype.clear = function () {
    this.builder_0.clear();
  };
  PersistentOrderedMapBuilderEntries.prototype.iterator = function () {
    return new PersistentOrderedMapBuilderEntriesIterator(this.builder_0);
  };
  PersistentOrderedMapBuilderEntries.prototype.remove_11rb$ = function (element) {
    var tmp$;
    if (!Kotlin.isType((tmp$ = element) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), MutableMap$MutableEntry))
      return false;
    return this.builder_0.remove_xwzc9p$(element.key, element.value);
  };
  Object.defineProperty(PersistentOrderedMapBuilderEntries.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.builder_0.size;
    }
  });
  PersistentOrderedMapBuilderEntries.prototype.contains_11rb$ = function (element) {
    var tmp$, tmp$_0, tmp$_1;
    if (!Kotlin.isType((tmp$ = element) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), MutableMap$MutableEntry))
      return false;
    return (tmp$_1 = (tmp$_0 = this.builder_0.get_11rb$(element.key)) != null ? equals(tmp$_0, element.value) : null) != null ? tmp$_1 : element.value == null && this.builder_0.containsKey_11rb$(element.key);
  };
  PersistentOrderedMapBuilderEntries.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapBuilderEntries',
    interfaces: [AbstractMutableSet, MutableSet]
  };
  function PersistentOrderedMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.builder_0 = builder;
  }
  PersistentOrderedMapBuilderKeys.prototype.add_11rb$ = function (element) {
    throw UnsupportedOperationException_init();
  };
  PersistentOrderedMapBuilderKeys.prototype.clear = function () {
    this.builder_0.clear();
  };
  PersistentOrderedMapBuilderKeys.prototype.iterator = function () {
    return new PersistentOrderedMapBuilderKeysIterator(this.builder_0);
  };
  PersistentOrderedMapBuilderKeys.prototype.remove_11rb$ = function (element) {
    if (this.builder_0.containsKey_11rb$(element)) {
      this.builder_0.remove_11rb$(element);
      return true;
    }return false;
  };
  Object.defineProperty(PersistentOrderedMapBuilderKeys.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.builder_0.size;
    }
  });
  PersistentOrderedMapBuilderKeys.prototype.contains_11rb$ = function (element) {
    return this.builder_0.containsKey_11rb$(element);
  };
  PersistentOrderedMapBuilderKeys.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapBuilderKeys',
    interfaces: [AbstractMutableSet, MutableSet]
  };
  function PersistentOrderedMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.builder_0 = builder;
  }
  Object.defineProperty(PersistentOrderedMapBuilderValues.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.builder_0.size;
    }
  });
  PersistentOrderedMapBuilderValues.prototype.contains_11rb$ = function (element) {
    return this.builder_0.containsValue_11rc$(element);
  };
  PersistentOrderedMapBuilderValues.prototype.add_11rb$ = function (element) {
    throw UnsupportedOperationException_init();
  };
  PersistentOrderedMapBuilderValues.prototype.clear = function () {
    this.builder_0.clear();
  };
  PersistentOrderedMapBuilderValues.prototype.iterator = function () {
    return new PersistentOrderedMapBuilderValuesIterator(this.builder_0);
  };
  PersistentOrderedMapBuilderValues.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapBuilderValues',
    interfaces: [AbstractMutableCollection, MutableCollection]
  };
  function PersistentOrderedMapLinksIterator(nextKey, hashMap) {
    this.nextKey_8be2vx$ = nextKey;
    this.hashMap_0 = hashMap;
    this.index_8be2vx$ = 0;
  }
  PersistentOrderedMapLinksIterator.prototype.hasNext = function () {
    return this.index_8be2vx$ < this.hashMap_0.size;
  };
  function PersistentOrderedMapLinksIterator$next$lambda(this$PersistentOrderedMapLinksIterator) {
    return function () {
      throw ConcurrentModificationException_init_0('Hash code of a key (' + toString(this$PersistentOrderedMapLinksIterator.nextKey_8be2vx$) + ') has changed after it was added to the persistent map.');
    };
  }
  PersistentOrderedMapLinksIterator.prototype.next = function () {
    var tmp$, tmp$_0;
    if (!this.hasNext()) {
      throw NoSuchElementException_init();
    }tmp$_0 = this.hashMap_0;
    var key = (tmp$ = this.nextKey_8be2vx$) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    var tmp$_1;
    var result = (tmp$_1 = tmp$_0.get_11rb$(key)) != null ? tmp$_1 : PersistentOrderedMapLinksIterator$next$lambda(this)();
    this.index_8be2vx$ = this.index_8be2vx$ + 1 | 0;
    this.nextKey_8be2vx$ = result.next;
    return result;
  };
  PersistentOrderedMapLinksIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapLinksIterator',
    interfaces: [Iterator]
  };
  function PersistentOrderedMapEntriesIterator(map) {
    this.internal_0 = new PersistentOrderedMapLinksIterator(map.firstKey_8be2vx$, map.hashMap_8be2vx$);
  }
  PersistentOrderedMapEntriesIterator.prototype.hasNext = function () {
    return this.internal_0.hasNext();
  };
  PersistentOrderedMapEntriesIterator.prototype.next = function () {
    var tmp$;
    var nextKey = (tmp$ = this.internal_0.nextKey_8be2vx$) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    var nextValue = this.internal_0.next().value;
    return new MapEntry(nextKey, nextValue);
  };
  PersistentOrderedMapEntriesIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapEntriesIterator',
    interfaces: [Iterator]
  };
  function PersistentOrderedMapKeysIterator(map) {
    this.internal_0 = new PersistentOrderedMapLinksIterator(map.firstKey_8be2vx$, map.hashMap_8be2vx$);
  }
  PersistentOrderedMapKeysIterator.prototype.hasNext = function () {
    return this.internal_0.hasNext();
  };
  PersistentOrderedMapKeysIterator.prototype.next = function () {
    var tmp$;
    var nextKey = (tmp$ = this.internal_0.nextKey_8be2vx$) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    this.internal_0.next();
    return nextKey;
  };
  PersistentOrderedMapKeysIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapKeysIterator',
    interfaces: [Iterator]
  };
  function PersistentOrderedMapValuesIterator(map) {
    this.internal_0 = new PersistentOrderedMapLinksIterator(map.firstKey_8be2vx$, map.hashMap_8be2vx$);
  }
  PersistentOrderedMapValuesIterator.prototype.hasNext = function () {
    return this.internal_0.hasNext();
  };
  PersistentOrderedMapValuesIterator.prototype.next = function () {
    return this.internal_0.next().value;
  };
  PersistentOrderedMapValuesIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapValuesIterator',
    interfaces: [Iterator]
  };
  function PersistentOrderedMapEntries(map) {
    AbstractSet.call(this);
    this.map_0 = map;
  }
  Object.defineProperty(PersistentOrderedMapEntries.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.map_0.size;
    }
  });
  PersistentOrderedMapEntries.prototype.contains_11rb$ = function (element) {
    var tmp$, tmp$_0, tmp$_1;
    if (!Kotlin.isType((tmp$ = element) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), Map$Entry))
      return false;
    return (tmp$_1 = (tmp$_0 = this.map_0.get_11rb$(element.key)) != null ? equals(tmp$_0, element.value) : null) != null ? tmp$_1 : element.value == null && this.map_0.containsKey_11rb$(element.key);
  };
  PersistentOrderedMapEntries.prototype.iterator = function () {
    return new PersistentOrderedMapEntriesIterator(this.map_0);
  };
  PersistentOrderedMapEntries.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapEntries',
    interfaces: [AbstractSet, ImmutableSet]
  };
  function PersistentOrderedMapKeys(map) {
    AbstractSet.call(this);
    this.map_0 = map;
  }
  Object.defineProperty(PersistentOrderedMapKeys.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.map_0.size;
    }
  });
  PersistentOrderedMapKeys.prototype.contains_11rb$ = function (element) {
    return this.map_0.containsKey_11rb$(element);
  };
  PersistentOrderedMapKeys.prototype.iterator = function () {
    return new PersistentOrderedMapKeysIterator(this.map_0);
  };
  PersistentOrderedMapKeys.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapKeys',
    interfaces: [AbstractSet, ImmutableSet]
  };
  function PersistentOrderedMapValues(map) {
    AbstractCollection.call(this);
    this.map_0 = map;
  }
  Object.defineProperty(PersistentOrderedMapValues.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.map_0.size;
    }
  });
  PersistentOrderedMapValues.prototype.contains_11rb$ = function (element) {
    return this.map_0.containsValue_11rc$(element);
  };
  PersistentOrderedMapValues.prototype.iterator = function () {
    return new PersistentOrderedMapValuesIterator(this.map_0);
  };
  PersistentOrderedMapValues.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedMapValues',
    interfaces: [AbstractCollection, ImmutableCollection]
  };
  function Links(previous, next) {
    this.previous = previous;
    this.next = next;
  }
  Links.prototype.withNext_s8jyv4$ = function (newNext) {
    return new Links(this.previous, newNext);
  };
  Links.prototype.withPrevious_s8jyv4$ = function (newPrevious) {
    return new Links(newPrevious, this.next);
  };
  Object.defineProperty(Links.prototype, 'hasNext', {
    configurable: true,
    get: function () {
      return this.next !== EndOfChain_getInstance();
    }
  });
  Object.defineProperty(Links.prototype, 'hasPrevious', {
    configurable: true,
    get: function () {
      return this.previous !== EndOfChain_getInstance();
    }
  });
  Links.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Links',
    interfaces: []
  };
  function Links_init($this) {
    $this = $this || Object.create(Links.prototype);
    Links.call($this, EndOfChain_getInstance(), EndOfChain_getInstance());
    return $this;
  }
  function Links_init_0(previous, $this) {
    $this = $this || Object.create(Links.prototype);
    Links.call($this, previous, EndOfChain_getInstance());
    return $this;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    PersistentOrderedSet$Companion_getInstance();
    AbstractSet.call(this);
    this.firstElement_8be2vx$ = firstElement;
    this.lastElement_8be2vx$ = lastElement;
    this.hashMap_8be2vx$ = hashMap;
  }
  Object.defineProperty(PersistentOrderedSet.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.hashMap_8be2vx$.size;
    }
  });
  PersistentOrderedSet.prototype.contains_11rb$ = function (element) {
    return this.hashMap_8be2vx$.containsKey_11rb$(element);
  };
  PersistentOrderedSet.prototype.add_11rb$ = function (element) {
    var tmp$;
    if (this.hashMap_8be2vx$.containsKey_11rb$(element)) {
      return this;
    }if (this.isEmpty()) {
      var newMap = this.hashMap_8be2vx$.put_xwzc9p$(element, Links_init());
      return new PersistentOrderedSet(element, element, newMap);
    }var lastElement = (tmp$ = this.lastElement_8be2vx$) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    var lastLinks = ensureNotNull(this.hashMap_8be2vx$.get_11rb$(lastElement));
    var newMap_0 = this.hashMap_8be2vx$.put_xwzc9p$(lastElement, lastLinks.withNext_s8jyv4$(element)).put_xwzc9p$(element, Links_init_0(lastElement));
    return new PersistentOrderedSet(this.firstElement_8be2vx$, element, newMap_0);
  };
  PersistentOrderedSet.prototype.addAll_brywnq$ = function (elements) {
    var $receiver = this.builder();
    $receiver.addAll_brywnq$(elements);
    return $receiver.build();
  };
  PersistentOrderedSet.prototype.remove_11rb$ = function (element) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.hashMap_8be2vx$.get_11rb$(element);
    if (tmp$ == null) {
      return this;
    }var links = tmp$;
    var newMap = this.hashMap_8be2vx$.remove_11rb$(element);
    if (links.hasPrevious) {
      var $receiver = newMap;
      var key = links.previous;
      var tmp$_2;
      var previousLinks = ensureNotNull((Kotlin.isType(tmp$_2 = $receiver, Map) ? tmp$_2 : throwCCE()).get_11rb$(key));
      newMap = newMap.put_xwzc9p$((tmp$_0 = links.previous) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE(), previousLinks.withNext_s8jyv4$(links.next));
    }if (links.hasNext) {
      var $receiver_0 = newMap;
      var key_0 = links.next;
      var tmp$_3;
      var nextLinks = ensureNotNull((Kotlin.isType(tmp$_3 = $receiver_0, Map) ? tmp$_3 : throwCCE()).get_11rb$(key_0));
      newMap = newMap.put_xwzc9p$((tmp$_1 = links.next) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE(), nextLinks.withPrevious_s8jyv4$(links.previous));
    }var newFirstElement = !links.hasPrevious ? links.next : this.firstElement_8be2vx$;
    var newLastElement = !links.hasNext ? links.previous : this.lastElement_8be2vx$;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  PersistentOrderedSet.prototype.removeAll_brywnq$ = function (elements) {
    var $receiver = this.builder();
    $receiver.removeAll_brywnq$(elements);
    return $receiver.build();
  };
  PersistentOrderedSet.prototype.removeAll_ucl7l2$ = function (predicate) {
    var $receiver = this.builder();
    removeAll_2($receiver, predicate);
    return $receiver.build();
  };
  PersistentOrderedSet.prototype.clear = function () {
    return PersistentOrderedSet$Companion_getInstance().emptyOf_tnbmyv$();
  };
  PersistentOrderedSet.prototype.iterator = function () {
    return new PersistentOrderedSetIterator(this.firstElement_8be2vx$, this.hashMap_8be2vx$);
  };
  PersistentOrderedSet.prototype.builder = function () {
    return new PersistentOrderedSetBuilder(this);
  };
  function PersistentOrderedSet$Companion() {
    PersistentOrderedSet$Companion_instance = this;
    this.EMPTY_0 = new PersistentOrderedSet(EndOfChain_getInstance(), EndOfChain_getInstance(), PersistentHashMap$Companion_getInstance().emptyOf_3w54xu$());
  }
  PersistentOrderedSet$Companion.prototype.emptyOf_tnbmyv$ = function () {
    return this.EMPTY_0;
  };
  PersistentOrderedSet$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PersistentOrderedSet$Companion_instance = null;
  function PersistentOrderedSet$Companion_getInstance() {
    if (PersistentOrderedSet$Companion_instance === null) {
      new PersistentOrderedSet$Companion();
    }return PersistentOrderedSet$Companion_instance;
  }
  PersistentOrderedSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedSet',
    interfaces: [PersistentSet, AbstractSet]
  };
  function PersistentOrderedSetBuilder(set) {
    AbstractMutableSet.call(this);
    this.set_0 = set;
    this.firstElement_8be2vx$ = this.set_0.firstElement_8be2vx$;
    this.lastElement_0 = this.set_0.lastElement_8be2vx$;
    this.hashMapBuilder_8be2vx$ = this.set_0.hashMap_8be2vx$.builder();
  }
  Object.defineProperty(PersistentOrderedSetBuilder.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.hashMapBuilder_8be2vx$.size;
    }
  });
  PersistentOrderedSetBuilder.prototype.build = function () {
    var tmp$;
    var newMap = this.hashMapBuilder_8be2vx$.build();
    if (newMap === this.set_0.hashMap_8be2vx$) {
      assert(this.firstElement_8be2vx$ === this.set_0.firstElement_8be2vx$);
      assert(this.lastElement_0 === this.set_0.lastElement_8be2vx$);
      tmp$ = this.set_0;
    } else {
      tmp$ = new PersistentOrderedSet(this.firstElement_8be2vx$, this.lastElement_0, newMap);
    }
    this.set_0 = tmp$;
    return this.set_0;
  };
  PersistentOrderedSetBuilder.prototype.contains_11rb$ = function (element) {
    return this.hashMapBuilder_8be2vx$.containsKey_11rb$(element);
  };
  PersistentOrderedSetBuilder.prototype.add_11rb$ = function (element) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.hashMapBuilder_8be2vx$.containsKey_11rb$(element)) {
      return false;
    }if (this.isEmpty()) {
      this.firstElement_8be2vx$ = element;
      this.lastElement_0 = element;
      var $receiver = this.hashMapBuilder_8be2vx$;
      var value = Links_init();
      $receiver.put_xwzc9p$(element, value);
      return true;
    }var $receiver_0 = this.hashMapBuilder_8be2vx$;
    var key = this.lastElement_0;
    var tmp$_2;
    var lastLinks = ensureNotNull((Kotlin.isType(tmp$_2 = $receiver_0, Map) ? tmp$_2 : throwCCE()).get_11rb$(key));
    tmp$_1 = this.hashMapBuilder_8be2vx$;
    tmp$_0 = (tmp$ = this.lastElement_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    var value_0 = lastLinks.withNext_s8jyv4$(element);
    tmp$_1.put_xwzc9p$(tmp$_0, value_0);
    var $receiver_1 = this.hashMapBuilder_8be2vx$;
    var value_1 = Links_init_0(this.lastElement_0);
    $receiver_1.put_xwzc9p$(element, value_1);
    this.lastElement_0 = element;
    return true;
  };
  PersistentOrderedSetBuilder.prototype.remove_11rb$ = function (element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$ = this.hashMapBuilder_8be2vx$.remove_11rb$(element);
    if (tmp$ == null) {
      return false;
    }var links = tmp$;
    if (links.hasPrevious) {
      var $receiver = this.hashMapBuilder_8be2vx$;
      var key = links.previous;
      var tmp$_6;
      var previousLinks = ensureNotNull((Kotlin.isType(tmp$_6 = $receiver, Map) ? tmp$_6 : throwCCE()).get_11rb$(key));
      tmp$_2 = this.hashMapBuilder_8be2vx$;
      tmp$_1 = (tmp$_0 = links.previous) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
      var value = previousLinks.withNext_s8jyv4$(links.next);
      tmp$_2.put_xwzc9p$(tmp$_1, value);
    } else {
      this.firstElement_8be2vx$ = links.next;
    }
    if (links.hasNext) {
      var $receiver_0 = this.hashMapBuilder_8be2vx$;
      var key_0 = links.next;
      var tmp$_7;
      var nextLinks = ensureNotNull((Kotlin.isType(tmp$_7 = $receiver_0, Map) ? tmp$_7 : throwCCE()).get_11rb$(key_0));
      tmp$_5 = this.hashMapBuilder_8be2vx$;
      tmp$_4 = (tmp$_3 = links.next) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE();
      var value_0 = nextLinks.withPrevious_s8jyv4$(links.previous);
      tmp$_5.put_xwzc9p$(tmp$_4, value_0);
    } else {
      this.lastElement_0 = links.previous;
    }
    return true;
  };
  PersistentOrderedSetBuilder.prototype.clear = function () {
    this.hashMapBuilder_8be2vx$.clear();
    this.firstElement_8be2vx$ = EndOfChain_getInstance();
    this.lastElement_0 = EndOfChain_getInstance();
  };
  PersistentOrderedSetBuilder.prototype.iterator = function () {
    return new PersistentOrderedSetMutableIterator(this);
  };
  PersistentOrderedSetBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedSetBuilder',
    interfaces: [PersistentSet$Builder, AbstractMutableSet]
  };
  function PersistentOrderedSetIterator(nextElement, map) {
    this.nextElement_0 = nextElement;
    this.map_8be2vx$ = map;
    this.index_8be2vx$ = 0;
  }
  PersistentOrderedSetIterator.prototype.hasNext = function () {
    return this.index_8be2vx$ < this.map_8be2vx$.size;
  };
  PersistentOrderedSetIterator.prototype.next = function () {
    var tmp$;
    this.checkHasNext_0();
    var result = (tmp$ = this.nextElement_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    this.index_8be2vx$ = this.index_8be2vx$ + 1 | 0;
    var tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = this.map_8be2vx$.get_11rb$(result)) != null)
      tmp$_1 = tmp$_0;
    else {
      throw ConcurrentModificationException_init_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    }
    this.nextElement_0 = tmp$_1.next;
    return result;
  };
  PersistentOrderedSetIterator.prototype.checkHasNext_0 = function () {
    if (!this.hasNext())
      throw NoSuchElementException_init();
  };
  PersistentOrderedSetIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedSetIterator',
    interfaces: [Iterator]
  };
  function PersistentOrderedSetMutableIterator(builder) {
    PersistentOrderedSetIterator.call(this, builder.firstElement_8be2vx$, builder.hashMapBuilder_8be2vx$);
    this.builder_0 = builder;
    this.lastIteratedElement_0 = null;
    this.nextWasInvoked_0 = false;
    this.expectedModCount_0 = this.builder_0.hashMapBuilder_8be2vx$.modCount_8be2vx$;
  }
  PersistentOrderedSetMutableIterator.prototype.next = function () {
    this.checkForComodification_0();
    var next = PersistentOrderedSetIterator.prototype.next.call(this);
    this.lastIteratedElement_0 = next;
    this.nextWasInvoked_0 = true;
    return next;
  };
  PersistentOrderedSetMutableIterator.prototype.remove = function () {
    this.checkNextWasInvoked_0();
    var $receiver = this.builder_0;
    var element = this.lastIteratedElement_0;
    var tmp$;
    (Kotlin.isType(tmp$ = $receiver, MutableCollection) ? tmp$ : throwCCE()).remove_11rb$(element);
    this.lastIteratedElement_0 = null;
    this.nextWasInvoked_0 = false;
    this.expectedModCount_0 = this.builder_0.hashMapBuilder_8be2vx$.modCount_8be2vx$;
    this.index_8be2vx$ = this.index_8be2vx$ - 1 | 0;
  };
  PersistentOrderedSetMutableIterator.prototype.checkNextWasInvoked_0 = function () {
    if (!this.nextWasInvoked_0)
      throw IllegalStateException_init_0();
  };
  PersistentOrderedSetMutableIterator.prototype.checkForComodification_0 = function () {
    if (this.builder_0.hashMapBuilder_8be2vx$.modCount_8be2vx$ !== this.expectedModCount_0)
      throw ConcurrentModificationException_init();
  };
  PersistentOrderedSetMutableIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PersistentOrderedSetMutableIterator',
    interfaces: [MutableIterator, PersistentOrderedSetIterator]
  };
  function EndOfChain() {
    EndOfChain_instance = this;
  }
  EndOfChain.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EndOfChain',
    interfaces: []
  };
  var EndOfChain_instance = null;
  function EndOfChain_getInstance() {
    if (EndOfChain_instance === null) {
      new EndOfChain();
    }return EndOfChain_instance;
  }
  function ListImplementation() {
    ListImplementation_instance = this;
  }
  ListImplementation.prototype.checkElementIndex_6xvm5r$ = function (index, size) {
    if (index < 0 || index >= size) {
      throw new IndexOutOfBoundsException('index: ' + index + ', size: ' + size);
    }};
  ListImplementation.prototype.checkPositionIndex_6xvm5r$ = function (index, size) {
    if (index < 0 || index > size) {
      throw new IndexOutOfBoundsException('index: ' + index + ', size: ' + size);
    }};
  ListImplementation.prototype.checkRangeIndexes_cub51b$ = function (fromIndex, toIndex, size) {
    if (fromIndex < 0 || toIndex > size) {
      throw new IndexOutOfBoundsException('fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size);
    }if (fromIndex > toIndex) {
      throw IllegalArgumentException_init('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }};
  ListImplementation.prototype.orderedHashCode_nykoif$ = function (c) {
    var tmp$, tmp$_0;
    var hashCode_0 = 1;
    tmp$ = c.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      hashCode_0 = (31 * hashCode_0 | 0) + ((tmp$_0 = e != null ? hashCode(e) : null) != null ? tmp$_0 : 0) | 0;
    }
    return hashCode_0;
  };
  ListImplementation.prototype.orderedEquals_e92ka7$ = function (c, other) {
    var tmp$;
    if (c.size !== other.size)
      return false;
    var otherIterator = other.iterator();
    tmp$ = c.iterator();
    while (tmp$.hasNext()) {
      var elem = tmp$.next();
      var elemOther = otherIterator.next();
      if (!equals(elem, elemOther)) {
        return false;
      }}
    return true;
  };
  ListImplementation.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ListImplementation',
    interfaces: []
  };
  var ListImplementation_instance = null;
  function ListImplementation_getInstance() {
    if (ListImplementation_instance === null) {
      new ListImplementation();
    }return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  MutabilityOwnership.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutabilityOwnership',
    interfaces: []
  };
  function assert(condition) {
    if (!condition) {
      throw AssertionError_init('Assertion failed');
    }}
  function get_modCount($receiver) {
    return 0;
  }
  function set_modCount($receiver, value) {
  }
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$collections = package$kotlinx.collections || (package$kotlinx.collections = {});
  var package$immutable = package$collections.immutable || (package$collections.immutable = {});
  package$immutable.ImmutableCollection = ImmutableCollection;
  PersistentCollection.Builder = PersistentCollection$Builder;
  package$immutable.PersistentCollection = PersistentCollection;
  package$immutable.ImmutableList = ImmutableList;
  PersistentList.Builder = PersistentList$Builder;
  package$immutable.PersistentList = PersistentList;
  package$immutable.ImmutableMap = ImmutableMap;
  PersistentMap.Builder = PersistentMap$Builder;
  package$immutable.PersistentMap = PersistentMap;
  package$immutable.ImmutableSet = ImmutableSet;
  PersistentSet.Builder = PersistentSet$Builder;
  package$immutable.PersistentSet = PersistentSet;
  var package$adapters = package$immutable.adapters || (package$immutable.adapters = {});
  package$adapters.ImmutableCollectionAdapter = ImmutableCollectionAdapter;
  package$adapters.ImmutableListAdapter = ImmutableListAdapter;
  package$adapters.ImmutableSetAdapter = ImmutableSetAdapter;
  package$adapters.ImmutableMapAdapter = ImmutableMapAdapter;
  package$immutable.mutate_vgo14u$ = mutate;
  package$immutable.mutate_3l7z2w$ = mutate_0;
  package$immutable.mutate_nyoq7e$ = mutate_1;
  package$immutable.plus_rasrbt$ = plus;
  package$immutable.minus_rasrbt$ = minus;
  package$immutable.plus_hcrzki$ = plus_0;
  package$immutable.plus_x72c6k$ = plus_1;
  package$immutable.plus_fla078$ = plus_2;
  package$immutable.minus_hcrzki$ = minus_0;
  package$immutable.minus_x72c6k$ = minus_1;
  package$immutable.minus_fla078$ = minus_2;
  package$immutable.plus_stc0vb$ = plus_3;
  package$immutable.minus_stc0vb$ = minus_3;
  $$importsForInline$$['Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy'] = _;
  package$immutable.plus_2b4gdq$ = plus_4;
  package$immutable.plus_a0qqng$ = plus_5;
  package$immutable.plus_p5lvek$ = plus_6;
  package$immutable.minus_2b4gdq$ = minus_4;
  package$immutable.minus_a0qqng$ = minus_5;
  package$immutable.minus_p5lvek$ = minus_6;
  package$immutable.plus_8rum3t$ = plus_7;
  package$immutable.minus_8rum3t$ = minus_7;
  package$immutable.plus_3bq2kw$ = plus_8;
  package$immutable.plus_1bc6vq$ = plus_9;
  package$immutable.plus_bd2y0y$ = plus_10;
  package$immutable.minus_3bq2kw$ = minus_8;
  package$immutable.minus_1bc6vq$ = minus_9;
  package$immutable.minus_bd2y0y$ = minus_10;
  package$immutable.plus_c13jiu$ = plus_11;
  package$immutable.putAll_rrmxlt$ = putAll_3;
  package$immutable.plus_rrmxlt$ = plus_12;
  package$immutable.putAll_79exe1$ = putAll_4;
  package$immutable.plus_79exe1$ = plus_13;
  package$immutable.putAll_l28i8h$ = putAll_5;
  package$immutable.plus_l28i8h$ = plus_14;
  package$immutable.putAll_pw1y0f$ = putAll_2;
  package$immutable.plus_pw1y0f$ = plus_15;
  package$immutable.minus_q7m7z4$ = minus_11;
  package$immutable.minus_4c1mav$ = minus_12;
  package$immutable.minus_lj6q4j$ = minus_13;
  package$immutable.minus_6rig6t$ = minus_14;
  package$immutable.persistentListOf_i5x0yv$ = persistentListOf;
  package$immutable.persistentListOf_287e2$ = persistentListOf_0;
  package$immutable.persistentSetOf_i5x0yv$ = persistentSetOf;
  package$immutable.persistentSetOf_287e2$ = persistentSetOf_0;
  package$immutable.persistentHashSetOf_i5x0yv$ = persistentHashSetOf;
  package$immutable.persistentHashSetOf_287e2$ = persistentHashSetOf_0;
  package$immutable.persistentMapOf_qfcya0$ = persistentMapOf;
  package$immutable.persistentMapOf_q3lmfv$ = persistentMapOf_0;
  package$immutable.persistentHashMapOf_qfcya0$ = persistentHashMapOf;
  package$immutable.persistentHashMapOf_q3lmfv$ = persistentHashMapOf_0;
  package$immutable.immutableListOf_i5x0yv$ = immutableListOf;
  package$immutable.immutableListOf_287e2$ = immutableListOf_0;
  package$immutable.immutableSetOf_i5x0yv$ = immutableSetOf;
  package$immutable.immutableSetOf_287e2$ = immutableSetOf_0;
  package$immutable.immutableHashSetOf_i5x0yv$ = immutableHashSetOf;
  package$immutable.immutableMapOf_qfcya0$ = immutableMapOf;
  package$immutable.immutableHashMapOf_qfcya0$ = immutableHashMapOf;
  package$immutable.toImmutableList_7wnvza$ = toImmutableList;
  package$immutable.toPersistentList_7wnvza$ = toPersistentList;
  package$immutable.toImmutableList_gw00vp$ = toImmutableList_0;
  package$immutable.toPersistentList_gw00vp$ = toPersistentList_0;
  package$immutable.toPersistentSet_gw00vp$ = toPersistentSet;
  package$immutable.toPersistentHashSet_gw00vp$ = toPersistentHashSet;
  package$immutable.toImmutableSet_7wnvza$ = toImmutableSet;
  package$immutable.toPersistentSet_7wnvza$ = toPersistentSet_0;
  package$immutable.toPersistentHashSet_7wnvza$ = toPersistentHashSet_0;
  package$immutable.toImmutableMap_go3l1a$ = toImmutableMap;
  package$immutable.toPersistentMap_go3l1a$ = toPersistentMap;
  package$immutable.toPersistentHashMap_go3l1a$ = toPersistentHashMap;
  var package$implementations = package$immutable.implementations || (package$immutable.implementations = {});
  var package$immutableList = package$implementations.immutableList || (package$implementations.immutableList = {});
  package$immutableList.AbstractListIterator = AbstractListIterator;
  package$immutableList.SingleElementListIterator = SingleElementListIterator;
  package$immutableList.AbstractPersistentList = AbstractPersistentList;
  package$immutableList.BufferIterator = BufferIterator;
  package$immutableList.PersistentVector = PersistentVector;
  package$immutableList.PersistentVectorBuilder = PersistentVectorBuilder;
  package$immutableList.PersistentVectorIterator = PersistentVectorIterator;
  package$immutableList.PersistentVectorMutableIterator = PersistentVectorMutableIterator;
  Object.defineProperty(SmallPersistentVector, 'Companion', {
    get: SmallPersistentVector$Companion_getInstance
  });
  package$immutableList.SmallPersistentVector = SmallPersistentVector;
  package$immutableList.TrieIterator = TrieIterator;
  Object.defineProperty(package$immutableList, 'MAX_BUFFER_SIZE_8be2vx$', {
    get: function () {
      return MAX_BUFFER_SIZE;
    }
  });
  Object.defineProperty(package$immutableList, 'LOG_MAX_BUFFER_SIZE_8be2vx$', {
    get: function () {
      return LOG_MAX_BUFFER_SIZE;
    }
  });
  Object.defineProperty(package$immutableList, 'MAX_BUFFER_SIZE_MINUS_ONE_8be2vx$', {
    get: function () {
      return MAX_BUFFER_SIZE_MINUS_ONE;
    }
  });
  Object.defineProperty(package$immutableList, 'MUTABLE_BUFFER_SIZE_8be2vx$', {
    get: function () {
      return MUTABLE_BUFFER_SIZE;
    }
  });
  package$immutableList.ObjectRef = ObjectRef;
  package$immutableList.persistentVectorOf_tnbmyv$ = persistentVectorOf;
  package$immutableList.presizedBufferWith_8ea4ql$ = presizedBufferWith;
  package$immutableList.indexSegment_6xvm5r$ = indexSegment;
  package$immutableList.rootSize_kcn2v3$ = rootSize;
  Object.defineProperty(PersistentHashMap, 'Companion', {
    get: PersistentHashMap$Companion_getInstance
  });
  var package$immutableMap = package$implementations.immutableMap || (package$implementations.immutableMap = {});
  package$immutableMap.PersistentHashMap = PersistentHashMap;
  package$immutableMap.PersistentHashMapBuilder = PersistentHashMapBuilder;
  package$immutableMap.TrieNodeMutableEntriesIterator = TrieNodeMutableEntriesIterator;
  package$immutableMap.PersistentHashMapBuilderBaseIterator = PersistentHashMapBuilderBaseIterator;
  package$immutableMap.PersistentHashMapBuilderEntriesIterator = PersistentHashMapBuilderEntriesIterator;
  package$immutableMap.PersistentHashMapBuilderKeysIterator = PersistentHashMapBuilderKeysIterator;
  package$immutableMap.PersistentHashMapBuilderValuesIterator = PersistentHashMapBuilderValuesIterator;
  package$immutableMap.PersistentHashMapBuilderEntries = PersistentHashMapBuilderEntries;
  package$immutableMap.PersistentHashMapBuilderKeys = PersistentHashMapBuilderKeys;
  package$immutableMap.PersistentHashMapBuilderValues = PersistentHashMapBuilderValues;
  Object.defineProperty(package$immutableMap, 'TRIE_MAX_HEIGHT_8be2vx$', {
    get: function () {
      return TRIE_MAX_HEIGHT;
    }
  });
  package$immutableMap.TrieNodeBaseIterator = TrieNodeBaseIterator;
  package$immutableMap.TrieNodeKeysIterator = TrieNodeKeysIterator;
  package$immutableMap.TrieNodeValuesIterator = TrieNodeValuesIterator;
  package$immutableMap.TrieNodeEntriesIterator = TrieNodeEntriesIterator;
  package$immutableMap.MapEntry = MapEntry;
  package$immutableMap.PersistentHashMapBaseIterator = PersistentHashMapBaseIterator;
  package$immutableMap.PersistentHashMapEntriesIterator = PersistentHashMapEntriesIterator;
  package$immutableMap.PersistentHashMapKeysIterator = PersistentHashMapKeysIterator;
  package$immutableMap.PersistentHashMapValuesIterator = PersistentHashMapValuesIterator;
  package$immutableMap.PersistentHashMapEntries = PersistentHashMapEntries;
  package$immutableMap.PersistentHashMapKeys = PersistentHashMapKeys;
  package$immutableMap.PersistentHashMapValues = PersistentHashMapValues;
  Object.defineProperty(package$immutableMap, 'MAX_BRANCHING_FACTOR_8be2vx$', {
    get: function () {
      return MAX_BRANCHING_FACTOR;
    }
  });
  Object.defineProperty(package$immutableMap, 'LOG_MAX_BRANCHING_FACTOR_8be2vx$', {
    get: function () {
      return LOG_MAX_BRANCHING_FACTOR;
    }
  });
  Object.defineProperty(package$immutableMap, 'MAX_BRANCHING_FACTOR_MINUS_ONE_8be2vx$', {
    get: function () {
      return MAX_BRANCHING_FACTOR_MINUS_ONE;
    }
  });
  Object.defineProperty(package$immutableMap, 'ENTRY_SIZE_8be2vx$', {
    get: function () {
      return ENTRY_SIZE;
    }
  });
  Object.defineProperty(package$immutableMap, 'MAX_SHIFT_8be2vx$', {
    get: function () {
      return MAX_SHIFT;
    }
  });
  package$immutableMap.indexSegment_6xvm5r$ = indexSegment_0;
  TrieNode.ModificationResult = TrieNode$ModificationResult;
  Object.defineProperty(TrieNode, 'Companion', {
    get: TrieNode$Companion_getInstance
  });
  package$immutableMap.TrieNode_init_duq1rh$ = TrieNode_init;
  package$immutableMap.TrieNode = TrieNode;
  Object.defineProperty(PersistentHashSet, 'Companion', {
    get: PersistentHashSet$Companion_getInstance
  });
  var package$immutableSet = package$implementations.immutableSet || (package$implementations.immutableSet = {});
  package$immutableSet.PersistentHashSet = PersistentHashSet;
  package$immutableSet.PersistentHashSetBuilder = PersistentHashSetBuilder;
  package$immutableSet.PersistentHashSetIterator = PersistentHashSetIterator;
  package$immutableSet.TrieNodeIterator = TrieNodeIterator;
  package$immutableSet.PersistentHashSetMutableIterator = PersistentHashSetMutableIterator;
  Object.defineProperty(package$immutableSet, 'MAX_BRANCHING_FACTOR_8be2vx$', {
    get: function () {
      return MAX_BRANCHING_FACTOR_0;
    }
  });
  Object.defineProperty(package$immutableSet, 'LOG_MAX_BRANCHING_FACTOR_8be2vx$', {
    get: function () {
      return LOG_MAX_BRANCHING_FACTOR_0;
    }
  });
  Object.defineProperty(package$immutableSet, 'MAX_BRANCHING_FACTOR_MINUS_ONE_8be2vx$', {
    get: function () {
      return MAX_BRANCHING_FACTOR_MINUS_ONE_0;
    }
  });
  Object.defineProperty(package$immutableSet, 'MAX_SHIFT_8be2vx$', {
    get: function () {
      return MAX_SHIFT_0;
    }
  });
  package$immutableSet.indexSegment_6xvm5r$ = indexSegment_1;
  Object.defineProperty(TrieNode_0, 'Companion', {
    get: TrieNode$Companion_getInstance_0
  });
  package$immutableSet.TrieNode_init_lxo6ya$ = TrieNode_init_0;
  package$immutableSet.TrieNode = TrieNode_0;
  var package$persistentOrderedMap = package$implementations.persistentOrderedMap || (package$implementations.persistentOrderedMap = {});
  package$persistentOrderedMap.LinkedValue_init_mh5how$ = LinkedValue_init;
  package$persistentOrderedMap.LinkedValue_init_t55t5w$ = LinkedValue_init_0;
  package$persistentOrderedMap.LinkedValue = LinkedValue;
  Object.defineProperty(PersistentOrderedMap, 'Companion', {
    get: PersistentOrderedMap$Companion_getInstance
  });
  package$persistentOrderedMap.PersistentOrderedMap = PersistentOrderedMap;
  package$persistentOrderedMap.PersistentOrderedMapBuilder = PersistentOrderedMapBuilder;
  package$persistentOrderedMap.PersistentOrderedMapBuilderLinksIterator = PersistentOrderedMapBuilderLinksIterator;
  package$persistentOrderedMap.PersistentOrderedMapBuilderEntriesIterator = PersistentOrderedMapBuilderEntriesIterator;
  package$persistentOrderedMap.PersistentOrderedMapBuilderKeysIterator = PersistentOrderedMapBuilderKeysIterator;
  package$persistentOrderedMap.PersistentOrderedMapBuilderValuesIterator = PersistentOrderedMapBuilderValuesIterator;
  package$persistentOrderedMap.PersistentOrderedMapBuilderEntries = PersistentOrderedMapBuilderEntries;
  package$persistentOrderedMap.PersistentOrderedMapBuilderKeys = PersistentOrderedMapBuilderKeys;
  package$persistentOrderedMap.PersistentOrderedMapBuilderValues = PersistentOrderedMapBuilderValues;
  package$persistentOrderedMap.PersistentOrderedMapLinksIterator = PersistentOrderedMapLinksIterator;
  package$persistentOrderedMap.PersistentOrderedMapEntriesIterator = PersistentOrderedMapEntriesIterator;
  package$persistentOrderedMap.PersistentOrderedMapKeysIterator = PersistentOrderedMapKeysIterator;
  package$persistentOrderedMap.PersistentOrderedMapValuesIterator = PersistentOrderedMapValuesIterator;
  package$persistentOrderedMap.PersistentOrderedMapEntries = PersistentOrderedMapEntries;
  package$persistentOrderedMap.PersistentOrderedMapKeys = PersistentOrderedMapKeys;
  package$persistentOrderedMap.PersistentOrderedMapValues = PersistentOrderedMapValues;
  var package$persistentOrderedSet = package$implementations.persistentOrderedSet || (package$implementations.persistentOrderedSet = {});
  package$persistentOrderedSet.Links_init = Links_init;
  package$persistentOrderedSet.Links_init_s8jyv4$ = Links_init_0;
  package$persistentOrderedSet.Links = Links;
  Object.defineProperty(PersistentOrderedSet, 'Companion', {
    get: PersistentOrderedSet$Companion_getInstance
  });
  package$persistentOrderedSet.PersistentOrderedSet = PersistentOrderedSet;
  package$persistentOrderedSet.PersistentOrderedSetBuilder = PersistentOrderedSetBuilder;
  package$persistentOrderedSet.PersistentOrderedSetIterator = PersistentOrderedSetIterator;
  package$persistentOrderedSet.PersistentOrderedSetMutableIterator = PersistentOrderedSetMutableIterator;
  var package$internal = package$immutable.internal || (package$immutable.internal = {});
  Object.defineProperty(package$internal, 'EndOfChain', {
    get: EndOfChain_getInstance
  });
  Object.defineProperty(package$internal, 'ListImplementation', {
    get: ListImplementation_getInstance
  });
  package$internal.MutabilityOwnership = MutabilityOwnership;
  package$internal.assert_vft4zs$ = assert;
  package$internal.get_modCount_cqxs6w$ = get_modCount;
  package$internal.set_modCount_lf6g62$ = set_modCount;
  PersistentList.prototype.subList_vux9f0$ = ImmutableList.prototype.subList_vux9f0$;
  MAX_BUFFER_SIZE = 32;
  LOG_MAX_BUFFER_SIZE = 5;
  MAX_BUFFER_SIZE_MINUS_ONE = 31;
  MUTABLE_BUFFER_SIZE = 33;
  TRIE_MAX_HEIGHT = 7;
  MAX_BRANCHING_FACTOR = 32;
  LOG_MAX_BRANCHING_FACTOR = 5;
  MAX_BRANCHING_FACTOR_MINUS_ONE = 31;
  ENTRY_SIZE = 2;
  MAX_SHIFT = 30;
  MAX_BRANCHING_FACTOR_0 = 32;
  LOG_MAX_BRANCHING_FACTOR_0 = 5;
  MAX_BRANCHING_FACTOR_MINUS_ONE_0 = 31;
  MAX_SHIFT_0 = 30;
  Kotlin.defineModule('Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy', _);
  return _;
}));

//# sourceMappingURL=Kotlin-Immutable-Collections-kotlinx-collections-immutable-jsLegacy.js.map
