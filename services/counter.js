export default function CounterService() {
    this.value = 0;
    setInterval(() => {
        this.value++;
    }, 1000);
}