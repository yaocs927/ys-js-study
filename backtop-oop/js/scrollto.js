define(['jquery'], function ($) {
  function ScrollTo(opts) {

    // 手动参数覆盖默认参数
    this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
    this.$el = $('html,body');
  }

  // 默认参数配置
  ScrollTo.DEFAULTS = {
    dest: 0, // 指定滚动条移动到的位置
    speed: 800 // 速度
  };

  // 原型方法
  ScrollTo.prototype = {
    move: function () {
      var opts = this.opts;
      if ($(window).scrollTop() != opts.dest) {
        if (!this.$el.is(':animated')) {
          this.$el.animate({
            scrollTop: opts.dest
          }, opts.speed);
        }
      }
    },
    go: function () {
      if ($(window).scrollTop() != this.opts.dest) {
        this.$el.scrollTop(this.opts.dest);
      }
    }
  }

  // 返回方法
  return {
    ScrollTo: ScrollTo
  }
});