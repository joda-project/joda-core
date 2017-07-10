import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('service:current-user', 'Unit | Service | current user', {
  // Specify the other units that are required for this test.
  needs: ['service:session', 'service:i18n']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
