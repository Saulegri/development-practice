for (let i = 1; i <= 10; i++) {
    console.log(i);
    switch (i) {
        case 1:
        case 2:
        case 3:
            console.log('Small number');
            break;
        case 4:
        case 5:
            console.log('Normal number');
            break;
        default:
            console.log('Big number')
    }
}
