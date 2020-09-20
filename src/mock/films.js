import {getRandomNumber, getRandomBoolean} from '../utils/util.js';
import {createRandomComments} from './comments.js';

export const QANTITY_FILMS = 20;
const MIN_LENGTH_DESCRIPTION = 1;
const MAX_LENGTH_DESCRIPTION = 5;

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

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

const GENRES = [
  `Western`,
  `Drama`,
  `Comedy`,
  `Fantasy`
];

const getRandomDescription = () => {
  let randomDescription = ``;
  const lengthDescription = getRandomNumber(MIN_LENGTH_DESCRIPTION, MAX_LENGTH_DESCRIPTION);

  for (let i = 0; i < lengthDescription; i++) {
    randomDescription += DESCRIPTION[getRandomNumber(0, DESCRIPTION.length - 1)] + ` `;
  }

  return randomDescription;
};

const getRandomGenres = () => {
  let randomGenres = [];
  const countGenries = getRandomNumber(1, GENRES.length);

  for (let i = 0; i < countGenries; i++) {
    const randomGenre = GENRES[getRandomNumber(0, GENRES.length - 1)];
    if (randomGenres.indexOf(randomGenre) === -1) {
      randomGenres.push(randomGenre);
    }
  }

  return randomGenres;
};

const createRandomFilms = () => {
  const films = [];

  for (let i = 0; i < QANTITY_FILMS; i++) {
    films[i] = {
      id: generateId(),
      comments: createRandomComments(),
      filmInfo: {
        title: FILMS_TITLE[getRandomNumber(0, FILMS_TITLE.length - 1)],
        alternativeTitle: `Alternative title`,
        poster: `images/posters/` + FILMS_POSTERS[getRandomNumber(0, FILMS_POSTERS.length - 1)],
        totalRating: getRandomNumber(0, 10, 1),
        ageRating: `16+`,
        director: `Anthony Mann`,
        writes: [`Anne Wigton`, `Heinz Herald`, `Richard Weil`],
        actors: [`Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`],
        release: {
          date: `${getRandomNumber(1940, 2020)}-05-11T00:00:00.000Z`,
          releaseCountry: `USA`,
        },
        runtime: getRandomNumber(60, 200),
        genre: getRandomGenres(),
        description: getRandomDescription(),
      },
      userDetails: {
        watchlist: getRandomBoolean(),
        favorite: getRandomBoolean(),
        alreadyWatched: getRandomBoolean(),
        watchingDate: `2020-0${getRandomNumber(7, 9)}-1${getRandomNumber(1, 9)}T16:12:32.554Z`,
      }
    };

  }
  return films;
};

export const randomFilms = createRandomFilms();

