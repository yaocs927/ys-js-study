var WINDOW_WIDTH = 1000;
var WINDOW_HEIGHT = 500;
var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

// var endTime = new Date(2016, 10, 15, 17, 00, 00); // 设置结束时间
var endTime = new Date(); // 设置结束时间
endTime.setTime(endTime.getTime() + 3600 * 1000);
var curShowTimeSeconds = 0;
var balls = [];
var colors = ['#33b5e5', '#09c', '#a6c', '#93c', '#9c0', '#690', '#fb3', '#f80', '#f44', '#c00']

window.onload = function () {

  // WINDOW_WIDTH = document.body.clientWidth
  // WINDOW_HEIGHT = document.body.clientHeight

  // MARGIN_LEFT = Math.round(WINDOW_WIDTH / 10);
  // RADIUS = Math.round(WINDOW_WIDTH * 4 / 5 / 108) - 1

  // MARGIN_TOP = Math.round(WINDOW_HEIGHT / 5);

  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;

  curShowTimeSeconds = getCurShowTimeSeconds(); // 获取当前倒计时时长秒数

  // 自动倒计时
  setInterval(function () {
    timer(context);
    update();
  }, 50)
}

// 获取当前倒计时时长秒数
function getCurShowTimeSeconds() {
  var curTime = new Date();
  var ret = endTime.getTime() - curTime.getTime();
  ret = Math.round(ret / 1000);
  return ret >= 0 ? ret : 0;

  // var ret = curTime.getHours() * 3600 + curTime.getMinutes() * 60 + curTime.getSeconds();
  // return ret;
}

// 更新时间
function update() {
  var nextShowTimeSeconds = getCurShowTimeSeconds();

  var nextHour = parseInt(nextShowTimeSeconds / 3600);
  var nextMinute = parseInt((nextShowTimeSeconds - nextHour * 3600) / 60);
  var nextSecond = nextShowTimeSeconds % 60;

  var curHour = parseInt(curShowTimeSeconds / 3600);
  var curMinute = parseInt((curShowTimeSeconds - curHour * 3600) / 60);
  var curSecond = curShowTimeSeconds % 60;

  if (nextSecond != curSecond) {
    if (parseInt(nextHour / 10) != parseInt(curHour / 10)) {
      addBalls(MARGIN_LEFT, MARGIN_TOP, parseInt(curHour / 10))
    }
    if (parseInt(nextHour % 10) != parseInt(curHour % 10)) {
      addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(curHour % 10))
    }
    if (parseInt(nextMinute / 10) != parseInt(curMinute / 10)) {
      addBalls(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(curMinute / 10))
    }
    if (parseInt(nextMinute % 10) != parseInt(curMinute % 10)) {
      addBalls(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(curMinute % 10))
    }
    if (parseInt(nextSecond / 10) != parseInt(curSecond / 10)) {
      addBalls(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(curSecond / 10))
    }
    if (parseInt(nextSecond % 10) != parseInt(curSecond % 10)) {
      addBalls(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(curSecond % 10))
    }
    curShowTimeSeconds = nextShowTimeSeconds;
  }

  updateBalls();
}

// 小球落
function updateBalls() {
  for (var i = 0; i < balls.length; i++) {
    var curBall = balls[i];
    curBall.x += curBall.vx;
    curBall.y += curBall.vy;
    curBall.vy += curBall.g;

    if (curBall.y >= WINDOW_HEIGHT - RADIUS) {
      curBall.y = WINDOW_HEIGHT - RADIUS;
      curBall.vy = -curBall.vy * 0.7;
    }
  }

  var cnt = 0
  for (var i = 0; i < balls.length; i++)
    if (balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH)
      balls[cnt++] = balls[i]

  while (balls.length > cnt) {
    balls.pop();
  }
}

// 画小球
function addBalls(x, y, num) {
  for (var i = 0; i < digit[num].length; i++) {
    for (var j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] === 1) {
        var aball = {
          x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          g: 1.5 + Math.random(),
          vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
          vy: -5,
          color: colors[Math.floor(Math.random() * colors.length)]
        }
        balls.push(aball);
      }
    }
  }
}

// 设置时间
function timer(cxt) {

  cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT); // 刷新画布
  var hour = parseInt(curShowTimeSeconds / 3600);
  var minute = parseInt((curShowTimeSeconds - hour * 3600) / 60);
  var second = curShowTimeSeconds % 60;

  drawDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hour / 10), cxt);
  drawDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hour % 10), cxt);
  drawDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
  drawDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minute / 10), cxt);
  drawDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minute % 10), cxt);
  drawDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
  drawDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(second / 10), cxt);
  drawDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(second % 10), cxt);

  for (var i = 0; i < balls.length; i++) {
    var curBall = balls[i];
    cxt.fillStyle = curBall.color;
    cxt.beginPath();
    cxt.arc(curBall.x, curBall.y, RADIUS, 0, 2 * Math.PI);
    cxt.closePath();
    cxt.fill();
  }
}

// 画圆
function drawDigit(x, y, num, cxt) {
  cxt.fillStyle = 'blue';
  for (var i = 0; i < digit[num].length; i++) {
    for (var j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] === 1) {
        cxt.beginPath();
        // 当前点的圆心 X 坐标 x + j*2*(r+1) + (r+1)
        // 当前点的圆心 Y 坐标 y + i*2*(r+1) + (r+1)
        cxt.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + (RADIUS + 1), RADIUS, 0, 2 * Math.PI);
        cxt.closePath();
        cxt.fill();
      }
    }
  }
}