import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo and About Section */}
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>MyPizza</h5>
        <p>Best Pizzas in town, try it out!</p>
      </div>

      {/* Delivery Time Section */}
      <div className="footer__section">
        <h5 className="footer__title">Delivery Time</h5>
        <ListGroup>
          <ListGroupItem className="delivery__time-item border-0">
            <span>Friday - Tuesday</span>
            <p>10:00am - 11:00pm</p>
          </ListGroupItem>
          <ListGroupItem className="delivery__time-item border-0">
            <span>Wednesday - Thursday</span>
            <p>Off day</p>
          </ListGroupItem>
        </ListGroup>
      </div>

      {/* Contact Information */}
      <div className="footer__section">
        <h5 className="footer__title">Contact Us</h5>
        <p className="footer__contact">
          Phone: +1 234 567 890 <br />
          Email: <a href="mailto:info@mypizza.com">info@mypizza.com</a>
        </p>
      </div>

      {/* Copyright Section */}
      <div className="footer__bottom">
        <p>© 2024 MyPizza. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
