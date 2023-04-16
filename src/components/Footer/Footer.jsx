import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>contact@hpm.com.np</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/pushparaj1381/" target="_blank">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100029064882284" target="_blank">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Pushparaj1381" target="_blank">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/pushparaj-mehta-82a801206/?originalSubdomain=in" target="_blank">
            <Linkedin color="white" size={"3rem"} />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
