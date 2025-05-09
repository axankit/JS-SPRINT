/* 
1. You have an array named `numbers` containing `[1, 2, 3, 4, 5]`.
   Use the `map()` method to create a new array `doubledNumbers` where each number is doubled.
*/

const numbers = [1, 2, 3, 4, 5];

// Your code here

const doubledNumbers = numbers.map((num) => num * 2);

// console.log(doubledNumbers)

/* 
2. You have an array `words` containing `["apple", "banana", "avocado", "grape"]`.
   Use the `filter()` method to create a new array `aWords` containing only the words that start with "a".
*/

const words = ["apple", "banana", "avocado", "grape"];

// Your code here
const aWords = words.filter((element) => {
  return element.at(0) === "a";
});

// console.log(aWords)

/* 
3. You have an array `prices` containing `[100, 200, 300, 400]`.
   Use the `map()` method to apply a 10% discount to each price and store the result in `discountedPrices`.
*/

const prices = [100, 200, 300, 400];

// Your code here

const discountedPrices = prices.map((price) => price - price * (10 / 100));

// console.log(discountedPrices)

/* 
4. You have an array `temperatures` containing temperatures in Celsius `[0, 20, 30, 40]`.
   Use the `map()` method to convert these temperatures to Fahrenheit and store them in `fahrenheitTemps`.
*/

const temperatures = [0, 20, 30, 40];

//  F = (C * 9/5) + 32,

// Your code here
const fahrenheitTemps = temperatures.map((temp) => {
  return (temp * 9) / 5 + 32;
});

// console.log(fahrenheitTemps)
/* 
5. You have an array `numbers` containing `[5, 10, 15, 20, 25]`.
   Use the `filter()` method to keep only the numbers greater than 15 and store them in `bigNumbers`.
*/

const numbersList = [5, 10, 15, 20, 25];

// Your code here

const bigNumbers = numbersList.filter((num) => {
  return num > 15;
});

// console.log(bigNumbers)

/* 
6. You have an array `numbers` containing `[1, 2, 3, 4, 5]`.
   Use the `reduce()` method to calculate the sum of all numbers and store it in `sum`.
*/

const nums = [1, 2, 3, 4, 5];

// Your code here

const sum = nums.reduce((num, cur) => {
  return num + cur;
});

// console.log(sum)

/* 
7. You have an array `transactions` containing `[500, -200, 300, -100, 700]`.
   Use the `reduce()` method to calculate the total balance and store it in `totalBalance`.
*/

const transactions = [500, -200, 300, -100, 700];

// Your code here

const totalBalance = transactions.reduce((acc, cur) => {
  return acc + cur;
});

// console.log(totalBalance)

/* 
8. You have an array `names` containing `["Ankit", "Ravi", "Pooja", "Misti"]`.
   Use the `filter()` method to select names with length greater than 4 and store them in `longNames`.
*/

const names = ["Ankit", "Ravi", "Pooja", "Misti"];

// Your code here

const longNames = names.filter((name) => {
  return name.length > 4;
});

// console.log(longNames)

/* 
9. You have an array `marks` containing `[33, 75, 48, 90, 60]`.
   Use the `filter()` method to keep marks greater than or equal to 60.
   Then use `map()` to convert those marks into strings like `"Pass: 75"` and store them in `result`.
*/

const marks = [33, 75, 48, 90, 60];

// Your code here

const result = marks
  .filter((num) => {
    return num >= 60;
  })
  .map((num) => `Pass: ${num}`);

// console.log(result)

/* 
10. You have an array `numbers` containing `[1, 2, 3, 4, 5]`.
    Use `map()` to square each number, then use `filter()` to keep only numbers greater than 10.
    Finally, use `reduce()` to calculate the sum of those numbers and store it in `finalSum`.
*/

const numbersArray = [1, 2, 3, 4, 5];

// Your code here

const finalSum = numbersArray
  .map((num) => num * num)
  .filter((num) => num > 10)
  .reduce((acc, cur) => acc + cur);

console.log(finalSum);
