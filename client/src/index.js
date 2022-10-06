import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';

import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from './Components/About';
import AddStore from './Components/AddStore';
import Types from './Components/Types';
const BasicExample = () =>

  <Router>
    <h3>Bandhan grocery console</h3>
    <div>
      <ul style={{display:'flex'}}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/store">Add store data</Link>
        </li>
        <li>
          <Link to="/addTypes">Add Product Types</Link>
        </li>
      </ul>

      <hr />
     <Routes>
        <Route exact path="/" element={<Products/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/store" element={<AddStore/>} />
        <Route path="/addTypes" element={<Types/>} />
     </Routes>
     
      {/* 
      <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>;
ReactDOM.render(
  <BasicExample />,
  document.getElementById('root')
);