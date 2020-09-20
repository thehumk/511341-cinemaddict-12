import MenuView from '../view/menu.js';
import StatisticsView from '../view/statistics.js';
import {render, remove, replace} from '../utils/render.js';
import {UpdateType} from '../variables.js';
import {filter} from '../utils/filter.js';

export default class Filter {
  constructor(container, films, filterModel, moviesModel) {
    this._container = container;
    this._films = films;
    this._filterModel = filterModel;
    this._moviesModel = moviesModel;

    this._currentFilter = null;
    this._filterComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
    this._countFilters = this._countFilters.bind(this);
    this._showStatisticsHandler = this._showStatisticsHandler.bind(this);
    this._removeStatisticsHandler = this._removeStatisticsHandler.bind(this);

    this._moviesModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init(moviePresenter) {
    this._currentFilter = this._filterModel.getFilter();
    this._moviePresenter = moviePresenter;

    const prevFilterComponent = this._filterComponent;

    this._filterComponent = new MenuView(this._countFilters(), this._filterModel.getFilter());

    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);
    this._filterComponent.setStatisticsClickHandler(this._showStatisticsHandler);

    if (prevFilterComponent === null) {
      render(this._container, this._filterComponent);
      return;
    }

    replace(this._filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  _handleModelEvent() {
    this.init(this._moviePresenter);
  }

  _handleFilterTypeChange(filterType) {
    if (this._currentFilter === filterType) {
      return;
    }

    this._filterModel.setFilter(UpdateType.MAJOR, filterType);

    this._currentFilter = filterType;
  }

  _countFilters() {
    return {
      watchlist: filter.WATCHLIST(this._moviesModel.getFilms()).length,
      favorites: filter.FAVORITES(this._moviesModel.getFilms()).length,
      history: filter.HISTORY(this._moviesModel.getFilms()).length,
    };
  }

  _showStatisticsHandler() {
    this._moviePresenter.hideMovieList();

    this._statisticsComponent = new StatisticsView(this._films, this._container);
    render(this._container, this._statisticsComponent);

    this._filterComponent.removeStatisticsClickHandler();
    this._filterComponent.setNavigationContainerClickHandler(this._removeStatisticsHandler);

    this._currentFilter = null;
  }

  _removeStatisticsHandler() {
    remove(this._statisticsComponent);

    this._filterComponent.removeNavigationContainerClickHandler();
    this._filterComponent.setStatisticsClickHandler(this._showStatisticsHandler);
  }
}
