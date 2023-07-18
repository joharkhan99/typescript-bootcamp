interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string
  // startTrail: () => string
  startTrail(): string
  getCoupon(coupon: string, value: number): number
}
// reopening an interface
interface User {
  githubToken: string
}

interface Admin extends User {
  role: "admin" | "moderator" | "learner"
}

// const johar: User = {
//   email: "j@j.com",
//   userId: 432,
//   githubToken: "joharkhan99",
//   dbId: 543,
//   startTrail: () => { return "trail started" },
//   getCoupon: (name: "jk342", off: 10) => {
//     return 120
//   }
// }

const johar: Admin = {
  email: "j@j.com",
  userId: 432,
  githubToken: "joharkhan99",
  dbId: 543,
  role: "admin",
  startTrail: () => { return "trail started" },
  getCoupon: (name: "jk342", off: 10) => {
    return 120
  }
}

johar.email = "jk@gmail.com"
// johar.dbId = 8906