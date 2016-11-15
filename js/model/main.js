// main.js
require.config({
  paths: {
    jquery: './jquery.min'
  }
})

require(['jquery', 'window'], function ($, w) {
  $('#btn').on('click', function () {
    new w.Window().alert('Hello World');
  });
});