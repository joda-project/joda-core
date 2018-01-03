/* global ImageViewer */
import Component from '@ember/component';
import { observer } from '@ember/object';
import layout from '../templates/components/image-viewer';

export default Component.extend({
  layout,
  classNames: ['object-wrapper'],

  didRender: function() {
    this._super(...arguments);

    let viewer = new ImageViewer(this.$().find('.object'));
    this.set('viewer', viewer);

    let image = this.get('image');
    if (!image) {
      return;
    }

    viewer.load(image);
  },

  imageObserver: observer('image', function() {
    this.get('viewer').load(this.get('image'));
  })
});
