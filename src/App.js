import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/homepage/shop/shop.component';

function App() {
  return (
    <div >
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
        {/* <Route exact path="/hats" component={HatsPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
