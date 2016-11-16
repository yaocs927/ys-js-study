var aaa = [12, 43, 56, 76];
var bbb = 43;

for (var i = 0; i < aaa.length; i++) {
  var num = aaa.indexOf(bbb);
  if (aaa[i] === bbb && num > -1) {
    aaa.splice(num, 1);
    console.log(aaa);
  }
}
