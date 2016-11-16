var ball = {
  x: 512,
  y: 100,
  r: 20,
  g: 2,
  vx: -4,
  vy: 0,
  color: '#058'
}

window.onload = function () {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  canvas.width = 1000;
  canvas.height = 500;
  canvas.style.border = '1px solid #bbb';

  setInterval(function () {
    render(context);
    update();
  }, 50);
}

function update() {
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy += ball.g;

  if (ball.y >= 500 - ball.r) {
    ball.y = 500 - ball.r;
    ball.vy = -ball.vy*.6;
  }
}

function render(cxt) {
  cxt.clearRect(0, 0, cxt.canvas.width, cxt.canvas.height);
  cxt.fillStyle = ball.color;
  cxt.beginPath();
  cxt.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
  cxt.closePath();
  cxt.fill();
}