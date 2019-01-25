import EmberObject, { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';

export default EmberObject.extend({
  items: computed(function() {
    return [];
  }),

  addItems(items) {
    this.items.pushObjects(items);
  },

  itemsCount: readOnly('items.firstObject.code'),
});