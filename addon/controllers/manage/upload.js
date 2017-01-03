import Ember from 'ember';

export default Ember.Controller.extend({
  joda: Ember.inject.service(),
  resourceType: null,

  actions: {
    uploadCompleted: function(data) {
      let resourceType = this.get('resourceType');
      if (resourceType) {
        if (data.data.length === 1) {
          let file = data.data[0];
          let resource = file.relationships.content_set.data[0];
          this.transitionToRoute(resourceType + '.edit', resource.id);
        } else {
          this.transitionToRoute('manage.unverified');
        }
      } else {
        this.transitionToRoute('manage.files');
      }
    }
  }
});
