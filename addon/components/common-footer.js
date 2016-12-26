import Ember from 'ember';

export default Ember.Component.extend({
  joda: Ember.inject.service(),

  tagName: 'footer',
  classNames: ['footer']
});
