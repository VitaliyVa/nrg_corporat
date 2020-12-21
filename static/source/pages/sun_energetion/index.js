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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sun_energetion.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../components/common_componentc/footer/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/footer/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/footer/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/footer/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/footer/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/header/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/header/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$('.btn_consultation').on('click', function () {
  $.fancybox.open({
    src: '#form_consultation',
    touch: false
  });
});

/***/ }),

/***/ "../components/common_componentc/header/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/header/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/normalize/index.js":
/*!**********************************************************!*\
  !*** ../components/common_componentc/normalize/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/normalize/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/normalize/index.scss":
/*!************************************************************!*\
  !*** ../components/common_componentc/normalize/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/button/index.js":
/*!***********************************************!*\
  !*** ../components/interface/button/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/button/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


$(".btn_standart_transparent").hover(function () {
  $(this).removeClass('out').addClass('over');
}, function () {
  $(this).removeClass('over').addClass('out');
});

_toConsumableArray($('.size_js')).map(function (item) {
  var current_width = $(item)[0].offsetWidth;
  console.log(current_width);
  $(item).css('width', "".concat(current_width, "px"));
});

$('.link_for_form').on('click', function () {
  var href = $(this).attr('data-href');
  var name = $(this).attr('data-name');
  localStorage.setItem('name_for_form', name);
  window.location.href = href;
});

/***/ }),

/***/ "../components/interface/button/index.scss":
/*!*************************************************!*\
  !*** ../components/interface/button/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/elements/all_elements.js":
/*!*************************************************************!*\
  !*** ../components/interface/form/elements/all_elements.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "../components/interface/form/elements/input/index.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea */ "../components/interface/form/elements/textarea/index.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio */ "../components/interface/form/elements/radio/index.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ "../components/interface/form/elements/list/index.js");
// # import всіх елементів в формі:
// # INPUT "при наведені на текст він піднімається"
// # list список такий як в брифі
// # texaria 





/***/ }),

/***/ "../components/interface/form/elements/input/index.js":
/*!************************************************************!*\
  !*** ../components/interface/form/elements/input/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/elements/input/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/form/elements/input/index.scss":
/*!**************************************************************!*\
  !*** ../components/interface/form/elements/input/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/elements/list/index.js":
/*!***********************************************************!*\
  !*** ../components/interface/form/elements/list/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/elements/list/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$('.form_box__item').on('click', function () {
  $(this).toggleClass('form_box__item-active');
  var item_input = $(this).find('input');

  if (item_input.prop('checked') == true) {
    item_input.prop('checked', false);
  } else {
    item_input.prop('checked', true);
  }

  var form_box__header = $(this).parents('.form_box').find('.form_box__header');
  var box_item = $(this).parents('.form_box__main').find('.form_box__item');

  if (box_item.length > 0) {
    var count_item_active = 0;

    for (var key in box_item) {
      if (box_item.hasOwnProperty(key)) {
        if ($(box_item[key]).hasClass('form_box__item') && $(box_item[key]).hasClass('form_box__item-active')) {
          count_item_active++;
        }
      }
    }

    if (count_item_active == box_item.length) {
      form_box__header.addClass('form_box__header-active');
    } else {
      form_box__header.removeClass('form_box__header-active');
    }
  }
});
$('.form_box__header').on('click', function () {
  var this_box = $(this);
  $(this).toggleClass('form_box__header-active');
  var item_input = $(this).find('.form_box__header-input');

  if (item_input.length > 0) {
    if (item_input.prop('checked') == true) {
      item_input.prop('checked', false);
    } else {
      item_input.prop('checked', true);
    }

    var box_item = $(this).parents('.form_box').find('.form_box__main').find('.form_box__item');

    if (box_item.length > 0) {
      Object.values(box_item).reduce(function (previousValue, currentItem, index, arr) {
        if ($(currentItem).hasClass('form_box__item')) {
          if (this_box.hasClass('form_box__header-active')) {
            console.log("step1");

            if (!$(currentItem).hasClass('form_box__item-active')) {
              console.log("step1");
              $(currentItem).addClass('form_box__item-active');

              var _item_input = $(currentItem).find('input');

              _item_input.prop('checked', true);
            }
          } else {
            console.log("step2");

            if ($(currentItem).hasClass('form_box__item-active')) {
              console.log($(currentItem));
              $(currentItem).removeClass('form_box__item-active');

              var _item_input2 = $(currentItem).find('input');

              _item_input2.prop('checked', false);
            }
          }
        }
      }, 0);
    }
  }
});

/***/ }),

