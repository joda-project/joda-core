import Ember from 'ember';
import layout from '../templates/components/common-header';

export default Ember.Component.extend({
  layout,
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
