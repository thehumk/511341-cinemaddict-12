import Abstract from './abstract.js';

const createNoDataTemplate = () => {
  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title">There are no movies in our database</h2>
      </section>
    </section>`
  );
};

export default class NoData extends Abstract {
  _getTemplate() {
    return createNoDataTemplate();
  }
}
