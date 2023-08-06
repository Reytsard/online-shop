import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="mt-5 py-4 ">
      <div className="follow-us">Follow us</div>
      <div className="follow-us-icons d-flex">
        <div className="icon rounded-circle">
          <FontAwesomeIcon
            size="lg"
            icon={faLinkedin}
            style={{ color: "#ffffff" }}
          />
        </div>
        <div className="icon rounded-circle instagram">
          <FontAwesomeIcon
            size="lg"
            icon={faInstagram}
            style={{ color: "#ffffff" }}
          />
        </div>
        <div className="icon rounded-circle facebook">
          <FontAwesomeIcon
            icon={faFacebook}
            size="lg"
            style={{ color: "#ffffff" }}
          />
        </div>
        <div className="icon rounded-circle twitter">
          <FontAwesomeIcon
            size="lg"
            icon={faTwitter}
            style={{ color: "#ffffff" }}
          />
        </div>
        <div className="icon rounded-circle whats-up">
          <FontAwesomeIcon
            size="lg"
            icon={faWhatsapp}
            style={{ color: "#ffffff" }}
          />
        </div>
        <div className="icon tiktok rounded-circle">
          <FontAwesomeIcon
            size="lg"
            icon={faTiktok}
            style={{ color: "#ffffff" }}
          />
        </div>
        <div className="icon youtube rounded-circle">
          <FontAwesomeIcon
            size="lg"
            icon={faYoutube}
            style={{ color: "#ffffff" }}
          />
        </div>
      </div>
      <div className="footer-options d-flex gap-2">
        <div className="privacy">Privacy</div>
        <div className="space">·</div>
        <div className="terms">Terms of Use</div>
      </div>
    </footer>
  );
}

export default Footer;
