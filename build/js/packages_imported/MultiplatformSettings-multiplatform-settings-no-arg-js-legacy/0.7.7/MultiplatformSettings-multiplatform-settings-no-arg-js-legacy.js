(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'MultiplatformSettings-multiplatform-settings-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('MultiplatformSettings-multiplatform-settings-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'MultiplatformSettings-multiplatform-settings-no-arg-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MultiplatformSettings-multiplatform-settings-no-arg-js-legacy'.");
    }if (typeof this['MultiplatformSettings-multiplatform-settings-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'MultiplatformSettings-multiplatform-settings-no-arg-js-legacy'. Its dependency 'MultiplatformSettings-multiplatform-settings-js-legacy' was not found. Please, check whether 'MultiplatformSettings-multiplatform-settings-js-legacy' is loaded prior to 'MultiplatformSettings-multiplatform-settings-no-arg-js-legacy'.");
    }root['MultiplatformSettings-multiplatform-settings-no-arg-js-legacy'] = factory(typeof this['MultiplatformSettings-multiplatform-settings-no-arg-js-legacy'] === 'undefined' ? {} : this['MultiplatformSettings-multiplatform-settings-no-arg-js-legacy'], kotlin, this['MultiplatformSettings-multiplatform-settings-js-legacy']);
  }
}(this, function (_, Kotlin, $module$MultiplatformSettings_multiplatform_settings_js_legacy) {
  'use strict';
  var JsSettings = $module$MultiplatformSettings_multiplatform_settings_js_legacy.com.russhwolf.settings.JsSettings;
  function invoke($receiver) {
    return Settings();
  }
  function Settings() {
    return new JsSettings();
  }
  var package$com = _.com || (_.com = {});
  var package$russhwolf = package$com.russhwolf || (package$com.russhwolf = {});
  var package$settings = package$russhwolf.settings || (package$russhwolf.settings = {});
  package$settings.invoke_e620o7$ = invoke;
  package$settings.Settings = Settings;
  Kotlin.defineModule('MultiplatformSettings-multiplatform-settings-no-arg-js-legacy', _);
  return _;
}));

//# sourceMappingURL=MultiplatformSettings-multiplatform-settings-no-arg-js-legacy.js.map
