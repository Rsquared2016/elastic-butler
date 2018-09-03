import React, { Component } from 'react';

export default class RecipePage extends Component {
    render() {
        return (
            <div className="container">
                <h4>New Recipe</h4>

                <div className="row">
                    <form className="col s12">

                        <div className="row">
                            <div className="col s12">
                                <h6>Recipe Body</h6>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col m6 s12">
                                <label for="">Application:</label>
                                <input type="text" className="validate" />
                            </div>
                            <div className="input-field col m6 s12">
                                <label for="">Name:</label>
                                <input type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col m6 s12">
                                <label for="">Elastic Search:</label>
                                <input type="text" className="validate" />
                                <span className="helper-text" data-error="wrong" data-success="right">Elastic search URL with
                                    port http://localhost:9200</span>
                            </div>
                            <div className="input-field col m6 s12">
                                <label for="">Kibana:</label>
                                <input type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col m6 s12">
                                <label for="">Interval:</label>
                                <input type="text" className="validate" />
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
                                <label for="">Index:</label>
                                <input type="text" className="validate" />
                                <span className="helper-text" data-error="wrong" data-success="right">Elastic search index name</span>
                            </div>
                            <div className="input-field col m6 s12">
                                <label for="">Query:</label>
                                <input type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col m6 s12">
                                <label for="">Limit:</label>
                                <input type="text" className="validate" />
                                <span className="helper-text" data-error="wrong" data-success="right">Limit of hits to action
                                    be executed</span>
                            </div>
                            <div className="input-field col m6 s12">
                                <label for="">Period:</label>
                                <input type="text" className="validate" />
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
                                <label for="">Json:</label>
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <span className="helper-text" data-error="wrong" data-success="right">Action is very ecletic, so you must put your json action body here</span>
                            </div>
                        </div>

                    </form>
                </div>

                <a className="waves-effect waves-light">cancel</a>
                <a className="waves-effect waves-light btn">Save</a>
            </div>
        );
    }
}