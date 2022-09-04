const arrayOne = [{ id: 4, name: 'Lecturer' }, { id: 3, title: 'devMentor' }, { id: 5 }];
const obj = { id: 3 };

arrayOne.forEach((element, index) => {
    if (element.id === obj.id) {
        arrayOne[index] = obj;
    }
});
console.log(arrayOne, obj);

