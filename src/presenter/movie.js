import FilmCardView from '../view/film-card.js';
import FilmDetailsView from '../view/film-details.js';
import {render, remove, replace} from '../utils/render.js';
import {UpdateType, KeyCode} from '../variables.js';
import CommentsPresenter from './comments.js';
import CommentsModel from '../model/comments.js';

export default class Movie {
  constructor(changeData, moviesModel, api) {
    this._changeData = changeData;
    this._moviesModel = moviesModel;
    this._api = api;

    this.popupStatus = false;

    this._filmCardComponent = null;
    this._filmDetailsComponent = null;

    this.openPopupFilm = this.openPopupFilm.bind(this);
    this._closePopupFilm = this._closePopupFilm.bind(this);
    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._closePopupHandler = this._closePopupHandler.bind(this);
    this._closePopupKeydownHandler = this._closePopupKeydownHandler.bind(this);
  }

  init(film, container, clearPopupFilm) {
    this._film = film;
    this._container = container;

    const prevFilmCardComponent = this._filmCardComponent;

    this._filmCardComponent = new FilmCardView(this._film);
    this._filmDetailsComponent = new FilmDetailsView(this._film);

    this._filmCardComponent.setClickHandler(() => {
      clearPopupFilm();
      this.openPopupFilm();
    });

    if (prevFilmCardComponent === null) {
      render(this._container, this._filmCardComponent);
    } else {
      replace(this._filmCardComponent, prevFilmCardComponent);
    }

    if (this.popupStatus === true) {
      this.openPopupFilm();
    }

    this._filmCardComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._filmCardComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._filmCardComponent.setFavoriteClickHandler(this._handleFavoriteClick);
  }

  openPopupFilm() {
    const siteFooter = document.querySelector(`.footer`);

    render(siteFooter, this._filmDetailsComponent, `afterend`);

    this._filmDetailsComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._filmDetailsComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._filmDetailsComponent.setFavoriteClickHandler(this._handleFavoriteClick);

    const commentsContainer = this._filmDetailsComponent.getElement().querySelector(`.form-details__bottom-container`);

    const commentsModel = new CommentsModel();

    this._api.getComments(this._film).then((response) => {
      commentsModel.setComments(``, response);
      const commentsPresenter = new CommentsPresenter(this._film, commentsModel, this._moviesModel, this._api);

      commentsPresenter.init(commentsContainer);
    });

    this.popupStatus = true;

    this._closePopupFilm();
  }

  _closePopupHandler() {
    remove(this._filmDetailsComponent);
    document.removeEventListener(`keydown`, this._closePopupKeydownHandler);
    this.popupStatus = false;

    this._userInputText = ``;
    this._userInputEmoji = ``;
  }

  _closePopupKeydownHandler(evt) {
    if (evt.keyCode === KeyCode.ESC) {
      this._closePopupHandler();
    }
  }

  _closePopupFilm() {
    this._filmDetailsComponent.setClickHandler(() => {
      this._closePopupHandler();
    });

    document.addEventListener(`keydown`, this._closePopupKeydownHandler);
  }

  _handleWatchlistClick() {
    this._film.userDetails.watchlist = !this._film.userDetails.watchlist;

    this._changeData(UpdateType.MINOR, this._film);
  }

  _handleWatchedClick() {
    this._film.userDetails.alreadyWatched = !this._film.userDetails.alreadyWatched;

    this._changeData(UpdateType.MINOR, this._film);
  }

  _handleFavoriteClick() {
    this._film.userDetails.favorite = !this._film.userDetails.favorite;

    this._changeData(UpdateType.MINOR, this._film);
  }

  destroyFilmDetails() {
    document.removeEventListener(`keydown`, this._closePopupKeydownHandler);
    remove(this._filmDetailsComponent);
  }

  destroy() {
    document.removeEventListener(`keydown`, this._closePopupKeydownHandler);
    remove(this._filmCardComponent);
    remove(this._filmDetailsComponent);
  }
}

