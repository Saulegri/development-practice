const fn = (obj) => {
    for (let key in obj) {
        console.log(`Field title:${key}, value: ${obj[key]}`);
    }
}
fn({ name: 'Rutenis', surname: 'Turcinas' });
