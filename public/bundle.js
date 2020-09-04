/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: MONTHS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHS", function() { return MONTHS; });
const MONTHS = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./src/variables.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _view_profile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/profile.js */ "./src/view/profile.js");
/* harmony import */ var _view_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/menu.js */ "./src/view/menu.js");
/* harmony import */ var _view_no_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/no-data.js */ "./src/view/no-data.js");
/* harmony import */ var _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/footer-statistics.js */ "./src/view/footer-statistics.js");
/* harmony import */ var _mock_films_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/films.js */ "./src/mock/films.js");
/* harmony import */ var _mock_profile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/profile.js */ "./src/mock/profile.js");
/* harmony import */ var _mock_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/filter.js */ "./src/mock/filter.js");
/* harmony import */ var _presenter_movie_list_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./presenter/movie-list.js */ "./src/presenter/movie-list.js");











const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteHeader, new _view_profile_js__WEBPACK_IMPORTED_MODULE_2__["default"](_mock_profile_js__WEBPACK_IMPORTED_MODULE_7__["profileMock"]));
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMain, new _view_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"](_mock_filter_js__WEBPACK_IMPORTED_MODULE_8__["filter"]));

if (_mock_films_js__WEBPACK_IMPORTED_MODULE_6__["QANTITY_FILMS"] === 0) {
  const noData = new _view_no_data_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMain, noData);
  Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(footerStatistics, new _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_5__["default"](0));
} else {
  Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(footerStatistics, new _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_5__["default"](_variables_js__WEBPACK_IMPORTED_MODULE_0__["QuantityFilms"].ALL_FILMS));

  const movieList = new _presenter_movie_list_js__WEBPACK_IMPORTED_MODULE_9__["default"](siteMain);
  movieList.init();
}


/***/ }),

/***/ "./src/mock/comments.js":
/*!******************************!*\
  !*** ./src/mock/comments.js ***!
  \******************************/
/*! exports provided: createRandomComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRandomComments", function() { return createRandomComments; });
/* harmony import */ var _utils_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util.js */ "./src/utils/util.js");


const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 5;

const EMOTIONS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];

const createRandomComments = () => {
  const comments = [];

  for (let i = 0; i < Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT); i++) {
    comments[i] = {
      id: `42`,
      author: `Author`,
      comment: `text...`,
      date: new Date(),
      emotion: EMOTIONS[Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(0, EMOTIONS.length - 1)],
    };
  }

  return comments;
};


/***/ }),

/***/ "./src/mock/films.js":
/*!***************************!*\
  !*** ./src/mock/films.js ***!
  \***************************/
/*! exports provided: QANTITY_FILMS, randomFilms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QANTITY_FILMS", function() { return QANTITY_FILMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomFilms", function() { return randomFilms; });
/* harmony import */ var _utils_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util.js */ "./src/utils/util.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ "./src/mock/comments.js");



const QANTITY_FILMS = 20;
const MIN_LENGTH_DESCRIPTION = 1;
const MAX_LENGTH_DESCRIPTION = 5;

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const FILMS_TITLE = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `The Great Flamarion`,
  `Made for Each Other`
];

const FILMS_POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const DESCRIPTION = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const getRandomDescription = () => {
  let randomDescription = ``;
  const lengthDescription = Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(MIN_LENGTH_DESCRIPTION, MAX_LENGTH_DESCRIPTION);

  for (let i = 0; i < lengthDescription; i++) {
    randomDescription += DESCRIPTION[Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(0, DESCRIPTION.length - 1)] + ` `;
  }

  return randomDescription;
};

