define(['jquery', 'scrollTo'], function ($, scrollTo) {
  function BackTop(el, opts) {
    this.opts = $.extend({}, BackTop.DEFAULTS, opts);
    this.$el = $(el);

    this.scroll = new scrollTo.ScrollTo({
      dest: this.opts.dest,
      speed: this.opts.speed
    })

    // 判断执行方式
    if (this.opts.mode === 'move') {
      this.$el.on('click', $.proxy(this._move, this));
    } else {
      this.$el.on('click', $.proxy(this._go, this));
    }

    $(window).on('scroll', $.proxy(this._checkPos, this));
    this._checkPos();
  }

  BackTop.DEFAULTS = {
    mode: 'move',
    pos: $(window).height(),
    dest: 0,
    speed: 800
  }

  BackTop.prototype = {
    _move: function () {
      this.scroll.move();
    },
    _go: function () {
      this.scroll.go();
    },
    _checkPos: function () {
      var $el = this.$el;
      if ($(window).scrollTop() > this.opts.pos) {
        $el.css('display', 'block');
      } else {
        $el.css('display', 'none');
      }
    }
  }
  
  // 注册为 jq 方法
  $.fn.extend({
    backtop: function (opts) {
      return this.each(function () {
        new BackTop(this, opts);
      });
    }
  })

  // 返回实例
  return {
    BackTop: BackTop
  }
});