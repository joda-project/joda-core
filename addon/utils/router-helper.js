import config from 'ember-get-config';

const {
  Joda
} = config;

export default function routerHelper(self) {
  self.route('404', {
    path: '*path'
  });
  self.route('login');
  self.route('about');

  self.route('manage', function() {
    this.route('files');
    this.route('unverified');
    this.route('upload');
  });

  let features = Joda.features;
  for (let feature in features) {
    let info = features[feature];

    self.route(info.route, function() {
      this.route('index', {
        path: ''
      }, function() {
        this.route('loading');
      });
      this.route('view', {
        path: ':resource_id'
      });
      this.route('edit', {
        path: ':resource_id/edit'
      });
    });
  }
}
