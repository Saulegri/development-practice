const academy = {
    title: 'devMentor',
    course: 'fundamentals',
    mentorship: true
}
console.log(academy.title);
console.log(academy['course']);

const propertyName = academy['mentorship'];
console.log(propertyName);

delete academy['course']
console.log(academy.course);
