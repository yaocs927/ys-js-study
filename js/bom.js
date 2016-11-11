window.onload = function () {
  var iHref = 'http://m.baichanghui.com/list/?city=123&searchType=456&geo=789';
  var iiHref = iHref.substring(iHref.indexOf('?') + 1);

  var args = {},
    items = iiHref.length ? iiHref.split('&') : [],
    item = null,
    name = null,
    value = null,
    len = items.length;

  for (var i = 0; i < len; i++) {
    item = items[i].split('=');
    name = item[0];
    value = item[1];
    if (name.length) {
      args[name] = value;

    }
  }
  console.log(args);
  // return args;



  var pp = document.getElementsByTagName('p');
  console.log(pp.namedItem('myPP'))
}