const obj = { name: 'Rutenis', surname: 'Turcinas', age: 33 };
const field = 'surname';
const value = 'lecturer';
const fn = (obj, field, value) => ({ ...obj, surname: 'lecturer' })

console.log(fn(obj, field, value));

