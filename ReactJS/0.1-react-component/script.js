"use strict";
var root = ReactDOM.createRoot(document.querySelector('.root'));

function App() {
  function Hallo(props) {
    // harus huruf besar di awal
    return /*#__PURE__*/React.createElement("p", null, "hallo ", props.name);
  } // lebih simple dan elegan dari pada tulis manual html 


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hallo, {
    name: "zedd"
  }), /*#__PURE__*/React.createElement(Hallo, {
    name: "Nyx"
  }), /*#__PURE__*/React.createElement(Hallo, {
    name: "there"
  }));
};

root.render( /*#__PURE__*/React.createElement(App, null));
