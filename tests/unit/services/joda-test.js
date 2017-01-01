import {
  moduleFor,
  test
} from 'ember-qunit';
import {
  startMirage
} from 'dummy/initializers/ember-cli-mirage';

import config from '../../../config/environment';

moduleFor('service:joda', 'Unit | Service | joda', {
  // Specify the other units that are required for this test.
  needs: ['service:ajax'],
  beforeEach() {
    this.server = startMirage();
  },
  afterEach() {
    this.server.shutdown();
  }
});

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('should correctly display constants', function(assert) {
  let service = this.subject();

  assert.equal(service.get('appName'), 'Joda Test');
  assert.equal(service.get('copyright').toHTML(), '&copy; 2016 Tadej Novak');

  assert.equal(service.get('branded'), true);

  assert.equal(service.get('versionFrontend'), config.Joda.versions['joda-core']);
});
