import Abstract from './abstract.js';
import {FilterType} from '../variables.js';

const createMenuTemplate = (filter, currentFilterType) => {
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item ${currentFilterType === FilterType.ALL ? `main-navigation__item--active` : ``}" data-filter-type="${FilterType.ALL}">All movies</a>
        <a href="#watchlist" class="main-navigation__item ${currentFilterType === FilterType.WATCHLIST ? `main-navigation__item--active` : ``}" data-filter-type="${FilterType.WATCHLIST}">Watchlist <span class="main-navigation__item-count">${filter.watchlist}</span></a>
        <a href="#history" class="main-navigation__item ${currentFilterType === FilterType.HISTORY ? `main-navigation__item--active` : ``}" data-filter-type="${FilterType.HISTORY}">History <span class="main-navigation__item-count">${filter.history}</span></a>
        <a href="#favorites" class="main-navigation__item ${currentFilterType === FilterType.FAVORITES ? `main-navigation__item--active` : ``}" data-filter-type="${FilterType.FAVORITES}">Favorites <span class="main-navigation__item-count">${filter.favorites}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

export default class Menu extends Abstract {
  constructor(filter, currentFilterType) {
    super();
    this._filter = filter;
    this._currentFilterType = currentFilterType;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  _getTemplate() {
    return createMenuTemplate(this._filter, this._currentFilterType);
  }

  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.currentTarget.dataset.filterType);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;

    const filterItems = this.getElement().querySelectorAll(`.main-navigation__item`);

    for (const elem of filterItems) {
      elem.addEventListener(`click`, this._filterTypeChangeHandler);
    }
  }
}
