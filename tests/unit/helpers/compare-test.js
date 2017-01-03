import {
  compare
} from 'dummy/helpers/compare';
import {
  module,
  test
} from 'qunit';

module('Unit | Helper | compare');

test('it works', function(assert) {
  let result;
  // ==
  result = compare([5, '==', 5]);
  assert.equal(result, true);

  result = compare([5, '==', '5']);
  assert.equal(result, true);

  result = compare([5, '==', 4]);
  assert.equal(result, false);

  // ===
  result = compare([5, '===', 5]);
  assert.equal(result, true);

  result = compare([5, '===', '5']);
  assert.equal(result, false);

  result = compare([5, '===', 4]);
  assert.equal(result, false);

  // !=
  result = compare([5, '!=', 5]);
  assert.equal(result, false);

  result = compare([5, '!=', '5']);
  assert.equal(result, false);

  result = compare([5, '!=', 4]);
  assert.equal(result, true);

  // !==
  result = compare([5, '!==', 5]);
  assert.equal(result, false);

  result = compare([5, '!==', '5']);
  assert.equal(result, true);

  result = compare([5, '!==', 4]);
  assert.equal(result, true);

  // >
  result = compare([5, '>', 6]);
  assert.equal(result, false);

  result = compare([5, '>', 5]);
  assert.equal(result, false);

  result = compare([5, '>', 4]);
  assert.equal(result, true);

  // >=
  result = compare([5, '>=', 6]);
  assert.equal(result, false);

  result = compare([5, '>=', 5]);
  assert.equal(result, true);

  result = compare([5, '>=', 4]);
  assert.equal(result, true);

  // <
  result = compare([5, '<', 6]);
  assert.equal(result, true);

  result = compare([5, '<', 5]);
  assert.equal(result, false);

  result = compare([5, '<', 4]);
  assert.equal(result, false);

  // <=
  result = compare([5, '<=', 6]);
  assert.equal(result, true);

  result = compare([5, '<=', 5]);
  assert.equal(result, true);

  result = compare([5, '<=', 4]);
  assert.equal(result, false);

  // Validation
  try {
    result = compare([5, 4]);
  } catch(e) {
    assert.equal(e.message, 'Helper "compare" needs 3 parameters');
  }
  try {
    result = compare([5, 'O', 4]);
  } catch(e) {
    assert.equal(e.message, 'Helper "compare" doesn\'t know the operator O');
  }
});
