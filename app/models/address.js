import DS from 'ember-data';

import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  author: belongsTo({ async: false }),
  zipCode: belongsTo( { async: false }),

  name: attr('string')
});
