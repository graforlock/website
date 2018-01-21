(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EstimateHandler = function () {
    function EstimateHandler() {
        _classCallCheck(this, EstimateHandler);

        this.formElement = document.querySelector('.estimate__form');
        this.redirectOnSubmit();
    }

    _createClass(EstimateHandler, [{
        key: 'redirectToThankYouPage',
        value: function redirectToThankYouPage(e) {
            e.preventDefault();
            window.location.href = '/website/thankyou';
        }
    }, {
        key: 'redirectOnSubmit',
        value: function redirectOnSubmit() {
            this.formElement.addEventListener('submit', this.redirectToThankYouPage.bind(this));
        }
    }]);

    return EstimateHandler;
}();

exports.default = EstimateHandler;

},{}],2:[function(require,module,exports){
'use strict';

var _estimate = require('./handlers/estimate.js');

var _estimate2 = _interopRequireDefault(_estimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (/website\/estimate[/]?$/.test(window.location.pathname)) {
    var _ = new _estimate2.default();
}

},{"./handlers/estimate.js":1}]},{},[2]);
