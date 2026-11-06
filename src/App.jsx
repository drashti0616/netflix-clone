
import { useMemo, useState } from "react";
import { X, Play, Plus, Check } from "lucide-react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";

import { movies, categories } from "./data/movies";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [myList, setMyList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [message, setMessage] = useState("");

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const toggleMyList = (id) => {
    setMyList((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

const navigateTo = (section) => {
  if (section === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const sectionIds = {
    trending: "trending-now",
    popular: "popular-on-netflix",
    "top-rated": "top-rated",
    "my-list": "my-list"
  };

  const element = document.getElementById(
    sectionIds[section] || section
  );

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};


  const showMessage = (text) => {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2500);
  };

  const handlePlay = () => {
    showMessage("This is a frontend demo. Video streaming is not connected.");
  };

  const displayCategories = categories.map((category) => ({
    ...category,
    filtered: filteredMovies.filter((movie) =>
      category.movieIds.includes(movie.id)
    )
  }));

  const savedMovies = filteredMovies.filter((movie) =>
    myList.includes(movie.id)
  );

  const featuredMovie = {
    title: "The Last Adventure",
    year: 2025,
    genre: "Adventure",
    rating: "9.0",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=90",
    description:
      "Enter a world full of mystery, adventure and unexpected discoveries."
  };

  return (
    <div className="app">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onNav={navigateTo}
        myListCount={myList.length}
      />

      {!searchTerm && (
        <Banner
          onPlay={handlePlay}
          onInfo={() => setSelectedMovie(featuredMovie)}
        />
      )}

      <main className="main-content">
        {searchTerm && (
          <h2 className="search-heading">
            Search results for: "{searchTerm}"
          </h2>
        )}

        {!searchTerm && (
          <MovieRow
            title="My List"
            movies={movies.filter((movie) => myList.includes(movie.id))}
            myList={myList}
            onToggle={toggleMyList}
            onSelect={setSelectedMovie}
          />
        )}

        {displayCategories.map((category) => (
          <MovieRow
            key={category.id}
            title={category.title}
            movies={category.filtered}
            myList={myList}
            onToggle={toggleMyList}
            onSelect={setSelectedMovie}
          />
        ))}

        {searchTerm && filteredMovies.length === 0 && (
          <div className="empty-search">
            <h2>No movies found!</h2>
            <p>Try searching with a different movie name.</p>
          </div>
        )}
      </main>

      <Footer />

      {message && (
        <div className="toast">
          {message}
        </div>
      )}

      {selectedMovie && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="movie-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedMovie(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <img
              src={selectedMovie.image}
              alt={selectedMovie.title}
              className="modal-image"
            />

            <div className="modal-content">
              <h2>{selectedMovie.title}</h2>

              <div className="modal-meta">
                <span className="match">98% Match</span>
                <span>{selectedMovie.year}</span>
                <span>{selectedMovie.genre}</span>
                <span>Rating: {selectedMovie.rating}/10</span>
              </div>

              <p>{selectedMovie.description}</p>

              <div className="modal-actions">
                <button className="play-btn" onClick={handlePlay}>
                  <Play fill="black" size={18} />
                  Play
                </button>

                <button
                  className="modal-list-btn"
                  onClick={() => toggleMyList(selectedMovie.id)}
                >
                  {myList.includes(selectedMovie.id) ? (
                    <Check size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                  My List
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
