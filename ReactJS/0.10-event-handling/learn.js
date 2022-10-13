"use strict";

function App() {
  // event handling / event listener
  function diLuar() {
    alert('hallo ');
  }

  function pakeParameter(msg) {
    alert(msg);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h4", null, "function di in line"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      alert('function dari inline');
    }
  }, "klik me"), /*#__PURE__*/React.createElement("h4", null, "function dari luar"), /*#__PURE__*/React.createElement("button", {
    onClick: diLuar
  }, "klik me"), /*#__PURE__*/React.createElement("h4", null, "function di luar tapi pake parameter"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      pakeParameter('hallo saya pake parameter');
    }
  }, "klik me"));
}

;
var root = ReactDOM.createRoot(document.querySelector('.root'));
root.render( /*#__PURE__*/React.createElement(App, null));
