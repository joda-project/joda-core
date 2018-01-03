import Component from '@ember/component';
import layout from '../templates/components/file-entry';

const FileEntry = Component.extend({
  layout,
  tagName: 'article',
  classNames: ['media', 'is-vertical-centered']
});

FileEntry.reopenClass({
  positionalParams: ['file']
});

export default FileEntry;
