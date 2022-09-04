const personObj = {
    name: 'Saule',
    email: 'saule@saule.lt',
    birthDate: '2020 20 20'
}
const academyObj = {
    title: ' devMentor',
    numberOfStudents: '22'
}
const complexObject = {
    person: personObj,
    academy: academyObj
}
const result = (complexObject) => (console.log(complexObject.person.name + ' - ' + complexObject.academy['title']));
result(complexObject)
