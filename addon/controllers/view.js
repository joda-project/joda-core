import Controller from '@ember/controller';
import { observer } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  ajax: service(),
  joda: service(),

  fileNameObserver: observer('model', function() {
    let backendUri = this.get('joda.backendUri');
    let model = this.get('model');
    let mimeType = model.get('mimeType');
    let endpoint = '/get/' + model.get('id');

    const headers = {};

    let { access_token } = this.get('session.data.authenticated');

    let token = btoa(`${endpoint}:${access_token}`);

    this.set('downloadEndpoint', backendUri + endpoint);
    this.set('downloadToken', token);

    this.get('ajax').request(backendUri + endpoint, {
      headers,
      dataType: 'html',
      method: 'POST',
      data: {
        inline: 'true'
      }
    }).then((response) => {
      this.set('fileNameInline', `data:${mimeType};base64,${response}`);
    });
  })
});
