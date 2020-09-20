import {QuantityFilms} from '../variables.js';

const profileRatingTable = [
  {
    quantityFilms: 0,
    rating: ``
  },
  {
    quantityFilms: 1,
    rating: `novice`
  },
  {
    quantityFilms: 11,
    rating: `fan`
  },
  {
    quantityFilms: 21,
    rating: `movie buff`
  },
  {
    quantityFilms: QuantityFilms.ALL_FILMS + 1
  }
];

const getProfile = () => {
  const profile = {
    avatar: `bitmap@2x.png`,
    watchedFilms: 25,
    rating: ``,
  };

  for (let i = 0; i < profileRatingTable.length; i++) {
    if (profile.watchedFilms >= profileRatingTable[i].quantityFilms && profile.watchedFilms < profileRatingTable[i + 1].quantityFilms) {
      profile.rating = profileRatingTable[i].rating;
      break;
    }
  }

  return profile;
};

export const profileMock = getProfile();
