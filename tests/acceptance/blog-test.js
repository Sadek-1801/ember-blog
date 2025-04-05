import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'blog/tests/helpers';

module('Acceptance | blog', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');

    assert.dom('nav h1').hasText('SomeBlog');
    assert.dom('nav .links a').hasText('About');
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.strictEqual(currentURL(), '/about');

    assert.dom('.about').hasText('Welcome to about page of SomeBlog');
  });

  test('visiting /contact', async function (assert) {
    await visit('/contact');

    assert.strictEqual(currentURL(), '/contact');

    assert.dom('.contact').hasText('Welcome to contact page of SomeBlog');
  });
});
