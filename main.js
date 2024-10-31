// const car = {
//   make: "Toyota",
//   //   model: "Camry",
//   year: 2020,
//   features: ["power windows", "rear camera", "navigation"],
//   safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true,
//   },
// };
// const {
//   features: [window, cam, smth],
//   safety: { airbagStat, antlockStat, stabStat },
//   model = "Camry",
// } = car;
// console.log(cam, airbagStat, stabStat, model);

// =============================
// const movie = {
//   title: "The Shawshank Redemption",
//   director: {
//     name: "Frank Darabont",
//     nationality: "American",
//   },
//   actors: ["Tim Robbins", "Morgan Freeman"],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90,
//   },
// };

// const {
//   director: { directorName, dirNationality },
//   actors: [woman, man],
//   ratings: { likes, dislikes },
// } = movie;
// console.log(directorName, dirNationality, man, woman, likes, dislikes);
// ==========================================
const books = {
  count: 3,
  list: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
  ],
};
const { list = [bookName, creator, year] } = books;
console.log(list);
