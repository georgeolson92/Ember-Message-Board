import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  actions: {
    removeFromFavorites(item) {
      this.get('favoritesList').remove(item);
    }
  }
});
