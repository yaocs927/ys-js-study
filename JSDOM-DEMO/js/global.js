// 页面加载完执行函数
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    }
  }
}

// 在元素后插入新节点
function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

// 追加 class 名
function addClass(element, value) {
  if (!element.className) {
    element.className = value
  } else {
    var oldClassName = element.className;
    var newClassName = oldClassName + ' ';
    newClassName += value;
    element.className = newClassName;
  }
}