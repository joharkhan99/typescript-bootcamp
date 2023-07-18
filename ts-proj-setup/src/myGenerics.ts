const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(true);
// identityThree(3);
// identityThree("jka");

function identityFour<T>(val: T): T {
  return val;
}

// custom data type
interface Bootle {
  brand: string
  type: number
}

identityFour<Bootle>({ brand: "Coca Cola", type: 2 });

function getSearchProducts<T>(products: T[]): T {
  const myIndex = 3
  return products[myIndex];  //return should be one of the array elements
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some db operations
  const myIndex = 4
  return products[myIndex];  //return should be one of the array elements
}

interface Database {
  connection: string,
  username: string,
  password: string
}

function anotherFunc<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne, valTwo
  }
}

anotherFunc(3, { connection: "", username: "", password: "" });


// Custom Generic Data Type
interface Quiz {
  name: string,
  type: string,
}

interface Course {
  name: string,
  author: string,
  subject: string,
}

class Sellable<T>{
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

const sellable = new Sellable<Quiz>();
sellable.addToCart({ name: "quiz1", type: "quiz" });