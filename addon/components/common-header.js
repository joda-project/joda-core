import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  joda: Ember.inject.service(),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
