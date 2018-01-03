import Component from '@ember/component';
import layout from '../templates/components/file-icon-link';

const FileIconLink = Component.extend({
  layout,
  classNames: ['media-file']
});

FileIconLink.reopenClass({
  positionalParams: ['file']
});

export default FileIconLink;
