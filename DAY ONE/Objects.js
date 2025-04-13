/* 
1. Declare an object named `student` with properties: `name` as `"Ankit"`, `age` as `19`, and `city` as `"Delhi"`.
   Access the `name` property and store it in a variable named `studentName`.
*/

const student = {
    name: "Ankit",
    age: 19,
    city: "Delhi"
  }
  
  // Your code here

  const studentName=student.name
//   console.log(studentName)
  
  /* 
  2. You have an object `book` with properties `title`, `author`, and `year`.
     Update the `year` property to `2025`.
  */
  
  const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018
  }
  
  // Your code here
  book.year=2025;

//   console.log(book)

  /* 
  3. You have an object `car` with properties `brand`, `model`, and `color`.
     Add a new property `price` with value `1000000` to the object.
  */
  
  const car = {
    brand: "Tesla",
    model: "Model S",
    color: "Red"
  }
  
  // Your code here
  car.price=100000;
//   console.log(car)
  
  /* 
  4. You have an object `person` with properties `firstName` and `lastName`.
     Use destructuring to extract both values into variables `first` and `last`.
  */
  
  const person = {
    firstName: "Rahul",
    lastName: "Kumar"
  }
  
  // Your code here

const {firstName:first,lastName:last}=person;

console.log(first,last)
  
  /* 
  5. Declare an object `movie` with properties `name`, `releaseYear`, and `ratings` (an array of numbers).
     Access the second rating and store it in a variable named `secondRating`.
  */
  
  const movie = {
    name: "Inception",
    releaseYear: 2010,
    "ratings": [9, 8.5, 9.2]
  }
  
  // Your code here
  const secondRating=movie.ratings[1]
 
//   console.log(secondRating)
  
  /* 
  6. You have an array of objects named `products` containing `{name: "Laptop", price: 50000}`, `{name: "Phone", price: 20000}`.
     Access the price of the second product and store it in a variable named `phonePrice`.
  */
  
  const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 }
  ]
  
  // Your code here

  const phonePrice=products[1].price;

//   console.log(phonePrice)
  
  /* 
  7. You have an object `employee` with properties `name`, `position`, and `salary`.
     Remove the property `position` from the object.
  */
  
  const employee = {
    name: "Priya",
    position: "Manager",
    salary: 75000
  }
  
  // Your code here
  delete employee.position

  console.log(employee)
  /* 
  8. You have two objects: `address1` and `address2`.
     Merge both objects into a new object `completeAddress` using the spread operator.
  */
  
  const address1 = {
    city: "Mumbai",
    state: "Maharashtra"
  }
  
  const address2 = {
    country: "India",
    pincode: 400001
  }
  
  // Your code here

  const completeAddress={...address1 ,...address2}

//   console.log(completeAddress)
  
  /* 
  9. You have an object `studentMarks` with student names as keys and marks as values.
     Find the average of all the marks and store it in a variable `averageMarks`.
  */
  
  const studentMarks = {
    Ankit: 85,
    Ravi: 90,
    Pooja: 78,
    Misti: 92
  }
  
  // Your code here

  const marks=Object.values(studentMarks)
  let sum=0

for (let i=0; i<marks.length; i++) {
    sum=sum+marks[i]
}

// console.log(sum/marks.length)
  
  /* 
  10. You have an object `order` with properties `id`, `amount`, and `items` (an array of strings).
      Add a new item `"Tea"` to the `items` array.
  */
  
  const order = {
    id: 101,
    amount: 500,
    items: ["Burger", "Fries"]
  }
  
  // Your code here

order.items.push("Tea")

console.log(order)