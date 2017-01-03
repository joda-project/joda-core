import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import config from 'ember-get-config';

const {
  Joda
} = config;

function SizeException() {
  this.name = 'SizeException';
  this.message = 'You can only upload files smaller than 300 MiB.';
}

function TypeException(type) {
  this.name = 'TypeException';
  this.message = `You can only upload PDF, JPEG and PNG files. Type ${type} is not allowed.`;
}

function typeMap(type) {
  switch (type) {
    case 'application/pdf':
      return 'PDF';
    case 'image/png':
      return 'PNG';
    case 'image/jpeg':
      return 'JPEG';
    default:
      return '';
  }
}

export default EmberUploader.FileField.extend({
  session: Ember.inject.service(),
  url: (Joda.backendUri ? Joda.backendUri : '') + '/api/files',
  multiple: true,

  supportedTypes: [
    'application/pdf',
    'image/jpeg',
    'image/png'
  ],
  supportedSize: 314572800,

  filesDidChange: function(files) {
    this.set('errorMessage', '');

    let types = [];
    let totalSize = 0;
    let resourceType = this.get('resourceType');

    let valid = true;
    try {
      for (let file of files) {
        if (this.get('supportedTypes').indexOf(file.type) !== -1) {
          types.push(typeMap(file.type));
        } else {
          throw new TypeException(file.type);
        }

        totalSize += file.size;
        if (totalSize >= this.get('supportedSize')) {
          throw new SizeException();
        }
      }
    } catch (exception) {
      this.set('errorMessage', exception.message);
      return;
    }

    if (Ember.isEmpty(files) || !valid) {
      return;
    }

    this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
      const headers = {};
      headers[headerName] = headerValue;

      const uploader = EmberUploader.Uploader.create({
        url: this.get('url'),
        ajaxSettings: {
          headers: headers
        }
      });
      uploader.on('progress', (event) => {
        this.set('progress', event.percent);
      });
      uploader.upload(files, {
        file_types: types,
        resource_type: resourceType
      }).then((data) => {
        this.sendAction('action', data);
      }).catch(() => {
        this.set('errorMessage', 'Oops, something went wrong. Please try again.');
      });
    });

  }
});