const createRandomFilms = () => {
  const films = [];

  for (let i = 0; i < QANTITY_FILMS; i++) {
    const releaseDate = new Date(Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(1930, 2020) + `-` + Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(1, 12) + `-` + Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(1, 28));

    // films[i] = {
    //   title: FILMS_TITLE[getRandomNumber(0, FILMS_TITLE.length - 1)],
    //   alternativeTitle: `Alternative title`,
    //   poster: `images/posters/` + FILMS_POSTERS[getRandomNumber(0, FILMS_POSTERS.length - 1)],
    //   rating: getRandomNumber(0, 10, 1),
    //   ageRating: `16+`,
    //   director: `Anthony Mann`,
    //   writes: [`Anne Wigton`, `Heinz Herald`, `Richard Weil`],
    //   actors: [`Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`],
    //   release: {
    //     date: releaseDate,
    //     country: `USA`
    //   },
    //   runtime: getRandomNumber(60, 200),
    //   genre: [`Western`, `Drama`],
    //   description: getRandomDescription(),
    //   comments: createRandomComments(),
    //   userDetails: {
    //     watchlist: getRandomBoolean(),
    //     favorite: getRandomBoolean(),
    //     alreadyWatched: getRandomBoolean(),
    //   }
    // };

    films[i] = {
      id: generateId(),
      comments: Object(_comments_js__WEBPACK_IMPORTED_MODULE_1__["createRandomComments"])(),
      film_info: {
        title: FILMS_TITLE[Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(0, FILMS_TITLE.length - 1)],
        alternative_title: `Alternative title`,
        poster: `images/posters/` + FILMS_POSTERS[Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(0, FILMS_POSTERS.length - 1)],
        total_rating: Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(0, 10, 1),
        age_rating: `16+`,
        director: `Anthony Mann`,
        writes: [`Anne Wigton`, `Heinz Herald`, `Richard Weil`],
        actors: [`Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`],
        release: {
          date: releaseDate,
          release_country: `USA`,
        },
        runtime: Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(60, 200),
        genre: [`Western`, `Drama`],
        description: getRandomDescription(),
      },
      user_details: {
        watchlist: Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomBoolean"])(),
        favorite: Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomBoolean"])(),
        already_watched: Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomBoolean"])(),
        watching_date: `2019-04-12T16:12:32.554Z`,
      }
    };

  }
  return films;
};

const randomFilms = createRandomFilms();



/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _films_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./films.js */ "./src/mock/films.js");


const createFilter = () => {
  const filter = {
    watchlist: 0,
    favorites: 0,
    history: 0,
  };

  for (let i = 0; i < _films_js__WEBPACK_IMPORTED_MODULE_0__["randomFilms"].length; i++) {
    if (_films_js__WEBPACK_IMPORTED_MODULE_0__["randomFilms"][i].user_details.watchlist) {
      filter.watchlist += 1;
    }

    if (_films_js__WEBPACK_IMPORTED_MODULE_0__["randomFilms"][i].user_details.favorite) {
      filter.favorites += 1;
    }

    if (_films_js__WEBPACK_IMPORTED_MODULE_0__["randomFilms"][i].user_details.already_watched) {
      filter.history += 1;
    }
  }

  return filter;
};

const filter = createFilter();


/***/ }),

/***/ "./src/mock/profile.js":
/*!*****************************!*\
  !*** ./src/mock/profile.js ***!
  \*****************************/
/*! exports provided: profileMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileMock", function() { return profileMock; });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables.js */ "./src/variables.js");


const profileRatingTable = [
  {
    quantityFilms: 0,
    rating: ``
  },
  {
    quantityFilms: 1,
    rating: `novice`
  },
  {
    quantityFilms: 11,
    rating: `fan`
  },
  {
    quantityFilms: 21,
    rating: `movie buff`
  },
  {
    quantityFilms: _variables_js__WEBPACK_IMPORTED_MODULE_0__["QuantityFilms"].ALL_FILMS + 1
  }
];

const getProfile = () => {
  const profile = {
    avatar: `images/bitmap@2x.png`,
    watchedFilms: 25,
    rating: ``,
  };

  for (let i = 0; i < profileRatingTable.length; i++) {
    if (profile.watchedFilms >= profileRatingTable[i].quantityFilms && profile.watchedFilms < profileRatingTable[i + 1].quantityFilms) {
      profile.rating = profileRatingTable[i].rating;
      break;
    }
  }

  return profile;
};

