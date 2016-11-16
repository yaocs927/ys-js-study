// window.js

define(['jquery'], function ($) {
  // 构造函数
  function Window() {
    // 默认参数
    this.cfg = {
      title: '系统消息', //弹窗标题
      content: '弹窗内容',
      text4ConfirmBtn: '确定',
      handler4ConfirmBtn: null, // 确定按钮回调
      handler4CloseBtn: null, // 关闭按钮回调
      width: 500, // 默认弹窗宽
      height: 300, // 默认弹窗高
      hasCloseBtn: false, // 是否需要关闭按钮
      skinClassName: null, // 自定义样式
      hasMask: true // 遮罩层
    };
    // 自定义事件
    this.handlers = {

    }
  }
  // 原型方法
  Window.prototype = {
    alert: function (cfg) {
      var that = this;
      var CFG = $.extend(that.cfg, cfg); // 参数对比合并
      // 弹窗主体
      var boundingBox = $(
        '<div class="window_boundingBox">' +
        '<div class="window_header">' + CFG.title + '</div>' +
        '<div class="window_body">' + CFG.content + '</div>' +
        '<div class="window_footer"><input type="button" value="' + CFG.text4ConfirmBtn + '" class="window_confirmBtn"/></div>' +
        '</div>'
      );
      boundingBox.appendTo('body');
      // 弹窗大小位置
      boundingBox.css({
        width: CFG.width + 'px',
        height: CFG.height + 'px',
        left: (CFG.x || (window.innerWidth - CFG.width) / 2) + 'px',
        top: (CFG.y || (window.innerHeight - CFG.height) / 2) + 'px'
      });
      // 关闭按钮
      if (CFG.hasCloseBtn) {
        var closeBtn = $('<span class="window_closeBtn">X</span>');
        closeBtn.appendTo(boundingBox);
        closeBtn.on('click', function () {
          // CFG.handler4CloseBtn && CFG.handler4CloseBtn();
          that.fire('close');
          boundingBox.remove();
          mask && mask.remove();
        });
      }
      // 自定义皮肤
      if (CFG.skinClassName !== null) {
        boundingBox.addClass(CFG.skinClassName);
      }
      // 遮罩层
      var mask = null;
      if (CFG.hasMask) {
        mask = $('<div class="window_mask"></div>');
        mask.appendTo('body');
      }
      // 确定按钮事件
      var window_confirmBtn = boundingBox.find('.window_confirmBtn');
      window_confirmBtn.on('click', function () {
        // CFG.handler4ConfirmBtn && CFG.handler4ConfirmBtn();
        that.fire('confirm');
        boundingBox.remove();
        mask && mask.remove();
      });
      // 定义事件
      if (CFG.handler4ConfirmBtn) {
        that.on('confirm', CFG.handler4ConfirmBtn);
      }
      if (CFG.handler4CloseBtn) {
        that.on('close', CFG.handler4CloseBtn);
      }
    },
    confirm: function () {},
    prompt: function () {},
    on: function (type, handler) {
      console.log('js82: ' + handler)
      if (typeof this.handlers[type] == 'undefined') {
        console.log('js84: ' + this.handlers[type])
        this.handlers[type] = [];
      }
      this.handlers[type].push(handler);
    },
    fire: function (type, data) {
      if (this.handlers[type] instanceof Array) {
        console.log('js93: ' + this.handlers[type])
        var handlers = this.handlers[type];
        for (var i = 0; i < handlers.length; i++) {
          handlers[i](data);
          
        }
      }
    },
    off: function () {}
  }
  return {
    Window: Window
  }
});