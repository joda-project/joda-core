import Ember from 'ember';
import layout from '../templates/components/common-footer';

export default Ember.Component.extend({
  layout,
  joda: Ember.inject.service(),

  tagName: 'footer',
  classNames: ['footer']
});
