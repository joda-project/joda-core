import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  joda: service(),
  documentType: null,

  actions: {
    uploadCompleted: function(data) {
      let documentType = this.get('documentType');
      if (documentType) {
        if (data.data.length === 1) {
          let file = data.data[0];
          let document = file.relationships.documents.data[0];
          this.transitionToRoute(documentType + '.edit', document.id);
        } else {
          this.transitionToRoute('manage.unverified');
        }
      } else {
        this.transitionToRoute('manage.files');
      }
    }
  }
});
