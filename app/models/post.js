import { readOnly } from '@ember/object/computed';
import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  author: belongsTo({ async: false }),

  title: attr('string'),
  text: attr('string'),

  zipCode: readOnly('author.address.zipCode'),
  code: readOnly('zipCode.code')
});
