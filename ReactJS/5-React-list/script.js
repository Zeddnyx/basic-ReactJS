"use strict";

// list 
// di react kita bisa membuat list lebih dynamis lagi
// kita bisa bikin nya dari array, api, dll
function App() {
  // contoh bikin list menggunakan array
  var fruits = ["apple", "grape", "manggo"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, fruits.map(function (fruits) {
    return /*#__PURE__*/React.createElement("li", {
      key: fruits
    }, " ", fruits);
  }), "// kenapa pake map ngga pake forEach? // karna forEach tidak bisa me return kalo map bisa //  harus di kasih unique key supaya gk error di console nya"));
}

;
var root = ReactDOM.createRoot(document.querySelector('.root'));
root.render( /*#__PURE__*/React.createElement(App, null));
