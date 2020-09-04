import {QuantityFilms, SortType} from '../variables.js';
import SortingView from '../view/sorting.js';
import FilmsContainerView from '../view/films-container.js';
import ShowMoreButtonView from '../view/show-more-button.js';
import {randomFilms} from '../mock/films.js';
import {render, remove} from '../utils/render.js';
import {sortFilmsDate, sortFilmsRating} from '../utils/sort.js';
import {updateItem} from '../utils/util.js';
import MoviePresenter from './movie.js';

export default class MovieList {
  constructor(container) {
    this._container = container;

    this._quantityRenderFilms = QuantityFilms.FILMS;
    this._quantityRenderExtraFilms = QuantityFilms.EXTRA_FILMS;
    this._quantityExtraCategories = QuantityFilms.EXTRA_CATEGORIES;
    this._showingFilmsCount = this._quantityRenderFilms;

    this._films = randomFilms.slice();
    this._sourceFilms = randomFilms.slice();
    this._filmsContainerComponent = new FilmsContainerView();
    this._showMoreButtonComponent = new ShowMoreButtonView();
    this._sortComponent = new SortingView(SortType);
    this._currentSortType = SortType.DEFAULT;
    this._moviesCards = {};

    this._renderFilmsList = this._renderFilmsList.bind(this);
    this._renderFilm = this._renderFilm.bind(this);
    this._renderFilms = this._renderFilms.bind(this);
    this._renderFilmsCards = this._renderFilmsCards.bind(this);
    this._clearFilmsDetails = this._clearFilmsDetails.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._clearFilmList = this._clearFilmList.bind(this);
    this._handleFilmChange = this._handleFilmChange.bind(this);
  }

  init() {
    this._renderSort();
    this._renderFilmsContainers();
    this._renderShowMoreButton();

    this._renderFilmsCards();
  }

  _renderFilmsContainers() {
    render(this._container, new FilmsContainerView());

    this._filmsList = this._container.querySelector(`.films-list`);
    this._filmsListExtraRated = this._container.querySelectorAll(`.films-list--extra-rated`);
    this._filmsListExtraComments = this._container.querySelectorAll(`.films-list--extra-comments`);
  }

  _renderShowMoreButton() {
    render(this._filmsList, this._showMoreButtonComponent);
    this._showMoreButtonComponent.setClickHandler(this._renderFilmsList);
  }

  _renderFilm(film) {
    const moviePresenter = new MoviePresenter(this._handleFilmChange);
    moviePresenter.init(film, this._filmsList.querySelector(`.films-list__container`), this._clearFilmsDetails);
    this._moviesCards[film.id] = moviePresenter;
  }

  _renderFilms(from, to) {
    this._films
      .slice(from, to)
      .forEach((film) => this._renderFilm(film));
  }

  _renderFilmsCards() {
    this._renderFilms(0, this._quantityRenderFilms);
  }

  _renderFilmsList() {
    const prevFilmsCount = this._showingFilmsCount;
    this._showingFilmsCount += this._quantityRenderFilms;

    this._renderFilms(prevFilmsCount, this._showingFilmsCount);

    if (this._showingFilmsCount >= this._films.length) {
      remove(this._showMoreButtonComponent);
    }
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortComponent.getElement().querySelector(`.sort__button--active`).classList.remove(`sort__button--active`);

    switch (sortType) {
      case SortType.DATE:
        this._films.sort(sortFilmsDate);
        this._sortComponent.getElement().querySelector(`.sort__button[data-sort-type="date"]`).classList.add(`sort__button--active`);
        break;
      case SortType.RATING:
        this._films.sort(sortFilmsRating);
        this._sortComponent.getElement().querySelector(`.sort__button[data-sort-type="rating"]`).classList.add(`sort__button--active`);
        break;
      default:
        this._films = this._sourceFilms.slice();
        this._sortComponent.getElement().querySelector(`.sort__button[data-sort-type="default"]`).classList.add(`sort__button--active`);
    }

    this._currentSortType = sortType;

    this._clearFilmList();
    this._renderFilmsCards();
  }

  _renderSort() {
    render(this._container, this._sortComponent);

    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _clearFilmList() {
    Object.values(this._moviesCards).forEach((card) => remove(card._filmCardComponent));
    this._moviesCards = {};
    this._showingFilmsCount = this._quantityRenderFilms;
  }

  _clearFilmsDetails() {
    Object.values(this._moviesCards).forEach((elem) => elem.destroyFilmDetails());
  }

  _handleFilmChange(updateFilm, popupStatus) {
    this._films = updateItem(this._films, updateFilm);
    this._sourceFilms = updateItem(this._sourceFilms, updateFilm);

    if (popupStatus) {
      this._moviesCards[updateFilm.id].destroyFilmDetails();
    }

    this._moviesCards[updateFilm.id].init(updateFilm, this._filmsList.querySelector(`.films-list__container`), this._clearFilmsDetails);
  }
}
