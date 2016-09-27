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

var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }

        app.listen(process.env.PORT || 3000, function(){
          console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
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
        var recipeHtml;
        recipes.forEach(function(item, index){
            recipeHtml += ('<br /><span style="font-family: \'Oswald\', sans-serif"><strong>' + item.title + '</strong></span> <br /> <img src="' +item.image+ '" width=\'275\' height=\'275\' class=\"img-rounded\"><br />' );
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