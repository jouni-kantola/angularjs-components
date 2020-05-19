export default function HelloWorldController($scope, $element, $timeout) {
  const givenName = $element.attr("name");

  this.friend = `${givenName}!`;
}
