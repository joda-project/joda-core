import Ember from 'ember';

const operators = {
  '==': function(l, r) {
    // jshint -W116
    return l == r;
  },
  '===': function(l, r) {
    return l === r;
  },
  '!=': function(l, r) {
    // jshint -W116
    return l != r;
  },
  '!==': function(l, r) {
    return l !== r;
  },
  '<': function(l, r) {
    return l < r;
  },
  '>': function(l, r) {
    return l > r;
  },
  '<=': function(l, r) {
    return l <= r;
  },
  '>=': function(l, r) {
    return l >= r;
  }
};

export function compare([left, operator, right]) {
  if (typeof left === 'undefined' || typeof operator === 'undefined' || typeof right === 'undefined') {
    throw new Error('Helper "compare" needs 3 parameters');
  }
  if (!operators[operator]) {
    throw new Error('Helper "compare" doesn\'t know the operator ' + operator);
  }

  return operators[operator](left, right);
}

export default Ember.Helper.helper(compare);
