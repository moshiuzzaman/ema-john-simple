import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import Product from './components/Product/Product';
import ProductDetail from './components/ProductDetail/ProductDetail';


function App() {
  return (
    <div >
      <Router>
        <Header></Header>
          <Switch>
              <Route path="/shop">
                <Shop></Shop>
              </Route>
              <Route path="/order">
                <Review></Review>
              </Route>
              <Route path="/manage">
                  <Manage/>
              </Route>
              <Route exact path="/">
                  <Shop></Shop>
              </Route>
              <Route path="/product/:productkey">
                <ProductDetail></ProductDetail>
              </Route>
              <Route path="*">
                <NoMatch/>
              </Route>
          </Switch>
          
      </Router>
      
      
    </div>
  );
}

export default App;
