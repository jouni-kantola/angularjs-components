import controller from "./hello-world.controller";

export const HelloWorldComponent = {
  template:
`<h1>Hello {{$ctrl.friend}}</h1>
<span>Now been running {{$ctrl.seconds}}`,
  controller,
  bindings: {
    name: "@",
  },
};
