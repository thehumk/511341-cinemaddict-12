import CommentView from '../view/comment.js';
import CommentsListView from '../view/comments-list.js';
import {render} from '../utils/render.js';
import {UserAction, UpdateType, KeyCode, shakeEffect} from '../variables.js';

export default class Comment {
  constructor(film, commentsModel, moviesModel, api) {
    this._film = film;
    this._commentsModel = commentsModel;
    this._moviesModel = moviesModel;
    this._api = api;

    this._renderComment = this._renderComment.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
    this._getSelectedCommentEmoji = this._getSelectedCommentEmoji.bind(this);
    this._getNewComment = this._getNewComment.bind(this);
    this._handleAddComment = this._handleAddComment.bind(this);
    this._handeDeleteClick = this._handeDeleteClick.bind(this);
    this._getCommentEmojiInput = this._getCommentEmojiInput.bind(this);
    this._changeDeleteButtonStatus = this._changeDeleteButtonStatus.bind(this);
    this._changeAddPanelStatus = this._changeAddPanelStatus.bind(this);
  }

  init(container) {
    this._container = container;

    this._selectedCommentEmoji = null;

    this._userInputEmoji = ``;
    this._userInputText = ``;

    this._commentsListView = new CommentsListView(this._film, this._userInputText, this._userInputEmoji);
    render(this._container, this._commentsListView);

    this._commentsListView.setCommentEmojiClickHandler(this._getCommentEmojiInput);

    this._commentsListView.setCommentInputHandler((value) => {
      this._userInputText = value;
    });

    this._addCommentPanel = this._commentsListView.getElement().querySelector(`.film-details__new-comment`);

    this._comments = this._commentsModel.getComments();

    this._commentsFilm = {};

    this._renderComment();

    this._commentsListView.setAddCommentHandler(this._handleAddComment);
  }

  _renderComment() {
    this._comments.forEach((comment) => {
      this._commentsFilm[comment.id] = new CommentView(comment);
      render(this._commentsListView.getElement().querySelector(`.film-details__comments-list`), this._commentsFilm[comment.id]);
      this._commentsFilm[comment.id].setDeleteCommentHandler(() => {
        this._handeDeleteClick(this._commentsFilm[comment.id]);
      });
    });
  }

  _getCommentEmojiInput(emojiType) {
    if (this._selectedCommentEmoji === emojiType) {
      return this._userInputEmoji;
    }

    const emojiAddContainer = this._commentsListView.getElement().querySelector(`.film-details__add-emoji-label`);

    this._userInputEmoji = `<img src="images/emoji/${emojiType.replace(`emoji-`, ``)}.png" width="55" height="55" alt="${emojiType}">`;

    emojiAddContainer.innerHTML = this._userInputEmoji;

    this._selectedCommentEmoji = emojiType;

    return this._userInputEmoji;
  }

  _getCommentTextInput(evt) {
    return evt.target.value;
  }

  _getSelectedCommentEmoji() {
    if (this._selectedCommentEmoji === null) {
      return ``;
    }
    return this._selectedCommentEmoji.replace(`emoji-`, ``);
  }

  _getNewComment(evt) {
    return {
      comment: this._getCommentTextInput(evt),
      date: new Date(),
      emotion: this._getSelectedCommentEmoji(),
    };
  }

  _handleAddComment(evt) {
    if (evt.ctrlKey && evt.keyCode === KeyCode.ENTER) {
      if (this._getNewComment(evt).emotion === `` || this._getNewComment(evt).comment === ``) {
        shakeEffect(this._commentsListView.getElement().querySelector(`.film-details__new-comment`));
        return;
      }

      this._changeAddPanelStatus(`inactive`);

      this._handleViewAction(UserAction.ADD_COMMENT, this._getNewComment(evt));
    }
  }

  _handeDeleteClick(comment) {
    this._changeDeleteButtonStatus(comment, `inactive`);
    this._handleViewAction(UserAction.DELETE_COMMENT, comment.getComment());
  }

  _changeDeleteButtonStatus(commentView, status) {
    if (status === `active`) {
      commentView.getElement().querySelector(`.film-details__comment-delete`).removeAttribute(`disabled`);
      commentView.getElement().querySelector(`.film-details__comment-delete`).textContent = `Delete`;
    }

    if (status === `inactive`) {
      commentView.getElement().querySelector(`.film-details__comment-delete`).setAttribute(`disabled`, `disabled`);
      commentView.getElement().querySelector(`.film-details__comment-delete`).textContent = `Deleting...`;
    }
  }

  _changeAddPanelStatus(status) {
    if (status === `active`) {
      this._addCommentPanel.querySelector(`.film-details__comment-input`).removeAttribute(`disabled`);
      this._commentsListView.setCommentEmojiClickHandler(this._getCommentEmojiInput);
    }

    if (status === `inactive`) {
      this._addCommentPanel.querySelector(`.film-details__comment-input`).setAttribute(`disabled`, `disabled`);
      this._commentsListView.removeCommentEmojiClickHandler();
    }
  }

  _handleViewAction(actionType, update, updateType = UpdateType.PATCH) {

    switch (actionType) {
      case UserAction.ADD_COMMENT:
        this._api.addComment(this._film, update)
          .then((response) => {
            this._moviesModel.updateFilm(updateType, response);
          })
          .catch(() => {
            this._changeAddPanelStatus(`active`);
            shakeEffect(this._addCommentPanel);
          });
        break;
      case UserAction.DELETE_COMMENT:
        this._api.deleteComment(update)
          .then(() => {
            const commentId = this._film.comments.findIndex((id) => id === update.id);
            this._film.comments.splice(commentId, 1);
            this._moviesModel.updateFilm(updateType, this._film);
          })
          .catch(() => {
            this._changeDeleteButtonStatus(this._commentsFilm[update.id], `active`);
            shakeEffect(this._commentsFilm[update.id].getElement());
          });
        break;
    }
  }
}
