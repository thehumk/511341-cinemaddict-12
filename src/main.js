import {QUANTITY_ALL_FILMS} from './variables.js';
import {createProfileTemplate} from './view/profile.js';
import {createMenuTemplate} from './view/menu.js';
import {createSortingTemplate} from './view/sorting.js';
import {createFilmsTemplate} from './view/films.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createFilmDetailsTemplate} from './view/film-details.js';
import {createFooterStatisticsTemplate} from './view/footer-statistics.js';
import {randomFilms} from './mock/films.js';
import {profileMock} from './mock/profile.js';
import {filter} from './mock/filter.js';

const QUANTITY_RENDER_FILMS = 5;
const QUANTITY_RENDER_EXTRA_FILMS = 2;
const QUANTITY_EXTRA_CATEGORIES = 2;
let showingFilmsCount = QUANTITY_RENDER_FILMS;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);

render(siteHeader, createProfileTemplate(profileMock));
render(siteMain, createMenuTemplate(filter));
render(siteMain, createSortingTemplate());
render(siteMain, createFilmsTemplate());
render(footerStatistics, createFooterStatisticsTemplate(QUANTITY_ALL_FILMS));

const filmsList = siteMain.querySelector(`.films-list`);
const filmsListExtra = siteMain.querySelectorAll(`.films-list--extra`);
const showMoreButton = filmsList.querySelector(`.films-list__show-more`);

const setOpenPopupHandler = (target, i) => {
  target.addEventListener(`click`, () => {
    openPopupFilm(randomFilms[i]);
  });
};

for (let i = 0; i < QUANTITY_RENDER_FILMS; i++) {
  render(filmsList.querySelector(`.films-list__container`), createFilmCardTemplate(randomFilms[i]));
}

for (let i = 0; i < QUANTITY_EXTRA_CATEGORIES; i++) {
  for (let k = 0; k < QUANTITY_RENDER_EXTRA_FILMS; k++) {
    const extraFilmsCategories = filmsListExtra[i].querySelector(`.films-list__container`);
    render(extraFilmsCategories, createFilmCardTemplate(randomFilms[k]));

    const extraFilms = extraFilmsCategories.querySelectorAll(`.film-card`);
    extraFilms.forEach((elem, j) => {
      setOpenPopupHandler(elem.querySelector(`.film-card__poster`), j);
      setOpenPopupHandler(elem.querySelector(`.film-card__title`), j);
      setOpenPopupHandler(elem.querySelector(`.film-card__comments`), j);
    });
  }
}

const mainFilmsList = siteMain.querySelector(`.films-list`).querySelector(`.films-list__container`);

const filmCardPosters = mainFilmsList.querySelectorAll(`.film-card__poster`);
const filmCardTitle = mainFilmsList.querySelectorAll(`.film-card__title`);
const filmCardComments = mainFilmsList.querySelectorAll(`.film-card__comments`);

for (let i = 0; i < QUANTITY_RENDER_FILMS; i++) {
  setOpenPopupHandler(filmCardPosters[i], i);
  setOpenPopupHandler(filmCardTitle[i], i);
  setOpenPopupHandler(filmCardComments[i], i);
}

const openPopupFilm = (film) => {
  if (document.querySelector(`.film-details`)) {
    document.querySelector(`.film-details`).remove();
  }

  render(siteFooter, createFilmDetailsTemplate(film), `afterend`);

  const filmPopup = document.querySelector(`.film-details`);

  filmPopup.querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
    filmPopup.remove();
    document.removeEventListener(`keydown`, closePopupKeydown);
  });

  const closePopupKeydown = (evt) => {
    if (evt.keyCode === 27) {
      filmPopup.remove();
      document.removeEventListener(`keydown`, closePopupKeydown);
    }
  };

  document.addEventListener(`keydown`, closePopupKeydown);
};

const renderFilmsList = () => {
  const prevFilmsCount = showingFilmsCount;
  showingFilmsCount += QUANTITY_RENDER_FILMS;

  randomFilms.slice(prevFilmsCount, showingFilmsCount).forEach((elem) => {
    render(filmsList.querySelector(`.films-list__container`), createFilmCardTemplate(elem));
  });

  filmCardPosters = mainFilmsList.querySelectorAll(`.film-card__poster`);
  filmCardTitle = mainFilmsList.querySelectorAll(`.film-card__title`);
  filmCardComments = mainFilmsList.querySelectorAll(`.film-card__comments`);

  for (let i = prevFilmsCount; i < showingFilmsCount; i++) {
    setOpenPopupHandler(filmCardPosters[i], i);
    setOpenPopupHandler(filmCardTitle[i], i);
    setOpenPopupHandler(filmCardComments[i], i);
  }

  if (showingFilmsCount >= randomFilms.length) {
    showMoreButton.remove();
  }
};

showMoreButton.addEventListener(`click`, renderFilmsList);

