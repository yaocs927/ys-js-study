// main.js
require.config({
  paths: {
    jquery: 'jquery.min',
    PopUp: 'PopUp'
  }
})

require(['jquery', 'PopUp'], function ($, P) {
  $('#alertBtn').on('click', function () {
    new P.PopUp({
      mode: 'alert',
      width: 300,
      height: 150,
      contentText: 'Hello!',
      text4confirmBtn: 'OK',
      hasCloseBtn: true,
      hasSkinClassName: 'popup_skinA',
      handler4confirmBtn: function () {
        alert('点击了确定按钮');
      },
      handler4closeBtn: function () {
        alert('点击了右上角关闭按钮')
      }
    });
  })
})