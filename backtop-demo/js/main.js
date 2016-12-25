requirejs.config({
  paths: {
    jquery: './jquery.min',
    scrollTo: './scrollTo'
  }
})


requirejs(['jquery', 'scrollTo'], function ($, scrollTo) {
  // $('#backTop').scrollto({
  //   mode: 'move',
  //   pos: 1000,
  //   showPos: 100
  // })

  var a = new scrollTo.ScrollTo();
})