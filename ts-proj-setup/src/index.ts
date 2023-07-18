// class User {
//   public email: string
//   private name: string
//   readonly city: string = "Islamabad"

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const jk = new User("jk@jk.com", "jka");
// jk.city = "Islamabad"  //error

// console.log(jk.name);  //error

class User {
  private _courseCount = 1;
  readonly city: string = "Islamabad"
  protected country: string = "Pak"

  constructor(
    public email: string,
    public name: string,
    // private userId: string
  ) {
  }

  get getAppleEmail(): string {
    return `apple${this.email}`
  }

  get courseCount(): number {
    return this._courseCount
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be >1")
    }
    this._courseCount = courseNum;
  }

  private deleteToken() {
    console.log("Token Deleted!");
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCountry() {
    this.country = "INdia"
  }
}

const jk = new User("jk@jk.com", "jka");

// jk.delete()  //error as private
jk.courseCount = 10;
console.log(jk.courseCount);
