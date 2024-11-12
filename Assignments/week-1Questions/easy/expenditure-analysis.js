/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


function calculateTotalSpentByCategory(transactions) {
  const categories = [...new set(transactions.map(transaction => transaction.category))];
  for (const entry of transactions) {
    for(let i=1;i<categories.length; i++  ) {
      if(entry.category == categories[i]) {
        categories[i].totalSpent += entry.price;
      }
    }
  }
}

module.exports = calculateTotalSpentByCategory;
