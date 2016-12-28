/* jshint node: true */
'use strict';

var getVersion = require('git-repo-version');

module.exports = {
  name: 'joda-core',
  config: function() {
    let joda = {
      appName: 'Joda',
      copyright: '&copy; 2016 Tadej Novak',
      versions: {},
      backendUri: process.env.BACKEND_URI,
      authKey: process.env.AUTH_KEY
    };

    let path = this.project.root;
    if (this.project.pkg.name !== 'joda-core') {
      path = this.project.addonPackages['joda-core'].path;
    }

    var version = getVersion(null, path);
    if (version) {
      joda.versions['joda-core'] = version;
    }

    return {
      Joda: joda
    };
  },
  isDevelopingAddon: function() {
    return true;
  }
};
