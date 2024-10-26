import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import guyImg from "../assets/images/delivery-guy.png";
import "../styles/hero-section.css";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favorite Pizza
                </h1>

                <button className="order__btn d-flex align-items-center justify-content-between">
                  <Link to="/pizzas">
                    Menu <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
        
        <Container className="quote-container mt-4">
          <Row>
            <Col md={3}>
              <img src="https://cdn-icons-gif.flaticon.com/6569/6569129.gif" alt="Logo 1" className="logo" />
              <p className="quote">Regular payout with exciting bonuses & incentives</p>
            </Col>
            <Col md={3}>
              <img src="https://driver-media-assets.swiggy.com/drivers/w_300,h_300,q_auto,f_auto,fl_lossy,c_fill/ride-with-us/icons/shift.png" alt="Logo 2" className="logo" />
              <p className="quote">Satisfy your cravings with us</p>
            </Col>
            <Col md={3}>
              <img src="https://driver-media-assets.swiggy.com/drivers/w_300,h_300,q_auto,f_auto,fl_lossy,c_fill/ride-with-us/icons/insurance.png" alt="Logo 3" className="logo" />
              <p className="quote">Food that brings people together</p>
            </Col>
            <Col md={3}>
              <img src="https://driver-media-assets.swiggy.com/drivers/w_300,h_300,q_auto,f_auto,fl_lossy,c_fill/ride-with-us/icons/maternity.png" alt="Logo 4" className="logo" />
              <p className="quote">Maternity and period leave for women partners</p>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
