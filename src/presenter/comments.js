import CommentView from '../view/comment.js';
import CommentsListView from '../view/comments-list.js';
import {render, remove} from '../utils/render.js';
import {EmojiType, UserAction, UpdateType} from '../variables.js';

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

export default class Comment {
  constructor(film, commentsModel, moviesModel) {
    this._film = film;
    this._commentsModel = commentsModel;
    this._moviesModel = moviesModel;

    this._selectedCommentEmoji = null;

    this._renderComment = this._renderComment.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
    this._getSelectedCommentEmoji = this._getSelectedCommentEmoji.bind(this);
    this._getNewComment = this._getNewComment.bind(this);
    this._handleAddComment = this._handleAddComment.bind(this);
    this._handeDeleteClick = this._handeDeleteClick.bind(this);
    this._getCommentEmojiInput = this._getCommentEmojiInput.bind(this);
  }

  init(container) {
    this._container = container;

    this._selectedCommentEmoji = null;

    this._userInputEmoji = ``;
    this._userInputText = ``;

    this._commentsListView = new CommentsListView(this._film, this._userInputText, this._userInputEmoji);
    render(this._container, this._commentsListView);

    this._commentsListView.setCommentEmojiClickHandler((emojiType) => {
      this._userInputEmoji = this._getCommentEmojiInput(emojiType);
    });

    this._commentsListView.setCommentInputHandler((value) => {
      this._userInputText = value;
    });

    const comments = this._commentsModel.getComments();

    this._commentsFilm = [];

    for (let i = 0; i < comments.length; i++) {
      this._renderComment(i, comments[i]);
    }

    document.addEventListener(`keydown`, this._handleAddComment);
  }

  _renderComment(i, comment) {
    this._commentsFilm[i] = new CommentView(comment);

    render(this._commentsListView.getElement().querySelector(`.film-details__comments-list`), this._commentsFilm[i]);

    this._commentsFilm[i].setDeleteCommentHandler(() => {
      this._handeDeleteClick(this._commentsFilm[i]);
    });
  }

  _getCommentEmojiInput(emojiType) {
    if (this._selectedCommentEmoji === emojiType) {
      return this._userInputEmoji;
    }

    const emojiAddContainer = this._commentsListView.getElement().querySelector(`.film-details__add-emoji-label`);

    switch (emojiType) {
      case EmojiType.SMILE:
        this._userInputEmoji = `<img src="images/emoji/${EmojiType.SMILE.replace(`emoji-`, ``)}.png" width="55" height="55" alt="${emojiType}">`;
        break;
      case EmojiType.SLEEPING:
        this._userInputEmoji = `<img src="images/emoji/${EmojiType.SLEEPING.replace(`emoji-`, ``)}.png" width="55" height="55" alt="${emojiType}">`;
        break;
      case EmojiType.PUKE:
        this._userInputEmoji = `<img src="images/emoji/${EmojiType.PUKE.replace(`emoji-`, ``)}.png" width="55" height="55" alt="${emojiType}">`;
        break;
      case EmojiType.ANGRY:
        this._userInputEmoji = `<img src="images/emoji/${EmojiType.ANGRY.replace(`emoji-`, ``)}.png" width="55" height="55" alt="${emojiType}">`;
        break;
    }

    emojiAddContainer.innerHTML = this._userInputEmoji;

    this._selectedCommentEmoji = emojiType;

    return this._userInputEmoji;
  }

  _getCommentTextInput(evt) {
    return evt.target.value;
  }

  getCommentsListView() {
    return this._commentsListView;
  }

  _getSelectedCommentEmoji() {
    if (this._selectedCommentEmoji === null) {
      return ``;
    } else {
      return this._selectedCommentEmoji.replace(`emoji-`, ``);
    }
  }

  _getNewComment(evt) {
    return {
      id: generateId(),
      author: `AD-42`,
      comment: this._getCommentTextInput(evt),
      date: new Date(),
      emotion: this._getSelectedCommentEmoji(),
    };
  }

  _handleAddComment(evt) {
    if (evt.ctrlKey && evt.keyCode === 13) {
      if (this._getNewComment(evt).emotion === `` || this._getNewComment(evt).comment === ``) {
        return;
      }

      this._handleViewAction(UserAction.ADD_COMMENT, this._getNewComment(evt));
    }
  }

  _handeDeleteClick(comment) {
    this._handleViewAction(UserAction.DELETE_COMMENT, comment.getComment());
    remove(comment);
  }

  _handleViewAction(actionType, update, updateType = UpdateType.PATCH) {

    switch (actionType) {
      case UserAction.ADD_COMMENT:
        this._commentsModel.addComment(updateType, update);
        this._film.comments = this._commentsModel.getComments();
        this._moviesModel.updateFilm(updateType, this._film);
        break;
      case UserAction.DELETE_COMMENT:
        this._commentsModel.deleteComment(updateType, update);
        this._film.comments = this._commentsModel.getComments();
        this._moviesModel.updateFilm(updateType, this._film);
        break;
    }
  }
}
