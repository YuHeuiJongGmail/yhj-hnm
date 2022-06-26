import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'

const PrivateRoute = ({authenticate}) => {
    console.log("authen ", authenticate);
  return authenticate === true ? <ProductDetail/> : <Navigate to="/login"/>
  
};

export default PrivateRoute
