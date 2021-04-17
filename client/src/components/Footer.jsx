import React from 'react';
import '../styling/footer.css'

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#171a21' }}>
      <div id="foot">
        <br />
        <div className="line"></div>
        <div style={{ fontSize: '14px', marginLeft: '175px' }}>
          <a className="footSelection" href="#">&nbsp;&nbsp;&nbsp;ABOUT STEAM&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a className="footSelection" href="#">&nbsp;&nbsp;&nbsp;ABOUT VALVE&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a className="footSelection" href="#">&nbsp;&nbsp;&nbsp;HELP&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a className="footSelection" href="#">&nbsp;&nbsp;&nbsp;NEWS FEEDS&nbsp;&nbsp;&nbsp;</a>
          <br />
        </div>
        <div className="line"></div>
        <div id="footNav">
          <div style={{ marginTop: '-25px' }}>
            <span >
              <span className="buttons" href="#">
                <img src="https://steam-fec.s3.amazonaws.com/images/footerLogo_valve_new.png" alt="steam logo" width="90" height="25" />
              </span>
            </span>
          </div>
          <div style={{ marginTop: '-30px', marginBottom: '-5px' }}>
            <div style={{ fontSize: '11px' }}>
              <span style={{ paddingLeft: '100px' }}>© 2021 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the 2 US and other countries</span>
              <div style={{ paddingLeft: '100px' }}>VAT included in all prices where applicable.
              <span>
                  <span className="buttons" href="#">&nbsp;&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                  <span className="buttons" href="#">Legal&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                  <span className="buttons" href="#">Steam Subscriber Agreement&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                  <span className="buttons" href="#">Refunds</span>
                </span>
              </div>

            </div>
          </div>
          <div id="steamLogo" >
            <div href="#" >
              <img src="https://steam-fec.s3.amazonaws.com/images/logo_steam_footer.png" alt="steam logo" width="90" height="30" />
            </div>
          </div>
        </div>


        <div className="line"></div>
        <div style={{ fontSize: '14px', marginLeft: '175px' }}>
          <span className="buttons" href="">About Valve&nbsp;&nbsp;|</span>
          <span className="buttons" href="">&nbsp;&nbsp;Steamworks&nbsp;|</span>
          <span className="buttons" href="">&nbsp;&nbsp;Jobs&nbsp;|</span>
          <span className="buttons" href="">&nbsp;&nbsp;Steam Distribution&nbsp;|</span>
          <span className="buttons" href="">&nbsp;&nbsp;Gift Cards&nbsp;|</span>
          <span className="buttons" href="">&nbsp;&nbsp;Gift Cards&nbsp;|</span>
          <span className="buttons" href="">&nbsp;&nbsp;<img src="https://steam-fec.s3.amazonaws.com/images/ico_facebook.gif" alt="fb logo" width="17" height="17" style={{ verticalAlign: 'middle' }} />&nbsp;Steam&nbsp;|</span>
          <span className="buttons" href="">&nbsp;&nbsp;<img src="https://steam-fec.s3.amazonaws.com/images/ico_twitter.gif" alt="twitter logo" width="17" height="17" style={{ verticalAlign: 'middle' }} />&nbsp;@steam</span>
          <br />
        </div>

      </div >
    </div>
  );
};

export default Footer;