const profileMock = getProfile();


/***/ }),

/***/ "./src/presenter/movie-list.js":
/*!*************************************!*\
  !*** ./src/presenter/movie-list.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieList; });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables.js */ "./src/variables.js");
/* harmony import */ var _view_sorting_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/sorting.js */ "./src/view/sorting.js");
/* harmony import */ var _view_films_container_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/films-container.js */ "./src/view/films-container.js");
/* harmony import */ var _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _mock_films_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock/films.js */ "./src/mock/films.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/sort.js */ "./src/utils/sort.js");
/* harmony import */ var _utils_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/util.js */ "./src/utils/util.js");
/* harmony import */ var _movie_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie.js */ "./src/presenter/movie.js");










class MovieList {
  constructor(container) {
    this._container = container;

    this._quantityRenderFilms = _variables_js__WEBPACK_IMPORTED_MODULE_0__["QuantityFilms"].FILMS;
    this._quantityRenderExtraFilms = _variables_js__WEBPACK_IMPORTED_MODULE_0__["QuantityFilms"].EXTRA_FILMS;
    this._quantityExtraCategories = _variables_js__WEBPACK_IMPORTED_MODULE_0__["QuantityFilms"].EXTRA_CATEGORIES;
    this._showingFilmsCount = this._quantityRenderFilms;

    this._films = _mock_films_js__WEBPACK_IMPORTED_MODULE_4__["randomFilms"].slice();
    this._sourceFilms = _mock_films_js__WEBPACK_IMPORTED_MODULE_4__["randomFilms"].slice();
    this._filmsContainerComponent = new _view_films_container_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._showMoreButtonComponent = new _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._sortComponent = new _view_sorting_js__WEBPACK_IMPORTED_MODULE_1__["default"](_variables_js__WEBPACK_IMPORTED_MODULE_0__["SortType"]);
    this._currentSortType = _variables_js__WEBPACK_IMPORTED_MODULE_0__["SortType"].DEFAULT;
    this._moviesCards = {};

    this._renderFilmsList = this._renderFilmsList.bind(this);
    this._renderFilm = this._renderFilm.bind(this);
    this._renderFilms = this._renderFilms.bind(this);
    this._renderFilmsCards = this._renderFilmsCards.bind(this);
    this._clearFilmsDetails = this._clearFilmsDetails.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._clearFilmList = this._clearFilmList.bind(this);
    this._handleFilmChange = this._handleFilmChange.bind(this);
  }

  init() {
    this._renderSort();
    this._renderFilmsContainers();
    this._renderShowMoreButton();

    this._renderFilmsCards();
  }

  _renderFilmsContainers() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(this._container, new _view_films_container_js__WEBPACK_IMPORTED_MODULE_2__["default"]());

