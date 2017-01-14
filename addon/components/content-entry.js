import Ember from 'ember';
import layout from '../templates/components/content-entry';

const ContentEntry = Ember.Component.extend({
  layout,
  tagName: 'article',
  classNames: ['media', 'is-vertical-centered']
});

ContentEntry.reopenClass({
  positionalParams: ['content']
});

export default ContentEntry;
