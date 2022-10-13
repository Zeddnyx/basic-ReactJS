function App() {
  //styling di react 
  //harus pake double courli bracess {{}}
  //
  // tapi ini tidak efeisien 
  // ini di gunakan untuk contoh ngambil clasd nya dari api atau condition
  // if else atau dll
  return (
    <>
       <div style={{
         width: '200px',
         height: '200px',
         backgroundColor: "#159"
       }}></div>
    </>
  )
};

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<App />);