    this._filmsList = this._container.querySelector(`.films-list`);
    this._filmsListExtraRated = this._container.querySelectorAll(`.films-list--extra-rated`);
    this._filmsListExtraComments = this._container.querySelectorAll(`.films-list--extra-comments`);
  }

  _renderShowMoreButton() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(this._filmsList, this._showMoreButtonComponent);
    this._showMoreButtonComponent.setClickHandler(this._renderFilmsList);
  }

  _renderFilm(film) {
    const moviePresenter = new _movie_js__WEBPACK_IMPORTED_MODULE_8__["default"](this._handleFilmChange);
    moviePresenter.init(film, this._filmsList.querySelector(`.films-list__container`), this._clearFilmsDetails);
    this._moviesCards[film.id] = moviePresenter;
  }

  _renderFilms(from, to) {
    this._films
      .slice(from, to)
      .forEach((film) => this._renderFilm(film));
  }

  _renderFilmsCards() {
    this._renderFilms(0, this._quantityRenderFilms);
  }

  _renderFilmsList() {
    const prevFilmsCount = this._showingFilmsCount;
    this._showingFilmsCount += this._quantityRenderFilms;

    this._renderFilms(prevFilmsCount, this._showingFilmsCount);

    if (this._showingFilmsCount >= this._films.length) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["remove"])(this._showMoreButtonComponent);
    }
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortComponent.getElement().querySelector(`.sort__button--active`).classList.remove(`sort__button--active`);

    switch (sortType) {
      case _variables_js__WEBPACK_IMPORTED_MODULE_0__["SortType"].DATE:
        this._films.sort(_utils_sort_js__WEBPACK_IMPORTED_MODULE_6__["sortFilmsDate"]);
        this._sortComponent.getElement().querySelector(`.sort__button[data-sort-type="date"]`).classList.add(`sort__button--active`);
        break;
      case _variables_js__WEBPACK_IMPORTED_MODULE_0__["SortType"].RATING:
        this._films.sort(_utils_sort_js__WEBPACK_IMPORTED_MODULE_6__["sortFilmsRating"]);
        this._sortComponent.getElement().querySelector(`.sort__button[data-sort-type="rating"]`).classList.add(`sort__button--active`);
        break;
      default:
        this._films = this._sourceFilms.slice();
        this._sortComponent.getElement().querySelector(`.sort__button[data-sort-type="default"]`).classList.add(`sort__button--active`);
    }

    this._currentSortType = sortType;

    this._clearFilmList();
    this._renderFilmsCards();
  }

  _renderSort() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(this._container, this._sortComponent);

    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _clearFilmList() {
    Object.values(this._moviesCards).forEach((card) => Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["remove"])(card._filmCardComponent));
    this._moviesCards = {};
    this._showingFilmsCount = this._quantityRenderFilms;
  }

  _clearFilmsDetails() {
    Object.values(this._moviesCards).forEach((elem) => elem.destroyFilmDetails());
  }

  _handleFilmChange(updateFilm, popupStatus) {
    this._films = Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_7__["updateItem"])(this._films, updateFilm);
    this._sourceFilms = Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_7__["updateItem"])(this._sourceFilms, updateFilm);

    if (popupStatus) {
      this._moviesCards[updateFilm.id].destroyFilmDetails();
    }

    this._moviesCards[updateFilm.id].init(updateFilm, this._filmsList.querySelector(`.films-list__container`), this._clearFilmsDetails);
  }
}


/***/ }),

/***/ "./src/presenter/movie.js":
/*!********************************!*\
  !*** ./src/presenter/movie.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieDetails; });
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_film_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/film-details.js */ "./src/view/film-details.js");
/* harmony import */ var _view_comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/comment.js */ "./src/view/comment.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../variables.js */ "./src/variables.js");






class MovieDetails {
  constructor(changeData) {
    this._changeData = changeData;
    this._popupStatus = false;

    this._filmCardComponent = null;
    this._filmDetailsComponent = null;

    this._localCommentText = ``;
    this._selectedCommentEmoji = null;

    this._openPopupFilm = this._openPopupFilm.bind(this);
    this._closePopupFilm = this._closePopupFilm.bind(this);
    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this.destroyFilmDetails = this.destroyFilmDetails.bind(this);
    this._localCommentTextHandler = this._localCommentTextHandler.bind(this);
    this._handleCommentEmojiClick = this._handleCommentEmojiClick.bind(this);
  }

