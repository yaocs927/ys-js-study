// 设置表格隔行不同背景色方法
function stripeTables(classname) {
  var tables = document.getElementsByTagName('table');
  var odd, rows;
  for (var i = 0; i < tables.length; i++) {
    odd = false;
    var element = tables[i];
    rows = element.getElementsByTagName('tr');
    for (var j = 0; j < rows.length; j++) {
      console.log(odd);
      var elem = rows[j];
      if (odd == true) {
        addClass(elem, classname)
        // elem.style.backgroundColor = 'red';
        odd = false;
      } else {
        odd = true;
      }
    }
  }
}

// 设置表格鼠标指向行改变样式
function highLightRows() {
  var rows = document.getElementsByTagName('tr');
  for (var i = 0; i < rows.length; i++) {
    var element = rows[i];
    element.onmouseover = function () {
      this.style.fontWeight = 'bold';
    }
    element.onmouseout = function () {
      this.style.fontWeight = 'normal';
    }
  }
}

// 添加 class 名
function addClass(element, value) {
  if (!element.className) {
    element.className = value;
  } else {
    var oldClassName = element.className;
    var newClassName = oldClassName + ' ';
    newClassName += value;
    element.className = newClassName;
  }
}

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

window.onload = function () {
  stripeTables('odd');
  displayAbbreviations();
  highLightRows();
}