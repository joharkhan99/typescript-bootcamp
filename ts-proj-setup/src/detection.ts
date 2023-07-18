function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }

  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide an id");
    return;
  }

  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// in operator (to check if a property exists in an object)
interface User {
  name: string,
  email: string,
}

interface Admin {
  name: string,
  email: string,
  isAdmin: boolean,
}

function isAdminAccount(account: User | Admin) {
  // check if isAdmin property exists in account(Admin, User)
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}


// instanceof operator (to check if an object is an instance of a class)
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// type predicates (to check if a type is a subtype of another type)

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    return "Fish food"
  } else {
    return "Bird food"
  }
}

// discriminated unions 
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind == 'circle') {
    return Math.PI * shape.radius ** 2;
  }

  // return shape.side ** 2;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.width * shape.length;


    default:
      // this will check if there is a missing case
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}