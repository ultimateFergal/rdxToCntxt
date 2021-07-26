import React/* , { Component } */ from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import ShopContext from './context/shop-context'

import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import './App.css';
import GlobalState from './context/GlobalState';

// class App extends Component {
const App = props => {
  // render() {
    return (
/*       <ShopContext.Provider 
        value={{
          products: this.state.products,
          cart: this.state.cart,
          addProductToCart: this.addproductToCart,
          removeProductFromCart: this.removeProductFromCart
      }}> */
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/cart" component={CartPage} exact />
          </Switch>
        </BrowserRouter>
      </GlobalState>
/*       </ShopContext.Provider> */
    );
  }

export default App;
