function displayAbbreviations() {
  // 取得所有 abbr
  var abbrList = document.getElementsByTagName('abbr');
  if (abbrList.length < 1) return false;
  var defs = [];
  // 遍历 abbr 列表，并添加到数值
  for (var i = 0; i < abbrList.length; i++) {
    var current_abbr = abbrList[i];
    var definition = current_abbr.getAttribute('title');
    var key = current_abbr.lastChild.nodeValue;
    defs[key] = definition;
  }
  // 创建列表
  var dlist = document.createElement('dl');
  for (key in defs) { // 遍历
    if (defs.hasOwnProperty(key)) {
      var definition = defs[key];

      var dtitle = document.createElement('dt');
      var dtitle_text = document.createTextNode(key);
      dtitle.appendChild(dtitle_text);

      var dcontent = document.createElement('dd');
      var dcontent_text = document.createTextNode(definition);
      dcontent.appendChild(dcontent_text);

      dlist.appendChild(dtitle);
      dlist.appendChild(dcontent);
    }
  }
  // 添加到文档
  var header = document.createElement('h2');
  var header_text = document.createTextNode('Abbreviations');
  header.appendChild(header_text);
  document.body.appendChild(header);
  document.body.appendChild(dlist);
}

function displayCitations() {
  var quotes = document.getElementsByTagName('blockquote');
  for (var i = 0; i < quotes.length; i++) {
    var current_quote = quotes[i];
    if (!current_quote.getAttribute('cite')) continue;
    var url = current_quote.getAttribute('cite');
    var quoteChildren = current_quote.getElementsByTagName('*');
    var elem = quoteChildren[quoteChildren.length - 1];
    console.log(elem);
    var link = document.createElement('a');
    link.setAttribute('href', url);
    var link_text = document.createTextNode('source');
    link.appendChild(link_text);
    var superscript = document.createElement('sup');
    superscript.appendChild(link);
    elem.appendChild(superscript);
    // insertAfter(superscript, elem);
  }
}

function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

// 获取相邻的下一个元素节点
function getNextElement(node) {
  if (node.nodeType == 1) {
    return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);
  }
  return null;
}

window.onload = function () {
  displayAbbreviations();
  displayCitations();
}