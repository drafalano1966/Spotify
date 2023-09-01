(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'fuzzywuzzy-jsLegacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'fuzzywuzzy-jsLegacy'.");
    }root['fuzzywuzzy-jsLegacy'] = factory(typeof this['fuzzywuzzy-jsLegacy'] === 'undefined' ? {} : this['fuzzywuzzy-jsLegacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var requireNoNulls = Kotlin.kotlin.collections.requireNoNulls_9b7vla$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_emfgvx$;
  var AssertionError_init = Kotlin.kotlin.AssertionError_init;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var maxOrNull = Kotlin.kotlin.collections.maxOrNull_exjks8$;
  var sortedDescending = Kotlin.kotlin.collections.sortedDescending_exjks8$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var copyOf = Kotlin.kotlin.collections.copyOf_8ujjk8$;
  var equals = Kotlin.equals;
  var copyOfRange = Kotlin.kotlin.collections.copyOfRange_5f8l3u$;
  var throwCCE = Kotlin.throwCCE;
  var Collection = Kotlin.kotlin.collections.Collection;
  var Array_0 = Array;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var unboxChar = Kotlin.unboxChar;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_mqih57$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var take = Kotlin.kotlin.collections.take_ba2ldo$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var numberToInt = Kotlin.numberToInt;
  var Math_0 = Math;
  var toString = Kotlin.toString;
  var Comparable = Kotlin.kotlin.Comparable;
  var maxOrNull_0 = Kotlin.kotlin.collections.maxOrNull_l63kqw$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  RatioAlgorithm.prototype = Object.create(BasicAlgorithm.prototype);
  RatioAlgorithm.prototype.constructor = RatioAlgorithm;
  TokenSet.prototype = Object.create(RatioAlgorithm.prototype);
  TokenSet.prototype.constructor = TokenSet;
  TokenSort.prototype = Object.create(RatioAlgorithm.prototype);
  TokenSort.prototype.constructor = TokenSort;
  WeightedRatio.prototype = Object.create(BasicAlgorithm.prototype);
  WeightedRatio.prototype.constructor = WeightedRatio;
  EditType.prototype = Object.create(Enum.prototype);
  EditType.prototype.constructor = EditType;
  function Ratio() {
  }
  Ratio.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Ratio',
    interfaces: [Applicable]
  };
  function ToStringFunction() {
    ToStringFunction$Companion_getInstance();
  }
  function ToStringFunction$Companion() {
    ToStringFunction$Companion_instance = this;
    this.NO_PROCESS = new ToStringFunction$Companion$NO_PROCESS$ObjectLiteral();
  }
  function ToStringFunction$Companion$NO_PROCESS$ObjectLiteral() {
  }
  ToStringFunction$Companion$NO_PROCESS$ObjectLiteral.prototype.apply_11rb$ = function (item) {
    return item;
  };
  ToStringFunction$Companion$NO_PROCESS$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ToStringFunction]
  };
  ToStringFunction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ToStringFunction$Companion_instance = null;
  function ToStringFunction$Companion_getInstance() {
    if (ToStringFunction$Companion_instance === null) {
      new ToStringFunction$Companion();
    }return ToStringFunction$Companion_instance;
  }
  ToStringFunction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ToStringFunction',
    interfaces: []
  };
  function Applicable() {
  }
  Applicable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Applicable',
    interfaces: []
  };
  function DiffUtils() {
    DiffUtils_instance = this;
  }
  DiffUtils.prototype.getEditOps_1 = function (s1, s2) {
    return this.getEditOps_0(s1.length, s1, s2.length, s2);
  };
  DiffUtils.prototype.getEditOps_0 = function (len1, s1, len2, s2) {
    var tmp$, tmp$_0, tmp$_1;
    var len1Copy = len1;
    var len2Copy = len2;
    var len1o = 0;
    var i = 0;
    var p1 = 0;
    var p2 = 0;
    while (len1Copy > 0 && len2Copy > 0 && s1.charCodeAt(p1) === s2.charCodeAt(p2)) {
      len1Copy = len1Copy - 1 | 0;
      len2Copy = len2Copy - 1 | 0;
      p1 = p1 + 1 | 0;
      p2 = p2 + 1 | 0;
      len1o = len1o + 1 | 0;
    }
    var len2o = len1o;
    while (len1Copy > 0 && len2Copy > 0 && s1.charCodeAt(p1 + len1Copy - 1 | 0) === s2.charCodeAt(p2 + len2Copy - 1 | 0)) {
      len1Copy = len1Copy - 1 | 0;
      len2Copy = len2Copy - 1 | 0;
    }
    len1Copy = len1Copy + 1 | 0;
    len2Copy = len2Copy + 1 | 0;
    var matrix = new Int32Array(Kotlin.imul(len2Copy, len1Copy));
    while (i < len2Copy) {
      matrix[i] = i;
      i = i + 1 | 0;
    }
    i = 1;
    while (i < len1Copy) {
      matrix[Kotlin.imul(len2Copy, i)] = i;
      i = i + 1 | 0;
    }
    i = 1;
    while (i < len1Copy) {
      var ptrPrev = Kotlin.imul(i - 1 | 0, len2Copy);
      var ptrC = Kotlin.imul(i, len2Copy);
      var ptrEnd = ptrC + len2Copy - 1 | 0;
      var char1 = s1.charCodeAt(p1 + i - 1 | 0);
      var ptrChar2 = p2;
      var x = i;
      ptrC = ptrC + 1 | 0;
      while (ptrC <= ptrEnd) {
        var c3 = matrix[tmp$ = ptrPrev, ptrPrev = tmp$ + 1 | 0, tmp$] + (char1 !== s2.charCodeAt((tmp$_0 = ptrChar2, ptrChar2 = tmp$_0 + 1 | 0, tmp$_0)) ? 1 : 0) | 0;
        x = x + 1 | 0;
        if (x > c3) {
          x = c3;
        }c3 = matrix[ptrPrev] + 1 | 0;
        if (x > c3) {
          x = c3;
        }matrix[tmp$_1 = ptrC, ptrC = tmp$_1 + 1 | 0, tmp$_1] = x;
      }
      i = i + 1 | 0;
    }
    return this.editOpsFromCostMatrix_0(len1Copy, s1, p1, len1o, len2Copy, s2, p2, len2o, matrix);
  };
  DiffUtils.prototype.editOpsFromCostMatrix_0 = function (len1, c1, p1, o1, len2, c2, p2, o2, matrix) {
    var i = len1 - 1 | 0;
    var j = len2 - 1 | 0;
    var pos = matrix[Kotlin.imul(len1, len2) - 1 | 0];
    var ptr = Kotlin.imul(len1, len2) - 1 | 0;
    var dir = 0;
    var ops = Kotlin.newArray(pos, null);
    while (i > 0 || j > 0) {
      if (dir < 0 && j !== 0 && matrix[ptr] === (matrix[ptr - 1 | 0] + 1 | 0)) {
        var eop = new EditOp();
        pos = pos - 1 | 0;
        ops[pos] = eop;
        eop.type = EditType$INSERT_getInstance();
        eop.spos = i + o1 | 0;
        eop.dpos = (j = j - 1 | 0, j) + o2 | 0;
        ptr = ptr - 1 | 0;
        continue;
      }if (dir > 0 && i !== 0 && matrix[ptr] === (matrix[ptr - len2 | 0] + 1 | 0)) {
        var eop_0 = new EditOp();
        pos = pos - 1 | 0;
        ops[pos] = eop_0;
        eop_0.type = EditType$DELETE_getInstance();
        eop_0.spos = (i = i - 1 | 0, i) + o1 | 0;
        eop_0.dpos = j + o2 | 0;
        ptr = ptr - len2 | 0;
        continue;
      }if (i !== 0 && j !== 0 && matrix[ptr] === matrix[ptr - len2 - 1 | 0] && c1.charCodeAt(p1 + i - 1 | 0) === c2.charCodeAt(p2 + j - 1 | 0)) {
        i = i - 1 | 0;
        j = j - 1 | 0;
        ptr = ptr - (len2 + 1) | 0;
        dir = 0;
        continue;
      }if (i !== 0 && j !== 0 && matrix[ptr] === (matrix[ptr - len2 - 1 | 0] + 1 | 0)) {
        pos = pos - 1 | 0;
        var eop_1 = new EditOp();
        ops[pos] = eop_1;
        eop_1.type = EditType$REPLACE_getInstance();
        eop_1.spos = (i = i - 1 | 0, i) + o1 | 0;
        eop_1.dpos = (j = j - 1 | 0, j) + o2 | 0;
        ptr = ptr - (len2 + 1) | 0;
        dir = 0;
        continue;
      }if (dir === 0 && j !== 0 && matrix[ptr] === (matrix[ptr - 1 | 0] + 1 | 0)) {
        pos = pos - 1 | 0;
        var eop_2 = new EditOp();
        ops[pos] = eop_2;
        eop_2.type = EditType$INSERT_getInstance();
        eop_2.spos = i + o1 | 0;
        eop_2.dpos = (j = j - 1 | 0, j) + o2 | 0;
        ptr = ptr - 1 | 0;
        dir = -1;
        continue;
      }if (dir === 0 && i !== 0 && matrix[ptr] === (matrix[ptr - len2 | 0] + 1 | 0)) {
        pos = pos - 1 | 0;
        var eop_3 = new EditOp();
        ops[pos] = eop_3;
        eop_3.type = EditType$DELETE_getInstance();
        eop_3.spos = (i = i - 1 | 0, i) + o1 | 0;
        eop_3.dpos = j + o2 | 0;
        ptr = ptr - len2 | 0;
        dir = 1;
        continue;
      }assert(false);
    }
    return requireNoNulls(ops);
  };
  DiffUtils.prototype.getMatchingBlocks_puj7f4$ = function (s1, s2) {
    return this.getMatchingBlocks_0(s1.length, s2.length, this.getEditOps_1(s1, s2));
  };
  DiffUtils.prototype.getMatchingBlocks_x5wk5w$ = function (len1, len2, ops) {
    var tmp$;
    var n = ops.length;
    var noOfMB = 0;
    var o = 0;
    var i = n;
    while ((tmp$ = i, i = tmp$ - 1 | 0, tmp$) !== 0) {
      if (ops[o].type === EditType$KEEP_getInstance()) {
        noOfMB = noOfMB + 1 | 0;
        while (i !== 0 && ops[o].type === EditType$KEEP_getInstance()) {
          i = i - 1 | 0;
          o = o + 1 | 0;
        }
        if (i === 0)
          break;
      }o = o + 1 | 0;
    }
    var matchingBlocks = Kotlin.newArray(noOfMB + 1 | 0, null);
    var mb = 0;
    o = 0;
    matchingBlocks[mb] = new MatchingBlock();
    i = n;
    while (i !== 0) {
      if (ops[o].type === EditType$KEEP_getInstance()) {
        ensureNotNull(matchingBlocks[mb]).spos = ops[o].sbeg;
        ensureNotNull(matchingBlocks[mb]).dpos = ops[o].dbeg;
        while (i !== 0 && ops[o].type === EditType$KEEP_getInstance()) {
          i = i - 1 | 0;
          o = o + 1 | 0;
        }
        if (i === 0) {
          ensureNotNull(matchingBlocks[mb]).length = len1 - ensureNotNull(matchingBlocks[mb]).spos | 0;
          mb = mb + 1 | 0;
          break;
        }ensureNotNull(matchingBlocks[mb]).length = ops[o].sbeg - ensureNotNull(matchingBlocks[mb]).spos | 0;
        mb = mb + 1 | 0;
        matchingBlocks[mb] = new MatchingBlock();
      }i = i - 1 | 0;
      o = o + 1 | 0;
    }
    assert(mb === noOfMB);
    var finalBlock = new MatchingBlock();
    finalBlock.spos = len1;
    finalBlock.dpos = len2;
    finalBlock.length = 0;
    matchingBlocks[mb] = finalBlock;
    return matchingBlocks;
  };
  DiffUtils.prototype.getMatchingBlocks_0 = function (len1, len2, ops) {
    var tmp$, tmp$_0;
    var n = ops.length;
    var numberOfMatchingBlocks = 0;
    var spos;
    var dpos;
    var o = 0;
    dpos = 0;
    spos = dpos;
    var type;
    var i = n;
    while (i !== 0) {
      while (ops[o].type === EditType$KEEP_getInstance() && (i = i - 1 | 0, i) !== 0) {
        o = o + 1 | 0;
      }
      if (i === 0)
        break;
      if (spos < ops[o].spos || dpos < ops[o].dpos) {
        numberOfMatchingBlocks = numberOfMatchingBlocks + 1 | 0;
        spos = ops[o].spos;
        dpos = ops[o].dpos;
      }type = ensureNotNull(ops[o].type);
      switch (type.name) {
        case 'REPLACE':
          do {
            spos = spos + 1 | 0;
            dpos = dpos + 1 | 0;
            i = i - 1 | 0;
            o = o + 1 | 0;
          }
           while (i !== 0 && ops[o].type === type && spos === ops[o].spos && dpos === ops[o].dpos);
          break;
        case 'DELETE':
          do {
            spos = spos + 1 | 0;
            i = i - 1 | 0;
            o = o + 1 | 0;
          }
           while (i !== 0 && ops[o].type === type && spos === ops[o].spos && dpos === ops[o].dpos);
          break;
        case 'INSERT':
          do {
            dpos = dpos + 1 | 0;
            i = i - 1 | 0;
            o = o + 1 | 0;
          }
           while (i !== 0 && ops[o].type === type && spos === ops[o].spos && dpos === ops[o].dpos);
          break;
        default:break;
      }
    }
    if (spos < len1 || dpos < len2) {
      numberOfMatchingBlocks = numberOfMatchingBlocks + 1 | 0;
    }var matchingBlocks = Kotlin.newArray(numberOfMatchingBlocks + 1 | 0, null);
    o = 0;
    dpos = 0;
    spos = dpos;
    var mbIndex = 0;
    i = n;
    while (i !== 0) {
      while (ops[o].type === EditType$KEEP_getInstance() && (i = i - 1 | 0, i) !== 0) {
        o = o + 1 | 0;
      }
      if (i === 0)
        break;
      if (spos < ops[o].spos || dpos < ops[o].dpos) {
        var mb = new MatchingBlock();
        mb.spos = spos;
        mb.dpos = dpos;
        mb.length = ops[o].spos - spos | 0;
        spos = ops[o].spos;
        dpos = ops[o].dpos;
        matchingBlocks[tmp$ = mbIndex, mbIndex = tmp$ + 1 | 0, tmp$] = mb;
      }type = ensureNotNull(ops[o].type);
      switch (type.name) {
        case 'REPLACE':
          do {
            spos = spos + 1 | 0;
            dpos = dpos + 1 | 0;
            i = i - 1 | 0;
            o = o + 1 | 0;
          }
           while (i !== 0 && ops[o].type === type && spos === ops[o].spos && dpos === ops[o].dpos);
          break;
        case 'DELETE':
          do {
            spos = spos + 1 | 0;
            i = i - 1 | 0;
            o = o + 1 | 0;
          }
           while (i !== 0 && ops[o].type === type && spos === ops[o].spos && dpos === ops[o].dpos);
          break;
        case 'INSERT':
          do {
            dpos = dpos + 1 | 0;
            i = i - 1 | 0;
            o = o + 1 | 0;
          }
           while (i !== 0 && ops[o].type === type && spos === ops[o].spos && dpos === ops[o].dpos);
          break;
        default:break;
      }
    }
    if (spos < len1 || dpos < len2) {
      assert((len1 - spos | 0) === (len2 - dpos | 0));
      var mb_0 = new MatchingBlock();
      mb_0.spos = spos;
      mb_0.dpos = dpos;
      mb_0.length = len1 - spos | 0;
      matchingBlocks[tmp$_0 = mbIndex, mbIndex = tmp$_0 + 1 | 0, tmp$_0] = mb_0;
    }assert(numberOfMatchingBlocks === mbIndex);
    var finalBlock = new MatchingBlock();
    finalBlock.spos = len1;
    finalBlock.dpos = len2;
    finalBlock.length = 0;
    matchingBlocks[mbIndex] = finalBlock;
    return copyToArray(filterNotNull(matchingBlocks));
  };
  DiffUtils.prototype.editOpsToOpCodes_0 = function (ops, len1, len2) {
    var n = ops.length;
    var noOfBlocks = 0;
    var i;
    var spos;
    var dpos;
    var o = 0;
    var type;
    dpos = 0;
    spos = dpos;
    i = n;
    while (i !== 0) {
      while (ops[o].type === EditType$KEEP_getInstance() && (i = i - 1 | 0, i) !== 0) {
        o = o + 1 | 0;
      }
      if (i === 0)
        break;
      if (spos < ops[o].spos || dpos < ops[o].dpos) {
        noOfBlocks = noOfBlocks + 1 | 0;
        spos = ops[o].spos;
        dpos = ops[o].dpos;
      }noOfBlocks = noOfBlocks + 1 | 0;
      type = ensureNotNull(ops[o].type);
      switch (type.name) {
        case 'REPLACE':
          do {
            spos = spos + 1 | 0;
            dpos = dpos + 1 | 0;
            i = i - 1 | 0;
            o = o + 1 | 0;
          }
           while (i !== 0 && ops[o].type === type && spos === ops[o].spos && dpos === ops[o].dpos);
          break;
        case 'DELETE':
          do {
            spos = spos + 1 | 0;
            i = i - 1 | 0;
            o = o + 1 | 0;
          }
           while (i !== 0 && ops[o].type === type && spos === ops[o].spos && dpos === ops[o].dpos);
          break;
        case 'INSERT':
          do {
            dpos = dpos + 1 | 0;
            i = i - 1 | 0;
            o = o + 1 | 0;
          }
           while (i !== 0 && ops[o].type === type && spos === ops[o].spos && dpos === ops[o].dpos);
          break;
        default:break;
      }
    }
    if (spos < len1 || dpos < len2) {
      noOfBlocks = noOfBlocks + 1 | 0;
    }var opCodes = Kotlin.newArray(noOfBlocks, null);
    o = 0;
    dpos = 0;
    spos = dpos;
    var oIndex = 0;
    i = n;
    while (i !== 0) {
      while (ops[o].type === EditType$KEEP_getInstance() && (i = i - 1 | 0, i) !== 0) {
        o = o + 1 | 0;
      }
      if (i === 0)
        break;
      var oc = new OpCode();
      opCodes[oIndex] = oc;
      oc.sbeg = spos;
      oc.dbeg = dpos;
      if (spos < ops[o].spos || dpos < ops[o].dpos) {
        oc.type = EditType$KEEP_getInstance();
        oc.send = ops[o].spos;
        spos = oc.send;
        oc.dend = ops[o].dpos;
        dpos = oc.dend;
        oIndex = oIndex + 1 | 0;
        var oc2 = new OpCode();
        opCodes[oIndex] = oc2;
        oc2.sbeg = spos;
        oc2.dbeg = dpos;
      }type = ensureNotNull(ops[o].type);
      switch (type.name) {
        case 'REPLACE':
          do {
            spos = spos + 1 | 0;
            dpos = dpos + 1 | 0;
            i = i - 1 | 0;
            o = o + 1 | 0;
          }
           while (i !== 0 && ops[o].type === type && spos === ops[o].spos && dpos === ops[o].dpos);
          break;
        case 'DELETE':
          do {
            spos = spos + 1 | 0;
            i = i - 1 | 0;
            o = o + 1 | 0;
          }
           while (i !== 0 && ops[o].type === type && spos === ops[o].spos && dpos === ops[o].dpos);
          break;
        case 'INSERT':
          do {
            dpos = dpos + 1 | 0;
            i = i - 1 | 0;
            o = o + 1 | 0;
          }
           while (i !== 0 && ops[o].type === type && spos === ops[o].spos && dpos === ops[o].dpos);
          break;
        default:break;
      }
      ensureNotNull(opCodes[oIndex]).type = type;
      ensureNotNull(opCodes[oIndex]).send = spos;
      ensureNotNull(opCodes[oIndex]).dend = dpos;
      oIndex = oIndex + 1 | 0;
    }
    if (spos < len1 || dpos < len2) {
      assert((len1 - spos | 0) === (len2 - dpos | 0));
      if (opCodes[oIndex] == null)
        opCodes[oIndex] = new OpCode();
      ensureNotNull(opCodes[oIndex]).type = EditType$KEEP_getInstance();
      ensureNotNull(opCodes[oIndex]).sbeg = spos;
      ensureNotNull(opCodes[oIndex]).dbeg = dpos;
      ensureNotNull(opCodes[oIndex]).send = len1;
      ensureNotNull(opCodes[oIndex]).dend = len2;
      oIndex = oIndex + 1 | 0;
    }assert(oIndex === noOfBlocks);
    return opCodes;
  };
  DiffUtils.prototype.levEditDistance_rjan26$ = function (s1, s2, xcost) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var i;
    var half;
    var c1 = s1;
    var c2 = s2;
    var str1 = 0;
    var str2 = 0;
    var len1 = s1.length;
    var len2 = s2.length;
    while (len1 > 0 && len2 > 0 && c1.charCodeAt(str1) === c2.charCodeAt(str2)) {
      len1 = len1 - 1 | 0;
      len2 = len2 - 1 | 0;
      str1 = str1 + 1 | 0;
      str2 = str2 + 1 | 0;
    }
    while (len1 > 0 && len2 > 0 && c1.charCodeAt(str1 + len1 - 1 | 0) === c2.charCodeAt(str2 + len2 - 1 | 0)) {
      len1 = len1 - 1 | 0;
      len2 = len2 - 1 | 0;
    }
    if (len1 === 0)
      return len2;
    if (len2 === 0)
      return len1;
    if (len1 > len2) {
      var nx = len1;
      var temp = str1;
      len1 = len2;
      len2 = nx;
      str1 = str2;
      str2 = temp;
      var t = c2;
      c2 = c1;
      c1 = t;
    }if (len1 === 1) {
      if (xcost !== 0) {
        tmp$ = len2 + 1 - (2 * this.memchr_0(c2, str2, c1.charCodeAt(str1), len2) | 0) | 0;
      } else {
        tmp$ = len2 - this.memchr_0(c2, str2, c1.charCodeAt(str1), len2) | 0;
      }
      return tmp$;
    }len1 = len1 + 1 | 0;
    len2 = len2 + 1 | 0;
    half = len1 >> 1;
    var row = new Int32Array(len2);
    var end = len2 - 1 | 0;
    i = 0;
    while (i < (len2 - (xcost !== 0 ? 0 : half) | 0)) {
      row[i] = i;
      i = i + 1 | 0;
    }
    if (xcost !== 0) {
      i = 1;
      while (i < len1) {
        var p = 1;
        var ch1 = c1.charCodeAt(str1 + i - 1 | 0);
        var c2p = str2;
        var D = i;
        var x = i;
        while (p <= end) {
          if (ch1 === c2.charCodeAt((tmp$_0 = c2p, c2p = tmp$_0 + 1 | 0, tmp$_0))) {
            x = (D = D - 1 | 0, D);
          } else {
            x = x + 1 | 0;
          }
          D = row[p];
          D = D + 1 | 0;
          if (x > D)
            x = D;
          row[tmp$_1 = p, p = tmp$_1 + 1 | 0, tmp$_1] = x;
        }
        i = i + 1 | 0;
      }
    } else {
      row[0] = len1 - half - 1 | 0;
      i = 1;
      while (i < len1) {
        var p_0;
        var ch1_0 = c1.charCodeAt(str1 + i - 1 | 0);
        var c2p_0;
        var D_0;
        var x_0;
        if (i >= (len1 - half | 0)) {
          var offset = i - (len1 - half) | 0;
          var c3;
          c2p_0 = str2 + offset | 0;
          p_0 = offset;
          c3 = row[tmp$_2 = p_0, p_0 = tmp$_2 + 1 | 0, tmp$_2] + (ch1_0 !== c2.charCodeAt((tmp$_3 = c2p_0, c2p_0 = tmp$_3 + 1 | 0, tmp$_3)) ? 1 : 0) | 0;
          x_0 = row[p_0];
          x_0 = x_0 + 1 | 0;
          D_0 = x_0;
          if (x_0 > c3) {
            x_0 = c3;
          }row[tmp$_4 = p_0, p_0 = tmp$_4 + 1 | 0, tmp$_4] = x_0;
        } else {
          p_0 = 1;
          c2p_0 = str2;
          x_0 = i;
          D_0 = x_0;
        }
        if (i <= (half + 1 | 0))
          end = len2 + i - half - 2 | 0;
        while (p_0 <= end) {
          var c3_0 = (D_0 = D_0 - 1 | 0, D_0) + (ch1_0 !== c2.charCodeAt((tmp$_5 = c2p_0, c2p_0 = tmp$_5 + 1 | 0, tmp$_5)) ? 1 : 0) | 0;
          x_0 = x_0 + 1 | 0;
          if (x_0 > c3_0) {
            x_0 = c3_0;
          }D_0 = row[p_0];
          D_0 = D_0 + 1 | 0;
          if (x_0 > D_0)
            x_0 = D_0;
          row[tmp$_6 = p_0, p_0 = tmp$_6 + 1 | 0, tmp$_6] = x_0;
        }
        if (i <= half) {
          var c3_1 = (D_0 = D_0 - 1 | 0, D_0) + (ch1_0 !== c2.charCodeAt(c2p_0) ? 1 : 0) | 0;
          x_0 = x_0 + 1 | 0;
          if (x_0 > c3_1) {
            x_0 = c3_1;
          }row[p_0] = x_0;
        }i = i + 1 | 0;
      }
    }
    i = row[end];
    return i;
  };
  DiffUtils.prototype.memchr_0 = function (haystack, offset, needle, num) {
    var numCopy = num;
    if (numCopy !== 0) {
      var p = 0;
      do {
        if (haystack.charCodeAt(offset + p | 0) === needle)
          return 1;
        p = p + 1 | 0;
      }
       while ((numCopy = numCopy - 1 | 0, numCopy) !== 0);
    }return 0;
  };
  DiffUtils.prototype.getRatio_puj7f4$ = function (s1, s2) {
    var len1 = s1.length;
    var len2 = s2.length;
    var lensum = len1 + len2 | 0;
    var editDistance = this.levEditDistance_rjan26$(s1, s2, 1);
    return (lensum - editDistance | 0) / lensum;
  };
  DiffUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DiffUtils',
    interfaces: []
  };
  var DiffUtils_instance = null;
  function DiffUtils_getInstance() {
    if (DiffUtils_instance === null) {
      new DiffUtils();
    }return DiffUtils_instance;
  }
  function assert(assertion) {
    if (!assertion)
      throw AssertionError_init();
  }
  function Extractor(cutoff) {
    if (cutoff === void 0)
      cutoff = 0;
    this.cutoff_0 = cutoff;
  }
  Extractor.prototype.with_za3lpa$ = function (cutoff) {
    this.cutoff_0 = cutoff;
    return this;
  };
  Extractor.prototype.extractWithoutOrder_lwkn38$ = function (query, choices, func) {
    var yields = ArrayList_init();
    var index = 0;
    for (var tmp$ = choices.iterator(); tmp$.hasNext(); ++index) {
      var s = tmp$.next();
      var score = func.apply_puj7f4$(query, s);
      if (score >= this.cutoff_0) {
        yields.add_11rb$(new ExtractedResult(s, score, index));
      }}
    return yields;
  };
  Extractor.prototype.extractWithoutOrder_qwxkbm$ = function (query, choices, toStringFunction, func) {
    var yields = ArrayList_init();
    var index = 0;
    for (var tmp$ = choices.iterator(); tmp$.hasNext(); ++index) {
      var t = tmp$.next();
      var s = toStringFunction.apply_11rb$(t);
      var score = func.apply_puj7f4$(query, s);
      if (score >= this.cutoff_0) {
        yields.add_11rb$(new BoundExtractedResult(t, s, score, index));
      }}
    return yields;
  };
  Extractor.prototype.extractOne_lwkn38$ = function (query, choices, func) {
    var extracted = this.extractWithoutOrder_lwkn38$(query, choices, func);
    return ensureNotNull(maxOrNull(extracted));
  };
  Extractor.prototype.extractOne_qwxkbm$ = function (query, choices, toStringFunction, func) {
    var extracted = this.extractWithoutOrder_qwxkbm$(query, choices, toStringFunction, func);
    return ensureNotNull(maxOrNull(extracted));
  };
  Extractor.prototype.extractTop_lwkn38$ = function (query, choices, func) {
    var best = this.extractWithoutOrder_lwkn38$(query, choices, func);
    return sortedDescending(best);
  };
  Extractor.prototype.extractTop_qwxkbm$ = function (query, choices, toStringFunction, func) {
    var best = this.extractWithoutOrder_qwxkbm$(query, choices, toStringFunction, func);
    return sortedDescending(best);
  };
  Extractor.prototype.extractTop_69cpv6$ = function (query, choices, func, limit) {
    var best = this.extractWithoutOrder_lwkn38$(query, choices, func);
    var results = Utils_getInstance().findTopKHeap_sv56cl$(best, limit);
    return sortedDescending(results);
  };
  Extractor.prototype.extractTop_vd7fuk$ = function (query, choices, toStringFunction, func, limit) {
    var best = this.extractWithoutOrder_qwxkbm$(query, choices, toStringFunction, func);
    var results = Utils_getInstance().findTopKHeap_sv56cl$(best, limit);
    return sortedDescending(results);
  };
  Extractor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Extractor',
    interfaces: []
  };
  function FuzzySearch() {
    FuzzySearch_instance = this;
  }
  FuzzySearch.prototype.ratio_puj7f4$ = function (s1, s2) {
    return (new SimpleRatio()).apply_puj7f4$(s1, s2);
  };
  FuzzySearch.prototype.ratio_5u6rzm$ = function (s1, s2, stringFunction) {
    return (new SimpleRatio()).apply_5u6rzm$(s1, s2, stringFunction);
  };
  FuzzySearch.prototype.partialRatio_puj7f4$ = function (s1, s2) {
    return (new PartialRatio()).apply_puj7f4$(s1, s2);
  };
  FuzzySearch.prototype.partialRatio_5u6rzm$ = function (s1, s2, stringFunction) {
    return (new PartialRatio()).apply_5u6rzm$(s1, s2, stringFunction);
  };
  FuzzySearch.prototype.tokenSortPartialRatio_puj7f4$ = function (s1, s2) {
    return (new TokenSort()).apply_rre7kr$(s1, s2, new PartialRatio());
  };
  FuzzySearch.prototype.tokenSortPartialRatio_5u6rzm$ = function (s1, s2, stringFunction) {
    return (new TokenSort()).apply_b4i2pv$(s1, s2, new PartialRatio(), stringFunction);
  };
  FuzzySearch.prototype.tokenSortRatio_puj7f4$ = function (s1, s2) {
    return (new TokenSort()).apply_rre7kr$(s1, s2, new SimpleRatio());
  };
  FuzzySearch.prototype.tokenSortRatio_5u6rzm$ = function (s1, s2, stringFunction) {
    return (new TokenSort()).apply_b4i2pv$(s1, s2, new SimpleRatio(), stringFunction);
  };
  FuzzySearch.prototype.tokenSetRatio_puj7f4$ = function (s1, s2) {
    return (new TokenSet()).apply_rre7kr$(s1, s2, new SimpleRatio());
  };
  FuzzySearch.prototype.tokenSetRatio_5u6rzm$ = function (s1, s2, stringFunction) {
    return (new TokenSet()).apply_b4i2pv$(s1, s2, new SimpleRatio(), stringFunction);
  };
  FuzzySearch.prototype.tokenSetPartialRatio_puj7f4$ = function (s1, s2) {
    return (new TokenSet()).apply_rre7kr$(s1, s2, new PartialRatio());
  };
  FuzzySearch.prototype.tokenSetPartialRatio_5u6rzm$ = function (s1, s2, stringFunction) {
    return (new TokenSet()).apply_b4i2pv$(s1, s2, new PartialRatio(), stringFunction);
  };
  FuzzySearch.prototype.weightedRatio_puj7f4$ = function (s1, s2) {
    return (new WeightedRatio()).apply_puj7f4$(s1, s2);
  };
  FuzzySearch.prototype.weightedRatio_5u6rzm$ = function (s1, s2, stringFunction) {
    return (new WeightedRatio()).apply_5u6rzm$(s1, s2, stringFunction);
  };
  FuzzySearch.prototype.extractTop_vlitss$ = function (query, choices, func, limit, cutoff) {
    var extractor = new Extractor(cutoff);
    return extractor.extractTop_69cpv6$(query, choices, func, limit);
  };
  FuzzySearch.prototype.extractTop_7e25dx$ = function (query, choices, limit, cutoff) {
    var extractor = new Extractor(cutoff);
    return extractor.extractTop_69cpv6$(query, choices, new WeightedRatio(), limit);
  };
  FuzzySearch.prototype.extractTop_69cpv6$ = function (query, choices, func, limit) {
    var extractor = new Extractor();
    return extractor.extractTop_69cpv6$(query, choices, func, limit);
  };
  FuzzySearch.prototype.extractTop_4phviv$ = function (query, choices, limit) {
    var extractor = new Extractor();
    return extractor.extractTop_69cpv6$(query, choices, new WeightedRatio(), limit);
  };
  FuzzySearch.prototype.extractSorted_lwkn38$ = function (query, choices, func) {
    var extractor = new Extractor();
    return extractor.extractTop_lwkn38$(query, choices, func);
  };
  FuzzySearch.prototype.extractSorted_69cpv6$ = function (query, choices, func, cutoff) {
    var extractor = new Extractor(cutoff);
    return extractor.extractTop_lwkn38$(query, choices, func);
  };
  FuzzySearch.prototype.extractSorted_g6me9n$ = function (query, choices) {
    var extractor = new Extractor();
    return extractor.extractTop_lwkn38$(query, choices, new WeightedRatio());
  };
  FuzzySearch.prototype.extractSorted_4phviv$ = function (query, choices, cutoff) {
    var extractor = new Extractor(cutoff);
    return extractor.extractTop_lwkn38$(query, choices, new WeightedRatio());
  };
  FuzzySearch.prototype.extractAll_lwkn38$ = function (query, choices, func) {
    var extractor = new Extractor();
    return extractor.extractWithoutOrder_lwkn38$(query, choices, func);
  };
  FuzzySearch.prototype.extractAll_69cpv6$ = function (query, choices, func, cutoff) {
    var extractor = new Extractor(cutoff);
    return extractor.extractWithoutOrder_lwkn38$(query, choices, func);
  };
  FuzzySearch.prototype.extractAll_g6me9n$ = function (query, choices) {
    var extractor = new Extractor();
    return extractor.extractWithoutOrder_lwkn38$(query, choices, new WeightedRatio());
  };
  FuzzySearch.prototype.extractAll_4phviv$ = function (query, choices, cutoff) {
    var extractor = new Extractor(cutoff);
    return extractor.extractWithoutOrder_lwkn38$(query, choices, new WeightedRatio());
  };
  FuzzySearch.prototype.extractOne_lwkn38$ = function (query, choices, func) {
    var extractor = new Extractor();
    return extractor.extractOne_lwkn38$(query, choices, func);
  };
  FuzzySearch.prototype.extractOne_g6me9n$ = function (query, choices) {
    var extractor = new Extractor();
    return extractor.extractOne_lwkn38$(query, choices, new WeightedRatio());
  };
  FuzzySearch.prototype.extractTop_5gx5pa$ = function (query, choices, toStringFunction, func, limit, cutoff) {
    var extractor = new Extractor(cutoff);
    return extractor.extractTop_vd7fuk$(query, choices, toStringFunction, func, limit);
  };
  FuzzySearch.prototype.extractTop_5xyyh3$ = function (query, choices, toStringFunction, limit, cutoff) {
    var extractor = new Extractor(cutoff);
    return extractor.extractTop_vd7fuk$(query, choices, toStringFunction, new WeightedRatio(), limit);
  };
  FuzzySearch.prototype.extractTop_vd7fuk$ = function (query, choices, toStringFunction, func, limit) {
    var extractor = new Extractor();
    return extractor.extractTop_vd7fuk$(query, choices, toStringFunction, func, limit);
  };
  FuzzySearch.prototype.extractTop_li2wcl$ = function (query, choices, toStringFunction, limit) {
    var extractor = new Extractor();
    return extractor.extractTop_vd7fuk$(query, choices, toStringFunction, new WeightedRatio(), limit);
  };
  FuzzySearch.prototype.extractSorted_qwxkbm$ = function (query, choices, toStringFunction, func) {
    var extractor = new Extractor();
    return extractor.extractTop_qwxkbm$(query, choices, toStringFunction, func);
  };
  FuzzySearch.prototype.extractSorted_vd7fuk$ = function (query, choices, toStringFunction, func, cutoff) {
    var extractor = new Extractor(cutoff);
    return extractor.extractTop_qwxkbm$(query, choices, toStringFunction, func);
  };
  FuzzySearch.prototype.extractSorted_3lb88p$ = function (query, choices, toStringFunction) {
    var extractor = new Extractor();
    return extractor.extractTop_qwxkbm$(query, choices, toStringFunction, new WeightedRatio());
  };
  FuzzySearch.prototype.extractSorted_li2wcl$ = function (query, choices, toStringFunction, cutoff) {
    var extractor = new Extractor(cutoff);
    return extractor.extractTop_qwxkbm$(query, choices, toStringFunction, new WeightedRatio());
  };
  FuzzySearch.prototype.extractAll_qwxkbm$ = function (query, choices, toStringFunction, func) {
    var extractor = new Extractor();
    return extractor.extractWithoutOrder_qwxkbm$(query, choices, toStringFunction, func);
  };
  FuzzySearch.prototype.extractAll_vd7fuk$ = function (query, choices, toStringFunction, func, cutoff) {
    var extractor = new Extractor(cutoff);
    return extractor.extractWithoutOrder_qwxkbm$(query, choices, toStringFunction, func);
  };
  FuzzySearch.prototype.extractAll_3lb88p$ = function (query, choices, toStringFunction) {
    var extractor = new Extractor();
    return extractor.extractWithoutOrder_qwxkbm$(query, choices, toStringFunction, new WeightedRatio());
  };
  FuzzySearch.prototype.extractAll_li2wcl$ = function (query, choices, toStringFunction, cutoff) {
    var extractor = new Extractor(cutoff);
    return extractor.extractWithoutOrder_qwxkbm$(query, choices, toStringFunction, new WeightedRatio());
  };
  FuzzySearch.prototype.extractOne_qwxkbm$ = function (query, choices, toStringFunction, func) {
    var extractor = new Extractor();
    return extractor.extractOne_qwxkbm$(query, choices, toStringFunction, func);
  };
  FuzzySearch.prototype.extractOne_3lb88p$ = function (query, choices, toStringFunction) {
    var extractor = new Extractor();
    return extractor.extractOne_qwxkbm$(query, choices, toStringFunction, new WeightedRatio());
  };
  FuzzySearch.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FuzzySearch',
    interfaces: []
  };
  var FuzzySearch_instance = null;
  function FuzzySearch_getInstance() {
    if (FuzzySearch_instance === null) {
      new FuzzySearch();
    }return FuzzySearch_instance;
  }
  function PriorityQueue(size, comparator) {
    PriorityQueue$Companion_getInstance();
    if (comparator === void 0)
      comparator = null;
    this.comparator_0 = comparator;
    this.size_v874z0$_0 = 0;
    var tmp$;
    var array = Array_0(size);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = null;
    }
    this.arr_0 = Kotlin.isArray(tmp$ = array) ? tmp$ : throwCCE();
  }
  Object.defineProperty(PriorityQueue.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.size_v874z0$_0;
    },
    set: function (size) {
      this.size_v874z0$_0 = size;
    }
  });
  PriorityQueue.prototype.add_11rb$ = function (element) {
    if ((this.size + 1 | 0) === this.arr_0.length) {
      this.resize_0();
    }this.arr_0[this.size = this.size + 1 | 0, this.size] = element;
    this.swim_0(this.size);
  };
  PriorityQueue.prototype.peek = function () {
    if (this.size === 0)
      throw NoSuchElementException_init();
    return ensureNotNull(this.arr_0[1]);
  };
  PriorityQueue.prototype.poll = function () {
    var tmp$;
    if (this.size === 0)
      throw NoSuchElementException_init();
    var res = this.peek();
    swap(this.arr_0, 1, (tmp$ = this.size, this.size = tmp$ - 1 | 0, tmp$));
    this.sink_0(1);
    this.arr_0[this.size + 1 | 0] = null;
    if (this.size > 0 && this.size === ((this.arr_0.length - 1 | 0) / 4 | 0)) {
      this.resize_0();
    }return res;
  };
  PriorityQueue.prototype.swim_0 = function (n) {
    PriorityQueue$Companion_getInstance().swim_3g6pu6$(this.arr_0, n, this.comparator_0);
  };
  PriorityQueue.prototype.sink_0 = function (n) {
    PriorityQueue$Companion_getInstance().sink_qo9w5o$(this.arr_0, n, this.size, this.comparator_0);
  };
  PriorityQueue.prototype.resize_0 = function () {
    var old = this.arr_0;
    this.arr_0 = copyOf(old, old.length + 1 | 0);
  };
  PriorityQueue.prototype.isEmpty = function () {
    return this.size === 0;
  };
  PriorityQueue.prototype.contains_11rb$ = function (element) {
    var tmp$;
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var obj = tmp$.next();
      if (equals(obj, element))
        return true;
    }
    return false;
  };
  PriorityQueue.prototype.containsAll_brywnq$ = function (elements) {
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!this.contains_11rb$(element))
        return false;
    }
    return true;
  };
  PriorityQueue.prototype.iterator = function () {
    var $receiver = copyOfRange(this.arr_0, 1, this.size + 1 | 0);
    var destination = ArrayList_init_0($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(ensureNotNull(item));
    }
    return destination.iterator();
  };
  function PriorityQueue$Companion() {
    PriorityQueue$Companion_instance = this;
  }
  PriorityQueue$Companion.prototype.greater_0 = function (arr, i, j, comparator) {
    if (comparator === void 0)
      comparator = null;
    var tmp$, tmp$_0;
    if (comparator != null) {
      tmp$_0 = comparator.compare(arr[i], arr[j]) > 0;
    } else {
      var left = Kotlin.isComparable(tmp$ = ensureNotNull(arr[i])) ? tmp$ : throwCCE();
      tmp$_0 = Kotlin.compareTo(left, ensureNotNull(arr[j])) > 0;
    }
    return tmp$_0;
  };
  PriorityQueue$Companion.prototype.sink_qo9w5o$ = function (arr, a, size, comparator) {
    if (comparator === void 0)
      comparator = null;
    var k = a;
    while ((2 * k | 0) <= size) {
      var j = 2 * k | 0;
      if (j < size && this.greater_0(arr, j, j + 1 | 0, comparator)) {
        j = j + 1 | 0;
      }if (!this.greater_0(arr, k, j, comparator))
        break;
      swap(arr, k, j);
      k = j;
    }
  };
  PriorityQueue$Companion.prototype.swim_3g6pu6$ = function (arr, size, comparator) {
    if (comparator === void 0)
      comparator = null;
    var n = size;
    while (n > 1 && this.greater_0(arr, n / 2 | 0, n, comparator)) {
      swap(arr, n, n / 2 | 0);
      n = n / 2 | 0;
    }
  };
  PriorityQueue$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PriorityQueue$Companion_instance = null;
  function PriorityQueue$Companion_getInstance() {
    if (PriorityQueue$Companion_instance === null) {
      new PriorityQueue$Companion();
    }return PriorityQueue$Companion_instance;
  }
  PriorityQueue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PriorityQueue',
    interfaces: [Collection]
  };
  function swap($receiver, i, j) {
    var tmp = $receiver[i];
    $receiver[i] = $receiver[j];
    $receiver[j] = tmp;
  }
  function BasicAlgorithm() {
    this.stringFunction_g74652$_0 = null;
  }
  Object.defineProperty(BasicAlgorithm.prototype, 'stringFunction', {
    configurable: true,
    get: function () {
      return this.stringFunction_g74652$_0;
    },
    set: function (stringFunction) {
      this.stringFunction_g74652$_0 = stringFunction;
    }
  });
  BasicAlgorithm.prototype.apply_puj7f4$ = function (s1, s2) {
    return this.apply_5u6rzm$(s1, s2, ensureNotNull(this.stringFunction));
  };
  BasicAlgorithm.prototype.with_l3tdue$ = function (stringFunction) {
    this.stringFunction = stringFunction;
    return this;
  };
  BasicAlgorithm.prototype.noProcessor = function () {
    this.stringFunction = ToStringFunction$Companion_getInstance().NO_PROCESS;
    return this;
  };
  BasicAlgorithm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BasicAlgorithm',
    interfaces: [Applicable]
  };
  function BasicAlgorithm_init($this) {
    $this = $this || Object.create(BasicAlgorithm.prototype);
    BasicAlgorithm.call($this);
    $this.stringFunction = new DefaultStringFunction();
    return $this;
  }
  function BasicAlgorithm_init_0(stringFunction, $this) {
    $this = $this || Object.create(BasicAlgorithm.prototype);
    BasicAlgorithm.call($this);
    $this.stringFunction = stringFunction;
    return $this;
  }
  function DefaultStringFunction() {
    DefaultStringFunction$Companion_getInstance();
  }
  DefaultStringFunction.prototype.apply_11rb$ = function (item) {
    var $receiver = DefaultStringFunction$Companion_getInstance().subNonAlphaNumeric_puj7f4$(item, ' ').toLowerCase();
    var tmp$;
    var $receiver_0 = Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE();
    var startIndex = 0;
    var endIndex = $receiver_0.length - 1 | 0;
    var startFound = false;
    while (startIndex <= endIndex) {
      var index = !startFound ? startIndex : endIndex;
      var match = unboxChar(toBoxedChar($receiver_0.charCodeAt(index))) <= 32;
      if (!startFound) {
        if (!match)
          startFound = true;
        else
          startIndex = startIndex + 1 | 0;
      } else {
        if (!match)
          break;
        else
          endIndex = endIndex - 1 | 0;
      }
    }
    return Kotlin.subSequence($receiver_0, startIndex, endIndex + 1 | 0).toString();
  };
  function DefaultStringFunction$Companion() {
    DefaultStringFunction$Companion_instance = this;
    this.nonUnicodePattern_0 = '[^\\p{Alnum}]';
    this.r_gv9hl8$_0 = lazy(DefaultStringFunction$Companion$r$lambda(this));
  }
  Object.defineProperty(DefaultStringFunction$Companion.prototype, 'r_0', {
    configurable: true,
    get: function () {
      return this.r_gv9hl8$_0.value;
    }
  });
  DefaultStringFunction$Companion.prototype.subNonAlphaNumeric_puj7f4$ = function (in_0, sub) {
    var tmp$;
    var m = this.r_0.find_905azu$(in_0);
    if (m != null) {
      tmp$ = this.r_0.replace_x2uqeu$(in_0, sub);
    } else {
      tmp$ = in_0;
    }
    return tmp$;
  };
  function DefaultStringFunction$Companion$r$lambda(this$DefaultStringFunction$) {
    return function () {
      try {
        return Regex_init(pattern());
      } catch (e) {
        if (Kotlin.isType(e, IllegalArgumentException)) {
          return Regex_init(this$DefaultStringFunction$.nonUnicodePattern_0);
        } else
          throw e;
      }
    };
  }
  DefaultStringFunction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DefaultStringFunction$Companion_instance = null;
  function DefaultStringFunction$Companion_getInstance() {
    if (DefaultStringFunction$Companion_instance === null) {
      new DefaultStringFunction$Companion();
    }return DefaultStringFunction$Companion_instance;
  }
  DefaultStringFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultStringFunction',
    interfaces: [ToStringFunction]
  };
  function PrimitiveUtils() {
    PrimitiveUtils_instance = this;
  }
  PrimitiveUtils.prototype.max_yqxtqz$ = function (elems) {
    var tmp$;
    if (elems.length === 0)
      return 0.0;
    var best = elems[0];
    for (tmp$ = 0; tmp$ !== elems.length; ++tmp$) {
      var t = elems[tmp$];
      if (t > best) {
        best = t;
      }}
    return best;
  };
  PrimitiveUtils.prototype.max_pmhfmb$ = function (elems) {
    var tmp$;
    if (elems.length === 0)
      return 0;
    var best = elems[0];
    for (tmp$ = 0; tmp$ !== elems.length; ++tmp$) {
      var t = elems[tmp$];
      if (t > best) {
        best = t;
      }}
    return best;
  };
  PrimitiveUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PrimitiveUtils',
    interfaces: []
  };
  var PrimitiveUtils_instance = null;
  function PrimitiveUtils_getInstance() {
    if (PrimitiveUtils_instance === null) {
      new PrimitiveUtils();
    }return PrimitiveUtils_instance;
  }
  function RatioAlgorithm() {
    this.ratio = null;
  }
  RatioAlgorithm.prototype.with_h1mzlj$ = function (ratio) {
    this.ratio = ratio;
    return this;
  };
  RatioAlgorithm.prototype.apply_rre7kr$ = function (s1, s2, ratio) {
    return this.apply_b4i2pv$(s1, s2, ratio, ensureNotNull(this.stringFunction));
  };
  RatioAlgorithm.prototype.apply_5u6rzm$ = function (s1, s2, stringProcessor) {
    return this.apply_b4i2pv$(s1, s2, ensureNotNull(this.ratio), stringProcessor);
  };
  RatioAlgorithm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RatioAlgorithm',
    interfaces: [BasicAlgorithm]
  };
  function RatioAlgorithm_init($this) {
    $this = $this || Object.create(RatioAlgorithm.prototype);
    BasicAlgorithm_init($this);
    RatioAlgorithm.call($this);
    $this.ratio = new SimpleRatio();
    return $this;
  }
  function RatioAlgorithm_init_0(stringFunction, $this) {
    $this = $this || Object.create(RatioAlgorithm.prototype);
    BasicAlgorithm_init_0(stringFunction, $this);
    RatioAlgorithm.call($this);
    return $this;
  }
  function RatioAlgorithm_init_1(ratio, $this) {
    $this = $this || Object.create(RatioAlgorithm.prototype);
    BasicAlgorithm_init($this);
    RatioAlgorithm.call($this);
    $this.ratio = ratio;
    return $this;
  }
  function RatioAlgorithm_init_2(stringFunction, ratio, $this) {
    $this = $this || Object.create(RatioAlgorithm.prototype);
    BasicAlgorithm_init_0(stringFunction, $this);
    RatioAlgorithm.call($this);
    $this.ratio = ratio;
    return $this;
  }
  function SetUtils() {
    SetUtils_instance = this;
  }
  SetUtils.prototype.intersection_lk58qy$ = function (s1, s2) {
    var intersection = HashSet_init(s1);
    intersection.retainAll_brywnq$(s2);
    return intersection;
  };
  SetUtils.prototype.difference_lk58qy$ = function (s1, s2) {
    var difference = HashSet_init(s1);
    difference.removeAll_brywnq$(s2);
    return difference;
  };
  SetUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SetUtils',
    interfaces: []
  };
  var SetUtils_instance = null;
  function SetUtils_getInstance() {
    if (SetUtils_instance === null) {
      new SetUtils();
    }return SetUtils_instance;
  }
  function TokenSet() {
    RatioAlgorithm_init(this);
  }
  TokenSet.prototype.apply_b4i2pv$ = function (s1, s2, ratio, stringFunction) {
    var s1Copy = s1;
    var s2Copy = s2;
    s1Copy = stringFunction.apply_11rb$(s1Copy);
    s2Copy = stringFunction.apply_11rb$(s2Copy);
    var tokens1 = Utils_getInstance().tokenizeSet_y4putb$(s1Copy);
    var tokens2 = Utils_getInstance().tokenizeSet_y4putb$(s2Copy);
    var intersection = SetUtils_getInstance().intersection_lk58qy$(tokens1, tokens2);
    var diff1to2 = SetUtils_getInstance().difference_lk58qy$(tokens1, tokens2);
    var diff2to1 = SetUtils_getInstance().difference_lk58qy$(tokens2, tokens1);
    var $receiver = Utils_getInstance().sortAndJoin_q2ad7e$(intersection, ' ');
    var tmp$;
    var sortedInter = trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
    var $receiver_0 = sortedInter + ' ' + Utils_getInstance().sortAndJoin_q2ad7e$(diff1to2, ' ');
    var tmp$_0;
    var $receiver_0_0 = Kotlin.isCharSequence(tmp$_0 = $receiver_0) ? tmp$_0 : throwCCE();
    var startIndex = 0;
    var endIndex = $receiver_0_0.length - 1 | 0;
    var startFound = false;
    while (startIndex <= endIndex) {
      var index = !startFound ? startIndex : endIndex;
      var match = unboxChar(toBoxedChar($receiver_0_0.charCodeAt(index))) <= 32;
      if (!startFound) {
        if (!match)
          startFound = true;
        else
          startIndex = startIndex + 1 | 0;
      } else {
        if (!match)
          break;
        else
          endIndex = endIndex - 1 | 0;
      }
    }
    var sorted1to2 = Kotlin.subSequence($receiver_0_0, startIndex, endIndex + 1 | 0).toString();
    var $receiver_1 = sortedInter + ' ' + Utils_getInstance().sortAndJoin_q2ad7e$(diff2to1, ' ');
    var tmp$_1;
    var $receiver_0_1 = Kotlin.isCharSequence(tmp$_1 = $receiver_1) ? tmp$_1 : throwCCE();
    var startIndex_0 = 0;
    var endIndex_0 = $receiver_0_1.length - 1 | 0;
    var startFound_0 = false;
    while (startIndex_0 <= endIndex_0) {
      var index_0 = !startFound_0 ? startIndex_0 : endIndex_0;
      var match_0 = unboxChar(toBoxedChar($receiver_0_1.charCodeAt(index_0))) <= 32;
      if (!startFound_0) {
        if (!match_0)
          startFound_0 = true;
        else
          startIndex_0 = startIndex_0 + 1 | 0;
      } else {
        if (!match_0)
          break;
        else
          endIndex_0 = endIndex_0 - 1 | 0;
      }
    }
    var sorted2to1 = Kotlin.subSequence($receiver_0_1, startIndex_0, endIndex_0 + 1 | 0).toString();
    var results = ArrayList_init();
    results.add_11rb$(ratio.apply_puj7f4$(sortedInter, sorted1to2));
    results.add_11rb$(ratio.apply_puj7f4$(sortedInter, sorted2to1));
    results.add_11rb$(ratio.apply_puj7f4$(sorted1to2, sorted2to1));
    return ensureNotNull(maxOrNull(results));
  };
  TokenSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TokenSet',
    interfaces: [RatioAlgorithm]
  };
  function TokenSort() {
    RatioAlgorithm_init(this);
  }
  TokenSort.prototype.apply_b4i2pv$ = function (s1, s2, ratio, stringFunction) {
    var sorted1 = this.processAndSort_0(s1, stringFunction);
    var sorted2 = this.processAndSort_0(s2, stringFunction);
    return ratio.apply_puj7f4$(sorted1, sorted2);
  };
  TokenSort.prototype.processAndSort_0 = function (input, stringProcessor) {
    var inputCopy = input;
    inputCopy = stringProcessor.apply_11rb$(inputCopy);
    var tmp$ = inputCopy;
    var $receiver = Regex_init('\\s+').split_905azu$(tmp$, 0);
    var dropLastWhile$result;
    dropLastWhile$break: do {
      if (!$receiver.isEmpty()) {
        var iterator = $receiver.listIterator_za3lpa$($receiver.size);
        while (iterator.hasPrevious()) {
          if (!(iterator.previous().length === 0)) {
            dropLastWhile$result = take($receiver, iterator.nextIndex() + 1 | 0);
            break dropLastWhile$break;
          }}
      }dropLastWhile$result = emptyList();
    }
     while (false);
    var wordsArray = copyToArray(dropLastWhile$result);
    var words = listOf(wordsArray.slice());
    var joined = Utils_getInstance().sortAndJoin_c9ot88$(words, ' ');
    var tmp$_0;
    var $receiver_0 = Kotlin.isCharSequence(tmp$_0 = joined) ? tmp$_0 : throwCCE();
    var startIndex = 0;
    var endIndex = $receiver_0.length - 1 | 0;
    var startFound = false;
    while (startIndex <= endIndex) {
      var index = !startFound ? startIndex : endIndex;
      var match = unboxChar(toBoxedChar($receiver_0.charCodeAt(index))) <= 32;
      if (!startFound) {
        if (!match)
          startFound = true;
        else
          startIndex = startIndex + 1 | 0;
      } else {
        if (!match)
          break;
        else
          endIndex = endIndex - 1 | 0;
      }
    }
    return Kotlin.subSequence($receiver_0, startIndex, endIndex + 1 | 0).toString();
  };
  TokenSort.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TokenSort',
    interfaces: [RatioAlgorithm]
  };
  function Utils() {
    Utils_instance = this;
  }
  Utils.prototype.tokenize_y4putb$ = function (in_0) {
    var $receiver = Regex_init('\\s+').split_905azu$(in_0, 0);
    var dropLastWhile$result;
    dropLastWhile$break: do {
      if (!$receiver.isEmpty()) {
        var iterator = $receiver.listIterator_za3lpa$($receiver.size);
        while (iterator.hasPrevious()) {
          if (!(iterator.previous().length === 0)) {
            dropLastWhile$result = take($receiver, iterator.nextIndex() + 1 | 0);
            break dropLastWhile$break;
          }}
      }dropLastWhile$result = emptyList();
    }
     while (false);
    return listOf(copyToArray(dropLastWhile$result).slice());
  };
  Utils.prototype.tokenizeSet_y4putb$ = function (in_0) {
    return HashSet_init(this.tokenize_y4putb$(in_0));
  };
  Utils.prototype.sortAndJoin_c9ot88$ = function (col, sep) {
    return this.join_c9ot88$(sorted(col), sep);
  };
  Utils.prototype.join_c9ot88$ = function (strings, sep) {
    var buf = StringBuilder_init(strings.size * 16 | 0);
    for (var i = 0; i !== strings.size; ++i) {
      if (i < strings.size) {
        buf.append_pdl1vj$(sep);
      }buf.append_pdl1vj$(strings.get_za3lpa$(i));
    }
    var $receiver = buf.toString();
    var tmp$;
    var $receiver_0 = Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE();
    var startIndex = 0;
    var endIndex = $receiver_0.length - 1 | 0;
    var startFound = false;
    while (startIndex <= endIndex) {
      var index = !startFound ? startIndex : endIndex;
      var match = unboxChar(toBoxedChar($receiver_0.charCodeAt(index))) <= 32;
      if (!startFound) {
        if (!match)
          startFound = true;
        else
          startIndex = startIndex + 1 | 0;
      } else {
        if (!match)
          break;
        else
          endIndex = endIndex - 1 | 0;
      }
    }
    return Kotlin.subSequence($receiver_0, startIndex, endIndex + 1 | 0).toString();
  };
  Utils.prototype.sortAndJoin_q2ad7e$ = function (col, sep) {
    return this.sortAndJoin_c9ot88$(ArrayList_init_1(col), sep);
  };
  Utils.prototype.findTopKHeap_sv56cl$ = function (arr, k) {
    var tmp$;
    var pq = new PriorityQueue(arr.size);
    tmp$ = arr.iterator();
    while (tmp$.hasNext()) {
      var x = tmp$.next();
      if (pq.size < k)
        pq.add_11rb$(x);
      else if (Kotlin.compareTo(x, pq.peek()) > 0) {
        pq.poll();
        pq.add_11rb$(x);
      }}
    var res = ArrayList_init();
    try {
      for (var i = k; i >= 1; i--) {
        res.add_11rb$(pq.poll());
      }
    } catch (e) {
      if (!Kotlin.isType(e, NoSuchElementException))
        throw e;
    }
    return res;
  };
  Utils.prototype.max_atqejc$ = function (elems) {
    var tmp$;
    if (elems.length === 0)
      return null;
    var best = elems[0];
    for (tmp$ = 0; tmp$ !== elems.length; ++tmp$) {
      var t = elems[tmp$];
      if (Kotlin.compareTo(t, best) > 0) {
        best = t;
      }}
    return best;
  };
  Utils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Utils',
    interfaces: []
  };
  var Utils_instance = null;
  function Utils_getInstance() {
    if (Utils_instance === null) {
      new Utils();
    }return Utils_instance;
  }
  function WeightedRatio() {
    WeightedRatio$Companion_getInstance();
    BasicAlgorithm_init(this);
  }
  WeightedRatio.prototype.apply_5u6rzm$ = function (s1, s2, stringProcessor) {
    var s1Copy = s1;
    var s2Copy = s2;
    s1Copy = stringProcessor.apply_11rb$(s1Copy);
    s2Copy = stringProcessor.apply_11rb$(s2Copy);
    var len1 = s1Copy.length;
    var len2 = s2Copy.length;
    if (len1 === 0 || len2 === 0) {
      return 0;
    }var tryPartials = WeightedRatio$Companion_getInstance().TRY_PARTIALS;
    var unbaseScale = WeightedRatio$Companion_getInstance().UNBASE_SCALE;
    var partialScale = WeightedRatio$Companion_getInstance().PARTIAL_SCALE;
    var base = FuzzySearch_getInstance().ratio_puj7f4$(s1Copy, s2Copy);
    var lenRatio = Math_0.max(len1, len2) / Math_0.min(len1, len2);
    if (lenRatio < 1.5)
      tryPartials = false;
    if (lenRatio > 8)
      partialScale = 0.6;
    if (tryPartials) {
      var partial = FuzzySearch_getInstance().partialRatio_puj7f4$(s1Copy, s2Copy) * partialScale;
      var partialSor = FuzzySearch_getInstance().tokenSortPartialRatio_puj7f4$(s1Copy, s2Copy) * unbaseScale * partialScale;
      var partialSet = FuzzySearch_getInstance().tokenSetPartialRatio_puj7f4$(s1Copy, s2Copy) * unbaseScale * partialScale;
      var a = Math_0.max(base, partial);
      var a_0 = Math_0.max(a, partialSor);
      return numberToInt(round(Math_0.max(a_0, partialSet)));
    } else {
      var tokenSort = FuzzySearch_getInstance().tokenSortRatio_puj7f4$(s1Copy, s2Copy) * unbaseScale;
      var tokenSet = FuzzySearch_getInstance().tokenSetRatio_puj7f4$(s1Copy, s2Copy) * unbaseScale;
      var a_1 = Math_0.max(base, tokenSort);
      return numberToInt(round(Math_0.max(a_1, tokenSet)));
    }
  };
  function WeightedRatio$Companion() {
    WeightedRatio$Companion_instance = this;
    this.UNBASE_SCALE = 0.95;
    this.PARTIAL_SCALE = 0.9;
    this.TRY_PARTIALS = true;
  }
  WeightedRatio$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WeightedRatio$Companion_instance = null;
  function WeightedRatio$Companion_getInstance() {
    if (WeightedRatio$Companion_instance === null) {
      new WeightedRatio$Companion();
    }return WeightedRatio$Companion_instance;
  }
  WeightedRatio.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeightedRatio',
    interfaces: [BasicAlgorithm]
  };
  function BoundExtractedResult(referent, string, score, index) {
    this.referent = referent;
    this.string = string;
    this.score = score;
    this.index = index;
  }
  BoundExtractedResult.prototype.toString = function () {
    return '(string: ' + toString(this.string) + ', score: ' + this.score + ', index: ' + this.index + ')';
  };
  BoundExtractedResult.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.score, other.score);
  };
  BoundExtractedResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoundExtractedResult',
    interfaces: [Comparable]
  };
  function ExtractedResult(string, score, index) {
    this.string = string;
    this.score = score;
    this.index = index;
  }
  ExtractedResult.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.score, other.score);
  };
  ExtractedResult.prototype.toString = function () {
    return '(string: ' + toString(this.string) + ', score: ' + this.score + ', index: ' + this.index + ')';
  };
  ExtractedResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExtractedResult',
    interfaces: [Comparable]
  };
  ExtractedResult.prototype.component1 = function () {
    return this.string;
  };
  ExtractedResult.prototype.component2 = function () {
    return this.score;
  };
  ExtractedResult.prototype.component3 = function () {
    return this.index;
  };
  ExtractedResult.prototype.copy_hs9j5r$ = function (string, score, index) {
    return new ExtractedResult(string === void 0 ? this.string : string, score === void 0 ? this.score : score, index === void 0 ? this.index : index);
  };
  ExtractedResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.string) | 0;
    result = result * 31 + Kotlin.hashCode(this.score) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    return result;
  };
  ExtractedResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.string, other.string) && Kotlin.equals(this.score, other.score) && Kotlin.equals(this.index, other.index)))));
  };
  function PartialRatio() {
  }
  PartialRatio.prototype.apply_puj7f4$ = function (s1, s2) {
    var tmp$;
    var shorter;
    var longer;
    if (s1.length < s2.length) {
      shorter = s1;
      longer = s2;
    } else {
      shorter = s2;
      longer = s1;
    }
    var matchingBlocks = DiffUtils_getInstance().getMatchingBlocks_puj7f4$(shorter, longer);
    var scores = ArrayList_init();
    for (tmp$ = 0; tmp$ !== matchingBlocks.length; ++tmp$) {
      var mb = matchingBlocks[tmp$];
      var dist = mb.dpos - mb.spos | 0;
      var longStart = dist > 0 ? dist : 0;
      var longEnd = longStart + shorter.length | 0;
      if (longEnd > longer.length)
        longEnd = longer.length;
      var $receiver = longer;
      var endIndex = longEnd;
      var longSubstr = $receiver.substring(longStart, endIndex);
      var ratio = DiffUtils_getInstance().getRatio_puj7f4$(shorter, longSubstr);
      if (ratio > 0.995) {
        return 100;
      } else {
        scores.add_11rb$(ratio);
      }
    }
    return numberToInt(round(100 * ensureNotNull(maxOrNull_0(scores))));
  };
  PartialRatio.prototype.apply_5u6rzm$ = function (s1, s2, sp) {
    return this.apply_puj7f4$(sp.apply_11rb$(s1), sp.apply_11rb$(s2));
  };
  PartialRatio.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PartialRatio',
    interfaces: [Ratio]
  };
  function SimpleRatio() {
  }
  SimpleRatio.prototype.apply_puj7f4$ = function (s1, s2) {
    return numberToInt(round(100 * DiffUtils_getInstance().getRatio_puj7f4$(s1, s2)));
  };
  SimpleRatio.prototype.apply_5u6rzm$ = function (s1, s2, sp) {
    return this.apply_puj7f4$(sp.apply_11rb$(s1), sp.apply_11rb$(s2));
  };
  SimpleRatio.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleRatio',
    interfaces: [Ratio]
  };
  function EditOp(type, spos, dpos) {
    if (type === void 0)
      type = null;
    if (spos === void 0)
      spos = 0;
    if (dpos === void 0)
      dpos = 0;
    this.type = type;
    this.spos = spos;
    this.dpos = dpos;
  }
  EditOp.prototype.toString = function () {
    return ensureNotNull(this.type).name + '(' + toString(this.spos) + ',' + toString(this.dpos) + ')';
  };
  EditOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditOp',
    interfaces: []
  };
  EditOp.prototype.component1 = function () {
    return this.type;
  };
  EditOp.prototype.component2 = function () {
    return this.spos;
  };
  EditOp.prototype.component3 = function () {
    return this.dpos;
  };
  EditOp.prototype.copy_doq2wp$ = function (type, spos, dpos) {
    return new EditOp(type === void 0 ? this.type : type, spos === void 0 ? this.spos : spos, dpos === void 0 ? this.dpos : dpos);
  };
  EditOp.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.spos) | 0;
    result = result * 31 + Kotlin.hashCode(this.dpos) | 0;
    return result;
  };
  EditOp.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.spos, other.spos) && Kotlin.equals(this.dpos, other.dpos)))));
  };
  function MatchingBlock() {
    this.spos = 0;
    this.dpos = 0;
    this.length = 0;
  }
  MatchingBlock.prototype.toString = function () {
    return '(' + this.spos + ',' + this.dpos + ',' + this.length + ')';
  };
  MatchingBlock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatchingBlock',
    interfaces: []
  };
  function OpCode() {
    this.type = null;
    this.sbeg = 0;
    this.send = 0;
    this.dbeg = 0;
    this.dend = 0;
  }
  OpCode.prototype.toString = function () {
    return ensureNotNull(this.type).name + '(' + toString(this.sbeg) + ',' + toString(this.send) + ',' + toString(this.dbeg) + ',' + toString(this.dend) + ')';
  };
  OpCode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OpCode',
    interfaces: []
  };
  function EditType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function EditType_initFields() {
    EditType_initFields = function () {
    };
    EditType$DELETE_instance = new EditType('DELETE', 0);
    EditType$EQUAL_instance = new EditType('EQUAL', 1);
    EditType$INSERT_instance = new EditType('INSERT', 2);
    EditType$REPLACE_instance = new EditType('REPLACE', 3);
    EditType$KEEP_instance = new EditType('KEEP', 4);
  }
  var EditType$DELETE_instance;
  function EditType$DELETE_getInstance() {
    EditType_initFields();
    return EditType$DELETE_instance;
  }
  var EditType$EQUAL_instance;
  function EditType$EQUAL_getInstance() {
    EditType_initFields();
    return EditType$EQUAL_instance;
  }
  var EditType$INSERT_instance;
  function EditType$INSERT_getInstance() {
    EditType_initFields();
    return EditType$INSERT_instance;
  }
  var EditType$REPLACE_instance;
  function EditType$REPLACE_getInstance() {
    EditType_initFields();
    return EditType$REPLACE_instance;
  }
  var EditType$KEEP_instance;
  function EditType$KEEP_getInstance() {
    EditType_initFields();
    return EditType$KEEP_instance;
  }
  EditType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditType',
    interfaces: [Enum]
  };
  function EditType$values() {
    return [EditType$DELETE_getInstance(), EditType$EQUAL_getInstance(), EditType$INSERT_getInstance(), EditType$REPLACE_getInstance(), EditType$KEEP_getInstance()];
  }
  EditType.values = EditType$values;
  function EditType$valueOf(name) {
    switch (name) {
      case 'DELETE':
        return EditType$DELETE_getInstance();
      case 'EQUAL':
        return EditType$EQUAL_getInstance();
      case 'INSERT':
        return EditType$INSERT_getInstance();
      case 'REPLACE':
        return EditType$REPLACE_getInstance();
      case 'KEEP':
        return EditType$KEEP_getInstance();
      default:throwISE('No enum constant io.github.shabinder.fuzzywuzzy.diffutils.structs.EditType.' + name);
    }
  }
  EditType.valueOf_61zpoe$ = EditType$valueOf;
  function pattern() {
    return '[^\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0\\u08A2-\\u08AC\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097F\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C33\\u0C35-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191C\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2183\\u2184\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u3006\\u3031-\\u3035\\u303B\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA697\\uA6A0-\\uA6E5\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA793\\uA7A0-\\uA7AA\\uA7F8-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA80-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]';
  }
  var package$io = _.io || (_.io = {});
  var package$github = package$io.github || (package$io.github = {});
  var package$shabinder = package$github.shabinder || (package$github.shabinder = {});
  var package$fuzzywuzzy = package$shabinder.fuzzywuzzy || (package$shabinder.fuzzywuzzy = {});
  package$fuzzywuzzy.Ratio = Ratio;
  Object.defineProperty(ToStringFunction, 'Companion', {
    get: ToStringFunction$Companion_getInstance
  });
  package$fuzzywuzzy.ToStringFunction = ToStringFunction;
  var package$diffutils = package$fuzzywuzzy.diffutils || (package$fuzzywuzzy.diffutils = {});
  package$diffutils.Applicable = Applicable;
  Object.defineProperty(package$diffutils, 'DiffUtils', {
    get: DiffUtils_getInstance
  });
  package$diffutils.assert_6taknv$ = assert;
  package$diffutils.Extractor = Extractor;
  Object.defineProperty(package$diffutils, 'FuzzySearch', {
    get: FuzzySearch_getInstance
  });
  Object.defineProperty(PriorityQueue, 'Companion', {
    get: PriorityQueue$Companion_getInstance
  });
  package$diffutils.PriorityQueue = PriorityQueue;
  package$diffutils.swap_6dt9vz$ = swap;
  var package$algorithms = package$diffutils.algorithms || (package$diffutils.algorithms = {});
  package$algorithms.BasicAlgorithm_init = BasicAlgorithm_init;
  package$algorithms.BasicAlgorithm_init_l3tdue$ = BasicAlgorithm_init_0;
  package$algorithms.BasicAlgorithm = BasicAlgorithm;
  Object.defineProperty(DefaultStringFunction, 'Companion', {
    get: DefaultStringFunction$Companion_getInstance
  });
  package$algorithms.DefaultStringFunction = DefaultStringFunction;
  Object.defineProperty(package$algorithms, 'PrimitiveUtils', {
    get: PrimitiveUtils_getInstance
  });
  package$algorithms.RatioAlgorithm_init = RatioAlgorithm_init;
  package$algorithms.RatioAlgorithm_init_l3tdue$ = RatioAlgorithm_init_0;
  package$algorithms.RatioAlgorithm_init_h1mzlj$ = RatioAlgorithm_init_1;
  package$algorithms.RatioAlgorithm_init_iu7rj5$ = RatioAlgorithm_init_2;
  package$algorithms.RatioAlgorithm = RatioAlgorithm;
  Object.defineProperty(package$algorithms, 'SetUtils', {
    get: SetUtils_getInstance
  });
  package$algorithms.TokenSet = TokenSet;
  package$algorithms.TokenSort = TokenSort;
  Object.defineProperty(package$algorithms, 'Utils', {
    get: Utils_getInstance
  });
  Object.defineProperty(WeightedRatio, 'Companion', {
    get: WeightedRatio$Companion_getInstance
  });
  package$algorithms.WeightedRatio = WeightedRatio;
  var package$model = package$diffutils.model || (package$diffutils.model = {});
  package$model.BoundExtractedResult = BoundExtractedResult;
  package$model.ExtractedResult = ExtractedResult;
  var package$ratio = package$diffutils.ratio || (package$diffutils.ratio = {});
  package$ratio.PartialRatio = PartialRatio;
  package$ratio.SimpleRatio = SimpleRatio;
  var package$structs = package$diffutils.structs || (package$diffutils.structs = {});
  package$structs.EditOp = EditOp;
  package$structs.MatchingBlock = MatchingBlock;
  package$structs.OpCode = OpCode;
  Object.defineProperty(EditType, 'DELETE', {
    get: EditType$DELETE_getInstance
  });
  Object.defineProperty(EditType, 'EQUAL', {
    get: EditType$EQUAL_getInstance
  });
  Object.defineProperty(EditType, 'INSERT', {
    get: EditType$INSERT_getInstance
  });
  Object.defineProperty(EditType, 'REPLACE', {
    get: EditType$REPLACE_getInstance
  });
  Object.defineProperty(EditType, 'KEEP', {
    get: EditType$KEEP_getInstance
  });
  package$structs.EditType = EditType;
  package$algorithms.pattern = pattern;
  Kotlin.defineModule('fuzzywuzzy-jsLegacy', _);
  return _;
}));

//# sourceMappingURL=fuzzywuzzy-jsLegacy.js.map
