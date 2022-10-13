// kita pengen membuat suatu kondisi yg dmna kondisi itu terpenuhi
// kita ingin render suatu component elemenet,
// kalo engga kita render component elemenet lain.
//
// contoh nya seperti login

const root = ReactDOM.createRoot(document.querySelector('.root'));

function App() {

   const [login, setLogin] = React.useState(false);

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

   return (
      <>
          <h1>Application</h1>
          <p>{login ? <b>kamu sudah login</b> : 'kamu belum login'}</p>
          //  artinya if login = true
          // ? = jalankan 'kamu sudah login' 
          //  : = else 'kamu belum login 
      //
      //  bisa juga memasukan elemenet html di sela2 seperti di atas
      //
      //  <p>{login && <b>kamu sudah login</b>}</p>
      //  jika tidak ingin pake else
      // 

          <button onClick={ () => {
              setLogin(true);
          }}> Login </button>
      </>
   );
};

root.render(<App />);
