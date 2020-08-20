import {getRandomNumber} from '../utils/util.js';

const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 5;

const EMOTIONS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];

export const createRandomComments = () => {
  const comments = [];

  for (let i = 0; i < getRandomNumber(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT); i++) {
    comments[i] = {
      author: `Author`,
      comment: `text...`,
      date: new Date(),
      emotion: EMOTIONS[getRandomNumber(0, EMOTIONS.length - 1)],
    };
  }

  return comments;
};
