
import { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

function Navbar({ searchTerm, setSearchTerm, onNav, myListCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleNav = (section) => {
    onNav(section);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <a href="#home" className="logo">NETFLIX</a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <button onClick={() => handleNav("home")}>Home</button>
          <button onClick={() => handleNav("trending")}>Trending</button>
          <button onClick={() => handleNav("popular")}>Movies</button>
          <button onClick={() => handleNav("top-rated")}>Top Rated</button>
          <button onClick={() => handleNav("my-list")}>
            My List ({myListCount})
          </button>
        </nav>
      </div>

      <div className="nav-right">
        <div className={`search-box ${searchOpen ? "active" : ""}`}>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <Search size={21} />
          </button>

          {searchOpen && (
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          )}
        </div>

        <Bell className="nav-icon" size={21} />

        <div className="profile">
          <div className="profile-avatar">D</div>
          <ChevronDown size={15} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
