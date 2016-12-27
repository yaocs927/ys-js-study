// PopUp.js
define(['jquery', 'jqueryUI', 'widget'], function ($, $UI, widget) {
  'use strict';
  // 构造 自定义弹窗 函数
  function PopUp(opts) {
    this.opts = $.extend({}, PopUp.DEFAULT, opts);
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
    mode: 'confirm', // 弹框类型
    width: 400, // 弹框宽
    height: 150, // 弹框高
    headerText: '提示消息', // 弹框标题文字
    contentText: '', // 弹框内容文字
    text4confirmBtn: '确定', // 弹框确定按钮文字
    handler4confirmBtn: null, // 确定按钮回调函数
    handler4closeBtn: null, // 关闭按钮回调函数
    hasCloseBtn: false, // 是否有关闭按钮
    hasSkinClassName: null, // 弹框UI
    hasMask: true, // 遮罩层
    isDraggable: true, // 弹框是否能拖动
    dragHandle: null // 拖动回调
  };

  // 原型
  PopUp.prototype = $.extend({}, new widget.Widget(), {
    // constructor: PopUp,
    _alert: function () {
      var self = this,
        opts = self.opts;
      $('html,body').css('overflow', 'hidden');
      var boundingBox = $('<div class="popup_boundingBox">' +
        '<div class="popup_header">' + opts.headerText + '</div >' +
        '<div class="popup_body">' + opts.contentText + '</div>' +
        '<div class="popup_footer"><input type="button" class="popup_confirmBtn" value="' + opts.text4confirmBtn + '"></div>' +
        '</div > ');
      boundingBox.appendTo('body');
      boundingBox.css({
        width: opts.width + 'px',
        height: opts.height + 'px',
        left: (opts.x || ($(window).innerWidth() - opts.width) / 2) + 'px',
        top: (opts.y || ($(window).innerHeight() - opts.height) / 2) + 'px',
      });
      var btn = boundingBox.find('.popup_footer input');
      var mask = null;
      if (opts.hasMask) {
        mask = $('<div class="popup_mask"></div>');
        mask.appendTo('body');
      }

      // 确定按钮回调
      btn.on('click', function () {
        boundingBox.remove();
        mask && mask.remove();
        self._fire('confirm');
      });

      if (opts.handler4confirmBtn) {
        this.on('confirm', opts.handler4confirmBtn);
      }

      // 关闭按钮回调
      if (opts.hasCloseBtn) {
        var closeBtn = $('<div class="popup_closeBtn">X</div>');
        closeBtn.appendTo(boundingBox);
        closeBtn.on('click', function () {
          boundingBox.remove();
          mask && mask.remove();
          self._fire('close');
        })
      }

      if (opts.handler4closeBtn) {
        this.on('close', opts.handler4closeBtn);
      }

      // 弹出框换样式
      if (opts.hasSkinClassName) {
        boundingBox.addClass(opts.hasSkinClassName);
      }

      // 弹出框拖动
      if (opts.isDraggable) {
        if (opts.dragHandle) {
          boundingBox.draggable({
            handle: opts.dragHandle
          });
        } else {
          boundingBox.draggable();
        }
      }

    },
    _confirm: function () {},
    _prompt: function () {},
    // 客户端监听自定义事件
    // on: function (type, handler) {
    //   if (typeof this.handlers[type] == 'undefined') {
    //     this.handlers[type] = [];
    //   }
    //   this.handlers[type].push(handler);
    //   return this;
    // },
    // 执行自定义事件
    // _fire: function (type, data) {
    //   if (this.handlers[type] instanceof Array) {
    //     var handlers = this.handlers[type];
    //     for (var i = 0, len = handlers.length; i < len; i++) {
    //       handlers[i](data);
    //     }
    //   }
    // }
  });

  return {
    PopUp: PopUp
  }
});