/***/ "../components/interface/form/elements/list/index.scss":
/*!*************************************************************!*\
  !*** ../components/interface/form/elements/list/index.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/elements/radio/index.js":
/*!************************************************************!*\
  !*** ../components/interface/form/elements/radio/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/elements/radio/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$('.radio_group__header').on('click', function () {
  delete_load_file();

  if (!$(this).parent('.radio_group-check').hasClass('is-active')) {
    var change_chack = $(this).parent('.radio_group-check').data('chenge');
    $('.change_chack').val(change_chack);
    $(this).parents('.form_container__main').find('.radio_group-check').removeClass('is-active');
    $(this).parent('.radio_group-check').addClass('is-active');
  }
});
$('.form_file_load').on('click', function () {
  event.preventDefault();
  $('#file_logo__life').trigger('click');
  var dropArea = event.target;
  ;
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
    dropArea.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  } // начало перетаскивания


  ;
  ['dragenter', 'dragover'].forEach(function (eventName) {
    dropArea.addEventListener(eventName, highlight, false);
  });
  ['dragleave', 'drop'].forEach(function (eventName) {
    dropArea.addEventListener(eventName, unhighlight, false);
  });

  function highlight(e) {
    dropArea.classList.add('highlight');
  }

  function unhighlight(e) {
    dropArea.classList.remove('highlight');
  } // конец перетаскивания
  // Загрузка файла


  dropArea.addEventListener('drop', handleDrop, false);

  function handleDrop(e) {
    var dt = e.dataTransfer;
    var files = dt.files;
    document.getElementById("file_logo__life").files = files;

    for (var i = 0; i < files.length; i++) {
      var file = files.item(i);
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (e) {
        load_file(file.name);
      };
    }
  } // Кінець загрузки файла

});

if (document.getElementById('file_logo__life') != null) {
  document.getElementById('file_logo__life').addEventListener('change', function () {
    if (this.value) {
      load_file(this.files[0].name);
    }
  });
}

function load_file(fail_name) {
  var cout_cahr = 15;
  var checbox = document.getElementsByClassName('radio_group-check is-active');
  var form_file_load = checbox[0].querySelectorAll('.form_file_load');
  var form_file_downloads = checbox[0].querySelectorAll('.form_file_downloads');
  var name__file = form_file_downloads[0].querySelectorAll('.text');
  form_file_load[0].classList.add('hidden');
  fail_name = fail_name.length > cout_cahr ? "".concat(fail_name.slice(0, cout_cahr), "...") : fail_name;
  name__file[0].textContent = fail_name;
  form_file_downloads[0].classList.remove('hidden');
  form_file_downloads[0].addEventListener('click', function () {
    delete_load_file();
  });
}

function delete_load_file() {
  $('#file_logo__life').val('');
  var checbox = document.getElementsByClassName('radio_group-check is-active');
  var form_file_load = checbox[0].querySelectorAll('.form_file_load');
  var form_file_downloads = checbox[0].querySelectorAll('.form_file_downloads');

  if (form_file_downloads.length > 0) {
    form_file_downloads[0].classList.add('hidden');
    form_file_load[0].classList.remove('hidden');
  }
}

$('.radio_block').on('click', function () {
  var wrap = $(this).parents('.step__wrap');
  $(wrap).find('.radio_center').removeClass('radio_center_active');
  $(this).find('.radio_center').addClass('radio_center_active');

  if ($(this).hasClass('add_one_inp')) {
    $('.step_content_delivery').addClass('only_one_input');
    $('.step_content_delivery').removeClass('only_two_input');
    $('.step_content_delivery').removeClass('only_none_input');
    $('.two_input__wrap').addClass('hidden_input__wrap');
    $('.one_input__wrap').removeClass('hidden_input__wrap');
  } else if ($(this).hasClass('add_two_inp')) {
    $('.step_content_delivery').removeClass('only_one_input');
    $('.step_content_delivery').addClass('only_two_input');
    $('.step_content_delivery').removeClass('only_none_input');
    $('.one_input__wrap').addClass('hidden_input__wrap');
    $('.two_input__wrap').removeClass('hidden_input__wrap');
  } else if ($(this).hasClass('remove_input')) {
    $('.step_content_delivery').removeClass('only_one_input');
    $('.step_content_delivery').removeClass('only_two_input');
    $('.step_content_delivery').addClass('only_none_input');
    $('.one_input__wrap').addClass('hidden_input__wrap');
    $('.two_input__wrap').addClass('hidden_input__wrap');
  }
});

/***/ }),

