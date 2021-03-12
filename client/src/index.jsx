import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';

import './styling/App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));