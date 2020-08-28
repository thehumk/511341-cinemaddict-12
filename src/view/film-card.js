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
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};

export default class FilmCard extends Abstract {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
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
}
