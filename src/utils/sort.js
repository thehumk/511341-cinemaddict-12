export const sortFilmsDate = (filmA, filmB) => {
  if (filmA.filmInfo.release.date > filmB.filmInfo.release.date) {
    return -1;
  }

  if (filmA.filmInfo.release.date < filmB.filmInfo.release.date) {
    return 1;
  }

  return 0;
};

export const sortFilmsRating = (filmA, filmB) => {
  if (filmA.filmInfo.totalRating > filmB.filmInfo.totalRating) {
    return -1;
  }

  if (filmA.filmInfo.totalRating < filmB.filmInfo.totalRating) {
    return 1;
  }

  return 0;
};
