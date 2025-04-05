import { module, test } from 'qunit';
import { setupTest } from 'blog/tests/helpers';

module('Unit | Route | articles/new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:articles/new');
    assert.ok(route);
  });
});
