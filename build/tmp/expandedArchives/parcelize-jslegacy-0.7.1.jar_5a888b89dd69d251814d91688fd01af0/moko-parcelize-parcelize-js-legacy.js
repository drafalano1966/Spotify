(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'moko-parcelize-parcelize-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'moko-parcelize-parcelize-js-legacy'.");
    }root['moko-parcelize-parcelize-js-legacy'] = factory(typeof this['moko-parcelize-parcelize-js-legacy'] === 'undefined' ? {} : this['moko-parcelize-parcelize-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  function Parcelable() {
  }
  Parcelable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Parcelable',
    interfaces: []
  };
  function IgnoredOnParcel() {
  }
  IgnoredOnParcel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IgnoredOnParcel',
    interfaces: [Annotation]
  };
  function Parcelize() {
  }
  Parcelize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Parcelize',
    interfaces: [Annotation]
  };
  var package$dev = _.dev || (_.dev = {});
  var package$icerock = package$dev.icerock || (package$dev.icerock = {});
  var package$moko = package$icerock.moko || (package$icerock.moko = {});
  var package$parcelize = package$moko.parcelize || (package$moko.parcelize = {});
  package$parcelize.Parcelable = Parcelable;
  package$parcelize.IgnoredOnParcel = IgnoredOnParcel;
  package$parcelize.Parcelize = Parcelize;
  Kotlin.defineModule('moko-parcelize-parcelize-js-legacy', _);
  return _;
}));

//# sourceMappingURL=moko-parcelize-parcelize-js-legacy.js.map
