import Observer from '../utils/observer.js';

export default class Movies extends Observer {
  constructor() {
    super();
    this._films = [];
  }

  setFilms(films) {
    this._films = films.slice();
  }

  getFilms() {
    return this._films;
  }

  updateFilm(updateType, updateItem) {
    const index = this._films.findIndex((film) => film.id === updateItem.id);

    if (index === -1) {
      throw new Error(`Can't update unexisting film`);
    }

    this._films = [
      ...this._films.slice(0, index),
      updateItem,
      ...this._films.slice(index + 1)
    ];

    this._notify(updateType, updateItem);
  }
}
