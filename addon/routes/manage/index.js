import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Manage',

  model() {
    return Ember.RSVP.hash({
      content: this.get('store').query('content', {
        'validated': false
      }),
      files: this.get('store').query('file', {
        'content_count': 0
      }),
    });
  }
});
