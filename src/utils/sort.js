export const sortFilmsDate = (filmA, filmB) => {
  if (filmA.release.date > filmB.release.date) {
    return -1;
  }

  if (filmA.release.date < filmB.release.date) {
    return 1;
  }

  return 0;
};

export const sortFilmsRating = (filmA, filmB) => {
  if (filmA.rating > filmB.rating) {
    return -1;
  }

  if (filmA.rating < filmB.rating) {
    return 1;
  }

  return 0;
};
