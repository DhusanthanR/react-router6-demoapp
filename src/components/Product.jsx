import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const Product = () => {
  return (
    <div style={{padding:'20px',textAlign:'center'}}>
      <div style={{margin:'20px'}}>
        <h4>Product</h4>
        <input type="text"  placeholder='Search Product'/>
      </div>
      <nav>
          <Link to='featureProduct'> Feature Products</Link>
          <Link to='newProduct'> New Products</Link>
      </nav>
      <Outlet/>   
    </div>
  )
}

export default Product;