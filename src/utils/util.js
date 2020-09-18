import moment from 'moment';

export const getRandomNumber = (min, max, fractional = 0) => {
  const randomNumber = min + Math.random() * (max - min);
  return randomNumber.toFixed(fractional);
};

export const getRandomBoolean = () => {
  if (getRandomNumber(0, 1) === `1`) {
    return true;
  } else {
    return false;
  }
};

export const setFormatTimeDuration = (time) => {
  return moment.utc(moment.duration(time, `minutes`).asMilliseconds()).format(`h[h] mm[m]`);
};

export const setFormatReleaseDate = (date, full) => {
  if (full) {
    return moment(Date.parse(date)).format(`DD MMMM YYYY`);
  }

  return moment(Date.parse(date)).format(`YYYY`);
};

export const setFormatCommentDate = (date) => {
  return moment(Date.parse(date)).fromNow();
};
