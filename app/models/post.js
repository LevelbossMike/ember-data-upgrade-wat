import { readOnly } from '@ember/object/computed';
import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  author: belongsTo(),

  zipCode: readOnly('author.address.zipCode'),

  title: attr('string'),
  text: attr('string'),

  code: readOnly('zipCode.code')
});
