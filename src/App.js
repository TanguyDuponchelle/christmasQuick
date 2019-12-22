import React from 'react';
import Surprise from './components/Surprise/Surprise'
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'
import './App.css';
import './components/Surprise/Surprise.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/surprise'>
          <Surprise />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
