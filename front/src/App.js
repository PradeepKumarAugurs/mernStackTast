import React from 'react';
import User from './components/pages/User';
import Product from './components/pages/Product';
import Navbar from './components/layouts/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddProduct from './components/pages/AddProduct';
import EditProduct from './components/pages/EditProduct';
import Outlet from './components/pages/Outlet';
import Order from './components/pages/Order';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route  exact path='/' element={<Product/>}/>
          <Route  exact path="/users" element={<User/>}/>
          <Route exact path="/products/add" element={<AddProduct/>} />
          <Route exact path="/products/edit/:id" element={<EditProduct/>} />
          <Route exact path="/outlets" element={<Outlet/>}/>
          <Route exact path="/orders" element={<Order/>}/>
          {/* <Route exact path="/outlets" element={<Outlet/>}/> */}
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
