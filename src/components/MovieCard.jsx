
import { Plus, Check, Star, Info } from "lucide-react";

function MovieCard({ movie, isSaved, onToggle, onSelect }) {
  return (
    <article className="movie-card">
      <img
        src={movie.image}
        alt={movie.title}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/600x400/222/fff?text=Movie";
        }}
      />

      <div className="card-details">
        <h3>{movie.title}</h3>

        <div className="card-meta">
          <span className="card-rating">
            <Star size={13} fill="currentColor" />
            {movie.rating}
          </span>
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
        </div>

        <p>{movie.description}</p>

        <div className="card-actions">
          <button
            className="card-more"
            onClick={() => onSelect(movie)}
            aria-label={`More about ${movie.title}`}
          >
            <Info size={18} />
          </button>

          <button
            className="card-save"
            onClick={() => onToggle(movie.id)}
            aria-label={isSaved ? "Remove from My List" : "Add to My List"}
          >
            {isSaved ? <Check size={18} /> : <Plus size={18} />}
          </button>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;
