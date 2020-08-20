import {getRandomNumber, getRandomBoolean} from '../utils/util.js';
import {createRandomComments} from './comments.js';

const QANTITY_FILMS = 20;
const MIN_LENGTH_DESCRIPTION = 1;
const MAX_LENGTH_DESCRIPTION = 5;

const FILMS_TITLE = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `The Great Flamarion`,
  `Made for Each Other`
];

const FILMS_POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const DESCRIPTION = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const getRandomDescription = () => {
  let randomDescription = ``;
  const lengthDescription = getRandomNumber(MIN_LENGTH_DESCRIPTION, MAX_LENGTH_DESCRIPTION);

  for (let i = 0; i < lengthDescription; i++) {
    randomDescription += DESCRIPTION[getRandomNumber(0, DESCRIPTION.length - 1)] + ` `;
  }

  return randomDescription;
};

const createRandomFilms = () => {
  const films = [];

  for (let i = 0; i < QANTITY_FILMS; i++) {
    const releaseDate = new Date(getRandomNumber(1930, 2020) + `-` + getRandomNumber(1, 12) + `-` + getRandomNumber(1, 28));

    films[i] = {
      title: FILMS_TITLE[getRandomNumber(0, FILMS_TITLE.length - 1)],
      alternativeTitle: `Alternative title`,
      poster: `images/posters/` + FILMS_POSTERS[getRandomNumber(0, FILMS_POSTERS.length - 1)],
      rating: getRandomNumber(0, 10, 1),
      ageRating: `16+`,
      director: `Anthony Mann`,
      writes: [`Anne Wigton`, `Heinz Herald`, `Richard Weil`],
      actors: [`Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`],
      release: {
        date: releaseDate,
        country: `USA`
      },
      runtime: getRandomNumber(60, 200),
      genre: [`Western`, `Drama`],
      description: getRandomDescription(),
      comments: createRandomComments(),
      userDetails: {
        watchlist: getRandomBoolean(),
        favorite: getRandomBoolean(),
        alreadyWatched: getRandomBoolean(),
      }
    };
  }

  return films;
};

export const randomFilms = createRandomFilms();

