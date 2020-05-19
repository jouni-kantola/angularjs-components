import angular from "angular";

import components from "./components";
import services from "./services";

const module = angular.module("App", []);

components(module);
services(module);
