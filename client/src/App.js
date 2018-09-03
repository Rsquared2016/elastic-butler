import React, { Component } from 'react';
import { Route } from 'react-router';
import Header from './components/Header';
import RecipePage from './components/recipes/RecipePage';
import NewRecipePage from './components/recipes/NewRecipePage';
import DashboardPage from './components/dashboard/DashboardPage';

class App extends Component {
  render() {
    return (
        <main>
            <Header />
            <Route path="/dashboard" component={DashboardPage} />
            <Route exact path="/recipes" component={RecipePage} />
            <Route path="/recipes/new" component={NewRecipePage} />
        </main>
    );
  }
}

export default App;
