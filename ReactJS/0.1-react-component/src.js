var root = ReactDOM.createRoot(document.querySelector('.root'));

function App() {

   function Hallo(props) { // harus huruf besar di awal
      return <p>hallo {props.name}</p>
   }

   // lebih simple dan elegan dari pada tulis manual html 
   return (
      <>
        <Hallo name="zedd" />
        <Hallo name="Nyx" />
        <Hallo name="there" />
      </>
   );
}

root.render(<App />);
