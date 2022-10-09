import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import NotFount from './components/NotFount';
import Product from './components/Product';
import FeaturePro from './components/product/FeaturePro';
import NewProduct from './components/product/NewProduct';
import User from './components/user/User';
import UserDetails from './components/user/UserDetails';
import Admin from './components/user/Admin';
import Profile from './components/Profile';
import Login from './components/Login';
import { RequireAuth } from './components/RequireAuth';

import './App.css';
import { AuthProvider } from './components/auth';

const LazyAbout = React.lazy(() => import('./components/About'))

const App = () =>{
  return (
    <AuthProvider>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='about' element={
        <React.Suspense fallback='Loading...'>
          <LazyAbout/>
        </React.Suspense>
        } />
      {/* <Route path='about' element={<About/>} /> */}
      <Route path='contact' element={<Contact/>} />
      <Route path='order' element={<OrderSummary/>} />
      <Route path='product' element={<Product/>}>
        <Route index element={<FeaturePro/>}/>
        <Route path='featureProduct' element={<FeaturePro/>}/>
        <Route path='newProduct' element={<NewProduct/>}/>
      </Route>
      <Route path='profile' element={
        <RequireAuth>
          <Profile/>
        </RequireAuth>
        } />
      <Route path='login' element={<Login/>} />
      <Route path='user' element={<User/>}>    
        <Route path=':userId' element={<UserDetails/>}/>
        <Route path='admin' element={<Admin/>}/>
      </Route>
      <Route path='*' element={<NotFount/>} />
    </Routes>
    </AuthProvider>
  );
}

export default App;
