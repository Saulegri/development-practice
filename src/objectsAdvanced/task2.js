const fn = (object) => {
    const { title } = object;
    console.log(title)
}

fn({ name: 'Rutenis', surname: 'Turcinas', title: 'devMentor' })
fn({ name: 'Rutenis', title: 'Mentor' })

