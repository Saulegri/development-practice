const arrayOne = [{ id: 4, name: 'Lecturer' }, { id: 3, title: 'devMentor' }, { id: 5 }];
const arrayTwo = [1, 7, 3, 2, 10, 4];

for (let i = 0; i < arrayOne.length; i++) {
    let obj = arrayOne[i];
    if (arrayTwo.indexOf(obj.id) !== -1) {
        arrayOne.splice(i, 1);
        i--;
    }
};
console.log(arrayOne);
