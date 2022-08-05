function binaryFn(a, b) {
    return a * b;
}
function fn(a, b, c) {
    return c(a, b);
}
fn(3, 8, binaryFn)