  init(film, container, clearPopupFilm) {
    this._film = film;
    this._container = container;

    const prevFilmCardComponent = this._filmCardComponent;
    this._prevFilmDetailsComponent = this._filmDetailsComponent;

    this._filmCardComponent = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._film);
    this._filmDetailsComponent = new _view_film_details_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._film);

    this._commentsFilm = [];
    for (let i = 0; i < this._film.comments.length; i++) {
      this._commentsFilm[i] = new _view_comment_js__WEBPACK_IMPORTED_MODULE_2__["default"](this._film.comments[i]);
    }

    this._filmCardComponent.setClickHandler(() => {
      clearPopupFilm();
      this._openPopupFilm();
    });

    if (prevFilmCardComponent === null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_3__["render"])(this._container, this._filmCardComponent);
    } else {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_3__["replace"])(this._filmCardComponent, prevFilmCardComponent);
    }

    if (this._popupStatus === true) {
      this._openPopupFilm();
      this._filmDetailsComponent.getElement().querySelector(`.film-details__comment-input`).value = this._localCommentText;
    }

    this._filmCardComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._filmCardComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._filmCardComponent.setFavoriteClickHandler(this._handleFavoriteClick);
  }

  _openPopupFilm() {
    const siteFooter = document.querySelector(`.footer`);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_3__["render"])(siteFooter, this._filmDetailsComponent, `afterend`);

    this._filmDetailsComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._filmDetailsComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._filmDetailsComponent.setFavoriteClickHandler(this._handleFavoriteClick);

    this._filmDetailsComponent.getElement().querySelector(`.film-details__comment-input`).addEventListener(`input`, this._localCommentTextHandler);

    this._filmDetailsComponent.setCommentEmojiClickHandler(this._handleCommentEmojiClick);

    for (let i = 0; i < this._film.comments.length; i++) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_3__["render"])(this._filmDetailsComponent.getElement().querySelector(`.film-details__comments-list`), this._commentsFilm[i]);
    }
    
    this._popupStatus = true;

    this._closePopupFilm();
  }

  _closePopupFilm() {
    const closePopupKeydown = (evt) => {
      if (evt.keyCode === 27) {
        Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_3__["remove"])(this._filmDetailsComponent);
        document.removeEventListener(`keydown`, closePopupKeydown);
        this._popupStatus = false;
      }
    };

    this._filmDetailsComponent.setClickHandler(() => {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_3__["remove"])(this._filmDetailsComponent);
      document.removeEventListener(`keydown`, closePopupKeydown);
      this._popupStatus = false;
    });

    document.addEventListener(`keydown`, closePopupKeydown);
  }

  _handleWatchlistClick() {
    this._film.user_details.watchlist = !this._film.user_details.watchlist;
    this._changeData(this._film, this._popupStatus);
  }

  _handleWatchedClick() {
    this._film.user_details.already_watched = !this._film.user_details.already_watched;
    this._changeData(this._film, this._popupStatus);
  }

  _handleFavoriteClick() {
    this._film.user_details.favorite = !this._film.user_details.favorite;
    this._changeData(this._film, this._popupStatus);
  }

  _localCommentTextHandler(evt) {
    evt.preventDefault();
    this._localCommentText = evt.target.value;
  }

  _handleCommentEmojiClick(emojiType) {
    if (this._selectedCommentEmoji === emojiType) {
      return;
    }

    const emojiAddContainer = this._filmDetailsComponent.getElement().querySelector(`.film-details__add-emoji-label`);

    switch (emojiType) {
      case `emoji-` + _variables_js__WEBPACK_IMPORTED_MODULE_4__["EmojiType"].SMILE:
        emojiAddContainer.innerHTML = `<img src="images/emoji/${_variables_js__WEBPACK_IMPORTED_MODULE_4__["EmojiType"].SMILE}.png" width="55" height="55" alt="${emojiType}">`;
        break;
      case `emoji-` + _variables_js__WEBPACK_IMPORTED_MODULE_4__["EmojiType"].SLEEPING:
        emojiAddContainer.innerHTML = `<img src="images/emoji/${_variables_js__WEBPACK_IMPORTED_MODULE_4__["EmojiType"].SLEEPING}.png" width="55" height="55" alt="${emojiType}">`;
        break;
      case `emoji-` + _variables_js__WEBPACK_IMPORTED_MODULE_4__["EmojiType"].PUKE:
        emojiAddContainer.innerHTML = `<img src="images/emoji/${_variables_js__WEBPACK_IMPORTED_MODULE_4__["EmojiType"].PUKE}.png" width="55" height="55" alt="${emojiType}">`;
        break;
      case `emoji-` + _variables_js__WEBPACK_IMPORTED_MODULE_4__["EmojiType"].ANGRY:
        emojiAddContainer.innerHTML = `<img src="images/emoji/${_variables_js__WEBPACK_IMPORTED_MODULE_4__["EmojiType"].ANGRY}.png" width="55" height="55" alt="${emojiType}">`;
        break;
    }

    this._selectedCommentEmoji = emojiType;
  }

  destroyFilmDetails() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_3__["remove"])(this._filmDetailsComponent);
  }
}



