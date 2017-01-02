import Ember from 'ember';
import layout from '../templates/components/hero-fullpage';

export default Ember.Component.extend({
  layout,
  joda: Ember.inject.service(),

  tagName: 'section',
  classNames: ['hero', 'is-primary', 'is-fullheight', 'has-gradient'],
  classNameBindings: ['errorPage', 'loginPage'],
  errorPage: false,
  loginPage: false
});
