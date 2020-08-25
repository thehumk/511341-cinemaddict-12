import Abstract from './abstract.js';

const createFilmCommentsTemplate = (comment) => {
  return (
    `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-smile">
    </span>
    <div>
      <p class="film-details__comment-text">${comment.comment}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${comment.author}</span>
        <span class="film-details__comment-day">${comment.date.getFullYear() + `/` + comment.date.getMonth() + `/` + comment.date.getDate() + ` ` + comment.date.getHours() + `:` + comment.date.getMinutes()}</span>
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
  }

  _getTemplate() {
    return createFilmCommentsTemplate(this._comment);
  }
}