/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: createElement, render, remove, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony import */ var _view_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract */ "./src/view/abstract.js");


const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container, component, place = `beforeend`) => {
  switch (place) {
    case `beforeend`:
      container.append(component.getElement());
      break;
    case `afterend`:
      container.after(component.getElement());
      break;
  }
};

const remove = (component) => {
  if (!(component instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};


/***/ }),

/***/ "./src/utils/sort.js":
/*!***************************!*\
  !*** ./src/utils/sort.js ***!
  \***************************/
/*! exports provided: sortFilmsDate, sortFilmsRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortFilmsDate", function() { return sortFilmsDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortFilmsRating", function() { return sortFilmsRating; });
const sortFilmsDate = (filmA, filmB) => {
  if (filmA.film_info.release.date > filmB.film_info.release.date) {
    return -1;
  }

  if (filmA.film_info.release.date < filmB.film_info.release.date) {
    return 1;
  }

  return 0;
};

const sortFilmsRating = (filmA, filmB) => {
  if (filmA.film_info.total_rating > filmB.film_info.total_rating) {
    return -1;
  }

  if (filmA.film_info.total_rating < filmB.film_info.total_rating) {
    return 1;
  }

  return 0;
};


/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! exports provided: getRandomNumber, getRandomBoolean, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBoolean", function() { return getRandomBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
const getRandomNumber = (min, max, fractional = 0) => {
  const randomNumber = min + Math.random() * (max - min);
  return randomNumber.toFixed(fractional);
};

const getRandomBoolean = () => {
  if (getRandomNumber(0, 1) === `1`) {
    return true;
  } else {
    return false;
  }
};

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ]
};


/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/*! exports provided: QuantityFilms, SortType, EmojiType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantityFilms", function() { return QuantityFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiType", function() { return EmojiType; });
const QuantityFilms = {
  ALL_FILMS: 100000,
  FILMS: 5,
  EXTRA_FILMS: 2,
  EXTRA_CATEGORIES: 2,
};

const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RATING: `rating`,
};

const EmojiType = {
  SMILE: `smile`,
  SLEEPING: `sleeping`,
  PUKE: `puke`,
  ANGRY: `angry`
}


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  _getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this._getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/comment.js":
/*!*****************************!*\
  !*** ./src/view/comment.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comment; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmCommentsTemplate = (comment) => {
  return (
    `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-smile">
    </span>
    <div>
      <p class="film-details__comment-text">${comment.comment}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${comment.author}</span>
        <span class="film-details__comment-day">${comment.date.getFullYear() + `/` + comment.date.getMonth() + `/` + comment.date.getDate() + ` ` + comment.date.getHours() + `:` + comment.date.getMinutes()}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`
  );
};

class Comment extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(comment) {
    super();
    this._comment = comment;
  }

  _getTemplate() {
    return createFilmCommentsTemplate(this._comment);
  }
}


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmCardTemplate = (film) => {
  const shortDescription = film.film_info.description.length > 140 ? film.film_info.description.slice(0, 140) + `...` : film.film_info.description;

  const duration = (film.film_info.runtime / 60 | 0) + `h ` + (film.film_info.runtime % 60) + `m`;

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${film.film_info.title}</h3>
      <p class="film-card__rating">${film.film_info.total_rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${film.film_info.release.date.getFullYear()}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${film.film_info.genre[0]}</span>
      </p>
      <img src="${film.film_info.poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${shortDescription}</p>
      <a class="film-card__comments">${film.comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${film.user_details.watchlist ? `film-card__controls-item--active` : ``}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${film.user_details.already_watched ? `film-card__controls-item--active` : ``}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${film.user_details.favorite ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
      </form>
    </article>`
  );
};

class FilmCard extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(film) {
    super();
    this._film = film;

    this._clickHandler = this._clickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  _getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.clickPopupOpen();
  }

  setClickHandler(callback) {
    this._callback.clickPopupOpen = callback;

    this.getElement().querySelector(`.film-card__title`).addEventListener(`click`, this._clickHandler);
    this.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, this._clickHandler);
    this.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, this._clickHandler);
  }

  _watchlistClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchlistClick();
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._watchlistClickHandler);
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }
}


/***/ }),