/***/ "../components/interface/form/elements/radio/index.scss":
/*!**************************************************************!*\
  !*** ../components/interface/form/elements/radio/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/elements/textarea/index.js":
/*!***************************************************************!*\
  !*** ../components/interface/form/elements/textarea/index.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/elements/textarea/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var field_inputs = $('.textarea-field');

if (field_inputs.length > 0) {
  field_inputs.on('focus', function () {
    $(this).parents('.textarea').addClass('in-focus');
    $(this).parents('.textarea').removeClass('is-error');
  });
  field_inputs.on('blur', function () {
    if ($(this).val().length < 1 || $(this).val() == '+38(___) ___-____') {
      $(this).parents('.textarea').removeClass('in-focus');
    }
  });
  $('.form__group_label').on('click', function () {
    $(this).parents('.textarea').toggleClass('in-focus');
  });
  console.log(field_inputs);

  for (var key in field_inputs) {
    if (field_inputs.hasOwnProperty(key) && _typeof(field_inputs[key]) == 'object') {
      var input = field_inputs[key];
      console.log($(input).val().length);

      if ($(input).val().length > 1) {
        $(input).parents('.textarea').addClass('in-focus');
      } else {
        $(input).parents('.textarea').removeClass('in-focus');
      }
    }
  }
}

/***/ }),

/***/ "../components/interface/form/elements/textarea/index.scss":
/*!*****************************************************************!*\
  !*** ../components/interface/form/elements/textarea/index.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/form_grid.scss":
/*!***************************************************!*\
  !*** ../components/interface/form/form_grid.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/index.js":
/*!*********************************************!*\
  !*** ../components/interface/form/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_all_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/all_elements */ "../components/interface/form/elements/all_elements.js");
/* harmony import */ var _form_grid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form_grid.scss */ "../components/interface/form/form_grid.scss");
/* harmony import */ var _form_grid_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_form_grid_scss__WEBPACK_IMPORTED_MODULE_2__);



var inputHasFocus = $('.input_focus');
inputHasFocus.on('focus', function () {
  var focusFinder = $(this).parents('.inp-vak-wrap').find('.label__style');
  focusFinder.addClass('label__style_active');
});
inputHasFocus.on('blur', function () {
  if ($(this).val().length < 1 || $(this).val() == '+38(___) __ __ ___') {
    var blurFinder = $(this).parents('.inp-vak-wrap').find('.label__style');
    blurFinder.removeClass('label__style_active');
  }
});

/***/ }),

