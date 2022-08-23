let human = {
    firstName: "Jonas ",
    lastName: "Jonaitis ",
    age: 30,
    isDeveloper: false
}

let printHuman = (human) => {
    if (human['isDeveloper'] === true) {
        console.log(`${human.firstName} ${human.lastName} ${human.age}` + ' is a developer')
    } else if (human['isDeveloper'] === false) {
        console.log(`${human.firstName} ${human.lastName} ${human.age}` + ' is not a developer')
    }

}
printHuman(human)
