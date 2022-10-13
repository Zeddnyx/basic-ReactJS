"use strict";

function App() {
  //styling di react 
  //harus pake double courli bracess {{}}
  //
  // tapi ini tidak efeisien 
  // ini di gunakan untuk contoh ngambil clasd nya dari api atau condition
  // if else atau dll
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '200px',
      height: '200px',
      backgroundColor: "#159"
    }
  }));
}

;
var root = ReactDOM.createRoot(document.querySelector('.root'));
root.render( /*#__PURE__*/React.createElement(App, null));