/***/ "../components/interface/form/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/form/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/grid/index.js":
/*!*********************************************!*\
  !*** ../components/interface/grid/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/grid/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/grid/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/grid/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/module/form_errors/index.js":
/*!*************************************************!*\
  !*** ../components/module/form_errors/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/module/form_errors/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
// підгружає стилі 
 // імортує валідацію для номерів оператора
// import {check_operator} from '../mob_operator/index';
// до класу додає маску для телефону

$('input[type="tel"]').mask("+38(099) 999 9999"); // створюється масив з усіма операторами
// let array_oper_number = [39, 50, 63, 66, 67, 68, 73, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99, 44];
// змінна для помилки, яку потрібно вивести при неправильному введені оператора
// let array_error = check_operator(array_oper_number);
// загальна функція яка загружається при загрузці сторінки

$(function () {
  // до цього класу додається валідація яка забороняє вводити цифри
  $('.txtNumeric').keydown(function (e) {
    if (e.ctrlKey || e.altKey) {
      e.preventDefault();
    } else {
      var key = e.keyCode;

      if (!(key == 8 || key == 32 || key == 46 || key >= 35 && key <= 40 || key >= 65 && key <= 90)) {
        e.preventDefault();
      }
    }
  });
  $('.txtWords').keydown(function (e) {
    if (e.ctrlKey || e.altKey) {
      e.preventDefault();
    } else {
      var key = e.keyCode;

      if (key == 32 || key == 46 || key >= 35 && key <= 40 || key >= 65 && key <= 90) {
        e.preventDefault();
      }
    }
  });
}); // загальна функція яка загружається при загрузці сторінки

$(function () {
  Onload();
}); // в цю функцію заганяються форми які мають проходити валідацію

function Onload() {
  valide_form('.form__block', '.input', true);
  valide_form('.form_consultation', '.input', true);
  valide_form('#form_calculator', '.inp-vak-wrap', true);
} // вертає конкретну мову, яка стоїть зараз на сайті


function location_leng() {
  return location.pathname.split('/')[1];
} // основна функція, яка валідує потрібну форму


function valide_form(id_form, append_error_box, check_request) {
  var check_request = check_request;

  if ($(id_form).length > 0) {
    var lang_site;
    var errore_text = {};
    lang_site = location_leng(); // перевіряє мову сайту, і вертає потрібний переклад

    switch (lang_site) {
      case 'uk':
        errore_text.required = 'Поле обов\'язково для заповнення';
        errore_text.email = 'Поле має містити email';
        errore_text.min_pass = 'Пароль занадто короткий';
        break;

      case 'ru':
        errore_text.required = 'Поле обязательно для заполнения';
        errore_text.email = 'Поле должно содержать email';
        errore_text.min_pass = 'Пароль слишком краток';
        break;

      case 'en':
        errore_text.required = 'The field is required';
        errore_text.email = 'The field must contain an email';
        errore_text.min_pass = 'Password is too short';
        break;

      default:
        errore_text.required = 'Поле обов\'язково для заповнення';
        errore_text.email = 'Поле має містити email';
        errore_text.min_pass = 'Пароль занадто короткий';
    } // кастомний метод, який проводить валідацію на довжину паролю


    jQuery.validator.addMethod("integer", function (value, element) {
      if (value.length < 6) {
        return false;
      } else {
        return true;
      }
    }, errore_text.min_pass); // функція самого плагіну

    $(id_form).validate({
      errorPlacement: function errorPlacement(event, validator) {
        $(validator).parents(append_error_box).append($(event));
        $(validator).parents(append_error_box).addClass('is-error');
      },
      rules: {
        name: {
          required: true // integer: true,
          // operator: true,

        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        },
        phone: {
          required: true
        }
      },
      messages: {
        name: {
          required: errore_text.required // email: errore_text.email,
          // operator: array_error.curr_text,

        },
        email: {
          required: errore_text.required,
          email: errore_text.email
        },
        message: {
          required: errore_text.required
        },
        phone: {
          required: errore_text.required
        }
      },
      submitHandler: function submitHandler(form) {
        event.preventDefault();
        $('.load_spin').addClass('load_spin_active');
        var Formdata = new FormData();
        var form_input = $(form).serializeArray();
        var url_form = form.action;
        var form_json = {};
        $(form_input).each(function (index, obj) {
          form_json[obj.name] = obj.value;
        });
        var user_files = form.querySelectorAll('#input_user_file')[0];

        if (user_files != undefined) {
          if (user_files.files[0] !== undefined) {
            $.each(user_files.files, function (index, value) {
              Formdata.append('file', value);
            });
          }
        }

        Formdata.append('data', JSON.stringify(form_json));

        if (url_form != '') {
          fetch(url_form, {
            method: 'POST',
            body: Formdata
          }).then(function (data) {
            return data.json();
          }).then(function (data) {
            if (data.status == 'OK' && typeof data['status'] !== "undefined") {
              sayHi();
            } else {
              // if(data.status=='BAD' && typeof data['status'] !== "undefined"){
              $('.load_spin').removeClass('load_spin_active');
              $.fancybox.open({
                src: '#modal-form_true'
              });
              $('.form_true_img').css('display', 'none');
              $('.usually_modal_text').text('Вибачте, сталась помилка. Спробуйте пізніше.');
              setTimeout(function () {
                $.fancybox.close();
                $.fancybox.close({
                  src: '#modal-form_true'
                });
                $('.form_true_img').css('display', 'inline-block');
                $('.usually_modal_text').text('Дякуємо, заявка опрацьована. Наші менеджери звяжуться з Вами');
              }, 1500);
            }

            if (typeof data['url'] !== "undefined" && data.url != '') {
              //   sayHi();
              location.href = data.url;
            }
          });
        } else {
          console.log("forn_not_actions");
        }

        function explode() {
          if (id_form == '#modal-form_user') {// window.location.pathname = '/'
          } else {// sayHi();
            }
        }

        explode();

        function sayHi() {
          $('.load_spin').removeClass('load_spin_active');

          if (check_request === true) {
            $.fancybox.open({
              src: '#modal-form_true'
            });
            setTimeout(function () {
              $.fancybox.close();
              $.fancybox.close({
                src: '#modal-form_true'
              });
            }, 1500);
            var form_inputs = $(form)[0].querySelectorAll('input');

            if (form_inputs.length > 0) {
              for (var key in form_inputs) {
                if (form_inputs.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
                  if (form_inputs[key].type == 'hidden') {} else if (form_inputs[key].type !== 'submit') {
                    form_inputs[key].value = '';
                  }
                }
              }

              var form_textaria = $(form)[0].querySelectorAll('textarea');

              if (form_textaria.length > 0) {
                form_textaria[0].value = '';
              }
            }
          }
        }
      }
    });
  }
}

/***/ }),

