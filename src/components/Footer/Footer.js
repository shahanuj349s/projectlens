import React from "react";
import "./Footer.css";

function Footer() {
  return (
    // <div>rfce</div>
    <div class="footer">
      <div class="sb__footer section__padding">
        <div class="sb__footer-links">
          <div class="sb__footer-links-div">
            <h4 className="footer-head">Frequently Asked</h4>
            <a href="/info_1">
              <p>Why good vision is so important</p>
            </a>
            <a href="/info_2">
              <p>Progressive eyeglass lenses</p>
            </a>
            <a href="/info_3">
              <p>Distance eyeglass</p>
            </a>
            <a href="/info_4">
              <p>Reading eyeglass</p>
            </a>
            <a href="/info_5">
              <p>Cleaning solution and Lens wipes</p>
            </a>
          </div>
          <div class="sb__footer-links-div">
            <h4 className="footer-head">Social Media</h4>
            <a href="/info_6">
              <p>Instagram</p>
            </a>
            <a href="/info_7">
              <p>Facebook</p>
            </a>
          </div>
          <div class="sb__footer-links-div">
            <h4 className="footer-head">Have a Question</h4>
            <a href="/info_8">
              <p>Contact Us</p>
            </a>
          </div>
        </div>

        <hr></hr>

        <div class="sb__footer-below">
          <div class="sb__footer-copyright">
            <p>@{new Date().getFullYear()} Azonic. All right reserved.</p>
          </div>
          <div class="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/policy">
              <div>
                <p>Privacy Policy</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
