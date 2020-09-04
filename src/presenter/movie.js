import FilmCardView from '../view/film-card.js';
import FilmDetailsView from '../view/film-details.js';
import CommentView from '../view/comment.js';
import {render, remove, replace} from '../utils/render.js';
import {EmojiType} from '../variables.js';

export default class MovieDetails {
  constructor(changeData) {
    this._changeData = changeData;
    this._popupStatus = false;

    this._filmCardComponent = null;
    this._filmDetailsComponent = null;

    this._localCommentText = ``;
    this._selectedCommentEmoji = null;

    this._openPopupFilm = this._openPopupFilm.bind(this);
    this._closePopupFilm = this._closePopupFilm.bind(this);
    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this.destroyFilmDetails = this.destroyFilmDetails.bind(this);
    this._localCommentTextHandler = this._localCommentTextHandler.bind(this);
    this._handleCommentEmojiClick = this._handleCommentEmojiClick.bind(this);
  }

  init(film, container, clearPopupFilm) {
    this._film = film;
    this._container = container;

    const prevFilmCardComponent = this._filmCardComponent;
    this._prevFilmDetailsComponent = this._filmDetailsComponent;

    this._filmCardComponent = new FilmCardView(this._film);
    this._filmDetailsComponent = new FilmDetailsView(this._film);

    this._commentsFilm = [];
    for (let i = 0; i < this._film.comments.length; i++) {
      this._commentsFilm[i] = new CommentView(this._film.comments[i]);
    }

    this._filmCardComponent.setClickHandler(() => {
      clearPopupFilm();
      this._openPopupFilm();
    });

    if (prevFilmCardComponent === null) {
      render(this._container, this._filmCardComponent);
    } else {
      replace(this._filmCardComponent, prevFilmCardComponent);
    }

    if (this._popupStatus === true) {
      this._openPopupFilm();
      this._filmDetailsComponent.getElement().querySelector(`.film-details__comment-input`).value = this._localCommentText;
    }

    this._filmCardComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._filmCardComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._filmCardComponent.setFavoriteClickHandler(this._handleFavoriteClick);
  }

  _openPopupFilm() {
    const siteFooter = document.querySelector(`.footer`);

    render(siteFooter, this._filmDetailsComponent, `afterend`);

    this._filmDetailsComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._filmDetailsComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._filmDetailsComponent.setFavoriteClickHandler(this._handleFavoriteClick);

    this._filmDetailsComponent.getElement().querySelector(`.film-details__comment-input`).addEventListener(`input`, this._localCommentTextHandler);

    this._filmDetailsComponent.setCommentEmojiClickHandler(this._handleCommentEmojiClick);

    for (let i = 0; i < this._film.comments.length; i++) {
      render(this._filmDetailsComponent.getElement().querySelector(`.film-details__comments-list`), this._commentsFilm[i]);
    }

    this._popupStatus = true;

    this._closePopupFilm();
  }

  _closePopupFilm() {
    const closePopupKeydown = (evt) => {
      if (evt.keyCode === 27) {
        remove(this._filmDetailsComponent);
        document.removeEventListener(`keydown`, closePopupKeydown);
        this._popupStatus = false;
      }
    };

    this._filmDetailsComponent.setClickHandler(() => {
      remove(this._filmDetailsComponent);
      document.removeEventListener(`keydown`, closePopupKeydown);
      this._popupStatus = false;
    });

    document.addEventListener(`keydown`, closePopupKeydown);
  }

  _handleWatchlistClick() {
    this._film.user_details.watchlist = !this._film.user_details.watchlist;
    this._changeData(this._film, this._popupStatus);
  }

  _handleWatchedClick() {
    this._film.user_details.already_watched = !this._film.user_details.already_watched;
    this._changeData(this._film, this._popupStatus);
  }

  _handleFavoriteClick() {
    this._film.user_details.favorite = !this._film.user_details.favorite;
    this._changeData(this._film, this._popupStatus);
  }

  _localCommentTextHandler(evt) {
    evt.preventDefault();
    this._localCommentText = evt.target.value;
  }

  _handleCommentEmojiClick(emojiType) {
    if (this._selectedCommentEmoji === emojiType) {
      return;
    }

    const emojiAddContainer = this._filmDetailsComponent.getElement().querySelector(`.film-details__add-emoji-label`);

    switch (emojiType) {
      case `emoji-` + EmojiType.SMILE:
        emojiAddContainer.innerHTML = `<img src="images/emoji/${EmojiType.SMILE}.png" width="55" height="55" alt="${emojiType}">`;
        break;
      case `emoji-` + EmojiType.SLEEPING:
        emojiAddContainer.innerHTML = `<img src="images/emoji/${EmojiType.SLEEPING}.png" width="55" height="55" alt="${emojiType}">`;
        break;
      case `emoji-` + EmojiType.PUKE:
        emojiAddContainer.innerHTML = `<img src="images/emoji/${EmojiType.PUKE}.png" width="55" height="55" alt="${emojiType}">`;
        break;
      case `emoji-` + EmojiType.ANGRY:
        emojiAddContainer.innerHTML = `<img src="images/emoji/${EmojiType.ANGRY}.png" width="55" height="55" alt="${emojiType}">`;
        break;
    }

    this._selectedCommentEmoji = emojiType;
  }

  destroyFilmDetails() {
    remove(this._filmDetailsComponent);
  }
}

