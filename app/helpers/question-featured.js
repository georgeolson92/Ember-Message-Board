import Ember from 'ember';

export function questionFeatured(params) {
  var question = params[0];

  if (question.get('rating') >= 10) {
    return Ember.String.htmlSafe('<div class="featured">Featured Question</div>');
  }
}

export default Ember.Helper.helper(questionFeatured);
