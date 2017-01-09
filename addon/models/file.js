import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  md5: DS.attr('string'),
  fileType: DS.attr('string'),
  added: DS.attr('date'),
  label: DS.attr('string'),

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
