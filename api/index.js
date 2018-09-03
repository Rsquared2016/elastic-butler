const bodyParser = require('body-parser');
const express = require('express');

class Api {
    constructor() {
        this.app      = express();
        this.routes   = require('./routes');
        this.config   = require('../config');        
    }

    start() {

        // cors
        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        this.app.use(bodyParser.json());

        // building routes
        this.routes.build(this.app);

        this.app.listen(this.config.api.port, () => {
            console.log(`Butler API => Butler API is running at ${this.config.api.port} port`);
        });
    }
}

module.exports = new Api();