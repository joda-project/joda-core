import Ember from 'ember';
import layout from '../templates/components/file-entry';

const FileEntry = Ember.Component.extend({
  layout,
  tagName: 'article',
  classNames: ['media', 'is-vertical-centered']
});

FileEntry.reopenClass({
  positionalParams: ['file']
});

export default FileEntry;
