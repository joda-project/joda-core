import {
  moduleFor,
  test
} from 'ember-qunit';

import config from '../../../config/environment';

moduleFor('service:joda', 'Unit | Service | joda', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
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
