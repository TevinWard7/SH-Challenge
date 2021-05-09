import './App.css';
import MovieSearch from './components/MovieSearch/MovieSearch';
import SearchResults from './components/SearchResults/SearchResults';
import Nominations from './components/Nominations/Nominations';


function App() {
  return (
    <div className="App">

      <h3>The Shoppies</h3>
      <section className="row">

        <div className="col-12">
          <MovieSearch />
        </div>

      </section>

      <section className="row">

        <div className="col-6 box"><SearchResults /></div>
        <div className="col-6 box"><Nominations /></div>

      </section>




    </div>
  );
}

export default App;
