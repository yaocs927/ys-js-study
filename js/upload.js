var handler = {
  init: function ($container) {
    // 禁掉 dragover 的默认行为
    $container.on('dragover', function (event) {
      event.preventDefault();
    });
    $container.on('drag', function (event) {
      // 禁掉 drag 的默认行为
      event.preventDefault();
      // 获得文件
      var file = event.originEvent.dataTransfer.file[0];
      handler.handleDrop($(this), file);
    });
    $container.on('change', 'input[type=file]', function () {
      if (!this.value) return;
      var file = this.file[0];
      handler.handleDrop($(this).closest('.container'), file);
    });
  },
  handleDrop: function ($container, file) {
    var $img = $container.find('img');
    handler.readImgFile(file, $img, $container);
  },
  readImgFile: function (file, $img, $container) {
    EXIF.getData(file, function () {
      var orientation = this.exifdata.Orientation,
        rotateDeg = 0;
      //如果不是ios拍的照片或者是横拍的，则不用处理，直接读取
      if (typeof orientation === "undefined" || orientation === 1) {
        //原本的readImgFile，添加一个rotateDeg的参数
        handler.doReadImgFile(file, $img, $container, rotateDeg);
      }
      //否则用canvas旋转一下
      else {
        rotateDeg = orientation === 6 ? 90 * Math.PI / 180 :
          orientation === 8 ? -90 * Math.PI / 180 :
          orientation === 3 ? 180 * Math.PI / 180 : 0;
        handler.doReadImgFile(file, $img, $container, rotateDeg);
      }
    });
    var reader = new FileReader(file);
    // 检验
    if (file.type.split('/')[0] !== 'image') {
      util.toast('你需要选择图片');
      return;
    }
    reader.onload = function (event) {
      var base64 = event.target.result;
      handler.compressAndUpLoad($img, base64, file, $container);
    }
    reader.readAsDataURL(file);
  }
}