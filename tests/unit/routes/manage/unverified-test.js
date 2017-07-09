import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:manage/unverified', 'Unit | Route | manage/unverified', {
  // Specify the other units that are required for this test.
  needs: ['service:i18n']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
