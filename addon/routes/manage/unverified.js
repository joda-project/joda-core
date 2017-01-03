import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Unverified resources',

  model() {
    return this.get('store').query('content', {
      'verified': false
    });
  }
});
