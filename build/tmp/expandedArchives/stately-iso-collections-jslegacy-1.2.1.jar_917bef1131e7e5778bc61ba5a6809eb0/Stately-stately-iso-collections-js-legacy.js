(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'Stately-stately-isolate-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('Stately-stately-isolate-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Stately-stately-iso-collections-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Stately-stately-iso-collections-js-legacy'.");
    }if (typeof this['Stately-stately-isolate-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Stately-stately-iso-collections-js-legacy'. Its dependency 'Stately-stately-isolate-js-legacy' was not found. Please, check whether 'Stately-stately-isolate-js-legacy' is loaded prior to 'Stately-stately-iso-collections-js-legacy'.");
    }root['Stately-stately-iso-collections-js-legacy'] = factory(typeof this['Stately-stately-iso-collections-js-legacy'] === 'undefined' ? {} : this['Stately-stately-iso-collections-js-legacy'], kotlin, this['Stately-stately-isolate-js-legacy']);
  }
}(this, function (_, Kotlin, $module$Stately_stately_isolate_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var mutableSetOf = Kotlin.kotlin.collections.mutableSetOf_i5x0yv$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var Unit = Kotlin.kotlin.Unit;
  var ArrayDeque = Kotlin.kotlin.collections.ArrayDeque;
  var throwCCE = Kotlin.throwCCE;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayDeque_init = Kotlin.kotlin.collections.ArrayDeque_init_287e2$;
  var createState = $module$Stately_stately_isolate_js_legacy.co.touchlab.stately.isolate.createState_vi5l2i$;
  var equals = Kotlin.equals;
  var hashCode = Kotlin.hashCode;
  var IsolateState = $module$Stately_stately_isolate_js_legacy.co.touchlab.stately.isolate.IsolateState;
  var MutableCollection = Kotlin.kotlin.collections.MutableCollection;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var MutableListIterator = Kotlin.kotlin.collections.MutableListIterator;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  IsoMutableCollection.prototype = Object.create(IsolateState.prototype);
  IsoMutableCollection.prototype.constructor = IsoMutableCollection;
  IsoMutableList.prototype = Object.create(IsoMutableCollection.prototype);
  IsoMutableList.prototype.constructor = IsoMutableList;
  IsoArrayDeque.prototype = Object.create(IsoMutableList.prototype);
  IsoArrayDeque.prototype.constructor = IsoArrayDeque;
  IsoMutableIterator.prototype = Object.create(IsolateState.prototype);
  IsoMutableIterator.prototype.constructor = IsoMutableIterator;
  IsoMutableListIterator.prototype = Object.create(IsolateState.prototype);
  IsoMutableListIterator.prototype.constructor = IsoMutableListIterator;
  IsoMutableMap.prototype = Object.create(IsolateState.prototype);
  IsoMutableMap.prototype.constructor = IsoMutableMap;
  IsoMutableSet.prototype = Object.create(IsoMutableCollection.prototype);
  IsoMutableSet.prototype.constructor = IsoMutableSet;
  function sharedMutableListOf() {
    return IsoMutableList_init();
  }
  function sharedMutableListOf$lambda(closure$items) {
    return function () {
      return mutableListOf(closure$items.slice());
    };
  }
  function sharedMutableListOf_0(items) {
    return IsoMutableList_init(void 0, sharedMutableListOf$lambda(items));
  }
  function sharedMutableSetOf() {
    return IsoMutableSet_init();
  }
  function sharedMutableSetOf$lambda(closure$items) {
    return function () {
      return mutableSetOf(closure$items.slice());
    };
  }
  function sharedMutableSetOf_0(items) {
    return IsoMutableSet_init(void 0, sharedMutableSetOf$lambda(items));
  }
  function sharedMutableMapOf() {
    return new IsoMutableMap();
  }
  function sharedMutableMapOf$lambda(closure$items) {
    return function () {
      return mutableMapOf(closure$items.slice());
    };
  }
  function sharedMutableMapOf_0(items) {
    return new IsoMutableMap(void 0, sharedMutableMapOf$lambda(items));
  }
  function IsoArrayDeque$asAccess$lambda(closure$block) {
    return function (it) {
      var tmp$;
      return closure$block(Kotlin.isType(tmp$ = it, ArrayDeque) ? tmp$ : throwCCE());
    };
  }
  function IsoArrayDeque(stateHolder) {
    IsoMutableList.call(this, stateHolder);
  }
  function IsoArrayDeque$first$lambda(it) {
    return it.first();
  }
  IsoArrayDeque.prototype.first = function () {
    return this.access_m8mn37$(IsoArrayDeque$asAccess$lambda(IsoArrayDeque$first$lambda));
  };
  function IsoArrayDeque$firstOrNull$lambda(it) {
    return it.firstOrNull();
  }
  IsoArrayDeque.prototype.firstOrNull = function () {
    return this.access_m8mn37$(IsoArrayDeque$asAccess$lambda(IsoArrayDeque$firstOrNull$lambda));
  };
  function IsoArrayDeque$last$lambda(it) {
    return it.last();
  }
  IsoArrayDeque.prototype.last = function () {
    return this.access_m8mn37$(IsoArrayDeque$asAccess$lambda(IsoArrayDeque$last$lambda));
  };
  function IsoArrayDeque$lastOrNull$lambda(it) {
    return it.lastOrNull();
  }
  IsoArrayDeque.prototype.lastOrNull = function () {
    return this.access_m8mn37$(IsoArrayDeque$asAccess$lambda(IsoArrayDeque$lastOrNull$lambda));
  };
  function IsoArrayDeque$addFirst$lambda(closure$element) {
    return function (it) {
      it.addFirst_11rb$(closure$element);
      return Unit;
    };
  }
  IsoArrayDeque.prototype.addFirst_11rb$ = function (element) {
    this.access_m8mn37$(IsoArrayDeque$asAccess$lambda(IsoArrayDeque$addFirst$lambda(element)));
  };
  function IsoArrayDeque$addLast$lambda(closure$element) {
    return function (it) {
      it.addLast_11rb$(closure$element);
      return Unit;
    };
  }
  IsoArrayDeque.prototype.addLast_11rb$ = function (element) {
    this.access_m8mn37$(IsoArrayDeque$asAccess$lambda(IsoArrayDeque$addLast$lambda(element)));
  };
  function IsoArrayDeque$removeFirst$lambda(it) {
    return it.removeFirst();
  }
  IsoArrayDeque.prototype.removeFirst = function () {
    return this.access_m8mn37$(IsoArrayDeque$asAccess$lambda(IsoArrayDeque$removeFirst$lambda));
  };
  function IsoArrayDeque$removeFirstOrNull$lambda(it) {
    return it.removeFirstOrNull();
  }
  IsoArrayDeque.prototype.removeFirstOrNull = function () {
    return this.access_m8mn37$(IsoArrayDeque$asAccess$lambda(IsoArrayDeque$removeFirstOrNull$lambda));
  };
  function IsoArrayDeque$removeLast$lambda(it) {
    return it.removeLast();
  }
  IsoArrayDeque.prototype.removeLast = function () {
    return this.access_m8mn37$(IsoArrayDeque$asAccess$lambda(IsoArrayDeque$removeLast$lambda));
  };
  function IsoArrayDeque$removeLastOrNull$lambda(it) {
    return it.removeLastOrNull();
  }
  IsoArrayDeque.prototype.removeLastOrNull = function () {
    return this.access_m8mn37$(IsoArrayDeque$asAccess$lambda(IsoArrayDeque$removeLastOrNull$lambda));
  };
  IsoArrayDeque.prototype.asAccess_pp7zj5$_0 = wrapFunction(function () {
    function IsoArrayDeque$asAccess$lambda(closure$block) {
      return function (it) {
        var tmp$;
        return closure$block(Kotlin.isType(tmp$ = it, ArrayDeque) ? tmp$ : throwCCE());
      };
    }
    return function (block) {
      return this.access_m8mn37$(IsoArrayDeque$asAccess$lambda(block));
    };
  });
  IsoArrayDeque.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsoArrayDeque',
    interfaces: [IsoMutableList]
  };
  function IsoArrayDeque_init(stateRunner, producer, $this) {
    if (stateRunner === void 0)
      stateRunner = null;
    if (producer === void 0)
      producer = IsoArrayDeque_init$lambda;
    $this = $this || Object.create(IsoArrayDeque.prototype);
    IsoArrayDeque.call($this, createState(stateRunner, producer));
    return $this;
  }
  function IsoArrayDeque_init$lambda() {
    return ArrayDeque_init();
  }
  function IsoMutableCollection(stateHolder) {
    IsolateState.call(this, stateHolder);
  }
  function IsoMutableCollection$equals$lambda(closure$other) {
    return function (it) {
      return equals(it, closure$other);
    };
  }
  IsoMutableCollection.prototype.equals = function (other) {
    return this.access_m8mn37$(IsoMutableCollection$equals$lambda(other));
  };
  function IsoMutableCollection$hashCode$lambda(it) {
    return hashCode(it);
  }
  IsoMutableCollection.prototype.hashCode = function () {
    return this.access_m8mn37$(IsoMutableCollection$hashCode$lambda);
  };
  function IsoMutableCollection$get_IsoMutableCollection$size$lambda(it) {
    return it.size;
  }
  Object.defineProperty(IsoMutableCollection.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.access_m8mn37$(IsoMutableCollection$get_IsoMutableCollection$size$lambda);
    }
  });
  function IsoMutableCollection$contains$lambda(closure$element) {
    return function (it) {
      return it.contains_11rb$(closure$element);
    };
  }
  IsoMutableCollection.prototype.contains_11rb$ = function (element) {
    return this.access_m8mn37$(IsoMutableCollection$contains$lambda(element));
  };
  function IsoMutableCollection$containsAll$lambda(closure$elements) {
    return function (it) {
      return it.containsAll_brywnq$(closure$elements);
    };
  }
  IsoMutableCollection.prototype.containsAll_brywnq$ = function (elements) {
    return this.access_m8mn37$(IsoMutableCollection$containsAll$lambda(elements));
  };
  function IsoMutableCollection$isEmpty$lambda(it) {
    return it.isEmpty();
  }
  IsoMutableCollection.prototype.isEmpty = function () {
    return this.access_m8mn37$(IsoMutableCollection$isEmpty$lambda);
  };
  function IsoMutableCollection$add$lambda(closure$element) {
    return function (it) {
      return it.add_11rb$(closure$element);
    };
  }
  IsoMutableCollection.prototype.add_11rb$ = function (element) {
    return this.access_m8mn37$(IsoMutableCollection$add$lambda(element));
  };
  function IsoMutableCollection$addAll$lambda(closure$elements) {
    return function (it) {
      return it.addAll_brywnq$(closure$elements);
    };
  }
  IsoMutableCollection.prototype.addAll_brywnq$ = function (elements) {
    return this.access_m8mn37$(IsoMutableCollection$addAll$lambda(elements));
  };
  function IsoMutableCollection$clear$lambda(it) {
    it.clear();
    return Unit;
  }
  IsoMutableCollection.prototype.clear = function () {
    this.access_m8mn37$(IsoMutableCollection$clear$lambda);
  };
  function IsoMutableCollection$iterator$lambda(this$IsoMutableCollection) {
    return function (it) {
      return new IsoMutableIterator(this$IsoMutableCollection.fork_issdgt$(it.iterator()));
    };
  }
  IsoMutableCollection.prototype.iterator = function () {
    return this.access_m8mn37$(IsoMutableCollection$iterator$lambda(this));
  };
  function IsoMutableCollection$remove$lambda(closure$element) {
    return function (it) {
      return it.remove_11rb$(closure$element);
    };
  }
  IsoMutableCollection.prototype.remove_11rb$ = function (element) {
    return this.access_m8mn37$(IsoMutableCollection$remove$lambda(element));
  };
  function IsoMutableCollection$removeAll$lambda(closure$elements) {
    return function (it) {
      return it.removeAll_brywnq$(closure$elements);
    };
  }
  IsoMutableCollection.prototype.removeAll_brywnq$ = function (elements) {
    return this.access_m8mn37$(IsoMutableCollection$removeAll$lambda(elements));
  };
  function IsoMutableCollection$retainAll$lambda(closure$elements) {
    return function (it) {
      return it.retainAll_brywnq$(closure$elements);
    };
  }
  IsoMutableCollection.prototype.retainAll_brywnq$ = function (elements) {
    return this.access_m8mn37$(IsoMutableCollection$retainAll$lambda(elements));
  };
  IsoMutableCollection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsoMutableCollection',
    interfaces: [MutableCollection, IsolateState]
  };
  function IsoMutableCollection_init(stateRunner, producer, $this) {
    if (stateRunner === void 0)
      stateRunner = null;
    $this = $this || Object.create(IsoMutableCollection.prototype);
    IsoMutableCollection.call($this, createState(stateRunner, producer));
    return $this;
  }
  function IsoMutableIterator(stateHolder) {
    IsolateState.call(this, stateHolder);
  }
  function IsoMutableIterator$hasNext$lambda(it) {
    return it.hasNext();
  }
  IsoMutableIterator.prototype.hasNext = function () {
    return this.access_m8mn37$(IsoMutableIterator$hasNext$lambda);
  };
  function IsoMutableIterator$next$lambda(it) {
    return it.next();
  }
  IsoMutableIterator.prototype.next = function () {
    return this.access_m8mn37$(IsoMutableIterator$next$lambda);
  };
  function IsoMutableIterator$remove$lambda(it) {
    it.remove();
    return Unit;
  }
  IsoMutableIterator.prototype.remove = function () {
    this.access_m8mn37$(IsoMutableIterator$remove$lambda);
  };
  IsoMutableIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsoMutableIterator',
    interfaces: [MutableIterator, IsolateState]
  };
  function IsoMutableList$asAccess$lambda(closure$block) {
    return function (it) {
      var tmp$;
      return closure$block(Kotlin.isType(tmp$ = it, MutableList) ? tmp$ : throwCCE());
    };
  }
  function IsoMutableList(stateHolder) {
    IsoMutableCollection.call(this, stateHolder);
  }
  function IsoMutableList$get$lambda(closure$index) {
    return function (it) {
      return it.get_za3lpa$(closure$index);
    };
  }
  IsoMutableList.prototype.get_za3lpa$ = function (index) {
    return this.access_m8mn37$(IsoMutableList$asAccess$lambda(IsoMutableList$get$lambda(index)));
  };
  function IsoMutableList$indexOf$lambda(closure$element) {
    return function (it) {
      return it.indexOf_11rb$(closure$element);
    };
  }
  IsoMutableList.prototype.indexOf_11rb$ = function (element) {
    return this.access_m8mn37$(IsoMutableList$asAccess$lambda(IsoMutableList$indexOf$lambda(element)));
  };
  function IsoMutableList$lastIndexOf$lambda(closure$element) {
    return function (it) {
      return it.lastIndexOf_11rb$(closure$element);
    };
  }
  IsoMutableList.prototype.lastIndexOf_11rb$ = function (element) {
    return this.access_m8mn37$(IsoMutableList$asAccess$lambda(IsoMutableList$lastIndexOf$lambda(element)));
  };
  function IsoMutableList$add$lambda(closure$index, closure$element) {
    return function (it) {
      it.add_wxm5ur$(closure$index, closure$element);
      return Unit;
    };
  }
  IsoMutableList.prototype.add_wxm5ur$ = function (index, element) {
    this.access_m8mn37$(IsoMutableList$asAccess$lambda(IsoMutableList$add$lambda(index, element)));
  };
  function IsoMutableList$addAll$lambda(closure$index, closure$elements) {
    return function (it) {
      return it.addAll_u57x28$(closure$index, closure$elements);
    };
  }
  IsoMutableList.prototype.addAll_u57x28$ = function (index, elements) {
    return this.access_m8mn37$(IsoMutableList$asAccess$lambda(IsoMutableList$addAll$lambda(index, elements)));
  };
  function IsoMutableList$listIterator$lambda(this$IsoMutableList) {
    return function (it) {
      return new IsoMutableListIterator(this$IsoMutableList.fork_issdgt$(it.listIterator()));
    };
  }
  IsoMutableList.prototype.listIterator = function () {
    return this.access_m8mn37$(IsoMutableList$asAccess$lambda(IsoMutableList$listIterator$lambda(this)));
  };
  function IsoMutableList$listIterator$lambda_0(closure$index, this$IsoMutableList) {
    return function (it) {
      return new IsoMutableListIterator(this$IsoMutableList.fork_issdgt$(it.listIterator_za3lpa$(closure$index)));
    };
  }
  IsoMutableList.prototype.listIterator_za3lpa$ = function (index) {
    return this.access_m8mn37$(IsoMutableList$asAccess$lambda(IsoMutableList$listIterator$lambda_0(index, this)));
  };
  function IsoMutableList$removeAt$lambda(closure$index) {
    return function (it) {
      return it.removeAt_za3lpa$(closure$index);
    };
  }
  IsoMutableList.prototype.removeAt_za3lpa$ = function (index) {
    return this.access_m8mn37$(IsoMutableList$asAccess$lambda(IsoMutableList$removeAt$lambda(index)));
  };
  function IsoMutableList$set$lambda(closure$index, closure$element) {
    return function (it) {
      return it.set_wxm5ur$(closure$index, closure$element);
    };
  }
  IsoMutableList.prototype.set_wxm5ur$ = function (index, element) {
    return this.access_m8mn37$(IsoMutableList$asAccess$lambda(IsoMutableList$set$lambda(index, element)));
  };
  function IsoMutableList$subList$lambda(closure$fromIndex, closure$toIndex, this$IsoMutableList) {
    return function (it) {
      return new IsoMutableList(this$IsoMutableList.fork_issdgt$(it.subList_vux9f0$(closure$fromIndex, closure$toIndex)));
    };
  }
  IsoMutableList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.access_m8mn37$(IsoMutableList$asAccess$lambda(IsoMutableList$subList$lambda(fromIndex, toIndex, this)));
  };
  IsoMutableList.prototype.asAccess_41l0ot$_0 = wrapFunction(function () {
    function IsoMutableList$asAccess$lambda(closure$block) {
      return function (it) {
        var tmp$;
        return closure$block(Kotlin.isType(tmp$ = it, MutableList) ? tmp$ : throwCCE());
      };
    }
    return function (block) {
      return this.access_m8mn37$(IsoMutableList$asAccess$lambda(block));
    };
  });
  IsoMutableList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsoMutableList',
    interfaces: [MutableList, IsoMutableCollection]
  };
  function IsoMutableList_init(stateRunner, producer, $this) {
    if (stateRunner === void 0)
      stateRunner = null;
    if (producer === void 0)
      producer = IsoMutableList_init$lambda;
    $this = $this || Object.create(IsoMutableList.prototype);
    IsoMutableList.call($this, createState(stateRunner, producer));
    return $this;
  }
  function IsoMutableList_init$lambda() {
    return ArrayList_init();
  }
  function IsoMutableListIterator(stateHolder) {
    IsolateState.call(this, stateHolder);
  }
  function IsoMutableListIterator$hasPrevious$lambda(it) {
    return it.hasPrevious();
  }
  IsoMutableListIterator.prototype.hasPrevious = function () {
    return this.access_m8mn37$(IsoMutableListIterator$hasPrevious$lambda);
  };
  function IsoMutableListIterator$nextIndex$lambda(it) {
    return it.nextIndex();
  }
  IsoMutableListIterator.prototype.nextIndex = function () {
    return this.access_m8mn37$(IsoMutableListIterator$nextIndex$lambda);
  };
  function IsoMutableListIterator$previous$lambda(it) {
    return it.previous();
  }
  IsoMutableListIterator.prototype.previous = function () {
    return this.access_m8mn37$(IsoMutableListIterator$previous$lambda);
  };
  function IsoMutableListIterator$previousIndex$lambda(it) {
    return it.previousIndex();
  }
  IsoMutableListIterator.prototype.previousIndex = function () {
    return this.access_m8mn37$(IsoMutableListIterator$previousIndex$lambda);
  };
  function IsoMutableListIterator$add$lambda(closure$element) {
    return function (it) {
      it.add_11rb$(closure$element);
      return Unit;
    };
  }
  IsoMutableListIterator.prototype.add_11rb$ = function (element) {
    this.access_m8mn37$(IsoMutableListIterator$add$lambda(element));
  };
  function IsoMutableListIterator$hasNext$lambda(it) {
    return it.hasNext();
  }
  IsoMutableListIterator.prototype.hasNext = function () {
    return this.access_m8mn37$(IsoMutableListIterator$hasNext$lambda);
  };
  function IsoMutableListIterator$next$lambda(it) {
    return it.next();
  }
  IsoMutableListIterator.prototype.next = function () {
    return this.access_m8mn37$(IsoMutableListIterator$next$lambda);
  };
  function IsoMutableListIterator$set$lambda(closure$element) {
    return function (it) {
      it.set_11rb$(closure$element);
      return Unit;
    };
  }
  IsoMutableListIterator.prototype.set_11rb$ = function (element) {
    this.access_m8mn37$(IsoMutableListIterator$set$lambda(element));
  };
  function IsoMutableListIterator$remove$lambda(it) {
    it.remove();
    return Unit;
  }
  IsoMutableListIterator.prototype.remove = function () {
    this.access_m8mn37$(IsoMutableListIterator$remove$lambda);
  };
  IsoMutableListIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsoMutableListIterator',
    interfaces: [MutableListIterator, IsolateState]
  };
  function IsoMutableMap(stateRunner, producer) {
    if (stateRunner === void 0)
      stateRunner = null;
    if (producer === void 0)
      producer = IsoMutableMap_init$lambda;
    IsolateState.call(this, createState(stateRunner, producer));
  }
  function IsoMutableMap$get_IsoMutableMap$size$lambda(it) {
    return it.size;
  }
  Object.defineProperty(IsoMutableMap.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.access_m8mn37$(IsoMutableMap$get_IsoMutableMap$size$lambda);
    }
  });
  function IsoMutableMap$containsKey$lambda(closure$key) {
    return function (it) {
      return it.containsKey_11rb$(closure$key);
    };
  }
  IsoMutableMap.prototype.containsKey_11rb$ = function (key) {
    return this.access_m8mn37$(IsoMutableMap$containsKey$lambda(key));
  };
  function IsoMutableMap$containsValue$lambda(closure$value) {
    return function (it) {
      return it.containsValue_11rc$(closure$value);
    };
  }
  IsoMutableMap.prototype.containsValue_11rc$ = function (value) {
    return this.access_m8mn37$(IsoMutableMap$containsValue$lambda(value));
  };
  function IsoMutableMap$get$lambda(closure$key) {
    return function (it) {
      return it.get_11rb$(closure$key);
    };
  }
  IsoMutableMap.prototype.get_11rb$ = function (key) {
    return this.access_m8mn37$(IsoMutableMap$get$lambda(key));
  };
  function IsoMutableMap$isEmpty$lambda(it) {
    return it.isEmpty();
  }
  IsoMutableMap.prototype.isEmpty = function () {
    return this.access_m8mn37$(IsoMutableMap$isEmpty$lambda);
  };
  Object.defineProperty(IsoMutableMap.prototype, 'entries', {
    configurable: true,
    get: function () {
      throw UnsupportedOperationException_init("Can't leak mutable reference");
    }
  });
  function IsoMutableMap$get_IsoMutableMap$keys$lambda(this$IsoMutableMap) {
    return function (it) {
      return new IsoMutableSet(this$IsoMutableMap.fork_issdgt$(it.keys));
    };
  }
  Object.defineProperty(IsoMutableMap.prototype, 'keys', {
    configurable: true,
    get: function () {
      return this.access_m8mn37$(IsoMutableMap$get_IsoMutableMap$keys$lambda(this));
    }
  });
  function IsoMutableMap$get_IsoMutableMap$values$lambda(this$IsoMutableMap) {
    return function (it) {
      return new IsoMutableCollection(this$IsoMutableMap.fork_issdgt$(it.values));
    };
  }
  Object.defineProperty(IsoMutableMap.prototype, 'values', {
    configurable: true,
    get: function () {
      return this.access_m8mn37$(IsoMutableMap$get_IsoMutableMap$values$lambda(this));
    }
  });
  function IsoMutableMap$clear$lambda(it) {
    it.clear();
    return Unit;
  }
  IsoMutableMap.prototype.clear = function () {
    this.access_m8mn37$(IsoMutableMap$clear$lambda);
  };
  function IsoMutableMap$put$lambda(closure$key, closure$value) {
    return function (it) {
      return it.put_xwzc9p$(closure$key, closure$value);
    };
  }
  IsoMutableMap.prototype.put_xwzc9p$ = function (key, value) {
    return this.access_m8mn37$(IsoMutableMap$put$lambda(key, value));
  };
  function IsoMutableMap$putAll$lambda(closure$from) {
    return function (it) {
      it.putAll_a2k3zr$(closure$from);
      return Unit;
    };
  }
  IsoMutableMap.prototype.putAll_a2k3zr$ = function (from) {
    this.access_m8mn37$(IsoMutableMap$putAll$lambda(from));
  };
  function IsoMutableMap$remove$lambda(closure$key) {
    return function (it) {
      return it.remove_11rb$(closure$key);
    };
  }
  IsoMutableMap.prototype.remove_11rb$ = function (key) {
    return this.access_m8mn37$(IsoMutableMap$remove$lambda(key));
  };
  function IsoMutableMap$equals$lambda(closure$other) {
    return function (it) {
      return equals(it, closure$other);
    };
  }
  IsoMutableMap.prototype.equals = function (other) {
    return this.access_m8mn37$(IsoMutableMap$equals$lambda(other));
  };
  function IsoMutableMap$hashCode$lambda(it) {
    return hashCode(it);
  }
  IsoMutableMap.prototype.hashCode = function () {
    return this.access_m8mn37$(IsoMutableMap$hashCode$lambda);
  };
  function IsoMutableMap_init$lambda() {
    return LinkedHashMap_init();
  }
  IsoMutableMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsoMutableMap',
    interfaces: [MutableMap, IsolateState]
  };
  function IsoMutableSet(stateHolder) {
    IsoMutableCollection.call(this, stateHolder);
  }
  IsoMutableSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsoMutableSet',
    interfaces: [MutableSet, IsoMutableCollection]
  };
  function IsoMutableSet_init(stateRunner, producer, $this) {
    if (stateRunner === void 0)
      stateRunner = null;
    if (producer === void 0)
      producer = IsoMutableSet_init$lambda;
    $this = $this || Object.create(IsoMutableSet.prototype);
    IsoMutableSet.call($this, createState(stateRunner, producer));
    return $this;
  }
  function IsoMutableSet_init$lambda() {
    return LinkedHashSet_init();
  }
  var package$co = _.co || (_.co = {});
  var package$touchlab = package$co.touchlab || (package$co.touchlab = {});
  var package$stately = package$touchlab.stately || (package$touchlab.stately = {});
  var package$collections = package$stately.collections || (package$stately.collections = {});
  package$collections.sharedMutableListOf_287e2$ = sharedMutableListOf;
  package$collections.sharedMutableListOf_i5x0yv$ = sharedMutableListOf_0;
  package$collections.sharedMutableSetOf_287e2$ = sharedMutableSetOf;
  package$collections.sharedMutableSetOf_i5x0yv$ = sharedMutableSetOf_0;
  package$collections.sharedMutableMapOf_q3lmfv$ = sharedMutableMapOf;
  package$collections.sharedMutableMapOf_qfcya0$ = sharedMutableMapOf_0;
  $$importsForInline$$['Stately-stately-iso-collections-js-legacy'] = _;
  package$collections.IsoArrayDeque_init_mwx6qy$ = IsoArrayDeque_init;
  package$collections.IsoArrayDeque = IsoArrayDeque;
  package$collections.IsoMutableCollection_init_hepryh$ = IsoMutableCollection_init;
  package$collections.IsoMutableCollection = IsoMutableCollection;
  package$collections.IsoMutableIterator = IsoMutableIterator;
  package$collections.IsoMutableList_init_7yj01j$ = IsoMutableList_init;
  package$collections.IsoMutableList = IsoMutableList;
  package$collections.IsoMutableListIterator = IsoMutableListIterator;
  package$collections.IsoMutableMap = IsoMutableMap;
  package$collections.IsoMutableSet_init_dpqenz$ = IsoMutableSet_init;
  package$collections.IsoMutableSet = IsoMutableSet;
  Kotlin.defineModule('Stately-stately-iso-collections-js-legacy', _);
  return _;
}));

//# sourceMappingURL=Stately-stately-iso-collections-js-legacy.js.map
