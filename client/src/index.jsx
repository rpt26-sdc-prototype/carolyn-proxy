import React from 'react';
import ReactDOM from 'react-dom';

// components
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

// components rendered to DOM
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<NavBar />, document.getElementById('nav'));
ReactDOM.render(<Footer />, document.getElementById('footer'));