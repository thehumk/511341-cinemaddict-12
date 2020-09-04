export const sortFilmsDate = (filmA, filmB) => {
  if (filmA.film_info.release.date > filmB.film_info.release.date) {
    return -1;
  }

  if (filmA.film_info.release.date < filmB.film_info.release.date) {
    return 1;
  }

  return 0;
};

export const sortFilmsRating = (filmA, filmB) => {
  if (filmA.film_info.total_rating > filmB.film_info.total_rating) {
    return -1;
  }

  if (filmA.film_info.total_rating < filmB.film_info.total_rating) {
    return 1;
  }

  return 0;
};
