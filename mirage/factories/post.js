import { Factory, faker, trait } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.lorem.words();
  },
  text() {
    return faker.lorem.sentences();
  },

  withAuthor: trait({
    afterCreate(model, server) {
      const author = server.create('author', 'withAddress');

      model.author = author;

      model.save();
    }
  })
});
