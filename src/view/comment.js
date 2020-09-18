import Abstract from './abstract.js';
import he from "he";
import {setFormatCommentDate} from '../utils/util.js';

const createFilmCommentsTemplate = (comment) => {
  let emotion = ``;
  if (comment.emotion !== ``) {
    emotion = `<img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-smile"></img>`;
  }

  return (
    `<li class="film-details__comment">
    <span class="film-details__comment-emoji">${emotion}</span>
    <div>
      <p class="film-details__comment-text">${he.encode(comment.comment)}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${comment.author}</span>
        <span class="film-details__comment-day">${setFormatCommentDate(comment.date)}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`
  );
};

export default class Comment extends Abstract {
  constructor(comment) {
    super();
    this._comment = comment;

    this._deleteCommentHandler = this._deleteCommentHandler.bind(this);
  }

  _getTemplate() {
    return createFilmCommentsTemplate(this._comment);
  }

  _deleteCommentHandler(evt) {
    evt.preventDefault();
    this._callback.deleteComment();
  }

  setDeleteCommentHandler(callback) {
    this._callback.deleteComment = callback;
    this.getElement().querySelector(`.film-details__comment-delete`).addEventListener(`click`, this._deleteCommentHandler);
  }

  getComment() {
    return this._comment;
  }
}
