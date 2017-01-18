import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  documentType: DS.attr('string'),
  files: DS.hasMany('file'),
  created_at: DS.attr('date'),
  validated: DS.attr('boolean'),
  public: DS.attr('boolean'),
  tags: DS.hasMany('tag')
});
