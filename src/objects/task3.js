const person = {
    name: 'Saule',
    email: 'saule@saule.lt',
    birthDate: '2020 20 20'
}
const academy = {
    title: ' devMentor',
    numberOfStudents: '22'
}

const complexObject = {
    name: person.name,
    title: academy['title']
}


const result = (complexObject) => (console.log(complexObject.name + ' - ' + complexObject.title));
result(complexObject)
