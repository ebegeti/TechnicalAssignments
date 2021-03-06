import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="container">
        <Switch>
            <Route exact path="/pokemon" component={Dashboard}>
            </Route>
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon}>
            </Route>
        </Switch>
        </div>
      </div>
    </Router>
    );
  }
}
export default App;