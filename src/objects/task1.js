let human = {
    firstName: "Jonas ",
    lastName: "Jonaitis ",
    age: 30,
    isDeveloper: false
}

let printHuman = (human) => console.log(`${human.firstName} ${human.lastName} ${human.age}` + ' is not a developer')
printHuman(human)
