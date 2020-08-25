import FilmsContainerView from '../view/films.js';
import FilmCardView from '../view/film-card.js';
import FilmDetailsView from '../view/film-details.js';
import CommentView from '../view/comments.js';
import ShowMoreButtonView from '../view/show-more-button.js';
import {randomFilms} from '../mock/films.js';
import {render, remove} from '../utils/render.js';

const QUANTITY_RENDER_FILMS = 5;
const QUANTITY_RENDER_EXTRA_FILMS = 2;
const QUANTITY_EXTRA_CATEGORIES = 2;
let showingFilmsCount = QUANTITY_RENDER_FILMS;

export default class MovieList {
  constructor(containerFilms, containersFilmsExtra) {
    this._containerFilms = containerFilms;
    this._containersFilmsExtra = containersFilmsExtra;
    this._filmsContainerComponent = new FilmsContainerView();
    this._filmCardComponent = new FilmCardView();
    this._filmDetailsComponent = new FilmDetailsView();
    this._showMoreButtonComponent = new ShowMoreButtonView();

    this._renderFilmsList = this._renderFilmsList.bind(this);
  }

  init() {
    render(this._containerFilms, this._showMoreButtonComponent);

    for (let i = 0; i < QUANTITY_RENDER_FILMS; i++) {
      const FilmCard = new FilmCardView(randomFilms[i]);

      render(this._containerFilms.querySelector(`.films-list__container`), FilmCard);

      FilmCard.setClickHandler(() => {
        this._renderFilmDetails(randomFilms[i]);
      });

    }

    for (let i = 0; i < QUANTITY_EXTRA_CATEGORIES; i++) {
      for (let k = 0; k < QUANTITY_RENDER_EXTRA_FILMS; k++) {
        const extraFilmsCategories = this._containersFilmsExtra[i].querySelector(`.films-list__container`);

        const FilmCard = new FilmCardView(randomFilms[k]);

        render(extraFilmsCategories, FilmCard);

        FilmCard.setClickHandler(() => {
          this._renderFilmDetails(randomFilms[k]);
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

    randomFilms.slice(prevFilmsCount, showingFilmsCount).forEach((elem, i) => {
      const FilmCard = new FilmCardView(elem);

      render(this._containerFilms.querySelector(`.films-list__container`), FilmCard);

      FilmCard.setClickHandler(() => {
        this._renderFilmDetails(randomFilms[prevFilmsCount + i]);
      });
    });

    if (showingFilmsCount >= randomFilms.length) {
      remove(this._showMoreButtonComponent);
    }
  }

}
