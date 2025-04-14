/* 
1. Given an array of fruit names, return an object with the count of each fruit.

   Input:
   ["apple", "banana", "apple", "orange"]

   Expected Output:
   {
     "apple": 2,
     "banana": 1,
     "orange": 1
   }
*/

const fruits = ["apple", "banana", "apple", "orange"];

const fruitCount=fruits.reduce((acc, element) => {
  acc[element] = ( acc[element] || 0) + 1;
  return acc
}, {});

// Your code here to count the fruits

// Write Pseudo code
// count karna hai ki that particular fruit kitna bar hai
// particular fruit hai usko ek array me rakhenge aur uska length check karenge

// for (let fruit of fruits){
//     fruit===fruit
// }

// let fruitCount = {};

// for (let i = 0; i < fruits.length; i++) {
//   const item = fruits[i];

//   for (let j = 0; j < fruits.length; j++) {
//     let count = 0;
//     if (item === fruits[j]) {
//       fruitCount[item] = count
//     }
//   }
// }

console.log(fruitCount);
