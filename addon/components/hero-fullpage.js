import Ember from 'ember';

export default Ember.Component.extend({
  joda: Ember.inject.service(),

  tagName: 'section',
  classNames: ['hero', 'is-primary', 'is-fullheight', 'has-gradient'],
  classNameBindings: ['errorPage'],
  errorPage: false
});
