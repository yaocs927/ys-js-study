function positionMessage() {
  if (!document.getElementById('message')) return false;
  var elem = document.getElementById('message');
  elem.style.position = 'absolute';
  elem.style.left = '50px';
  elem.style.top = '50px';
  moveElement('message', 300, 150, 20);
}

function moveMessage() {
  var elem = document.getElementById('message');
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == 200 && ypos == 100) {
    return true;
  }
  if (xpos < 200) {
    xpos++;
  }
  if (xpos > 200) {
    xpos--;
  }
  if (ypos < 100) {
    ypos++;
  }
  if (ypos > 100) {
    ypos--;
  }
  elem.style.left = xpos + 'px';
  elem.style.top = ypos + 'px';
  var t = setTimeout('moveMessage()', 10);
}

function moveElement(elementID, final_x, final_y, interval) {
  var elem = document.getElementById(elementID);
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == final_x && ypos == final_y) {
    return true;
  }
  if (xpos < final_x) {
    xpos++;
  }
  if (xpos > final_x) {
    xpos--;
  }
  if (ypos < final_y) {
    ypos++;
  }
  if (ypos > final_y) {
    ypos--;
  }
  elem.style.left = xpos + 'px';
  elem.style.top = ypos + 'px';
  var repeat = 'moveElement("' + elementID + '", "' + final_x + '", "' + final_y + '", "' + interval + '")'
  var movement = setTimeout(repeat, interval);
}

window.onload = function () {
  positionMessage();
  // moveElement('message', 300, 150, 20);
}