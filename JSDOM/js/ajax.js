// IE7 之前版本 ajax
// function createXHR() {
//   if (typeof arguments.callee.activeXString != 'string') {
//     var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'],
//       i, len;
//     for (i = 0, len = versions.length; i < len; i++) {
//       try {
//         new ActiveXObject(versions[i]);
//         arguments.callee.activeXString = versions[i];
//         break;
//       } catch (ex) {
//         // 跳过
//       }
//     }
//   }
//   return new ActiveXObject(arguments.callee.activeXString);
// }

// IE7 及更高版本
function createXHR() {
  if (typeof XMLHttpRequest != 'undefined') {
    return new XMLHttpRequest();
  } else if (typeof ActiveXObject != 'undefined') {
    if (typeof arguments.callee.activeXString != 'string') {
      var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'],
        i, len;
      for (i = 0, len = versions.length; i < len; i++) {
        try {
          new ActiveXObject(versions[i]);
          arguments.callee.activeXString = versions[i];
          break;
        } catch (ex) {
          // 跳过
        }
      }
    }
    return new ActiveXObject(arguments.callee.activeXString);
  } else {
    throw new Error('No XHR object available.');
  }
}

// 在URL后添加参数
function addURLParam(url, name, value) {
  url += (url.indexof('?') == -1 ? '?' : '&');
  url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
  return url;
}

var url = addURLParam('example.php', 'name', 'Nicholas');
url = addURLParam(url, 'book', 'Professional');
var xhr = createXHR();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
      alert(xhr.responseText);
    } else {
      alert('错误码：' + xhr.status);
    }
  }
}
xhr.open('GET', url, true);
xhr.setRequestHeader('MyHeader', 'MyValue');
xhr.send(null);