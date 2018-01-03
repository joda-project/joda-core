import DS from 'ember-data';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import filesize from 'npm:filesize';

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
  createdAt: DS.attr('date'),
  public: DS.attr('boolean'),
  label: DS.attr('string'),
  documents: DS.hasMany('document'),
  documentCount: alias('documents.length'),

  sizeReadable: computed('size', function() {
    return filesize(this.get('size'));
  }),

  isImage: computed('fileType', function() {
    let fileType = this.get('fileType');
    return fileType === 'PNG' || fileType === 'JPEG';
  }),

  mimeType: computed('fileType', function() {
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
