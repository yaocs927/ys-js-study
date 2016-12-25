define(['jquery'], function ($) {
  function ScrollTo(el, opts) {
    this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
    this.$el = $(el);
    this._checkPos();

    if (this.opts.mode === 'move') {
      this.$el.on('click', $.proxy(this._move, this));
    } else {
      this.$el.on('click', $.proxy(this._go, this));
    }

    $(window).on('scroll', $.proxy(this._checkPos, this));
  }

  ScrollTo.DEFAULTS = {
    mode: 'move',
    pos: 0,
    speed: 500,
    showPos: $(window).height()
  };

  ScrollTo.prototype = {

    _move: function () {
      var opts = this.opts;
      if ($(window).scrollTop() != opts.pos) {
        if (!$('html,body').is(':animated')) {
          $('html,body').animate({
            scrollTop: opts.pos
          }, opts.speed);
        }
      }
    },

    _go: function () {
      var opts = this.opts;
      if ($(window).scrollTop != opts.pos) {
        $('html.body').scrollTop(opts.pos);
      }
    },

    _checkPos: function () {
      var $el = this.$el;
      var opts = this.opts;
      if ($(window).scrollTop() > opts.showPos) {
        $el.css('display', 'block')
      } else {
        $el.css('display', 'none')
      }
    }
  };

  $.fn.extend({
    scrollto: function (opts) {
      return this.each(function () {
        new ScrollTo(this, opts)
      })
    }
  })

  return {
    ScrollTo: ScrollTo
  }
})