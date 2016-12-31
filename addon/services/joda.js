import Ember from 'ember';
import config from 'ember-get-config';

const {
  Joda
} = config;

export default Ember.Service.extend({
  appName: Joda.appName,
  copyright: Ember.String.htmlSafe(Joda.copyright),
  versionFrontend: Joda.versions['joda-core'],

  versions: Joda.versions,
  features: Joda.features,

  branded: Ember.computed('appName', function() {
    return this.get('appName') !== 'Joda';
  }),
  links: Ember.computed('features', function() {
    let features = this.get('features');
    let out = [];
    for (let feature in features) {
      let info = features[feature];
      out.push({
        id: info.route,
        title: info.title
      });
    }
    return out;
  })
});
