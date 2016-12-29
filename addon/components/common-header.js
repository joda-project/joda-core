import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  joda: Ember.inject.service(),

  tagName: 'section',
  classNames: ['hero', 'is-primary'],

  title: '',
  subtitle: '',

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
