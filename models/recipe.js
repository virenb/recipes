var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: false}
});

var Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;