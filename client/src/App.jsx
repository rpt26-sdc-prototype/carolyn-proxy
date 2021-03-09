import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
  return (
    <div id="responsive_page_content" >
      <Header />
      {/* erase this below afterwards, holding place onlt */}
      <h1>GALLERY IMAGE</h1>
      <h1>REVIEWS</h1>
      <h1>AWARDS</h1>
      <h1>TAGS</h1>
      <h1>ETC</h1>
      <Footer />
    </div >
  );
};

export default App;
