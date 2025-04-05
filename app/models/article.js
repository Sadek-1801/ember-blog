import Model, { attr } from '@ember-data/model';

export default class ArticleModel extends Model {
  @attr title;
  @attr author;
  @attr category;
  @attr published_date;
  @attr image;
  @attr description;
}
