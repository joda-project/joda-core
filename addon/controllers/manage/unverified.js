import Ember from 'ember';

export default Ember.Controller.extend({
  search: null,

  searchObserver: Ember.observer('search', function() {
    if (this.get('search') === "") {
      this.set('search', null);
    }
  }),

  actions: {
    resetFilters: function() {
      this.set('search', null);
    }
  }
});
