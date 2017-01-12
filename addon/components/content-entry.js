import Ember from 'ember';
import layout from '../templates/components/content-entry';

export default Ember.Component.extend({
  layout,
  tagName: 'article',
  classNames: ['media', 'is-vertical-centered']
});
