export const getTotalFilmsDuration = (films) => {
  return films.reduce((count, film) => {
    return count + Number(film.filmInfo.runtime);
  }, 0);
};

export const getAllGenres = (films) => {
  const allGenres = [];
  films.map((film) => allGenres.push(film.filmInfo.genre));

  const countGenres = allGenres.flat().reduce((a, c) => {
    a[c] = a[c] || 0;
    a[c]++;

    return a;
  }, {});

  return countGenres;
};

export const getTopGenre = (films) => {
  const genresCountObject = getAllGenres(films);

  const maxCount = Math.max(...Object.values(genresCountObject));

  const topGenre = ((obj, value) => {
    return Object.keys(obj)[Object.values(obj).indexOf(value)];
  });

  return topGenre(genresCountObject, maxCount);
};

// export const getCurrentDate = () => {
//   const currentDate = new Date();
//   currentDate.setHours(23, 59, 59, 999);

//   return new Date(currentDate);
// };
