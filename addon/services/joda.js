import Ember from 'ember';
import config from 'ember-get-config';

const { Joda } = config;

export default Ember.Service.extend({
  appName: Joda.appName,
  versionFrontend: Joda.versions['joda-core']
});
