import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  questionAmount: Ember.computed('question.answers', function() {
    return this.get('question.answers').get('length');
  }),

  actions: {
    addToFavorites(item) {
      this.get('favoritesList').add(item);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
