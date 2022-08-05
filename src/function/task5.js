function fn1() {
    function fn2(num) {
        return num;
    }
    return fn2;

}
const fn = fn1()
const fnResult = fn(5);


