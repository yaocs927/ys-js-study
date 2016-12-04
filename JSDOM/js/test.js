window.onload = function () {
  var testDiv = document.getElementById('testDiv');
  var para = document.createElement('p');
  var cText = document.createTextNode('123');
  para.appendChild(cText);
  testDiv.appendChild(para);
}