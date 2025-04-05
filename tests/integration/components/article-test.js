import { module, test } from 'qunit';
import { setupRenderingTest } from 'blog/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | article', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Article />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Article>
        template block text
      </Article>
    `);

    assert.dom().hasText('template block text');
  });
});