/***/ "../components/module/form_errors/index.scss":
/*!***************************************************!*\
  !*** ../components/module/form_errors/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/sun_energetion/calculator.scss":
/*!**********************************************************!*\
  !*** ../components/pages/sun_energetion/calculator.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/sun_energetion/index.js":
/*!***************************************************!*\
  !*** ../components/pages/sun_energetion/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculator_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator.scss */ "../components/pages/sun_energetion/calculator.scss");
/* harmony import */ var _calculator_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_calculator_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "../components/pages/sun_energetion/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


$('.project_slider__block').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  lazyLoad: "ondemand",
  autoplay: false,
  arrows: false,
  responsive: [{
    breakpoint: 775,
    settings: {
      slidesToShow: 1
    }
  }]
});
$('.left_slide_arrow').click(function () {
  $(".project_slider__block").slick('slickPrev');
});
$('.right_slide_arrow').click(function () {
  $(".project_slider__block").slick('slickNext');
});
$('.investment_list_btn').on('click', function () {
  var wrapper = $(this).parents('.investment_list__block');
  $(wrapper).toggleClass('active');
});
$(function () {
  var first_output = $('.first_output')[0];
  var second_output = $('.second_output')[0];
  var third_output = $('.third_output')[0];
  var four_output = $('.four_output')[0];
  var first_out = $('.cost_calk')[0];
  var second_out = $('.profit_calk')[0];
  var third_out = $('.cost_calk_2')[0];
  var four_out = $('.profit_calk_2')[0];
  var current_year = 4;
  var current_kilowatt = 25;
  var kilowatt_ratio = 7000 / 40;
  var price;
  var profit;
  var current_year_2 = 5;
  var current_kilowatt_2 = 40;
  var slider = document.getElementById('slider1');
  noUiSlider.create(slider, {
    start: [25],
    connect: [true, false],
    range: {
      'min': 1,
      'max': 50
    },
    tooltips: false
  });
  var val_kilowatt;
  slider.noUiSlider.on('update', function (values) {
    val_kilowatt = Math.floor(values[0]);
    first_output.innerHTML = val_kilowatt + " кВт";
    current_kilowatt = val_kilowatt;
    price = Math.round(current_kilowatt * (kilowatt_ratio * current_year));
    second_out.innerHTML = '€ ' + price;
    profit = Math.round(750 * current_kilowatt);
    first_out.innerHTML = '€ ' + profit;
  });
  var slider2 = document.getElementById('slider2');
  noUiSlider.create(slider2, {
    start: [4],
    connect: [true, false],
    range: {
      'min': 1,
      'max': 10
    },
    tooltips: false
  });
  var val_floor2;
  slider2.noUiSlider.on('update', function (values) {
    val_floor2 = Math.floor(values[0]);
    second_output.innerHTML = val_floor2;
    current_year = val_floor2;
    price = Math.round(current_kilowatt * (kilowatt_ratio * current_year));
    second_out.innerHTML = '€ ' + price;
    profit = Math.round(750 * current_kilowatt);
    first_out.innerHTML = '€ ' + profit;
  }); //

  var slider3 = document.getElementById('slider3');
  noUiSlider.create(slider3, {
    start: [40],
    connect: [true, false],
    range: {
      'min': 40,
      'max': 400
    },
    tooltips: false
  });
  var val_floor3;
  slider3.noUiSlider.on('update', function (values) {
    val_floor3 = Math.floor(values[0]);
    third_output.innerHTML = val_floor3 + " кВт";
    current_kilowatt_2 = val_floor3;
    price = Math.round(7000 * current_year_2 * (current_kilowatt_2 / 40));
    four_out.innerHTML = '€ ' + price;
    profit = Math.round(current_kilowatt_2 * 750);
    third_out.innerHTML = '€ ' + profit;
  }); //

  var slider4 = document.getElementById('slider4');
  noUiSlider.create(slider4, {
    start: [5],
    connect: [true, false],
    range: {
      'min': 1,
      'max': 10
    },
    tooltips: false
  });
  var val_floor4;
  slider4.noUiSlider.on('update', function (values) {
    val_floor4 = Math.floor(values[0]);
    four_output.innerHTML = val_floor4;
    current_year_2 = val_floor4;
    price = Math.round(7000 * current_year_2 * (current_kilowatt_2 / 40));
    four_out.innerHTML = '€ ' + price;
    profit = Math.round(current_kilowatt_2 * 750);
    third_out.innerHTML = '€ ' + profit;
  });
});
$.extend($.lazyLoadXT, {
  edgeY: 250,
  srcAttr: 'data-src'
});
$(".scroll_all").on('click', function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  var destContacts = destination - 100;
  $('html, body').animate({
    scrollTop: destContacts
  }, 600);
  return false;
});
$('.consultation_js').fancybox({
  touch: false,
  scrolling: 'hidden'
});
var check_box = "З прив'язкою до виробітку електроенерії";
var first_output = $('.first_output');
var second_output = $('.second_output');
var third_output = $('.third_output');
var four_output = $('.four_output');
var first_num = first_output.text().replace(/\s+/g, '');
var second_num = second_output.text().replace(/\s+/g, '');
var third_num = third_output.text().replace(/\s+/g, '');
var four_num = four_output.text().replace(/\s+/g, '');
var cost_calk = $('.cost_calk');
var cost_calk_2 = $('.cost_calk_2');
var profit_calk = $('.profit_calk');
var profit_calk_2 = $('.profit_calk_2');
var hidden_input_1 = $('.input_check_box');
var hidden_input_2 = $('.input_first_output');
var hidden_input_3 = $('.input_second_output');
var hidden_input_4 = $('.input_cost_calk');
var hidden_input_5 = $('.input_profit_calk');
hidden_input_1.val(check_box);
hidden_input_2.val(first_num);
hidden_input_3.val(second_num);
hidden_input_4.val(cost_calk.text());
hidden_input_5.val(profit_calk.text());
var first_range_block = $('.first_range-block')[0];
var first_ranges = $('.first_range');
$('.lab-1').on('click', function () {
  check_box = "З прив'язкою до виробітку електроенерії";
  $('#main_calculator_1').removeClass('main_calculator_hidden');
  $('#main_calculator_2').addClass('main_calculator_hidden');
  $('.radio-block').addClass('version_1');
  $('.radio-block').removeClass('version_2');
});
$('.lab-2').on('click', function () {
  check_box = "З гарантованою виплатою";
  $('#main_calculator_2').removeClass('main_calculator_hidden');
  $('#main_calculator_1').addClass('main_calculator_hidden');
  $('.radio-block').removeClass('version_1');
  $('.radio-block').addClass('version_2');
});
$('.calc_btn_1').on('click', function () {
  first_num = first_output.text().replace(/\s+/g, '');
  second_num = second_output.text().replace(/\s+/g, '');
  hidden_input_1.val(check_box);
  hidden_input_2.val(first_num);
  hidden_input_3.val(second_num);
  hidden_input_4.val(cost_calk.text());
  hidden_input_5.val(profit_calk.text());
});
$('.calc_btn_2').on('click', function () {
  third_num = third_output.text().replace(/\s+/g, '');
  four_num = four_output.text().replace(/\s+/g, '');
  hidden_input_1.val(check_box);
  hidden_input_2.val(third_num);
  hidden_input_3.val(four_num);
  hidden_input_4.val(cost_calk_2.text());
  hidden_input_5.val(profit_calk_2.text());
});

