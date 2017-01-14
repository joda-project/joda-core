import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Manage',

  model() {
    return Ember.RSVP.hash({
      content: this.get('store').query('content', {
        'include': 'files',
        'validated': false,
        'page_size': 5
      }),
      files: this.get('store').query('file', {
        'content_count': 0,
        'page_size': 5
      }),
    });
  }
});
