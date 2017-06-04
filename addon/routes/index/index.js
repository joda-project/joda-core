import Ember from 'ember';
import DocumentIndexRoute from 'joda-core/routes/document/index';

export default DocumentIndexRoute.extend({
  model: function() {
    return Ember.RSVP.hash({
      tags: this.get('store').findAll('tag')
    });
  }
});
