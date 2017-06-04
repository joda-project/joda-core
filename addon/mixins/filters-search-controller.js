import Ember from 'ember';

export default Ember.Mixin.create({
  search: null,

  searchObserver: Ember.observer('search', function() {
    if (this.get('search') === '') {
      this.set('search', null);
    }
  })
});
