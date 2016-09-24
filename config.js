exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://localhost/recipes' :
                            'mongodb://localhost/recipes-dev');
exports.PORT = process.env.PORT || 8080;