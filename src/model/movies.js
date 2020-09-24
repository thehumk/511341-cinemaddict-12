import Observer from '../utils/observer.js';

export default class Movies extends Observer {
  constructor() {
    super();
    this._films = [];
  }

  setFilms(updateType, films) {
    this._films = films.slice();

    this._notify(updateType);
  }

  getFilms() {
    return this._films;
  }

  updateFilm(updateType, updateItem) {
    const index = this._films.findIndex((film) => film.id === updateItem.id);

    if (index === -1) {
      throw new Error(`Can't update unexisting film`);
    }

    this._films = [
      ...this._films.slice(0, index),
      updateItem,
      ...this._films.slice(index + 1)
    ];

    this._notify(updateType, updateItem);
  }

  static adaptToClient(film) {
    const adaptedFilm = Object.assign(
        {},
        film,
        {
          filmInfo: {
            title: film.film_info.title,
            alternativeTitle: film.film_info.alternative_title,
            poster: film.film_info.poster,
            totalRating: film.film_info.total_rating,
            ageRating: film.film_info.age_rating,
            director: film.film_info.director,
            writers: film.film_info.writers,
            actors: film.film_info.actors,
            release: {
              date: film.film_info.release.date,
              releaseCountry: film.film_info.release.release_country
            },
            runtime: film.film_info.runtime,
            genre: film.film_info.genre,
            description: film.film_info.description
          },
          userDetails: {
            watchlist: film.user_details.watchlist,
            alreadyWatched: film.user_details.already_watched,
            favorite: film.user_details.favorite,
            watchingDate: film.user_details.watching_date
          }
        }
    );

    delete adaptedFilm.film_info;
    delete adaptedFilm.user_details;

    return adaptedFilm;
  }

  static adaptToServer(film) {
    const adaptedFilm = Object.assign(
        {},
        film,
        {
          'film_info': {
            'title': film.filmInfo.title,
            'alternative_title': film.filmInfo.alternativeTitle,
            'poster': film.filmInfo.poster,
            'total_rating': film.filmInfo.totalRating,
            'age_rating': film.filmInfo.ageRating,
            'director': film.filmInfo.director,
            'writers': film.filmInfo.writers,
            'actors': film.filmInfo.actors,
            'release': {
              'date': film.filmInfo.release.date,
              'release_country': film.filmInfo.release.releaseCountry,
            },
            'runtime': film.filmInfo.runtime,
            'genre': film.filmInfo.genre,
            'description': film.filmInfo.description,
          },
          'user_details': {
            'watchlist': film.userDetails.watchlist,
            'favorite': film.userDetails.favorite,
            'already_watched': film.userDetails.alreadyWatched,
            'watching_date': film.userDetails.watchingDate
          }
        }
    );

    delete adaptedFilm.filmInfo;
    delete adaptedFilm.userDetails;

    return adaptedFilm;
  }
}
