function App() {
  // event handling / event listener
  
  function diLuar() {
    alert('hallo ');
  }

  function pakeParameter(msg) {
    alert(msg);
  }

  return (
    <>
       <h4>function di in line</h4>
       <button onClick={() => { 
       alert('function dari inline')}}>klik me</button>

       <h4>function dari luar</h4>
       <button onClick={diLuar}>klik me</button>

       <h4>function di luar tapi pake parameter</h4>
       <button onClick={() => {
         pakeParameter('hallo saya pake parameter')
       }}>klik me</button>
       
       
    </>
  )
};

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<App />);
