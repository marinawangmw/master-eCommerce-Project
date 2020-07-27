import React from 'react';
import './App.css';
import HomePage from './pages/homepage.component';
import { Route, Switch } from 'react-router-dom';

function App() {

  const HatPage = () => (
  	<div>
	    <h1> Hat's Page </h1>
  	</div>
  )	

  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
