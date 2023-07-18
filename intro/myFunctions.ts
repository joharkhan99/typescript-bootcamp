function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

function SignUpUser(name: string, email: string, isPaid: boolean) { }

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }

addTwo(5);
getUpper("jk");
SignUpUser("jk", "jk@.COM", false);
loginUser("jk", "mk@gmail.COM");

// returning multiple typoes of data
// function getValue(myVal: number) {
//   if (myVal > 5) {
//     return true;
//   }

//   return "200 OK";
// }

const getHello = (s: string): string => {
  return ""
}

const heros = ["thor", "Hulk", "Batman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is: ${hero}`;
})

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}


export { }