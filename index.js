const config   = require('./config');
const database = require('./config/database');

database.connect(config.db);

// starting the worker
const butler = require('./worker/butler');
butler.run();

// starting the API
const api = require('./api');
api.start();


