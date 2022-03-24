import React, { Component } from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";

import "./Footer.css";

 class Footer extends Component {
  render() {
    return (
      <div className="footer-parent">
        <div className="support-team-info">
            <div className="support-details">supportIteam@swiggy.com</div>
        </div>
       
        <div className="social-media-links">
          <div className="social-media-link">
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="5"
              borderStyle="solid"
              icon="linkedin"
              iconColor="rgba(255,255,255,1)"
              backgroundColor=" blue"
              iconSize="5"
              roundness="50%"
              url="https://some-website.com/my-social-media-url"
              size="38"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
