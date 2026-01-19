export interface Record {
  id: string;
  title: string;
  artist: string;
  country: string;
  genre: string;
  price: number;
  releaseDate: string;
  coverImage: string;
}

export const records: Record[] = [
  {
    id: "1",
    title: "Kind of Blue",
    artist: "Miles Davis",
    country: "USA",
    genre: "Jazz",
    price: 29.99,
    releaseDate: "2024-01-15",
    coverImage: "/covers/kind-of-blue.jpg"
  },
  {
    id: "2",
    title: "Abbey Road",
    artist: "The Beatles",
    country: "UK",
    genre: "Rock",
    price: 34.99,
    releaseDate: "2024-02-20",
    coverImage: "/covers/abbey-road.jpg"
  },
  {
    id: "3",
    title: "Random Access Memories",
    artist: "Daft Punk",
    country: "France",
    genre: "Electronic",
    price: 39.99,
    releaseDate: "2024-03-10",
    coverImage: "/covers/random-access.jpg"
  },
  {
    id: "4",
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    country: "UK",
    genre: "Rock",
    price: 32.99,
    releaseDate: "2024-01-05",
    coverImage: "/covers/dark-side.jpg"
  },
  {
    id: "5",
    title: "Sketches of Spain",
    artist: "Miles Davis",
    country: "USA",
    genre: "Jazz",
    price: 27.99,
    releaseDate: "2024-02-28",
    coverImage: "/covers/sketches-spain.jpg"
  },
  {
    id: "6",
    title: "Discovery",
    artist: "Daft Punk",
    country: "France",
    genre: "Electronic",
    price: 31.99,
    releaseDate: "2024-03-15",
    coverImage: "/covers/discovery.jpg"
  },
  {
    id: "7",
    title: "Beethoven: Symphony No. 9",
    artist: "Berlin Philharmonic",
    country: "Germany",
    genre: "Classical",
    price: 24.99,
    releaseDate: "2024-01-20",
    coverImage: "/covers/beethoven-9.jpg"
  },
  {
    id: "8",
    title: "Nevermind",
    artist: "Nirvana",
    country: "USA",
    genre: "Rock",
    price: 28.99,
    releaseDate: "2024-02-14",
    coverImage: "/covers/nevermind.jpg"
  }
];

export const genres = ["All", "Jazz", "Rock", "Electronic", "Classical"];
export const countries = ["All", "USA", "UK", "France", "Germany"];