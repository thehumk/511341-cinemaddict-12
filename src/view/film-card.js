import Abstract from './abstract.js';

const createFilmCardTemplate = (film) => {
  const shortDescription = film.film_info.description.length > 140 ? film.film_info.description.slice(0, 140) + `...` : film.film_info.description;

  const duration = (film.film_info.runtime / 60 | 0) + `h ` + (film.film_info.runtime % 60) + `m`;

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${film.film_info.title}</h3>
      <p class="film-card__rating">${film.film_info.total_rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${film.film_info.release.date.getFullYear()}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${film.film_info.genre[0]}</span>
      </p>
      <img src="${film.film_info.poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${shortDescription}</p>
      <a class="film-card__comments">${film.comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${film.user_details.watchlist ? `film-card__controls-item--active` : ``}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${film.user_details.already_watched ? `film-card__controls-item--active` : ``}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${film.user_details.favorite ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
      </form>
    </article>`
  );
};

export default class FilmCard extends Abstract {
  constructor(film) {
    super();
    this._film = film;

    this._clickHandler = this._clickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  _getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.clickPopupOpen();
  }

  setClickHandler(callback) {
    this._callback.clickPopupOpen = callback;

    this.getElement().querySelector(`.film-card__title`).addEventListener(`click`, this._clickHandler);
    this.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, this._clickHandler);
    this.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, this._clickHandler);
  }

  _watchlistClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchlistClick();
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._watchlistClickHandler);
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }
}
