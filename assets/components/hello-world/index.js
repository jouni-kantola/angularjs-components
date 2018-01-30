class HelloWorld {
    helloWorld() {
      return "helloWorld";
    }
  }

export default (app) => app.controller("HelloWorldCtrl", HelloWorld);
