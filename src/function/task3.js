function add(a, b) {
    return function () {
        return (a + b);
    }
}
const result = add();
result();
