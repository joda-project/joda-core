import PowerSelectMultiple from 'ember-power-select/components/power-select-multiple';
import { inject as service } from '@ember/service';
import { isBlank } from '@ember/utils';

export default PowerSelectMultiple.extend({
  store: service(),
  allowClear: true,

  init() {
    this._super(arguments);
    this.set('onkeydown', this.get('addItem').bind(this));
  },

  addItem(select, event) {
    let modelName = this.get('modelName');
    if (!modelName) {
      return;
    }

    if (event.keyCode === 13) {
      if (select.isOpen && !select.highlighted && !isBlank(select.searchText)) {
        let store = this.get('store');
        let options = select.options;
        if (!options.includes(select.searchText)) {
          let record = store.createRecord(modelName, {
            name: select.searchText,
            title: select.searchText
          });
          select.actions.choose(record);
        }
      }

      event.stopPropagation();
      event.preventDefault();

      return false;
    }
  }
});
