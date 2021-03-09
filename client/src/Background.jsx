import React from 'react';
// import svg from './images/logo_steam.svg';

import './App.css';
import { FaDownload } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { GrFacebook } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';


const Background = () => {
  return (
    <div id="responsive_page_content" >
      <div id="global_header">
        <div className="content">
          <div id="global_action_menu">
            <div id="install-login-language">∂
              <a href="#install-steam" id="header_installsteam_btn_content"><FaDownload />&nbsp;&nbsp;Install Steam</a>
              <a href="#login" >&nbsp;&nbsp;&nbsp;login</a>
              <span id="line-separator">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
              <a href="#install-steam" >language <IoMdArrowDropdown /></a>
            </div>
          </div>
          <div id="total-nav">
            <div className="logo">
              <span id="logo_holder">
                <a href="#home">
                  <img src="https://steam-fec.s3.amazonaws.com/images/logo_steam.svg" alt="steam logo" width="176" height="44" />
                </a>
              </span>
            </div>
            <div className="supernav_container">
              <a href="#store">STORE&nbsp;&nbsp;&nbsp;&nbsp;</a>
              <a href="#news">COMMUNITY&nbsp;&nbsp;&nbsp;&nbsp;</a>
              <a href="#contact">ABOUT&nbsp;&nbsp;&nbsp;&nbsp;</a>
              <a href="#about">SUPPORT</a>
            </div>
          </div>
        </div>
      </div>
      <h1>GALLERY IMAGE</h1>
      <h1>REVIEWS</h1>
      <h1>AWARDS</h1>
      <h1>AWARDS</h1>
      <h1>TAGS</h1>
      <h1>ETC</h1>
      <footer id="footer">
        <br />
        <div className="rule"></div>
        <div id="more-info">
          <a className="footer-items" href="">&nbsp;&nbsp;&nbsp;ABOUT STEAM&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a className="footer-items" href="">&nbsp;&nbsp;&nbsp;ABOUT VALVE&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a className="footer-items" href="">&nbsp;&nbsp;&nbsp;HELP&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a className="footer-items" href="">&nbsp;&nbsp;&nbsp;NEWS FEEDS&nbsp;&nbsp;&nbsp;</a>
          <br />
        </div>
        <div className="rule"></div>
        <div id="valve">
          <a href="#footer-valve-logo">
            <img src="https://steam-fec.s3.amazonaws.com/images/footerLogo_valve_new.png" alt="steam logo" width="90" height="30" />
          </a>
          <span class="footer-text">
            <span>© 2021 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the2 US and other countries</span>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VAT included in all prices where applicable.</div>
          </span>
          <a href="#footer-valve-logo">
            <img src="https://steam-fec.s3.amazonaws.com/images/logo_steam_footer.png" alt="steam logo" width="90" height="30" />
          </a>
          <br />
        </div>
        <div className="rule"></div>
        <div id="bottom-links">
          <a href="">About Valve&nbsp;&nbsp;|</a>
          <a href="">&nbsp;&nbsp;Steamworks&nbsp;|</a>
          <a href="">&nbsp;&nbsp;Jobs&nbsp;|</a>
          <a href="">&nbsp;&nbsp;Steam Distribution&nbsp;|</a>
          <a href="">&nbsp;&nbsp;Gift Cards&nbsp;|</a>
          <a href="">&nbsp;&nbsp;Gift Cards&nbsp;|</a>
          <a href="">&nbsp;&nbsp;<GrFacebook />&nbsp;Steam&nbsp;|</a>
          <a href="">&nbsp;&nbsp;<FaTwitter />&nbsp;@steam</a>
          <br />
        </div>
      </footer>
    </div >
  );
};

export default Background;
