import { Factory, faker, trait } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.address.streetName();
  },

  withZip: trait({
    afterCreate(model) {
      model.createZipCode();
    }
  })
});
