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
/* harmony import */ var _view_sorting_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/sorting.js */ "./src/view/sorting.js");
/* harmony import */ var _view_films_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/films.js */ "./src/view/films.js");
/* harmony import */ var _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/footer-statistics.js */ "./src/view/footer-statistics.js");
/* harmony import */ var _mock_profile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/profile.js */ "./src/mock/profile.js");
/* harmony import */ var _mock_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/filter.js */ "./src/mock/filter.js");
/* harmony import */ var _presenter_movie_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./presenter/movie.js */ "./src/presenter/movie.js");











// const QUANTITY_RENDER_FILMS = 5;
// const QUANTITY_RENDER_EXTRA_FILMS = 2;
// const QUANTITY_EXTRA_CATEGORIES = 2;
// let showingFilmsCount = QUANTITY_RENDER_FILMS;

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteHeader, new _view_profile_js__WEBPACK_IMPORTED_MODULE_2__["default"](_mock_profile_js__WEBPACK_IMPORTED_MODULE_7__["profileMock"]));
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMain, new _view_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"](_mock_filter_js__WEBPACK_IMPORTED_MODULE_8__["filter"]));
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMain, new _view_sorting_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMain, new _view_films_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(footerStatistics, new _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_6__["default"](_variables_js__WEBPACK_IMPORTED_MODULE_0__["QUANTITY_ALL_FILMS"]));

const filmsList = siteMain.querySelector(`.films-list`);
const filmsListExtra = siteMain.querySelectorAll(`.films-list--extra`);

const movieList = new _presenter_movie_js__WEBPACK_IMPORTED_MODULE_9__["default"](filmsList, filmsListExtra);
movieList.init();


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
/*! exports provided: randomFilms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomFilms", function() { return randomFilms; });
/* harmony import */ var _utils_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util.js */ "./src/utils/util.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ "./src/mock/comments.js");



const QANTITY_FILMS = 20;
const MIN_LENGTH_DESCRIPTION = 1;
const MAX_LENGTH_DESCRIPTION = 5;

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

    films[i] = {
      title: FILMS_TITLE[Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(0, FILMS_TITLE.length - 1)],
      alternativeTitle: `Alternative title`,
      poster: `images/posters/` + FILMS_POSTERS[Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(0, FILMS_POSTERS.length - 1)],
      rating: Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(0, 10, 1),
      ageRating: `16+`,
      director: `Anthony Mann`,
      writes: [`Anne Wigton`, `Heinz Herald`, `Richard Weil`],
      actors: [`Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`],
      release: {
        date: releaseDate,
        country: `USA`
      },
      runtime: Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(60, 200),
      genre: [`Western`, `Drama`],
      description: getRandomDescription(),
      comments: Object(_comments_js__WEBPACK_IMPORTED_MODULE_1__["createRandomComments"])(),
      userDetails: {
        watchlist: Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomBoolean"])(),
        favorite: Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomBoolean"])(),
        alreadyWatched: Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomBoolean"])(),
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
    if (_films_js__WEBPACK_IMPORTED_MODULE_0__["randomFilms"][i].userDetails.watchlist) {
      filter.watchlist += 1;
    }

    if (_films_js__WEBPACK_IMPORTED_MODULE_0__["randomFilms"][i].userDetails.favorite) {
      filter.favorites += 1;
    }

    if (_films_js__WEBPACK_IMPORTED_MODULE_0__["randomFilms"][i].userDetails.alreadyWatched) {
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
    quantityFilms: _variables_js__WEBPACK_IMPORTED_MODULE_0__["QUANTITY_ALL_FILMS"] + 1
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

/***/ "./src/presenter/movie.js":
/*!********************************!*\
  !*** ./src/presenter/movie.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieList; });
/* harmony import */ var _view_films_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/films.js */ "./src/view/films.js");
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_film_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/film-details.js */ "./src/view/film-details.js");
/* harmony import */ var _view_comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/comments.js */ "./src/view/comments.js");
/* harmony import */ var _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _mock_films_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock/films.js */ "./src/mock/films.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");








const QUANTITY_RENDER_FILMS = 5;
const QUANTITY_RENDER_EXTRA_FILMS = 2;
const QUANTITY_EXTRA_CATEGORIES = 2;
let showingFilmsCount = QUANTITY_RENDER_FILMS;

class MovieList {
  constructor(containerFilms, containersFilmsExtra) {
    this._containerFilms = containerFilms;
    this._containersFilmsExtra = containersFilmsExtra;
    this._filmsContainerComponent = new _view_films_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._filmCardComponent = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._filmDetailsComponent = new _view_film_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._showMoreButtonComponent = new _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

    this._renderFilmsList = this._renderFilmsList.bind(this);
  }

  init() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(this._containerFilms, this._showMoreButtonComponent);

    for (let i = 0; i < QUANTITY_RENDER_FILMS; i++) {
      const FilmCard = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_1__["default"](_mock_films_js__WEBPACK_IMPORTED_MODULE_5__["randomFilms"][i]);

      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(this._containerFilms.querySelector(`.films-list__container`), FilmCard);

      FilmCard.setClickHandler(() => {
        this._renderFilmDetails(_mock_films_js__WEBPACK_IMPORTED_MODULE_5__["randomFilms"][i]);
      });

    }

