import {QuantityFilms} from './variables.js';
import {render} from './utils/render.js';
import ProfileView from './view/profile.js';
import FooterStatisticsView from './view/footer-statistics.js';
import MoviesModel from './model/movies.js';
import FilterModel from './model/filter.js';
import {randomFilms, QANTITY_FILMS} from './mock/films.js';
import {profileMock} from './mock/profile.js';
import MovieListPresenter from './presenter/movie-list.js';
import FilterPresenter from './presenter/filter.js';

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);

const filterModel = new FilterModel();
const moviesModel = new MoviesModel();

moviesModel.setFilms(randomFilms);

render(siteHeader, new ProfileView(profileMock));

const filterPresenter = new FilterPresenter(siteMain, moviesModel.getFilms(), filterModel, moviesModel);
const movieList = new MovieListPresenter(siteMain, moviesModel, filterModel);


if (QANTITY_FILMS === 0) {
  render(footerStatistics, new FooterStatisticsView(0));
} else {
  render(footerStatistics, new FooterStatisticsView(QuantityFilms.ALL_FILMS));
}

filterPresenter.init(movieList);
movieList.init();
