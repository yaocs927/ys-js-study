window.onload = function () {
  if (!document.getElementsByTagName) return false;
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute('class') === 'popUp') {
      links[i].onclick = function () {
        popUp(this.getAttribute('href'));
        return false;
      }
    }
  }
}



function popUp(url) {
  window.open(url, 'popUp', 'width=320,height=480');
}