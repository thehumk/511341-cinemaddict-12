import {createProfileTemplate} from './view/profile.js';
import {createMenuTemplate} from './view/menu.js';
import {createSortingTemplate} from './view/sorting.js';
import {createFilmsTemplate} from './view/films.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createFilmDetailsTemplate} from './view/film-details.js';
import {createFooterStatisticsTemplate} from './view/footer-statistics.js';

const QUANTITY_RENDER_FILMS = 5;
const QUANTITY_RENDER_EXTRA_FILMS = 2;
const QUANTITY_EXTRA_CATEGORIES = 2;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);

render(siteHeader, createProfileTemplate());
render(siteMain, createMenuTemplate());
render(siteMain, createSortingTemplate());
render(siteMain, createFilmsTemplate());
render(footerStatistics, createFooterStatisticsTemplate());

const filmsList = siteMain.querySelector(`.films-list`);
const filmsListExtra = siteMain.querySelectorAll(`.films-list--extra`);

for (let i = 0; i < QUANTITY_RENDER_FILMS; i++) {
  render(filmsList.querySelector(`.films-list__container`), createFilmCardTemplate());
}

for (let i = 0; i < QUANTITY_EXTRA_CATEGORIES; i++) {
  for (let k = 0; k < QUANTITY_RENDER_EXTRA_FILMS; k++) {
    render(filmsListExtra[i].querySelector(`.films-list__container`), createFilmCardTemplate());
  }
}

render(siteFooter, createFilmDetailsTemplate(), `afterend`);
