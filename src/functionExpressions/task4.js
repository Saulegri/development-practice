//const fn = (...rest) => console.log(rest.toString().split(' ').length - 1)

const fn = (...rest) => {
    let result = 0;
    for (let i = 0; i < rest.length; i++) {
        if (rest[i].indexOf(' ') >= 0) {
            result++;
        }
    }
    return result;
}
console.log(fn('ilgesnė eilutė su daugiau tarpų', 'antras',));

