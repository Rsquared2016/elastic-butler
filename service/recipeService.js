class RecipeService {
    constructor() {
        this.model = require('../model/recipe');
    };

    find(query) {
        return this.model.find(query);
    };

    findOne(id) {
        return this.model.findOne({ _id: id });
    };

    findActive() {
        return this.model.find({ active: true });
    };

    create(recipe) {
        return this.model.create(recipe);
    };

    findOneAndUpdate(id, recipe) {
        return this.model.findOneAndUpdate({ _id: id }, recipe, { new: true });
    };

    deleteOne(id) {
        return this.model.deleteOne({ _id: id });
    };
};

module.exports = new RecipeService();