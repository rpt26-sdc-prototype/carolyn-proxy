import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;