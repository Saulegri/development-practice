const arrayOne = [{ name: 'Tomas', age: 15 }, { name: 'Erika', age: 22 }, { name: 'Tomas', age: 17 }, { name: 'Audrius', age: 34 }, { name: 'Erika', age: 42 }, { name: 'Tomas', age: 19 }];

let map = {};

arrayOne.forEach(function (element) {
    return map[element.name] = (map[element.name] || 0) + 1;
})

console.log(map);
