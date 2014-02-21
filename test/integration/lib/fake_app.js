/* global module */

'use strict';

function FakeApp(client, origin) {
  this.client = client;
  this.origin = origin;
}

FakeApp.Selector = Object.freeze({
  selectElement: '#select',
  selectedOptionElement: '#select option:checked',
  inputElement: '#input'
});

FakeApp.prototype = {
  client: null,
  get inputElement() {
    return this.client.findElement(FakeApp.Selector.inputElement);
  },
  get selectElement() {
    return this.client.findElement(FakeApp.Selector.selectElement);
  },
  get selectedOption() {
    return this.client.findElement(FakeApp.Selector.selectedOptionElement);
  },
  isInputElementValueSet: function(value) {
    return value ==
      this.client.findElement(FakeApp.Selector.inputElement)
        .getAttribute('value');
  },
  isSpecificSelectOptionSelected: function(value) {
    return value == this.selectedOption.text();
  },
  launch: function() {
    this.client.apps.launch(this.origin);
    this.client.apps.switchToApp(this.origin);
  },
  close: function() {
    this.client.apps.close(this.origin);
  }
};

module.exports = FakeApp;
