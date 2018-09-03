class RecipeController {
    constructor() {
        this.service = require('../../service/recipeService.js');
    }

    list(req, res, next) {

        this.service.find({})
            .then(recipes => {
                res.status(200).send(recipes);
                next();
            })
            .catch(error => {
                res.status(500).send(error);
                next();
            });
    }

    find(req, res, next) {
        this.service.findOne(req.params.id)
            .then(recipe => {
                if(recipe)
                    res.status(200).send(recipe);
                else
                    res.status(404).send();

                next();
            })
            .catch(error => {
                res.status(500).send(error);
                next();
            });
    }

    create(req, res, next) {
        const recipe = req.body;

        this.service.create(recipe)
            .then(recipe => {
                res.status(201).send(recipe);
                next();
            })
            .catch(error => {
                res.status(500).send(error);
                next();
            });
    }

    update(req, res, next) {        
        const recipeUpdated = req.body;

        this.service.findOneAndUpdate(req.params.id, recipeUpdated)
            .then(recipe => {
                res.status(200).send(recipe);
                next();
            })
            .catch(error => {
                res.status(500).send(error);
                next();
            });
    }

    remove(req, res, next) {
        
        this.service.deleteOne(req.params.id)
            .then(recipe => {
                res.status(204).send();
                next();
            })
            .catch(error => {
                res.status(500).send(error);
                next();
            });
    }
}

module.exports = new RecipeController();