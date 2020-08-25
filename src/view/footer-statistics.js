import Abstract from './abstract.js';

const createFooterStatisticsTemplate = (quantityFilms) => {
  return (
    `<p>${quantityFilms} movies inside</p>`
  );
};

export default class FooterStatistics extends Abstract {
  constructor(quantityFilms) {
    super();
    this._quantityFilms = quantityFilms;
  }

  _getTemplate() {
    return createFooterStatisticsTemplate(this._quantityFilms);
  }
}
