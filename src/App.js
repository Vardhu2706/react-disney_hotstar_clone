// Importing Helpers
import "./App.css";

// Importing Components/Files
import Header from "./Header";
import Section from "./Section";
import { movies } from "./movies";

let allGenres = new Set();
for (let movie of movies) {
  for (let genre of movie.genres) {
    allGenres.add(genre);
  }
}
const listOfAllGenres = [...allGenres];

const moviesByGenre = {};
for (let genre of listOfAllGenres) {
  moviesByGenre[genre] = [];
}

for (let movie of movies) {
  for (let genre of movie.genres) {
    moviesByGenre[genre].push(movie);
  }
}

console.log(moviesByGenre);

// Functional Component
function App() {
  return (
    <>
      <Header />
      <main>
        {listOfAllGenres.map((genre) => {
          return <Section genre={genre} movies={moviesByGenre[genre]} />;
        })}
      </main>
    </>
  );
}

export default App;
