export const HelloWorldComponent = {
  template: "<h1>Hello {{$ctrl.name}}</h1>",
  bindings: {
    name: "@",
  },
};
