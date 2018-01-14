'use strict';

var getVersion = require('git-repo-version');

module.exports = {
  name: 'joda-core',
  config: function() {
    let joda = {
      appName: 'Joda',
      copyright: '&copy; 2018 Tadej Novak',
      color: '#207178',
      features: {},
      versions: {},
      backendUri: '',
      authKey: ''
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
  contentFor: function(type, config) {
    if (type === 'joda.appName') {
      return config.Joda.appName;
    } else if (type === 'joda.color') {
      return config.Joda.color;
    }
  },
  isDevelopingAddon: function() {
    return true;
  },
  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/ImageViewer/imageviewer.css');
    app.import('vendor/ImageViewer/imageviewer.min.js');
  }
};
