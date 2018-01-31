import Controller from "./hello-world.ctrl.js";
import template from "./hello-world.tmpl.js";

const HelloWorld = {
  template: template,
  bindings: {
       name: "@"
  },
  controller: Controller
};

export default (container) => container.component("helloWorld", HelloWorld);