/***/ "./src/view/film-details.js":
/*!**********************************!*\
  !*** ./src/view/film-details.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmDetails; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./src/constants.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



const createFilmDetailsTemplate = (film) => {
  let genresFilm = ``;
  for (let i = 0; i < film.film_info.genre.length; i++) {
    genresFilm += `<span class="film-details__genre">${film.film_info.genre[i]}</span>`;
  }

  const genreTitle = film.film_info.genre.length <= 1 ? `Genre` : `Genres`;

  const duration = (film.film_info.runtime / 60 | 0) + `h ` + film.film_info.runtime % 60 + `m`;

  return (
    `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="form-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="${film.film_info.poster}" alt="">

              <p class="film-details__age">${film.film_info.age_rating}</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${film.film_info.title}</h3>
                  <p class="film-details__title-original">${film.film_info.alternative_title}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${film.film_info.total_rating}</p>
                </div>
              </div>

              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${film.film_info.director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${film.film_info.writes.join(`, `)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${film.film_info.actors.join(`, `)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${film.film_info.release.date.getDate() + ` ` + _constants_js__WEBPACK_IMPORTED_MODULE_0__["MONTHS"][film.film_info.release.date.getMonth()] + ` ` + film.film_info.release.date.getFullYear()}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${duration}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${film.film_info.release.release_country}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">${genreTitle}</td>
                  <td class="film-details__cell">${genresFilm}</td>
                </tr>
              </table>

              <p class="film-details__film-description">${film.film_info.description}</p>
            </div>
          </div>

          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${film.user_details.watchlist ? `checked` : ``}>
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${film.user_details.already_watched ? `checked` : ``}>
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${film.user_details.favorite ? `checked` : ``}>
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
        </div>

        <div class="form-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${film.comments.length}</span></h3>

            <ul class="film-details__comments-list">
              
            </ul>

            <div class="film-details__new-comment">
              <div for="add-emoji" class="film-details__add-emoji-label"></div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>

              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
                <label class="film-details__emoji-label" for="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
                <label class="film-details__emoji-label" for="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                <label class="film-details__emoji-label" for="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>`
  );
};

class FilmDetails extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(film) {
    super();
    this._film = film;

    this._clickHandler = this._clickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    this._commentEmojiClickHandler = this._commentEmojiClickHandler.bind(this);
  }

  _getTemplate() {
    return createFilmDetailsTemplate(this._film);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.clickClosePopup();
  }

  _watchlistClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchlistClick();
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  _commentEmojiClickHandler(evt) {
    evt.preventDefault();
    this._callback.commentEmojiClick(evt.currentTarget.getAttribute(`for`));
  }

  setClickHandler(callback) {
    this._callback.clickClosePopup = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._clickHandler);
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watchlist`).addEventListener(`click`, this._watchlistClickHandler);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.film-details__control-label--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }

  setCommentEmojiClickHandler(callback) {
    this._callback.commentEmojiClick = callback;
    const emojies = this.getElement().querySelectorAll(`.film-details__emoji-label`);

    for (let elem of emojies) {
      elem.addEventListener(`click`, this._commentEmojiClickHandler);
    }

    // this.getElement().querySelector(`.film-details__emoji-label`).addEventListener(`click`, this._commentEmojiClickHandler);
  }
}


/***/ }),

