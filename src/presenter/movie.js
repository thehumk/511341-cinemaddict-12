import FilmCardView from '../view/film-card.js';
import FilmDetailsView from '../view/film-details.js';
import {render, remove, replace} from '../utils/render.js';
import {UpdateType} from '../variables.js';

export default class Movie {
  constructor(changeData) {
    this._changeData = changeData;
    this.popupStatus = false;

    this._filmCardComponent = null;
    this._filmDetailsComponent = null;

    this.openPopupFilm = this.openPopupFilm.bind(this);
    this._closePopupFilm = this._closePopupFilm.bind(this);
    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
  }

  init(film, container, clearPopupFilm, commentsPresenter) {
    this._film = film;
    this._container = container;

    const prevFilmCardComponent = this._filmCardComponent;

    this._filmCardComponent = new FilmCardView(this._film);
    this._filmDetailsComponent = new FilmDetailsView(this._film);

    this._commentPresenter = commentsPresenter;

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

    this._commentPresenter.init(commentsContainer);

    this.popupStatus = true;

    this._closePopupFilm();
  }

  _closePopupFilm() {
    const closePopupKeydown = (evt) => {
      if (evt.keyCode === 27) {
        remove(this._filmDetailsComponent);
        document.removeEventListener(`keydown`, closePopupKeydown);
        this.popupStatus = false;

        this._userInputText = ``;
        this._userInputEmoji = ``;
      }
    };

    this._filmDetailsComponent.setClickHandler(() => {
      remove(this._filmDetailsComponent);
      document.removeEventListener(`keydown`, closePopupKeydown);
      this.popupStatus = false;

      this._userInputText = ``;
      this._userInputEmoji = ``;
    });

    document.addEventListener(`keydown`, closePopupKeydown);
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
    remove(this._filmDetailsComponent);
  }

  destroy() {
    remove(this._filmCardComponent);
    remove(this._filmDetailsComponent);
  }
}

