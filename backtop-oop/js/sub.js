define(['jquery'], function (require, factory) {
  function ScrollTo(opts) {
    this.opts = $.$extend({}, ScrollTo.DEFAULTS, opts);
    this.$el = $('html, body');
  }
  ScrollTo.DEFAULTS = {
    dest: 0,
    speed: 800
  };
  ScrollTo.prototype = {
    move: function () {
      this.$el.animate({
        scrollTop: this.opts.dest
      }, this.opts.speed)
    },
    go: function () {
      this.$el.scrollTop(this.opts.dest)
    }
  };
  return {
    ScrollTo: ScrollTo
  }
});