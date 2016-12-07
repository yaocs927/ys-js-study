/*
=============
原生数组方法
=============
*/

// 1 //
// 连接两个或更多的数组，并返回结果 { 不改变原数组 }
// arr1.concat(arr2, arr3, arr4, ...,arrX) --返回数组--
var a = ['aa', 'ab', 'ac'];
var b = ['ba', 'bb', 'bc'];
var c = ['ca', 'cb', 'cc'];
var d = a.concat(b, c); // ['aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc']

// 2 //
// 检测数组元素的每个元素是否都符合条件 { 不改变原数组，不检测空数组 }
// arr.every(func(curVal,index,arr), thisValue) --返回布尔值--
var e = [20, 15, 2, 13];
function checkResult(cur) { // cur 为数组当前项
  return cur >= 10 // 检测是否都大于等于 10
}
var f = e.every(checkResult); // false

// 3 //
// 检测数组元素，并返回符合条件所有元素的数组 { 不改变原数组，不检测空数组 }
// arr.filter(func(curVal,index,arr), thisValue) --返回符合条件的数组元素的数组--
var g = e.filter(checkResult); // [20, 15, 13]

// 4 //
// 搜索数组中的元素，并返回它首次出现所在的位置
// arr.indexOf(item.strat) --返回索引， 返回 -1 数组中不存在该元素--
var h = e.indexOf(2); // 2

// 5 //
// 把数组的所有元素放入一个字符串
// arr.join(separator) separator 可设置分隔符 --返回字符串--
var i = e.join(); // 20,15,2,13

// 6 //
// 搜索数组中的元素，并返回它最后出现所在的位置
// arr.lastIndexOf(item.strat) --返回索引， 返回 -1 数组中不存在该元素--
var j = e.lastIndexOf(2); // 2

// 7 //
// 通过指定函数处理数组的每个元素，并返回处理后的数组 { 不改变原数组，不检测空数组 }
// arr.map(func(curVal,index,arr), thisValue) --返回数组，包含每个处理结果--
function checkResult1(cur) {
  return cur * 10;
}
var k = e.map(checkResult); // [true, true, false, true]
var l = e.map(checkResult1); // [200, 150, 20, 130]

// 8 //
// 删除数组的最后一个元素并返回删除的元素 { 改变原数组 }
// arr.pop() --返回字符串--
var m = a.pop(); // ac
// console.log(a) // ['aa', 'ab']

// 9 //
// 向数组的末尾添加一个或更多元素 { 改变原数组 }
// arr.push(item1,item2,...,itemX) --返回新的数组长度--
var n = a.push('ad', 'ae'); // 4
// console.log(a) // ["aa", "ab", "ad", "ae"]

// 10 //
// 反转数组的元素顺序 { 改变原数组 }
// arr.reverse() --返回数组--
var o = b.reverse(); // ["bc", "bb", "ba"]
// console.log(b); // ["bc", "bb", "ba"]

// 11 //
// 删除并返回数组的第一个元素 { 改变原数组 }
// arr.shift() --返回字符串--
var p = c.shift(); // ca
// console.log(c); // ["cb", "cc"]

// 12 //
// 向数组的开头添加一个或更多元素，并返回新的长度 { 改变原数组 }
// arr.unshift() --返回字符串--
var q = c.unshift('cd', 'ce'); // 4
// console.log(c); // ["cd", "ce", "cb", "cc"]

// 13 //
// 选取数组的的一部分 { 不改变原数组 }
// arr.slice(start, end) 索引值，不包括 end    --返回一个新数组--
var r = b.slice(1); // ['bb', 'ba']
r = b.slice(0, 2); // ['bc', 'bb'];

// 14 //
// 插入、删除或替换数组的元素 { 改变原数组 }
// arr.splice(start, length, item1, item2,...,itemX) --返回删除的数组/未删除返回空数组--
var s1 = ['sa', 'sb', 'sc', 'sd'];
var s2 = ['sa', 'sb', 'sc', 'sd'];
var s3 = ['sa', 'sb', 'sc', 'sd'];
var s4 = ['sa', 'sb', 'sc', 'sd'];
var t = s1.splice(1); // ["sb", "sc", "sd"]  // s1 = ['sa']
t = s2.splice(1, 2); // ['sb', 'sc']  // s2 = ['sa', 'sd']
t = s3.splice(1, 0, 'sbb', 'scc'); // []  // s3 = ['sa', 'sbb', 'scc', 'sb', 'sc', 'sd']

// 15 //
// 检测数组元素中是否有元素符合指定条件,有一个满足条件即返回 true { 不改变原数组，不检测空数组 }
// arr.some(func(curVal, index, arr), thisValue) --返回布尔值--
var u = e.some(checkResult); // true

// 16 //
// 对数组元素进行排序 { 改变原数组 }
// arr.sort(func) --返回数组--
var v = e.sort(
  function (a, b) {
    return a - b;
  }
) // [2, 13, 15, 20]
// console.log(e); // [2, 13, 15, 20]

// 17 //
// 把数组转换为字符串
// arr.toString() --返回字符串,以逗号隔开--
var w = e.toString(); // 2,13,15,20

// 18 //
// 返回数组对象的原始值 { 不改变原数组 }
// arr.vauleOf() --一般 JS 后台调用--


/*
=============
原生对象方法
=============
*/













// arr.concat() 
// arr.join()
// arr.toString()
// arr.indexOf()
// arr.lastIndexOf()
// arr.pop()
// arr.push()
// arr.reverse()
// arr.shift()
// arr.unshift()
// arr.every()
// arr.filter()
// arr.map()
// arr.some()
// arr.slice()
// arr.splice()
// arr.sort()
// arr.valueOf()

window.onload = function () {
  var ses = getElementsByClassName('asd');
  var elem = document.getElementsByTagName('div');
  for (var i = 0; i < elem.length; i++){
    // elem[i].onclick = function () {
    //   var text = this.lastChild.nodeValue;
    //   console.log(text);
    // }
    (function (w) { 
      elem[w].onclick = function () {
        console.log(w);
      }
    })(i)
  }
}


function getElementsByClassName(className) {
  if (!document.getElementsByClassName) {
    var elems = [];
    var dom = document.getElementsByTagName('*');
    for (i = 0; i < dom.length; i++){
      if (dom[i].className === className) {
        elems.push(dom[i]);
      }
    }
  } else {
    var elems = document.getElementsByClassName(className);
  }
  return elems;
}