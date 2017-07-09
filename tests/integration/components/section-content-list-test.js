import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('section-content-list', 'Integration | Component | section content list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{section-content-list}}`);

  assert.equal(this.$().text().trim(), '');


  this.render(hbs `{{section-content-list title="Test Title"}}`);

  assert.equal(this.$().text().trim(), 'Test Title');
});
