import {QuantityFilms, SortType} from '../variables.js';
import SortingView from '../view/sorting.js';
import FilmsContainerView from '../view/films-container.js';
import FilmCardView from '../view/film-card.js';
// import FilmDetailsView from '../view/film-details.js';
// import CommentView from '../view/comment.js';
import ShowMoreButtonView from '../view/show-more-button.js';
import {randomFilms} from '../mock/films.js';
import {render, remove} from '../utils/render.js';
import {sortFilmsDate, sortFilmsRating} from '../utils/sort.js';
import MovieDetailsPresenter from './movie-details.js';

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
    this._currentSortType = SortType.DEFAULT;
    this._moviesCards = {};
    this._moviesDetailsCards = {};

    this._renderFilmsList = this._renderFilmsList.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._clearFilmList = this._clearFilmList.bind(this);
  }

  init() {
    this._renderSort();
    render(this._container, new FilmsContainerView());

    this._renderFilmsCards();
  }

  _renderFilmsCards() {
    this._filmsList = this._container.querySelector(`.films-list`);
    const filmsListExtra = this._container.querySelectorAll(`.films-list--extra`);

    render(this._filmsList, this._showMoreButtonComponent);

    for (let i = 0; i < this._quantityRenderFilms; i++) {
      const FilmCard = new FilmCardView(this._films[i]);
      this._moviesCards[this._films[i].id] = FilmCard;

      render(this._filmsList.querySelector(`.films-list__container`), FilmCard);

      FilmCard.setClickHandler(() => {
        this._renderFilmDetails(this._films[i]);
      });

    }

    for (let i = 0; i < this._quantityExtraCategories; i++) {
      for (let k = 0; k < this._quantityRenderExtraFilms; k++) {
        const extraFilmsCategories = filmsListExtra[i].querySelector(`.films-list__container`);

        const FilmCard = new FilmCardView(this._films[k]);

        render(extraFilmsCategories, FilmCard);

        FilmCard.setClickHandler(() => {
          this._renderFilmDetails(this._films[k]);
        });
      }
    }

    this._showMoreButtonComponent.setClickHandler(this._renderFilmsList);
  }

  _renderFilmDetails(film) {
    if (this._moviesDetailsCards !== {}) {
      Object.values(this._moviesDetailsCards).forEach((card) => card.destroy());
    }

    const movieDetailsPresenter = new MovieDetailsPresenter(film);
    movieDetailsPresenter.init();

    this._moviesDetailsCards[film.id] = movieDetailsPresenter;
  }

  _renderFilmsList() {
    const prevFilmsCount = this._showingFilmsCount;
    this._showingFilmsCount += this._quantityRenderFilms;

    this._films.slice(prevFilmsCount, this._showingFilmsCount).forEach((elem, i) => {
      const FilmCard = new FilmCardView(elem);
      this._moviesCards[this._films[prevFilmsCount + i].id] = FilmCard;

      render(this._filmsList.querySelector(`.films-list__container`), FilmCard);

      FilmCard.setClickHandler(() => {
        this._renderFilmDetails(this._films[prevFilmsCount + i]);
      });
    });

    if (this._showingFilmsCount >= this._films.length) {
      remove(this._showMoreButtonComponent);
    }
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    switch (sortType) {
      case SortType.DATE:
        this._films.sort(sortFilmsDate);
        break;
      case SortType.RATING:
        this._films.sort(sortFilmsRating);
        break;
      default:
        this._films = this._sourceFilms.slice();
    }

    this._currentSortType = sortType;

    this._clearFilmList();
    this._renderFilmsCards();
  }

  _renderSort() {
    const sortComponent = new SortingView(SortType);
    render(this._container, sortComponent);

    sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _clearFilmList() {
    Object.values(this._moviesCards).forEach((card) => remove(card));
    this._moviesCards = {};
    this._showingFilmsCount = this._quantityRenderFilms;
  }
}
