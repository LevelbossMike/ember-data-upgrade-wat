import DS from 'ember-data';
import { hasMany, belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  address: belongsTo(),
  posts: hasMany('post'),

  name: attr('string')
});
