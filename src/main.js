import {UpdateType, AUTHORIZATION, END_POINT} from './variables.js';
import {render} from './utils/render.js';
import ProfileView from './view/profile.js';
import FooterStatisticsView from './view/footer-statistics.js';
import MoviesModel from './model/movies.js';
import FilterModel from './model/filter.js';
import MovieListPresenter from './presenter/movie-list.js';
import FilterPresenter from './presenter/filter.js';
import Api from './api.js';

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);
const footerStatisticsContainer = document.querySelector(`.footer__statistics`);

const api = new Api(END_POINT, AUTHORIZATION);

const filterModel = new FilterModel();
const moviesModel = new MoviesModel();

const profileView = new ProfileView(moviesModel);
render(siteHeader, profileView);

const filterPresenter = new FilterPresenter(siteMain, filterModel, moviesModel);
const moviesPresenter = new MovieListPresenter(siteMain, moviesModel, filterModel, api, profileView);

filterPresenter.init(moviesPresenter);
moviesPresenter.init();

api.getFilms()
  .then((films) => {
    moviesModel.setFilms(UpdateType.INIT, films);
    profileView.updateElement();
    render(footerStatisticsContainer, new FooterStatisticsView(films.length));
  })
  .catch(() => {
    moviesModel.setFilms(UpdateType.INIT, []);
    render(footerStatisticsContainer, new FooterStatisticsView(0));
  });
