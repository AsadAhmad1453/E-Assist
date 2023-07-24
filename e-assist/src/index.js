import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Home from './components/website/Home';
import Producthunting from './components/website/Producthunting';
import Aboutus from './components/website/Aboutus';
import Contactus from './components/website/Contactus';
import reportWebVitals from './reportWebVitals';
import Privatecomponent from './components/Privatecomponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
     
            <Routes>
                  
                  <Route path="/" element={<Home/>}/>
                  <Route path='/aboutus' element={<Aboutus/>}/>
                  <Route path='/contactus' element={<Contactus/>}/>
                  <Route element={<Privatecomponent/>}>
                  <Route path="/dashboard" element={<Dashboard component="dashboardhome"/>}/>
                  <Route path="/dashboard/producthunting" element={<Dashboard component="producthunting"/>}/>
                  <Route path="/dashboard/productsourcing/:key1/:key2/:key3" element={<Dashboard component="productsourcing"/>}/>
                  <Route path="/dashboard/productlisting/:key1/:key2/:key3/:key4" element={<Dashboard component="productlisting"/>}/>
                
                  </Route>
                 
                  <Route path='login' element={<Login/>}/>
                  <Route path='signup' element={<Signup/>}/>
                  
                   
                 
            </Routes>
      
    </BrowserRouter>

      
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
