export const getTotalFilmsDuration = (films) => {
  return films.reduce((count, film) => {
    return count + Number(film.filmInfo.runtime);
  }, 0);
};

export const getAllGenres = (films) => {
  const allGenres = [];
  films.map((film) => allGenres.push(film.filmInfo.genre));

  const countGenres = allGenres.flat().reduce((accumulator, genre) => {
    accumulator[genre] = accumulator[genre] || 0;
    accumulator[genre]++;

    return accumulator;
  }, {});

  return countGenres;
};

export const getTopGenre = (films) => {
  const genresCountObject = getAllGenres(films);

  if (Object.keys(genresCountObject).length === 0) {
    return ``;
  }

  const maxCount = Math.max(...Object.values(genresCountObject));

  const topGenre = Object.keys(genresCountObject)[Object.values(genresCountObject).indexOf(maxCount)];

  return topGenre;
};
