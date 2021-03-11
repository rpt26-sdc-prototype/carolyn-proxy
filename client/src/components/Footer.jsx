import React from 'react';


const Footer = () => {
  return (
    <div>
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
        <div id="footer-nav">
          <div className="logo">
            <span id="valve_holder">
              <a href="#home">
                <img src="https://steam-fec.s3.amazonaws.com/images/footerLogo_valve_new.png" alt="steam logo" width="90" height="25" />
              </a>
            </span>
          </div>
          <div id="foot_container">
            <div id="footer-notes">
              <span className="text">© 2021 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the 2 US and other countries</span>
              <div className="text">VAT included in all prices where applicable.</div>
            </div>
          </div>
          <div id="footer-steam-logo" >
            <a href="">
              <img src="https://steam-fec.s3.amazonaws.com/images/logo_steam_footer.png" alt="steam logo" width="90" height="30" />
            </a>
          </div>
        </div>


        <div className="rule"></div>
        <div id="bottom-links">
          <a href="">About Valve&nbsp;&nbsp;|</a>
          <a href="">&nbsp;&nbsp;Steamworks&nbsp;|</a>
          <a href="">&nbsp;&nbsp;Jobs&nbsp;|</a>
          <a href="">&nbsp;&nbsp;Steam Distribution&nbsp;|</a>
          <a href="">&nbsp;&nbsp;Gift Cards&nbsp;|</a>
          <a href="">&nbsp;&nbsp;Gift Cards&nbsp;|</a>
          <a href="">&nbsp;&nbsp; <img id="fb-logo" src="https://steam-fec.s3.amazonaws.com/images/ico_facebook.gif" alt="fb logo" width="17" height="17" />&nbsp;Steam&nbsp;|</a>
          <a href="">&nbsp;&nbsp;<img id="twitter-logo" src="https://steam-fec.s3.amazonaws.com/images/ico_twitter.gif" alt="twitter logo" width="17" height="17" />&nbsp;@steam</a>
          <br />
        </div>

      </footer>
    </div>
  );
};

export default Footer;