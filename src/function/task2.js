function upper(string) {
    let result = ""
    for (let i = 0; i < string.length; i++) {
        result += i % 2 == 0 ? string.charAt(i).toUpperCase() : string.charAt(i).toLowerCase();
    }
    console.log(result);
}
let result = "devMentor"
console.log(upper(result));
