const API = "https://omdbapi.com?apikey=85de931b";

function App() {

  const [search, setSearch] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  
  const searchMovie = async (title) => {
    const res  = await fetch(`${API}&s=${title}`);
    const data = await res.json();

    setMovies(data.Search);
  };


  React.useEffect(() => {
    searchMovie('batman');
  }, []);

  
  return (
      <>
        <h1>hello</h1>
         <input type='text'
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => searchMovie(search)}>find</button>

        {movies.map(list =>{
          return (
            <div className='container'>
              <div className='movie'>
                  <div>
                      <img src={list.Poster !== 'N/A' ? list.Poster : 'https://via.placeholder/400'} alt={list.Title} />
                  </div>

                  <div className='info-movie'>
                      <p>{list.Type}</p>
                      <p>{list.Year}</p>
                  </div>
                  <h4>{list.Title}</h4>
              </div>
            </div>
          )
        })}
      </>
  )
   
};

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<App />);
