import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
      <Header/>
            <Routes>
            <Route path="/login" element={<Login/>} />
                   {/* <Route path="/login" element={<Login/>} />
                   <Route path="/signup" element={<Signup/>} /> */}
                 
            </Routes>
      <Footer/>
    </BrowserRouter>

      
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
