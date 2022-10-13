"use strict";

// kita pengen membuat suatu kondisi yg dmna kondisi itu terpenuhi
// kita ingin render suatu component elemenet,
// kalo engga kita render component elemenet lain.
//
// contoh nya seperti login
//import { useEffect, useRef } from "react";
//import ReactDOM from "react-dom/client";
function App() {
  // manipukation DOM 
  // buat nya harus pas elememt di render 
  //

  /* ini cara biasa ada cara menggunakan carnya react yaitu useReff
   *
  React.useEffect( () => {
     let judul = document.querySelector('#judul');
     judul.textContent = "applikasi!"
  }, [] ); // [] supaya hanya di render 1x
  */
  // useReff 
  var judulRef = React.useRef(null); // set awal null dulu

  React.useEffect(function () {
    // kita pake set time out supaya keliatan perubahn mya
    setTimeout(function () {
      judulRef.current.textContent = "hallo from useReff";
    }, 2000);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Application"), /*#__PURE__*/React.createElement("h1", {
    ref: judulRef
  }, "using useRef"));
}

;
var root = ReactDOM.createRoot(document.querySelector('.root'));
root.render( /*#__PURE__*/React.createElement(App, null));
