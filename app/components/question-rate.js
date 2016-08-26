import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upVote(question) {
      var newRating = this.get('question.rating') + 1;
      this.set('question.rating', newRating);
      var params = {
        author: question.get('author'),
        title: question.get('title'),
        content: question.get('content'),
        rating: newRating,
      };
      this.sendAction('update', question, params);
    },
    downVote(question) {
      var newRating = this.get('question.rating') - 1;
      this.set('question.rating', newRating);
      var params = {
        author: question.get('author'),
        title: question.get('title'),
        content: question.get('content'),
        rating: newRating,
      };
      this.sendAction('update', question, params);
    }
  }
});
