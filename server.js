var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Recipe = require('./models/recipe');

var config = require('./config');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static('public'));
//app.listen(config.PORT);

var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }

        app.listen(config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};


if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
};

app.get('/recipes', function(req, res) {
    Recipe.find(function(err, recipes) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        var recipeHtml = '<h1 style="font-family: \'Oswald\', sans-serif">My Saved Recipes</h1>';
        recipes.forEach(function(item, index) {
            recipeHtml += ('<br /><span style="font-family: \'Oswald\', sans-serif"><strong>' + item.title + '</strong></span> <br /> <img src="' + item.image + '" width=\'275\' height=\'275\' class=\"img-rounded\"><br /><form action="/delete" method="post"><input type="hidden" name="id" value="' + item.id + '" /><input type="submit" style="padding: 5px 15px;background: #ccc; border-radius: 5px; cursor: pointer; border: 0 none" value="Delete" /></form><br /><br />');
        });


        res.send(recipeHtml);
    });
});

app.post('/recipes', function(req, res) {
    Recipe.create({
        title: req.body.title,
        image: req.body.image
    }, function(err, recipe) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(200).send(recipe);
    });
});

app.use('*', function(req, res) {
    res.status(404).json({
        message: 'Not Found'
    });
});

exports.app = app;
exports.runServer = runServer;
