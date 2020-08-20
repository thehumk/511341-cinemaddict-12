import {createElement} from '../utils/render.js';

const createFilmCardTemplate = (film) => {
  const shortDescription = film.description.length > 140 ? film.description.slice(0, 140) + `...` : film.description;

  const duration = (film.runtime / 60 | 0) + `h ` + (film.runtime % 60) + `m`;

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${film.title}</h3>
      <p class="film-card__rating">${film.rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${film.release.date.getFullYear()}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${film.genre[0]}</span>
      </p>
      <img src="${film.poster}" alt="" class="film-card__poster">
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

export default class FilmCard {
  constructor(film) {
    this._element = null;
    this._film = film;
  }

  _getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
