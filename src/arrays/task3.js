const fn = () => Math.min(...array);

const array = Array.from({ length: 10 }, () => Math.round(Math.random() * 100));

console.log(array);
console.log(fn(array));


