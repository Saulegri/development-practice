const arrayOne = [{ id: 4, name: 'Lecturer' }, { id: 3, title: 'devMentor' }, { id: 5 }];
const obj = { id: 3 };

arrayOne.forEach((a, b) => {
    if (a.id === obj.id) {
        arrayOne[b] = obj;
    }
});
console.log(arrayOne);

