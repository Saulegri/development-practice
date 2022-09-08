
const objectA = { name: 'Saule' };
const objectB = { surname: 'Grisinaite' };
const fn = (objectA, objectB) => ({ ...objectA, ...objectB });

console.log(fn(objectA, objectB));


