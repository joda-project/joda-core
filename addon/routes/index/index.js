import { hash } from 'rsvp';
import DocumentIndexRoute from 'joda-core/routes/document/index';

export default DocumentIndexRoute.extend({
  model: function() {
    return hash({
      tags: this.get('store').findAll('tag')
    });
  }
});
