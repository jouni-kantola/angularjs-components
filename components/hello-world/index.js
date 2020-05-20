import controller from "./hello-world.controller";

export const HelloWorldComponent = {
  template:
`<h1>Hello {{$ctrl.friend}}</h1>
<span>Now been running {{$ctrl.getSeconds()}}`,
  controller,
  bindings: {
    name: "@",
  },
};
