// var aaa = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];

// var init = 0;
// var start = 0;
// var end = 5;
// var num = 5;
// for (var i = 0; i < aaa.slice(start, end).length; i++) {
//   var el = aaa[i];
//   $('#arrNum').append('<p>' + el + '</p>');
// }
// start = end;
// end = end + num;
// $(window).scroll(function () {
//     var srollPos = $(window).scrollTop();
//     console.log(srollPos)
//     var HH = $(document).height();
//     console.log(HH)
//     var HHH = $(window).height();
//     console.log(HHH)
//     if (HH - HHH == srollPos) {
//       var newArr = aaa.slice(start, end);
//       for (var j = 0; j < newArr.length; j++) {
//         var el1 = newArr[j];
//         $('#arrNum').append('<p>' + el1 + '</p>');
//       }
//       start = end;
//       end = end + num;
//       if (start > aaa.length) {
//         $('#arrNum').append('<p>no more</p>');

//       }
//     }
//   })


// $('#confirm').on('click', function () {
//   var newArr = aaa.slice(start, end);
//   for (var j = 0; j < newArr.length; j++) {
//     var el1 = newArr[j];
//     $('#arrNum').append('<p>' + el1 + '</p>');
//   }
//   start = end;
//   console.log(start);
//   end = end + num;
//   console.log(end)
//   if (start > aaa.length) {
//     console.log(aaa.length)
//     $('#arrNum').append('<p>no more</p>');
//   }
// });