import Ember from 'ember';
import ComponentChild from 'ember-bootstrap/mixins/component-child';

/**
 Extends Ember.Component to add Bootstrap's 'form-control' class.

 @class Tab
 @namespace Components
 @extends Ember.Component
 @public
 */
export default Ember.Component.extend(ComponentChild, {
  classNames: ['tab-pane', 'active'],
  /**
   * Set the 'active' class to apply active/pressed CSS styling
   *
   * @property active
   * @type boolean
   * @default false
   * @public
   */
  active: false,
  init() {
    this._super();
    this.get('parentView').send('registerTab', {
      name: this.get('name'),
      label: this.get('label'),
      id: this.get('elementId')
    });
  }
});
