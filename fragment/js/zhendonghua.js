'use strict';
var ele = document.getElementById('dh');
var positions = ['0 -854', '-174 -852', '-349 -852', '-524 -852', '-698 -852', '-872 -848'];
var url = 'img/rabbit-big.png';


function zhengAni(ele, position, url) {
  ele.style.backgroundImage = 'url(' + url + ')';
  ele.style.backgroundRepeat = 'no-repeat';

  var index = 0;

  function run() {
    var curPosition = position[index].split(' ');
    index++;
    ele.style.backgroundPosition = curPosition[0] + 'px ' + curPosition[1] + 'px';
    if (index >= position.length) index = 0;
    setTimeout(run, 100);
  }
  run();
}

window.onload = function () {
  zhengAni(ele, positions, url);
}