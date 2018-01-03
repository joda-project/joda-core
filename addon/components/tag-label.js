import Component from '@ember/component';
import layout from '../templates/components/tag-label';

const TagLabel = Component.extend({
  layout,
  tagName: 'span',
  classNames: ['tag']
});

TagLabel.reopenClass({
  positionalParams: ['tag']
});

export default TagLabel;
