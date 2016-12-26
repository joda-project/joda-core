import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hero-fullpage', 'Integration | Component | hero fullpage', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{hero-fullpage}}`);

  assert.equal(this.$().text().trim(), "© 2016 Tadej Novak");

  // Template block usage:
  this.render(hbs `
    {{#hero-fullpage}}
      template block text
    {{/hero-fullpage}}
  `);

  assert.equal(this.$().text().trim().replace(/\n+/g, ''), 'template block text              © 2016 Tadej Novak');
});
