import DS from 'ember-data';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default DS.Model.extend({
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  isStaff: DS.attr('boolean'),
  locale: DS.attr('string'),
  remoteAvatar: DS.attr('boolean'),
  gravatar: DS.attr('string'),

  displayName: computed('username', 'firstName', 'lastName', function() {
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

  hasAvatar: computed('remoteAvatar', 'gravatar', function() {
    return this.get('remoteAvatar') && this.get('gravatar');
  }),
  gravatarSmallBkg: computed('gravatar', function() {
    let url = this.get('gravatar') + 80;
    return htmlSafe(`background-image:url(${url});`);
  }),
  gravatarLarge: computed('gravatar', function() {
    return htmlSafe(this.get('gravatar') + 192);
  })
})
