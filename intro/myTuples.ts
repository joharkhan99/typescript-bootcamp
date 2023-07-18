// const user: (string | number)[] = [12, 'jk', 123]
let tUser: [string, number, boolean]

tUser = ["jk", 123, true];
// tUser = [true, 123, "jk"]  //error

let rgb: [number, number, number, number?] = [255, 120, 30];

type User = [number, string];

const newUser: User = [123, "jk@gmail.coms"];

newUser[1] = "jk.com";
// newUser.push(true);

export { }