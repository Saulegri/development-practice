const complexObject = {}
const person = Object.assign(complexObject);
person.name = 'Saule '
person.email = 'saule@saule.lt'
person.birthDate = '2020 20 20'

const academy = Object.assign(complexObject);
academy['title'] = ' devMentor'
academy['numberOfStudents'] = '22'

let result = (complexObject) => (console.log(person.name + '-' + academy.title));
result(complexObject)
