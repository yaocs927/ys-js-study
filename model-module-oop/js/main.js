// main.js
require.config({
  paths: {
    jquery: './jquery.min'
  }
})

require(['jquery', 'window'], function ($, w) {
  $('#btn').on('click', function () {
    var win = new w.Window();
    win.alert({
      title: '消息',
      content: '新的弹窗',
      text4ConfirmBtn: 'OK',
      // handler4ConfirmBtn: function () {
      //   alert('1确定按钮!')
      // },
      // handler4CloseBtn: function () {
      //   alert('1关闭按钮!')
      // },
      width: 400,
      height: 250,
      y: 60,
      hasCloseBtn: true,
      // skinClassName: 'window_a'
    });
    win.on('confirm', function () {
      alert('2确定按钮!')
    })
    // win.on('confirm', function () {
    //   alert('3确定按钮!')
    // })
  });
});