import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  isStaff: DS.attr('boolean'),
  locale: DS.attr('string'),
  remoteAvatar: DS.attr('boolean'),
  gravatar: DS.attr('string'),

  displayName: Ember.computed('username', 'firstName', 'lastName', function() {
    let first = this.get('firstName');
    let last = this.get('lastName');

    if (first && last)
      return first + ' ' + last;
    else if (first)
      return first
    else if (last)
      return last

    return this.get('username');
  }),

  hasAvatar: Ember.computed('remoteAvatar', 'gravatar', function() {
    return this.get('remoteAvatar') && this.get('gravatar');
  }),
  gravatarSmallBkg: Ember.computed('gravatar', function() {
    let url = this.get('gravatar') + 80;
    return Ember.String.htmlSafe(`background-image:url(${url});`);
  }),
  gravatarLarge: Ember.computed('gravatar', function() {
    return Ember.String.htmlSafe(this.get('gravatar') + 192);
  })
})
