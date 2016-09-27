exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://virenb:hakeem3343@ds041496.mlab.com:41496/recipes-node-cap':
                            'mongodb://virenb:hakeem3343@ds041496.mlab.com:41496/recipes-node-cap');

exports.PORT = process.env.PORT || 3000;