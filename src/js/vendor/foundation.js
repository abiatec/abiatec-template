/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

  module.exports = jQuery;

  /***/ }),
  /* 1 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rtl; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetYoDigits; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transitionend; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  
  
  
  
  // Core Foundation Utilities, utilized in a number of places.
  
  /**
   * Returns a boolean for RTL support
   */
  function rtl() {
    return __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html').attr('dir') === 'rtl';
  }
  
  /**
   * returns a random base-36 uid with namespacing
   * @function
   * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
   * @param {String} namespace - name of plugin to be incorporated in uid, optional.
   * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
   * @returns {String} - unique id
   */
  function GetYoDigits(length, namespace) {
    length = length || 6;
    return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? '-' + namespace : '');
  }
  
  function transitionend($elem) {
    var transitions = {
      'transition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'otransitionend'
    };
    var elem = document.createElement('div'),
        end;
  
    for (var t in transitions) {
      if (typeof elem.style[t] !== 'undefined') {
        end = transitions[t];
      }
    }
    if (end) {
      return end;
    } else {
      end = setTimeout(function () {
        $elem.triggerHandler('transitionend', [$elem]);
      }, 1);
      return 'transitionend';
    }
  }
  
  
  
  /***/ }),
  /* 2 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plugin; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
  
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  
  
  
  // Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
  // {function} _setup (replaces previous constructor),
  // {function} _destroy (replaces previous destroy)
  
  var Plugin = function () {
    function Plugin(element, options) {
      _classCallCheck(this, Plugin);
  
      this._setup(element, options);
      var pluginName = getPluginName(this);
      this.uuid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["a" /* GetYoDigits */])(6, pluginName);
  
      if (!this.$element.attr('data-' + pluginName)) {
        this.$element.attr('data-' + pluginName, this.uuid);
      }
      if (!this.$element.data('zfPlugin')) {
        this.$element.data('zfPlugin', this);
      }
      /**
       * Fires when the plugin has initialized.
       * @event Plugin#init
       */
      this.$element.trigger('init.zf.' + pluginName);
    }
  
    _createClass(Plugin, [{
      key: 'destroy',
      value: function destroy() {
        this._destroy();
        var pluginName = getPluginName(this);
        this.$element.removeAttr('data-' + pluginName).removeData('zfPlugin')
        /**
         * Fires when the plugin has been destroyed.
         * @event Plugin#destroyed
         */
        .trigger('destroyed.zf.' + pluginName);
        for (var prop in this) {
          this[prop] = null; //clean up script to prep for garbage collection.
        }
      }
    }]);
  
    return Plugin;
  }();
  
  // Convert PascalCase to kebab-case
  // Thank you: http://stackoverflow.com/a/8955580
  
  
  function hyphenate(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  
  function getPluginName(obj) {
    if (typeof obj.constructor.name !== 'undefined') {
      return hyphenate(obj.constructor.name);
    } else {
      return hyphenate(obj.className);
    }
  }
  
  
  
  /***/ }),
  /* 3 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaQuery; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  
  
  
  
  // Default set of media queries
  var defaultQueries = {
    'default': 'only screen',
    landscape: 'only screen and (orientation: landscape)',
    portrait: 'only screen and (orientation: portrait)',
    retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
  };
  
  // matchMedia() polyfill - Test a CSS media type/query in JS.
  // Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
  var matchMedia = window.matchMedia || function () {
    'use strict';
  
    // For browsers that support matchMedium api such as IE 9 and webkit
  
    var styleMedia = window.styleMedia || window.media;
  
    // For those that don't support matchMedium
    if (!styleMedia) {
      var style = document.createElement('style'),
          script = document.getElementsByTagName('script')[0],
          info = null;
  
      style.type = 'text/css';
      style.id = 'matchmediajs-test';
  
      script && script.parentNode && script.parentNode.insertBefore(style, script);
  
      // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
      info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;
  
      styleMedia = {
        matchMedium: function (media) {
          var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';
  
          // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
          if (style.styleSheet) {
            style.styleSheet.cssText = text;
          } else {
            style.textContent = text;
          }
  
          // Test if media query is true or false
          return info.width === '1px';
        }
      };
    }
  
    return function (media) {
      return {
        matches: styleMedia.matchMedium(media || 'all'),
        media: media || 'all'
      };
    };
  }();
  
  var MediaQuery = {
    queries: [],
  
    current: '',
  
    /**
     * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
     * @function
     * @private
     */
    _init: function () {
      var self = this;
      var $meta = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('meta.foundation-mq');
      if (!$meta.length) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<meta class="foundation-mq">').appendTo(document.head);
      }
  
      var extractedStyles = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.foundation-mq').css('font-family');
      var namedQueries;
  
      namedQueries = parseStyleToObject(extractedStyles);
  
      for (var key in namedQueries) {
        if (namedQueries.hasOwnProperty(key)) {
          self.queries.push({
            name: key,
            value: 'only screen and (min-width: ' + namedQueries[key] + ')'
          });
        }
      }
  
      this.current = this._getCurrentSize();
  
      this._watcher();
    },
  
  
    /**
     * Checks if the screen is at least as wide as a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to check.
     * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
     */
    atLeast: function (size) {
      var query = this.get(size);
  
      if (query) {
        return matchMedia(query).matches;
      }
  
      return false;
    },
  
  
    /**
     * Checks if the screen matches to a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
     * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
     */
    is: function (size) {
      size = size.trim().split(' ');
      if (size.length > 1 && size[1] === 'only') {
        if (size[0] === this._getCurrentSize()) return true;
      } else {
        return this.atLeast(size[0]);
      }
      return false;
    },
  
  
    /**
     * Gets the media query of a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to get.
     * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
     */
    get: function (size) {
      for (var i in this.queries) {
        if (this.queries.hasOwnProperty(i)) {
          var query = this.queries[i];
          if (size === query.name) return query.value;
        }
      }
  
      return null;
    },
  
  
    /**
     * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
     * @function
     * @private
     * @returns {String} Name of the current breakpoint.
     */
    _getCurrentSize: function () {
      var matched;
  
      for (var i = 0; i < this.queries.length; i++) {
        var query = this.queries[i];
  
        if (matchMedia(query.value).matches) {
          matched = query;
        }
      }
  
      if (typeof matched === 'object') {
        return matched.name;
      } else {
        return matched;
      }
    },
  
  
    /**
     * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
     * @function
     * @private
     */
    _watcher: function () {
      var _this = this;
  
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery', function () {
        var newSize = _this._getCurrentSize(),
            currentSize = _this.current;
  
        if (newSize !== currentSize) {
          // Change the current media query
          _this.current = newSize;
  
          // Broadcast the media query change on the window
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
        }
      });
    }
  };
  
  // Thank you: https://github.com/sindresorhus/query-string
  function parseStyleToObject(str) {
    var styleObject = {};
  
    if (typeof str !== 'string') {
      return styleObject;
    }
  
    str = str.trim().slice(1, -1); // browsers re-quote string style values
  
    if (!str) {
      return styleObject;
    }
  
    styleObject = str.split('&').reduce(function (ret, param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts[0];
      var val = parts[1];
      key = decodeURIComponent(key);
  
      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeURIComponent(val);
  
      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }
      return ret;
    }, {});
  
    return styleObject;
  }
  
  
  
  /***/ }),
  /* 4 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
  /*******************************************
   *                                         *
   * This util was created by Marius Olbertz *
   * Please thank Marius on GitHub /owlbertz *
   * or the web http://www.mariusolbertz.de/ *
   *                                         *
   ******************************************/
  
  
  
  
  
  
  var keyCodes = {
    9: 'TAB',
    13: 'ENTER',
    27: 'ESCAPE',
    32: 'SPACE',
    35: 'END',
    36: 'HOME',
    37: 'ARROW_LEFT',
    38: 'ARROW_UP',
    39: 'ARROW_RIGHT',
    40: 'ARROW_DOWN'
  };
  
  var commands = {};
  
  // Functions pulled out to be referenceable from internals
  function findFocusable($element) {
    if (!$element) {
      return false;
    }
    return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
      if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is(':visible') || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('tabindex') < 0) {
        return false;
      } //only have visible elements and those that have a tabindex greater or equal 0
      return true;
    });
  }
  
  function parseKey(event) {
    var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
  
    // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events
    key = key.replace(/\W+/, '');
  
    if (event.shiftKey) key = 'SHIFT_' + key;
    if (event.ctrlKey) key = 'CTRL_' + key;
    if (event.altKey) key = 'ALT_' + key;
  
    // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)
    key = key.replace(/_$/, '');
  
    return key;
  }
  
  var Keyboard = {
    keys: getKeyCodes(keyCodes),
  
    /**
     * Parses the (keyboard) event and returns a String that represents its key
     * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
     * @param {Event} event - the event generated by the event handler
     * @return String key - String that represents the key pressed
     */
    parseKey: parseKey,
  
    /**
     * Handles the given (keyboard) event
     * @param {Event} event - the event generated by the event handler
     * @param {String} component - Foundation component's name, e.g. Slider or Reveal
     * @param {Objects} functions - collection of functions that are to be executed
     */
    handleKey: function (event, component, functions) {
      var commandList = commands[component],
          keyCode = this.parseKey(event),
          cmds,
          command,
          fn;
  
      if (!commandList) return console.warn('Component not defined!');
  
      if (typeof commandList.ltr === 'undefined') {
        // this component does not differentiate between ltr and rtl
        cmds = commandList; // use plain list
      } else {
        // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["b" /* rtl */])()) cmds = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, commandList.ltr, commandList.rtl);else cmds = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, commandList.rtl, commandList.ltr);
      }
      command = cmds[keyCode];
  
      fn = functions[command];
      if (fn && typeof fn === 'function') {
        // execute function  if exists
        var returnValue = fn.apply();
        if (functions.handled || typeof functions.handled === 'function') {
          // execute function when event was handled
          functions.handled(returnValue);
        }
      } else {
        if (functions.unhandled || typeof functions.unhandled === 'function') {
          // execute function when event was not handled
          functions.unhandled();
        }
      }
    },
  
  
    /**
     * Finds all focusable elements within the given `$element`
     * @param {jQuery} $element - jQuery object to search within
     * @return {jQuery} $focusable - all focusable elements within `$element`
     */
  
    findFocusable: findFocusable,
  
    /**
     * Returns the component name name
     * @param {Object} component - Foundation component, e.g. Slider or Reveal
     * @return String componentName
     */
  
    register: function (componentName, cmds) {
      commands[componentName] = cmds;
    },
  
  
    // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
    //
    /**
     * Traps the focus in the given element.
     * @param  {jQuery} $element  jQuery object to trap the foucs into.
     */
    trapFocus: function ($element) {
      var $focusable = findFocusable($element),
          $firstFocusable = $focusable.eq(0),
          $lastFocusable = $focusable.eq(-1);
  
      $element.on('keydown.zf.trapfocus', function (event) {
        if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {
          event.preventDefault();
          $firstFocusable.focus();
        } else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {
          event.preventDefault();
          $lastFocusable.focus();
        }
      });
    },
  
    /**
     * Releases the trapped focus from the given element.
     * @param  {jQuery} $element  jQuery object to release the focus for.
     */
    releaseFocus: function ($element) {
      $element.off('keydown.zf.trapfocus');
    }
  };
  
  /*
   * Constants for easier comparing.
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   */
  function getKeyCodes(kcs) {
    var k = {};
    for (var kc in kcs) {
      k[kcs[kc]] = kcs[kc];
    }return k;
  }
  
  
  
  /***/ }),
  /* 5 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Abide; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_plugin__ = __webpack_require__(2);
  
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  
  
  
  /**
   * Abide module.
   * @module foundation.abide
   */
  
  var Abide = function (_Plugin) {
    _inherits(Abide, _Plugin);
  
    function Abide() {
      _classCallCheck(this, Abide);
  
      return _possibleConstructorReturn(this, (Abide.__proto__ || Object.getPrototypeOf(Abide)).apply(this, arguments));
    }
  
    _createClass(Abide, [{
      key: '_setup',
  
      /**
       * Creates a new instance of Abide.
       * @class
       * @name Abide
       * @fires Abide#init
       * @param {Object} element - jQuery object to add the trigger to.
       * @param {Object} options - Overrides to the default plugin settings.
       */
      value: function _setup(element) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(true, {}, Abide.defaults, this.$element.data(), options);
  
        this.className = 'Abide'; // ie9 back compat
        this._init();
      }
  
      /**
       * Initializes the Abide plugin and calls functions to get Abide functioning on load.
       * @private
       */
  
    }, {
      key: '_init',
      value: function _init() {
        this.$inputs = this.$element.find('input, textarea, select');
  
        this._events();
      }
  
      /**
       * Initializes events for Abide.
       * @private
       */
  
    }, {
      key: '_events',
      value: function _events() {
        var _this3 = this;
  
        this.$element.off('.abide').on('reset.zf.abide', function () {
          _this3.resetForm();
        }).on('submit.zf.abide', function () {
          return _this3.validateForm();
        });
  
        if (this.options.validateOn === 'fieldChange') {
          this.$inputs.off('change.zf.abide').on('change.zf.abide', function (e) {
            _this3.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target));
          });
        }
  
        if (this.options.liveValidate) {
          this.$inputs.off('input.zf.abide').on('input.zf.abide', function (e) {
            _this3.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target));
          });
        }
  
        if (this.options.validateOnBlur) {
          this.$inputs.off('blur.zf.abide').on('blur.zf.abide', function (e) {
            _this3.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target));
          });
        }
      }
  
      /**
       * Calls necessary functions to update Abide upon DOM change
       * @private
       */
  
    }, {
      key: '_reflow',
      value: function _reflow() {
        this._init();
      }
  
      /**
       * Checks whether or not a form element has the required attribute and if it's checked or not
       * @param {Object} element - jQuery object to check for required attribute
       * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
       */
  
    }, {
      key: 'requiredCheck',
      value: function requiredCheck($el) {
        if (!$el.attr('required')) return true;
  
        var isGood = true;
  
        switch ($el[0].type) {
          case 'checkbox':
            isGood = $el[0].checked;
            break;
  
          case 'select':
          case 'select-one':
          case 'select-multiple':
            var opt = $el.find('option:selected');
            if (!opt.length || !opt.val()) isGood = false;
            break;
  
          default:
            if (!$el.val() || !$el.val().length) isGood = false;
        }
  
        return isGood;
      }
  
      /**
       * Get:
       * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
       *   1. The element's direct sibling('s).
       *   2. The element's parent's children.
       * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
       *
       * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
       *
       * @param {Object} $el - jQuery object to use as reference to find the form error selector.
       * @returns {Object} jQuery object with the selector.
       */
  
    }, {
      key: 'findFormError',
      value: function findFormError($el) {
        var id = $el[0].id;
        var $error = $el.siblings(this.options.formErrorSelector);
  
        if (!$error.length) {
          $error = $el.parent().find(this.options.formErrorSelector);
        }
  
        $error = $error.add(this.$element.find('[data-form-error-for="' + id + '"]'));
  
        return $error;
      }
  
      /**
       * Get the first element in this order:
       * 2. The <label> with the attribute `[for="someInputId"]`
       * 3. The `.closest()` <label>
       *
       * @param {Object} $el - jQuery object to check for required attribute
       * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
       */
  
    }, {
      key: 'findLabel',
      value: function findLabel($el) {
        var id = $el[0].id;
        var $label = this.$element.find('label[for="' + id + '"]');
  
        if (!$label.length) {
          return $el.closest('label');
        }
  
        return $label;
      }
  
      /**
       * Get the set of labels associated with a set of radio els in this order
       * 2. The <label> with the attribute `[for="someInputId"]`
       * 3. The `.closest()` <label>
       *
       * @param {Object} $el - jQuery object to check for required attribute
       * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
       */
  
    }, {
      key: 'findRadioLabels',
      value: function findRadioLabels($els) {
        var _this4 = this;
  
        var labels = $els.map(function (i, el) {
          var id = el.id;
          var $label = _this4.$element.find('label[for="' + id + '"]');
  
          if (!$label.length) {
            $label = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).closest('label');
          }
          return $label[0];
        });
  
        return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(labels);
      }
  
      /**
       * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
       * @param {Object} $el - jQuery object to add the class to
       */
  
    }, {
      key: 'addErrorClasses',
      value: function addErrorClasses($el) {
        var $label = this.findLabel($el);
        var $formError = this.findFormError($el);
  
        if ($label.length) {
          $label.addClass(this.options.labelErrorClass);
        }
  
        if ($formError.length) {
          $formError.addClass(this.options.formErrorClass);
        }
  
        $el.addClass(this.options.inputErrorClass).attr('data-invalid', '');
      }
  
      /**
       * Remove CSS error classes etc from an entire radio button group
       * @param {String} groupName - A string that specifies the name of a radio button group
       *
       */
  
    }, {
      key: 'removeRadioErrorClasses',
      value: function removeRadioErrorClasses(groupName) {
        var $els = this.$element.find(':radio[name="' + groupName + '"]');
        var $labels = this.findRadioLabels($els);
        var $formErrors = this.findFormError($els);
  
        if ($labels.length) {
          $labels.removeClass(this.options.labelErrorClass);
        }
  
        if ($formErrors.length) {
          $formErrors.removeClass(this.options.formErrorClass);
        }
  
        $els.removeClass(this.options.inputErrorClass).removeAttr('data-invalid');
      }
  
      /**
       * Removes CSS error class as specified by the Abide settings from the label, input, and the form
       * @param {Object} $el - jQuery object to remove the class from
       */
  
    }, {
      key: 'removeErrorClasses',
      value: function removeErrorClasses($el) {
        // radios need to clear all of the els
        if ($el[0].type == 'radio') {
          return this.removeRadioErrorClasses($el.attr('name'));
        }
  
        var $label = this.findLabel($el);
        var $formError = this.findFormError($el);
  
        if ($label.length) {
          $label.removeClass(this.options.labelErrorClass);
        }
  
        if ($formError.length) {
          $formError.removeClass(this.options.formErrorClass);
        }
  
        $el.removeClass(this.options.inputErrorClass).removeAttr('data-invalid');
      }
  
      /**
       * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
       * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
       * @fires Abide#invalid
       * @fires Abide#valid
       * @param {Object} element - jQuery object to validate, should be an HTML input
       * @returns {Boolean} goodToGo - If the input is valid or not.
       */
  
    }, {
      key: 'validateInput',
      value: function validateInput($el) {
        var _this5 = this;
  
        var clearRequire = this.requiredCheck($el),
            validated = false,
            customValidator = true,
            validator = $el.attr('data-validator'),
            equalTo = true;
  
        // don't validate ignored inputs or hidden inputs or disabled inputs
        if ($el.is('[data-abide-ignore]') || $el.is('[type="hidden"]') || $el.is('[disabled]')) {
          return true;
        }
  
        switch ($el[0].type) {
          case 'radio':
            validated = this.validateRadio($el.attr('name'));
            break;
  
          case 'checkbox':
            validated = clearRequire;
            break;
  
          case 'select':
          case 'select-one':
          case 'select-multiple':
            validated = clearRequire;
            break;
  
          default:
            validated = this.validateText($el);
        }
  
        if (validator) {
          customValidator = this.matchValidation($el, validator, $el.attr('required'));
        }
  
        if ($el.attr('data-equalto')) {
          equalTo = this.options.validators.equalTo($el);
        }
  
        var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1;
        var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';
  
        if (goodToGo) {
          // Re-validate inputs that depend on this one with equalto
          var dependentElements = this.$element.find('[data-equalto="' + $el.attr('id') + '"]');
          if (dependentElements.length) {
            (function () {
              var _this = _this5;
              dependentElements.each(function () {
                if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).val()) {
                  _this.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
                }
              });
            })();
          }
        }
  
        this[goodToGo ? 'removeErrorClasses' : 'addErrorClasses']($el);
  
        /**
         * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
         * Trigger includes the DOM element of the input.
         * @event Abide#valid
         * @event Abide#invalid
         */
        $el.trigger(message, [$el]);
  
        return goodToGo;
      }
  
      /**
       * Goes through a form and if there are any invalid inputs, it will display the form error element
       * @returns {Boolean} noError - true if no errors were detected...
       * @fires Abide#formvalid
       * @fires Abide#forminvalid
       */
  
    }, {
      key: 'validateForm',
      value: function validateForm() {
        var acc = [];
        var _this = this;
  
        this.$inputs.each(function () {
          acc.push(_this.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this)));
        });
  
        var noError = acc.indexOf(false) === -1;
  
        this.$element.find('[data-abide-error]').css('display', noError ? 'none' : 'block');
  
        /**
         * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
         * Trigger includes the element of the form.
         * @event Abide#formvalid
         * @event Abide#forminvalid
         */
        this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);
  
        return noError;
      }
  
      /**
       * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
       * @param {Object} $el - jQuery object to validate, should be a text input HTML element
       * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
       * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
       */
  
    }, {
      key: 'validateText',
      value: function validateText($el, pattern) {
        // A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
        pattern = pattern || $el.attr('pattern') || $el.attr('type');
        var inputText = $el.val();
        var valid = false;
  
        if (inputText.length) {
          // If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
          if (this.options.patterns.hasOwnProperty(pattern)) {
            valid = this.options.patterns[pattern].test(inputText);
          }
          // If the pattern name isn't also the type attribute of the field, then test it as a regexp
          else if (pattern !== $el.attr('type')) {
              valid = new RegExp(pattern).test(inputText);
            } else {
              valid = true;
            }
        }
        // An empty field is valid if it's not required
        else if (!$el.prop('required')) {
            valid = true;
          }
  
        return valid;
      }
  
      /**
       * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
       * @param {String} groupName - A string that specifies the name of a radio button group
       * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
       */
  
    }, {
      key: 'validateRadio',
      value: function validateRadio(groupName) {
        // If at least one radio in the group has the `required` attribute, the group is considered required
        // Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
        var $group = this.$element.find(':radio[name="' + groupName + '"]');
        var valid = false,
            required = false;
  
        // For the group to be required, at least one radio needs to be required
        $group.each(function (i, e) {
          if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e).attr('required')) {
            required = true;
          }
        });
        if (!required) valid = true;
  
        if (!valid) {
          // For the group to be valid, at least one radio needs to be checked
          $group.each(function (i, e) {
            if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e).prop('checked')) {
              valid = true;
            }
          });
        };
  
        return valid;
      }
  
      /**
       * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
       * @param {Object} $el - jQuery input element.
       * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
       * @param {Boolean} required - self explanatory?
       * @returns {Boolean} - true if validations passed.
       */
  
    }, {
      key: 'matchValidation',
      value: function matchValidation($el, validators, required) {
        var _this6 = this;
  
        required = required ? true : false;
  
        var clear = validators.split(' ').map(function (v) {
          return _this6.options.validators[v]($el, required, $el.parent());
        });
        return clear.indexOf(false) === -1;
      }
  
      /**
       * Resets form inputs and styles
       * @fires Abide#formreset
       */
  
    }, {
      key: 'resetForm',
      value: function resetForm() {
        var $form = this.$element,
            opts = this.options;
  
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.' + opts.labelErrorClass, $form).not('small').removeClass(opts.labelErrorClass);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.' + opts.inputErrorClass, $form).not('small').removeClass(opts.inputErrorClass);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(opts.formErrorSelector + '.' + opts.formErrorClass).removeClass(opts.formErrorClass);
        $form.find('[data-abide-error]').css('display', 'none');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(':input', $form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').removeAttr('data-invalid');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(':input:radio', $form).not('[data-abide-ignore]').prop('checked', false).removeAttr('data-invalid');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(':input:checkbox', $form).not('[data-abide-ignore]').prop('checked', false).removeAttr('data-invalid');
        /**
         * Fires when the form has been reset.
         * @event Abide#formreset
         */
        $form.trigger('formreset.zf.abide', [$form]);
      }
  
      /**
       * Destroys an instance of Abide.
       * Removes error styles and classes from elements, without resetting their values.
       */
  
    }, {
      key: '_destroy',
      value: function _destroy() {
        var _this = this;
        this.$element.off('.abide').find('[data-abide-error]').css('display', 'none');
  
        this.$inputs.off('.abide').each(function () {
          _this.removeErrorClasses(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
        });
      }
    }]);
  
    return Abide;
  }(__WEBPACK_IMPORTED_MODULE_1__foundation_plugin__["a" /* Plugin */]);
  
  /**
   * Default settings for plugin
   */
  
  
  Abide.defaults = {
    /**
     * The default event to validate inputs. Checkboxes and radios validate immediately.
     * Remove or change this value for manual validation.
     * @option
     * @type {?string}
     * @default 'fieldChange'
     */
    validateOn: 'fieldChange',
  
    /**
     * Class to be applied to input labels on failed validation.
     * @option
     * @type {string}
     * @default 'is-invalid-label'
     */
    labelErrorClass: 'is-invalid-label',
  
    /**
     * Class to be applied to inputs on failed validation.
     * @option
     * @type {string}
     * @default 'is-invalid-input'
     */
    inputErrorClass: 'is-invalid-input',
  
    /**
     * Class selector to use to target Form Errors for show/hide.
     * @option
     * @type {string}
     * @default '.form-error'
     */
    formErrorSelector: '.form-error',
  
    /**
     * Class added to Form Errors on failed validation.
     * @option
     * @type {string}
     * @default 'is-visible'
     */
    formErrorClass: 'is-visible',
  
    /**
     * Set to true to validate text inputs on any value change.
     * @option
     * @type {boolean}
     * @default false
     */
    liveValidate: false,
  
    /**
     * Set to true to validate inputs on blur.
     * @option
     * @type {boolean}
     * @default false
     */
    validateOnBlur: false,
  
    patterns: {
      alpha: /^[a-zA-Z]+$/,
      alpha_numeric: /^[a-zA-Z0-9]+$/,
      integer: /^[-+]?\d+$/,
      number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
  
      // amex, visa, diners
      card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
      cvv: /^([0-9]){3,4}$/,
  
      // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
      email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
  
      url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
      // abc.de
      domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
  
      datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
      // YYYY-MM-DD
      date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
      // HH:MM:SS
      time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
      dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
      // MM/DD/YYYY
      month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
      // DD/MM/YYYY
      day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
  
      // #FFF or #FFFFFF
      color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
  
      // Domain || URL
      website: {
        test: function (text) {
          return Abide.defaults.patterns['domain'].test(text) || Abide.defaults.patterns['url'].test(text);
        }
      }
    },
  
    /**
     * Optional validation functions to be used. `equalTo` being the only default included function.
     * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
     * el : The jQuery element to validate.
     * required : Boolean value of the required attribute be present or not.
     * parent : The direct parent of the input.
     * @option
     */
    validators: {
      equalTo: function (el, required, parent) {
        return __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + el.attr('data-equalto')).val() === el.val();
      }
    }
  };
  
  
  
  /***/ }),
  /* 6 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Accordion; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(4);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__ = __webpack_require__(1);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(2);
  
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  
  
  
  
  
  /**
   * Accordion module.
   * @module foundation.accordion
   * @requires foundation.util.keyboard
   */
  
  var Accordion = function (_Plugin) {
    _inherits(Accordion, _Plugin);
  
    function Accordion() {
      _classCallCheck(this, Accordion);
  
      return _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
    }
  
    _createClass(Accordion, [{
      key: '_setup',
  
      /**
       * Creates a new instance of an accordion.
       * @class
       * @name Accordion
       * @fires Accordion#init
       * @param {jQuery} element - jQuery object to make into an accordion.
       * @param {Object} options - a plain object with settings to override the default options.
       */
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Accordion.defaults, this.$element.data(), options);
  
        this.className = 'Accordion'; // ie9 back compat
        this._init();
  
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].register('Accordion', {
          'ENTER': 'toggle',
          'SPACE': 'toggle',
          'ARROW_DOWN': 'next',
          'ARROW_UP': 'previous'
        });
      }
  
      /**
       * Initializes the accordion by animating the preset active pane(s).
       * @private
       */
  
    }, {
      key: '_init',
      value: function _init() {
        var _this3 = this;
  
        this.$element.attr('role', 'tablist');
        this.$tabs = this.$element.children('[data-accordion-item]');
  
        this.$tabs.each(function (idx, el) {
          var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el),
              $content = $el.children('[data-tab-content]'),
              id = $content[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__["a" /* GetYoDigits */])(6, 'accordion'),
              linkId = el.id || id + '-label';
  
          $el.find('a:first').attr({
            'aria-controls': id,
            'role': 'tab',
            'id': linkId,
            'aria-expanded': false,
            'aria-selected': false
          });
  
          $content.attr({ 'role': 'tabpanel', 'aria-labelledby': linkId, 'aria-hidden': true, 'id': id });
        });
        var $initActive = this.$element.find('.is-active').children('[data-tab-content]');
        this.firstTimeInit = true;
        if ($initActive.length) {
          this.down($initActive, this.firstTimeInit);
          this.firstTimeInit = false;
        }
  
        this._checkDeepLink = function () {
          var anchor = window.location.hash;
          //need a hash and a relevant anchor in this tabset
          if (anchor.length) {
            var $link = _this3.$element.find('[href$="' + anchor + '"]'),
                $anchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(anchor);
  
            if ($link.length && $anchor) {
              if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {
                _this3.down($anchor, _this3.firstTimeInit);
                _this3.firstTimeInit = false;
              };
  
              //roll up a little to show the titles
              if (_this3.options.deepLinkSmudge) {
                var _this = _this3;
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).load(function () {
                  var offset = _this.$element.offset();
                  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').animate({ scrollTop: offset.top }, _this.options.deepLinkSmudgeDelay);
                });
              }
  
              /**
                * Fires when the zplugin has deeplinked at pageload
                * @event Accordion#deeplink
                */
              _this3.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);
            }
          }
        };
  
        //use browser to open a tab, if it exists in this tabset
        if (this.options.deepLink) {
          this._checkDeepLink();
        }
  
        this._events();
      }
  
      /**
       * Adds event handlers for items within the accordion.
       * @private
       */
  
    }, {
      key: '_events',
      value: function _events() {
        var _this = this;
  
        this.$tabs.each(function () {
          var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
          var $tabContent = $elem.children('[data-tab-content]');
          if ($tabContent.length) {
            $elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion', function (e) {
              e.preventDefault();
              _this.toggle($tabContent);
            }).on('keydown.zf.accordion', function (e) {
              __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].handleKey(e, 'Accordion', {
                toggle: function () {
                  _this.toggle($tabContent);
                },
                next: function () {
                  var $a = $elem.next().find('a').focus();
                  if (!_this.options.multiExpand) {
                    $a.trigger('click.zf.accordion');
                  }
                },
                previous: function () {
                  var $a = $elem.prev().find('a').focus();
                  if (!_this.options.multiExpand) {
                    $a.trigger('click.zf.accordion');
                  }
                },
                handled: function () {
                  e.preventDefault();
                  e.stopPropagation();
                }
              });
            });
          }
        });
        if (this.options.deepLink) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('popstate', this._checkDeepLink);
        }
      }
  
      /**
       * Toggles the selected content pane's open/close state.
       * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
       * @function
       */
  
    }, {
      key: 'toggle',
      value: function toggle($target) {
        if ($target.closest('[data-accordion]').is('[disabled]')) {
          console.info('Cannot toggle an accordion that is disabled.');
          return;
        }
        if ($target.parent().hasClass('is-active')) {
          this.up($target);
        } else {
          this.down($target);
        }
        //either replace or update browser history
        if (this.options.deepLink) {
          var anchor = $target.prev('a').attr('href');
  
          if (this.options.updateHistory) {
            history.pushState({}, '', anchor);
          } else {
            history.replaceState({}, '', anchor);
          }
        }
      }
  
      /**
       * Opens the accordion tab defined by `$target`.
       * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
       * @param {Boolean} firstTime - flag to determine if reflow should happen.
       * @fires Accordion#down
       * @function
       */
  
    }, {
      key: 'down',
      value: function down($target, firstTime) {
        var _this4 = this;
  
        /**
         * checking firstTime allows for initial render of the accordion
         * to render preset is-active panes.
         */
        if ($target.closest('[data-accordion]').is('[disabled]') && !firstTime) {
          console.info('Cannot call down on an accordion that is disabled.');
          return;
        }
        $target.attr('aria-hidden', false).parent('[data-tab-content]').addBack().parent().addClass('is-active');
  
        if (!this.options.multiExpand && !firstTime) {
          var $currentActive = this.$element.children('.is-active').children('[data-tab-content]');
          if ($currentActive.length) {
            this.up($currentActive.not($target));
          }
        }
  
        $target.slideDown(this.options.slideSpeed, function () {
          /**
           * Fires when the tab is done opening.
           * @event Accordion#down
           */
          _this4.$element.trigger('down.zf.accordion', [$target]);
        });
  
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + $target.attr('aria-labelledby')).attr({
          'aria-expanded': true,
          'aria-selected': true
        });
      }
  
      /**
       * Closes the tab defined by `$target`.
       * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
       * @fires Accordion#up
       * @function
       */
  
    }, {
      key: 'up',
      value: function up($target) {
        if ($target.closest('[data-accordion]').is('[disabled]')) {
          console.info('Cannot call up on an accordion that is disabled.');
          return;
        }
  
        var $aunts = $target.parent().siblings(),
            _this = this;
  
        if (!this.options.allowAllClosed && !$aunts.hasClass('is-active') || !$target.parent().hasClass('is-active')) {
          return;
        }
  
        $target.slideUp(_this.options.slideSpeed, function () {
          /**
           * Fires when the tab is done collapsing up.
           * @event Accordion#up
           */
          _this.$element.trigger('up.zf.accordion', [$target]);
        });
  
        $target.attr('aria-hidden', true).parent().removeClass('is-active');
  
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + $target.attr('aria-labelledby')).attr({
          'aria-expanded': false,
          'aria-selected': false
        });
      }
  
      /**
       * Destroys an instance of an accordion.
       * @fires Accordion#destroyed
       * @function
       */
  
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');
        this.$element.find('a').off('.zf.accordion');
        if (this.options.deepLink) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('popstate', this._checkDeepLink);
        }
      }
    }]);
  
    return Accordion;
  }(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__["a" /* Plugin */]);
  
  Accordion.defaults = {
    /**
     * Amount of time to animate the opening of an accordion pane.
     * @option
     * @type {number}
     * @default 250
     */
    slideSpeed: 250,
    /**
     * Allow the accordion to have multiple open panes.
     * @option
     * @type {boolean}
     * @default false
     */
    multiExpand: false,
    /**
     * Allow the accordion to close all panes.
     * @option
     * @type {boolean}
     * @default false
     */
    allowAllClosed: false,
    /**
     * Allows the window to scroll to content of pane specified by hash anchor
     * @option
     * @type {boolean}
     * @default false
     */
    deepLink: false,
  
    /**
     * Adjust the deep link scroll to make sure the top of the accordion panel is visible
     * @option
     * @type {boolean}
     * @default false
     */
    deepLinkSmudge: false,
  
    /**
     * Animation time (ms) for the deep link adjustment
     * @option
     * @type {number}
     * @default 300
     */
    deepLinkSmudgeDelay: 300,
  
    /**
     * Update the browser history with the open accordion
     * @option
     * @type {boolean}
     * @default false
     */
    updateHistory: false
  };
  
  
  
  /***/ }),
  /* 7 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Foundation; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(3);
  
  
  
  
  
  
  var FOUNDATION_VERSION = '6.4.2';
  
  // Global Foundation object
  // This is attached to the window, or used as a module for AMD/Browserify
  var Foundation = {
    version: FOUNDATION_VERSION,
  
    /**
     * Stores initialized plugins.
     */
    _plugins: {},
  
    /**
     * Stores generated unique ids for plugin instances
     */
    _uuids: [],
  
    /**
     * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
     * @param {Object} plugin - The constructor of the plugin.
     */
    plugin: function (plugin, name) {
      // Object key to use when adding to global Foundation object
      // Examples: Foundation.Reveal, Foundation.OffCanvas
      var className = name || functionName(plugin);
      // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
      // Examples: data-reveal, data-off-canvas
      var attrName = hyphenate(className);
  
      // Add to the Foundation object and the plugins list (for reflowing)
      this._plugins[attrName] = this[className] = plugin;
    },
    /**
     * @function
     * Populates the _uuids array with pointers to each individual plugin instance.
     * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
     * Also fires the initialization event for each plugin, consolidating repetitive code.
     * @param {Object} plugin - an instance of a plugin, usually `this` in context.
     * @param {String} name - the name of the plugin, passed as a camelCased string.
     * @fires Plugin#init
     */
    registerPlugin: function (plugin, name) {
      var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
      plugin.uuid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["a" /* GetYoDigits */])(6, pluginName);
  
      if (!plugin.$element.attr('data-' + pluginName)) {
        plugin.$element.attr('data-' + pluginName, plugin.uuid);
      }
      if (!plugin.$element.data('zfPlugin')) {
        plugin.$element.data('zfPlugin', plugin);
      }
      /**
       * Fires when the plugin has initialized.
       * @event Plugin#init
       */
      plugin.$element.trigger('init.zf.' + pluginName);
  
      this._uuids.push(plugin.uuid);
  
      return;
    },
    /**
     * @function
     * Removes the plugins uuid from the _uuids array.
     * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
     * Also fires the destroyed event for the plugin, consolidating repetitive code.
     * @param {Object} plugin - an instance of a plugin, usually `this` in context.
     * @fires Plugin#destroyed
     */
    unregisterPlugin: function (plugin) {
      var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));
  
      this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
      plugin.$element.removeAttr('data-' + pluginName).removeData('zfPlugin')
      /**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */
      .trigger('destroyed.zf.' + pluginName);
      for (var prop in plugin) {
        plugin[prop] = null; //clean up script to prep for garbage collection.
      }
      return;
    },
  
    /**
     * @function
     * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
     * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
     * @default If no argument is passed, reflow all currently active plugins.
     */
    reInit: function (plugins) {
      var isJQ = plugins instanceof __WEBPACK_IMPORTED_MODULE_0_jquery___default.a;
      try {
        if (isJQ) {
          plugins.each(function () {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('zfPlugin')._init();
          });
        } else {
          var type = typeof plugins,
              _this = this,
              fns = {
            'object': function (plgs) {
              plgs.forEach(function (p) {
                p = hyphenate(p);
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-' + p + ']').foundation('_init');
              });
            },
            'string': function () {
              plugins = hyphenate(plugins);
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-' + plugins + ']').foundation('_init');
            },
            'undefined': function () {
              this['object'](Object.keys(_this._plugins));
            }
          };
          fns[type](plugins);
        }
      } catch (err) {
        console.error(err);
      } finally {
        return plugins;
      }
    },
  
    /**
     * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
     * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
     * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
     */
    reflow: function (elem, plugins) {
  
      // If plugins is undefined, just grab everything
      if (typeof plugins === 'undefined') {
        plugins = Object.keys(this._plugins);
      }
      // If plugins is a string, convert it to an array with one item
      else if (typeof plugins === 'string') {
          plugins = [plugins];
        }
  
      var _this = this;
  
      // Iterate through each plugin
      __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(plugins, function (i, name) {
        // Get the current plugin
        var plugin = _this._plugins[name];
  
        // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
        var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']');
  
        // For each plugin found, initialize it
        $elem.each(function () {
          var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
              opts = {};
          // Don't double-dip on plugins
          if ($el.data('zfPlugin')) {
            console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
            return;
          }
  
          if ($el.attr('data-options')) {
            var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
              var opt = e.split(':').map(function (el) {
                return el.trim();
              });
              if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
            });
          }
          try {
            $el.data('zfPlugin', new plugin(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), opts));
          } catch (er) {
            console.error(er);
          } finally {
            return;
          }
        });
      });
    },
    getFnName: functionName,
  
    addToJquery: function ($) {
      // TODO: consider not making this a jQuery function
      // TODO: need way to reflow vs. re-initialize
      /**
       * The Foundation jQuery method.
       * @param {String|Array} method - An action to perform on the current jQuery object.
       */
      var foundation = function (method) {
        var type = typeof method,
            $noJS = $('.no-js');
  
        if ($noJS.length) {
          $noJS.removeClass('no-js');
        }
  
        if (type === 'undefined') {
          //needs to initialize the Foundation object, or an individual plugin.
          __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a" /* MediaQuery */]._init();
          Foundation.reflow(this);
        } else if (type === 'string') {
          //an individual method to invoke on a plugin or group of plugins
          var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary
          var plugClass = this.data('zfPlugin'); //determine the class of plugin
  
          if (plugClass !== undefined && plugClass[method] !== undefined) {
            //make sure both the class and method exist
            if (this.length === 1) {
              //if there's only one, call it directly.
              plugClass[method].apply(plugClass, args);
            } else {
              this.each(function (i, el) {
                //otherwise loop through the jQuery collection and invoke the method on each
                plugClass[method].apply($(el).data('zfPlugin'), args);
              });
            }
          } else {
            //error for no class or no method
            throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
          }
        } else {
          //error for invalid argument type
          throw new TypeError('We\'re sorry, ' + type + ' is not a valid parameter. You must use a string representing the method you wish to invoke.');
        }
        return this;
      };
      $.fn.foundation = foundation;
      return $;
    }
  };
  
  Foundation.util = {
    /**
     * Function for applying a debounce effect to a function call.
     * @function
     * @param {Function} func - Function to be called at end of timeout.
     * @param {Number} delay - Time in ms to delay the call of `func`.
     * @returns function
     */
    throttle: function (func, delay) {
      var timer = null;
  
      return function () {
        var context = this,
            args = arguments;
  
        if (timer === null) {
          timer = setTimeout(function () {
            func.apply(context, args);
            timer = null;
          }, delay);
        }
      };
    }
  };
  
  window.Foundation = Foundation;
  
  // Polyfill for requestAnimationFrame
  (function () {
    if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
      return new Date().getTime();
    };
  
    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var lastTime = 0;
      window.requestAnimationFrame = function (callback) {
        var now = Date.now();
        var nextTime = Math.max(lastTime + 16, now);
        return setTimeout(function () {
          callback(lastTime = nextTime);
        }, nextTime - now);
      };
      window.cancelAnimationFrame = clearTimeout;
    }
    /**
     * Polyfill for performance.now, required by rAF
     */
    if (!window.performance || !window.performance.now) {
      window.performance = {
        start: Date.now(),
        now: function () {
          return Date.now() - this.start;
        }
      };
    }
  })();
  if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
      if (typeof this !== 'function') {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
      }
  
      var aArgs = Array.prototype.slice.call(arguments, 1),
          fToBind = this,
          fNOP = function () {},
          fBound = function () {
        return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
      };
  
      if (this.prototype) {
        // native functions don't have a prototype
        fNOP.prototype = this.prototype;
      }
      fBound.prototype = new fNOP();
  
      return fBound;
    };
  }
  // Polyfill to get the name of a function in IE9
  function functionName(fn) {
    if (Function.prototype.name === undefined) {
      var funcNameRegex = /function\s([^(]{1,})\(/;
      var results = funcNameRegex.exec(fn.toString());
      return results && results.length > 1 ? results[1].trim() : "";
    } else if (fn.prototype === undefined) {
      return fn.constructor.name;
    } else {
      return fn.prototype.constructor.name;
    }
  }
  function parseValue(str) {
    if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);
    return str;
  }
  // Convert PascalCase to kebab-case
  // Thank you: http://stackoverflow.com/a/8955580
  function hyphenate(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  
  
  
  /***/ }),
  /* 8 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(4);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_util_imageLoader__ = __webpack_require__(10);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(2);
  
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  
  
  
  
  /**
   * Tabs module.
   * @module foundation.tabs
   * @requires foundation.util.keyboard
   * @requires foundation.util.imageLoader if tabs contain images
   */
  
  var Tabs = function (_Plugin) {
    _inherits(Tabs, _Plugin);
  
    function Tabs() {
      _classCallCheck(this, Tabs);
  
      return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
    }
  
    _createClass(Tabs, [{
      key: '_setup',
  
      /**
       * Creates a new instance of tabs.
       * @class
       * @name Tabs
       * @fires Tabs#init
       * @param {jQuery} element - jQuery object to make into tabs.
       * @param {Object} options - Overrides to the default plugin settings.
       */
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Tabs.defaults, this.$element.data(), options);
        this.className = 'Tabs'; // ie9 back compat
  
        this._init();
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].register('Tabs', {
          'ENTER': 'open',
          'SPACE': 'open',
          'ARROW_RIGHT': 'next',
          'ARROW_UP': 'previous',
          'ARROW_DOWN': 'next',
          'ARROW_LEFT': 'previous'
          // 'TAB': 'next',
          // 'SHIFT_TAB': 'previous'
        });
      }
  
      /**
       * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
       * @private
       */
  
    }, {
      key: '_init',
      value: function _init() {
        var _this3 = this;
  
        var _this = this;
  
        this.$element.attr({ 'role': 'tablist' });
        this.$tabTitles = this.$element.find('.' + this.options.linkClass);
        this.$tabContent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-tabs-content="' + this.$element[0].id + '"]');
  
        this.$tabTitles.each(function () {
          var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
              $link = $elem.find('a'),
              isActive = $elem.hasClass('' + _this.options.linkActiveClass),
              hash = $link.attr('data-tabs-target') || $link[0].hash.slice(1),
              linkId = $link[0].id ? $link[0].id : hash + '-label',
              $tabContent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + hash);
  
          $elem.attr({ 'role': 'presentation' });
  
          $link.attr({
            'role': 'tab',
            'aria-controls': hash,
            'aria-selected': isActive,
            'id': linkId,
            'tabindex': isActive ? '0' : '-1'
          });
  
          $tabContent.attr({
            'role': 'tabpanel',
            'aria-labelledby': linkId
          });
  
          if (!isActive) {
            $tabContent.attr('aria-hidden', 'true');
          }
  
          if (isActive && _this.options.autoFocus) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).load(function () {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').animate({ scrollTop: $elem.offset().top }, _this.options.deepLinkSmudgeDelay, function () {
                $link.focus();
              });
            });
          }
        });
        if (this.options.matchHeight) {
          var $images = this.$tabContent.find('img');
  
          if ($images.length) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_imageLoader__["a" /* onImagesLoaded */])($images, this._setHeight.bind(this));
          } else {
            this._setHeight();
          }
        }
  
        //current context-bound function to open tabs on page load or history popstate
        this._checkDeepLink = function () {
          var anchor = window.location.hash;
          //need a hash and a relevant anchor in this tabset
          if (anchor.length) {
            var $link = _this3.$element.find('[href$="' + anchor + '"]');
            if ($link.length) {
              _this3.selectTab(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(anchor), true);
  
              //roll up a little to show the titles
              if (_this3.options.deepLinkSmudge) {
                var offset = _this3.$element.offset();
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').animate({ scrollTop: offset.top }, _this3.options.deepLinkSmudgeDelay);
              }
  
              /**
                * Fires when the zplugin has deeplinked at pageload
                * @event Tabs#deeplink
                */
              _this3.$element.trigger('deeplink.zf.tabs', [$link, __WEBPACK_IMPORTED_MODULE_0_jquery___default()(anchor)]);
            }
          }
        };
  
        //use browser to open a tab, if it exists in this tabset
        if (this.options.deepLink) {
          this._checkDeepLink();
        }
  
        this._events();
      }
  
      /**
       * Adds event handlers for items within the tabs.
       * @private
       */
  
    }, {
      key: '_events',
      value: function _events() {
        this._addKeyHandler();
        this._addClickHandler();
        this._setHeightMqHandler = null;
  
        if (this.options.matchHeight) {
          this._setHeightMqHandler = this._setHeight.bind(this);
  
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('changed.zf.mediaquery', this._setHeightMqHandler);
        }
  
        if (this.options.deepLink) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('popstate', this._checkDeepLink);
        }
      }
  
      /**
       * Adds click handlers for items within the tabs.
       * @private
       */
  
    }, {
      key: '_addClickHandler',
      value: function _addClickHandler() {
        var _this = this;
  
        this.$element.off('click.zf.tabs').on('click.zf.tabs', '.' + this.options.linkClass, function (e) {
          e.preventDefault();
          e.stopPropagation();
          _this._handleTabChange(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
        });
      }
  
      /**
       * Adds keyboard event handlers for items within the tabs.
       * @private
       */
  
    }, {
      key: '_addKeyHandler',
      value: function _addKeyHandler() {
        var _this = this;
  
        this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function (e) {
          if (e.which === 9) return;
  
          var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
              $elements = $element.parent('ul').children('li'),
              $prevElement,
              $nextElement;
  
          $elements.each(function (i) {
            if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is($element)) {
              if (_this.options.wrapOnKeys) {
                $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
                $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
              } else {
                $prevElement = $elements.eq(Math.max(0, i - 1));
                $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
              }
              return;
            }
          });
  
          // handle keyboard event with keyboard util
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].handleKey(e, 'Tabs', {
            open: function () {
              $element.find('[role="tab"]').focus();
              _this._handleTabChange($element);
            },
            previous: function () {
              $prevElement.find('[role="tab"]').focus();
              _this._handleTabChange($prevElement);
            },
            next: function () {
              $nextElement.find('[role="tab"]').focus();
              _this._handleTabChange($nextElement);
            },
            handled: function () {
              e.stopPropagation();
              e.preventDefault();
            }
          });
        });
      }
  
      /**
       * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
       * @param {jQuery} $target - Tab to open.
       * @param {boolean} historyHandled - browser has already handled a history update
       * @fires Tabs#change
       * @function
       */
  
    }, {
      key: '_handleTabChange',
      value: function _handleTabChange($target, historyHandled) {
  
        /**
         * Check for active class on target. Collapse if exists.
         */
        if ($target.hasClass('' + this.options.linkActiveClass)) {
          if (this.options.activeCollapse) {
            this._collapseTab($target);
  
            /**
             * Fires when the zplugin has successfully collapsed tabs.
             * @event Tabs#collapse
             */
            this.$element.trigger('collapse.zf.tabs', [$target]);
          }
          return;
        }
  
        var $oldTab = this.$element.find('.' + this.options.linkClass + '.' + this.options.linkActiveClass),
            $tabLink = $target.find('[role="tab"]'),
            hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),
            $targetContent = this.$tabContent.find('#' + hash);
  
        //close old tab
        this._collapseTab($oldTab);
  
        //open new tab
        this._openTab($target);
  
        //either replace or update browser history
        if (this.options.deepLink && !historyHandled) {
          var anchor = $target.find('a').attr('href');
  
          if (this.options.updateHistory) {
            history.pushState({}, '', anchor);
          } else {
            history.replaceState({}, '', anchor);
          }
        }
  
        /**
         * Fires when the plugin has successfully changed tabs.
         * @event Tabs#change
         */
        this.$element.trigger('change.zf.tabs', [$target, $targetContent]);
  
        //fire to children a mutation event
        $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger");
      }
  
      /**
       * Opens the tab `$targetContent` defined by `$target`.
       * @param {jQuery} $target - Tab to Open.
       * @function
       */
  
    }, {
      key: '_openTab',
      value: function _openTab($target) {
        var $tabLink = $target.find('[role="tab"]'),
            hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),
            $targetContent = this.$tabContent.find('#' + hash);
  
        $target.addClass('' + this.options.linkActiveClass);
  
        $tabLink.attr({
          'aria-selected': 'true',
          'tabindex': '0'
        });
  
        $targetContent.addClass('' + this.options.panelActiveClass).removeAttr('aria-hidden');
      }
  
      /**
       * Collapses `$targetContent` defined by `$target`.
       * @param {jQuery} $target - Tab to Open.
       * @function
       */
  
    }, {
      key: '_collapseTab',
      value: function _collapseTab($target) {
        var $target_anchor = $target.removeClass('' + this.options.linkActiveClass).find('[role="tab"]').attr({
          'aria-selected': 'false',
          'tabindex': -1
        });
  
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + $target_anchor.attr('aria-controls')).removeClass('' + this.options.panelActiveClass).attr({ 'aria-hidden': 'true' });
      }
  
      /**
       * Public method for selecting a content pane to display.
       * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
       * @param {boolean} historyHandled - browser has already handled a history update
       * @function
       */
  
    }, {
      key: 'selectTab',
      value: function selectTab(elem, historyHandled) {
        var idStr;
  
        if (typeof elem === 'object') {
          idStr = elem[0].id;
        } else {
          idStr = elem;
        }
  
        if (idStr.indexOf('#') < 0) {
          idStr = '#' + idStr;
        }
  
        var $target = this.$tabTitles.find('[href$="' + idStr + '"]').parent('.' + this.options.linkClass);
  
        this._handleTabChange($target, historyHandled);
      }
    }, {
      key: '_setHeight',
  
      /**
       * Sets the height of each panel to the height of the tallest panel.
       * If enabled in options, gets called on media query change.
       * If loading content via external source, can be called directly or with _reflow.
       * If enabled with `data-match-height="true"`, tabs sets to equal height
       * @function
       * @private
       */
      value: function _setHeight() {
        var max = 0,
            _this = this; // Lock down the `this` value for the root tabs object
  
        this.$tabContent.find('.' + this.options.panelClass).css('height', '').each(function () {
  
          var panel = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
              isActive = panel.hasClass('' + _this.options.panelActiveClass); // get the options from the parent instead of trying to get them from the child
  
          if (!isActive) {
            panel.css({ 'visibility': 'hidden', 'display': 'block' });
          }
  
          var temp = this.getBoundingClientRect().height;
  
          if (!isActive) {
            panel.css({
              'visibility': '',
              'display': ''
            });
          }
  
          max = temp > max ? temp : max;
        }).css('height', max + 'px');
      }
  
      /**
       * Destroys an instance of an tabs.
       * @fires Tabs#destroyed
       */
  
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.$element.find('.' + this.options.linkClass).off('.zf.tabs').hide().end().find('.' + this.options.panelClass).hide();
  
        if (this.options.matchHeight) {
          if (this._setHeightMqHandler != null) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('changed.zf.mediaquery', this._setHeightMqHandler);
          }
        }
  
        if (this.options.deepLink) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('popstate', this._checkDeepLink);
        }
      }
    }]);
  
    return Tabs;
  }(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__["a" /* Plugin */]);
  
  Tabs.defaults = {
    /**
     * Allows the window to scroll to content of pane specified by hash anchor
     * @option
     * @type {boolean}
     * @default false
     */
    deepLink: false,
  
    /**
     * Adjust the deep link scroll to make sure the top of the tab panel is visible
     * @option
     * @type {boolean}
     * @default false
     */
    deepLinkSmudge: false,
  
    /**
     * Animation time (ms) for the deep link adjustment
     * @option
     * @type {number}
     * @default 300
     */
    deepLinkSmudgeDelay: 300,
  
    /**
     * Update the browser history with the open tab
     * @option
     * @type {boolean}
     * @default false
     */
    updateHistory: false,
  
    /**
     * Allows the window to scroll to content of active pane on load if set to true.
     * Not recommended if more than one tab panel per page.
     * @option
     * @type {boolean}
     * @default false
     */
    autoFocus: false,
  
    /**
     * Allows keyboard input to 'wrap' around the tab links.
     * @option
     * @type {boolean}
     * @default true
     */
    wrapOnKeys: true,
  
    /**
     * Allows the tab content panes to match heights if set to true.
     * @option
     * @type {boolean}
     * @default false
     */
    matchHeight: false,
  
    /**
     * Allows active tabs to collapse when clicked.
     * @option
     * @type {boolean}
     * @default false
     */
    activeCollapse: false,
  
    /**
     * Class applied to `li`'s in tab link list.
     * @option
     * @type {string}
     * @default 'tabs-title'
     */
    linkClass: 'tabs-title',
  
    /**
     * Class applied to the active `li` in tab link list.
     * @option
     * @type {string}
     * @default 'is-active'
     */
    linkActiveClass: 'is-active',
  
    /**
     * Class applied to the content containers.
     * @option
     * @type {string}
     * @default 'tabs-panel'
     */
    panelClass: 'tabs-panel',
  
    /**
     * Class applied to the active content container.
     * @option
     * @type {string}
     * @default 'is-active'
     */
    panelActiveClass: 'is-active'
  };
  
  
  
  /***/ }),
  /* 9 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Triggers; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__ = __webpack_require__(11);
  
  
  
  
  
  var MutationObserver = function () {
    var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
    for (var i = 0; i < prefixes.length; i++) {
      if (prefixes[i] + 'MutationObserver' in window) {
        return window[prefixes[i] + 'MutationObserver'];
      }
    }
    return false;
  }();
  
  var triggers = function (el, type) {
    el.data(type).split(' ').forEach(function (id) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + id)[type === 'close' ? 'trigger' : 'triggerHandler'](type + '.zf.trigger', [el]);
    });
  };
  
  var Triggers = {
    Listeners: {
      Basic: {},
      Global: {}
    },
    Initializers: {}
  };
  
  Triggers.Listeners.Basic = {
    openListener: function () {
      triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), 'open');
    },
    closeListener: function () {
      var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('close');
      if (id) {
        triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), 'close');
      } else {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('close.zf.trigger');
      }
    },
    toggleListener: function () {
      var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('toggle');
      if (id) {
        triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), 'toggle');
      } else {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('toggle.zf.trigger');
      }
    },
    closeableListener: function (e) {
      e.stopPropagation();
      var animation = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('closable');
  
      if (animation !== '') {
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__["a" /* Motion */].animateOut(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), animation, function () {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('closed.zf');
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).fadeOut().trigger('closed.zf');
      }
    },
    toggleFocusListener: function () {
      var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('toggle-focus');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + id).triggerHandler('toggle.zf.trigger', [__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this)]);
    }
  };
  
  // Elements with [data-open] will reveal a plugin that supports it when clicked.
  Triggers.Initializers.addOpenListener = function ($elem) {
    $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);
    $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);
  };
  
  // Elements with [data-close] will close a plugin that supports it when clicked.
  // If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
  Triggers.Initializers.addCloseListener = function ($elem) {
    $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);
    $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);
  };
  
  // Elements with [data-toggle] will toggle a plugin that supports it when clicked.
  Triggers.Initializers.addToggleListener = function ($elem) {
    $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);
    $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);
  };
  
  // Elements with [data-closable] will respond to close.zf.trigger events.
  Triggers.Initializers.addCloseableListener = function ($elem) {
    $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);
    $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);
  };
  
  // Elements with [data-toggle-focus] will respond to coming in and out of focus
  Triggers.Initializers.addToggleFocusListener = function ($elem) {
    $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);
    $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);
  };
  
  // More Global/complex listeners and triggers
  Triggers.Listeners.Global = {
    resizeListener: function ($nodes) {
      if (!MutationObserver) {
        //fallback for IE 9
        $nodes.each(function () {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).triggerHandler('resizeme.zf.trigger');
        });
      }
      //trigger all listening elements and signal a resize event
      $nodes.attr('data-events', "resize");
    },
    scrollListener: function ($nodes) {
      if (!MutationObserver) {
        //fallback for IE 9
        $nodes.each(function () {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).triggerHandler('scrollme.zf.trigger');
        });
      }
      //trigger all listening elements and signal a scroll event
      $nodes.attr('data-events', "scroll");
    },
    closeMeListener: function (e, pluginId) {
      var plugin = e.namespace.split('.')[0];
      var plugins = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-' + plugin + ']').not('[data-yeti-box="' + pluginId + '"]');
  
      plugins.each(function () {
        var _this = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
        _this.triggerHandler('close.zf.trigger', [_this]);
      });
    }
  };
  
  // Global, parses whole document.
  Triggers.Initializers.addClosemeListener = function (pluginName) {
    var yetiBoxes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-yeti-box]'),
        plugNames = ['dropdown', 'tooltip', 'reveal'];
  
    if (pluginName) {
      if (typeof pluginName === 'string') {
        plugNames.push(pluginName);
      } else if (typeof pluginName === 'object' && typeof pluginName[0] === 'string') {
        plugNames.concat(pluginName);
      } else {
        console.error('Plugin names must be strings');
      }
    }
    if (yetiBoxes.length) {
      var listeners = plugNames.map(function (name) {
        return 'closeme.zf.' + name;
      }).join(' ');
  
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
    }
  };
  
  function debounceGlobalListener(debounce, trigger, listener) {
    var timer = void 0,
        args = Array.prototype.slice.call(arguments, 3);
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(trigger).on(trigger, function (e) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        listener.apply(null, args);
      }, debounce || 10); //default time to emit scroll event
    });
  }
  
  Triggers.Initializers.addResizeListener = function (debounce) {
    var $nodes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-resize]');
    if ($nodes.length) {
      debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);
    }
  };
  
  Triggers.Initializers.addScrollListener = function (debounce) {
    var $nodes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-scroll]');
    if ($nodes.length) {
      debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);
    }
  };
  
  Triggers.Initializers.addMutationEventsListener = function ($elem) {
    if (!MutationObserver) {
      return false;
    }
    var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]');
  
    //element callback
    var listeningElementsMutation = function (mutationRecordsList) {
      var $target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(mutationRecordsList[0].target);
  
      //trigger the event handler for the element depending on type
      switch (mutationRecordsList[0].type) {
        case "attributes":
          if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
            $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
          }
          if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
            $target.triggerHandler('resizeme.zf.trigger', [$target]);
          }
          if (mutationRecordsList[0].attributeName === "style") {
            $target.closest("[data-mutate]").attr("data-events", "mutate");
            $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
          }
          break;
  
        case "childList":
          $target.closest("[data-mutate]").attr("data-events", "mutate");
          $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
          break;
  
        default:
          return false;
        //nothing
      }
    };
  
    if ($nodes.length) {
      //for each element that needs to listen for resizing, scrolling, or mutation add a single observer
      for (var i = 0; i <= $nodes.length - 1; i++) {
        var elementObserver = new MutationObserver(listeningElementsMutation);
        elementObserver.observe($nodes[i], { attributes: true, childList: true, characterData: false, subtree: true, attributeFilter: ["data-events", "style"] });
      }
    }
  };
  
  Triggers.Initializers.addSimpleListeners = function () {
    var $document = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document);
  
    Triggers.Initializers.addOpenListener($document);
    Triggers.Initializers.addCloseListener($document);
    Triggers.Initializers.addToggleListener($document);
    Triggers.Initializers.addCloseableListener($document);
    Triggers.Initializers.addToggleFocusListener($document);
  };
  
  Triggers.Initializers.addGlobalListeners = function () {
    var $document = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document);
    Triggers.Initializers.addMutationEventsListener($document);
    Triggers.Initializers.addResizeListener();
    Triggers.Initializers.addScrollListener();
    Triggers.Initializers.addClosemeListener();
  };
  
  Triggers.init = function ($, Foundation) {
    if (typeof $.triggersInitialized === 'undefined') {
      var $document = $(document);
  
      if (document.readyState === "complete") {
        Triggers.Initializers.addSimpleListeners();
        Triggers.Initializers.addGlobalListeners();
      } else {
        $(window).on('load', function () {
          Triggers.Initializers.addSimpleListeners();
          Triggers.Initializers.addGlobalListeners();
        });
      }
  
      $.triggersInitialized = true;
    }
  
    if (Foundation) {
      Foundation.Triggers = Triggers;
      // Legacy included to be backwards compatible for now.
      Foundation.IHearYou = Triggers.Initializers.addGlobalListeners;
    }
  };
  
  
  
  /***/ }),
  /* 10 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onImagesLoaded; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  
  
  
  
  /**
   * Runs a callback function when images are fully loaded.
   * @param {Object} images - Image(s) to check if loaded.
   * @param {Func} callback - Function to execute when image is fully loaded.
   */
  function onImagesLoaded(images, callback) {
    var self = this,
        unloaded = images.length;
  
    if (unloaded === 0) {
      callback();
    }
  
    images.each(function () {
      // Check if image is loaded
      if (this.complete && this.naturalWidth !== undefined) {
        singleImageLoaded();
      } else {
        // If the above check failed, simulate loading on detached element.
        var image = new Image();
        // Still count image as loaded if it finalizes with an error.
        var events = "load.zf.images error.zf.images";
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(image).one(events, function me(event) {
          // Unbind the event listeners. We're using 'one' but only one of the two events will have fired.
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).off(events, me);
          singleImageLoaded();
        });
        image.src = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('src');
      }
    });
  
    function singleImageLoaded() {
      unloaded--;
      if (unloaded === 0) {
        callback();
      }
    }
  }
  
  
  
  /***/ }),
  /* 11 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* unused harmony export Move */
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Motion; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
  
  
  
  
  
  /**
   * Motion module.
   * @module foundation.motion
   */
  
  var initClasses = ['mui-enter', 'mui-leave'];
  var activeClasses = ['mui-enter-active', 'mui-leave-active'];
  
  var Motion = {
    animateIn: function (element, animation, cb) {
      animate(true, element, animation, cb);
    },
  
    animateOut: function (element, animation, cb) {
      animate(false, element, animation, cb);
    }
  };
  
  function Move(duration, elem, fn) {
    var anim,
        prog,
        start = null;
    // console.log('called');
  
    if (duration === 0) {
      fn.apply(elem);
      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
      return;
    }
  
    function move(ts) {
      if (!start) start = ts;
      // console.log(start, ts);
      prog = ts - start;
      fn.apply(elem);
  
      if (prog < duration) {
        anim = window.requestAnimationFrame(move, elem);
      } else {
        window.cancelAnimationFrame(anim);
        elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
      }
    }
    anim = window.requestAnimationFrame(move);
  }
  
  /**
   * Animates an element in or out using a CSS transition class.
   * @function
   * @private
   * @param {Boolean} isIn - Defines if the animation is in or out.
   * @param {Object} element - jQuery or HTML object to animate.
   * @param {String} animation - CSS class to use.
   * @param {Function} cb - Callback to run when animation is finished.
   */
  function animate(isIn, element, animation, cb) {
    element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).eq(0);
  
    if (!element.length) return;
  
    var initClass = isIn ? initClasses[0] : initClasses[1];
    var activeClass = isIn ? activeClasses[0] : activeClasses[1];
  
    // Set up the animation
    reset();
  
    element.addClass(animation).css('transition', 'none');
  
    requestAnimationFrame(function () {
      element.addClass(initClass);
      if (isIn) element.show();
    });
  
    // Start the animation
    requestAnimationFrame(function () {
      element[0].offsetWidth;
      element.css('transition', '').addClass(activeClass);
    });
  
    // Clean up the animation when it finishes
    element.one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["c" /* transitionend */])(element), finish);
  
    // Hides the element (for out animations), resets the element, and runs a callback
    function finish() {
      if (!isIn) element.hide();
      reset();
      if (cb) cb.apply(element);
    }
  
    // Resets transitions and removes motion-specific classes
    function reset() {
      element[0].style.transitionDuration = 0;
      element.removeClass(initClass + ' ' + activeClass + ' ' + animation);
    }
  }
  
  
  
  /***/ }),
  /* 12 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__ = __webpack_require__(7);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_mediaQuery__ = __webpack_require__(3);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_triggers__ = __webpack_require__(9);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_accordion__ = __webpack_require__(6);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_tabs__ = __webpack_require__(8);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_abide__ = __webpack_require__(5);
  
  
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].addToJquery(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
  
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].MediaQuery = __WEBPACK_IMPORTED_MODULE_2__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_mediaQuery__["a" /* MediaQuery */];
  
  __WEBPACK_IMPORTED_MODULE_3__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_triggers__["a" /* Triggers */].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a, __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */]);
  
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_4__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_accordion__["a" /* Accordion */], 'Accordion');
  
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_5__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_tabs__["a" /* Tabs */], 'Tabs');
  
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_6__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_abide__["a" /* Abide */], 'Abide');
  
  /***/ })
  /******/ ]);