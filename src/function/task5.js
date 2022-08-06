function fn(num) {
    function fn1() {
        console.log(num)
    }
    return fn();
}
const fnResult = fn(5);
fnResult();
