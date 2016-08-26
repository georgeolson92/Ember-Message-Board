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
    upVote() {
      var newRating = this.get('question.rating') + 1;
      this.set('question.rating', newRating);
      this.save();
    },
    downVote() {
      var newRating = this.get('question.rating') - 1;
      this.set('question.rating', newRating);
      this.save();
    }
  }
});
