if (typeof value === "boolean") {
    console.log(`Variable is boolean : ${value}`);
} else if (typeof value === "number") {
    console.log("Variable is a number. It's square is" + " " + (value ** 2));
} else if (typeof value === "string") {
    console.log(`Variable is a string: ${value}`);
} else {
    console.log(`Variable type is: ${typeof value}`);
}
