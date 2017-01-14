import Ember from 'ember';
import layout from '../templates/components/file-icon-link';

const FileIconLink = Ember.Component.extend({
  layout,
  classNames: ['media-file']
});

FileIconLink.reopenClass({
  positionalParams: ['file']
});

export default FileIconLink;
