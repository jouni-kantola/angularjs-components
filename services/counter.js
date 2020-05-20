// NOTE: With mangle variable names when minifying
// just injecting the service without configuring
// dependencies would bork dependency injection 
export default function CounterService($interval) {
    this.value = 0;
    $interval(() => {
        this.value++;
    }, 1000);
}
