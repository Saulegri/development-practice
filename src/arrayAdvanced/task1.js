const arrayOne = [{ id: 4, name: 'Lecturer' }, { id: 3, title: 'devMentor' }, { id: 5 }];
const arrayTwo = { id: 3 };

arrayOne.forEach((element, index) => {
    if (element.id === arrayTwo.id) {
        arrayOne[index] = arrayTwo;
    }
});
console.log(arrayOne);

