import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:view', 'Unit | Controller | view', {
  // Specify the other units that are required for this test.
  needs: ['service:ajax', 'service:joda', 'service:session']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
