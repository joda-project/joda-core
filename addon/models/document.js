import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  documentType: DS.attr('string'),
  files: DS.hasMany('file'),
  createdAt: DS.attr('date'),
  verified: DS.attr('boolean'),
  public: DS.attr('boolean'),
  tags: DS.hasMany('tag'),
  notes: DS.attr('string')
});
