import Ember from 'ember';
import ComponentParent from 'ember-bootstrap/mixins/component-parent';

/**
 Extends Ember.Component to implement a tabset

 @class Tabset
 @namespace Components
 @extends Ember.Component
 @public
 */
export default Ember.Component.extend(ComponentParent, {
  init() {
    this._super();
    this.set('tabs', []);
  },
  activeChildren: Ember.computed.filterBy('children', 'active', true),
  tabs: [],
  actions: {
    registerTab(config) {
      const tabs = this.get('tabs');
      tabs.push(config);
      this.set('tabs', tabs);
      Ember.run.later(this, this.rerender);
    }
  },
  didInsertElement() {
    let firstActive= this.get('activeChildren');
  }
});
