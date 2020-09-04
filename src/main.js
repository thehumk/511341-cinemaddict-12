import {QuantityFilms} from './variables.js';
import {render} from './utils/render.js';
import ProfileView from './view/profile.js';
import MenuView from './view/menu.js';
import NoDataView from './view/no-data.js';
import FooterStatisticsView from './view/footer-statistics.js';
import {QANTITY_FILMS} from './mock/films.js';
import {profileMock} from './mock/profile.js';
import {filter} from './mock/filter.js';
import MovieListPresenter from './presenter/movie-list.js';

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);

render(siteHeader, new ProfileView(profileMock));
render(siteMain, new MenuView(filter));

if (QANTITY_FILMS === 0) {
  const noData = new NoDataView();
  render(siteMain, noData);
  render(footerStatistics, new FooterStatisticsView(0));
} else {
  render(footerStatistics, new FooterStatisticsView(QuantityFilms.ALL_FILMS));

  const movieList = new MovieListPresenter(siteMain);
  movieList.init();
}
