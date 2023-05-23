import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Home from './components/website/Home';
import Producthunting from './components/website/Producthunting';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
     
            <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/producthunting" element={<Producthunting/>}/>
                  <Route path="/dashboard" element={<Dashboard component="dashboardhome"/>}/>
                  <Route path="/producthunting" element={<Dashboard component="producthunting"/>}/>
                  <Route path="/productsourcing" element={<Dashboard component="productsourcing"/>}/>
                  <Route path="/productranking" element={<Dashboard component="productranking"/>}/>
                   <Route path="/login" element={<Login/>} />
                   <Route path="/signup" element={<Signup/>} />
                   
                 
            </Routes>
      
    </BrowserRouter>

      
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
