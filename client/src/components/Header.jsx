import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { SecondNav, Container, SelectItem, Top, MediaHeader } from '../styling/HeaderStyled.jsx';

const Header = () => {
  return (
    <div style={{ backgroundColor: '#171a21' }}>
      <MediaHeader id="media-header">
        <div>
          <Top >
            <div style={{ fontSize: '13px' }}>
              <SelectItem href="#" style={{
                color: '#e5e4dc',
                backgroundColor: '#5c7e10',
                padding: '4px 10px'
              }}><FaDownload />&nbsp;&nbsp;Install Steam</SelectItem>
              <SelectItem href="#" >&nbsp;&nbsp;&nbsp;login</SelectItem>
              <span style={{
                color: '#b8b6b4',
                textDecoration: 'none'
              }}>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
              <SelectItem href="" >language&nbsp;<IoMdArrowDropdown /></SelectItem>
            </div>
          </Top>
          <SecondNav>
            <div>
              <span style={{ position: 'absolute' }}>
                <SelectItem href="#home">
                  <img src="https://steam-fec.s3.amazonaws.com/images/logo_steam.svg" alt="steam logo" width="176" height="44" />
                </SelectItem>
              </span>
            </div>
            <Container>
              <SelectItem href="#">STORE&nbsp;&nbsp;&nbsp;&nbsp;</SelectItem>
              <SelectItem href="#">COMMUNITY&nbsp;&nbsp;&nbsp;&nbsp;</SelectItem>
              <SelectItem href="#">ABOUT&nbsp;&nbsp;&nbsp;&nbsp;</SelectItem>
              <SelectItem href="#">SUPPORT</SelectItem>
            </Container>
          </SecondNav>
        </div>
      </MediaHeader>
    </div>
  );
};

export default Header;