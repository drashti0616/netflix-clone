
import MovieCard from "./MovieCard";
import { ChevronRight } from "lucide-react";

function MovieRow({
  title,
  movies,
  myList,
  onToggle,
  onSelect
}) {
  if (movies.length === 0) return null;

  return (
    <section className="movie-section" id={title.toLowerCase().replaceAll(" ", "-")}>
      <div className="row-heading">
        <h2>{title}</h2>
        <ChevronRight size={22} />
      </div>

      <div className="movie-row">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isSaved={myList.includes(movie.id)}
            onToggle={onToggle}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieRow;
