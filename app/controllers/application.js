import Controller from '@ember/controller';
import { readOnly } from '@ember/object/computed';
import { computed } from '@ember/object';
import Holder from '../lib/holder';

export default Controller.extend({
  posts: readOnly('model'),

  postsCache: computed(function() {
    return Holder.create();
  }),

  actions: {
    cachePosts(posts) {
      this.postsCache.addItems(posts.toArray());
    }
  }
});