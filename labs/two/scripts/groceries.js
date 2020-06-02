	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	{
		name: "bagles",
		vegetarian: true,
		glutenFree: false,
		price: 3.35
	},
	{
		name: "cabbage",
		vegetarian: true,
		glutenFree: true,
		price: 2.00
	},
	{
		name: "oranges",
		vegetarian: true,
		glutenFree: true,
		price: 4.59
	},
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		price: 2.50
	},
	{
		name: "strawberries",
		vegetarian: true,
		glutenFree: true,
		price: 3.50
	},
	{
		name: "kiwi",
		vegetarian: true,
		glutenFree: true,
		price: 4.00
	},
	{
		name: "honey",
		vegetarian: true,
		glutenFree: true,
		price: 5.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
//TODO: have flag set to true and when a category doesn't include it switch to false
function restrictListProducts(prods, restriction) {
	let products = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			products.push({name: prods[i].name, price: prods[i].price});
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			products.push({name: prods[i].name, price: prods[i].price});
		}
		else if (restriction == "None"){
			products.push({name: prods[i].name, price: prods[i].price});
		}
	}
	return products.sort((a,b) => a.price - b.price);
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
