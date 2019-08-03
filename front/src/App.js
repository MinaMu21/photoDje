import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarDefault from './component/NavBarDefault';
import HomePage from './component/HomePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBarDefault />
          <Switch>
            <Route onUpdate={window.scrollTo(0, 0)} exact path="/" component={HomePage}/>
          </Switch>  
      </div>
    );
  }
}

export default App;
