const fn = (objectA, objectB) => {
    const object = { ...objectA, ...objectB };
    console.log(object);
}

fn()
