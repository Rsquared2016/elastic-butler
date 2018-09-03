const recipeController = require('./controller/recipeController');

class Route {
    build(app) {
        app.get('/api/recipes', recipeController.list.bind(recipeController));
        app.get('/api/recipes/:id', recipeController.find.bind(recipeController));
        app.put('/api/recipes/:id', recipeController.update.bind(recipeController));
        app.post('/api/recipes', recipeController.create.bind(recipeController));
        app.delete('/api/recipes/:id', recipeController.remove.bind(recipeController));
    }
}

module.exports = new Route();
