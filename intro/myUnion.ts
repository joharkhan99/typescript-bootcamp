let score: number | string = 33

score = "sdsd"
score = 12.12

type User2 = {
  name: string
  id: number
}

type Admin = {
  username: string
  id: number
}

let johar: User2 | Admin = { name: "johar", id: 123 };

johar = { username: "jk", id: 543 }

// function getDbId(id: number | string) {
//   console.log(`DB id is: ${id}`);
// }

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

getDbId(3)
getDbId("34")


// array

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ['1', '2', '3', '4'];
const data3: (string | number | boolean)[] = [1, "2", 3, "4", true];

let pi: 3.14 = 3.14;
// pi = 4.5;

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"