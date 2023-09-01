(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Essenty-utils-internal-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Essenty-utils-internal-js-legacy'.");
    }root['Essenty-utils-internal-js-legacy'] = factory(typeof this['Essenty-utils-internal-js-legacy'] === 'undefined' ? {} : this['Essenty-utils-internal-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  function InternalEssentyApi() {
  }
  InternalEssentyApi.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InternalEssentyApi',
    interfaces: [Annotation]
  };
  function ensureNeverFrozen($receiver) {
    return $receiver;
  }
  var package$com = _.com || (_.com = {});
  var package$arkivanov = package$com.arkivanov || (package$com.arkivanov = {});
  var package$essenty = package$arkivanov.essenty || (package$arkivanov.essenty = {});
  var package$utils = package$essenty.utils || (package$essenty.utils = {});
  var package$internal = package$utils.internal || (package$utils.internal = {});
  package$internal.InternalEssentyApi = InternalEssentyApi;
  package$internal.ensureNeverFrozen_irb06o$ = ensureNeverFrozen;
  Kotlin.defineModule('Essenty-utils-internal-js-legacy', _);
  return _;
}));

//# sourceMappingURL=Essenty-utils-internal-js-legacy.js.map
