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

