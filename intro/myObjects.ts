// const User = {
//   name: "Johar",
//   email: "jk@gmail.com",
//   isActive: false
// }

// function createUser({ name: string, isPaid: boolean }) {
// }
// let newUser = { name: "Johar", isPaid: true, email: "j@j.com" }
// createUser(newUser)

// function createCourse(): {} {
//   return {}
// }

// function createCourse2(): { name: string, price: number } {
//   return { name: "ret", price: 399 }
// }


// // type alias
// type Person = {
//   name: string,
//   email: string,
//   age: number,
//   isAdult: boolean,
// }

// function createPerson(person: Person): Person {
//   return {
//     name: "",
//     email: "",
//     age: 10,
//     isAdult: false
//   }
// }

// createPerson({
//   name: "",
//   email: "",
//   age: 10,
//   isAdult: false
// })

// optional name parameter
function t(name?: string) {
}
t();

type User = {
  readonly _id: string  //only read
  name: string
  email: string
  isActive: boolean
  creditCardDetails?: number   //? for optional
}

let myUser: User = { _id: "23g43", name: "j", email: "h@h.com", isActive: false };

myUser.email = "new@gmail.com"
// myUser._id = "new231"  not allowed

type cardNumber = {
  cardnumber?: string
}
type cardDate = {
  cardDate: string
}

// combine types into one
type cardDetails = cardNumber & cardDate & { readonly cvv: number }

function testCard(card: cardDetails) {

}

testCard({ cardDate: "2112", cvv: 12 })


export { }