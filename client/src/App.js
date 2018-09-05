import React, { Component } from 'react';
import { Route } from 'react-router';
import Header from './components/Header';
import RecipePage from './pages/RecipePage';
import NewRecipePage from './pages/NewRecipePage';
import DashboardPage from './pages/DashboardPage';

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
