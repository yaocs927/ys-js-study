function getNewContent() {
  var request = getHTTPObject();
  if (request) {
    request.open('GET', 'ajax.text', true);
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        // alert('123');
        var para = document.createElement('p');
        var text = document.createTextNode(request.responseText);
        para.appendChild(text);
        document.getElementById('new').appendChild(para);
      }
    }
    request.send(null);
  } else {
    alert('your browser doesn\'t support XMLHttpRequest');
  }
  // alert('466');
}

window.onload = getNewContent;