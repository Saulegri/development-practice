const person = {
    name: "Saule",
    surname: "Gri",
    age: "10",
    birthDate: "2020",
    fullName: function () {
        this.fullName = this.name + ' ' + this.surname;
    },
    nickName: function () {
        this.nickName = this.surname + ' ' + this.age;
    }
};

person.fullName()
person.nickName()
console.log('fullName:' + `${person.fullName}` + ' nickName:' + `${person.nickName}`)
