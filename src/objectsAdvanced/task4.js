const fn = (obj) => {
    const newObj = { ...obj, surname: 'lecturer' }
    console.log(newObj);
}
fn({ name: 'Rutenis', surname: 'Turcinas', age: 33 }, 'surname', 'lecturer');

