import EmberRouter from '@ember/routing/router';
import config from 'blog/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact');
  this.route('articles', function () {
    this.route('new');
    this.route('article', { path: ':article_id' });
  });
  this.route('admin');
  this.route('login');
});
