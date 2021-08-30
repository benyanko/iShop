import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from "./screens/OrderScreen";
import UsersListScreen from "./screens/UsersListScreen";
import OrderListScreen from "./screens/OrderListScreen";
import YuvalReadmeScreen from "./screens/YuvalReadmeScreen";
import BenReadmeScreen from "./screens/BenReadme";
import AboutScreen from "./screens/AboutScreen";

const App = () => {
  return (
      <Router>
          <Header />
          <main className='py-3'>
              <Container>
                  <Route path={'/'} component={HomeScreen} exact />
                  <Route path={'/search/:keyword'} component={HomeScreen} />
                  <Route path={'/login'} component={LoginScreen} exact />
                  <Route path='/register' component={RegisterScreen} />
                  <Route path='/about' component={AboutScreen} />
                  <Route path='/yuvalreadme' component={YuvalReadmeScreen} />
                  <Route path='/benreadme' component={BenReadmeScreen} />
                  <Route path='/profile' component={ProfileScreen} />
                  <Route path='/shipping' component={ShippingScreen} />
                  <Route path='/placeorder' component={PlaceOrderScreen} />
                  <Route path='/admin/userlist' component={UsersListScreen} />
                  <Route path='/admin/userlistsearch/:keyword' component={UsersListScreen} />
                  <Route path='/admin/orderlist' component={OrderListScreen} />
                  <Route path='/order/:id' component={OrderScreen} />
                  <Route path={'/product/:id'} component={ProductScreen} />
                  <Route path={'/cart/:id?'} component={CartScreen} />

              </Container>
          </main>
          <Footer />
      </Router>
  );
}

export default App;
