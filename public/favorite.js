var saved_recipe_results = {
	"recipes": [
		{
			"id": "1111111",
			"title": "Meat Lasagna",
			"type": "dinner",
			"userId": "01010101",
			"dateAdded": "01/01/2016",
			"url": "recipes.com/id/219939"
		},
			{
			"id": "1111114",
			"title": "Enchiladas",
			"type": "dinner",
			"userId": "71717171",
			"dateAdded": "01/08/2013",
			"url": "recipes.com/id/909090"
		}
	]
};

function getSavedRecipes(callbackFn) {
    setTimeout(function(){ callbackFn(saved_recipe_results)}, 1);
}

// this function stays the same when we connect
// to real API later
function displaySavedRecipes(data) {
    for (index in data.recipes) {
       $('body').append(
        '<p>' + data.recipes[index].title + '</p>');
    }
}

// this function can stay the same even when we
// are connecting to real API
function getAndDisplaySavedRecipes() {
    getSavedRecipes(displaySavedRecipes);
}

$(function() {
    getAndDisplaySavedRecipes();
})