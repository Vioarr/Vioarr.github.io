	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 9.99
	},
	{
		name: "bagles",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 3.35
	},
	{
		name: "cabbage",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.49
	},
	{
		name: "oranges",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 4.59
	},
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.59
	},
	{
		name: "strawberries",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.59
	},
	{
		name: "kiwi",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.99
	},
	{
		name: "honey",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.99
	},
	{
		name: "lamb",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 12.99
	}
];

//array of categories that every item falls into

var categories = [
	{
		id: "vegetarian",
		selected: false
	},
	{
		id: "glutenFree",
		selected: false
	},
	{
		id: "organic",
		selected: false
	}
];

//monitors checkboxes state and calls the list population function
function monitorCheckbox(checkbox) {
	var catIndex = categories.findIndex(element => element.id === checkbox.value);
	categories[catIndex].selected = checkbox.checked;
	populateListProductChoices();
}

// given restrictions provided via selected categories, make a reduced list of products
// prices are included in this list, as well as a sort based on price
function restrictListProducts(prods) {
	var prodFlag = true;
	let products = [];
	for (let i=0; i<prods.length; i+=1) {
		if (categories[0].selected && !prods[i].vegetarian){
			prodFlag = false;
		}
		else if (categories[1].selected && !prods[i].glutenFree){
			prodFlag = false;
		}
		else if (categories[2].selected && !prods[i].organic){
			prodFlag = false;
		}
		if(prodFlag) {
			products.push({name: prods[i].name, price: prods[i].price});
		}
		prodFlag = true;
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

//fetch the price of a listed item
