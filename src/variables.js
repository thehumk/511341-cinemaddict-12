export const AUTHORIZATION = `Basic er883jdzbdw212weragadfg`;
export const END_POINT = `https://12.ecmascript.pages.academy/cinemaddict`;
export const SHAKE_ANIMATION_TIMEOUT = 600;

export const KeyCode = {
  ESC: 27,
  ENTER: 13
};

export const QuantityFilms = {
  ALL_FILMS: 100000,
  FILMS: 5,
  EXTRA_FILMS: 2,
  EXTRA_CATEGORIES: 2,
};

export const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RATING: `rating`,
};

export const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`,
  INIT: `INIT`
};

export const UserAction = {
  ADD_COMMENT: `ADD_COMMENT`,
  DELETE_COMMENT: `DELETE_COMMENT`,
};

export const FilterType = {
  [`ALL`]: `all`,
  [`WATCHLIST`]: `watchlist`,
  [`HISTORY`]: `history`,
  [`FAVORITES`]: `favorites`,
};

export const StatisticsPeriod = {
  ALL_TIME: `all-time`,
  TODAY: `today`,
  WEEK: `week`,
  MONTH: `month`,
  YEAR: `year`,
};

export const shakeEffect = (element) => {
  element.style.animation = `shake ${SHAKE_ANIMATION_TIMEOUT / 1000}s`;
  setTimeout(() => {
    element.style.animation = ``;
  }, SHAKE_ANIMATION_TIMEOUT);
};
