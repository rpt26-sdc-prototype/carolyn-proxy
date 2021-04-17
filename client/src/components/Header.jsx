import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import '../styling/header.css'

const Header = () => {
  return (
    <div style={{ backgroundColor: '#171a21' }}>
      <div id="media-header">
        <div>
          <div id="proxyTop" >
            <div style={{ fontSize: '13px' }}>
              <a className="selectItem" href="#" style={{
                color: '#e5e4dc',
                backgroundColor: '#5c7e10',
                padding: '4px 10px',
              }}><FaDownload />&nbsp;&nbsp;Install Steam</a>
              <a className="selectItem" href="#" >&nbsp;&nbsp;&nbsp;login</a>
              <span style={{
                color: '#b8b6b4',
                textDecoration: 'none'
              }}>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
              <a className="selectItem" href="#" >language&nbsp;<IoMdArrowDropdown /></a>
            </div>
          </div>
          <div id="secondNav">
            <div>
              <span style={{ position: 'absolute' }}>
                <a className="selectItem" href="#home">
                  <img src="https://steam-fec.s3.amazonaws.com/images/logo_steam.svg" alt="steam logo" width="176" height="44" />
                </a>
              </span>
            </div>
            <div id="container">
              <a className="selectItem" href="#">STORE&nbsp;&nbsp;&nbsp;&nbsp;</a>
              <a className="selectItem" href="#">COMMUNITY&nbsp;&nbsp;&nbsp;&nbsp;</a>
              <a className="selectItem" href="#">ABOUT&nbsp;&nbsp;&nbsp;&nbsp;</a>
              <a className="selectItem" href="#">SUPPORT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;