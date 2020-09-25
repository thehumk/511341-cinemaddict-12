import {QuantityFilms, SortType, UpdateType} from '../variables.js';
import SortingView from '../view/sorting.js';
import FilmsContainerView from '../view/films-container.js';
import ShowMoreButtonView from '../view/show-more-button.js';
import NoDataView from '../view/no-data.js';
import LoadingView from '../view/loading.js';
import {render, remove} from '../utils/render.js';
import {sortFilmsDate, sortFilmsRating} from '../utils/sort.js';
import {filter} from '../utils/filter.js';
import MoviePresenter from './movie.js';

export default class MovieList {
  constructor(container, moviesModel, filterModel, api, profileView) {
    this._container = container;
    this._moviesModel = moviesModel;
    this._filterModel = filterModel;
    this._api = api;
    this._profileView = profileView;

    this._isLoading = true;

    this._quantityRenderFilms = QuantityFilms.FILMS;
    this._showingFilmsCount = this._quantityRenderFilms;

    this._filmsContainerComponent = new FilmsContainerView();
    this._noDataComponent = new NoDataView();
    this._loadingComponent = new LoadingView();

    this._sortComponent = null;
    this._showMoreButtonComponent = null;

    this._currentSortType = SortType.DEFAULT;
    this._moviesCards = {};

    this._renderFilmsList = this._renderFilmsList.bind(this);
    this._renderFilm = this._renderFilm.bind(this);
    this._renderFilms = this._renderFilms.bind(this);
    this._clearFilmsDetails = this._clearFilmsDetails.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._renderBoard = this._renderBoard.bind(this);

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);

    this._moviesModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._renderSort();
    this._renderBoard();
  }

  _renderFilmsContainers() {
    render(this._container, this._filmsContainerComponent);

    this._filmsList = this._container.querySelector(`.films-list`);
  }

  _renderShowMoreButton() {
    if (this._showMoreButtonComponent !== null) {
      this._showMoreButtonComponent = null;
    }

    this._showMoreButtonComponent = new ShowMoreButtonView();
    this._showMoreButtonComponent.setClickHandler(this._renderFilmsList);
    render(this._filmsList, this._showMoreButtonComponent);
  }

  _renderFilm(film) {
    const moviePresenter = new MoviePresenter(this._handleViewAction, this._moviesModel, this._api);
    this._moviesCards[film.id] = moviePresenter;

    this._moviesCards[film.id].init(film, this._filmsList.querySelector(`.films-list__container`), this._clearFilmsDetails);
  }

  _renderFilms(films) {
    films.forEach((film) => this._renderFilm(film));
  }

  _renderFilmsList() {
    const filmsCount = this._getFilms().length;
    const newRenderedFilmsCount = Math.min(filmsCount, this._showingFilmsCount + this._quantityRenderFilms);

    const films = this._getFilms().slice(this._showingFilmsCount, newRenderedFilmsCount);

    this._renderFilms(films);
    this._showingFilmsCount = newRenderedFilmsCount;

    if (this._showingFilmsCount >= filmsCount) {
      remove(this._showMoreButtonComponent);
    }
  }

  _getFilms() {
    const filterType = this._filterModel.getFilter();
    const films = this._moviesModel.getFilms();
    const filteredFilms = filter[filterType](films);

    switch (this._currentSortType) {
      case SortType.DATE:
        return filteredFilms.sort(sortFilmsDate);
      case SortType.RATING:
        return filteredFilms.sort(sortFilmsRating);
    }

    return filteredFilms;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortComponent.getElement().querySelector(`.sort__button--active`).classList.remove(`sort__button--active`);

    this._currentSortType = sortType;

    this._clearBoard({resetRenderedFilmCount: true});
    this._renderBoard();
  }

  _renderSort() {
    if (this._sortComponent !== null) {
      remove(this._sortComponent);
      this._sortComponent = null;
    }

    this._sortComponent = new SortingView(SortType);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
    render(this._container, this._sortComponent);
  }

  _clearFilmsDetails() {
    Object.values(this._moviesCards).forEach((elem) => {
      elem.destroyFilmDetails();
    });
  }

  _handleViewAction(updateType, updateFilm) {
    this._api.updateFilm(updateFilm).then((response) => {
      this._moviesModel.updateFilm(updateType, response);
    });
  }

  _handleModelEvent(updateType, update) {
    switch (updateType) {
      case UpdateType.PATCH:
        this._clearFilmsDetails();
        this._moviesCards[update.id].init(update, this._filmsList.querySelector(`.films-list__container`), this._clearFilmsDetails);
        break;
      case UpdateType.MINOR:
        this._profileView.updateElement();
        const popupStatus = this._moviesCards[update.id].popupStatus;

        this._clearBoard();
        this._renderBoard();

        if (popupStatus) {
          this._moviesCards[update.id].openPopupFilm();
        }
        break;
      case UpdateType.MAJOR:
        this._clearBoard({resetRenderedFilmCount: true, resetSortType: true});
        this._renderBoard({renderSort: true});
        break;
      case UpdateType.INIT:
        this._isLoading = false;
        remove(this._loadingComponent);
        this._renderBoard();
        break;
    }
  }

  _clearBoard({resetRenderedFilmCount = false, resetSortType = false} = {}) {
    const filmsCount = this._getFilms().length;

    Object.values(this._moviesCards).forEach((elem) => elem.destroy());
    this._moviesCards = {};

    remove(this._filmsContainerComponent);
    remove(this._showMoreButtonComponent);
    remove(this._noDataComponent);
    remove(this._loadingComponent);

    if (resetRenderedFilmCount) {
      this._showingFilmsCount = this._quantityRenderFilms;
    } else {
      this._showingFilmsCount = Math.min(filmsCount, this._showingFilmsCount);
    }

    if (resetSortType) {
      remove(this._sortComponent);
      this._currentSortType = SortType.DEFAULT;
    }
  }

  _renderBoard({renderSort = false} = {}) {
    if (this._isLoading) {
      render(this._container, this._loadingComponent);
      return;
    }

    const films = this._getFilms();
    const filmsCount = films.length;

    if (renderSort) {
      this._renderSort();
    }

    if (filmsCount === 0) {
      render(this._container, this._noDataComponent);
      return;
    }

    this._renderFilmsContainers();

    this._renderFilms(films.slice(0, Math.min(filmsCount, this._showingFilmsCount)));

    if (filmsCount > this._showingFilmsCount) {
      this._renderShowMoreButton();
    }
  }

  hideMovieList() {
    this._clearBoard({resetRenderedFilmCount: true, resetSortType: true});
  }
}
