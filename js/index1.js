


var btn = document.getElementById('btn');
// btn.onclick = function () {
//   alert(123);
// }

btn.addEventListener('click', function () {
  console.log(event.currentTarget === this);
}, false)


// 跨浏览器的事件监听 兼容
var eventUtil = {
  addHandler: function (element, eventType, handler) {
    if (element.addEventListener) {
      element.addEventListener(eventType, handler, false);
    } else if (element.attachEvent) {
      element.attatchEvent('on' + eventType, handler);
    } else {
      element['on' + eventType] = handler;
    }
  },

  removeHandler: function (element, eventType, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(eventType, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent('on' + eventType, handler);
    } else {
      element['on' + eventType] = null;
    }
  }
}


