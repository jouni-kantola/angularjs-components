export default function HelloWorldController($scope, $element, $timeout, counterService) {
    const givenName = $element.attr("name");
    this.friend = `${givenName}!`;
    this.getSeconds = () => counterService.value;
}
