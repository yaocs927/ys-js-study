function showPic(pic) {
  var source = pic.getAttribute('href');
  var Img = document.getElementById('Img');
  Img.setAttribute('src', source);
  var text = pic.getAttribute('title');
  var dText = document.getElementById('description');
  dText.firstChild.nodeValue = text;
}

function countBodyChildren() {
  var body_element = document.getElementsByTagName('body')[0];
  
}

var imgList = document.getElementById('imgList');
var imgLists = imgList.getElementsByTagName('li');
for (var i = 0; i < imgLists.length; i++) {
  var self = imgLists[i].getElementsByTagName('a')[0];
  self.onclick = function (e) {
    showPic(this);
    return false;
  }
}
