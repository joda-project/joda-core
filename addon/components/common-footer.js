import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/common-footer';

export default Component.extend({
  layout,
  joda: service(),

  tagName: 'footer',
  classNames: ['footer']
});
