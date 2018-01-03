import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import config from 'ember-get-config';

const {
  Joda
} = config;

export default Service.extend({
  ajax: service(),

  appName: Joda.appName,
  copyright: htmlSafe(Joda.copyright),
  versionFrontend: Joda.versions['joda-core'],
  versionBackend: computed('backendInfo', function() {
    let backendInfo = this.get('backendInfo');
    if (!backendInfo) {
      return '';
    }

    return backendInfo.version;
  }),

  versionsInfo: Joda.versions,
  featuresInfo: Joda.features,

  backendUri: '',
  backendInfo: null,

  init() {
    this._super(...arguments);
    this.backendUri = Joda.backendUri ? Joda.backendUri : '';
    this.get('ajax').request((Joda.backendUri ? Joda.backendUri : '') + '/api/about').then((data) => {
      this.backendInfo = data['data'];
    });
  },

  branded: computed('appName', function() {
    return this.get('appName') !== 'Joda';
  }),
  links: computed('featuresInfo', function() {
    let features = this.get('featuresInfo');
    let out = [];
    for (let feature in features) {
      let info = features[feature];
      out.push({
        id: info.route,
        title: info.title
      });
    }
    return out;
  }),
  features: computed('featuresInfo', 'backendInfo', function() {
    let features = this.get('featuresInfo');
    let versions = this.get('versionsInfo');
    let backend = this.get('backendInfo');

    let out = [];
    for (let feature in features) {
      let info = features[feature];
      let versionFrontend = versions['joda-' + feature];
      let versionBackend = null;
      if (backend && backend.features && backend.features['joda_' + feature]) {
        versionBackend = backend.features['joda_' + feature].version;
      }

      out.push({
        id: feature,
        title: info.title,
        versionFrontend: versionFrontend,
        versionBackend: versionBackend
      });
    }

    return out;
  }),
});
