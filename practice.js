//COMPLEX DATA STRUCTURE
//OBJECTS (inside of the array is an object and inside of the object are elements)

const movies = [
  { id: 1, title: "Die Hard", director: "Bruce Willis", rating: 3.4 },
  { id: 2, title: "Mission Impossible 1", director: "Tom Cruise", rating: 4.5 },
  { id: 3, title: "Little miss forest", director: "John Doe", rating: 4.1 },
  { id: 4, title: "Mission Impossible 2", director: "Tom Cruise", rating: 4.4 },
];

movies.map((movie) => {
    console.log(movie.title.toUpperCase(), movie.rating);
});

//4.0 and above
const topRatedMovies = movies.filter((movie) => {
    return movie.rating >= 4;
});

console.log(topRatedMovies);

// miss
const searchedMovies = movies.filter((movie) => movie.title.includes("miss")); 
console.log(searchedMovies);

// MISS -> miss '     MISS     '
const searchMovies = (searchTerm) => {
    const converted = searchTerm.trim().toLowerCase();
    const moviesSearched = movies.filter((movie) =>
        movie.title.toLowerCase().includes(converted)
    );
    return moviesSearched;
};
console.log(searchMovies("miss"));


const movies2 = movies.filter((tom) => 
    {return tom.director.toLowerCase() === "Tom Cruise".toLowerCase();
});
console.log(movies2);

// movies dat has an id of 3
const infos = movies.find((hus) => {
    return hus.id === 3;
})
console.log(infos);

// movies rated less dan 4
const moviesRated = movies.filter((has) => {
    return has.rating < 4;
});
console.log(moviesRated);

const events = [
  {
    id: 1,
    title: "Movie In the Park",
    category: "Party",
    date: "Aug 6th, 2024",
    price: 0,
    location: "Lagos",
  },
  {
    id: 2,
    title: "Burna Live In Concert",
    category: "Party",
    date: "Dec 23rd, 2024",
    price: 25000,
    location: "Lagos",
  },
  {
    id: 3,
    title: "Read With Kuku",
    category: "Education",
    date: "Sept 6th, 2024",
    price: 5000,
    location: "Online",
  },
  {
    id: 4,
    title: "Japa on a Budget",
    category: "Education",
    date: "Nov 6th, 2024",
    price: 10000,
    location: "Abuja",
  },
  {
    id: 5,
    title: "Mainland Block Party",
    category: "Party",
    date: "Dec 6th, 2024",
    price: 12000,
    location: "Lagos",
  },
];
console.log(events.length);


const hassy = events.filter((event) =>event.location.includes(`Lagos`));
console.log(hassy);

const lessPrice = events.filter((event) => {
    return event.price < 15000;
});
console.log(lessPrice);

const parties = events.filter((event) => event.category === "Party");
console.log(parties);

const alphas = events.sort((a, b) => a.title.localeCompare(b.title) );
console.log(alphas);

const numOfEvents = events.length;
const randomEvent = Math.floor(Math.random() * numOfEvents);
console.log(randomEvent);
console.log(events[randomEvent]);
