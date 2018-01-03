import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils'
import { translationMacro as t } from "ember-i18n";
import EmberUploader from 'ember-uploader';
import config from 'ember-get-config';

const {
  Joda
} = config;

function SizeException() {
  this.name = 'SizeException';
  this.message = 'files.exceptions.size';
}

function TypeException() {
  this.name = 'TypeException';
  this.message = 'files.exceptions.type';
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
  session: service(),
  i18n: service(),
  url: (Joda.backendUri ? Joda.backendUri : '') + '/api/files',
  multiple: true,
  supportedSize: 314572800,

  init() {
    this.supportedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png'
    ];
    this._super(...arguments);
  },

  filesDidChange: function(files) {
    this.set('errorMessage', '');

    let types = [];
    let totalSize = 0;
    let documentType = this.get('documentType');

    let valid = true;
    try {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (this.get('supportedTypes').indexOf(file.type) !== -1) {
          types.push(typeMap(file.type));
        } else {
          throw new TypeException();
        }

        totalSize += file.size;
        if (totalSize >= this.get('supportedSize')) {
          throw new SizeException();
        }
      }
    } catch (exception) {
      this.set('errorMessage', t(exception.message));
      return;
    }

    if (isEmpty(files) || !valid) {
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
        document_type: documentType
      }).then((data) => {
        this.action(data);
      }).catch(() => {
        this.set('errorMessage', t('common.error.generic'));
      });
    });
  }
});
