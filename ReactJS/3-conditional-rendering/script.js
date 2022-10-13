"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// kita pengen membuat suatu kondisi yg dmna kondisi itu terpenuhi
// kita ingin render suatu component elemenet,
// kalo engga kita render component elemenet lain.
//
// contoh nya seperti login
var root = ReactDOM.createRoot(document.querySelector('.root'));

function App() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      login = _React$useState2[0],
      setLogin = _React$useState2[1];
  /*
  if(login) {
     return <h1> Mantafff udah login </h1>;
  };
   return (
     <>
        <h1>Login dulu bang!!</h1>
         <button onClick={ () => {
           setLogin(true);
        }}> Login </button>
     </>
  );
     bisa juga sepeti di bawah ini
  */


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Application"), /*#__PURE__*/React.createElement("p", null, login ? /*#__PURE__*/React.createElement("b", null, "kamu sudah login") : 'kamu belum login'), "// artinya if login = true // ? = jalankan 'kamu sudah login' //  : = else 'kamu belum login // //  bisa juga memasukan elemenet html di sela2 seperti di atas // //  ", /*#__PURE__*/React.createElement("p", null, login && /*#__PURE__*/React.createElement("b", null, "kamu sudah login")), "//  jika tidak ingin pake else //", /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setLogin(true);
    }
  }, " Login "));
}

;
root.render( /*#__PURE__*/React.createElement(App, null));
