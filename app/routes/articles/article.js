import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ArticlesArticleRoute extends Route {
  @service store;

  model(params) {
    // console.log(params);
    return this.store.findRecord('article', params.article_id);
  }
}
