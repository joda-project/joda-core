import Ember from 'ember';

export default Ember.Controller.extend({
  joda: Ember.inject.service(),
  contentType: null,

  actions: {
    uploadCompleted: function(data) {
      let contentType = this.get('contentType');
      if (contentType) {
        if (data.data.length === 1) {
          let file = data.data[0];
          let content = file.relationships.content.data[0];
          this.transitionToRoute(contentType + '.edit', content.id);
        } else {
          this.transitionToRoute('manage.unverified');
        }
      } else {
        this.transitionToRoute('manage.files');
      }
    }
  }
});
