import config from 'ember-get-config';

const {
  Joda
} = config;

export default function routerHelper(self) {
  let features = Joda.features;
  for (let feature in features) {
    let info = features[feature];

    self.route(info.route, function() {
      this.route('index', {
        path: ''
      }, function() {
        this.route('loading');
      });
    });
  }
}
