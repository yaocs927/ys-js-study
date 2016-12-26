// PopUp.js
define(['jquery'], function ($) {
  'use strict';
  // 构造 自定义弹窗 函数
  function PopUp(opts) {
    this.opts = $.extend({}, PopUp.DEFAULT, opts);
    this.boundingBox = $('<div class="popup_boundingBox">' +
      '<div class="popup_header"></div>' +
      '<div class="popup_body"></div>' +
      '<div class="popup_footer"></div>' +
      '</div>');

    if (this.opts.mode === 'alert') {
      this._alert();
    } else if (this.opts.mode === 'confirm') {
      this._confirm();
    } else {
      this._prompt();
    }
  }

  // 原始参数
  PopUp.DEFAULT = {
    mode: 'confirm',
    width: 400,
    height: 150,
    headerText: '提示消息',
    contentText: '',
    text4confirmBtn: '确定',
    handler4confirmBtn: null,
    handler4closeBtn: null,
    hasCloseBtn: false,
    hasSkinClassName: null
  };

  // 原型
  PopUp.prototype = {
    constructor: PopUp,
    _alert: function () {
      var opts = this.opts;
      var boundingBox = $('<div class="popup_boundingBox">' +
        '<div class="popup_header">' + opts.headerText + '</div >' +
        '<div class="popup_body">' + opts.contentText + '</div>' +
        '<div class="popup_footer"><input type="button" class="popup_confirmBtn" value="'+ opts.text4confirmBtn +'"></div>' +
        '</div > ');
      boundingBox.appendTo('body');
      boundingBox.css({
        width: opts.width + 'px',
        height: opts.height + 'px',
        left: (opts.x || ($(window).innerWidth() - opts.width) / 2) + 'px',
        top: (opts.y || ($(window).innerHeight() - opts.height) / 2) + 'px',
      });
      var btn = boundingBox.find('.popup_footer input')
      btn.on('click', function () {
        opts.handler4confirmBtn && opts.handler4confirmBtn();
        boundingBox.remove();
      });

      if (opts.hasCloseBtn) {
        var closeBtn = $('<div class="popup_closeBtn">X</div>');
        closeBtn.appendTo(boundingBox);
        closeBtn.on('click', function () {
          opts.handler4closeBtn && opts.handler4closeBtn();
          boundingBox.remove();
        })
      }

      if (opts.hasSkinClassName) {
        boundingBox.addClass(opts.hasSkinClassName);
      }
    },
    _confirm: function () {},
    _prompt: function () {}
  }

  return {
    PopUp: PopUp
  }
});