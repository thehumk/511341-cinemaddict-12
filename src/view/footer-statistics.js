import {createElement} from '../utils/render.js';

const createFooterStatisticsTemplate = (quantityFilms) => {
  return (
    `<p>${quantityFilms} movies inside</p>`
  );
};

export default class FooterStatistics {
  constructor(quantityFilms) {
    this._element = null;
    this._quantityFilms = quantityFilms;
  }

  _getTemplate() {
    return createFooterStatisticsTemplate(this._quantityFilms);
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
