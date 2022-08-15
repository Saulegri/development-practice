const fn = () => () => ('devMentor short function');
const fn2 = (p) => p();

fn2(fn())



