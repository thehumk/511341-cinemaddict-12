import {filter} from './filter.js';
import {FilterType} from '../variables.js';

export const getProfileRating = (films) => {
  const watchedFilmsCount = filter[FilterType.WATCHLIST](films).length;

  switch (true) {
    case (watchedFilmsCount >= 1 && watchedFilmsCount <= 10):
      return `novice`;
    case (watchedFilmsCount >= 11 && watchedFilmsCount <= 20):
      return `fan`;
    case (watchedFilmsCount >= 21):
      return `movie buff`;
    default:
      return ``;
  }
};
