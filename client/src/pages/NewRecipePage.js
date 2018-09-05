import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewRecipePage extends Component {

    constructor() {
        super();
        this.state =  {
            application: '',
            name: '',
            active: true,
            elasticsearch: '',
            kibana: '',
            interval: 60,
            index: '',
            query: '',
            limit: '10',
            period: '60 m',
            action: {

            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    save = (e) => {
        e.preventDefault();
        console.log('Recipe =>', this.state)
    }

    handleChange(event) {
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="container">
                <h4>New Recipe</h4>

                <div className="row">
                    <form className="col s12" onSubmit={this.save}>

                        <div className="row">
                            <div className="col s12">
                                <h6>Recipe Body</h6>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col m6 s12">
                                <label>Application:</label>
                                <input type="text" name="application" value={this.state.application} onChange={this.handleChange} className="validate" />
                            </div>
                            <div className="input-field col m6 s12">
                                <label>Name:</label>
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="validate" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col m6 s12">
                                <label>Elastic Search:</label>
                                <input type="text" name="elasticsearch" value={this.state.elasticsearch} onChange={this.handleChange} className="validate" />
                                <span className="helper-text" data-error="wrong" data-success="right">Elastic search URL with
                                    port http://localhost:9200</span>
                            </div>
                            <div className="input-field col m6 s12">
                                <label>Kibana:</label>
                                <input type="text" name="kibana" value={this.state.kibana} onChange={this.handleChange} className="validate" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col m6 s12">
                                <label>Interval:</label>
                                <input type="text" name="interval" value={this.state.interval} onChange={this.handleChange} className="validate" />
                                <span className="helper-text" data-error="wrong" data-success="right">Interval in minutes that
                                    recipe will run</span>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col m6 s12 switch">
                                <label>
                                    Inactive
                                    <input type="checkbox" />
                                    <span className="lever"></span>
                                    Active
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12">
                                <h6>Search</h6>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col m6 s12">
                                <label>Index:</label>
                                <input type="text" name="index" value={this.state.index} onChange={this.handleChange} className="validate" />
                                <span className="helper-text" data-error="wrong" data-success="right">Elastic search index name</span>
                            </div>
                            <div className="input-field col m6 s12">
                                <label>Query:</label>
                                <input type="text" name="query" value={this.state.query} onChange={this.handleChange} className="validate" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col m6 s12">
                                <label>Limit:</label>
                                <input type="text" name="limit" value={this.state.limit} onChange={this.handleChange} className="validate" />
                                <span className="helper-text" data-error="wrong" data-success="right">Limit of hits to action
                                    be executed</span>
                            </div>
                            <div className="input-field col m6 s12">
                                <label>Period:</label>
                                <input type="text" name="period" value={this.state.period} onChange={this.handleChange} className="validate" />
                                <span className="helper-text" data-error="wrong" data-success="right">How long in the pass you
                                    want to search for the query?</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12">
                                <h6>Action</h6>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <label>Json:</label>
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <span className="helper-text" data-error="wrong" data-success="right">Action is very ecletic, so you must put your json action body here</span>
                            </div>
                        </div>

                        <Link className="waves-effect waves-light" to="/recipes">cancel</Link>

                        <button type="submit" className="waves-effect waves-light btn">Save</button>  
                    </form>
                </div>

            </div>
        );
    }
    //https://medium.com/front-end-hacking/html5-form-validation-in-react-65712f778196
}