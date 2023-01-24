const user = {
  name: "Eliza",
  title: "Senior TS Dev soon",
  yearsCoding: 2,
  isAdmin: false,
  friends: ["Gael", "Rob", "Niko", "Gamze"],
};
console.log({ user });
// let's manipulate the object above.
//By creating a copy of "user" on each update...
//and store te updated copy in variable userCopy!
// after each operation: console.log userCopy
let userCopy = user;
console.log({ userCopy });

// TODO: Increase years coding in object by 2! Do so by creating a copy of user, updating the field "yearsCoding" by years

let increase = { ...user, yearsCoding: 4 };
console.log({ increase });
console.log({ user });
// result:
/**
{
  name: "Eliza",
  title: "Senior TS Dev soon",
  yearsCoding: 4,
  isAdmin: false,
  friends: [
    "Gael", 
    "Rob",
    "Niko",
    "Gamze",
  ]
} 
*/
// TODO: Write a function "addYearsCoding" that receives "years" as a parameter. years is a number
// The function should create a copy of user variable, and then update the field "yearsCoding" on the copy, adding "years" to it
let grownedExperience = {
  ...user, yearsCoding: user.yearsCoding + 5
}
console.log({ grownedExperience });
console.log({ user });

// Example: userCopy = addYearsCoding(5)
// should return back:
/**
{
  name: "Eliza",
  title: "Senior TS Dev soon",
  yearsCoding: 7,
  isAdmin: false,
  friends: [
    "Gael", 
    "Rob",
    "Niko",
    "Gamze",
  ]
} 
*/

// TODO: Write a function "makeTitleUppercase" that receives no parameter.
// The function should create a copy of user variable, and then update the field "title" on the copy, making it uppercase.
// The result should get stored in userCopy variable
// Example: userCopy = makeTitleUppercase()

let makeTitleUppercase = {
  ...user, title: user.title.toUpperCase()
}
console.log({ makeTitleUppercase });
console.log({ user });

// should return back:
/**
{
  name: "Eliza",
  title: "SENIOR TS DEV SOON",
  yearsCoding: 2,
  isAdmin: false,
  friends: [
    "Gael", 
    "Rob",
    "Niko",
    "Gamze",
  ]
} 
*/

// TODO: Write a function "addFriend" that receives "friend" as a parameter. friend is a string
// The function should create a copy of user variable, and then update the array field "friends" on the copy, adding the new friend to it.

// Example: userCopy = addFriend("Pierluigi")

let addPierToFriends = {
  ...user, friends: user.friends.push('Pier')
}
console.log({addPierToFriends})

// should return back:
/**
{
  name: "Eliza",
  title: "Senior TS Dev soon",
  yearsCoding: 2,
  isAdmin: false,
  friends: [
    "Gael", 
    "Rob",
    "Niko",
    "Gamze",
    "Pierluigi"
  ]
} 
*/

// TODO: Write a function "removeFriend" that receives "friend" as a parameter. friend is a string
// The function should create a copy of user variable, then then update the array field "friends" on the copy, removing the given friend.
// Please use the filter method to filter out the given friend

// Example: userCopy = removeFriend("Niko")

let removeLastFriend = {
  ...user, friends: user.friends.pop(),
}
console.log({removeLastFriend})

let removeNiko= {
  ...user, friends: user.friends.splice(2,1)
}
console.log({removeNiko})
console.log({user})

// should return back
/**
{
  name: "Eliza",
  title: "Senior TS Dev soon",
  yearsCoding: 2,
  isAdmin: false,
  friends: [
    "Gael", 
    "Rob",
    "Gamze",
  ]
} 
*/

// TODO: Write a function "toggleAdmin" that receives no parameter
// The function should create a copy of user variable, then then update the array field "isAdmin" on the copy.
// In case the user is admin (isAdmin === true) the function should set isAdmin to false
// In case the user is not admin (isAdmin === false) the function should set isAdmin to true

let isAdmin = {
  ...user, isAdmin: user.isAdmin = true
}
console.log({isAdmin})

// Good luck :D 🐈

let { title, ...rest } = user;
console.log({ user });
console.log({ rest });

