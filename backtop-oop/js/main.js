// main.js
requirejs.config({
  paths: {
    jquery: 'jquery.min',
    scrollTo: 'scrollto',
    backTop: 'backtop'
  }
})

requirejs(['jquery', 'backTop'], function ($, backTop) {
  // new backTop.BackTop($('#backTop'), {
  //   mode: 'go'
  // });

  $('#backTop').backtop({
    mode: 'go'
  });
});