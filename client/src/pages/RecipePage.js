import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RecipePage extends Component {

    constructor() {
        super();
        this.state = {
            recipes: [],
            recipeList: [], // list with filter
            filter: ''
        };
    }

    componentDidMount() {
        fetch('http://localhost:8888/api/recipes')
            .then(response => response.json())
            .then(recipes => {
                this.setState({ recipes, recipeList: recipes });
            });
    }

    filter(e) {
        const query = e.target.value.toLowerCase();

        let recipeList = this.state.recipes;

        if(query.length > 0) {
            recipeList = this.state.recipes.filter(recipe => {
                return recipe.name.toLowerCase().includes(query) ||
                       recipe.application.toLowerCase().includes(query) ||
                       recipe.search.index.toLowerCase().includes(query) ||
                       recipe.search.query.toLowerCase().includes(query) ||
                       recipe.action.type.toLowerCase().includes(query) ||
                       recipe.action.to.toLowerCase().includes(query) ||
                       (recipe.active ? 'yes' : 'no').includes(query);
            });
        }

        this.setState({ recipeList, filter: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <h4>Recipes</h4>

                <Link to="recipes/new" className="waves-effect waves-light btn right"><i className="material-icons left">add</i> Nova receita</Link>

                <div className="clearfix">
                    <div className="mt20 mb40">
                        <input type="search" placeholder="search" value={this.state.filter} onChange={this.filter.bind(this)} />
                    </div>
                </div>

                <table className="striped responsive-table">
                    <thead>
                        <tr>
                            <th>Application</th>
                            <th>Name</th>
                            <th>Index</th>
                            <th>Query</th>
                            <th>Type</th>
                            <th>To</th>
                            <th>Active</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.recipeList.map(recipe => {
                                return (
                                    <tr key={recipe._id}>
                                        <td>{recipe.application}</td>
                                        <td>{recipe.name}</td>
                                        <td>{recipe.search.index}</td>
                                        <td>{recipe.search.query}</td>
                                        <td>{recipe.action.type}</td>
                                        <td>{recipe.action.to}</td>
                                        <td>{recipe.active ? 'Yes' : 'No' }</td>
                                        <td className="actions"><a><i className="material-icons left">edit</i></a></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}