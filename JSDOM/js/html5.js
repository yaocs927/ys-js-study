window.onload = function () {
  var draw = document.getElementById('draw');
  var ctx = draw.getContext('2d');
  ctx.moveTo(10, 10);
  ctx.lineTo(100, 10);
  ctx.lineTo(100, 40);
  ctx.lineTo(10, 40);
  ctx.lineTo(10, 10);
  ctx.strokeStyle = 'rgb(0,0,0)';
  ctx.lineWidth = 5;
  ctx.fillStyle = 'rgb(255,255,0)'
  ctx.fill();
  ctx.stroke();



  createVideoControls();
}

function createVideoControls() {
  var vids = document.getElementsByTagName('video');
  for (var i = 0; i < vids.length; i++) {
    var element = vids[i];
    addControls(element);
  }
}

function addControls(vid) {
  vid.removeAttribute('controls');
  vid.height = vid.videoHeight;
  vid.width = vid.videoWidth;
  vid.parentNode.style.height = vid.videoHeight + 'px';
  vid.parentNode.style.width = vid.videoHeight + 'px';
  var controls = document.createElement('div');
  controls.setAttribute('class', 'controls');
  var play = document.createElement('button');
  play.setAttribute('title', 'play');
  play.innerHTML = '&#x25BA;';
  controls.appendChild(play);
}