// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
import Catalog from './Components/Catalog/Catalog';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/catalog/:categoryId" exact component={Catalog} />
        <Route path="/catalog/:categoryId/:itemId" component={ProductDetail} />
      </Switch>
    </Router>
  );
};

export default App;
