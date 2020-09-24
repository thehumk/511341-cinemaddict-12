import Observer from '../utils/observer.js';

export default class Comments extends Observer {
  constructor() {
    super();
    this._comments = [];
  }

  setComments(updateType, comments) {
    this._comments = comments;
    this._notify(updateType, comments);
  }

  getComments() {
    return this._comments;
  }

  addComment(updateType, newComment) {
    this._comments = [
      ...this._comments,
      newComment
    ];

    this._notify(updateType, newComment);
  }

  deleteComment(updateType, removeComment) {
    const index = this._comments.findIndex((comment) => comment.id === removeComment.id);

    if (index === -1) {
      throw new Error(`Can't remove unexisting comment`);
    }

    this._comments = [
      ...this._comments.slice(0, index),
      ...this._comments.slice(index + 1)
    ];

    this._notify(updateType, removeComment);
  }
}
