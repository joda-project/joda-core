import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  md5: DS.attr('string'),
  file_type: DS.attr('string'), // TODO: proper enum
  added: DS.attr('date'),
  label: DS.attr('string')
});
