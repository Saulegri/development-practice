const fn = array => array.reduce((a, b) => a + b) / array.length;

const array = Array.from({ length: 10 }, () => Math.round(Math.random() * 100));

console.log(array);
console.log(fn(array));


