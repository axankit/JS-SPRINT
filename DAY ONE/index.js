const value = [
  { name: "Avi", item: "Phone" },
  { name: "Bea", item: "Wallet" },
  { name: "Avi", item: "Phone" },
];

function solve(input) {
  // Implement your logic here

  listItems = [];

  for (let i = 0; i < input.length; i++) {
    const allItems = input[i].item;

    if (listItems.includes(allItems) === false) {
      listItems.push(allItems);
    }
  }

  return listItems;
}

console.log(solve(value));
