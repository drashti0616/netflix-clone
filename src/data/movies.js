
const image = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;

export const movies = [
  {
    id: 1,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: "9.0",
    image: image("photo-1500530855697-b586d89ba3ee"),
    description: "A city faces its greatest challenge as a mysterious hero fights to protect everyone."
  },
  {
    id: 2,
    title: "Into the Wild",
    year: 2007,
    genre: "Adventure",
    rating: "8.1",
    image: image("photo-1470770841072-f978cf4d019e"),
    description: "An unforgettable journey through nature, freedom and discovery."
  },
  {
    id: 3,
    title: "The Last Journey",
    year: 2024,
    genre: "Drama",
    rating: "8.5",
    image: image("photo-1518837695005-2083093ee35b"),
    description: "A journey that changes everything."
  },
  {
    id: 4,
    title: "Beyond the Mountains",
    year: 2023,
    genre: "Adventure",
    rating: "8.4",
    image: image("photo-1464822759023-fed622ff2c3b"),
    description: "Discover a world beyond imagination."
  },
  {
    id: 5,
    title: "Midnight Mystery",
    year: 2024,
    genre: "Thriller",
    rating: "8.7",
    image: image("photo-1519608487953-e999c86e7455"),
    description: "One mysterious night. Countless unanswered questions."
  },
  {
    id: 6,
    title: "Ocean Deep",
    year: 2022,
    genre: "Adventure",
    rating: "7.9",
    image: image("photo-1518837695005-2083093ee35b"),
    description: "An exploration into the unknown depths of the ocean."
  },
  {
    id: 7,
    title: "The Green World",
    year: 2023,
    genre: "Drama",
    rating: "8.2",
    image: image("photo-1448375240586-882707db888b"),
    description: "A beautiful story about life and the natural world."
  },
  {
    id: 8,
    title: "City Lights",
    year: 2024,
    genre: "Comedy",
    rating: "7.8",
    image: image("photo-1519608487953-e999c86e7455"),
    description: "Life gets interesting in a city that never sleeps."
  },
  {
    id: 9,
    title: "Space Odyssey",
    year: 2025,
    genre: "Sci-Fi",
    rating: "9.1",
    image: image("photo-1462331940025-496dfbfc7564"),
    description: "An extraordinary journey through the universe."
  },
  {
    id: 10,
    title: "Lost in Paradise",
    year: 2024,
    genre: "Adventure",
    rating: "8.3",
    image: image("photo-1507525428034-b723cf961d3e"),
    description: "A beautiful island hides an unexpected secret."
  },
  {
    id: 11,
    title: "The Silent Forest",
    year: 2023,
    genre: "Thriller",
    rating: "8.6",
    image: image("photo-1448375240586-882707db888b"),
    description: "Some secrets are better left undiscovered."
  },
  {
    id: 12,
    title: "Dreams of Tomorrow",
    year: 2025,
    genre: "Drama",
    rating: "8.8",
    image: image("photo-1470252649378-9c29740c9fa8"),
    description: "A story about hope, friendship and new beginnings."
  }
];

export const categories = [
  {
    id: "trending",
    title: "Trending Now",
    movieIds: [1, 5, 9, 4, 2, 3]
  },
  {
    id: "popular",
    title: "Popular on Netflix",
    movieIds: [2, 7, 10, 1, 6, 12]
  },
  {
    id: "top-rated",
    title: "Top Rated",
    movieIds: [9, 1, 12, 5, 4, 11]
  },
  {
    id: "action",
    title: "Adventure & Action",
    movieIds: [1, 4, 6, 9, 10]
  },
  {
    id: "drama",
    title: "Drama & Entertainment",
    movieIds: [3, 7, 8, 11, 12]
  }
];
