import DS from 'ember-data';
import { hasMany, belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  address: belongsTo({ async: false }),
  posts: hasMany('post', { async: false }),

  name: attr('string')
});
