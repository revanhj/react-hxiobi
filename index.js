import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter,Route,swith} from 'react-router-dom';
import home from './homepage/Home';
import './style.css';

const App=()=> 
<BrowserRouter>
<Route path="/" component={home} />
</BrowserRouter>
render(<App />, document.getElementById('root'));
