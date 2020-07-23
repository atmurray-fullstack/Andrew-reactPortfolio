import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import HomeScreen from './views/HomeScreen';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/">
          <HomeScreen />
        </Route>

      </Switch>
    </BrowserRouter>


  );
}

export default App;
