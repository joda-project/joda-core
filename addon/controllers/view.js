import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  joda: Ember.inject.service(),

  fileNameObserver: Ember.observer('model', function() {
    let model = this.get('model');
    let endpoint = '/get/' + model.get('id');

    return this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
      let header = headerValue.replace('Bearer', '').trim();
      let token = btoa(`${endpoint}:${header}`);

      this.set('fileName', `${endpoint}?token=${token}`);
    });
  }),

  fileNameInline: Ember.computed('fileName', function() {
    let backendUri = this.get('joda.backendUri');
    let fileName = this.get('fileName');
    if (fileName.indexOf('?') !== -1) {
      return backendUri + fileName + '&inline=true';
    } else {
      return backendUri + fileName + '?inline=true';
    }
  })
});
