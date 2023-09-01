(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-json-js-legacy', 'ktor-ktor-client-core-js-legacy', 'ktor-ktor-io-js-legacy', 'ktor-ktor-http-js-legacy', 'kotlinx-serialization-kotlinx-serialization-core-js-legacy', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-json-js-legacy'), require('ktor-ktor-client-core-js-legacy'), require('ktor-ktor-io-js-legacy'), require('ktor-ktor-http-js-legacy'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'youtube-api-dl-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'youtube-api-dl-js-legacy'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'youtube-api-dl-js-legacy'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' is loaded prior to 'youtube-api-dl-js-legacy'.");
    }if (typeof this['ktor-ktor-client-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'youtube-api-dl-js-legacy'. Its dependency 'ktor-ktor-client-core-js-legacy' was not found. Please, check whether 'ktor-ktor-client-core-js-legacy' is loaded prior to 'youtube-api-dl-js-legacy'.");
    }if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'youtube-api-dl-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'youtube-api-dl-js-legacy'.");
    }if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'youtube-api-dl-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'youtube-api-dl-js-legacy'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'youtube-api-dl-js-legacy'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' is loaded prior to 'youtube-api-dl-js-legacy'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'youtube-api-dl-js-legacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'youtube-api-dl-js-legacy'.");
    }root['youtube-api-dl-js-legacy'] = factory(typeof this['youtube-api-dl-js-legacy'] === 'undefined' ? {} : this['youtube-api-dl-js-legacy'], kotlin, this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'], this['ktor-ktor-client-core-js-legacy'], this['ktor-ktor-io-js-legacy'], this['ktor-ktor-http-js-legacy'], this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy, $module$ktor_ktor_client_core_js_legacy, $module$ktor_ktor_io_js_legacy, $module$ktor_ktor_http_js_legacy, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var JsonPrimitive = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.JsonPrimitive_pdl1vj$;
  var JsonObject = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.JsonObject;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var Regex = Kotlin.kotlin.text.Regex;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var split_0 = Kotlin.kotlin.text.split_o64adg$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toCharArray = Kotlin.kotlin.text.toCharArray_pdl1vz$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var concatToString = Kotlin.kotlin.text.concatToString_355ntz$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var Unit = Kotlin.kotlin.Unit;
  var HttpClient = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.HttpClient_f0veat$;
  var equals = Kotlin.kotlin.text.equals_igcy3c$;
  var header = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.header_xadl6p$;
  var headers = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.headers_nc42ot$;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var createKType = Kotlin.createKType;
  var toString = Kotlin.toString;
  var IOException = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.errors.IOException;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var takeFrom = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_jl1sg7$;
  var utils = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.utils;
  var url = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.HttpRequestBuilder;
  var HttpStatement_init = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.HttpStatement;
  var getKClass = Kotlin.getKClass;
  var throwCCE = Kotlin.throwCCE;
  var equals_0 = Kotlin.equals;
  var HttpResponse = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.HttpResponse;
  var complete = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.complete_abn2de$;
  var reflect = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
  var typeInfoImpl = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var get_jsonPrimitive = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.get_jsonPrimitive_u3sd3g$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var List = Kotlin.kotlin.collections.List;
  var printStackTrace = Kotlin.kotlin.printStackTrace_dbl4o4$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var Url = $module$ktor_ktor_http_js_legacy.io.ktor.http.Url_61zpoe$;
  var URLParserException = $module$ktor_ktor_http_js_legacy.io.ktor.http.URLParserException;
  var contentLength = $module$ktor_ktor_http_js_legacy.io.ktor.http.contentLength_v1wgmc$;
  var decodeToString = Kotlin.kotlin.text.decodeToString_964n91$;
  var takeFrom_0 = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.Json;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var JsonArray = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.JsonArray;
  var NullPointerException = Kotlin.kotlin.NullPointerException;
  var get_jsonObject = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.get_jsonObject_u3sd3g$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_jbpz7q$;
  var encodeToByteArray = Kotlin.kotlin.text.encodeToByteArray_pdl1vz$;
  var decodeURLPart = $module$ktor_ktor_http_js_legacy.io.ktor.http.decodeURLPart_99zovv$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var get_jsonArray = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.get_jsonArray_u3sd3g$;
  var put = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.put_kdidqz$;
  var JsonObjectBuilder_init = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.JsonObjectBuilder;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.serializer_ca95z9$;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.KSerializer;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_pdl1vz$;
  var L0 = Kotlin.Long.ZERO;
  var toBoolean = Kotlin.kotlin.text.toBoolean_5cw0du$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var replace_0 = Kotlin.kotlin.text.replace_r2fvfm$;
  var unboxChar = Kotlin.unboxChar;
  var isSuccess = $module$ktor_ktor_http_js_legacy.io.ktor.http.isSuccess_b3he4c$;
  var flow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.flow_sxz0o1$;
  var PrimitiveClasses$byteArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteArrayClass;
  var ClientRequestException = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.features.ClientRequestException;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var promise = $module$kotlinx_coroutines_core.kotlinx.coroutines.promise_pda6u4$;
  TargetPlatforms$Js.prototype = Object.create(TargetPlatforms.prototype);
  TargetPlatforms$Js.prototype.constructor = TargetPlatforms$Js;
  TargetPlatforms$Jvm.prototype = Object.create(TargetPlatforms.prototype);
  TargetPlatforms$Jvm.prototype.constructor = TargetPlatforms$Jvm;
  TargetPlatforms$Native.prototype = Object.create(TargetPlatforms.prototype);
  TargetPlatforms$Native.prototype.constructor = TargetPlatforms$Native;
  YoutubeException.prototype = Object.create(Exception.prototype);
  YoutubeException.prototype.constructor = YoutubeException;
  YoutubeException$VideoUnavailableException.prototype = Object.create(YoutubeException.prototype);
  YoutubeException$VideoUnavailableException.prototype.constructor = YoutubeException$VideoUnavailableException;
  YoutubeException$BadPageException.prototype = Object.create(YoutubeException.prototype);
  YoutubeException$BadPageException.prototype.constructor = YoutubeException$BadPageException;
  YoutubeException$UnknownFormatException.prototype = Object.create(YoutubeException.prototype);
  YoutubeException$UnknownFormatException.prototype.constructor = YoutubeException$UnknownFormatException;
  YoutubeException$CipherException.prototype = Object.create(YoutubeException.prototype);
  YoutubeException$CipherException.prototype.constructor = YoutubeException$CipherException;
  YoutubeException$NetworkException.prototype = Object.create(YoutubeException.prototype);
  YoutubeException$NetworkException.prototype.constructor = YoutubeException$NetworkException;
  YoutubeException$SubtitlesException.prototype = Object.create(YoutubeException.prototype);
  YoutubeException$SubtitlesException.prototype.constructor = YoutubeException$SubtitlesException;
  YoutubeException$DownloadUnavailableException.prototype = Object.create(YoutubeException.prototype);
  YoutubeException$DownloadUnavailableException.prototype.constructor = YoutubeException$DownloadUnavailableException;
  YoutubeException$DownloadUnavailableException$LiveVideoException.prototype = Object.create(YoutubeException$DownloadUnavailableException.prototype);
  YoutubeException$DownloadUnavailableException$LiveVideoException.prototype.constructor = YoutubeException$DownloadUnavailableException$LiveVideoException;
  YoutubeException$DownloadUnavailableException$RestrictedVideoException.prototype = Object.create(YoutubeException$DownloadUnavailableException.prototype);
  YoutubeException$DownloadUnavailableException$RestrictedVideoException.prototype.constructor = YoutubeException$DownloadUnavailableException$RestrictedVideoException;
  Extension$MPEG4.prototype = Object.create(Extension.prototype);
  Extension$MPEG4.prototype.constructor = Extension$MPEG4;
  Extension$WEBM.prototype = Object.create(Extension.prototype);
  Extension$WEBM.prototype.constructor = Extension$WEBM;
  Extension$_3GP.prototype = Object.create(Extension.prototype);
  Extension$_3GP.prototype.constructor = Extension$_3GP;
  Extension$FLV.prototype = Object.create(Extension.prototype);
  Extension$FLV.prototype.constructor = Extension$FLV;
  Extension$M4A.prototype = Object.create(Extension.prototype);
  Extension$M4A.prototype.constructor = Extension$M4A;
  Extension$WEBA.prototype = Object.create(Extension.prototype);
  Extension$WEBA.prototype.constructor = Extension$WEBA;
  Extension$JSON3.prototype = Object.create(Extension.prototype);
  Extension$JSON3.prototype.constructor = Extension$JSON3;
  Extension$SUBRIP.prototype = Object.create(Extension.prototype);
  Extension$SUBRIP.prototype.constructor = Extension$SUBRIP;
  Extension$TRANSCRIPT_V1.prototype = Object.create(Extension.prototype);
  Extension$TRANSCRIPT_V1.prototype.constructor = Extension$TRANSCRIPT_V1;
  Extension$TRANSCRIPT_V2.prototype = Object.create(Extension.prototype);
  Extension$TRANSCRIPT_V2.prototype.constructor = Extension$TRANSCRIPT_V2;
  Extension$TRANSCRIPT_V3.prototype = Object.create(Extension.prototype);
  Extension$TRANSCRIPT_V3.prototype.constructor = Extension$TRANSCRIPT_V3;
  Extension$TTML.prototype = Object.create(Extension.prototype);
  Extension$TTML.prototype.constructor = Extension$TTML;
  Extension$WEBVTT.prototype = Object.create(Extension.prototype);
  Extension$WEBVTT.prototype.constructor = Extension$WEBVTT;
  Extension$UNKNOWN.prototype = Object.create(Extension.prototype);
  Extension$UNKNOWN.prototype.constructor = Extension$UNKNOWN;
  Itag.prototype = Object.create(Enum.prototype);
  Itag.prototype.constructor = Itag;
  Methods.prototype = Object.create(Enum.prototype);
  Methods.prototype.constructor = Methods;
  NetworkResult$Progress.prototype = Object.create(NetworkResult.prototype);
  NetworkResult$Progress.prototype.constructor = NetworkResult$Progress;
  NetworkResult$Error.prototype = Object.create(NetworkResult.prototype);
  NetworkResult$Error.prototype.constructor = NetworkResult$Error;
  NetworkResult$Success.prototype = Object.create(NetworkResult.prototype);
  NetworkResult$Success.prototype.constructor = NetworkResult$Success;
  VideoDetails.prototype = Object.create(AbstractVideoDetails.prototype);
  VideoDetails.prototype.constructor = VideoDetails;
  AudioFormat.prototype = Object.create(Format.prototype);
  AudioFormat.prototype.constructor = AudioFormat;
  AudioVideoFormat.prototype = Object.create(Format.prototype);
  AudioVideoFormat.prototype.constructor = AudioVideoFormat;
  VideoFormat.prototype = Object.create(Format.prototype);
  VideoFormat.prototype.constructor = VideoFormat;
  PlaylistVideoDetails.prototype = Object.create(AbstractVideoDetails.prototype);
  PlaylistVideoDetails.prototype.constructor = PlaylistVideoDetails;
  AudioQuality.prototype = Object.create(Enum.prototype);
  AudioQuality.prototype.constructor = AudioQuality;
  VideoQuality.prototype = Object.create(Enum.prototype);
  VideoQuality.prototype.constructor = VideoQuality;
  function TargetPlatforms() {
  }
  function TargetPlatforms$Js() {
    TargetPlatforms$Js_instance = this;
    TargetPlatforms.call(this);
  }
  TargetPlatforms$Js.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Js',
    interfaces: [TargetPlatforms]
  };
  var TargetPlatforms$Js_instance = null;
  function TargetPlatforms$Js_getInstance() {
    if (TargetPlatforms$Js_instance === null) {
      new TargetPlatforms$Js();
    }return TargetPlatforms$Js_instance;
  }
  function TargetPlatforms$Jvm() {
    TargetPlatforms$Jvm_instance = this;
    TargetPlatforms.call(this);
  }
  TargetPlatforms$Jvm.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Jvm',
    interfaces: [TargetPlatforms]
  };
  var TargetPlatforms$Jvm_instance = null;
  function TargetPlatforms$Jvm_getInstance() {
    if (TargetPlatforms$Jvm_instance === null) {
      new TargetPlatforms$Jvm();
    }return TargetPlatforms$Jvm_instance;
  }
  function TargetPlatforms$Native() {
    TargetPlatforms$Native_instance = this;
    TargetPlatforms.call(this);
  }
  TargetPlatforms$Native.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Native',
    interfaces: [TargetPlatforms]
  };
  var TargetPlatforms$Native_instance = null;
  function TargetPlatforms$Native_getInstance() {
    if (TargetPlatforms$Native_instance === null) {
      new TargetPlatforms$Native();
    }return TargetPlatforms$Native_instance;
  }
  TargetPlatforms.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TargetPlatforms',
    interfaces: []
  };
  function YoutubeDownloader(parser, enableCORSProxy, CORSProxyAddress) {
    if (parser === void 0)
      parser = new DefaultParser();
    if (enableCORSProxy === void 0)
      enableCORSProxy = true;
    if (CORSProxyAddress === void 0)
      CORSProxyAddress = 'https://kind-grasshopper-73.telebit.io/cors/';
    this.parser_0 = parser;
    this.isCORSEnabled = enableCORSProxy;
    this.addressCORS = CORSProxyAddress;
  }
  Object.defineProperty(YoutubeDownloader.prototype, 'proxyCORS_0', {
    configurable: true,
    get: function () {
      return Kotlin.isType(activePlatform, TargetPlatforms$Js) && this.isCORSEnabled ? this.addressCORS : '';
    }
  });
  function Coroutine$getVideo_61zpoe$($this, videoId_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$ytConfigJson = void 0;
    this.local$videoDetails = void 0;
    this.local$videoId = videoId_0;
  }
  Coroutine$getVideo_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getVideo_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getVideo_61zpoe$.prototype.constructor = Coroutine$getVideo_61zpoe$;
  Coroutine$getVideo_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var htmlUrl = this.$this.proxyCORS_0 + 'https://www.youtube.com/watch?v=' + this.local$videoId;
            this.state_0 = 2;
            this.result_0 = this.$this.parser_0.getPlayerConfig_61zpoe$(htmlUrl, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var ytPlayerConfig = toMutableMap(this.result_0);
            var key = 'yt-downloader-videoId';
            var value = JsonPrimitive(this.local$videoId);
            ytPlayerConfig.put_xwzc9p$(key, value);
            this.local$ytConfigJson = new JsonObject(ytPlayerConfig);
            this.local$videoDetails = this.$this.parser_0.getVideoDetails_3q8efs$(this.local$ytConfigJson);
            this.state_0 = 3;
            this.result_0 = this.$this.parser_0.parseFormats_3q8efs$(this.local$ytConfigJson, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var formats = this.result_0;
            var subtitlesInfo = this.$this.parser_0.getSubtitlesInfoFromCaptions_3q8efs$(this.local$ytConfigJson);
            var clientVersion = this.$this.parser_0.getClientVersion_3q8efs$(this.local$ytConfigJson);
            tmp$ = this.local$videoDetails != null ? new YoutubeVideo(this.local$videoDetails, formats, subtitlesInfo, clientVersion) : null;
            if (tmp$ == null) {
              throw new YoutubeException$VideoUnavailableException("Video Details Couldn't Be Fetched");
            }
            return tmp$;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  YoutubeDownloader.prototype.getVideo_61zpoe$ = function (videoId_0, continuation_0, suspended) {
    var instance = new Coroutine$getVideo_61zpoe$(this, videoId_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getPlaylist_61zpoe$($this, playlistId_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$playlistDetails = void 0;
    this.local$playlistId = playlistId_0;
  }
  Coroutine$getPlaylist_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getPlaylist_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getPlaylist_61zpoe$.prototype.constructor = Coroutine$getPlaylist_61zpoe$;
  Coroutine$getPlaylist_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var htmlUrl = this.$this.proxyCORS_0 + 'https://www.youtube.com/playlist?list=' + this.local$playlistId;
            this.state_0 = 2;
            this.result_0 = this.$this.parser_0.getInitialData_61zpoe$(htmlUrl, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var ytInitialData = this.result_0;
            if (!ytInitialData.containsKey_11rb$('metadata')) {
              throw new YoutubeException$BadPageException('Invalid initial data json');
            }
            this.local$playlistDetails = this.$this.parser_0.getPlaylistDetails_15fzva$(this.local$playlistId, ytInitialData);
            this.state_0 = 3;
            this.result_0 = this.$this.parser_0.getPlaylistVideos_6rbl2u$(ytInitialData, this.local$playlistDetails.videoCount, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var videos = this.result_0;
            return new YoutubePlaylist(this.local$playlistDetails, videos);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  YoutubeDownloader.prototype.getPlaylist_61zpoe$ = function (playlistId_0, continuation_0, suspended) {
    var instance = new Coroutine$getPlaylist_61zpoe$(this, playlistId_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getChannelUploads_61zpoe$($this, channelId_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$channelId = channelId_0;
  }
  Coroutine$getChannelUploads_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getChannelUploads_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getChannelUploads_61zpoe$.prototype.constructor = Coroutine$getChannelUploads_61zpoe$;
  Coroutine$getChannelUploads_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.parser_0.getChannelUploadsPlaylistId_61zpoe$(this.local$channelId, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var playlistId = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.$this.getPlaylist_61zpoe$(playlistId, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  YoutubeDownloader.prototype.getChannelUploads_61zpoe$ = function (channelId_0, continuation_0, suspended) {
    var instance = new Coroutine$getChannelUploads_61zpoe$(this, channelId_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  YoutubeDownloader.prototype.getVideoSubtitles_61zpoe$ = function (videoId, continuation) {
    return this.parser_0.getSubtitlesInfo_61zpoe$(videoId, continuation);
  };
  YoutubeDownloader.prototype.setParserRequestProperty_puj7f4$ = function (key, value) {
    this.parser_0.extractor.setRequestProperty_puj7f4$(key, value);
  };
  YoutubeDownloader.prototype.setParserRetryOnFailure_za3lpa$ = function (retryOnFailure) {
    this.parser_0.extractor.setRetryOnFailure_za3lpa$(retryOnFailure);
  };
  YoutubeDownloader.prototype.addCipherFunctionPattern_19mbxw$ = function (priority, regex) {
    this.parser_0.cipherFactory.addInitialFunctionPattern_19mbxw$(priority, regex);
  };
  YoutubeDownloader.prototype.addCipherFunctionEquivalent_f6x3x9$ = function (regex, function_0) {
    this.parser_0.cipherFactory.addFunctionEquivalent_f6x3x9$(regex, function_0);
  };
  YoutubeDownloader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YoutubeDownloader',
    interfaces: []
  };
  function CachedCipherFactory(extractor) {
    CachedCipherFactory$Companion_getInstance();
    this.extractor_0 = extractor;
    this.knownInitialFunctionPatterns_0 = ArrayList_init_0();
    this.functionsEquivalentMap_0 = HashMap_init();
    this.ciphers_0 = HashMap_init();
    var tmp$, tmp$_0;
    tmp$ = CachedCipherFactory$Companion_getInstance().INITIAL_FUNCTION_PATTERNS;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var pattern = tmp$[tmp$_0];
      this.addInitialFunctionPattern_19mbxw$(this.knownInitialFunctionPatterns_0.size, pattern);
    }
    this.addFunctionEquivalent_f6x3x9$(CachedCipherFactory$Companion_getInstance().FUNCTION_REVERSE_PATTERN, new ReverseFunction());
    this.addFunctionEquivalent_f6x3x9$(CachedCipherFactory$Companion_getInstance().FUNCTION_SPLICE_PATTERN, new SpliceFunction());
    this.addFunctionEquivalent_f6x3x9$(CachedCipherFactory$Companion_getInstance().FUNCTION_SWAP1_PATTERN, new SwapFunctionV1());
    var swapFunctionV2 = new SwapFunctionV2();
    this.addFunctionEquivalent_f6x3x9$(CachedCipherFactory$Companion_getInstance().FUNCTION_SWAP2_PATTERN, swapFunctionV2);
    this.addFunctionEquivalent_f6x3x9$(CachedCipherFactory$Companion_getInstance().FUNCTION_SWAP3_PATTERN, swapFunctionV2);
  }
  CachedCipherFactory.prototype.addInitialFunctionPattern_19mbxw$ = function (priority, regex) {
    this.knownInitialFunctionPatterns_0.add_wxm5ur$(priority, Regex_init(regex));
  };
  CachedCipherFactory.prototype.addFunctionEquivalent_f6x3x9$ = function (regex, function_0) {
    var $receiver = this.functionsEquivalentMap_0;
    var key = Regex_init(regex);
    $receiver.put_xwzc9p$(key, function_0);
  };
  function Coroutine$createCipher_61zpoe$($this, jsUrl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$cipher = void 0;
    this.local$jsUrl = jsUrl_0;
  }
  Coroutine$createCipher_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createCipher_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createCipher_61zpoe$.prototype.constructor = Coroutine$createCipher_61zpoe$;
  Coroutine$createCipher_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$cipher = this.$this.ciphers_0.get_11rb$(this.local$jsUrl);
            if (this.local$cipher == null) {
              this.state_0 = 2;
              this.result_0 = this.$this.extractor_0.loadUrl_ughrhi$(this.local$jsUrl, void 0, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var js = this.result_0;
            var transformFunctions = this.$this.getTransformFunctions_0(js);
            var var_0 = transformFunctions.get_za3lpa$(0).var;
            var transformObject = this.$this.getTransformObject_0(var_0, js);
            var transformFunctionsMap = this.$this.getTransformFunctionsMap_0(transformObject);
            this.local$cipher = new DefaultCipher(transformFunctions, transformFunctionsMap);
            var $receiver = this.$this.ciphers_0;
            var value = this.local$cipher;
            $receiver.put_xwzc9p$(this.local$jsUrl, value);
            this.state_0 = 3;
            continue;
          case 3:
            return this.local$cipher;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  CachedCipherFactory.prototype.createCipher_61zpoe$ = function (jsUrl_0, continuation_0, suspended) {
    var instance = new Coroutine$createCipher_61zpoe$(this, jsUrl_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  CachedCipherFactory.prototype.clearCache = function () {
    this.ciphers_0.clear();
  };
  CachedCipherFactory.prototype.getTransformFunctions_0 = function (js) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var tmp$_4 = this.getInitialFunctionName_0(js);
    var name = Regex_init('[^$A-Za-z0-9_]').replace_x2uqeu$(tmp$_4, '');
    var pattern = Regex_init(Regex.Companion.escape_61zpoe$(name) + '=function\\(\\w\\)\\{[a-z=.(")]*;(.*);(?:.+)\\}');
    var matcher = pattern.find_905azu$(js);
    var $receiver = matcher != null ? matcher.value : null;
    if (!($receiver == null || isBlank($receiver))) {
      var jsFunctions = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = matcher != null ? matcher.groupValues : null) != null ? tmp$.get_za3lpa$(1) : null) != null ? split(tmp$_0, [';']) : null) != null ? copyToArray(tmp$_1) : null) != null ? tmp$_2 : [];
      var transformFunctions = ArrayList_init(jsFunctions.length);
      for (tmp$_3 = 0; tmp$_3 !== jsFunctions.length; ++tmp$_3) {
        var jsFunction = jsFunctions[tmp$_3];
        var parsedFunction = this.parseFunction_0(jsFunction);
        transformFunctions.add_11rb$(parsedFunction);
      }
      return transformFunctions;
    }throw new YoutubeException$CipherException('Transformation functions not found');
  };
  CachedCipherFactory.prototype.parseFunction_0 = function (jsFunction) {
    var tmp$, tmp$_0;
    tmp$ = CachedCipherFactory$Companion_getInstance().JS_FUNCTION_PATTERNS;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var jsFunctionPattern = tmp$[tmp$_0];
      var matcher = jsFunctionPattern.find_905azu$(jsFunction);
      if (matcher != null) {
        var var_0;
        var split = copyToArray(Regex_init('\\.').split_905azu$(jsFunction, 0));
        if (split.length > 1) {
          var_0 = split[0];
        } else {
          split = copyToArray(Regex_init('\\[').split_905azu$(jsFunction, 0));
          if (split.length > 1) {
            var_0 = split[0];
          } else {
            continue;
          }
        }
        var name = matcher.groupValues.get_za3lpa$(1);
        var argument = matcher.groupValues.get_za3lpa$(2);
        if (var_0 != null)
          return new JsFunction(var_0, name, argument);
      }}
    throw new YoutubeException$CipherException('Could not parse js function');
  };
  CachedCipherFactory.prototype.getInitialFunctionName_0 = function (js) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.knownInitialFunctionPatterns_0.iterator();
    while (tmp$.hasNext()) {
      var pattern = tmp$.next();
      var matcher = pattern.find_905azu$(js);
      var $receiver = matcher != null ? matcher.value : null;
      if (!($receiver == null || isBlank($receiver))) {
        if ((tmp$_1 = (tmp$_0 = matcher != null ? matcher.groupValues : null) != null ? tmp$_0.get_za3lpa$(1) : null) != null) {
          return tmp$_1;
        }}}
    throw new YoutubeException$CipherException('Initial function name not found');
  };
  CachedCipherFactory.prototype.getTransformObject_0 = function (var_0, js) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var temp = var_0;
    var tmp$_3 = temp;
    temp = Regex_init('[^$A-Za-z0-9_]').replace_x2uqeu$(tmp$_3, '');
    temp = Regex.Companion.escape_61zpoe$(temp);
    var pattern = Regex_init('var ' + temp + '=' + '\\' + '{([' + '\\' + 's' + '\\' + 'S]*?)' + '\\' + '};');
    var matcher = pattern.find_905azu$(js);
    var res = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = matcher != null ? matcher.groupValues : null) != null ? tmp$.get_za3lpa$(1) : null) != null ? Regex_init('\n').replace_x2uqeu$(tmp$_0, ' ') : null) != null ? split(tmp$_1, [', ']) : null) != null ? copyToArray(tmp$_2) : null;
    if (res == null) {
      throw new YoutubeException$CipherException('Transform object not found');
    }return res;
  };
  CachedCipherFactory.prototype.getTransformFunctionsMap_0 = function (transformObject) {
    var tmp$;
    var mapper = HashMap_init();
    for (tmp$ = 0; tmp$ !== transformObject.length; ++tmp$) {
      var obj = transformObject[tmp$];
      var split = split_0(obj, Kotlin.charArrayOf(58), void 0, 2);
      var name = split.get_za3lpa$(0);
      var jsFunction = split.get_za3lpa$(1);
      var function_0 = this.mapFunction_0(jsFunction);
      mapper.put_xwzc9p$(name, function_0);
    }
    return mapper;
  };
  CachedCipherFactory.prototype.mapFunction_0 = function (jsFunction) {
    var tmp$;
    tmp$ = this.functionsEquivalentMap_0.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var key = tmp$_0.key;
      var value = tmp$_0.value;
      var matcher = key.find_905azu$(jsFunction);
      var $receiver = matcher != null ? matcher.value : null;
      if (!($receiver == null || isBlank($receiver))) {
        return value;
      }}
    throw new YoutubeException$CipherException('Map function not found');
  };
  function CachedCipherFactory$Companion() {
    CachedCipherFactory$Companion_instance = this;
    this.INITIAL_FUNCTION_PATTERNS = ['\\b[cs]\\s*&&\\s*[adf]\\.set\\([^,]+\\s*,\\s*encodeURIComponent\\s*\\(\\s*([a-zA-Z0-9$]+)\\(', '\\b[a-zA-Z0-9]+\\s*&&\\s*[a-zA-Z0-9]+\\.set\\([^,]+\\s*,\\s*encodeURIComponent\\s*\\(\\s*([a-zA-Z0-9$]+)\\(', '(?:\\b|[^a-zA-Z0-9$])([a-zA-Z0-9$]{2})\\s*=\\s*function\\(\\s*a\\s*\\)\\s*\\{\\s*a\\s*=\\s*a\\.split\\(\\s*""\\s*\\)', '([a-zA-Z0-9$]+)\\s*=\\s*function\\(\\s*a\\s*\\)\\s*\\{\\s*a\\s*=\\s*a\\.split\\(\\s*""\\s*\\)', '(["\'])signature\\1\\s*,\\s*([a-zA-Z0-9$]+)\\(', '\\.sig\\|\\|([a-zA-Z0-9$]+)\\(', 'yt\\.akamaized\\.net/\\)\\s*\\|\\|\\s*.*?\\s*[cs]\\s*&&\\s*[adf]\\.set\\([^,]+\\s*,\\s*(?:encodeURIComponent\\s*\\()?\\s*()$', '\\b[cs]\\s*&&\\s*[adf]\\.set\\([^,]+\\s*,\\s*([a-zA-Z0-9$]+)\\(', '\\b[a-zA-Z0-9]+\\s*&&\\s*[a-zA-Z0-9]+\\.set\\([^,]+\\s*,\\s*([a-zA-Z0-9$]+)\\(', '\\bc\\s*&&\\s*a\\.set\\([^,]+\\s*,\\s*\\([^)]*\\)\\s*\\(\\s*([a-zA-Z0-9$]+)\\(', '\\bc\\s*&&\\s*[a-zA-Z0-9]+\\.set\\([^,]+\\s*,\\s*\\([^)]*\\)\\s*\\(\\s*([a-zA-Z0-9$]+)\\('];
    this.FUNCTION_REVERSE_PATTERN = '\\{\\w\\.reverse\\(\\)\\}';
    this.FUNCTION_SPLICE_PATTERN = '\\{\\w\\.splice\\(0,\\w\\)\\}';
    this.FUNCTION_SWAP1_PATTERN = '\\{var\\s\\w=\\w\\[0\\];\\w\\[0\\]=\\w\\[\\w%\\w.length\\];\\w\\[\\w\\]=\\w\\}';
    this.FUNCTION_SWAP2_PATTERN = '\\{var\\s\\w=\\w\\[0\\];\\w\\[0\\]=\\w\\[\\w%\\w.length\\];\\w\\[\\w%\\w.length\\]=\\w\\}';
    this.FUNCTION_SWAP3_PATTERN = 'function\\(\\w+,\\w+\\)\\{var\\s\\w=\\w\\[0\\];\\w\\[0\\]=\\w\\[\\w%\\w.length\\];\\w\\[\\w%\\w.length\\]=\\w\\}';
    this.JS_FUNCTION_PATTERNS = [Regex_init('\\w+\\.(\\w+)\\(\\w,(\\d+)\\)'), Regex_init('\\w+\\[(\\\\"\\w+\\\\")\\]\\(\\w,(\\d+)\\)')];
  }
  CachedCipherFactory$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CachedCipherFactory$Companion_instance = null;
  function CachedCipherFactory$Companion_getInstance() {
    if (CachedCipherFactory$Companion_instance === null) {
      new CachedCipherFactory$Companion();
    }return CachedCipherFactory$Companion_instance;
  }
  CachedCipherFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CachedCipherFactory',
    interfaces: [CipherFactory]
  };
  function Cipher() {
  }
  Cipher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Cipher',
    interfaces: []
  };
  function CipherFactory() {
  }
  CipherFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CipherFactory',
    interfaces: []
  };
  function CipherFunction() {
  }
  CipherFunction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CipherFunction',
    interfaces: []
  };
  function DefaultCipher(functions, functionsMap) {
    this.functions_0 = functions;
    this.functionsMap_0 = functionsMap;
  }
  DefaultCipher.prototype.getSignature_61zpoe$ = function (cipheredSignature) {
    var tmp$;
    var signature = toCharArray(cipheredSignature);
    tmp$ = this.functions_0.iterator();
    while (tmp$.hasNext()) {
      var jsFunction = tmp$.next();
      signature = ensureNotNull(this.functionsMap_0.get_11rb$(jsFunction.name)).apply_atc5ug$(signature, jsFunction.argument);
    }
    return concatToString(signature);
  };
  DefaultCipher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultCipher',
    interfaces: [Cipher]
  };
  function JsFunction(var_0, name, argument) {
    this.var = var_0;
    this.name = name;
    this.argument = argument;
  }
  JsFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsFunction',
    interfaces: []
  };
  JsFunction.prototype.component1 = function () {
    return this.var;
  };
  JsFunction.prototype.component2 = function () {
    return this.name;
  };
  JsFunction.prototype.component3 = function () {
    return this.argument;
  };
  JsFunction.prototype.copy_6hosri$ = function (var_0, name, argument) {
    return new JsFunction(var_0 === void 0 ? this.var : var_0, name === void 0 ? this.name : name, argument === void 0 ? this.argument : argument);
  };
  JsFunction.prototype.toString = function () {
    return 'JsFunction(var=' + Kotlin.toString(this.var) + (', name=' + Kotlin.toString(this.name)) + (', argument=' + Kotlin.toString(this.argument)) + ')';
  };
  JsFunction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.var) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.argument) | 0;
    return result;
  };
  JsFunction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.var, other.var) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.argument, other.argument)))));
  };
  function ReverseFunction() {
  }
  ReverseFunction.prototype.apply_atc5ug$ = function (array, argument) {
    var sb = StringBuilder_init().append_4hbowm$(array);
    return toCharArray(sb.reverse().toString());
  };
  ReverseFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReverseFunction',
    interfaces: [CipherFunction]
  };
  function SpliceFunction() {
  }
  SpliceFunction.prototype.apply_atc5ug$ = function (array, argument) {
    var tmp$;
    var deleteCount = toInt(argument);
    var spliced = Kotlin.charArray(array.length - deleteCount | 0);
    for (var i = 0; i < deleteCount; i++) {
      spliced[i] = array[i];
    }
    tmp$ = spliced.length - deleteCount | 0;
    for (var i_0 = 0; i_0 < tmp$; i_0++) {
      spliced[i_0 + deleteCount | 0] = array[i_0 + (deleteCount * 2 | 0) | 0];
    }
    return spliced;
  };
  SpliceFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpliceFunction',
    interfaces: [CipherFunction]
  };
  function SwapFunctionV1() {
  }
  SwapFunctionV1.prototype.apply_atc5ug$ = function (array, argument) {
    var position = toInt(argument);
    var c = array[0];
    array[0] = array[position % array.length];
    array[position] = c;
    return array;
  };
  SwapFunctionV1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwapFunctionV1',
    interfaces: [CipherFunction]
  };
  function SwapFunctionV2() {
  }
  SwapFunctionV2.prototype.apply_atc5ug$ = function (array, argument) {
    var position = toInt(argument);
    var c = array[0];
    array[0] = array[position % array.length];
    array[position % array.length] = c;
    return array;
  };
  SwapFunctionV2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwapFunctionV2',
    interfaces: [CipherFunction]
  };
  function YoutubeException(message) {
    Exception_init(message, this);
    this.name = 'YoutubeException';
  }
  function YoutubeException$VideoUnavailableException(message) {
    YoutubeException.call(this, message);
    this.message_wb63vq$_0 = message;
    this.name = 'YoutubeException$VideoUnavailableException';
  }
  Object.defineProperty(YoutubeException$VideoUnavailableException.prototype, 'message', {
    get: function () {
      return this.message_wb63vq$_0;
    }
  });
  YoutubeException$VideoUnavailableException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VideoUnavailableException',
    interfaces: [YoutubeException]
  };
  YoutubeException$VideoUnavailableException.prototype.component1 = function () {
    return this.message;
  };
  YoutubeException$VideoUnavailableException.prototype.copy_61zpoe$ = function (message) {
    return new YoutubeException$VideoUnavailableException(message === void 0 ? this.message : message);
  };
  YoutubeException$VideoUnavailableException.prototype.toString = function () {
    return 'VideoUnavailableException(message=' + Kotlin.toString(this.message) + ')';
  };
  YoutubeException$VideoUnavailableException.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  YoutubeException$VideoUnavailableException.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.message, other.message))));
  };
  function YoutubeException$BadPageException(message) {
    YoutubeException.call(this, message);
    this.message_czc2vh$_0 = message;
    this.name = 'YoutubeException$BadPageException';
  }
  Object.defineProperty(YoutubeException$BadPageException.prototype, 'message', {
    get: function () {
      return this.message_czc2vh$_0;
    }
  });
  YoutubeException$BadPageException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BadPageException',
    interfaces: [YoutubeException]
  };
  YoutubeException$BadPageException.prototype.component1 = function () {
    return this.message;
  };
  YoutubeException$BadPageException.prototype.copy_61zpoe$ = function (message) {
    return new YoutubeException$BadPageException(message === void 0 ? this.message : message);
  };
  YoutubeException$BadPageException.prototype.toString = function () {
    return 'BadPageException(message=' + Kotlin.toString(this.message) + ')';
  };
  YoutubeException$BadPageException.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  YoutubeException$BadPageException.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.message, other.message))));
  };
  function YoutubeException$UnknownFormatException(message) {
    YoutubeException.call(this, message);
    this.message_o9g36o$_0 = message;
    this.name = 'YoutubeException$UnknownFormatException';
  }
  Object.defineProperty(YoutubeException$UnknownFormatException.prototype, 'message', {
    get: function () {
      return this.message_o9g36o$_0;
    }
  });
  YoutubeException$UnknownFormatException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnknownFormatException',
    interfaces: [YoutubeException]
  };
  YoutubeException$UnknownFormatException.prototype.component1 = function () {
    return this.message;
  };
  YoutubeException$UnknownFormatException.prototype.copy_61zpoe$ = function (message) {
    return new YoutubeException$UnknownFormatException(message === void 0 ? this.message : message);
  };
  YoutubeException$UnknownFormatException.prototype.toString = function () {
    return 'UnknownFormatException(message=' + Kotlin.toString(this.message) + ')';
  };
  YoutubeException$UnknownFormatException.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  YoutubeException$UnknownFormatException.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.message, other.message))));
  };
  function YoutubeException$CipherException(message) {
    YoutubeException.call(this, message);
    this.message_vq07dc$_0 = message;
    this.name = 'YoutubeException$CipherException';
  }
  Object.defineProperty(YoutubeException$CipherException.prototype, 'message', {
    get: function () {
      return this.message_vq07dc$_0;
    }
  });
  YoutubeException$CipherException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CipherException',
    interfaces: [YoutubeException]
  };
  YoutubeException$CipherException.prototype.component1 = function () {
    return this.message;
  };
  YoutubeException$CipherException.prototype.copy_61zpoe$ = function (message) {
    return new YoutubeException$CipherException(message === void 0 ? this.message : message);
  };
  YoutubeException$CipherException.prototype.toString = function () {
    return 'CipherException(message=' + Kotlin.toString(this.message) + ')';
  };
  YoutubeException$CipherException.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  YoutubeException$CipherException.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.message, other.message))));
  };
  function YoutubeException$NetworkException(message) {
    YoutubeException.call(this, message);
    this.message_wdta1f$_0 = message;
    this.name = 'YoutubeException$NetworkException';
  }
  Object.defineProperty(YoutubeException$NetworkException.prototype, 'message', {
    get: function () {
      return this.message_wdta1f$_0;
    }
  });
  YoutubeException$NetworkException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NetworkException',
    interfaces: [YoutubeException]
  };
  YoutubeException$NetworkException.prototype.component1 = function () {
    return this.message;
  };
  YoutubeException$NetworkException.prototype.copy_61zpoe$ = function (message) {
    return new YoutubeException$NetworkException(message === void 0 ? this.message : message);
  };
  YoutubeException$NetworkException.prototype.toString = function () {
    return 'NetworkException(message=' + Kotlin.toString(this.message) + ')';
  };
  YoutubeException$NetworkException.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  YoutubeException$NetworkException.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.message, other.message))));
  };
  function YoutubeException$SubtitlesException(message) {
    YoutubeException.call(this, message);
    this.message_g81ug6$_0 = message;
    this.name = 'YoutubeException$SubtitlesException';
  }
  Object.defineProperty(YoutubeException$SubtitlesException.prototype, 'message', {
    get: function () {
      return this.message_g81ug6$_0;
    }
  });
  YoutubeException$SubtitlesException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubtitlesException',
    interfaces: [YoutubeException]
  };
  YoutubeException$SubtitlesException.prototype.component1 = function () {
    return this.message;
  };
  YoutubeException$SubtitlesException.prototype.copy_61zpoe$ = function (message) {
    return new YoutubeException$SubtitlesException(message === void 0 ? this.message : message);
  };
  YoutubeException$SubtitlesException.prototype.toString = function () {
    return 'SubtitlesException(message=' + Kotlin.toString(this.message) + ')';
  };
  YoutubeException$SubtitlesException.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  YoutubeException$SubtitlesException.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.message, other.message))));
  };
  function YoutubeException$DownloadUnavailableException(message) {
    YoutubeException.call(this, message);
    this.message_uznw4n$_0 = message;
    this.name = 'YoutubeException$DownloadUnavailableException';
  }
  Object.defineProperty(YoutubeException$DownloadUnavailableException.prototype, 'message', {
    get: function () {
      return this.message_uznw4n$_0;
    }
  });
  function YoutubeException$DownloadUnavailableException$LiveVideoException(message) {
    YoutubeException$DownloadUnavailableException.call(this, message);
    this.message_3z8t2l$_0 = message;
    this.name = 'YoutubeException$DownloadUnavailableException$LiveVideoException';
  }
  Object.defineProperty(YoutubeException$DownloadUnavailableException$LiveVideoException.prototype, 'message', {
    get: function () {
      return this.message_3z8t2l$_0;
    }
  });
  YoutubeException$DownloadUnavailableException$LiveVideoException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LiveVideoException',
    interfaces: [YoutubeException$DownloadUnavailableException]
  };
  YoutubeException$DownloadUnavailableException$LiveVideoException.prototype.component1 = function () {
    return this.message;
  };
  YoutubeException$DownloadUnavailableException$LiveVideoException.prototype.copy_61zpoe$ = function (message) {
    return new YoutubeException$DownloadUnavailableException$LiveVideoException(message === void 0 ? this.message : message);
  };
  YoutubeException$DownloadUnavailableException$LiveVideoException.prototype.toString = function () {
    return 'LiveVideoException(message=' + Kotlin.toString(this.message) + ')';
  };
  YoutubeException$DownloadUnavailableException$LiveVideoException.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  YoutubeException$DownloadUnavailableException$LiveVideoException.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.message, other.message))));
  };
  function YoutubeException$DownloadUnavailableException$RestrictedVideoException(message) {
    YoutubeException$DownloadUnavailableException.call(this, message);
    this.message_xq2vc2$_0 = message;
    this.name = 'YoutubeException$DownloadUnavailableException$RestrictedVideoException';
  }
  Object.defineProperty(YoutubeException$DownloadUnavailableException$RestrictedVideoException.prototype, 'message', {
    get: function () {
      return this.message_xq2vc2$_0;
    }
  });
  YoutubeException$DownloadUnavailableException$RestrictedVideoException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RestrictedVideoException',
    interfaces: [YoutubeException$DownloadUnavailableException]
  };
  YoutubeException$DownloadUnavailableException$RestrictedVideoException.prototype.component1 = function () {
    return this.message;
  };
  YoutubeException$DownloadUnavailableException$RestrictedVideoException.prototype.copy_61zpoe$ = function (message) {
    return new YoutubeException$DownloadUnavailableException$RestrictedVideoException(message === void 0 ? this.message : message);
  };
  YoutubeException$DownloadUnavailableException$RestrictedVideoException.prototype.toString = function () {
    return 'RestrictedVideoException(message=' + Kotlin.toString(this.message) + ')';
  };
  YoutubeException$DownloadUnavailableException$RestrictedVideoException.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  YoutubeException$DownloadUnavailableException$RestrictedVideoException.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.message, other.message))));
  };
  YoutubeException$DownloadUnavailableException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DownloadUnavailableException',
    interfaces: [YoutubeException]
  };
  YoutubeException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YoutubeException',
    interfaces: [Exception]
  };
  function get$lambda($receiver) {
    return Unit;
  }
  function post$lambda($receiver) {
    return Unit;
  }
  function DefaultExtractor() {
    DefaultExtractor$Companion_getInstance();
    this.requestProperties_0 = HashMap_init();
    this.retryOnFailure_0 = 3;
    this.setRequestProperty_puj7f4$('User-Agent', DefaultExtractor$Companion_getInstance().DEFAULT_USER_AGENT);
    this.setRequestProperty_puj7f4$('Accept-language', DefaultExtractor$Companion_getInstance().DEFAULT_ACCEPT_LANG);
  }
  DefaultExtractor.prototype.setRequestProperty_puj7f4$ = function (key, value) {
    this.requestProperties_0.put_xwzc9p$(key, value);
  };
  DefaultExtractor.prototype.setRetryOnFailure_za3lpa$ = function (retryOnFailure) {
    if (!(retryOnFailure >= 0)) {
      var message = 'retry count should be > 0';
      throw IllegalArgumentException_init(message.toString());
    }this.retryOnFailure_0 = retryOnFailure;
  };
  DefaultExtractor.prototype.extractYtPlayerConfig_61zpoe$ = function (html) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = DefaultExtractor$Companion_getInstance().YT_PLAYER_CONFIG_PATTERNS.iterator();
    while (tmp$.hasNext()) {
      var pattern = tmp$.next();
      var match = pattern.find_905azu$(html);
      var $receiver = match != null ? match.value : null;
      if (!($receiver == null || isBlank($receiver))) {
        if ((tmp$_1 = (tmp$_0 = match != null ? match.groupValues : null) != null ? tmp$_0.get_za3lpa$(1) : null) != null) {
          return tmp$_1;
        }}}
    throw new YoutubeException$BadPageException('Could not parse web page');
  };
  DefaultExtractor.prototype.extractYtInitialData_61zpoe$ = function (html) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = DefaultExtractor$Companion_getInstance().YT_INITIAL_DATA_PATTERNS.iterator();
    while (tmp$.hasNext()) {
      var pattern = tmp$.next();
      var match = pattern.find_905azu$(html);
      var $receiver = match != null ? match.value : null;
      if (!($receiver == null || isBlank($receiver))) {
        if ((tmp$_1 = (tmp$_0 = match != null ? match.groupValues : null) != null ? tmp$_0.get_za3lpa$(1) : null) != null) {
          return tmp$_1;
        }}}
    throw new YoutubeException$BadPageException('Could not parse web page');
  };
  function DefaultExtractor$loadUrl$lambda($receiver) {
    return Unit;
  }
  function DefaultExtractor$loadUrl$lambda$lambda(this$DefaultExtractor, this$) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$DefaultExtractor.requestProperties_0.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_0 = tmp$.next();
        var key = tmp$_0.key;
        var value = tmp$_0.value;
        if (!equals(key, 'Content-Type', true)) {
          header(this$, key, value);
        }}
      return Unit;
    };
  }
  function DefaultExtractor$loadUrl$lambda_0(this$DefaultExtractor) {
    return function ($receiver) {
      headers($receiver, DefaultExtractor$loadUrl$lambda$lambda(this$DefaultExtractor, $receiver));
      return Unit;
    };
  }
  function DefaultExtractor$loadUrl$lambda_1(closure$headers, closure$rawData) {
    return function ($receiver) {
      closure$headers($receiver);
      if (closure$rawData != null) {
        $receiver.body = closure$rawData;
      }return Unit;
    };
  }
  function Coroutine$loadUrl_ughrhi$$default($this, url_0, rawData_0, method_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 21;
    this.$this = $this;
    this.local$tmp$_0 = void 0;
    this.local$client = void 0;
    this.local$retryCount = void 0;
    this.local$errorMsg = void 0;
    this.local$headers = void 0;
    this.local$response_0 = void 0;
    this.local$response = void 0;
    this.local$url = url_0;
    this.local$rawData = rawData_0;
    this.local$method = method_0;
  }
  Coroutine$loadUrl_ughrhi$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadUrl_ughrhi$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadUrl_ughrhi$$default.prototype.constructor = Coroutine$loadUrl_ughrhi$$default;
  Coroutine$loadUrl_ughrhi$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$client = HttpClient(DefaultExtractor$loadUrl$lambda);
            this.local$retryCount = this.$this.retryOnFailure_0;
            this.local$errorMsg = '';
            this.local$headers = DefaultExtractor$loadUrl$lambda_0(this.$this);
            this.state_0 = 1;
            continue;
          case 1:
            if ((tmp$ = this.local$retryCount, this.local$retryCount = tmp$ - 1 | 0, tmp$) < 0) {
              this.state_0 = 22;
              continue;
            }
            this.exceptionState_0 = 19;
            switch (this.local$method.name) {
              case 'GET':
                var host_0;
                var body_0;
                host_0 = 'localhost';
                body_0 = utils.EmptyContent;
                var $receiver_1 = new HttpRequestBuilder_init();
                url($receiver_1, 'http', host_0, 0, '/');
                $receiver_1.method = HttpMethod.Companion.Get;
                $receiver_1.body = body_0;
                takeFrom($receiver_1.url, this.local$url);
                this.local$headers($receiver_1);
                var $this_0 = new HttpStatement_init($receiver_1, this.local$client);
                var tmp$_4, tmp$_5, tmp$_6;
                tmp$_4 = PrimitiveClasses$stringClass;
                if (equals_0(tmp$_4, getKClass(HttpStatement_init))) {
                  this.result_0 = typeof (tmp$_5 = $this_0) === 'string' ? tmp$_5 : throwCCE();
                  this.state_0 = 17;
                  continue;
                } else {
                  if (equals_0(tmp$_4, getKClass(HttpResponse))) {
                    this.state_0 = 15;
                    this.result_0 = $this_0.execute(this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  } else {
                    this.state_0 = 10;
                    this.result_0 = $this_0.executeUnsafe(this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  }
                }

              case 'POST':
                var host_0_0;
                var body_0_0;
                host_0_0 = 'localhost';
                body_0_0 = utils.EmptyContent;
                var $receiver_1_0 = new HttpRequestBuilder_init();
                url($receiver_1_0, 'http', host_0_0, 0, '/');
                $receiver_1_0.method = HttpMethod.Companion.Post;
                $receiver_1_0.body = body_0_0;
                takeFrom($receiver_1_0.url, this.local$url);
                DefaultExtractor$loadUrl$lambda_1(this.local$headers, this.local$rawData)($receiver_1_0);
                var $this_0_0 = new HttpStatement_init($receiver_1_0, this.local$client);
                var tmp$_4_0, tmp$_5_0, tmp$_6_0;
                tmp$_4_0 = PrimitiveClasses$stringClass;
                if (equals_0(tmp$_4_0, getKClass(HttpStatement_init))) {
                  this.result_0 = typeof (tmp$_5_0 = $this_0_0) === 'string' ? tmp$_5_0 : throwCCE();
                  this.state_0 = 9;
                  continue;
                } else {
                  if (equals_0(tmp$_4_0, getKClass(HttpResponse))) {
                    this.state_0 = 7;
                    this.result_0 = $this_0_0.execute(this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  } else {
                    this.state_0 = 2;
                    this.result_0 = $this_0_0.executeUnsafe(this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  }
                }

              default:this.local$tmp$_0 = Kotlin.noWhenBranchMatched();
                this.state_0 = 18;
                continue;
            }

          case 2:
            this.local$response = this.result_0;
            this.exceptionState_0 = 5;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, PrimitiveClasses$stringClass, createKType(PrimitiveClasses$stringClass, [], false));
              } catch (_) {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, PrimitiveClasses$stringClass, null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 3;
            this.result_0 = tmp$_8.receive_qi9ur9$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = typeof (tmp$_7 = this.result_0) === 'string' ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 19;
            this.finallyPath_0 = [4];
            this.state_0 = 6;
            continue;
          case 4:
            this.state_0 = 8;
            continue;
          case 5:
            this.finallyPath_0 = [19];
            this.state_0 = 6;
            continue;
          case 6:
            this.exceptionState_0 = 19;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 7:
            this.result_0 = typeof (tmp$_6_0 = this.result_0) === 'string' ? tmp$_6_0 : throwCCE();
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.result_0;
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 18;
            continue;
          case 10:
            this.local$response_0 = this.result_0;
            this.exceptionState_0 = 13;
            var tmp$_7_0;
            var tmp$_8_0 = this.local$response_0.call;
            var typeInfo$result_0_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0_0 = typeInfoImpl(reflect.JsType, PrimitiveClasses$stringClass, createKType(PrimitiveClasses$stringClass, [], false));
              } catch (__0) {
                typeInfo$result_0_0 = typeInfoImpl(reflect.JsType, PrimitiveClasses$stringClass, null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 11;
            this.result_0 = tmp$_8_0.receive_qi9ur9$(typeInfo$result_0_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.result_0 = typeof (tmp$_7_0 = this.result_0) === 'string' ? tmp$_7_0 : throwCCE();
            this.exceptionState_0 = 19;
            this.finallyPath_0 = [12];
            this.state_0 = 14;
            continue;
          case 12:
            this.state_0 = 16;
            continue;
          case 13:
            this.finallyPath_0 = [19];
            this.state_0 = 14;
            continue;
          case 14:
            this.exceptionState_0 = 19;
            complete(this.local$response_0);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 15:
            this.result_0 = typeof (tmp$_6 = this.result_0) === 'string' ? tmp$_6 : throwCCE();
            this.state_0 = 16;
            continue;
          case 16:
            this.state_0 = 17;
            continue;
          case 17:
            this.result_0;
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 18;
            continue;
          case 18:
            var response = this.local$tmp$_0;
            this.local$client.close();
            return response;
          case 19:
            this.exceptionState_0 = 21;
            var e = this.exception_0;
            if (Kotlin.isType(e, IOException)) {
              this.local$client.close();
              this.local$errorMsg = 'Could not load url: ' + this.local$url + ', exception: ' + toString(e.message);
            } else
              throw e;
            this.state_0 = 20;
            continue;
          case 20:
            this.state_0 = 1;
            continue;
          case 21:
            throw this.exception_0;
          case 22:
            throw new YoutubeException$VideoUnavailableException(this.local$errorMsg);
          default:this.state_0 = 21;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 21) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DefaultExtractor.prototype.loadUrl_ughrhi$$default = function (url_0, rawData_0, method_0, continuation_0, suspended) {
    var instance = new Coroutine$loadUrl_ughrhi$$default(this, url_0, rawData_0, method_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function DefaultExtractor$Companion() {
    DefaultExtractor$Companion_instance = this;
    this.YT_PLAYER_CONFIG_PATTERNS = listOf([Regex_init(';ytplayer\\.config = (\\{.*?\\});ytplayer'), Regex_init(';ytplayer\\.config = (\\{.*?\\});'), Regex_init('ytInitialPlayerResponse\\s*=\\s*(\\{.+?\\})\\s*;')]);
    this.YT_INITIAL_DATA_PATTERNS = listOf([Regex_init('window\\["ytInitialData"\\] = (\\{.*?\\});'), Regex_init('ytInitialData = (\\{.*?\\});')]);
    this.DEFAULT_USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36';
    this.DEFAULT_ACCEPT_LANG = 'en-US,en;';
    this.DEFAULT_RETRY_ON_FAILURE = 3;
  }
  DefaultExtractor$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DefaultExtractor$Companion_instance = null;
  function DefaultExtractor$Companion_getInstance() {
    if (DefaultExtractor$Companion_instance === null) {
      new DefaultExtractor$Companion();
    }return DefaultExtractor$Companion_instance;
  }
  DefaultExtractor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultExtractor',
    interfaces: [Extractor]
  };
  function Extractor() {
  }
  Extractor.prototype.loadUrl_ughrhi$ = function (url, rawData, method, continuation, callback$default) {
    if (rawData === void 0)
      rawData = null;
    if (method === void 0)
      method = Methods$GET_getInstance();
    return callback$default ? callback$default(url, rawData, method, continuation) : this.loadUrl_ughrhi$$default(url, rawData, method, continuation);
  };
  Extractor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Extractor',
    interfaces: []
  };
  function AbstractVideoDetails(json) {
    this.videoId = getString(json, 'videoId');
    this.lengthSeconds = getInteger(json, 'lengthSeconds');
    this.thumbnails = null;
    this.title = null;
    this.author = null;
    this.isLive_8m9448$_0 = false;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var jsonThumbnails = (tmp$ = getJsonObject(json, 'thumbnail')) != null ? getJsonArray(tmp$, 'thumbnails') : null;
    this.thumbnails = ArrayList_init_0();
    tmp$_1 = (tmp$_0 = jsonThumbnails != null ? jsonThumbnails.size : null) != null ? tmp$_0 : 0;
    for (var i = 0; i < tmp$_1; i++) {
      var jsonObject = jsonThumbnails != null ? getJsonObject_0(jsonThumbnails, i) : null;
      if ((tmp$_2 = jsonObject != null ? getString(jsonObject, 'url') : null) != null) {
        this.thumbnails.add_11rb$(tmp$_2);
      }}
  }
  Object.defineProperty(AbstractVideoDetails.prototype, 'isLive', {
    configurable: true,
    get: function () {
      return this.isLive_8m9448$_0;
    },
    set: function (isLive) {
      this.isLive_8m9448$_0 = isLive;
    }
  });
  AbstractVideoDetails.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractVideoDetails',
    interfaces: []
  };
  function Extension(value) {
    this.value = value;
  }
  function Extension$MPEG4() {
    Extension$MPEG4_instance = this;
    Extension.call(this, 'mp4');
  }
  Extension$MPEG4.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MPEG4',
    interfaces: [Extension]
  };
  var Extension$MPEG4_instance = null;
  function Extension$MPEG4_getInstance() {
    if (Extension$MPEG4_instance === null) {
      new Extension$MPEG4();
    }return Extension$MPEG4_instance;
  }
  function Extension$WEBM() {
    Extension$WEBM_instance = this;
    Extension.call(this, 'webm');
  }
  Extension$WEBM.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WEBM',
    interfaces: [Extension]
  };
  var Extension$WEBM_instance = null;
  function Extension$WEBM_getInstance() {
    if (Extension$WEBM_instance === null) {
      new Extension$WEBM();
    }return Extension$WEBM_instance;
  }
  function Extension$_3GP() {
    Extension$_3GP_instance = this;
    Extension.call(this, '3gp');
  }
  Extension$_3GP.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '_3GP',
    interfaces: [Extension]
  };
  var Extension$_3GP_instance = null;
  function Extension$_3GP_getInstance() {
    if (Extension$_3GP_instance === null) {
      new Extension$_3GP();
    }return Extension$_3GP_instance;
  }
  function Extension$FLV() {
    Extension$FLV_instance = this;
    Extension.call(this, 'flv');
  }
  Extension$FLV.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FLV',
    interfaces: [Extension]
  };
  var Extension$FLV_instance = null;
  function Extension$FLV_getInstance() {
    if (Extension$FLV_instance === null) {
      new Extension$FLV();
    }return Extension$FLV_instance;
  }
  function Extension$M4A() {
    Extension$M4A_instance = this;
    Extension.call(this, 'm4a');
  }
  Extension$M4A.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'M4A',
    interfaces: [Extension]
  };
  var Extension$M4A_instance = null;
  function Extension$M4A_getInstance() {
    if (Extension$M4A_instance === null) {
      new Extension$M4A();
    }return Extension$M4A_instance;
  }
  function Extension$WEBA() {
    Extension$WEBA_instance = this;
    Extension.call(this, 'weba');
  }
  Extension$WEBA.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WEBA',
    interfaces: [Extension]
  };
  var Extension$WEBA_instance = null;
  function Extension$WEBA_getInstance() {
    if (Extension$WEBA_instance === null) {
      new Extension$WEBA();
    }return Extension$WEBA_instance;
  }
  function Extension$JSON3() {
    Extension$JSON3_instance = this;
    Extension.call(this, 'json3');
  }
  Extension$JSON3.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JSON3',
    interfaces: [Extension]
  };
  var Extension$JSON3_instance = null;
  function Extension$JSON3_getInstance() {
    if (Extension$JSON3_instance === null) {
      new Extension$JSON3();
    }return Extension$JSON3_instance;
  }
  function Extension$SUBRIP() {
    Extension$SUBRIP_instance = this;
    Extension.call(this, 'srt');
  }
  Extension$SUBRIP.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SUBRIP',
    interfaces: [Extension]
  };
  var Extension$SUBRIP_instance = null;
  function Extension$SUBRIP_getInstance() {
    if (Extension$SUBRIP_instance === null) {
      new Extension$SUBRIP();
    }return Extension$SUBRIP_instance;
  }
  function Extension$TRANSCRIPT_V1() {
    Extension$TRANSCRIPT_V1_instance = this;
    Extension.call(this, 'srv1');
  }
  Extension$TRANSCRIPT_V1.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TRANSCRIPT_V1',
    interfaces: [Extension]
  };
  var Extension$TRANSCRIPT_V1_instance = null;
  function Extension$TRANSCRIPT_V1_getInstance() {
    if (Extension$TRANSCRIPT_V1_instance === null) {
      new Extension$TRANSCRIPT_V1();
    }return Extension$TRANSCRIPT_V1_instance;
  }
  function Extension$TRANSCRIPT_V2() {
    Extension$TRANSCRIPT_V2_instance = this;
    Extension.call(this, 'srv2');
  }
  Extension$TRANSCRIPT_V2.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TRANSCRIPT_V2',
    interfaces: [Extension]
  };
  var Extension$TRANSCRIPT_V2_instance = null;
  function Extension$TRANSCRIPT_V2_getInstance() {
    if (Extension$TRANSCRIPT_V2_instance === null) {
      new Extension$TRANSCRIPT_V2();
    }return Extension$TRANSCRIPT_V2_instance;
  }
  function Extension$TRANSCRIPT_V3() {
    Extension$TRANSCRIPT_V3_instance = this;
    Extension.call(this, 'srv3');
  }
  Extension$TRANSCRIPT_V3.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TRANSCRIPT_V3',
    interfaces: [Extension]
  };
  var Extension$TRANSCRIPT_V3_instance = null;
  function Extension$TRANSCRIPT_V3_getInstance() {
    if (Extension$TRANSCRIPT_V3_instance === null) {
      new Extension$TRANSCRIPT_V3();
    }return Extension$TRANSCRIPT_V3_instance;
  }
  function Extension$TTML() {
    Extension$TTML_instance = this;
    Extension.call(this, 'ttml');
  }
  Extension$TTML.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TTML',
    interfaces: [Extension]
  };
  var Extension$TTML_instance = null;
  function Extension$TTML_getInstance() {
    if (Extension$TTML_instance === null) {
      new Extension$TTML();
    }return Extension$TTML_instance;
  }
  function Extension$WEBVTT() {
    Extension$WEBVTT_instance = this;
    Extension.call(this, 'vtt');
  }
  Extension$WEBVTT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WEBVTT',
    interfaces: [Extension]
  };
  var Extension$WEBVTT_instance = null;
  function Extension$WEBVTT_getInstance() {
    if (Extension$WEBVTT_instance === null) {
      new Extension$WEBVTT();
    }return Extension$WEBVTT_instance;
  }
  function Extension$UNKNOWN() {
    Extension$UNKNOWN_instance = this;
    Extension.call(this, 'unknown');
  }
  Extension$UNKNOWN.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UNKNOWN',
    interfaces: [Extension]
  };
  var Extension$UNKNOWN_instance = null;
  function Extension$UNKNOWN_getInstance() {
    if (Extension$UNKNOWN_instance === null) {
      new Extension$UNKNOWN();
    }return Extension$UNKNOWN_instance;
  }
  Object.defineProperty(Extension.prototype, 'isAudio', {
    configurable: true,
    get: function () {
      return equals_0(this, Extension$M4A_getInstance()) || equals_0(this, Extension$WEBM_getInstance());
    }
  });
  Object.defineProperty(Extension.prototype, 'isVideo', {
    configurable: true,
    get: function () {
      return equals_0(this, Extension$MPEG4_getInstance()) || equals_0(this, Extension$WEBM_getInstance()) || equals_0(this, Extension$_3GP_getInstance()) || equals_0(this, Extension$FLV_getInstance());
    }
  });
  Object.defineProperty(Extension.prototype, 'isSubtitle', {
    configurable: true,
    get: function () {
      return equals_0(this, Extension$SUBRIP_getInstance()) || equals_0(this, Extension$TRANSCRIPT_V1_getInstance()) || equals_0(this, Extension$TRANSCRIPT_V2_getInstance()) || equals_0(this, Extension$TRANSCRIPT_V3_getInstance()) || equals_0(this, Extension$TTML_getInstance()) || equals_0(this, Extension$WEBVTT_getInstance()) || equals_0(this, Extension$JSON3_getInstance());
    }
  });
  Extension.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Extension',
    interfaces: []
  };
  function Itag() {
    this.id = 0;
    this.videoQuality_68vpjy$_0 = null;
    this.audioQuality_xshuwz$_0 = null;
    this.isVRor3D_8rpacs$_0 = false;
  }
  function Itag_initFields() {
    Itag_initFields = function () {
    };
    Itag$unknown_instance = Itag_init('unknown', 0);
    Itag$i5_instance = Itag_init_2('i5', 1, VideoQuality$small_getInstance(), AudioQuality$low_getInstance());
    Itag$i6_instance = Itag_init_2('i6', 2, VideoQuality$small_getInstance(), AudioQuality$low_getInstance());
    Itag$i13_instance = Itag_init_2('i13', 3, VideoQuality$unknown_getInstance(), AudioQuality$low_getInstance());
    Itag$i17_instance = Itag_init_2('i17', 4, VideoQuality$tiny_getInstance(), AudioQuality$low_getInstance());
    Itag$i18_instance = Itag_init_2('i18', 5, VideoQuality$medium_getInstance(), AudioQuality$low_getInstance());
    Itag$i22_instance = Itag_init_2('i22', 6, VideoQuality$hd720_getInstance(), AudioQuality$medium_getInstance());
    Itag$i34_instance = Itag_init_2('i34', 7, VideoQuality$medium_getInstance(), AudioQuality$medium_getInstance());
    Itag$i35_instance = Itag_init_2('i35', 8, VideoQuality$large_getInstance(), AudioQuality$medium_getInstance());
    Itag$i36_instance = Itag_init_2('i36', 9, VideoQuality$tiny_getInstance(), AudioQuality$unknown_getInstance());
    Itag$i37_instance = Itag_init_2('i37', 10, VideoQuality$hd1080_getInstance(), AudioQuality$medium_getInstance());
    Itag$i38_instance = Itag_init_2('i38', 11, VideoQuality$highres_getInstance(), AudioQuality$medium_getInstance());
    Itag$i43_instance = Itag_init_2('i43', 12, VideoQuality$medium_getInstance(), AudioQuality$medium_getInstance());
    Itag$i44_instance = Itag_init_2('i44', 13, VideoQuality$large_getInstance(), AudioQuality$medium_getInstance());
    Itag$i45_instance = Itag_init_2('i45', 14, VideoQuality$hd720_getInstance(), AudioQuality$medium_getInstance());
    Itag$i46_instance = Itag_init_2('i46', 15, VideoQuality$hd1080_getInstance(), AudioQuality$medium_getInstance());
    Itag$i82_instance = Itag_init_3('i82', 16, VideoQuality$medium_getInstance(), AudioQuality$medium_getInstance(), true);
    Itag$i83_instance = Itag_init_3('i83', 17, VideoQuality$large_getInstance(), AudioQuality$medium_getInstance(), true);
    Itag$i84_instance = Itag_init_3('i84', 18, VideoQuality$hd720_getInstance(), AudioQuality$medium_getInstance(), true);
    Itag$i85_instance = Itag_init_3('i85', 19, VideoQuality$hd1080_getInstance(), AudioQuality$medium_getInstance(), true);
    Itag$i100_instance = Itag_init_3('i100', 20, VideoQuality$medium_getInstance(), AudioQuality$medium_getInstance(), true);
    Itag$i101_instance = Itag_init_3('i101', 21, VideoQuality$large_getInstance(), AudioQuality$medium_getInstance(), true);
    Itag$i102_instance = Itag_init_3('i102', 22, VideoQuality$hd720_getInstance(), AudioQuality$medium_getInstance(), true);
    Itag$i91_instance = Itag_init_2('i91', 23, VideoQuality$tiny_getInstance(), AudioQuality$low_getInstance());
    Itag$i92_instance = Itag_init_2('i92', 24, VideoQuality$small_getInstance(), AudioQuality$low_getInstance());
    Itag$i93_instance = Itag_init_2('i93', 25, VideoQuality$medium_getInstance(), AudioQuality$medium_getInstance());
    Itag$i94_instance = Itag_init_2('i94', 26, VideoQuality$large_getInstance(), AudioQuality$medium_getInstance());
    Itag$i95_instance = Itag_init_2('i95', 27, VideoQuality$hd720_getInstance(), AudioQuality$high_getInstance());
    Itag$i96_instance = Itag_init_2('i96', 28, VideoQuality$hd1080_getInstance(), AudioQuality$high_getInstance());
    Itag$i132_instance = Itag_init_2('i132', 29, VideoQuality$small_getInstance(), AudioQuality$low_getInstance());
    Itag$i151_instance = Itag_init_2('i151', 30, VideoQuality$tiny_getInstance(), AudioQuality$low_getInstance());
    Itag$i133_instance = Itag_init_0('i133', 31, VideoQuality$small_getInstance());
    Itag$i134_instance = Itag_init_0('i134', 32, VideoQuality$medium_getInstance());
    Itag$i135_instance = Itag_init_0('i135', 33, VideoQuality$large_getInstance());
    Itag$i136_instance = Itag_init_0('i136', 34, VideoQuality$hd720_getInstance());
    Itag$i137_instance = Itag_init_0('i137', 35, VideoQuality$hd1080_getInstance());
    Itag$i138_instance = Itag_init_0('i138', 36, VideoQuality$hd2160_getInstance());
    Itag$i160_instance = Itag_init_0('i160', 37, VideoQuality$tiny_getInstance());
    Itag$i212_instance = Itag_init_0('i212', 38, VideoQuality$large_getInstance());
    Itag$i264_instance = Itag_init_0('i264', 39, VideoQuality$hd1440_getInstance());
    Itag$i266_instance = Itag_init_0('i266', 40, VideoQuality$hd2160_getInstance());
    Itag$i298_instance = Itag_init_0('i298', 41, VideoQuality$hd720_getInstance());
    Itag$i299_instance = Itag_init_0('i299', 42, VideoQuality$hd1080_getInstance());
    Itag$i139_instance = Itag_init_1('i139', 43, AudioQuality$low_getInstance());
    Itag$i140_instance = Itag_init_1('i140', 44, AudioQuality$medium_getInstance());
    Itag$i141_instance = Itag_init_1('i141', 45, AudioQuality$high_getInstance());
    Itag$i256_instance = Itag_init_1('i256', 46, AudioQuality$unknown_getInstance());
    Itag$i325_instance = Itag_init_1('i325', 47, AudioQuality$unknown_getInstance());
    Itag$i328_instance = Itag_init_1('i328', 48, AudioQuality$unknown_getInstance());
    Itag$i167_instance = Itag_init_0('i167', 49, VideoQuality$medium_getInstance());
    Itag$i168_instance = Itag_init_0('i168', 50, VideoQuality$large_getInstance());
    Itag$i169_instance = Itag_init_0('i169', 51, VideoQuality$hd720_getInstance());
    Itag$i170_instance = Itag_init_0('i170', 52, VideoQuality$hd1080_getInstance());
    Itag$i218_instance = Itag_init_0('i218', 53, VideoQuality$large_getInstance());
    Itag$i219_instance = Itag_init_0('i219', 54, VideoQuality$tiny_getInstance());
    Itag$i242_instance = Itag_init_0('i242', 55, VideoQuality$small_getInstance());
    Itag$i243_instance = Itag_init_0('i243', 56, VideoQuality$medium_getInstance());
    Itag$i244_instance = Itag_init_0('i244', 57, VideoQuality$large_getInstance());
    Itag$i245_instance = Itag_init_0('i245', 58, VideoQuality$large_getInstance());
    Itag$i246_instance = Itag_init_0('i246', 59, VideoQuality$large_getInstance());
    Itag$i247_instance = Itag_init_0('i247', 60, VideoQuality$hd720_getInstance());
    Itag$i248_instance = Itag_init_0('i248', 61, VideoQuality$hd1080_getInstance());
    Itag$i271_instance = Itag_init_0('i271', 62, VideoQuality$hd1440_getInstance());
    Itag$i272_instance = Itag_init_0('i272', 63, VideoQuality$highres_getInstance());
    Itag$i278_instance = Itag_init_0('i278', 64, VideoQuality$tiny_getInstance());
    Itag$i302_instance = Itag_init_0('i302', 65, VideoQuality$hd720_getInstance());
    Itag$i303_instance = Itag_init_0('i303', 66, VideoQuality$hd1080_getInstance());
    Itag$i308_instance = Itag_init_0('i308', 67, VideoQuality$hd1440_getInstance());
    Itag$i313_instance = Itag_init_0('i313', 68, VideoQuality$hd2160_getInstance());
    Itag$i315_instance = Itag_init_0('i315', 69, VideoQuality$hd2160_getInstance());
    Itag$i171_instance = Itag_init_1('i171', 70, AudioQuality$medium_getInstance());
    Itag$i172_instance = Itag_init_1('i172', 71, AudioQuality$high_getInstance());
    Itag$i249_instance = Itag_init_1('i249', 72, AudioQuality$low_getInstance());
    Itag$i250_instance = Itag_init_1('i250', 73, AudioQuality$low_getInstance());
    Itag$i251_instance = Itag_init_1('i251', 74, AudioQuality$medium_getInstance());
    Itag$i330_instance = Itag_init_0('i330', 75, VideoQuality$tiny_getInstance());
    Itag$i331_instance = Itag_init_0('i331', 76, VideoQuality$small_getInstance());
    Itag$i332_instance = Itag_init_0('i332', 77, VideoQuality$medium_getInstance());
    Itag$i333_instance = Itag_init_0('i333', 78, VideoQuality$large_getInstance());
    Itag$i334_instance = Itag_init_0('i334', 79, VideoQuality$hd720_getInstance());
    Itag$i335_instance = Itag_init_0('i335', 80, VideoQuality$hd1080_getInstance());
    Itag$i336_instance = Itag_init_0('i336', 81, VideoQuality$hd1440_getInstance());
    Itag$i337_instance = Itag_init_0('i337', 82, VideoQuality$hd2160_getInstance());
    Itag$i394_instance = Itag_init_0('i394', 83, VideoQuality$tiny_getInstance());
    Itag$i395_instance = Itag_init_0('i395', 84, VideoQuality$small_getInstance());
    Itag$i396_instance = Itag_init_0('i396', 85, VideoQuality$medium_getInstance());
    Itag$i397_instance = Itag_init_0('i397', 86, VideoQuality$large_getInstance());
    Itag$i398_instance = Itag_init_0('i398', 87, VideoQuality$hd720_getInstance());
    Itag$i399_instance = Itag_init_0('i399', 88, VideoQuality$hd1080_getInstance());
    Itag$i400_instance = Itag_init_0('i400', 89, VideoQuality$hd1440_getInstance());
    Itag$i401_instance = Itag_init_0('i401', 90, VideoQuality$hd2160_getInstance());
    Itag$i402_instance = Itag_init_0('i402', 91, VideoQuality$hd2880p_getInstance());
  }
  var Itag$unknown_instance;
  function Itag$unknown_getInstance() {
    Itag_initFields();
    return Itag$unknown_instance;
  }
  var Itag$i5_instance;
  function Itag$i5_getInstance() {
    Itag_initFields();
    return Itag$i5_instance;
  }
  var Itag$i6_instance;
  function Itag$i6_getInstance() {
    Itag_initFields();
    return Itag$i6_instance;
  }
  var Itag$i13_instance;
  function Itag$i13_getInstance() {
    Itag_initFields();
    return Itag$i13_instance;
  }
  var Itag$i17_instance;
  function Itag$i17_getInstance() {
    Itag_initFields();
    return Itag$i17_instance;
  }
  var Itag$i18_instance;
  function Itag$i18_getInstance() {
    Itag_initFields();
    return Itag$i18_instance;
  }
  var Itag$i22_instance;
  function Itag$i22_getInstance() {
    Itag_initFields();
    return Itag$i22_instance;
  }
  var Itag$i34_instance;
  function Itag$i34_getInstance() {
    Itag_initFields();
    return Itag$i34_instance;
  }
  var Itag$i35_instance;
  function Itag$i35_getInstance() {
    Itag_initFields();
    return Itag$i35_instance;
  }
  var Itag$i36_instance;
  function Itag$i36_getInstance() {
    Itag_initFields();
    return Itag$i36_instance;
  }
  var Itag$i37_instance;
  function Itag$i37_getInstance() {
    Itag_initFields();
    return Itag$i37_instance;
  }
  var Itag$i38_instance;
  function Itag$i38_getInstance() {
    Itag_initFields();
    return Itag$i38_instance;
  }
  var Itag$i43_instance;
  function Itag$i43_getInstance() {
    Itag_initFields();
    return Itag$i43_instance;
  }
  var Itag$i44_instance;
  function Itag$i44_getInstance() {
    Itag_initFields();
    return Itag$i44_instance;
  }
  var Itag$i45_instance;
  function Itag$i45_getInstance() {
    Itag_initFields();
    return Itag$i45_instance;
  }
  var Itag$i46_instance;
  function Itag$i46_getInstance() {
    Itag_initFields();
    return Itag$i46_instance;
  }
  var Itag$i82_instance;
  function Itag$i82_getInstance() {
    Itag_initFields();
    return Itag$i82_instance;
  }
  var Itag$i83_instance;
  function Itag$i83_getInstance() {
    Itag_initFields();
    return Itag$i83_instance;
  }
  var Itag$i84_instance;
  function Itag$i84_getInstance() {
    Itag_initFields();
    return Itag$i84_instance;
  }
  var Itag$i85_instance;
  function Itag$i85_getInstance() {
    Itag_initFields();
    return Itag$i85_instance;
  }
  var Itag$i100_instance;
  function Itag$i100_getInstance() {
    Itag_initFields();
    return Itag$i100_instance;
  }
  var Itag$i101_instance;
  function Itag$i101_getInstance() {
    Itag_initFields();
    return Itag$i101_instance;
  }
  var Itag$i102_instance;
  function Itag$i102_getInstance() {
    Itag_initFields();
    return Itag$i102_instance;
  }
  var Itag$i91_instance;
  function Itag$i91_getInstance() {
    Itag_initFields();
    return Itag$i91_instance;
  }
  var Itag$i92_instance;
  function Itag$i92_getInstance() {
    Itag_initFields();
    return Itag$i92_instance;
  }
  var Itag$i93_instance;
  function Itag$i93_getInstance() {
    Itag_initFields();
    return Itag$i93_instance;
  }
  var Itag$i94_instance;
  function Itag$i94_getInstance() {
    Itag_initFields();
    return Itag$i94_instance;
  }
  var Itag$i95_instance;
  function Itag$i95_getInstance() {
    Itag_initFields();
    return Itag$i95_instance;
  }
  var Itag$i96_instance;
  function Itag$i96_getInstance() {
    Itag_initFields();
    return Itag$i96_instance;
  }
  var Itag$i132_instance;
  function Itag$i132_getInstance() {
    Itag_initFields();
    return Itag$i132_instance;
  }
  var Itag$i151_instance;
  function Itag$i151_getInstance() {
    Itag_initFields();
    return Itag$i151_instance;
  }
  var Itag$i133_instance;
  function Itag$i133_getInstance() {
    Itag_initFields();
    return Itag$i133_instance;
  }
  var Itag$i134_instance;
  function Itag$i134_getInstance() {
    Itag_initFields();
    return Itag$i134_instance;
  }
  var Itag$i135_instance;
  function Itag$i135_getInstance() {
    Itag_initFields();
    return Itag$i135_instance;
  }
  var Itag$i136_instance;
  function Itag$i136_getInstance() {
    Itag_initFields();
    return Itag$i136_instance;
  }
  var Itag$i137_instance;
  function Itag$i137_getInstance() {
    Itag_initFields();
    return Itag$i137_instance;
  }
  var Itag$i138_instance;
  function Itag$i138_getInstance() {
    Itag_initFields();
    return Itag$i138_instance;
  }
  var Itag$i160_instance;
  function Itag$i160_getInstance() {
    Itag_initFields();
    return Itag$i160_instance;
  }
  var Itag$i212_instance;
  function Itag$i212_getInstance() {
    Itag_initFields();
    return Itag$i212_instance;
  }
  var Itag$i264_instance;
  function Itag$i264_getInstance() {
    Itag_initFields();
    return Itag$i264_instance;
  }
  var Itag$i266_instance;
  function Itag$i266_getInstance() {
    Itag_initFields();
    return Itag$i266_instance;
  }
  var Itag$i298_instance;
  function Itag$i298_getInstance() {
    Itag_initFields();
    return Itag$i298_instance;
  }
  var Itag$i299_instance;
  function Itag$i299_getInstance() {
    Itag_initFields();
    return Itag$i299_instance;
  }
  var Itag$i139_instance;
  function Itag$i139_getInstance() {
    Itag_initFields();
    return Itag$i139_instance;
  }
  var Itag$i140_instance;
  function Itag$i140_getInstance() {
    Itag_initFields();
    return Itag$i140_instance;
  }
  var Itag$i141_instance;
  function Itag$i141_getInstance() {
    Itag_initFields();
    return Itag$i141_instance;
  }
  var Itag$i256_instance;
  function Itag$i256_getInstance() {
    Itag_initFields();
    return Itag$i256_instance;
  }
  var Itag$i325_instance;
  function Itag$i325_getInstance() {
    Itag_initFields();
    return Itag$i325_instance;
  }
  var Itag$i328_instance;
  function Itag$i328_getInstance() {
    Itag_initFields();
    return Itag$i328_instance;
  }
  var Itag$i167_instance;
  function Itag$i167_getInstance() {
    Itag_initFields();
    return Itag$i167_instance;
  }
  var Itag$i168_instance;
  function Itag$i168_getInstance() {
    Itag_initFields();
    return Itag$i168_instance;
  }
  var Itag$i169_instance;
  function Itag$i169_getInstance() {
    Itag_initFields();
    return Itag$i169_instance;
  }
  var Itag$i170_instance;
  function Itag$i170_getInstance() {
    Itag_initFields();
    return Itag$i170_instance;
  }
  var Itag$i218_instance;
  function Itag$i218_getInstance() {
    Itag_initFields();
    return Itag$i218_instance;
  }
  var Itag$i219_instance;
  function Itag$i219_getInstance() {
    Itag_initFields();
    return Itag$i219_instance;
  }
  var Itag$i242_instance;
  function Itag$i242_getInstance() {
    Itag_initFields();
    return Itag$i242_instance;
  }
  var Itag$i243_instance;
  function Itag$i243_getInstance() {
    Itag_initFields();
    return Itag$i243_instance;
  }
  var Itag$i244_instance;
  function Itag$i244_getInstance() {
    Itag_initFields();
    return Itag$i244_instance;
  }
  var Itag$i245_instance;
  function Itag$i245_getInstance() {
    Itag_initFields();
    return Itag$i245_instance;
  }
  var Itag$i246_instance;
  function Itag$i246_getInstance() {
    Itag_initFields();
    return Itag$i246_instance;
  }
  var Itag$i247_instance;
  function Itag$i247_getInstance() {
    Itag_initFields();
    return Itag$i247_instance;
  }
  var Itag$i248_instance;
  function Itag$i248_getInstance() {
    Itag_initFields();
    return Itag$i248_instance;
  }
  var Itag$i271_instance;
  function Itag$i271_getInstance() {
    Itag_initFields();
    return Itag$i271_instance;
  }
  var Itag$i272_instance;
  function Itag$i272_getInstance() {
    Itag_initFields();
    return Itag$i272_instance;
  }
  var Itag$i278_instance;
  function Itag$i278_getInstance() {
    Itag_initFields();
    return Itag$i278_instance;
  }
  var Itag$i302_instance;
  function Itag$i302_getInstance() {
    Itag_initFields();
    return Itag$i302_instance;
  }
  var Itag$i303_instance;
  function Itag$i303_getInstance() {
    Itag_initFields();
    return Itag$i303_instance;
  }
  var Itag$i308_instance;
  function Itag$i308_getInstance() {
    Itag_initFields();
    return Itag$i308_instance;
  }
  var Itag$i313_instance;
  function Itag$i313_getInstance() {
    Itag_initFields();
    return Itag$i313_instance;
  }
  var Itag$i315_instance;
  function Itag$i315_getInstance() {
    Itag_initFields();
    return Itag$i315_instance;
  }
  var Itag$i171_instance;
  function Itag$i171_getInstance() {
    Itag_initFields();
    return Itag$i171_instance;
  }
  var Itag$i172_instance;
  function Itag$i172_getInstance() {
    Itag_initFields();
    return Itag$i172_instance;
  }
  var Itag$i249_instance;
  function Itag$i249_getInstance() {
    Itag_initFields();
    return Itag$i249_instance;
  }
  var Itag$i250_instance;
  function Itag$i250_getInstance() {
    Itag_initFields();
    return Itag$i250_instance;
  }
  var Itag$i251_instance;
  function Itag$i251_getInstance() {
    Itag_initFields();
    return Itag$i251_instance;
  }
  var Itag$i330_instance;
  function Itag$i330_getInstance() {
    Itag_initFields();
    return Itag$i330_instance;
  }
  var Itag$i331_instance;
  function Itag$i331_getInstance() {
    Itag_initFields();
    return Itag$i331_instance;
  }
  var Itag$i332_instance;
  function Itag$i332_getInstance() {
    Itag_initFields();
    return Itag$i332_instance;
  }
  var Itag$i333_instance;
  function Itag$i333_getInstance() {
    Itag_initFields();
    return Itag$i333_instance;
  }
  var Itag$i334_instance;
  function Itag$i334_getInstance() {
    Itag_initFields();
    return Itag$i334_instance;
  }
  var Itag$i335_instance;
  function Itag$i335_getInstance() {
    Itag_initFields();
    return Itag$i335_instance;
  }
  var Itag$i336_instance;
  function Itag$i336_getInstance() {
    Itag_initFields();
    return Itag$i336_instance;
  }
  var Itag$i337_instance;
  function Itag$i337_getInstance() {
    Itag_initFields();
    return Itag$i337_instance;
  }
  var Itag$i394_instance;
  function Itag$i394_getInstance() {
    Itag_initFields();
    return Itag$i394_instance;
  }
  var Itag$i395_instance;
  function Itag$i395_getInstance() {
    Itag_initFields();
    return Itag$i395_instance;
  }
  var Itag$i396_instance;
  function Itag$i396_getInstance() {
    Itag_initFields();
    return Itag$i396_instance;
  }
  var Itag$i397_instance;
  function Itag$i397_getInstance() {
    Itag_initFields();
    return Itag$i397_instance;
  }
  var Itag$i398_instance;
  function Itag$i398_getInstance() {
    Itag_initFields();
    return Itag$i398_instance;
  }
  var Itag$i399_instance;
  function Itag$i399_getInstance() {
    Itag_initFields();
    return Itag$i399_instance;
  }
  var Itag$i400_instance;
  function Itag$i400_getInstance() {
    Itag_initFields();
    return Itag$i400_instance;
  }
  var Itag$i401_instance;
  function Itag$i401_getInstance() {
    Itag_initFields();
    return Itag$i401_instance;
  }
  var Itag$i402_instance;
  function Itag$i402_getInstance() {
    Itag_initFields();
    return Itag$i402_instance;
  }
  Itag.prototype.setID_za3lpa$ = function (id) {
    this.id = id;
  };
  Itag.prototype.videoQuality = function () {
    return this.videoQuality_68vpjy$_0;
  };
  Itag.prototype.audioQuality = function () {
    return this.audioQuality_xshuwz$_0;
  };
  Object.defineProperty(Itag.prototype, 'isVideo', {
    configurable: true,
    get: function () {
      return this !== Itag$unknown_getInstance() && this.videoQuality_68vpjy$_0 !== VideoQuality$noVideo_getInstance();
    }
  });
  Object.defineProperty(Itag.prototype, 'isAudio', {
    configurable: true,
    get: function () {
      return this !== Itag$unknown_getInstance() && this.audioQuality_xshuwz$_0 !== AudioQuality$noAudio_getInstance();
    }
  });
  Itag.prototype.toString = function () {
    return this.id.toString();
  };
  Itag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Itag',
    interfaces: [Enum]
  };
  function Itag_init(name, ordinal, $this) {
    $this = $this || Object.create(Itag.prototype);
    Itag.call($this, name, ordinal);
    return $this;
  }
  function Itag_init_0(name, ordinal, videoQuality, $this) {
    $this = $this || Object.create(Itag.prototype);
    Itag_init_3(name, ordinal, videoQuality, AudioQuality$noAudio_getInstance(), false, $this);
    return $this;
  }
  function Itag_init_1(name, ordinal, audioQuality, $this) {
    $this = $this || Object.create(Itag.prototype);
    Itag_init_3(name, ordinal, VideoQuality$noVideo_getInstance(), audioQuality, false, $this);
    return $this;
  }
  function Itag_init_2(name, ordinal, videoQuality, audioQuality, $this) {
    $this = $this || Object.create(Itag.prototype);
    Itag_init_3(name, ordinal, videoQuality, audioQuality, false, $this);
    return $this;
  }
  function Itag_init_3(name, ordinal, videoQuality, audioQuality, isVRor3D, $this) {
    $this = $this || Object.create(Itag.prototype);
    Itag.call($this, name, ordinal);
    $this.setID_za3lpa$(toInt($this.name.substring(1)));
    $this.videoQuality_68vpjy$_0 = videoQuality;
    $this.audioQuality_xshuwz$_0 = audioQuality;
    $this.isVRor3D_8rpacs$_0 = isVRor3D;
    return $this;
  }
  function Itag$values() {
    return [Itag$unknown_getInstance(), Itag$i5_getInstance(), Itag$i6_getInstance(), Itag$i13_getInstance(), Itag$i17_getInstance(), Itag$i18_getInstance(), Itag$i22_getInstance(), Itag$i34_getInstance(), Itag$i35_getInstance(), Itag$i36_getInstance(), Itag$i37_getInstance(), Itag$i38_getInstance(), Itag$i43_getInstance(), Itag$i44_getInstance(), Itag$i45_getInstance(), Itag$i46_getInstance(), Itag$i82_getInstance(), Itag$i83_getInstance(), Itag$i84_getInstance(), Itag$i85_getInstance(), Itag$i100_getInstance(), Itag$i101_getInstance(), Itag$i102_getInstance(), Itag$i91_getInstance(), Itag$i92_getInstance(), Itag$i93_getInstance(), Itag$i94_getInstance(), Itag$i95_getInstance(), Itag$i96_getInstance(), Itag$i132_getInstance(), Itag$i151_getInstance(), Itag$i133_getInstance(), Itag$i134_getInstance(), Itag$i135_getInstance(), Itag$i136_getInstance(), Itag$i137_getInstance(), Itag$i138_getInstance(), Itag$i160_getInstance(), Itag$i212_getInstance(), Itag$i264_getInstance(), Itag$i266_getInstance(), Itag$i298_getInstance(), Itag$i299_getInstance(), Itag$i139_getInstance(), Itag$i140_getInstance(), Itag$i141_getInstance(), Itag$i256_getInstance(), Itag$i325_getInstance(), Itag$i328_getInstance(), Itag$i167_getInstance(), Itag$i168_getInstance(), Itag$i169_getInstance(), Itag$i170_getInstance(), Itag$i218_getInstance(), Itag$i219_getInstance(), Itag$i242_getInstance(), Itag$i243_getInstance(), Itag$i244_getInstance(), Itag$i245_getInstance(), Itag$i246_getInstance(), Itag$i247_getInstance(), Itag$i248_getInstance(), Itag$i271_getInstance(), Itag$i272_getInstance(), Itag$i278_getInstance(), Itag$i302_getInstance(), Itag$i303_getInstance(), Itag$i308_getInstance(), Itag$i313_getInstance(), Itag$i315_getInstance(), Itag$i171_getInstance(), Itag$i172_getInstance(), Itag$i249_getInstance(), Itag$i250_getInstance(), Itag$i251_getInstance(), Itag$i330_getInstance(), Itag$i331_getInstance(), Itag$i332_getInstance(), Itag$i333_getInstance(), Itag$i334_getInstance(), Itag$i335_getInstance(), Itag$i336_getInstance(), Itag$i337_getInstance(), Itag$i394_getInstance(), Itag$i395_getInstance(), Itag$i396_getInstance(), Itag$i397_getInstance(), Itag$i398_getInstance(), Itag$i399_getInstance(), Itag$i400_getInstance(), Itag$i401_getInstance(), Itag$i402_getInstance()];
  }
  Itag.values = Itag$values;
  function Itag$valueOf(name) {
    switch (name) {
      case 'unknown':
        return Itag$unknown_getInstance();
      case 'i5':
        return Itag$i5_getInstance();
      case 'i6':
        return Itag$i6_getInstance();
      case 'i13':
        return Itag$i13_getInstance();
      case 'i17':
        return Itag$i17_getInstance();
      case 'i18':
        return Itag$i18_getInstance();
      case 'i22':
        return Itag$i22_getInstance();
      case 'i34':
        return Itag$i34_getInstance();
      case 'i35':
        return Itag$i35_getInstance();
      case 'i36':
        return Itag$i36_getInstance();
      case 'i37':
        return Itag$i37_getInstance();
      case 'i38':
        return Itag$i38_getInstance();
      case 'i43':
        return Itag$i43_getInstance();
      case 'i44':
        return Itag$i44_getInstance();
      case 'i45':
        return Itag$i45_getInstance();
      case 'i46':
        return Itag$i46_getInstance();
      case 'i82':
        return Itag$i82_getInstance();
      case 'i83':
        return Itag$i83_getInstance();
      case 'i84':
        return Itag$i84_getInstance();
      case 'i85':
        return Itag$i85_getInstance();
      case 'i100':
        return Itag$i100_getInstance();
      case 'i101':
        return Itag$i101_getInstance();
      case 'i102':
        return Itag$i102_getInstance();
      case 'i91':
        return Itag$i91_getInstance();
      case 'i92':
        return Itag$i92_getInstance();
      case 'i93':
        return Itag$i93_getInstance();
      case 'i94':
        return Itag$i94_getInstance();
      case 'i95':
        return Itag$i95_getInstance();
      case 'i96':
        return Itag$i96_getInstance();
      case 'i132':
        return Itag$i132_getInstance();
      case 'i151':
        return Itag$i151_getInstance();
      case 'i133':
        return Itag$i133_getInstance();
      case 'i134':
        return Itag$i134_getInstance();
      case 'i135':
        return Itag$i135_getInstance();
      case 'i136':
        return Itag$i136_getInstance();
      case 'i137':
        return Itag$i137_getInstance();
      case 'i138':
        return Itag$i138_getInstance();
      case 'i160':
        return Itag$i160_getInstance();
      case 'i212':
        return Itag$i212_getInstance();
      case 'i264':
        return Itag$i264_getInstance();
      case 'i266':
        return Itag$i266_getInstance();
      case 'i298':
        return Itag$i298_getInstance();
      case 'i299':
        return Itag$i299_getInstance();
      case 'i139':
        return Itag$i139_getInstance();
      case 'i140':
        return Itag$i140_getInstance();
      case 'i141':
        return Itag$i141_getInstance();
      case 'i256':
        return Itag$i256_getInstance();
      case 'i325':
        return Itag$i325_getInstance();
      case 'i328':
        return Itag$i328_getInstance();
      case 'i167':
        return Itag$i167_getInstance();
      case 'i168':
        return Itag$i168_getInstance();
      case 'i169':
        return Itag$i169_getInstance();
      case 'i170':
        return Itag$i170_getInstance();
      case 'i218':
        return Itag$i218_getInstance();
      case 'i219':
        return Itag$i219_getInstance();
      case 'i242':
        return Itag$i242_getInstance();
      case 'i243':
        return Itag$i243_getInstance();
      case 'i244':
        return Itag$i244_getInstance();
      case 'i245':
        return Itag$i245_getInstance();
      case 'i246':
        return Itag$i246_getInstance();
      case 'i247':
        return Itag$i247_getInstance();
      case 'i248':
        return Itag$i248_getInstance();
      case 'i271':
        return Itag$i271_getInstance();
      case 'i272':
        return Itag$i272_getInstance();
      case 'i278':
        return Itag$i278_getInstance();
      case 'i302':
        return Itag$i302_getInstance();
      case 'i303':
        return Itag$i303_getInstance();
      case 'i308':
        return Itag$i308_getInstance();
      case 'i313':
        return Itag$i313_getInstance();
      case 'i315':
        return Itag$i315_getInstance();
      case 'i171':
        return Itag$i171_getInstance();
      case 'i172':
        return Itag$i172_getInstance();
      case 'i249':
        return Itag$i249_getInstance();
      case 'i250':
        return Itag$i250_getInstance();
      case 'i251':
        return Itag$i251_getInstance();
      case 'i330':
        return Itag$i330_getInstance();
      case 'i331':
        return Itag$i331_getInstance();
      case 'i332':
        return Itag$i332_getInstance();
      case 'i333':
        return Itag$i333_getInstance();
      case 'i334':
        return Itag$i334_getInstance();
      case 'i335':
        return Itag$i335_getInstance();
      case 'i336':
        return Itag$i336_getInstance();
      case 'i337':
        return Itag$i337_getInstance();
      case 'i394':
        return Itag$i394_getInstance();
      case 'i395':
        return Itag$i395_getInstance();
      case 'i396':
        return Itag$i396_getInstance();
      case 'i397':
        return Itag$i397_getInstance();
      case 'i398':
        return Itag$i398_getInstance();
      case 'i399':
        return Itag$i399_getInstance();
      case 'i400':
        return Itag$i400_getInstance();
      case 'i401':
        return Itag$i401_getInstance();
      case 'i402':
        return Itag$i402_getInstance();
      default:throwISE('No enum constant io.github.shabinder.models.Itag.' + name);
    }
  }
  Itag.valueOf_61zpoe$ = Itag$valueOf;
  function Methods(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Methods_initFields() {
    Methods_initFields = function () {
    };
    Methods$GET_instance = new Methods('GET', 0);
    Methods$POST_instance = new Methods('POST', 1);
  }
  var Methods$GET_instance;
  function Methods$GET_getInstance() {
    Methods_initFields();
    return Methods$GET_instance;
  }
  var Methods$POST_instance;
  function Methods$POST_getInstance() {
    Methods_initFields();
    return Methods$POST_instance;
  }
  Methods.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Methods',
    interfaces: [Enum]
  };
  function Methods$values() {
    return [Methods$GET_getInstance(), Methods$POST_getInstance()];
  }
  Methods.values = Methods$values;
  function Methods$valueOf(name) {
    switch (name) {
      case 'GET':
        return Methods$GET_getInstance();
      case 'POST':
        return Methods$POST_getInstance();
      default:throwISE('No enum constant io.github.shabinder.models.Methods.' + name);
    }
  }
  Methods.valueOf_61zpoe$ = Methods$valueOf;
  function NetworkResult() {
  }
  function NetworkResult$Progress(progress) {
    NetworkResult.call(this);
    this.progress = progress;
  }
  NetworkResult$Progress.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Progress',
    interfaces: [NetworkResult]
  };
  NetworkResult$Progress.prototype.component1 = function () {
    return this.progress;
  };
  NetworkResult$Progress.prototype.copy_za3lpa$ = function (progress) {
    return new NetworkResult$Progress(progress === void 0 ? this.progress : progress);
  };
  NetworkResult$Progress.prototype.toString = function () {
    return 'Progress(progress=' + Kotlin.toString(this.progress) + ')';
  };
  NetworkResult$Progress.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.progress) | 0;
    return result;
  };
  NetworkResult$Progress.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.progress, other.progress))));
  };
  function NetworkResult$Error(errorMsg, response) {
    NetworkResult.call(this);
    this.errorMsg = errorMsg;
    this.response = response;
  }
  NetworkResult$Error.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Error',
    interfaces: [NetworkResult]
  };
  NetworkResult$Error.prototype.component1 = function () {
    return this.errorMsg;
  };
  NetworkResult$Error.prototype.component2 = function () {
    return this.response;
  };
  NetworkResult$Error.prototype.copy_movod$ = function (errorMsg, response) {
    return new NetworkResult$Error(errorMsg === void 0 ? this.errorMsg : errorMsg, response === void 0 ? this.response : response);
  };
  NetworkResult$Error.prototype.toString = function () {
    return 'Error(errorMsg=' + Kotlin.toString(this.errorMsg) + (', response=' + Kotlin.toString(this.response)) + ')';
  };
  NetworkResult$Error.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.errorMsg) | 0;
    result = result * 31 + Kotlin.hashCode(this.response) | 0;
    return result;
  };
  NetworkResult$Error.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.errorMsg, other.errorMsg) && Kotlin.equals(this.response, other.response)))));
  };
  function NetworkResult$Success(array) {
    NetworkResult.call(this);
    this.array = array;
  }
  NetworkResult$Success.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, NetworkResult$Success) ? tmp$_0 : throwCCE();
    if (!contentEquals(this.array, other.array))
      return false;
    return true;
  };
  NetworkResult$Success.prototype.hashCode = function () {
    return contentHashCode(this.array);
  };
  NetworkResult$Success.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Success',
    interfaces: [NetworkResult]
  };
  NetworkResult$Success.prototype.component1 = function () {
    return this.array;
  };
  NetworkResult$Success.prototype.copy_fqrh44$ = function (array) {
    return new NetworkResult$Success(array === void 0 ? this.array : array);
  };
  NetworkResult$Success.prototype.toString = function () {
    return 'Success(array=' + Kotlin.toString(this.array) + ')';
  };
  NetworkResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NetworkResult',
    interfaces: []
  };
  function VideoDetails(jsonObject, keywords, shortDescription, viewCount, averageRating, liveUrl, isLiveContent) {
    if (keywords === void 0)
      keywords = emptyList();
    if (shortDescription === void 0)
      shortDescription = null;
    if (viewCount === void 0)
      viewCount = null;
    if (averageRating === void 0)
      averageRating = null;
    if (liveUrl === void 0)
      liveUrl = null;
    if (isLiveContent === void 0)
      isLiveContent = null;
    AbstractVideoDetails.call(this, jsonObject);
    this.jsonObject = jsonObject;
    this.keywords = keywords;
    this.shortDescription = shortDescription;
    this.viewCount = viewCount;
    this.averageRating = averageRating;
    this.liveUrl = liveUrl;
    this.isLiveContent = isLiveContent;
  }
  VideoDetails.prototype.checkDownload = function () {
    if (this.isLive || (this.isLiveContent === true && this.lengthSeconds === 0))
      throw new YoutubeException$DownloadUnavailableException$LiveVideoException('Can not download live stream');
  };
  VideoDetails.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VideoDetails',
    interfaces: [AbstractVideoDetails]
  };
  function VideoDetails_init(json, liveHLSUrl, $this) {
    $this = $this || Object.create(VideoDetails.prototype);
    VideoDetails.call($this, json);
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    $this.title = getString(json, 'title');
    $this.author = getString(json, 'author');
    $this.isLive = (tmp$ = getBoolean(json, 'isLive')) != null ? tmp$ : false;
    var tmp$_3;
    if ((tmp$_0 = getJsonArray(json, 'keywords')) != null) {
      var destination = ArrayList_init(collectionSizeOrDefault(tmp$_0, 10));
      var tmp$_4;
      tmp$_4 = tmp$_0.iterator();
      while (tmp$_4.hasNext()) {
        var item = tmp$_4.next();
        destination.add_11rb$(get_jsonPrimitive(item).content);
      }
      tmp$_3 = destination;
    } else
      tmp$_3 = null;
    $this.keywords = (tmp$_1 = tmp$_3) != null ? tmp$_1 : emptyList();
    $this.shortDescription = getString(json, 'shortDescription');
    $this.viewCount = getLong(json, 'viewCount');
    $this.averageRating = getInteger(json, 'averageRating');
    $this.liveUrl = liveHLSUrl;
    $this.isLiveContent = (tmp$_2 = getBoolean(json, 'isLiveContent')) != null ? tmp$_2 : false;
    return $this;
  }
  VideoDetails.prototype.component1 = function () {
    return this.jsonObject;
  };
  VideoDetails.prototype.component2 = function () {
    return this.keywords;
  };
  VideoDetails.prototype.component3 = function () {
    return this.shortDescription;
  };
  VideoDetails.prototype.component4 = function () {
    return this.viewCount;
  };
  VideoDetails.prototype.component5 = function () {
    return this.averageRating;
  };
  VideoDetails.prototype.component6 = function () {
    return this.liveUrl;
  };
  VideoDetails.prototype.component7 = function () {
    return this.isLiveContent;
  };
  VideoDetails.prototype.copy_kjaslc$ = function (jsonObject, keywords, shortDescription, viewCount, averageRating, liveUrl, isLiveContent) {
    return new VideoDetails(jsonObject === void 0 ? this.jsonObject : jsonObject, keywords === void 0 ? this.keywords : keywords, shortDescription === void 0 ? this.shortDescription : shortDescription, viewCount === void 0 ? this.viewCount : viewCount, averageRating === void 0 ? this.averageRating : averageRating, liveUrl === void 0 ? this.liveUrl : liveUrl, isLiveContent === void 0 ? this.isLiveContent : isLiveContent);
  };
  VideoDetails.prototype.toString = function () {
    return 'VideoDetails(jsonObject=' + Kotlin.toString(this.jsonObject) + (', keywords=' + Kotlin.toString(this.keywords)) + (', shortDescription=' + Kotlin.toString(this.shortDescription)) + (', viewCount=' + Kotlin.toString(this.viewCount)) + (', averageRating=' + Kotlin.toString(this.averageRating)) + (', liveUrl=' + Kotlin.toString(this.liveUrl)) + (', isLiveContent=' + Kotlin.toString(this.isLiveContent)) + ')';
  };
  VideoDetails.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.jsonObject) | 0;
    result = result * 31 + Kotlin.hashCode(this.keywords) | 0;
    result = result * 31 + Kotlin.hashCode(this.shortDescription) | 0;
    result = result * 31 + Kotlin.hashCode(this.viewCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.averageRating) | 0;
    result = result * 31 + Kotlin.hashCode(this.liveUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.isLiveContent) | 0;
    return result;
  };
  VideoDetails.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.jsonObject, other.jsonObject) && Kotlin.equals(this.keywords, other.keywords) && Kotlin.equals(this.shortDescription, other.shortDescription) && Kotlin.equals(this.viewCount, other.viewCount) && Kotlin.equals(this.averageRating, other.averageRating) && Kotlin.equals(this.liveUrl, other.liveUrl) && Kotlin.equals(this.isLiveContent, other.isLiveContent)))));
  };
  function YoutubeVideo(videoDetails, formats, subtitlesInfo, clientVersion) {
    YoutubeVideo$Companion_getInstance();
    this.videoDetails = videoDetails;
    this.formats = formats;
    this.subtitlesInfo = subtitlesInfo;
    this.clientVersion = clientVersion;
  }
  YoutubeVideo.prototype.getFormatByItag_za3lpa$ = function (itag) {
    var $receiver = this.formats;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.itag.id === itag) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  YoutubeVideo.prototype.getVideoWithAudioFormats = function () {
    var $receiver = this.formats;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, AudioVideoFormat))
        destination.add_11rb$(element);
    }
    return destination;
  };
  YoutubeVideo.prototype.getVideoFormats = function () {
    var $receiver = this.formats;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, VideoFormat))
        destination.add_11rb$(element);
    }
    return destination;
  };
  YoutubeVideo.prototype.getVideoWithQuality_hp8gm4$ = function (videoQuality) {
    var tmp$;
    var $receiver = this.formats;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element, VideoFormat) && element.videoQuality === videoQuality)
        destination.add_11rb$(element);
    }
    return Kotlin.isType(tmp$ = destination, List) ? tmp$ : throwCCE();
  };
  YoutubeVideo.prototype.getVideoWithExtension_evu4ie$ = function (extension) {
    var tmp$;
    var $receiver = this.formats;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element, VideoFormat) && equals_0(element.extension, extension))
        destination.add_11rb$(element);
    }
    return Kotlin.isType(tmp$ = destination, List) ? tmp$ : throwCCE();
  };
  YoutubeVideo.prototype.getAudioFormats = function () {
    var $receiver = this.formats;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, AudioFormat))
        destination.add_11rb$(element);
    }
    return destination;
  };
  YoutubeVideo.prototype.getAudioWithQuality_63mlcv$ = function (audioQuality) {
    var tmp$;
    var $receiver = this.formats;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element, AudioFormat) && element.audioQuality === audioQuality)
        destination.add_11rb$(element);
    }
    return Kotlin.isType(tmp$ = destination, List) ? tmp$ : throwCCE();
  };
  YoutubeVideo.prototype.getAudioWithExtension_evu4ie$ = function (extension) {
    var tmp$;
    var $receiver = this.formats;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element, AudioFormat) && element.extension === extension)
        destination.add_11rb$(element);
    }
    return Kotlin.isType(tmp$ = destination, List) ? tmp$ : throwCCE();
  };
  function YoutubeVideo$Companion() {
    YoutubeVideo$Companion_instance = this;
    this.BUFFER_SIZE_0 = 4096;
    this.PART_LENGTH_0 = 2097152;
  }
  YoutubeVideo$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YoutubeVideo$Companion_instance = null;
  function YoutubeVideo$Companion_getInstance() {
    if (YoutubeVideo$Companion_instance === null) {
      new YoutubeVideo$Companion();
    }return YoutubeVideo$Companion_instance;
  }
  YoutubeVideo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YoutubeVideo',
    interfaces: []
  };
  YoutubeVideo.prototype.component1 = function () {
    return this.videoDetails;
  };
  YoutubeVideo.prototype.component2 = function () {
    return this.formats;
  };
  YoutubeVideo.prototype.component3 = function () {
    return this.subtitlesInfo;
  };
  YoutubeVideo.prototype.component4 = function () {
    return this.clientVersion;
  };
  YoutubeVideo.prototype.copy_iz84uf$ = function (videoDetails, formats, subtitlesInfo, clientVersion) {
    return new YoutubeVideo(videoDetails === void 0 ? this.videoDetails : videoDetails, formats === void 0 ? this.formats : formats, subtitlesInfo === void 0 ? this.subtitlesInfo : subtitlesInfo, clientVersion === void 0 ? this.clientVersion : clientVersion);
  };
  YoutubeVideo.prototype.toString = function () {
    return 'YoutubeVideo(videoDetails=' + Kotlin.toString(this.videoDetails) + (', formats=' + Kotlin.toString(this.formats)) + (', subtitlesInfo=' + Kotlin.toString(this.subtitlesInfo)) + (', clientVersion=' + Kotlin.toString(this.clientVersion)) + ')';
  };
  YoutubeVideo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.videoDetails) | 0;
    result = result * 31 + Kotlin.hashCode(this.formats) | 0;
    result = result * 31 + Kotlin.hashCode(this.subtitlesInfo) | 0;
    result = result * 31 + Kotlin.hashCode(this.clientVersion) | 0;
    return result;
  };
  YoutubeVideo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.videoDetails, other.videoDetails) && Kotlin.equals(this.formats, other.formats) && Kotlin.equals(this.subtitlesInfo, other.subtitlesInfo) && Kotlin.equals(this.clientVersion, other.clientVersion)))));
  };
  function AudioFormat(json, isAdaptive) {
    Format.call(this, json, isAdaptive);
    this.averageBitrate = getInteger(json, 'averageBitrate');
    this.audioSampleRate = getInteger(json, 'audioSampleRate');
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    try {
      var split_0 = (tmp$ = getString(json, 'audioQuality')) != null ? split(tmp$, ['_']) : null;
      tmp$_2 = (tmp$_1 = (tmp$_0 = split_0 != null ? split_0.get_za3lpa$(split_0.size - 1 | 0) : null) != null ? tmp$_0.toLowerCase() : null) != null ? AudioQuality$valueOf(tmp$_1) : null;
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        tmp$_2 = this.itag.audioQuality();
      } else
        throw e;
    }
    this.audioQuality = tmp$_2 != null ? tmp$_2 : AudioQuality$unknown_getInstance();
  }
  AudioFormat.prototype.type = function () {
    return Format$Companion_getInstance().AUDIO;
  };
  AudioFormat.prototype.toString = function () {
    return this.audioQuality.name + ' - ' + (this.averageBitrate.toString() + ' / ' + this.bitrate) + ' - ' + this.extension.value + ' - ' + this.url;
  };
  AudioFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioFormat',
    interfaces: [Format]
  };
  function AudioVideoFormat(json, isAdaptive) {
    Format.call(this, json, isAdaptive);
    this.averageBitrate = getInteger(json, 'averageBitrate');
    this.audioSampleRate = getInteger(json, 'audioSampleRate');
    this.qualityLabel = getString(json, 'qualityLabel');
    this.width = getInteger(json, 'width');
    this.height = getInteger(json, 'height');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    try {
      var split_0 = (tmp$ = getString(json, 'audioQuality')) != null ? split(tmp$, ['_']) : null;
      var quality = (tmp$_0 = split_0 != null ? split_0.get_za3lpa$(split_0.size - 1 | 0) : null) != null ? tmp$_0.toLowerCase() : null;
      tmp$_2 = (tmp$_1 = quality != null ? AudioQuality$valueOf(quality) : null) != null ? tmp$_1 : this.itag.audioQuality();
    } catch (ignore) {
      if (Kotlin.isType(ignore, Exception)) {
        tmp$_2 = null;
      } else
        throw ignore;
    }
    this.audioQuality = tmp$_2 != null ? tmp$_2 : AudioQuality$unknown_getInstance();
    try {
      tmp$_5 = (tmp$_4 = (tmp$_3 = getString(json, 'quality')) != null ? VideoQuality$valueOf(tmp$_3) : null) != null ? tmp$_4 : this.itag.videoQuality();
    } catch (ignore) {
      if (Kotlin.isType(ignore, Exception)) {
        tmp$_5 = null;
      } else
        throw ignore;
    }
    this.videoQuality = tmp$_5 != null ? tmp$_5 : VideoQuality$unknown_getInstance();
  }
  AudioVideoFormat.prototype.type = function () {
    return Format$Companion_getInstance().AUDIO_VIDEO;
  };
  AudioVideoFormat.prototype.toString = function () {
    return this.videoQuality.name + ' - ' + (this.averageBitrate.toString() + ' / ' + this.bitrate) + ' - ' + this.extension.value + ' - ' + this.url;
  };
  AudioVideoFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioVideoFormat',
    interfaces: [Format]
  };
  function Format(json, isAdaptive) {
    Format$Companion_getInstance();
    this.isAdaptive = isAdaptive;
    var tmp$, tmp$_0, tmp$_1;
    try {
      tmp$ = Itag$valueOf('i' + getString(json, 'itag'));
    } catch (e) {
      if (Kotlin.isType(e, IllegalArgumentException)) {
        printStackTrace(e);
        var $receiver = Itag$unknown_getInstance();
        $receiver.setID_za3lpa$(getInteger(json, 'itag'));
        tmp$ = $receiver;
      } else
        throw e;
    }
    this.itag = tmp$;
    this.url = (tmp$_0 = getString(json, 'url')) != null ? replace(tmp$_0, '\\u0026', '&') : null;
    this.mimeType = getString(json, 'mimeType');
    this.bitrate = getInteger(json, 'bitrate');
    this.contentLength = getLong(json, 'contentLength');
    this.lastModified = getLong(json, 'lastModified');
    this.approxDurationMs = getLong(json, 'approxDurationMs');
    var tmp$_2 = this.mimeType == null;
    if (!tmp$_2) {
      tmp$_2 = this.mimeType.length === 0;
    }if (tmp$_2)
      tmp$_1 = Extension$UNKNOWN_getInstance();
    else if (contains(this.mimeType, Extension$MPEG4_getInstance().value))
      tmp$_1 = Kotlin.isType(this, AudioFormat) ? Extension$M4A_getInstance() : Extension$MPEG4_getInstance();
    else if (contains(this.mimeType, Extension$WEBM_getInstance().value))
      tmp$_1 = Kotlin.isType(this, AudioFormat) ? Extension$WEBA_getInstance() : Extension$WEBM_getInstance();
    else if (contains(this.mimeType, Extension$FLV_getInstance().value))
      tmp$_1 = Extension$FLV_getInstance();
    else if (contains(this.mimeType, Extension$_3GP_getInstance().value))
      tmp$_1 = Extension$_3GP_getInstance();
    else {
      tmp$_1 = Extension$UNKNOWN_getInstance();
    }
    this.extension = tmp$_1;
  }
  function Format$Companion() {
    Format$Companion_instance = this;
    this.AUDIO = 'audio';
    this.VIDEO = 'video';
    this.AUDIO_VIDEO = 'audio/video';
  }
  Format$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Format$Companion_instance = null;
  function Format$Companion_getInstance() {
    if (Format$Companion_instance === null) {
      new Format$Companion();
    }return Format$Companion_instance;
  }
  Format.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Format',
    interfaces: []
  };
  function VideoFormat(json, isAdaptive) {
    Format.call(this, json, isAdaptive);
    this.fps = getInteger(json, 'fps');
    this.qualityLabel = getString(json, 'qualityLabel');
    this.width = getInteger(json, 'width');
    this.height = getInteger(json, 'height');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    this.videoQuality = (tmp$_1 = (tmp$_0 = (tmp$ = getString(json, 'quality')) != null ? VideoQuality$valueOf(tmp$) : null) != null ? tmp$_0 : this.itag.videoQuality()) != null ? tmp$_1 : VideoQuality$unknown_getInstance();
    if (json.containsKey_11rb$('size')) {
      var split_0 = (tmp$_2 = getString(json, 'size')) != null ? split(tmp$_2, ['x']) : null;
      this.width = (tmp$_4 = (tmp$_3 = split_0 != null ? split_0.get_za3lpa$(0) : null) != null ? toInt(tmp$_3) : null) != null ? tmp$_4 : 0;
      this.height = (tmp$_6 = (tmp$_5 = split_0 != null ? split_0.get_za3lpa$(1) : null) != null ? toInt(tmp$_5) : null) != null ? tmp$_6 : 0;
    }}
  VideoFormat.prototype.type = function () {
    return Format$Companion_getInstance().VIDEO;
  };
  VideoFormat.prototype.toString = function () {
    return this.videoQuality.name + ' - ' + (this.fps.toString() + 'FPS / ' + this.bitrate) + ' - ' + this.extension.value + ' - ' + this.url;
  };
  VideoFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VideoFormat',
    interfaces: [Format]
  };
  function PlaylistDetails(playlistId, title, author, videoCount, viewCount) {
    this.playlistId = playlistId;
    this.title = title;
    this.author = author;
    this.videoCount = videoCount;
    this.viewCount = viewCount;
  }
  PlaylistDetails.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlaylistDetails',
    interfaces: []
  };
  PlaylistDetails.prototype.component1 = function () {
    return this.playlistId;
  };
  PlaylistDetails.prototype.component2 = function () {
    return this.title;
  };
  PlaylistDetails.prototype.component3 = function () {
    return this.author;
  };
  PlaylistDetails.prototype.component4 = function () {
    return this.videoCount;
  };
  PlaylistDetails.prototype.component5 = function () {
    return this.viewCount;
  };
  PlaylistDetails.prototype.copy_si0r4z$ = function (playlistId, title, author, videoCount, viewCount) {
    return new PlaylistDetails(playlistId === void 0 ? this.playlistId : playlistId, title === void 0 ? this.title : title, author === void 0 ? this.author : author, videoCount === void 0 ? this.videoCount : videoCount, viewCount === void 0 ? this.viewCount : viewCount);
  };
  PlaylistDetails.prototype.toString = function () {
    return 'PlaylistDetails(playlistId=' + Kotlin.toString(this.playlistId) + (', title=' + Kotlin.toString(this.title)) + (', author=' + Kotlin.toString(this.author)) + (', videoCount=' + Kotlin.toString(this.videoCount)) + (', viewCount=' + Kotlin.toString(this.viewCount)) + ')';
  };
  PlaylistDetails.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.playlistId) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.author) | 0;
    result = result * 31 + Kotlin.hashCode(this.videoCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.viewCount) | 0;
    return result;
  };
  PlaylistDetails.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.playlistId, other.playlistId) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.author, other.author) && Kotlin.equals(this.videoCount, other.videoCount) && Kotlin.equals(this.viewCount, other.viewCount)))));
  };
  function PlaylistVideoDetails(json, index, isPlayable) {
    if (index === void 0)
      index = null;
    if (isPlayable === void 0)
      isPlayable = null;
    AbstractVideoDetails.call(this, json);
    this.json = json;
    this.index = index;
    this.isPlayable = isPlayable;
  }
  PlaylistVideoDetails.prototype.checkDownload = function () {
    if (this.isPlayable === false) {
      throw new YoutubeException$DownloadUnavailableException$RestrictedVideoException('Can not download ' + toString(this.title));
    } else if (this.isLive || this.lengthSeconds === 0) {
      throw new YoutubeException$DownloadUnavailableException$LiveVideoException('Can not download live stream');
    }};
  PlaylistVideoDetails.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlaylistVideoDetails',
    interfaces: [AbstractVideoDetails]
  };
  function PlaylistVideoDetails_init(jsonObject, $this) {
    $this = $this || Object.create(PlaylistVideoDetails.prototype);
    PlaylistVideoDetails.call($this, jsonObject);
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    $this.author = (tmp$_1 = (tmp$_0 = (tmp$ = getJsonObject($this.json, 'shortBylineText')) != null ? getJsonArray(tmp$, 'runs') : null) != null ? getJsonObject_0(tmp$_0, 0) : null) != null ? getString(tmp$_1, 'text') : null;
    var tmp$_6;
    if ((tmp$_2 = getJsonObject($this.json, 'title')) != null) {
      var tmp$_7, tmp$_8, tmp$_9;
      tmp$_6 = (tmp$_9 = getString(tmp$_2, 'simpleText')) != null ? tmp$_9 : (tmp$_8 = (tmp$_7 = getJsonArray(tmp$_2, 'runs')) != null ? getJsonObject_0(tmp$_7, 0) : null) != null ? getString(tmp$_8, 'text') : null;
    } else
      tmp$_6 = null;
    $this.title = tmp$_6;
    if (!$this.thumbnails.isEmpty()) {
      $this.isLive = contains($this.thumbnails.get_za3lpa$(0), '/hqdefault_live.jpg?');
    }$this.isPlayable = (tmp$_3 = getBoolean($this.json, 'isPlayable')) != null ? tmp$_3 : false;
    $this.index = (tmp$_5 = (tmp$_4 = getJsonObject($this.json, 'index')) != null ? getInteger(tmp$_4, 'simpleText') : null) != null ? tmp$_5 : -1;
    return $this;
  }
  PlaylistVideoDetails.prototype.component1 = function () {
    return this.json;
  };
  PlaylistVideoDetails.prototype.component2 = function () {
    return this.index;
  };
  PlaylistVideoDetails.prototype.component3 = function () {
    return this.isPlayable;
  };
  PlaylistVideoDetails.prototype.copy_qinstb$ = function (json, index, isPlayable) {
    return new PlaylistVideoDetails(json === void 0 ? this.json : json, index === void 0 ? this.index : index, isPlayable === void 0 ? this.isPlayable : isPlayable);
  };
  PlaylistVideoDetails.prototype.toString = function () {
    return 'PlaylistVideoDetails(json=' + Kotlin.toString(this.json) + (', index=' + Kotlin.toString(this.index)) + (', isPlayable=' + Kotlin.toString(this.isPlayable)) + ')';
  };
  PlaylistVideoDetails.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.json) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.isPlayable) | 0;
    return result;
  };
  PlaylistVideoDetails.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.json, other.json) && Kotlin.equals(this.index, other.index) && Kotlin.equals(this.isPlayable, other.isPlayable)))));
  };
  function YoutubePlaylist(details, videos) {
    this.details = details;
    this.videos = videos;
  }
  YoutubePlaylist.prototype.findVideoById_pdl1vj$ = function (videoId) {
    var $receiver = this.videos;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.videoId, videoId)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  YoutubePlaylist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YoutubePlaylist',
    interfaces: []
  };
  YoutubePlaylist.prototype.component1 = function () {
    return this.details;
  };
  YoutubePlaylist.prototype.component2 = function () {
    return this.videos;
  };
  YoutubePlaylist.prototype.copy_oke3ke$ = function (details, videos) {
    return new YoutubePlaylist(details === void 0 ? this.details : details, videos === void 0 ? this.videos : videos);
  };
  YoutubePlaylist.prototype.toString = function () {
    return 'YoutubePlaylist(details=' + Kotlin.toString(this.details) + (', videos=' + Kotlin.toString(this.videos)) + ')';
  };
  YoutubePlaylist.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.details) | 0;
    result = result * 31 + Kotlin.hashCode(this.videos) | 0;
    return result;
  };
  YoutubePlaylist.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.details, other.details) && Kotlin.equals(this.videos, other.videos)))));
  };
  function AudioQuality(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AudioQuality_initFields() {
    AudioQuality_initFields = function () {
    };
    AudioQuality$unknown_instance = new AudioQuality('unknown', 0);
    AudioQuality$high_instance = new AudioQuality('high', 1);
    AudioQuality$medium_instance = new AudioQuality('medium', 2);
    AudioQuality$low_instance = new AudioQuality('low', 3);
    AudioQuality$noAudio_instance = new AudioQuality('noAudio', 4);
  }
  var AudioQuality$unknown_instance;
  function AudioQuality$unknown_getInstance() {
    AudioQuality_initFields();
    return AudioQuality$unknown_instance;
  }
  var AudioQuality$high_instance;
  function AudioQuality$high_getInstance() {
    AudioQuality_initFields();
    return AudioQuality$high_instance;
  }
  var AudioQuality$medium_instance;
  function AudioQuality$medium_getInstance() {
    AudioQuality_initFields();
    return AudioQuality$medium_instance;
  }
  var AudioQuality$low_instance;
  function AudioQuality$low_getInstance() {
    AudioQuality_initFields();
    return AudioQuality$low_instance;
  }
  var AudioQuality$noAudio_instance;
  function AudioQuality$noAudio_getInstance() {
    AudioQuality_initFields();
    return AudioQuality$noAudio_instance;
  }
  AudioQuality.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioQuality',
    interfaces: [Enum]
  };
  function AudioQuality$values() {
    return [AudioQuality$unknown_getInstance(), AudioQuality$high_getInstance(), AudioQuality$medium_getInstance(), AudioQuality$low_getInstance(), AudioQuality$noAudio_getInstance()];
  }
  AudioQuality.values = AudioQuality$values;
  function AudioQuality$valueOf(name) {
    switch (name) {
      case 'unknown':
        return AudioQuality$unknown_getInstance();
      case 'high':
        return AudioQuality$high_getInstance();
      case 'medium':
        return AudioQuality$medium_getInstance();
      case 'low':
        return AudioQuality$low_getInstance();
      case 'noAudio':
        return AudioQuality$noAudio_getInstance();
      default:throwISE('No enum constant io.github.shabinder.models.quality.AudioQuality.' + name);
    }
  }
  AudioQuality.valueOf_61zpoe$ = AudioQuality$valueOf;
  function VideoQuality(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function VideoQuality_initFields() {
    VideoQuality_initFields = function () {
    };
    VideoQuality$unknown_instance = new VideoQuality('unknown', 0);
    VideoQuality$highres_instance = new VideoQuality('highres', 1);
    VideoQuality$hd2880p_instance = new VideoQuality('hd2880p', 2);
    VideoQuality$hd2160_instance = new VideoQuality('hd2160', 3);
    VideoQuality$hd1440_instance = new VideoQuality('hd1440', 4);
    VideoQuality$hd1080_instance = new VideoQuality('hd1080', 5);
    VideoQuality$hd720_instance = new VideoQuality('hd720', 6);
    VideoQuality$large_instance = new VideoQuality('large', 7);
    VideoQuality$medium_instance = new VideoQuality('medium', 8);
    VideoQuality$small_instance = new VideoQuality('small', 9);
    VideoQuality$tiny_instance = new VideoQuality('tiny', 10);
    VideoQuality$noVideo_instance = new VideoQuality('noVideo', 11);
  }
  var VideoQuality$unknown_instance;
  function VideoQuality$unknown_getInstance() {
    VideoQuality_initFields();
    return VideoQuality$unknown_instance;
  }
  var VideoQuality$highres_instance;
  function VideoQuality$highres_getInstance() {
    VideoQuality_initFields();
    return VideoQuality$highres_instance;
  }
  var VideoQuality$hd2880p_instance;
  function VideoQuality$hd2880p_getInstance() {
    VideoQuality_initFields();
    return VideoQuality$hd2880p_instance;
  }
  var VideoQuality$hd2160_instance;
  function VideoQuality$hd2160_getInstance() {
    VideoQuality_initFields();
    return VideoQuality$hd2160_instance;
  }
  var VideoQuality$hd1440_instance;
  function VideoQuality$hd1440_getInstance() {
    VideoQuality_initFields();
    return VideoQuality$hd1440_instance;
  }
  var VideoQuality$hd1080_instance;
  function VideoQuality$hd1080_getInstance() {
    VideoQuality_initFields();
    return VideoQuality$hd1080_instance;
  }
  var VideoQuality$hd720_instance;
  function VideoQuality$hd720_getInstance() {
    VideoQuality_initFields();
    return VideoQuality$hd720_instance;
  }
  var VideoQuality$large_instance;
  function VideoQuality$large_getInstance() {
    VideoQuality_initFields();
    return VideoQuality$large_instance;
  }
  var VideoQuality$medium_instance;
  function VideoQuality$medium_getInstance() {
    VideoQuality_initFields();
    return VideoQuality$medium_instance;
  }
  var VideoQuality$small_instance;
  function VideoQuality$small_getInstance() {
    VideoQuality_initFields();
    return VideoQuality$small_instance;
  }
  var VideoQuality$tiny_instance;
  function VideoQuality$tiny_getInstance() {
    VideoQuality_initFields();
    return VideoQuality$tiny_instance;
  }
  var VideoQuality$noVideo_instance;
  function VideoQuality$noVideo_getInstance() {
    VideoQuality_initFields();
    return VideoQuality$noVideo_instance;
  }
  VideoQuality.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VideoQuality',
    interfaces: [Enum]
  };
  function VideoQuality$values() {
    return [VideoQuality$unknown_getInstance(), VideoQuality$highres_getInstance(), VideoQuality$hd2880p_getInstance(), VideoQuality$hd2160_getInstance(), VideoQuality$hd1440_getInstance(), VideoQuality$hd1080_getInstance(), VideoQuality$hd720_getInstance(), VideoQuality$large_getInstance(), VideoQuality$medium_getInstance(), VideoQuality$small_getInstance(), VideoQuality$tiny_getInstance(), VideoQuality$noVideo_getInstance()];
  }
  VideoQuality.values = VideoQuality$values;
  function VideoQuality$valueOf(name) {
    switch (name) {
      case 'unknown':
        return VideoQuality$unknown_getInstance();
      case 'highres':
        return VideoQuality$highres_getInstance();
      case 'hd2880p':
        return VideoQuality$hd2880p_getInstance();
      case 'hd2160':
        return VideoQuality$hd2160_getInstance();
      case 'hd1440':
        return VideoQuality$hd1440_getInstance();
      case 'hd1080':
        return VideoQuality$hd1080_getInstance();
      case 'hd720':
        return VideoQuality$hd720_getInstance();
      case 'large':
        return VideoQuality$large_getInstance();
      case 'medium':
        return VideoQuality$medium_getInstance();
      case 'small':
        return VideoQuality$small_getInstance();
      case 'tiny':
        return VideoQuality$tiny_getInstance();
      case 'noVideo':
        return VideoQuality$noVideo_getInstance();
      default:throwISE('No enum constant io.github.shabinder.models.quality.VideoQuality.' + name);
    }
  }
  VideoQuality.valueOf_61zpoe$ = VideoQuality$valueOf;
  function get$lambda_0($receiver) {
    return Unit;
  }
  function Subtitles(url, fromCaptions) {
    if (fromCaptions === void 0)
      fromCaptions = false;
    this.url_0 = url;
    this.fromCaptions_0 = fromCaptions;
    this.format_0 = null;
    this.translationLanguage_0 = null;
  }
  Subtitles.prototype.formatTo_z89k15$ = function (extension) {
    this.format_0 = extension;
    return this;
  };
  Subtitles.prototype.translateTo_pdl1vj$ = function (language) {
    if (this.fromCaptions_0) {
      this.translationLanguage_0 = language;
    }return this;
  };
  Object.defineProperty(Subtitles.prototype, 'downloadUrl', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      var downloadUrl = this.url_0;
      if (this.format_0 != null && ((tmp$ = this.format_0) != null ? tmp$.isSubtitle : null) === true) {
        downloadUrl += '&fmt=' + ensureNotNull(this.format_0).value;
      }var tmp$_1 = this.translationLanguage_0 != null;
      if (tmp$_1) {
        tmp$_1 = ((tmp$_0 = this.translationLanguage_0) != null ? tmp$_0.length > 0 : null) === true;
      }if (tmp$_1) {
        downloadUrl += '&tlang=' + toString(this.translationLanguage_0);
      }return downloadUrl;
    }
  });
  function Subtitles$download$lambda($receiver) {
    return Unit;
  }
  function Coroutine$download($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 14;
    this.$this = $this;
    this.local$client = void 0;
    this.local$byteArray = void 0;
    this.local$response = void 0;
  }
  Coroutine$download.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$download.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$download.prototype.constructor = Coroutine$download;
  Coroutine$download.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            try {
              tmp$ = Url(this.$this.downloadUrl);
            } catch (e) {
              if (Kotlin.isType(e, URLParserException)) {
                throw new YoutubeException$SubtitlesException('Failed to download subtitle: Invalid url: ' + e.message);
              } else
                throw e;
            }

            var url_0 = tmp$;
            this.local$client = HttpClient(Subtitles$download$lambda);
            this.exceptionState_0 = 11;
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom_0($receiver_1.url, url_0);
            get$lambda_0($receiver_1);
            var $this_0 = new HttpStatement_init($receiver_1, this.local$client);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(HttpStatement_init);
            if (equals_0(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = Kotlin.isType(tmp$_5 = $this_0, HttpStatement_init) ? tmp$_5 : throwCCE();
              this.state_0 = 8;
              continue;
            } else {
              if (equals_0(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 6;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpStatement_init), createKType(getKClass(HttpStatement_init), [], false));
              } catch (_) {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpStatement_init), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_qi9ur9$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, HttpStatement_init) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 11;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 7;
            continue;
          case 4:
            this.finallyPath_0 = [11];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 11;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, HttpStatement_init) ? tmp$_6 : throwCCE();
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.result_0;
            this.state_0 = 9;
            this.result_0 = this.result_0.execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            var result = this.result_0;
            var responseCode = result.status.value;
            var contentLength_0 = (tmp$_1 = (tmp$_0 = contentLength(result)) != null ? tmp$_0.toInt() : null) != null ? tmp$_1 : 0;
            if (responseCode !== 200) {
              throw new YoutubeException$SubtitlesException('Failed to download subtitle: HTTP ' + responseCode);
            }
            if (contentLength_0 === 0) {
              throw new YoutubeException$SubtitlesException('Failed to download subtitle: Response is empty');
            }
            this.local$byteArray = new Int8Array(contentLength_0);
            this.state_0 = 10;
            this.result_0 = result.content.readFully_mj6st8$(this.local$byteArray, 0, contentLength_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.exceptionState_0 = 14;
            this.finallyPath_0 = [13];
            this.state_0 = 12;
            continue;
          case 11:
            this.finallyPath_0 = [14];
            this.exceptionState_0 = 12;
            var e = this.exception_0;
            if (Kotlin.isType(e, IOException)) {
              throw new YoutubeException$SubtitlesException('Failed to download subtitle: ' + e.message);
            } else
              throw e;
          case 12:
            this.exceptionState_0 = 14;
            this.local$client.close();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 13:
            return decodeToString(this.local$byteArray);
          case 14:
            throw this.exception_0;
          default:this.state_0 = 14;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 14) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Subtitles.prototype.download = function (continuation_0, suspended) {
    var instance = new Coroutine$download(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Subtitles.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Subtitles',
    interfaces: []
  };
  function SubtitlesInfo(url, language, isAutoGenerated, fromCaptions) {
    SubtitlesInfo$Companion_getInstance();
    if (fromCaptions === void 0)
      fromCaptions = false;
    this.language = language;
    this.isAutoGenerated = isAutoGenerated;
    this.fromCaptions = fromCaptions;
    var $receiver = SubtitlesInfo$Companion_getInstance().fmtRegex_0.replace_x2uqeu$(url, '');
    this.url = SubtitlesInfo$Companion_getInstance().tlangRegex_0.replace_x2uqeu$($receiver, '');
  }
  Object.defineProperty(SubtitlesInfo.prototype, 'subtitles', {
    configurable: true,
    get: function () {
      return new Subtitles(this.url);
    }
  });
  SubtitlesInfo.prototype.toString = function () {
    return 'SubtitlesInfo(' + this.url + ',' + this.language + ',' + this.isAutoGenerated + ',' + this.fromCaptions + ')';
  };
  function SubtitlesInfo$Companion() {
    SubtitlesInfo$Companion_instance = this;
    this.fmtRegex_0 = Regex_init('&fmt=[^&]*');
    this.tlangRegex_0 = Regex_init('&tlang=[^&]*');
  }
  SubtitlesInfo$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SubtitlesInfo$Companion_instance = null;
  function SubtitlesInfo$Companion_getInstance() {
    if (SubtitlesInfo$Companion_instance === null) {
      new SubtitlesInfo$Companion();
    }return SubtitlesInfo$Companion_instance;
  }
  SubtitlesInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubtitlesInfo',
    interfaces: []
  };
  function DefaultParser(extractor, cipherFactory) {
    DefaultParser$Companion_getInstance();
    if (extractor === void 0)
      extractor = new DefaultExtractor();
    if (cipherFactory === void 0)
      cipherFactory = new CachedCipherFactory(extractor);
    this.extractor_ja1eo8$_0 = extractor;
    this.cipherFactory_spz5ab$_0 = cipherFactory;
  }
  Object.defineProperty(DefaultParser.prototype, 'extractor', {
    get: function () {
      return this.extractor_ja1eo8$_0;
    }
  });
  Object.defineProperty(DefaultParser.prototype, 'cipherFactory', {
    get: function () {
      return this.cipherFactory_spz5ab$_0;
    }
  });
  function Coroutine$getPlayerConfig_61zpoe$($this, htmlUrl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$htmlUrl = htmlUrl_0;
  }
  Coroutine$getPlayerConfig_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getPlayerConfig_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getPlayerConfig_61zpoe$.prototype.constructor = Coroutine$getPlayerConfig_61zpoe$;
  Coroutine$getPlayerConfig_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.extractor.loadUrl_ughrhi$(this.local$htmlUrl, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var html = this.result_0;
            var ytPlayerConfig = this.$this.extractor.extractYtPlayerConfig_61zpoe$(html);
            try {
              var $receiver = Json.Default;
              var tmp$_0;
              var config = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(JsonObject), [], false)), KSerializer) ? tmp$_0 : throwCCE(), ytPlayerConfig);
              if (config.containsKey_11rb$('args')) {
                tmp$ = config;
              } else {
                var builder = new JsonObjectBuilder_init();
                var builder_0 = new JsonObjectBuilder_init();
                builder_0.put_zafu29$('player_response', config);
                builder.put_zafu29$('args', builder_0.build());
                tmp$ = builder.build();
              }
            } catch (e) {
              if (Kotlin.isType(e, Exception)) {
                throw new YoutubeException$BadPageException('Could not parse player config json');
              } else
                throw e;
            }

            return tmp$;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DefaultParser.prototype.getPlayerConfig_61zpoe$ = function (htmlUrl_0, continuation_0, suspended) {
    var instance = new Coroutine$getPlayerConfig_61zpoe$(this, htmlUrl_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultParser.prototype.getClientVersion_3q8efs$ = function (json) {
    return this.getClientVersionFromContext_0(getJsonObject(getJsonObject(getJsonObject(json, 'args'), 'player_response'), 'responseContext'));
  };
  function Coroutine$getJsUrl_3q8efs$($this, json_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$js = void 0;
    this.local$json = json_0;
  }
  Coroutine$getJsUrl_3q8efs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getJsUrl_3q8efs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getJsUrl_3q8efs$.prototype.constructor = Coroutine$getJsUrl_3q8efs$;
  Coroutine$getJsUrl_3q8efs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2;
            this.local$js = null;
            if (this.local$json.containsKey_11rb$('assets')) {
              this.local$js = getString(ensureNotNull(getJsonObject(this.local$json, 'assets')), 'js');
              this.state_0 = 3;
              continue;
            } else {
              var videoId = getString(this.local$json, 'yt-downloader-videoId');
              this.state_0 = 2;
              this.result_0 = this.$this.extractor.loadUrl_ughrhi$('https://www.youtube.com/embed/' + toString(videoId), void 0, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var html = this.result_0;
            var matcher = DefaultParser$Companion_getInstance().assetsJsRegex_0.find_905azu$(html);
            var $receiver = matcher != null ? matcher.value : null;
            if (!($receiver == null || isBlank($receiver))) {
              this.local$js = (tmp$_0 = (tmp$ = matcher != null ? matcher.groupValues : null) != null ? tmp$.get_za3lpa$(1) : null) != null ? replace(tmp$_0, '\\', '') : null;
            } else {
              matcher = DefaultParser$Companion_getInstance().embJsRegex_0.find_905azu$(html);
              var $receiver_0 = matcher != null ? matcher.value : null;
              if (!($receiver_0 == null || isBlank($receiver_0))) {
                this.local$js = (tmp$_2 = (tmp$_1 = matcher != null ? matcher.groupValues : null) != null ? tmp$_1.get_za3lpa$(1) : null) != null ? replace(tmp$_2, '\\', '') : null;
              }}

            this.state_0 = 3;
            continue;
          case 3:
            if (this.local$js == null) {
              throw new YoutubeException$BadPageException('Could not extract js url: assets not found');
            }
            return 'https://youtube.com' + toString(this.local$js);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DefaultParser.prototype.getJsUrl_3q8efs$ = function (json_0, continuation_0, suspended) {
    var instance = new Coroutine$getJsUrl_3q8efs$(this, json_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultParser.prototype.getVideoDetails_3q8efs$ = function (json) {
    var tmp$;
    var args = ensureNotNull(getJsonObject(json, 'args'));
    var playerResponse = getJsonObject(args, 'player_response');
    if ((playerResponse != null ? playerResponse.containsKey_11rb$('videoDetails') : null) === true) {
      var videoDetails = getJsonObject(playerResponse, 'videoDetails');
      var liveHLSUrl = {v: null};
      if ((videoDetails != null ? getBoolean(videoDetails, 'isLive') : null) === true) {
        if (playerResponse.containsKey_11rb$('streamingData')) {
          liveHLSUrl.v = (tmp$ = getJsonObject(playerResponse, 'streamingData')) != null ? getString(tmp$, 'hlsManifestUrl') : null;
        }}return videoDetails != null ? VideoDetails_init(videoDetails, liveHLSUrl.v) : null;
    }return null;
  };
  DefaultParser.prototype.getSubtitlesInfoFromCaptions_3q8efs$ = function (json) {
    var tmp$;
    var args = getJsonObject(json, 'args');
    var playerResponse = args != null ? getJsonObject(args, 'player_response') : null;
    if ((playerResponse != null ? playerResponse.containsKey_11rb$('captions') : null) === false) {
      return emptyList();
    }var captions = getJsonObject(playerResponse, 'captions');
    var playerCaptionsTrackListRenderer = getJsonObject(captions, 'playerCaptionsTracklistRenderer');
    if (playerCaptionsTrackListRenderer == null || playerCaptionsTrackListRenderer.isEmpty()) {
      return emptyList();
    }var captionsArray = getJsonArray(playerCaptionsTrackListRenderer, 'captionTracks');
    if (captionsArray == null || captionsArray.isEmpty()) {
      return emptyList();
    }var subtitlesInfo = ArrayList_init_0();
    tmp$ = captionsArray.size;
    for (var i = 0; i < tmp$; i++) {
      var subtitleInfo = getJsonObject_0(captionsArray, i);
      var language = subtitleInfo != null ? getString(subtitleInfo, 'languageCode') : null;
      var url = subtitleInfo != null ? getString(subtitleInfo, 'baseUrl') : null;
      var vssId = subtitleInfo != null ? getString(subtitleInfo, 'vssId') : null;
      if (language != null && url != null && vssId != null) {
        var isAutoGenerated = startsWith(vssId, 'a.');
        subtitlesInfo.add_11rb$(new SubtitlesInfo(url, language, isAutoGenerated, true));
      }}
    return subtitlesInfo;
  };
  function Coroutine$getSubtitlesInfo_61zpoe$($this, videoId_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$videoId = videoId_0;
  }
  Coroutine$getSubtitlesInfo_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getSubtitlesInfo_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getSubtitlesInfo_61zpoe$.prototype.constructor = Coroutine$getSubtitlesInfo_61zpoe$;
  Coroutine$getSubtitlesInfo_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var xmlUrl = 'https://video.google.com/timedtext?hl=en&type=list&v=' + this.local$videoId;
            this.state_0 = 2;
            this.result_0 = this.$this.extractor.loadUrl_ughrhi$(xmlUrl, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var subtitlesXml = this.result_0;
            this.local$tmp$ = DefaultParser$Companion_getInstance().subtitleLangCodeRegex_0.find_905azu$(subtitlesXml);
            if (this.local$tmp$ == null) {
              return emptyList();
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            var matcher = this.local$tmp$;
            var subtitlesInfo = ArrayList_init_0();
            while (matcher != null) {
              var language = matcher.groupValues.get_za3lpa$(1);
              var url = 'https://www.youtube.com/api/timedtext?lang=' + language + '&v=' + this.local$videoId;
              subtitlesInfo.add_11rb$(new SubtitlesInfo(url, language, false));
              matcher = matcher.next();
            }

            return subtitlesInfo;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DefaultParser.prototype.getSubtitlesInfo_61zpoe$ = function (videoId_0, continuation_0, suspended) {
    var instance = new Coroutine$getSubtitlesInfo_61zpoe$(this, videoId_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parseFormats_3q8efs$($this, json_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$jsonFormats = void 0;
    this.local$jsonAdaptiveFormats = void 0;
    this.local$jsUrl = void 0;
    this.local$formats = void 0;
    this.local$json = json_0;
  }
  Coroutine$parseFormats_3q8efs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parseFormats_3q8efs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parseFormats_3q8efs$.prototype.constructor = Coroutine$parseFormats_3q8efs$;
  Coroutine$parseFormats_3q8efs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            var args = ensureNotNull(getJsonObject(this.local$json, 'args'));
            var playerResponse = ensureNotNull(getJsonObject(args, 'player_response'));
            if (!playerResponse.containsKey_11rb$('streamingData')) {
              throw new YoutubeException$BadPageException('Streaming data not found');
            }
            var streamingData = ensureNotNull(getJsonObject(playerResponse, 'streamingData'));
            this.local$jsonFormats = ArrayList_init_0();
            if (streamingData.containsKey_11rb$('formats')) {
              if ((tmp$ = getJsonArray(streamingData, 'formats')) != null) {
                this.local$jsonFormats.addAll_brywnq$(tmp$);
              }}
            this.local$jsonAdaptiveFormats = ArrayList_init_0();
            if (streamingData.containsKey_11rb$('adaptiveFormats')) {
              if ((tmp$_0 = getJsonArray(streamingData, 'adaptiveFormats')) != null) {
                this.local$jsonAdaptiveFormats.addAll_brywnq$(tmp$_0);
              }}
            this.state_0 = 2;
            this.result_0 = this.$this.getJsUrl_3q8efs$(this.local$json, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$jsUrl = this.result_0;
            this.local$formats = ArrayList_init_0();
            this.state_0 = 3;
            this.result_0 = this.$this.populateFormats_0(this.local$formats, new JsonArray(this.local$jsonFormats), this.local$jsUrl, false, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.$this.populateFormats_0(this.local$formats, new JsonArray(this.local$jsonAdaptiveFormats), this.local$jsUrl, true, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return this.local$formats;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DefaultParser.prototype.parseFormats_3q8efs$ = function (json_0, continuation_0, suspended) {
    var instance = new Coroutine$parseFormats_3q8efs$(this, json_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getInitialData_61zpoe$($this, htmlUrl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$htmlUrl = htmlUrl_0;
  }
  Coroutine$getInitialData_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getInitialData_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getInitialData_61zpoe$.prototype.constructor = Coroutine$getInitialData_61zpoe$;
  Coroutine$getInitialData_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.extractor.loadUrl_ughrhi$(this.local$htmlUrl, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var html = this.result_0;
            var ytInitialData = this.$this.extractor.extractYtInitialData_61zpoe$(html);
            try {
              var $receiver = Json.Default;
              var tmp$_0;
              tmp$ = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(JsonObject), [], false)), KSerializer) ? tmp$_0 : throwCCE(), ytInitialData);
            } catch (e) {
              if (Kotlin.isType(e, Exception)) {
                printStackTrace(e);
                throw new YoutubeException$BadPageException('Could not parse initial data json');
              } else
                throw e;
            }

            return tmp$;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DefaultParser.prototype.getInitialData_61zpoe$ = function (htmlUrl_0, continuation_0, suspended) {
    var instance = new Coroutine$getInitialData_61zpoe$(this, htmlUrl_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultParser.prototype.getPlaylistDetails_15fzva$ = function (playlistId, initialData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    try {
      var title = ensureNotNull((tmp$ = getJsonObject(getJsonObject(initialData, 'metadata'), 'playlistMetadataRenderer')) != null ? getString(tmp$, 'title') : null);
      var sideBarItems = ensureNotNull(getJsonArray(getJsonObject(getJsonObject(initialData, 'sidebar'), 'playlistSidebarRenderer'), 'items'));
      var author = null;
      try {
        author = (tmp$_0 = getJsonObject_0(getJsonArray(getJsonObject(getJsonObject(getJsonObject(getJsonObject(getJsonObject_0(sideBarItems, 1), 'playlistSidebarSecondaryInfoRenderer'), 'videoOwner'), 'videoOwnerRenderer'), 'title'), 'runs'), 0)) != null ? getString(tmp$_0, 'text') : null;
      } catch (ignored) {
        if (!Kotlin.isType(ignored, Exception))
          throw ignored;
      }
      var stats = getJsonArray(getJsonObject(getJsonObject_0(sideBarItems, 0), 'playlistSidebarPrimaryInfoRenderer'), 'stats');
      tmp$_2 = ensureNotNull((tmp$_1 = getJsonObject_0(getJsonArray(getJsonObject_0(stats, 0), 'runs'), 0)) != null ? getString(tmp$_1, 'text') : null);
      var videoCount = DefaultParser$Companion_getInstance().extractNumber_0(tmp$_2);
      tmp$_4 = ensureNotNull((tmp$_3 = getJsonObject_0(stats, 1)) != null ? getString(tmp$_3, 'simpleText') : null);
      var viewCount = DefaultParser$Companion_getInstance().extractNumber_0(tmp$_4);
      return new PlaylistDetails(playlistId, title, author, videoCount, viewCount);
    } catch (e) {
      if (Kotlin.isType(e, NullPointerException)) {
        printStackTrace(e);
        throw new YoutubeException$BadPageException('Bad Playlist Details');
      } else
        throw e;
    }
  };
  function Coroutine$getPlaylistVideos_6rbl2u$($this, initialData_0, videoCount_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$videos = void 0;
    this.local$initialData = initialData_0;
  }
  Coroutine$getPlaylistVideos_6rbl2u$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getPlaylistVideos_6rbl2u$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getPlaylistVideos_6rbl2u$.prototype.constructor = Coroutine$getPlaylistVideos_6rbl2u$;
  Coroutine$getPlaylistVideos_6rbl2u$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            try {
              tmp$ = ensureNotNull(getJsonObject(getJsonObject_0(getJsonArray(getJsonObject(getJsonObject_0(getJsonArray(getJsonObject(getJsonObject(getJsonObject(getJsonObject_0(getJsonArray(getJsonObject(getJsonObject(this.local$initialData, 'contents'), 'twoColumnBrowseResultsRenderer'), 'tabs'), 0), 'tabRenderer'), 'content'), 'sectionListRenderer'), 'contents'), 0), 'itemSectionRenderer'), 'contents'), 0), 'playlistVideoListRenderer'));
            } catch (e) {
              if (Kotlin.isType(e, NullPointerException)) {
                throw new YoutubeException$BadPageException('Playlist initial data not found');
              } else
                throw e;
            }

            var content = tmp$;
            this.local$videos = ArrayList_init_0();
            this.state_0 = 2;
            this.result_0 = this.$this.populatePlaylist_0(content, this.local$videos, (tmp$_1 = (tmp$_0 = this.local$initialData.get_11rb$('responseContext')) != null ? get_jsonObject(tmp$_0) : null) != null ? this.$this.getClientVersionFromContext_0(tmp$_1) : null, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$videos;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DefaultParser.prototype.getPlaylistVideos_6rbl2u$ = function (initialData_0, videoCount_0, continuation_0, suspended) {
    var instance = new Coroutine$getPlaylistVideos_6rbl2u$(this, initialData_0, videoCount_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getChannelUploadsPlaylistId_61zpoe$($this, channelId_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.$this = $this;
    this.local$channelLink = void 0;
    this.local$tmp$ = void 0;
    this.local$channelId = channelId_0;
  }
  Coroutine$getChannelUploadsPlaylistId_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getChannelUploadsPlaylistId_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getChannelUploadsPlaylistId_61zpoe$.prototype.constructor = Coroutine$getChannelUploadsPlaylistId_61zpoe$;
  Coroutine$getChannelUploadsPlaylistId_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            try {
              if (this.local$channelId.length === 24 && startsWith(this.local$channelId, 'UC')) {
                tmp$ = 'https://www.youtube.com/channel/' + this.local$channelId + '/videos?view=57';
              } else {
                tmp$ = 'https://www.youtube.com/c/' + this.local$channelId + '/videos?view=57';
              }
            } catch (e) {
              if (Kotlin.isType(e, URLParserException)) {
                throw new YoutubeException$BadPageException('Upload Playlist not found');
              } else
                throw e;
            }

            this.local$channelLink = tmp$;
            this.exceptionState_0 = 5;
            this.state_0 = 1;
            this.result_0 = downloadByteArray(this.local$channelLink, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var result = decodeToString(this.result_0);
            this.local$tmp$ = split(result, ['list=']).iterator();
            this.state_0 = 2;
            continue;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }
            var element = this.local$tmp$.next();
            if (startsWith(element, 'UU')) {
              return element.substring(0, 24);
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            this.exceptionState_0 = 7;
            this.state_0 = 6;
            continue;
          case 5:
            this.exceptionState_0 = 7;
            var e = this.exception_0;
            if (Kotlin.isType(e, IOException)) {
              throw new YoutubeException$BadPageException('Could not load url: ' + this.local$channelLink + ', exception: ' + toString(e.message));
            } else
              throw e;
          case 6:
            throw new YoutubeException$BadPageException('Upload Playlist not found');
          case 7:
            throw this.exception_0;
          default:this.state_0 = 7;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 7) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DefaultParser.prototype.getChannelUploadsPlaylistId_61zpoe$ = function (channelId_0, continuation_0, suspended) {
    var instance = new Coroutine$getChannelUploadsPlaylistId_61zpoe$(this, channelId_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$populateFormats_0($this, formats_0, jsonFormats_0, jsUrl_0, isAdaptive_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$i = void 0;
    this.local$json = void 0;
    this.local$formats = formats_0;
    this.local$jsonFormats = jsonFormats_0;
    this.local$jsUrl = jsUrl_0;
    this.local$isAdaptive = isAdaptive_0;
  }
  Coroutine$populateFormats_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$populateFormats_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$populateFormats_0.prototype.constructor = Coroutine$populateFormats_0;
  Coroutine$populateFormats_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$jsonFormats.size;
            this.local$i = 0;
            this.state_0 = 1;
            continue;
          case 1:
            if (this.local$i >= this.local$tmp$) {
              this.state_0 = 8;
              continue;
            }
            this.local$json = get_jsonObject(this.local$jsonFormats.get_za3lpa$(this.local$i));
            if (equals_0('FORMAT_STREAM_TYPE_OTF', getString(this.local$json, 'type'))) {
              this.state_0 = 7;
              continue;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 2:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            this.result_0 = this.$this.parseFormat_0(this.local$json, this.local$jsUrl, this.local$isAdaptive, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var format = this.result_0;
            this.local$formats.add_11rb$(format);
            this.exceptionState_0 = 6;
            this.state_0 = 5;
            continue;
          case 4:
            this.exceptionState_0 = 6;
            var e = this.exception_0;
            if (Kotlin.isType(e, YoutubeException$CipherException)) {
              throw e;
            } else if (Kotlin.isType(e, YoutubeException)) {
              println('Error parsing format: ' + e.message);
            } else if (Kotlin.isType(e, Exception)) {
              printStackTrace(e);
            } else
              throw e;
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 7;
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            this.local$i++;
            this.state_0 = 1;
            continue;
          case 8:
            return;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DefaultParser.prototype.populateFormats_0 = function (formats_0, jsonFormats_0, jsUrl_0, isAdaptive_0, continuation_0, suspended) {
    var instance = new Coroutine$populateFormats_0(this, formats_0, jsonFormats_0, jsUrl_0, isAdaptive_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parseFormat_0($this, jsonOb_0, jsUrl_0, isAdaptive_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$json = void 0;
    this.local$urlWithSig = void 0;
    this.local$s = void 0;
    this.local$jsonOb = jsonOb_0;
    this.local$jsUrl = jsUrl_0;
    this.local$isAdaptive = isAdaptive_0;
  }
  Coroutine$parseFormat_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parseFormat_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parseFormat_0.prototype.constructor = Coroutine$parseFormat_0;
  Coroutine$parseFormat_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16;
            this.local$json = LinkedHashMap_init();
            var $receiver = this.local$jsonOb.entries;
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_17;
            tmp$_17 = $receiver.iterator();
            while (tmp$_17.hasNext()) {
              var item = tmp$_17.next();
              destination.add_11rb$(to(item.key, item.value));
            }

            toMap(destination, this.local$json);
            if (this.local$jsonOb.containsKey_11rb$('signatureCipher')) {
              var jsonCipher = LinkedHashMap_init();
              var cipherData = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.local$json.get_11rb$('signatureCipher')) != null ? get_jsonPrimitive(tmp$) : null) != null ? tmp$_0.content : null) != null ? replace(tmp$_1, '\\u0026', '&') : null) != null ? split(tmp$_2, ['&']) : null) != null ? tmp$_3 : emptyList();
              tmp$_4 = cipherData.iterator();
              while (tmp$_4.hasNext()) {
                var s = tmp$_4.next();
                var keyValue = copyToArray(split(s, ['=']));
                var key = keyValue[0];
                var value = JsonPrimitive(keyValue[1]);
                jsonCipher.put_xwzc9p$(key, value);
              }
              if (!jsonCipher.containsKey_11rb$('url')) {
                throw new YoutubeException$BadPageException('Could not found url in cipher data');
              }this.local$urlWithSig = decodeToString(encodeToByteArray(get_jsonPrimitive(ensureNotNull(jsonCipher.get_11rb$('url'))).content));
              try {
                this.local$urlWithSig = decodeURLPart(ensureNotNull(this.local$urlWithSig));
              } catch (e) {
                if (Kotlin.isType(e, Exception)) {
                  printStackTrace(e);
                } else
                  throw e;
              }
              if ((this.local$urlWithSig != null ? contains(this.local$urlWithSig, 'signature') : null) !== true && (jsonCipher.containsKey_11rb$('s') || ((this.local$urlWithSig != null ? contains(this.local$urlWithSig, '&sig=') : null) !== true && (this.local$urlWithSig != null ? contains(this.local$urlWithSig, '&lsig=') : null) !== true))) {
                this.local$s = (tmp$_8 = (tmp$_7 = (tmp$_6 = (tmp$_5 = jsonCipher.get_11rb$('s')) != null ? get_jsonPrimitive(tmp$_5) : null) != null ? tmp$_6.content : null) != null ? encodeToByteArray(tmp$_7) : null) != null ? decodeToString(tmp$_8) : null;
                this.exceptionState_0 = 2;
                this.local$s = decodeURLPart(ensureNotNull(this.local$s));
                this.state_0 = 1;
                this.result_0 = this.$this.cipherFactory.createCipher_61zpoe$(this.local$jsUrl, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 4;
                continue;
              }
            } else {
              this.state_0 = 5;
              continue;
            }

          case 1:
            var cipher = this.result_0;
            var signature = cipher.getSignature_61zpoe$(this.local$s);
            var decipheredUrl = toString(this.local$urlWithSig) + '&sig=' + signature;
            var value_0 = JsonPrimitive(decipheredUrl);
            this.local$json.put_xwzc9p$('url', value_0);
            this.exceptionState_0 = 6;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 6;
            var e = this.exception_0;
            if (Kotlin.isType(e, Exception)) {
              printStackTrace(e);
            } else
              throw e;
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            var itag;
            try {
              itag = Itag$valueOf('i' + toString((tmp$_11 = (tmp$_10 = (tmp$_9 = this.local$json.get_11rb$('itag')) != null ? get_jsonPrimitive(tmp$_9) : null) != null ? tmp$_10.content : null) != null ? toInt(tmp$_11) : null));
            } catch (e) {
              if (Kotlin.isType(e, IllegalArgumentException)) {
                printStackTrace(e);
                itag = Itag$unknown_getInstance();
                itag.id = (tmp$_15 = (tmp$_14 = (tmp$_13 = (tmp$_12 = this.local$json.get_11rb$('itag')) != null ? get_jsonPrimitive(tmp$_12) : null) != null ? tmp$_13.content : null) != null ? toIntOrNull(tmp$_14) : null) != null ? tmp$_15 : 0;
              } else
                throw e;
            }

            var hasVideo = itag.isVideo || this.local$json.containsKey_11rb$('size') || this.local$json.containsKey_11rb$('width');
            var hasAudio = itag.isAudio || this.local$json.containsKey_11rb$('audioQuality');
            if (hasVideo && hasAudio)
              tmp$_16 = new AudioVideoFormat(new JsonObject(this.local$json), this.local$isAdaptive);
            else if (hasVideo)
              tmp$_16 = new VideoFormat(new JsonObject(this.local$json), this.local$isAdaptive);
            else if (hasAudio)
              tmp$_16 = new AudioFormat(new JsonObject(this.local$json), this.local$isAdaptive);
            else
              throw new YoutubeException$UnknownFormatException('unknown format with itag ' + toString(itag.id));
            return tmp$_16;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DefaultParser.prototype.parseFormat_0 = function (jsonOb_0, jsUrl_0, isAdaptive_0, continuation_0, suspended) {
    var instance = new Coroutine$parseFormat_0(this, jsonOb_0, jsUrl_0, isAdaptive_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$populatePlaylist_0($this, content_0, videos_0, clientVersion_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$contents = void 0;
    this.local$i = void 0;
    this.local$content = content_0;
    this.local$videos = videos_0;
    this.local$clientVersion = clientVersion_0;
  }
  Coroutine$populatePlaylist_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$populatePlaylist_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$populatePlaylist_0.prototype.constructor = Coroutine$populatePlaylist_0;
  Coroutine$populatePlaylist_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var tmp$_0, tmp$_1, tmp$_2;
            if (this.local$content.containsKey_11rb$('contents')) {
              this.local$tmp$_0 = get_jsonArray(ensureNotNull(this.local$content.get_11rb$('contents')));
              this.state_0 = 6;
              continue;
            } else {
              if (this.local$content.containsKey_11rb$('continuationItems')) {
                this.local$tmp$_0 = get_jsonArray(ensureNotNull(this.local$content.get_11rb$('continuationItems')));
                this.state_0 = 5;
                continue;
              } else {
                if (this.local$content.containsKey_11rb$('continuations')) {
                  var nextContinuationData = (tmp$ = get_jsonObject(get_jsonArray(ensureNotNull(this.local$content.get_11rb$('continuations'))).get_za3lpa$(0)).get_11rb$('nextContinuationData')) != null ? get_jsonObject(tmp$) : null;
                  var continuation = nextContinuationData != null ? getString(nextContinuationData, 'continuation') : null;
                  var ctp = nextContinuationData != null ? getString(nextContinuationData, 'clickTrackingParams') : null;
                  if (continuation != null && ctp != null && this.local$clientVersion != null) {
                    this.state_0 = 2;
                    this.result_0 = this.$this.loadPlaylistContinuation_0(continuation, ctp, this.local$videos, this.local$clientVersion, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  } else {
                    this.state_0 = 3;
                    continue;
                  }
                } else {
                  return;
                }
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            return;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.local$contents = this.local$tmp$_0;
            this.local$tmp$_1 = this.local$contents.size;
            this.local$i = 0;
            this.state_0 = 7;
            continue;
          case 7:
            if (this.local$i >= this.local$tmp$_1) {
              this.state_0 = 13;
              continue;
            }
            var contentsItem = get_jsonObject(this.local$contents.get_za3lpa$(this.local$i));
            if (contentsItem.containsKey_11rb$('playlistVideoRenderer')) {
              this.local$videos.add_11rb$(PlaylistVideoDetails_init(get_jsonObject(ensureNotNull(contentsItem.get_11rb$('playlistVideoRenderer')))));
              this.state_0 = 11;
              continue;
            } else {
              if (contentsItem.containsKey_11rb$('continuationItemRenderer')) {
                var continuationEndpoint = (tmp$_0 = get_jsonObject(ensureNotNull(contentsItem.get_11rb$('continuationItemRenderer'))).get_11rb$('continuationEndpoint')) != null ? get_jsonObject(tmp$_0) : null;
                var continuation_0 = (tmp$_2 = (tmp$_1 = continuationEndpoint != null ? continuationEndpoint.get_11rb$('continuationCommand') : null) != null ? get_jsonObject(tmp$_1) : null) != null ? getString(tmp$_2, 'token') : null;
                var ctp_0 = continuationEndpoint != null ? getString(continuationEndpoint, 'clickTrackingParams') : null;
                if (continuation_0 != null && ctp_0 != null && this.local$clientVersion != null) {
                  this.state_0 = 8;
                  this.result_0 = this.$this.loadPlaylistContinuation_0(continuation_0, ctp_0, this.local$videos, this.local$clientVersion, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                } else {
                  this.state_0 = 9;
                  continue;
                }
              } else {
                this.state_0 = 10;
                continue;
              }
            }

          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.state_0 = 10;
            continue;
          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            this.local$i++;
            this.state_0 = 7;
            continue;
          case 13:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DefaultParser.prototype.populatePlaylist_0 = function (content_0, videos_0, clientVersion_0, continuation_0, suspended) {
    var instance = new Coroutine$populatePlaylist_0(this, content_0, videos_0, clientVersion_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$loadPlaylistContinuation_0($this, continuation_1, ctp_0, videos_0, clientVersion_0, continuation_2) {
    CoroutineImpl.call(this, continuation_2);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$continuation = continuation_1;
    this.local$ctp = ctp_0;
    this.local$videos = videos_0;
    this.local$clientVersion = clientVersion_0;
  }
  Coroutine$loadPlaylistContinuation_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadPlaylistContinuation_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadPlaylistContinuation_0.prototype.constructor = Coroutine$loadPlaylistContinuation_0;
  Coroutine$loadPlaylistContinuation_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
            var content;
            var url = 'https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
            this.$this.extractor.setRequestProperty_puj7f4$('X-YouTube-Client-Name', '1');
            this.$this.extractor.setRequestProperty_puj7f4$('X-YouTube-Client-Version', this.local$clientVersion);
            this.$this.extractor.setRequestProperty_puj7f4$('Content-Type', 'application/json');
            var builder = new JsonObjectBuilder_init();
            var builder_0 = new JsonObjectBuilder_init();
            var builder_1 = new JsonObjectBuilder_init();
            put(builder_1, 'clientName', 'WEB');
            put(builder_1, 'clientVersion', '2.20201021.03.00');
            builder_0.put_zafu29$('client', builder_1.build());
            builder.put_zafu29$('context', builder_0.build());
            put(builder, 'continuation', this.local$continuation);
            var builder_2 = new JsonObjectBuilder_init();
            put(builder_2, 'clickTrackingParams', this.local$ctp);
            builder.put_zafu29$('clickTracking', builder_2.build());
            var data = builder.build();
            this.state_0 = 1;
            this.result_0 = this.$this.extractor.loadUrl_ughrhi$(url, data.toString(), Methods$POST_getInstance(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var html = this.result_0;
            this.exceptionState_0 = 4;
            var $receiver = Json.Default;
            var tmp$_8;
            var response = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$_8 = serializer($receiver.serializersModule, createKType(getKClass(JsonObject), [], false)), KSerializer) ? tmp$_8 : throwCCE(), html);
            if (response.containsKey_11rb$('continuationContents')) {
              tmp$_7 = (tmp$_1 = (tmp$_0 = (tmp$ = response.get_11rb$('continuationContents')) != null ? get_jsonObject(tmp$) : null) != null ? tmp$_0.get_11rb$('playlistVideoListContinuation') : null) != null ? get_jsonObject(tmp$_1) : null;
            } else {
              tmp$_7 = (tmp$_6 = (tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = response.get_11rb$('onResponseReceivedActions')) != null ? get_jsonArray(tmp$_2) : null) != null ? tmp$_3.get_za3lpa$(0) : null) != null ? get_jsonObject(tmp$_4) : null) != null ? tmp$_5.get_11rb$('appendContinuationItemsAction') : null) != null ? get_jsonObject(tmp$_6) : null;
            }

            content = tmp$_7;
            if (content != null) {
              this.state_0 = 2;
              this.result_0 = this.$this.populatePlaylist_0(content, this.local$videos, this.local$clientVersion, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.exceptionState_0 = 6;
            this.state_0 = 5;
            continue;
          case 4:
            this.exceptionState_0 = 6;
            var e = this.exception_0;
            if (Kotlin.isType(e, YoutubeException)) {
              throw e;
            } else if (Kotlin.isType(e, Exception)) {
              throw new YoutubeException$BadPageException('Could not parse playlist continuation json');
            } else
              throw e;
          case 5:
            return;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DefaultParser.prototype.loadPlaylistContinuation_0 = function (continuation_1, ctp_0, videos_0, clientVersion_0, continuation_2, suspended) {
    var instance = new Coroutine$loadPlaylistContinuation_0(this, continuation_1, ctp_0, videos_0, clientVersion_0, continuation_2);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultParser.prototype.getClientVersionFromContext_0 = function (context) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    tmp$_0 = (tmp$ = context != null ? context.get_11rb$('serviceTrackingParams') : null) != null ? get_jsonArray(tmp$) : null;
    if (tmp$_0 == null) {
      return '2.20200720.00.02';
    }var trackingParams = tmp$_0;
    tmp$_1 = trackingParams.size;
    for (var ti = 0; ti < tmp$_1; ti++) {
      var params = (tmp$_2 = get_jsonObject(trackingParams.get_za3lpa$(ti)).get_11rb$('params')) != null ? get_jsonArray(tmp$_2) : null;
      tmp$_4 = (tmp$_3 = params != null ? params.size : null) != null ? tmp$_3 : 1;
      for (var pi = 0; pi < tmp$_4; pi++) {
        if (equals((tmp$_6 = (tmp$_5 = params != null ? params.get_za3lpa$(pi) : null) != null ? get_jsonObject(tmp$_5) : null) != null ? getString(tmp$_6, 'key') : null, 'cver')) {
          return (tmp$_9 = (tmp$_8 = (tmp$_7 = params != null ? params.get_za3lpa$(pi) : null) != null ? get_jsonObject(tmp$_7) : null) != null ? getString(tmp$_8, 'value') : null) != null ? tmp$_9 : '2.20200720.00.02';
        }}
    }
    return '2.20200720.00.02';
  };
  function DefaultParser$Companion() {
    DefaultParser$Companion_instance = this;
    this.assetsJsRegex_0 = Regex_init('"assets":.+?"js":\\s*"([^"]+)"');
    this.subtitleLangCodeRegex_0 = Regex_init('lang_code="(.{2,3})"');
    this.embJsRegex_0 = Regex_init('"jsUrl":\\s*"([^"]+)"');
    this.textNumberRegex_0 = Regex_init("[0-9]+[0-9, ']*");
  }
  DefaultParser$Companion.prototype.extractNumber_0 = function (text) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var matcher = this.textNumberRegex_0.find_905azu$(text);
    return (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = matcher != null ? matcher.groupValues : null) != null ? tmp$.get_za3lpa$(0) : null) != null ? Regex_init("[, ']").replace_x2uqeu$(tmp$_0, '') : null) != null ? toInt(tmp$_1) : null) != null ? tmp$_2 : 0;
  };
  DefaultParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DefaultParser$Companion_instance = null;
  function DefaultParser$Companion_getInstance() {
    if (DefaultParser$Companion_instance === null) {
      new DefaultParser$Companion();
    }return DefaultParser$Companion_instance;
  }
  DefaultParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultParser',
    interfaces: [Parser]
  };
  function Parser() {
  }
  Parser.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Parser',
    interfaces: []
  };
  function getString($receiver, key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = $receiver.get_11rb$(key)) != null ? get_jsonPrimitive(tmp$) : null) != null ? tmp$_0.content : null;
  }
  function getLong($receiver, key) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = $receiver.get_11rb$(key)) != null ? get_jsonPrimitive(tmp$) : null) != null ? tmp$_0.content : null) != null ? toLongOrNull(tmp$_1) : null) != null ? tmp$_2 : L0;
  }
  function getInteger($receiver, key) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = $receiver.get_11rb$(key)) != null ? get_jsonPrimitive(tmp$) : null) != null ? tmp$_0.content : null) != null ? toIntOrNull(tmp$_1) : null) != null ? tmp$_2 : 0;
  }
  function getBoolean($receiver, key) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = $receiver.get_11rb$(key)) != null ? get_jsonPrimitive(tmp$) : null) != null ? tmp$_0.content : null) != null ? toBoolean(tmp$_1) : null;
  }
  function getFloat($receiver, key) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = $receiver.get_11rb$(key)) != null ? get_jsonPrimitive(tmp$) : null) != null ? tmp$_0.content : null) != null ? toDoubleOrNull(tmp$_1) : null;
  }
  function getDouble($receiver, key) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = $receiver.get_11rb$(key)) != null ? get_jsonPrimitive(tmp$) : null) != null ? tmp$_0.content : null) != null ? toDoubleOrNull(tmp$_1) : null;
  }
  function getJsonObject($receiver, key) {
    var tmp$;
    return (tmp$ = $receiver != null ? $receiver.get_11rb$(key) : null) != null ? get_jsonObject(tmp$) : null;
  }
  function getJsonObject_0($receiver, index) {
    var tmp$;
    return (tmp$ = $receiver != null ? $receiver.get_za3lpa$(index) : null) != null ? get_jsonObject(tmp$) : null;
  }
  function getJsonArray($receiver, key) {
    var tmp$;
    return (tmp$ = $receiver != null ? $receiver.get_11rb$(key) : null) != null ? get_jsonArray(tmp$) : null;
  }
  function get$lambda_1($receiver) {
    return Unit;
  }
  var ILLEGAL_FILENAME_CHARACTERS;
  function removeIllegalChars(value) {
    var tmp$, tmp$_0;
    var fileName = value;
    tmp$ = ILLEGAL_FILENAME_CHARACTERS;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var c = unboxChar(tmp$[tmp$_0]);
      fileName = replace_0(fileName, c, 95);
    }
    return fileName;
  }
  function downloadFile$lambda($receiver) {
    return Unit;
  }
  function downloadFile$lambda_0($receiver) {
    return Unit;
  }
  function Coroutine$downloadFile$lambda(closure$client_0, closure$url_0, closure$httpBuilder_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 6;
    this.local$closure$client = closure$client_0;
    this.local$closure$url = closure$url_0;
    this.local$closure$httpBuilder = closure$httpBuilder_0;
    this.local$response = void 0;
    this.local$response_0 = void 0;
    this.local$data = void 0;
    this.local$offset = void 0;
    this.local$currentRead = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$downloadFile$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$downloadFile$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$downloadFile$lambda.prototype.constructor = Coroutine$downloadFile$lambda;
  Coroutine$downloadFile$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.local$closure$client;
            var urlString = this.local$closure$url;
            var block = this.local$closure$httpBuilder;
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, urlString);
            block($receiver_1);
            var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(HttpStatement_init);
            if (equals_0(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = Kotlin.isType(tmp$_5 = $this_0, HttpStatement_init) ? tmp$_5 : throwCCE();
              this.state_0 = 9;
              continue;
            } else {
              if (equals_0(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 7;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpStatement_init), createKType(getKClass(HttpStatement_init), [], false));
              } catch (_) {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpStatement_init), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_qi9ur9$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, HttpStatement_init) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 8;
            continue;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, HttpStatement_init) ? tmp$_6 : throwCCE();
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.result_0;
            this.state_0 = 10;
            this.result_0 = this.result_0.execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.local$response_0 = this.result_0;
            this.local$data = new Int8Array(ensureNotNull(contentLength(this.local$response_0)).toInt());
            this.local$offset = 0;
            this.state_0 = 11;
            continue;
          case 11:
            this.state_0 = 12;
            this.result_0 = this.local$response_0.content.readAvailable_mj6st8$(this.local$data, this.local$offset, this.local$data.length, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.local$currentRead = this.result_0;
            this.local$offset = this.local$offset + this.local$currentRead | 0;
            var progress = roundToInt(this.local$offset * 100.0 / this.local$data.length);
            this.state_0 = 13;
            this.result_0 = this.local$$receiver.emit_11rb$(new NetworkResult$Progress(progress), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            if (this.local$currentRead <= 0) {
              this.state_0 = 14;
              continue;
            }
            this.state_0 = 11;
            continue;
          case 14:
            if (isSuccess(this.local$response_0.status)) {
              this.state_0 = 16;
              this.result_0 = this.local$$receiver.emit_11rb$(new NetworkResult$Success(this.local$data), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 15;
              this.result_0 = this.local$$receiver.emit_11rb$(new NetworkResult$Error(this.local$response_0.status.value.toString() + ' : ' + this.local$response_0.status.description + ' : ' + this.local$closure$url, this.local$response_0), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 15:
            this.state_0 = 17;
            continue;
          case 16:
            this.state_0 = 17;
            continue;
          case 17:
            return this.local$closure$client.close(), Unit;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function downloadFile$lambda_1(closure$client_0, closure$url_0, closure$httpBuilder_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$downloadFile$lambda(closure$client_0, closure$url_0, closure$httpBuilder_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function downloadFile(url, client, httpBuilder, continuation) {
    if (client === void 0)
      client = HttpClient(downloadFile$lambda);
    if (httpBuilder === void 0)
      httpBuilder = downloadFile$lambda_0;
    return flow(downloadFile$lambda_1(client, url, httpBuilder));
  }
  function downloadByteArray$lambda($receiver) {
    return Unit;
  }
  function downloadByteArray$lambda_0($receiver) {
    return Unit;
  }
  function Coroutine$downloadByteArray(url_0, client_0, httpBuilder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 11;
    this.local$tmp$_0 = void 0;
    this.local$response = void 0;
    this.local$url = url_0;
    this.local$client = client_0;
    this.local$httpBuilder = httpBuilder_0;
  }
  Coroutine$downloadByteArray.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$downloadByteArray.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$downloadByteArray.prototype.constructor = Coroutine$downloadByteArray;
  Coroutine$downloadByteArray.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$client === void 0)
              this.local$client = HttpClient(downloadByteArray$lambda);
            if (this.local$httpBuilder === void 0)
              this.local$httpBuilder = downloadByteArray$lambda_0;
            var tmp$;
            this.exceptionState_0 = 9;
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, this.local$url);
            this.local$httpBuilder($receiver_1);
            var $this_0 = new HttpStatement_init($receiver_1, this.local$client);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = PrimitiveClasses$byteArrayClass;
            if (equals_0(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = Kotlin.isByteArray(tmp$_5 = $this_0) ? tmp$_5 : throwCCE();
              this.state_0 = 8;
              continue;
            } else {
              if (equals_0(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 6;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, PrimitiveClasses$byteArrayClass, createKType(PrimitiveClasses$byteArrayClass, [], false));
              } catch (_) {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, PrimitiveClasses$byteArrayClass, null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_qi9ur9$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isByteArray(tmp$_7 = this.result_0) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 9;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 7;
            continue;
          case 4:
            this.finallyPath_0 = [9];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            this.result_0 = Kotlin.isByteArray(tmp$_6 = this.result_0) ? tmp$_6 : throwCCE();
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.result_0;
            this.local$tmp$_0 = this.result_0;
            this.exceptionState_0 = 11;
            this.state_0 = 10;
            continue;
          case 9:
            this.exceptionState_0 = 11;
            var e = this.exception_0;
            if (Kotlin.isType(e, ClientRequestException)) {
              throw new YoutubeException$BadPageException((tmp$ = e.message) != null ? tmp$ : 'Could Not Fetch ' + this.local$url);
            } else if (Kotlin.isType(e, IOException)) {
              throw new YoutubeException$NetworkException('Could Not Fetch ' + this.local$url);
            } else
              throw e;
          case 10:
            var response = this.local$tmp$_0;
            this.local$client.close();
            return response;
          case 11:
            throw this.exception_0;
          default:this.state_0 = 11;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 11) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function downloadByteArray(url_0, client_0, httpBuilder_0, continuation_0, suspended) {
    var instance = new Coroutine$downloadByteArray(url_0, client_0, httpBuilder_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function runBlocking(block) {
    return promise(coroutines.GlobalScope, void 0, void 0, block);
  }
  var activePlatform;
  Object.defineProperty(TargetPlatforms, 'Js', {
    get: TargetPlatforms$Js_getInstance
  });
  Object.defineProperty(TargetPlatforms, 'Jvm', {
    get: TargetPlatforms$Jvm_getInstance
  });
  Object.defineProperty(TargetPlatforms, 'Native', {
    get: TargetPlatforms$Native_getInstance
  });
  var package$io = _.io || (_.io = {});
  var package$github = package$io.github || (package$io.github = {});
  var package$shabinder = package$github.shabinder || (package$github.shabinder = {});
  package$shabinder.TargetPlatforms = TargetPlatforms;
  package$shabinder.YoutubeDownloader = YoutubeDownloader;
  Object.defineProperty(CachedCipherFactory, 'Companion', {
    get: CachedCipherFactory$Companion_getInstance
  });
  var package$cipher = package$shabinder.cipher || (package$shabinder.cipher = {});
  package$cipher.CachedCipherFactory = CachedCipherFactory;
  package$cipher.Cipher = Cipher;
  package$cipher.CipherFactory = CipherFactory;
  package$cipher.CipherFunction = CipherFunction;
  package$cipher.DefaultCipher = DefaultCipher;
  package$cipher.JsFunction = JsFunction;
  package$cipher.ReverseFunction = ReverseFunction;
  package$cipher.SpliceFunction = SpliceFunction;
  package$cipher.SwapFunctionV1 = SwapFunctionV1;
  package$cipher.SwapFunctionV2 = SwapFunctionV2;
  YoutubeException.VideoUnavailableException = YoutubeException$VideoUnavailableException;
  YoutubeException.BadPageException = YoutubeException$BadPageException;
  YoutubeException.UnknownFormatException = YoutubeException$UnknownFormatException;
  YoutubeException.CipherException = YoutubeException$CipherException;
  YoutubeException.NetworkException = YoutubeException$NetworkException;
  YoutubeException.SubtitlesException = YoutubeException$SubtitlesException;
  YoutubeException$DownloadUnavailableException.LiveVideoException = YoutubeException$DownloadUnavailableException$LiveVideoException;
  YoutubeException$DownloadUnavailableException.RestrictedVideoException = YoutubeException$DownloadUnavailableException$RestrictedVideoException;
  YoutubeException.DownloadUnavailableException = YoutubeException$DownloadUnavailableException;
  var package$exceptions = package$shabinder.exceptions || (package$shabinder.exceptions = {});
  package$exceptions.YoutubeException = YoutubeException;
  $$importsForInline$$['ktor-ktor-client-core-js-legacy'] = $module$ktor_ktor_client_core_js_legacy;
  Object.defineProperty(DefaultExtractor, 'Companion', {
    get: DefaultExtractor$Companion_getInstance
  });
  var package$extractor = package$shabinder.extractor || (package$shabinder.extractor = {});
  package$extractor.DefaultExtractor = DefaultExtractor;
  package$extractor.Extractor = Extractor;
  var package$models = package$shabinder.models || (package$shabinder.models = {});
  package$models.AbstractVideoDetails = AbstractVideoDetails;
  Object.defineProperty(Extension, 'MPEG4', {
    get: Extension$MPEG4_getInstance
  });
  Object.defineProperty(Extension, 'WEBM', {
    get: Extension$WEBM_getInstance
  });
  Object.defineProperty(Extension, '_3GP', {
    get: Extension$_3GP_getInstance
  });
  Object.defineProperty(Extension, 'FLV', {
    get: Extension$FLV_getInstance
  });
  Object.defineProperty(Extension, 'M4A', {
    get: Extension$M4A_getInstance
  });
  Object.defineProperty(Extension, 'WEBA', {
    get: Extension$WEBA_getInstance
  });
  Object.defineProperty(Extension, 'JSON3', {
    get: Extension$JSON3_getInstance
  });
  Object.defineProperty(Extension, 'SUBRIP', {
    get: Extension$SUBRIP_getInstance
  });
  Object.defineProperty(Extension, 'TRANSCRIPT_V1', {
    get: Extension$TRANSCRIPT_V1_getInstance
  });
  Object.defineProperty(Extension, 'TRANSCRIPT_V2', {
    get: Extension$TRANSCRIPT_V2_getInstance
  });
  Object.defineProperty(Extension, 'TRANSCRIPT_V3', {
    get: Extension$TRANSCRIPT_V3_getInstance
  });
  Object.defineProperty(Extension, 'TTML', {
    get: Extension$TTML_getInstance
  });
  Object.defineProperty(Extension, 'WEBVTT', {
    get: Extension$WEBVTT_getInstance
  });
  Object.defineProperty(Extension, 'UNKNOWN', {
    get: Extension$UNKNOWN_getInstance
  });
  package$models.Extension = Extension;
  Object.defineProperty(Itag, 'unknown', {
    get: Itag$unknown_getInstance
  });
  Object.defineProperty(Itag, 'i5', {
    get: Itag$i5_getInstance
  });
  Object.defineProperty(Itag, 'i6', {
    get: Itag$i6_getInstance
  });
  Object.defineProperty(Itag, 'i13', {
    get: Itag$i13_getInstance
  });
  Object.defineProperty(Itag, 'i17', {
    get: Itag$i17_getInstance
  });
  Object.defineProperty(Itag, 'i18', {
    get: Itag$i18_getInstance
  });
  Object.defineProperty(Itag, 'i22', {
    get: Itag$i22_getInstance
  });
  Object.defineProperty(Itag, 'i34', {
    get: Itag$i34_getInstance
  });
  Object.defineProperty(Itag, 'i35', {
    get: Itag$i35_getInstance
  });
  Object.defineProperty(Itag, 'i36', {
    get: Itag$i36_getInstance
  });
  Object.defineProperty(Itag, 'i37', {
    get: Itag$i37_getInstance
  });
  Object.defineProperty(Itag, 'i38', {
    get: Itag$i38_getInstance
  });
  Object.defineProperty(Itag, 'i43', {
    get: Itag$i43_getInstance
  });
  Object.defineProperty(Itag, 'i44', {
    get: Itag$i44_getInstance
  });
  Object.defineProperty(Itag, 'i45', {
    get: Itag$i45_getInstance
  });
  Object.defineProperty(Itag, 'i46', {
    get: Itag$i46_getInstance
  });
  Object.defineProperty(Itag, 'i82', {
    get: Itag$i82_getInstance
  });
  Object.defineProperty(Itag, 'i83', {
    get: Itag$i83_getInstance
  });
  Object.defineProperty(Itag, 'i84', {
    get: Itag$i84_getInstance
  });
  Object.defineProperty(Itag, 'i85', {
    get: Itag$i85_getInstance
  });
  Object.defineProperty(Itag, 'i100', {
    get: Itag$i100_getInstance
  });
  Object.defineProperty(Itag, 'i101', {
    get: Itag$i101_getInstance
  });
  Object.defineProperty(Itag, 'i102', {
    get: Itag$i102_getInstance
  });
  Object.defineProperty(Itag, 'i91', {
    get: Itag$i91_getInstance
  });
  Object.defineProperty(Itag, 'i92', {
    get: Itag$i92_getInstance
  });
  Object.defineProperty(Itag, 'i93', {
    get: Itag$i93_getInstance
  });
  Object.defineProperty(Itag, 'i94', {
    get: Itag$i94_getInstance
  });
  Object.defineProperty(Itag, 'i95', {
    get: Itag$i95_getInstance
  });
  Object.defineProperty(Itag, 'i96', {
    get: Itag$i96_getInstance
  });
  Object.defineProperty(Itag, 'i132', {
    get: Itag$i132_getInstance
  });
  Object.defineProperty(Itag, 'i151', {
    get: Itag$i151_getInstance
  });
  Object.defineProperty(Itag, 'i133', {
    get: Itag$i133_getInstance
  });
  Object.defineProperty(Itag, 'i134', {
    get: Itag$i134_getInstance
  });
  Object.defineProperty(Itag, 'i135', {
    get: Itag$i135_getInstance
  });
  Object.defineProperty(Itag, 'i136', {
    get: Itag$i136_getInstance
  });
  Object.defineProperty(Itag, 'i137', {
    get: Itag$i137_getInstance
  });
  Object.defineProperty(Itag, 'i138', {
    get: Itag$i138_getInstance
  });
  Object.defineProperty(Itag, 'i160', {
    get: Itag$i160_getInstance
  });
  Object.defineProperty(Itag, 'i212', {
    get: Itag$i212_getInstance
  });
  Object.defineProperty(Itag, 'i264', {
    get: Itag$i264_getInstance
  });
  Object.defineProperty(Itag, 'i266', {
    get: Itag$i266_getInstance
  });
  Object.defineProperty(Itag, 'i298', {
    get: Itag$i298_getInstance
  });
  Object.defineProperty(Itag, 'i299', {
    get: Itag$i299_getInstance
  });
  Object.defineProperty(Itag, 'i139', {
    get: Itag$i139_getInstance
  });
  Object.defineProperty(Itag, 'i140', {
    get: Itag$i140_getInstance
  });
  Object.defineProperty(Itag, 'i141', {
    get: Itag$i141_getInstance
  });
  Object.defineProperty(Itag, 'i256', {
    get: Itag$i256_getInstance
  });
  Object.defineProperty(Itag, 'i325', {
    get: Itag$i325_getInstance
  });
  Object.defineProperty(Itag, 'i328', {
    get: Itag$i328_getInstance
  });
  Object.defineProperty(Itag, 'i167', {
    get: Itag$i167_getInstance
  });
  Object.defineProperty(Itag, 'i168', {
    get: Itag$i168_getInstance
  });
  Object.defineProperty(Itag, 'i169', {
    get: Itag$i169_getInstance
  });
  Object.defineProperty(Itag, 'i170', {
    get: Itag$i170_getInstance
  });
  Object.defineProperty(Itag, 'i218', {
    get: Itag$i218_getInstance
  });
  Object.defineProperty(Itag, 'i219', {
    get: Itag$i219_getInstance
  });
  Object.defineProperty(Itag, 'i242', {
    get: Itag$i242_getInstance
  });
  Object.defineProperty(Itag, 'i243', {
    get: Itag$i243_getInstance
  });
  Object.defineProperty(Itag, 'i244', {
    get: Itag$i244_getInstance
  });
  Object.defineProperty(Itag, 'i245', {
    get: Itag$i245_getInstance
  });
  Object.defineProperty(Itag, 'i246', {
    get: Itag$i246_getInstance
  });
  Object.defineProperty(Itag, 'i247', {
    get: Itag$i247_getInstance
  });
  Object.defineProperty(Itag, 'i248', {
    get: Itag$i248_getInstance
  });
  Object.defineProperty(Itag, 'i271', {
    get: Itag$i271_getInstance
  });
  Object.defineProperty(Itag, 'i272', {
    get: Itag$i272_getInstance
  });
  Object.defineProperty(Itag, 'i278', {
    get: Itag$i278_getInstance
  });
  Object.defineProperty(Itag, 'i302', {
    get: Itag$i302_getInstance
  });
  Object.defineProperty(Itag, 'i303', {
    get: Itag$i303_getInstance
  });
  Object.defineProperty(Itag, 'i308', {
    get: Itag$i308_getInstance
  });
  Object.defineProperty(Itag, 'i313', {
    get: Itag$i313_getInstance
  });
  Object.defineProperty(Itag, 'i315', {
    get: Itag$i315_getInstance
  });
  Object.defineProperty(Itag, 'i171', {
    get: Itag$i171_getInstance
  });
  Object.defineProperty(Itag, 'i172', {
    get: Itag$i172_getInstance
  });
  Object.defineProperty(Itag, 'i249', {
    get: Itag$i249_getInstance
  });
  Object.defineProperty(Itag, 'i250', {
    get: Itag$i250_getInstance
  });
  Object.defineProperty(Itag, 'i251', {
    get: Itag$i251_getInstance
  });
  Object.defineProperty(Itag, 'i330', {
    get: Itag$i330_getInstance
  });
  Object.defineProperty(Itag, 'i331', {
    get: Itag$i331_getInstance
  });
  Object.defineProperty(Itag, 'i332', {
    get: Itag$i332_getInstance
  });
  Object.defineProperty(Itag, 'i333', {
    get: Itag$i333_getInstance
  });
  Object.defineProperty(Itag, 'i334', {
    get: Itag$i334_getInstance
  });
  Object.defineProperty(Itag, 'i335', {
    get: Itag$i335_getInstance
  });
  Object.defineProperty(Itag, 'i336', {
    get: Itag$i336_getInstance
  });
  Object.defineProperty(Itag, 'i337', {
    get: Itag$i337_getInstance
  });
  Object.defineProperty(Itag, 'i394', {
    get: Itag$i394_getInstance
  });
  Object.defineProperty(Itag, 'i395', {
    get: Itag$i395_getInstance
  });
  Object.defineProperty(Itag, 'i396', {
    get: Itag$i396_getInstance
  });
  Object.defineProperty(Itag, 'i397', {
    get: Itag$i397_getInstance
  });
  Object.defineProperty(Itag, 'i398', {
    get: Itag$i398_getInstance
  });
  Object.defineProperty(Itag, 'i399', {
    get: Itag$i399_getInstance
  });
  Object.defineProperty(Itag, 'i400', {
    get: Itag$i400_getInstance
  });
  Object.defineProperty(Itag, 'i401', {
    get: Itag$i401_getInstance
  });
  Object.defineProperty(Itag, 'i402', {
    get: Itag$i402_getInstance
  });
  package$models.Itag = Itag;
  Object.defineProperty(Methods, 'GET', {
    get: Methods$GET_getInstance
  });
  Object.defineProperty(Methods, 'POST', {
    get: Methods$POST_getInstance
  });
  package$models.Methods = Methods;
  NetworkResult.Progress = NetworkResult$Progress;
  NetworkResult.Error = NetworkResult$Error;
  NetworkResult.Success = NetworkResult$Success;
  package$models.NetworkResult = NetworkResult;
  package$models.VideoDetails_init_nwszhn$ = VideoDetails_init;
  package$models.VideoDetails = VideoDetails;
  Object.defineProperty(YoutubeVideo, 'Companion', {
    get: YoutubeVideo$Companion_getInstance
  });
  package$models.YoutubeVideo = YoutubeVideo;
  var package$formats = package$models.formats || (package$models.formats = {});
  package$formats.AudioFormat = AudioFormat;
  package$formats.AudioVideoFormat = AudioVideoFormat;
  Object.defineProperty(Format, 'Companion', {
    get: Format$Companion_getInstance
  });
  package$formats.Format = Format;
  package$formats.VideoFormat = VideoFormat;
  var package$playlist = package$models.playlist || (package$models.playlist = {});
  package$playlist.PlaylistDetails = PlaylistDetails;
  package$playlist.PlaylistVideoDetails_init_3q8efs$ = PlaylistVideoDetails_init;
  package$playlist.PlaylistVideoDetails = PlaylistVideoDetails;
  package$playlist.YoutubePlaylist = YoutubePlaylist;
  Object.defineProperty(AudioQuality, 'unknown', {
    get: AudioQuality$unknown_getInstance
  });
  Object.defineProperty(AudioQuality, 'high', {
    get: AudioQuality$high_getInstance
  });
  Object.defineProperty(AudioQuality, 'medium', {
    get: AudioQuality$medium_getInstance
  });
  Object.defineProperty(AudioQuality, 'low', {
    get: AudioQuality$low_getInstance
  });
  Object.defineProperty(AudioQuality, 'noAudio', {
    get: AudioQuality$noAudio_getInstance
  });
  var package$quality = package$models.quality || (package$models.quality = {});
  package$quality.AudioQuality = AudioQuality;
  Object.defineProperty(VideoQuality, 'unknown', {
    get: VideoQuality$unknown_getInstance
  });
  Object.defineProperty(VideoQuality, 'highres', {
    get: VideoQuality$highres_getInstance
  });
  Object.defineProperty(VideoQuality, 'hd2880p', {
    get: VideoQuality$hd2880p_getInstance
  });
  Object.defineProperty(VideoQuality, 'hd2160', {
    get: VideoQuality$hd2160_getInstance
  });
  Object.defineProperty(VideoQuality, 'hd1440', {
    get: VideoQuality$hd1440_getInstance
  });
  Object.defineProperty(VideoQuality, 'hd1080', {
    get: VideoQuality$hd1080_getInstance
  });
  Object.defineProperty(VideoQuality, 'hd720', {
    get: VideoQuality$hd720_getInstance
  });
  Object.defineProperty(VideoQuality, 'large', {
    get: VideoQuality$large_getInstance
  });
  Object.defineProperty(VideoQuality, 'medium', {
    get: VideoQuality$medium_getInstance
  });
  Object.defineProperty(VideoQuality, 'small', {
    get: VideoQuality$small_getInstance
  });
  Object.defineProperty(VideoQuality, 'tiny', {
    get: VideoQuality$tiny_getInstance
  });
  Object.defineProperty(VideoQuality, 'noVideo', {
    get: VideoQuality$noVideo_getInstance
  });
  package$quality.VideoQuality = VideoQuality;
  var package$subtitles = package$models.subtitles || (package$models.subtitles = {});
  package$subtitles.Subtitles = Subtitles;
  Object.defineProperty(SubtitlesInfo, 'Companion', {
    get: SubtitlesInfo$Companion_getInstance
  });
  package$subtitles.SubtitlesInfo = SubtitlesInfo;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-json-js-legacy'] = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy;
  Object.defineProperty(DefaultParser, 'Companion', {
    get: DefaultParser$Companion_getInstance
  });
  var package$parser = package$shabinder.parser || (package$shabinder.parser = {});
  package$parser.DefaultParser = DefaultParser;
  package$parser.Parser = Parser;
  var package$utils = package$shabinder.utils || (package$shabinder.utils = {});
  package$utils.getString_xpx153$ = getString;
  package$utils.getLong_xpx153$ = getLong;
  package$utils.getInteger_xpx153$ = getInteger;
  package$utils.getBoolean_xpx153$ = getBoolean;
  package$utils.getFloat_xpx153$ = getFloat;
  package$utils.getDouble_xpx153$ = getDouble;
  package$utils.getJsonObject_h8eu3a$ = getJsonObject;
  package$utils.getJsonObject_klriwe$ = getJsonObject_0;
  package$utils.getJsonArray_h8eu3a$ = getJsonArray;
  package$utils.removeIllegalChars_61zpoe$ = removeIllegalChars;
  package$utils.downloadFile_vltsgj$ = downloadFile;
  package$utils.downloadByteArray_vltsgj$ = downloadByteArray;
  package$shabinder.runBlocking_3q5nlj$ = runBlocking;
  Object.defineProperty(package$shabinder, 'activePlatform', {
    get: function () {
      return activePlatform;
    }
  });
  DefaultExtractor.prototype.loadUrl_ughrhi$ = Extractor.prototype.loadUrl_ughrhi$;
  ILLEGAL_FILENAME_CHARACTERS = Kotlin.charArrayOf(47, 10, 13, 9, 0, 12, 96, 63, 42, 92, 60, 62, 124, 34, 58);
  activePlatform = TargetPlatforms$Js_getInstance();
  Kotlin.defineModule('youtube-api-dl-js-legacy', _);
  return _;
}));

//# sourceMappingURL=youtube-api-dl-js-legacy.js.map
