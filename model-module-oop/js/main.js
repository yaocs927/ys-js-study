// main.js
require.config({
  paths: {
    jquery: 'jquery.min',
    PopUp: 'PopUp',
    jqueryUI: 'http://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.min'
  }
})

require(['jquery', 'PopUp'], function ($, P) {
  $('#alertBtn').on('click', function () {
    var np = new P.PopUp({
      mode: 'alert',
      width: 300,
      height: 150,
      y: 100,
      contentText: 'Hello!',
      text4confirmBtn: 'OK',
      hasCloseBtn: true,
      dragHandle: '.popup_header',
      handler4confirmBtn: function () {
        alert('点击了确定按钮');
      },
      handler4closeBtn: function () {
        alert('点击了右上角关闭按钮');
      }
    });

    np.on('confirm', function () {
      alert('第二个确定');
      });
    np.on('confirm', function () {
      alert('第三个确定');
      });
  })
})