import {createElement} from '../utils/render.js';

const createProfileTemplate = (profile) => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${profile.rating}</p>
      <img class="profile__avatar" src="${profile.avatar}" alt="Avatar" width="35" height="35">
    </section>`
  );
};

export default class Profile {
  constructor(profile) {
    this._element = null;
    this._profile = profile;
  }

  _getTemplate() {
    return createProfileTemplate(this._profile);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
