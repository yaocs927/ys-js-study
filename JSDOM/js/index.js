function showPic(pic) {
  var source = pic.getAttribute('href');
  var Img = document.getElementById('Img');
  Img.setAttribute('src', source);
  var text = pic.getAttribute('title');
  var dText = document.getElementById('description');
  dText.firstChild.nodeValue = text;
}

function prepareGallery() {
  var imgList = document.getElementById('imgList');
  var imgLists = imgList.getElementsByTagName('li');
  for (var i = 0; i < imgLists.length; i++) {
    var self = imgLists[i].getElementsByTagName('a')[0];
    self.onclick = function (e) {
      showPic(this);
      return false;
    }
  }
}

// 建立照片展示盒子
function createBox() {
  var placeholder = document.createElement('img');
  placeholder.setAttribute('id', 'Img');
  placeholder.setAttribute('src', 'img/1.jpg');
  placeholder.setAttribute('alt', 'tihuan1111');
  var description = document.createElement('p');
  var pText = document.createTextNode('1');
  description.setAttribute('id', 'description');
  description.appendChild(pText);
  var imgList = document.getElementById('imgList');
  insertAfter(placeholder, imgList);
  insertAfter(description, placeholder);
}

// 原生 js 在某个节点后插入新节点
function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

// window.onload = function () {
//   prepareGallery();
// }

// 监听页面加载完执行 js
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

addLoadEvent(prepareGallery);
addLoadEvent(createBox);
