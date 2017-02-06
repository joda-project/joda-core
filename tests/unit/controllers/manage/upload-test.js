import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:manage/upload', 'Unit | Controller | manage/upload', {
  // Specify the other units that are required for this test.
  needs: ['service:joda']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
