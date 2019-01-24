import { readOnly } from '@ember/object/computed';
import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default DS.Model.extend(LoadableModel, {
  author: belongsTo({ async: false }),

  title: attr('string'),
  text: attr('string'),

  zipCode: readOnly('author.address.zipCode'),
  zipCodeId: readOnly('zipCode.id'),

  code: readOnly('zipCode.code')
});
