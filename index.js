/* jshint node: true */
'use strict';

module.exports = {
  name: 'joda-core',
  config: function() {
    let joda = {
      appName: 'Joda',
      versions: {}
    };

    var version = require('git-repo-version')(null, this.project.root);
    if (version) {
      joda.versions[this.project.pkg.name] = version;
    }

    return {
      Joda: joda
    };
  },
  isDevelopingAddon: function() {
    return true;
  }
};
