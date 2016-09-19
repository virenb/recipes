var mock_recipe_results = {
	"recipe_results": [
		{
			"id": "1111111",
			"title": "Meat Lasagna",
			"type": "dinner",
			"userId": "01010101",
			"dateAdded": "01/01/2016"
			"url": "recipes.com/id/219939"
		},
			{
			"id": "1111112",
			"title": "Chocolate Cake",
			"type": "dessert",
			"userId": "01189101",
			"dateAdded": "09/04/2010"
			"url": "recipes.com/id/123456"
		},
			{
			"id": "1111113",
			"title": "Grilled Cheese",
			"type": "lunch",
			"userId": "99990000",
			"dateAdded": "11/21/2015"
			"url": "recipes.com/id/009064"
		},
			{
			"id": "1111114",
			"title": "Enchiladas",
			"type": "dinner",
			"userId": "71717171",
			"dateAdded": "01/08/2013"
			"url": "recipes.com/id/909090"
		},
	]
};

function getRecipes(callbackFn) {
    setTimeout(function(){ callbackFn(mock_recipe_results)}, 1000);
}

// this function stays the same when we connect
// to real API later
function displayRecipes(data) {
    for (index in data.recipes) {
       $('body').append(
        '<p>' + data.recipes[index].text + '</p>');
    }
}

// this function can stay the same even when we
// are connecting to real API
function getAndDisplayRecipes() {
    getRecipes(displayRecipes);
}

$(function() {
    getAndDisplayRecipes();
})