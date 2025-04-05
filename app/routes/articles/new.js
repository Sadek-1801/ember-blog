import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

class Saved {
  @tracked saved = false;

  save() {
    this.saved = true;
  }
}

export default class ArticlesNewRoute extends Route {
  model() {
    return new Saved();
  }
}
