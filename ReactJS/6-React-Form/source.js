
function App() {

// ada 2 cara 
   // unControl component
   // control compomemt ( lebih di sarankan )


   /*
   // unControl ////////////////////
   let nRef = React.useRef(null);

   function submit(event) {
      event.preventDefault(); // kenapa memakai event?
      // karena supaya pas di submit tidak action ke halaman lain/reload
      // kalo tidak pake event console nya tidak akan terlihat 

      const nama = nRef.current.value;

      console.log('Nama : ', nama)
   };
   // ini akan mengambil value dsri input dan di console


   return (
      <>
        <form onSubmit={submit}> UnControl
          <div>
            <label>Nama :</label>
            <input type="text" name="nama" ref={nRef} />
          </div>
          <button type="submit" >Submit</button>
        </form>
      </>
   ); 
   */


   // Contfol component //////
   // menggunakan useState 
   //

   const [nama, setNama] = React.useState('');

   function submit(event) {
      event.preventDefault();
      
      console.log('Nama : ', nama)
   };

   return (
      <>
        <form onSubmit={submit}>

          <div>
            <label>nama </label>

            <input 
            type="text" 
            name="nama"
            value={nama}
            onChange={ event => { setNama(event.target.value);
            }}/>
          </div>

          <button type="submit">submit</button>

        </form>
      </>
   );

};

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<App />);
