import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:index/index/loading', 'Unit | Route | index/index/loading', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
