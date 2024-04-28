import React from "react";
import "./Footer.css";
import logo from "../../Assets/Logo2.png";

function Footer() {
  return (
    // <div>rfce</div>
    <div class="footer">
      <div class="sb__footer section__padding">
        <div class="sb__footer-links">
          <div className="d-flex align-items-center sb__footer-links-image">
            <img src={logo} width={150} className="footer-image" />
          </div>
          <div class="sb__footer-links-div">
            <h4 className="footer-head">Social Media</h4>
            <a href="/info_6">
              <p>Instagram</p>
            </a>
          </div>
          <div class="sb__footer-links-div">
            <h4 className="footer-head">Have a Question</h4>
            <a href="/contact-us">
              <p>Contact Us</p>
            </a>
          </div>
        </div>

        <hr></hr>

        <div class="sb__footer-below">
          <div class="sb__footer-copyright">
            <p>@{new Date().getFullYear()} Xelariz. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
