(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Stately-stately-common-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Stately-stately-common-js-legacy'.");
    }root['Stately-stately-common-js-legacy'] = factory(typeof this['Stately-stately-common-js-legacy'] === 'undefined' ? {} : this['Stately-stately-common-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  function freeze($receiver) {
    return $receiver;
  }
  function get_isFrozen($receiver) {
    return false;
  }
  function ensureNeverFrozen($receiver) {
  }
  function Throws(exceptionClasses) {
    this.exceptionClasses = exceptionClasses;
  }
  Throws.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Throws',
    interfaces: [Annotation]
  };
  var package$co = _.co || (_.co = {});
  var package$touchlab = package$co.touchlab || (package$co.touchlab = {});
  var package$stately = package$touchlab.stately || (package$touchlab.stately = {});
  package$stately.freeze_eoe559$ = freeze;
  package$stately.get_isFrozen_vvk9$ = get_isFrozen;
  package$stately.ensureNeverFrozen_s8jyvk$ = ensureNeverFrozen;
  var package$annotation = package$stately.annotation || (package$stately.annotation = {});
  package$annotation.Throws = Throws;
  Kotlin.defineModule('Stately-stately-common-js-legacy', _);
  return _;
}));

//# sourceMappingURL=Stately-stately-common-js-legacy.js.map
