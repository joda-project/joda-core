import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-sidebar', 'Integration | Component | filter sidebar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{filter-sidebar}}`);

  assert.equal(this.$().text().trim().replace(/\s+/g, ''), 'Filter&SortSortResetall');
});