    for (let i = 0; i < QUANTITY_EXTRA_CATEGORIES; i++) {
      for (let k = 0; k < QUANTITY_RENDER_EXTRA_FILMS; k++) {
        const extraFilmsCategories = this._containersFilmsExtra[i].querySelector(`.films-list__container`);

        const FilmCard = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_1__["default"](_mock_films_js__WEBPACK_IMPORTED_MODULE_5__["randomFilms"][k]);

        Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(extraFilmsCategories, FilmCard);

        FilmCard.setClickHandler(() => {
          this._renderFilmDetails(_mock_films_js__WEBPACK_IMPORTED_MODULE_5__["randomFilms"][k]);
        });
      }
    }

    this._showMoreButtonComponent.setClickHandler(this._renderFilmsList);
  }

  _renderFilmDetails(film) {
    if (document.querySelector(`.film-details`)) {
      document.querySelector(`.film-details`).remove();
    }

    const FilmDetails = new _view_film_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](film);

    const siteFooter = document.querySelector(`.footer`);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(siteFooter, FilmDetails, `afterend`);

    for (let k = 0; k < film.comments.length; k++) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(FilmDetails.getElement().querySelector(`.film-details__comments-list`), new _view_comments_js__WEBPACK_IMPORTED_MODULE_3__["default"](film.comments[k]));
    }

    const closePopupKeydown = (evt) => {
      if (evt.keyCode === 27) {
        Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["remove"])(FilmDetails);
        document.removeEventListener(`keydown`, closePopupKeydown);
      }
    };

    FilmDetails.setClickHandler(() => {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["remove"])(FilmDetails);
      document.removeEventListener(`keydown`, closePopupKeydown);
    });

    document.addEventListener(`keydown`, closePopupKeydown);
  }

  _renderFilmsList() {
    const prevFilmsCount = showingFilmsCount;
    showingFilmsCount += QUANTITY_RENDER_FILMS;

    _mock_films_js__WEBPACK_IMPORTED_MODULE_5__["randomFilms"].slice(prevFilmsCount, showingFilmsCount).forEach((elem, i) => {
      const FilmCard = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_1__["default"](elem);

      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(this._containerFilms.querySelector(`.films-list__container`), FilmCard);

      FilmCard.setClickHandler(() => {
        this._renderFilmDetails(_mock_films_js__WEBPACK_IMPORTED_MODULE_5__["randomFilms"][prevFilmsCount + i]);
      });
    });

    if (showingFilmsCount >= _mock_films_js__WEBPACK_IMPORTED_MODULE_5__["randomFilms"].length) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["remove"])(this._showMoreButtonComponent);
    }
  }

}


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: createElement, render, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
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
  }
};

const remove = (component) => {
  if (!(component instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! exports provided: getRandomNumber, getRandomBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBoolean", function() { return getRandomBoolean; });
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


/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/*! exports provided: QUANTITY_ALL_FILMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUANTITY_ALL_FILMS", function() { return QUANTITY_ALL_FILMS; });
const QUANTITY_ALL_FILMS = 100000;


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

/***/ "./src/view/comments.js":
/*!******************************!*\
  !*** ./src/view/comments.js ***!
  \******************************/
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
  const shortDescription = film.description.length > 140 ? film.description.slice(0, 140) + `...` : film.description;

  const duration = (film.runtime / 60 | 0) + `h ` + (film.runtime % 60) + `m`;

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${film.title}</h3>
      <p class="film-card__rating">${film.rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${film.release.date.getFullYear()}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${film.genre[0]}</span>
      </p>
      <img src="${film.poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${shortDescription}</p>
      <a class="film-card__comments">${film.comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};

class FilmCard extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
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
  for (let i = 0; i < film.genre.length; i++) {
    genresFilm += `<span class="film-details__genre">${film.genre[i]}</span>`;
  }

  const genreTitle = film.genre.length <= 1 ? `Genre` : `Genres`;

  const duration = (film.runtime / 60 | 0) + `h ` + film.runtime % 60 + `m`;

  return (
    `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="form-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="${film.poster}" alt="">

              <p class="film-details__age">${film.ageRating}</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${film.title}</h3>
                  <p class="film-details__title-original">${film.alternativeTitle}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${film.rating}</p>
                </div>
              </div>

              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${film.director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${film.writes.join(`, `)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${film.actors.join(`, `)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${film.release.date.getDate() + ` ` + _constants_js__WEBPACK_IMPORTED_MODULE_0__["MONTHS"][film.release.date.getMonth()] + ` ` + film.release.date.getFullYear()}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${duration}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${film.release.country}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">${genreTitle}</td>
                  <td class="film-details__cell">${genresFilm}</td>
                </tr>
              </table>

              <p class="film-details__film-description">${film.description}</p>
            </div>
          </div>

          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
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
  }

  _getTemplate() {
    return createFilmDetailsTemplate(this._film);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.clickClosePopup();
  }

  setClickHandler(callback) {
    this._callback.clickClosePopup = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._clickHandler);
  }
}


/***/ }),

/***/ "./src/view/films.js":
/*!***************************!*\
  !*** ./src/view/films.js ***!
  \***************************/
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
      <section class="films-list--extra">
        <h2 class="films-list__title">Top rated</h2>

        <div class="films-list__container">
        </div>
      </section>
      <section class="films-list--extra">
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


const createSortingTemplate = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
  );
};

class Sorting extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _getTemplate() {
    return createSortingTemplate();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map