import Ember from 'ember';
import DS from 'ember-data';
import filesize from 'filesize';

export const types = [{
    name: 'PDF',
    value: 'PDF'
  },
  {
    name: 'PNG',
    value: 'PNG'
  },
  {
    name: 'JPEG',
    value: 'JPEG'
  }
];

export default DS.Model.extend({
  name: DS.attr('string'),
  md5: DS.attr('string'),
  size: DS.attr('number'),
  fileType: DS.attr('string'),
  created_at: DS.attr('date'),
  label: DS.attr('string'),
  documents: DS.hasMany('document'),
  documentCount: Ember.computed.alias('documents.length'),

  sizeReadable: Ember.computed('size', function() {
    return filesize(this.get('size'));
  }),

  isImage: Ember.computed('fileType', function() {
    let fileType = this.get('fileType');
    return fileType === 'PNG' || fileType === 'JPEG';
  }),

  mimeType: Ember.computed('fileType', function() {
    switch (this.get('fileType')) {
      case 'PDF':
        return 'application/pdf';
      case 'PNG':
        return 'image/png';
      case 'JPEG':
        return 'image/jpeg';
      default:
        return '';
    }
  })
});
