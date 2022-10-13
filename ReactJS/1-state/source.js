const root = ReactDOM.createRoot(document.querySelector('.root'));



function App() {
   const state = React.useState(1);
   // state nilai nya  adalah aray
   // 1 adalah value state nya useState adalah function buat mengupdate nya

   const count = state[0]; // kita ambil nilai array dari state yaitu 1
   let update = state[1]; // kenapa 1? karena supaya bisa di ubah kerna ini function

   // ada cara lebih simple nya 
   const [count, update] = React.useState(1);
   return (
      <>
          <button onClick= {function() {
             update( count -1); // kenapa bisa pake (), karena array yg ke 1 dari useState itu function!!!
          }} >-</button>

          <span>{count}</span>

          <button onClick= {function() {
             update( count +1);
          }} >+</button>
      </>
   );
};

root.render(<App />);
