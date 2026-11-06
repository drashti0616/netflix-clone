
import { Play, Info } from "lucide-react";

function Banner({ onPlay, onInfo }) {
  return (
    <section className="banner" id="home">
      <div className="banner-content">
        <p className="banner-tag">N SERIES ORIGINAL</p>

        <h1>THE LAST<br />ADVENTURE</h1>

        <div className="banner-meta">
          <span className="match">98% Match</span>
          <span>2025</span>
          <span className="age-rating">16+</span>
          <span>Adventure • Drama</span>
        </div>

        <p className="banner-description">
          Enter a world full of mystery, adventure and unexpected
          discoveries. An extraordinary journey awaits those
          brave enough to take the first step.
        </p>

        <div className="banner-buttons">
          <button className="play-btn" onClick={onPlay}>
            <Play fill="black" size={20} />
            Play
          </button>

          <button className="info-btn" onClick={onInfo}>
            <Info size={20} />
            More Info
          </button>
        </div>
      </div>

      <div className="banner-overlay"></div>
    </section>
  );
}

export default Banner;
