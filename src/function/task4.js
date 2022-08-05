function binaryFn(a, b) {
    return (a * b);
}
function fn(a, b, c) {
    return (a, b, binaryFn);
    c();
}
