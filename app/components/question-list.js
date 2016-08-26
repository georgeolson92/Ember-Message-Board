import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedQuestions: Ember.computed.sort('model', 'sortBy'),
});
