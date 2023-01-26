const user = {
  name: "Eliza",
  title: "Senior TS Dev soon",
  yearsCoding: 2,
  isAdmin: false,
  friends: ["Gael", "Rob", "Niko", "Gamze"],
};
console.log({ user });
// let's manipulate the object above.
//By creating a copy of "userCopy" on each update...
//and store te updated copy in variable userCopy!
// after each operation: console.log userCopy
let userCopy = user;
console.log({ userCopy });
console.log({ user });

// TODO: Increase years coding in object by 2! Do so by creating a copy of userCopy, updating the field "yearsCoding" by years

let increase = { ...userCopy, yearsCoding: 4 };
console.log({ increase });
console.log({ userCopy });
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
// The function should create a copy of userCopy variable, and then update the field "yearsCoding" on the copy, adding "years" to it
let grownedExperience = (years) => {
  return { ...userCopy, yearsCoding: userCopy.yearsCoding + years };
};
console.log({ grownedExperience: grownedExperience(1) });
console.log("2-grownedExperience:", grownedExperience(4));
let addYearsCoding = grownedExperience(5);
console.log({ addYearsCoding });
console.log({ userCopy });

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
// The function should create a copy of userCopy variable, and then update the field "title" on the copy, making it uppercase.
// The result should get stored in userCopy variable
// Example: userCopy = makeTitleUppercase()

let makeTitleUppercase = () => {
  return { ...userCopy, title: userCopy.title.toUpperCase() };
};
console.log({ makeTitleUppercase: makeTitleUppercase() });
console.log({ userCopy });
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
// The function should create a copy of userCopy variable, and then update the array field "friends" on the copy, adding the new friend to it.

// Example: userCopy = addFriend("Pierluigi")

let addNewFriends = (newFriend) => {
  return { ...userCopy, friends: [...userCopy.friends, newFriend] };
};
let addNewFriend = addNewFriends("Pier");
console.log({ addNewFriend });

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
// The function should create a copy of userCopy variable, then then update the array field "friends" on the copy, removing the given friend.
// Please use the filter method to filter out the given friend

// Example: userCopy = removeFriend("Niko")

// let removeLastFriend = {
//   ...userCopy,
//   friends: userCopy.friends.pop(),
// };
// console.log({ removeLastFriend });

// let removeNiko = {
//   ...userCopy,
//   friends: userCopy.friends.splice(2, 1),
// };
// console.log({ removeNiko });
// console.log({ userCopy });

let removeByName = (friendName) => {
  return {
    ...userCopy,
    friends: userCopy.friends.filter((friend) => friend !== friendName),
  };
};
console.log({ removeByName: removeByName("Niko") });

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
// The function should create a copy of userCopy variable, then then update the array field "isAdmin" on the copy.
// In case the userCopy is admin (isAdmin === true) the function should set isAdmin to false
// In case the userCopy is not admin (isAdmin === false) the function should set isAdmin to true

let isAdmin = (userCp) => {
  // console.log(userCp)
  return { ...userCp, isAdmin: !userCp.isAdmin };
};
let adminUpdate = isAdmin(userCopy);

console.log({ adminUpdate });
adminUpdate = isAdmin(adminUpdate);
console.log({ adminUpdate });
adminUpdate = isAdmin(adminUpdate);
console.log({ adminUpdate });

// Good luck :D 🐈

let { title, ...rest } = userCopy;
console.log({ userCopy });
console.log({ rest });
