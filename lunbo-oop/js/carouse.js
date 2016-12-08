// 插件封装 
// 自执行函数
;
(function ($) {

  // 声明函数
  var Carousel = function (poster) {

    // 保存当前对象
    this.poster = poster;
    this.posterList = poster.find('.poster-list');
    this.posterBtn = poster.find('.poster-btn');
    this.posterItemFirst = this.posterList.find('li').eq(0);

    // 默认参数
    this.setting = {
      "width": 1000, // 容器宽
      "height": 270, // 容器高
      "posterWidth": 640, // 当前图的宽
      "posterHeight": 270, // 当前图的高
      "scale": 0.9,
      "speend": 500,
      "verticalAlign": "middle"
    };

    // 人工配置参数覆盖
    $.extend(this.setting, this.getSetting());

    // 样式初始化
    this.setSetting();
  };

  // 原型方法
  Carousel.prototype = {

    // 默认参数样式初始化
    setSetting: function () {
      var s_width = this.setting.width;
      var s_height = this.setting.height;
      var s_posterWidth = this.setting.posterWidth;
      var s_posterHeight = this.setting.posterHeight;
      this.poster.css({
        width: s_width,
        height: s_height
      });
      this.posterList.css({
        width: s_width,
        height: s_height
      });
      this.posterBtn.css({
        width: (s_width - s_posterWidth) / 2,
        height: s_height
      });
      this.posterItemFirst.css({
        left: (s_width - s_posterWidth) / 2
      })
    },

    // 获取人工配置参数
    getSetting: function () {
      var setting = this.poster.attr('data-setting');
      // 判断
      if (setting && setting != '') {
        return $.parseJSON(setting); // jq 写法
        // return JSON.parse(setting); // 原生写法
      } else {
        return {};
      }
    }
  };

  // 插件初始化 
  Carousel.init = function (posters) {
    var _this = this;
    posters.each(function () {
      new _this($(this));
    })
  }

  window['Carousel'] = Carousel;
})(jQuery);