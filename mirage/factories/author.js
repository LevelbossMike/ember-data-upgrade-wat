import { Factory, faker, trait } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.internet.userName();
  },


  withAddress: trait({
    afterCreate(model, server) {
      const address = server.create('address', 'withZip');

      model.address = address;

      model.save();
    }
  })
});
