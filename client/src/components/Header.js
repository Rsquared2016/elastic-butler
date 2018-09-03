import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="nav-wrapper container">
                        <a href="index.html" className="brand-logo"><i className="material-icons left">record_voice_over</i> Elastic Butler</a>
                        <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/dashboard"><i className="material-icons left">dashboard</i> Dashboard</Link></li>
                            <li><Link to="/recipes"><i className="material-icons left">event_note</i> Recipes</Link></li>
                            <li><Link to="/executions"><i className="material-icons left">line_style</i> Executions</Link></li>
                        </ul>
                    </div>
                    <ul className="sidenav" id="mobile-demo">
                        <li><Link to="/dashboard"><i className="material-icons left">dashboard</i> Dashboard</Link></li>
                        <li><Link to="/recipes"><i className="material-icons left">event_note</i> Recipes</Link></li>
                        <li><Link to="/executions"><i className="material-icons left">line_style</i> Executions</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}