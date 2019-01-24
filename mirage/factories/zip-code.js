import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  code() {
    return faker.address.zipCode();
  }
});
