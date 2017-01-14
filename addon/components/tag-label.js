import Ember from 'ember';
import layout from '../templates/components/tag-label';

const TagLabel = Ember.Component.extend({
  layout,
  tagName: 'span',
  classNames: ['tag']
});

TagLabel.reopenClass({
  positionalParams: ['tag']
});

export default TagLabel;
