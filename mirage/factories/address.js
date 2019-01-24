import { Factory, faker, trait } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.address.streetName();
  },

  withZip: trait({
    afterCreate(model, server) {
      const zipCode = server.create('zipCode', { addressIds: [model.id] });

      model.zipCode = zipCode;

      model.save();
    }
  })
});
