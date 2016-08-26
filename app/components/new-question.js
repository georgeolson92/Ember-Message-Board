import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save4() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
        rating: 0,
      };
      this.set('addNewQuestion', false);
      this.set('author', "");
      this.set('title', "");
      this.set('content', "");
      this.sendAction('save5', params);
    }
  }
});
