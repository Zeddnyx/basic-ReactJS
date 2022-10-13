// lifecycle 
// memungkin kan kita mengeksekusi sebuah function, dmna waktu eksekusi nya
// pada saat element itu di render
//
// jadi pada saat element itu di render browser maka di situlah kita
// dapat melakukan sesuatu dengan menggunakan function js 
//
// memggunakan React.useEffect

const root = ReactDOM.createRoot(document.querySelector('.root'));

function App() {

   const [count, setCount] = React.useState(0);

   React.useEffect(() => {

      console.log(document.querySelector('.judul'))
      console.log(document.querySelector('#btn'));

      // destroy init carousel
      //  supaya tidak menumpuk di memeory
      return ()=> {
         console.log('destroy carousel')
      };
   });
   // }, [count] ); artinya hanya akan merender yg btn saja, hapus [count] nya jika ingin merender semua
   // gunakan empty array [] supaya tidak di render trus menerus ! 
   
   return (
      <>
         <h3 className="judul">Hello world</h3>

         <button id="btn" onClick={ () => {
            setCount(count +1);
         }}>Tambah</button>
         <h4>nilai anda : {count}</h4>
      </>
   );
};

root.render(<App />); // jika App di eksekusi makan useEffect akan di render

