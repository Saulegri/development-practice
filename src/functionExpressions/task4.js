const fn = (...rest) => console.log(rest.toString().split(' ').length - 1)
fn('dev Mentor', 'devMentor', ' ');
