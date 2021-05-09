import './App.css';
import MovieSearch from './components/MovieSearch/MovieSearch';
import SearchResults from './components/SearchResults/SearchResults';
import Nominations from './components/Nominations/Nominations';


function App() {
  return (
    <div className="App">

      <MovieSearch />
      <SearchResults />
      <Nominations />

    </div>
  );
}

export default App;
