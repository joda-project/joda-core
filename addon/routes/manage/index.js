import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Manage',

  model() {
    return Ember.RSVP.hash({
      documents: this.get('store').query('document', {
        'include': 'files',
        'validated': false,
        'page_size': 5
      }),
      files: this.get('store').query('file', {
        'document_count': 0,
        'page_size': 5
      }),
    });
  }
});
