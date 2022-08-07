function fn(num) {
    return function () {
        console.log(num)
    }
}
const fnResult = fn(5);
fnResult();

