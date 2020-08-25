import {QUANTITY_ALL_FILMS} from './variables.js';
import {render} from './utils/render.js';
import ProfileView from './view/profile.js';
import MenuView from './view/menu.js';
import SortingView from './view/sorting.js';
import FilmsContainerView from './view/films.js';
import FooterStatisticsView from './view/footer-statistics.js';
import {profileMock} from './mock/profile.js';
import {filter} from './mock/filter.js';
import MovieListPresenter from './presenter/movie.js';

// const QUANTITY_RENDER_FILMS = 5;
// const QUANTITY_RENDER_EXTRA_FILMS = 2;
// const QUANTITY_EXTRA_CATEGORIES = 2;
// let showingFilmsCount = QUANTITY_RENDER_FILMS;

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);

render(siteHeader, new ProfileView(profileMock));
render(siteMain, new MenuView(filter));
render(siteMain, new SortingView());
render(siteMain, new FilmsContainerView());
render(footerStatistics, new FooterStatisticsView(QUANTITY_ALL_FILMS));

const filmsList = siteMain.querySelector(`.films-list`);
const filmsListExtra = siteMain.querySelectorAll(`.films-list--extra`);

const movieList = new MovieListPresenter(filmsList, filmsListExtra);
movieList.init();
