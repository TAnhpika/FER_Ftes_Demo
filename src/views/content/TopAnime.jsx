import React, { useState } from "react";
import "./topAnime.css";

// Sample top anime data (static for demo)
const TOP_ANIME = [
  {
    id: 1,
    title: "Demon Slayer",
    image: "https://cdn.myanimelist.net/images/anime/1908/135431.jpg",
    rating: "9.2/10",
    genre: "Action, Fantasy",
    year: 2022,
    synopsis: "Tanjiro Kamado becomes a demon slayer after his family is slaughtered, seeking a cure for his sister Nezuko.",
  },
  {
    id: 2,
    title: "Jujutsu Kaisen",
    image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    rating: "9.0/10",
    genre: "Action, Supernatural",
    year: 2021,
    synopsis: "Yuji Itadori joins a school of sorcerers to battle cursed spirits while protecting humanity.",
  },
  {
    id: 3,
    title: "My Hero Academia",
    image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    rating: "8.8/10",
    genre: "Action, School",
    year: 2020,
    synopsis: "Izuku Midoriya dreams of becoming a hero in a world where superpowers, known as Quirks, are the norm.",
  },
  {
    id: 4,
    title: "Attack on Titan",
    image: "https://cdn.myanimelist.net/images/anime/1000/110531.jpg",
    rating: "9.3/10",
    genre: "Action, Drama",
    year: 2021,
    synopsis: "Humanity fights for survival against gigantic Titans threatening to devour them.",
  },
  {
    id: 5,
    title: "One Piece",
    image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    rating: "9.5/10",
    genre: "Adventure, Fantasy",
    year: 2022,
    synopsis: "Monkey D. Luffy sails the Grand Line to become the Pirate King and find the legendary One Piece.",
  },
  {
    id: 6,
    title: "Spy x Family",
    image: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg",
    rating: "8.7/10",
    genre: "Comedy, Spy",
    year: 2022,
    synopsis: "A spy, assassin and telepath form a fake family for a secret mission, each hiding a secret.",
  },
  {
    id: 7,
    title: "Chainsaw Man",
    image: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
    rating: "9.1/10",
    genre: "Action, Horror",
    year: 2023,
    synopsis: "Denji, fused with a devil, works as a demon hunter wielding chainsaw powers.",
  },
  {
    id: 8,
    title: "Bleach",
    image: "https://cdn.myanimelist.net/images/anime/1764/126627.jpg",
    rating: "8.3/10",
    genre: "Action, Supernatural",
    year: 2021,
    synopsis: "Ichigo Kurosaki gains Soul Reaper abilities and battles malevolent spirits.",
  },
  {
    id: 9,
    title: "Tokyo Revengers",
    image: "https://cdn.myanimelist.net/images/anime/1839/122012.jpg",
    rating: "8.5/10",
    genre: "Drama, Time Travel",
    year: 2022,
    synopsis: "Takemichi travels back in time to save his girlfriend and change his fate.",
  },
  {
    id: 10,
    title: "Demon Slayer: Mugen Train",
    image: "https://cdn.myanimelist.net/images/anime/1704/106947.jpg",
    rating: "9.0/10",
    genre: "Action, Fantasy",
    year: 2022,
    synopsis: "Tanjiro and friends board the endless train to confront a powerful demon.",
  },
  {
    id: 11,
    title: "Your Name",
    image: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
    rating: "9.4/10",
    genre: "Romance, Supernatural",
    year: 2023,
    synopsis: "Two strangers exchange bodies and form a deep connection across time.",
  },
  {
    id: 12,
    title: "Sword Art Online",
    image: "https://cdn.myanimelist.net/images/anime/11/39717.jpg",
    rating: "8.2/10",
    genre: "Adventure, Sci‑Fi",
    year: 2021,
    synopsis: "Players are trapped in a virtual reality MMORPG and must survive to escape.",
  },
];

const genres = ["All", "Action", "Fantasy", "Supernatural", "Adventure", "Comedy", "Drama", "Horror", "Sci‑Fi", "Romance", "School", "Spy", "Time Travel"];

const ITEMS_PER_PAGE = 6;

const TopAnime = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAnime = activeFilter === "All" ? TOP_ANIME : TOP_ANIME.filter((a) => a.genre.includes(activeFilter));
  const totalPages = Math.ceil(filteredAnime.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedAnime = filteredAnime.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handleFilter = (g) => {
    setActiveFilter(g);
    setCurrentPage(1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="top-anime-page">
      <section className="hero-anime">
        <h1 className="hero-anime-title">Top Anime This Season</h1>
        <p className="hero-anime-subtitle">
          Curated list of the most popular anime titles right now.
        </p>
      </section>

      {/* Filter Bar */}
      <div className="filter-bar">
        {genres.map((g) => (
          <button
            key={g}
            className={`filter-tab ${activeFilter === g ? "active" : ""}`}
            onClick={() => handleFilter(g)}
          >
            {g}
          </button>
        ))}
      </div>

      <section className="anime-grid">
        {paginatedAnime.map((anime) => (
          <div key={anime.id} className="anime-card">
            <img src={anime.image} alt={anime.title} className="anime-img" />
            <h3 className="anime-title">{anime.title}</h3>
            <p className="anime-meta">
              <span>{anime.year}</span> • <span>{anime.rating}</span>
            </p>
            <p className="anime-genre">{anime.genre}</p>
            <div className="anime-overlay">
              <p className="anime-synopsis">{anime.synopsis}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1} className="page-btn">
          ‹ Prev
        </button>
        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages} className="page-btn">
          Next ›
        </button>
      </div>
    </div>
  );
};

export default TopAnime;
