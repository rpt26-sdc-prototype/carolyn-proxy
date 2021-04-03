import React from 'react';
import { Foot, FootNav, FootSelection, SteamLogo, Line, Buttons } from '../styling/FooterStyled.jsx';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#171a21' }}>
      <Foot>
        <br />
        <Line></Line>
        <div style={{ fontSize: '14px', marginLeft: '175px' }}>
          <FootSelection href="#">&nbsp;&nbsp;&nbsp;ABOUT STEAM&nbsp;&nbsp;&nbsp;&nbsp;</FootSelection>
          <FootSelection href="#">&nbsp;&nbsp;&nbsp;ABOUT VALVE&nbsp;&nbsp;&nbsp;&nbsp;</FootSelection>
          <FootSelection href="#">&nbsp;&nbsp;&nbsp;HELP&nbsp;&nbsp;&nbsp;&nbsp;</FootSelection>
          <FootSelection href="#">&nbsp;&nbsp;&nbsp;NEWS FEEDS&nbsp;&nbsp;&nbsp;</FootSelection>
          <br />
        </div>
        <Line></Line>
        <FootNav>
          <div style={{ marginTop: '-25px' }}>
            <span >
              <Buttons href="#">
                <img src="https://steam-fec.s3.amazonaws.com/images/footerLogo_valve_new.png" alt="steam logo" width="90" height="25" />
              </Buttons>
            </span>
          </div>
          <div style={{ marginTop: '-30px', marginBottom: '-5px' }}>
            <div style={{ fontSize: '11px' }}>
              <span style={{ paddingLeft: '100px' }}>© 2021 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the 2 US and other countries</span>
              <div style={{ paddingLeft: '100px' }}>VAT included in all prices where applicable.
              <span>
                  <Buttons href="#">&nbsp;&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;</Buttons>
                  <Buttons href="#">Legal&nbsp;&nbsp;|&nbsp;&nbsp;</Buttons>
                  <Buttons href="#">Steam Subscriber Agreement&nbsp;&nbsp;|&nbsp;&nbsp;</Buttons>
                  <Buttons href="#">Refunds</Buttons>
                </span>
              </div>

            </div>
          </div>
          <SteamLogo >
            <div href="#" >
              <img src="https://steam-fec.s3.amazonaws.com/images/logo_steam_footer.png" alt="steam logo" width="90" height="30" />
            </div>
          </SteamLogo>
        </FootNav>


        <Line></Line>
        <div style={{ fontSize: '14px', marginLeft: '175px' }}>
          <Buttons href="">About Valve&nbsp;&nbsp;|</Buttons>
          <Buttons href="">&nbsp;&nbsp;Steamworks&nbsp;|</Buttons>
          <Buttons href="">&nbsp;&nbsp;Jobs&nbsp;|</Buttons>
          <Buttons href="">&nbsp;&nbsp;Steam Distribution&nbsp;|</Buttons>
          <Buttons href="">&nbsp;&nbsp;Gift Cards&nbsp;|</Buttons>
          <Buttons href="">&nbsp;&nbsp;Gift Cards&nbsp;|</Buttons>
          <Buttons href="">&nbsp;&nbsp;<img src="https://steam-fec.s3.amazonaws.com/images/ico_facebook.gif" alt="fb logo" width="17" height="17" style={{ verticalAlign: 'middle' }} />&nbsp;Steam&nbsp;|</Buttons>
          <Buttons href="">&nbsp;&nbsp;<img src="https://steam-fec.s3.amazonaws.com/images/ico_twitter.gif" alt="twitter logo" width="17" height="17" style={{ verticalAlign: 'middle' }} />&nbsp;@steam</Buttons>
          <br />
        </div>

      </Foot>
    </div>
  );
};

export default Footer;