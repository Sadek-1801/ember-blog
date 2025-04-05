import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';
// import random from 'lodash.random';

export default Factory.extend({
  title() {
    return faker.lorem.words(5).toUpperCase();
  },
  author() {
    return faker.lorem.words(2);
  },
  category() {
    return faker.lorem.words(1);
  },
  image(i) {
    return `https://picsum.photos/700/900?random=${i}`;
  },
  published_date() {
    return faker.date.past();
  },
  description() {
    return faker.lorem.words(20);
  },
});
