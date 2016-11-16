'use strit';

// 第四章
// function createPerson(name) {
//   console.log(name);
//   var localPerson = new Object();
//   localPerson.name = name;
//   return localPerson;
// }
// var globalPerson = createPerson('Nicholas');
// var result = globalPerson instanceof Array;
// var result1 = typeof globalPerson;

// console.log(result1);

// 第五章
var one = {
  aaa: '1',
  bbb: '2',
  ccc: '3s'
}

var two = [35, 345, 24, 658, 235]
two.push(6984);
// function compare(value1, value2) {
//   if (value1 > value2) {
//     return 1;
//   } else if (value1 < value2) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

function compare(value1, value2) {
  return value2 - value1;
}
var twoC = two.sort(compare);


var array = ['push', 'pop', 'sort', 'shift', 'unshift', 'concat', 'slice', 'splice']
/**
 *数组的方法
 *push 往数组结尾处推入新值；原数组操作
 *pop 移除数组最后一项；原数组操作
 *sort 排序（可使用方法参数）；
 *shift 移除数组第一项；原数组操作
 *unshift 往数组头部添加任意项新值；原数组操作
 *concat 带参数时合并原数组，形成新数组；形成新数组
 *slice 获取数组中的某段（起始位置索引，结束位置索引-1）；形成新数组
 *splice 删除||添加 || 删除&&添加（删除/添加起始位置索引，个数，新值）
 */

var colors = ['red', 'orange', 'yellow', 'green'];
// colors.push('blue');  //原数组操作
// var addColors = colors.pop()； //原数组操作
// var addColors = colors.shift(); //原数组操作
// var addColors = colors.unshift('1','2'); //原数组操作
// var addColors = colors.concat('blue'); //形成新数组
// var addColors = colors.slice(1, 2); //形成新数组
// console.log(addColors);


var now = Date.now();
console.log(now);