/***/ }),

/***/ "../components/pages/sun_energetion/index.scss":
/*!*****************************************************!*\
  !*** ../components/pages/sun_energetion/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./sun_energetion.js":
/*!***************************!*\
  !*** ./sun_energetion.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_componentc_normalize_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/common_componentc/normalize/index */ "../components/common_componentc/normalize/index.js");
/* harmony import */ var _components_interface_grid_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/interface/grid/index */ "../components/interface/grid/index.js");
/* harmony import */ var _components_interface_form_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/interface/form/index */ "../components/interface/form/index.js");
/* harmony import */ var _components_interface_button_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/interface/button/index */ "../components/interface/button/index.js");
/* harmony import */ var _components_module_form_errors_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/module/form_errors/index */ "../components/module/form_errors/index.js");
/* harmony import */ var _components_common_componentc_header_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common_componentc/header/index */ "../components/common_componentc/header/index.js");
/* harmony import */ var _components_common_componentc_footer_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common_componentc/footer/index */ "../components/common_componentc/footer/index.js");
/* harmony import */ var _components_pages_sun_energetion_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/pages/sun_energetion/index */ "../components/pages/sun_energetion/index.js");
// script interface



 // script common elements

 // import '../components/common_componentc/admin_panel/index'
// script pages





/***/ })

/******/ });
//# sourceMappingURL=index.js.map