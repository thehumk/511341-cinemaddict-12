import FilmDetailsView from '../view/film-details.js';
import CommentView from '../view/comment.js';
import {render, remove} from '../utils/render.js';

export default class MovieDetails {
  constructor(film) {
    this._film = film;

    this._openPopupFilm = this._openPopupFilm.bind(this);
    this._closePopupFilm = this._closePopupFilm.bind(this);
  }

  init() {
    this._filmDetailsComponent = new FilmDetailsView(this._film);

    this._commentsFilm = [];
    for (let i = 0; i < this._film.comments.length; i++) {
      this._commentsFilm[i] = new CommentView(this._film.comments[i]);
    }

    this._openPopupFilm();
  }

  _openPopupFilm() {
    const siteFooter = document.querySelector(`.footer`);

    render(siteFooter, this._filmDetailsComponent, `afterend`);

    for (let i = 0; i < this._film.comments.length; i++) {
      render(this._filmDetailsComponent.getElement().querySelector(`.film-details__comments-list`), this._commentsFilm[i]);
    }

    this._closePopupFilm();
  }

  _closePopupFilm() {
    const closePopupKeydown = (evt) => {
      if (evt.keyCode === 27) {
        remove(this._filmDetailsComponent);
        document.removeEventListener(`keydown`, closePopupKeydown);
      }
    };

    this._filmDetailsComponent.setClickHandler(() => {
      remove(this._filmDetailsComponent);
      document.removeEventListener(`keydown`, closePopupKeydown);
    });

    document.addEventListener(`keydown`, closePopupKeydown);
  }

  destroy() {
    remove(this._filmDetailsComponent);
  }
}

