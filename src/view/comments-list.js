import Abstract from './abstract.js';

const createCommentsListTemplate = (film, userInputText, userInputEmoji) => {
  return (
    `<section class="film-details__comments-wrap">
      <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${film.comments.length}</span></h3>

      <ul class="film-details__comments-list">
        
      </ul>

      <div class="film-details__new-comment">
        <div for="add-emoji" class="film-details__add-emoji-label">${userInputEmoji}</div>

        <label class="film-details__comment-label">
          <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">${userInputText}</textarea>
        </label>

        <div class="film-details__emoji-list">
          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
          <label class="film-details__emoji-label" for="emoji-smile">
            <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
          </label>

          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
          <label class="film-details__emoji-label" for="emoji-sleeping">
            <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
          </label>

          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
          <label class="film-details__emoji-label" for="emoji-puke">
            <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
          </label>

          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
          <label class="film-details__emoji-label" for="emoji-angry">
            <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
          </label>
        </div>
      </div>
    </section>`
  );
};

export default class CommentsList extends Abstract {
  constructor(film, userInputText, userInputEmoji) {
    super();
    this._film = film;
    this._userInputText = userInputText;
    this._userInputEmoji = userInputEmoji;

    this._commentEmojiClickHandler = this._commentEmojiClickHandler.bind(this);
    this._commentInputHandler = this._commentInputHandler.bind(this);
  }

  _getTemplate() {
    return createCommentsListTemplate(this._film, this._userInputText, this._userInputEmoji);
  }

  _commentEmojiClickHandler(evt) {
    evt.preventDefault();
    this._callback.commentEmojiClick(evt.currentTarget.getAttribute(`for`));
  }

  setCommentEmojiClickHandler(callback) {
    this._callback.commentEmojiClick = callback;
    const emojies = this.getElement().querySelectorAll(`.film-details__emoji-label`);

    for (let elem of emojies) {
      elem.addEventListener(`click`, this._commentEmojiClickHandler);
    }
  }

  _commentInputHandler(evt) {
    this._callback.commentInput(evt.target.value);
  }

  setCommentInputHandler(callback) {
    this._callback.commentInput = callback;
    this.getElement().querySelector(`.film-details__comment-input`).addEventListener(`input`, this._commentInputHandler);
  }
}
