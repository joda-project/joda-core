import Ember from 'ember';
import config from 'ember-get-config';

const {
  Joda
} = config;

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  appName: Joda.appName,
  backendUri: Joda.backendUri ? Joda.backendUri : '',
  copyright: Ember.String.htmlSafe(Joda.copyright),
  versionFrontend: Joda.versions['joda-core'],
  versionBackend: Ember.computed('backendInfo', function() {
    let backendInfo = this.get('backendInfo');
    if (!backendInfo) {
      return '';
    }

    return backendInfo.version;
  }),

  versionsInfo: Joda.versions,
  featuresInfo: Joda.features,

  backendInfo: null,

  init() {
    this._super(...arguments);
    this.get('ajax').request((Joda.backendUri ? Joda.backendUri : '') + '/api/about').then((data) => {
      this.set('backendInfo', data['data']);
    });
  },

  branded: Ember.computed('appName', function() {
    return this.get('appName') !== 'Joda';
  }),
  links: Ember.computed('featuresInfo', function() {
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
  features: Ember.computed('featuresInfo', 'backendInfo', function() {
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