/***/ "./src/view/films-container.js":
/*!*************************************!*\
  !*** ./src/view/films-container.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsContainer; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsTemplate = () => {
  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

        <div class="films-list__container">
        </div>
      </section>
      <section class="films-list--extra films-list--extra-rated">
        <h2 class="films-list__title">Top rated</h2>

        <div class="films-list__container">
        </div>
      </section>
      <section class="films-list--extra films-list--extra-comments">
        <h2 class="films-list__title">Most commented</h2>

        <div class="films-list__container">
        </div>
      </section>
    </section>`
  );
};

class FilmsContainer extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _getTemplate() {
    return createFilmsTemplate();
  }
}


/***/ }),

/***/ "./src/view/footer-statistics.js":
/*!***************************************!*\
  !*** ./src/view/footer-statistics.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterStatistics; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFooterStatisticsTemplate = (quantityFilms) => {
  return (
    `<p>${quantityFilms} movies inside</p>`
  );
};

class FooterStatistics extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(quantityFilms) {
    super();
    this._quantityFilms = quantityFilms;
  }

  _getTemplate() {
    return createFooterStatisticsTemplate(this._quantityFilms);
  }
}


/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createMenuTemplate = (filter) => {
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${filter.watchlist}</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${filter.history}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${filter.favorites}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

class Menu extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filter) {
    super();
    this._filter = filter;
  }

  _getTemplate() {
    return createMenuTemplate(this._filter);
  }
}


/***/ }),

/***/ "./src/view/no-data.js":
/*!*****************************!*\
  !*** ./src/view/no-data.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoData; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createNoDataTemplate = () => {
  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title">There are no movies in our database</h2>
      </section>
    </section>`
  );
};

class NoData extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _getTemplate() {
    return createNoDataTemplate();
  }
}


/***/ }),

/***/ "./src/view/profile.js":
/*!*****************************!*\
  !*** ./src/view/profile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createProfileTemplate = (profile) => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${profile.rating}</p>
      <img class="profile__avatar" src="${profile.avatar}" alt="Avatar" width="35" height="35">
    </section>`
  );
};

class Profile extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(profile) {
    super();
    this._profile = profile;
  }

  _getTemplate() {
    return createProfileTemplate(this._profile);
  }
}


/***/ }),

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMoreButton; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createShowMoreButtonTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

class ShowMoreButton extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }

  _getTemplate() {
    return createShowMoreButtonTemplate();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.clickShowMore();
  }

  setClickHandler(callback) {
    this._callback.clickShowMore = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}


/***/ }),

/***/ "./src/view/sorting.js":
/*!*****************************!*\
  !*** ./src/view/sorting.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sorting; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createSortingTemplate = (sortType) => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active" data-sort-type="${sortType.DEFAULT}">Sort by default</a></li>
      <li><a href="#" class="sort__button" data-sort-type="${sortType.DATE}">Sort by date</a></li>
      <li><a href="#" class="sort__button" data-sort-type="${sortType.RATING}">Sort by rating</a></li>
    </ul>`
  );
};

class Sorting extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(sortType) {
    super();
    this._sortType = sortType;
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  _getTemplate() {
    return createSortingTemplate(this._sortType);
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map