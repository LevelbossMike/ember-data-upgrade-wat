import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | data loading', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /', async function(assert) {
    this.server.createList('post', 5, 'withAuthor');

    await visit('/');

    await click('[data-test-cache-posts]');

    assert.dom('[data-test-post]').exists({ count: 5}, 'all posts are requested from server');
  });
});
