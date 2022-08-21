const person = {
    name: 'Saule ',
    email: 'saule@saule.lt',
    birthDate: '2020 20 20'
}
const academy = {
    title: ' devMentor',
    numberOfStudents: '22'
}

const complexObject = { ...academy, ...person }

let result = (complexObject) => (console.log(person.name + '-' + academy.title));
result(complexObject)
