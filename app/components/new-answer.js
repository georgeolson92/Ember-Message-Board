import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    save1() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question'),
        rating: 0,
      };
      this.set('addNewAnswer', false);
      this.set('author', "");
      this.set('content', "");
      this.sendAction('save2', params);
    }
  }
});
