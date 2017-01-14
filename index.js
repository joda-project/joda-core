/* jshint node: true */
'use strict';

var getVersion = require('git-repo-version');

module.exports = {
  name: 'joda-core',
  config: function() {
    let joda = {
      appName: 'Joda',
      copyright: '&copy; 2016 Tadej Novak',
      color: '#207178',
      features: {},
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
  afterInstall: function() {
    return this.addBowerPackagesToProject([{
        name: 'filesize'
      },
      {
        name: 'ImageViewer'
      }
    ]);
  },
  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import(app.bowerDirectory + '/filesize/lib/filesize.es6.js', {
      using: [{
        transformation: 'amd',
        as: 'filesize'
      }]
    });

    app.import(app.bowerDirectory + '/ImageViewer/imageviewer.css');
    app.import(app.bowerDirectory + '/ImageViewer/imageviewer.min.js');
  }
};
