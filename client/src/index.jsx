import React from 'react';
import ReactDOM from 'react-dom';

// styling
import './styling/index.css';

// components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// components rendered to DOM
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));