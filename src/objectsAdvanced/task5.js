const person = {
    name: "Saule",
    surname: "Gri",
    age: "10",
    birthDate: "2020",
};

const fn = (person) => ({
    fullName: person.name + ' ' + person.surname,
    nickName: person.surname + person.age
});
console.log(fn(person))
