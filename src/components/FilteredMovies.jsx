import { useState, useEffect } from "react";
import movies from "../data/moviesList.js";

const MovieFilter = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    if (selectedGenre) {
      setFilteredMovies(
        movies.filter((movie) => movie.genre === selectedGenre)
      );
    } else {
      setFilteredMovies(movies);
    }
  }, [selectedGenre]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Filtro Film per Genere</h1>
      <select
        className="border p-2 mb-4"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">Tutti i generi</option>
        {[...new Set(movies.map((movie) => movie.genre))].map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <ul className="list-disc pl-5">
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            {movie.title} ({movie.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieFilter;
