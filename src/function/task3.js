function add(a, b) {
    return function () {
        return (a + b);
    }
}
const result = add(3, 4);
console.log(result());
