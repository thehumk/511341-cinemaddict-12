import {randomFilms} from './films.js';

const createFilter = () => {
  const filter = {
    watchlist: 0,
    favorites: 0,
    history: 0,
  };

  for (let i = 0; i < randomFilms.length; i++) {
    if (randomFilms[i].userDetails.watchlist) {
      filter.watchlist += 1;
    }

    if (randomFilms[i].userDetails.favorite) {
      filter.favorites += 1;
    }

    if (randomFilms[i].userDetails.alreadyWatched) {
      filter.history += 1;
    }
  }

  return filter;
};

export const filter = createFilter();
