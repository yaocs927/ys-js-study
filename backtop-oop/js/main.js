// main.js
requirejs.config({
  paths: {
    jquery: 'jquery.min',
    scrollTo: 'sub'
  }
})

requirejs(['jquery', 'scrollTo'], function ($, scrollTo) {
  var scrollTop = new scrollTo.ScrollTo();
});