const persons = [{ name: 'Tomas', age: 15 }, { name: 'Erika', age: 22 }, { name: 'Saulius', age: 17 }, { name: 'Audrius', age: 34 }]

const fn = persons.filter(function (person) {
    return person.age >= 18
});
console.log(fn);

