
const root = ReactDOM.createRoot(document.querySelector('.root'));

function App() {
   // manipukation DOM 
   // buat nya harus pas elememt di render 
   React.useEffect( () => {
      let judul = document.querySelector('#judul');
      judul.textContent = "applikasi!"
   }, [] ); // [] supaya hanya di render 1x



   return (
      <>
          <h1 id="judul">Application</h1>
      </>
   );
};

root.render(<App />);
