import {getRandomNumber} from '../utils/util.js';

const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 5;

const EMOTIONS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

export const createRandomComments = () => {
  const comments = [];

  for (let i = 0; i < getRandomNumber(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT); i++) {
    comments[i] = {
      id: generateId(),
      author: `Author`,
      comment: `text...`,
      date: `2020-09-07T14:37:00.554Z`,
      emotion: EMOTIONS[getRandomNumber(0, EMOTIONS.length - 1)],
    };
  }

  return comments;
};
