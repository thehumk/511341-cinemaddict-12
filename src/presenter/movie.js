import {SortType} from '../variables.js';
import SortingView from '../view/sorting.js';
import FilmsContainerView from '../view/films.js';
import FilmCardView from '../view/film-card.js';
import FilmDetailsView from '../view/film-details.js';
import CommentView from '../view/comments.js';
import ShowMoreButtonView from '../view/show-more-button.js';
import {randomFilms} from '../mock/films.js';
import {render, remove} from '../utils/render.js';
import {sortFilmsDate, sortFilmsRating} from '../utils/sort.js';

const QUANTITY_RENDER_FILMS = 5;
const QUANTITY_RENDER_EXTRA_FILMS = 2;
const QUANTITY_EXTRA_CATEGORIES = 2;
let showingFilmsCount = QUANTITY_RENDER_FILMS;

export default class MovieList {
  constructor(container) {
    this._container = container;
    this._films = randomFilms.slice();
    this._sourceFilms = randomFilms.slice();
    this._filmsContainerComponent = new FilmsContainerView();
    this._showMoreButtonComponent = new ShowMoreButtonView();
    this._currentSortType = SortType.DEFAULT;

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

    for (let i = 0; i < QUANTITY_RENDER_FILMS; i++) {
      const FilmCard = new FilmCardView(this._films[i]);

      render(this._filmsList.querySelector(`.films-list__container`), FilmCard);

      FilmCard.setClickHandler(() => {
        this._renderFilmDetails(this._films[i]);
      });

    }

    for (let i = 0; i < QUANTITY_EXTRA_CATEGORIES; i++) {
      for (let k = 0; k < QUANTITY_RENDER_EXTRA_FILMS; k++) {
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
    if (document.querySelector(`.film-details`)) {
      document.querySelector(`.film-details`).remove();
    }

    const FilmDetails = new FilmDetailsView(film);

    const siteFooter = document.querySelector(`.footer`);

    render(siteFooter, FilmDetails, `afterend`);

    for (let k = 0; k < film.comments.length; k++) {
      render(FilmDetails.getElement().querySelector(`.film-details__comments-list`), new CommentView(film.comments[k]));
    }

    const closePopupKeydown = (evt) => {
      if (evt.keyCode === 27) {
        remove(FilmDetails);
        document.removeEventListener(`keydown`, closePopupKeydown);
      }
    };

    FilmDetails.setClickHandler(() => {
      remove(FilmDetails);
      document.removeEventListener(`keydown`, closePopupKeydown);
    });

    document.addEventListener(`keydown`, closePopupKeydown);
  }

  _renderFilmsList() {
    const prevFilmsCount = showingFilmsCount;
    showingFilmsCount += QUANTITY_RENDER_FILMS;

    this._films.slice(prevFilmsCount, showingFilmsCount).forEach((elem, i) => {
      const FilmCard = new FilmCardView(elem);

      render(this._filmsList.querySelector(`.films-list__container`), FilmCard);

      FilmCard.setClickHandler(() => {
        this._renderFilmDetails(this._films[prevFilmsCount + i]);
      });
    });

    if (showingFilmsCount >= this._films.length) {
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
    this._filmsList.querySelector(`.films-list__container`).innerHTML = ``;
    showingFilmsCount = QUANTITY_RENDER_FILMS;
  }
}
