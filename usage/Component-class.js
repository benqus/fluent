/*
 * basic prototype creation
 * basic properties with default values
 * lifecycle methods to override
 * basic methods to override
 */

var MyComponent = fluent.Component.extend({

  tagName: 'div',

  classNames: [], // add props or component prototype with "@myProp" accessor, function resolver or "@myProp?active"/"@myProp?active:inactive" condition?
  // or
  classNames: {
    'myProp': 'active', // or
    'myProp': ['active', 'inactive']
  },

  data: {
    // DOM Node data attributes
  },

  attrs: {
    // custom DOM Node attributes
  },

  defaults: {
    // default props
  },

  events: {
    // like click event listener
  },

  actions: {
    // custom, bubbling component action handlers for
    // child component to notify their parent components
  },

  layout: '', // cached template - Handlebars possibly?

  components: {
    // map of selectors for each child component
  },

  constructor: function() {
    this.props = {}; // props/states
  },

  // getters

  getNode: function() {},

  getComponent: function() {
    // return named child component
  },

  // API

  update: function(newProps) {
    // updates the current Component with it's children
  },

  add: function(component) {
    // add component as a child component
  },

  remove: function(component) {
    // remove child compnent specified by either the component id or the component itself
  },

  find: function(selector) {
    // return the return value of this.getNode().querySelector(selector);
  },

  delegate: function(eventType, selector) {
    // delegate custom event listener for this.getNode()
  },

  // life-cycle methods
  // each method's first argument is a function that invokes super function ???

  onInit: function() {
    // after the component has been created
  },

  onProps: function(newProps) {
    // when component is detached (???)
    // and is about to get new props
    // but old ones still exist
  },

  onAttach: function() {
    // after the component's root Node is attached into the DOM
  },

  onDetach: function() {
    // before the component's root Node is detached from the DOM
  },

  onDestroy: function() {},

  render: function() {
    // add named children in here
  }

});


/*
 * static class methods
 */
fluent.Component.add(childProps, parentComponent ? ? )

fluent.Component.extend(prototypeProps, staticProps)
