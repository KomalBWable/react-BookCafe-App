import React from "react";
import web from "../src/Images/book.png";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2>
                    Improve Your Knowledge With
                    <strong className="brand-name"> BOOKCAFE</strong>
                  </h2>
                  <h6 className="my-3">
                    The vision of the BookCafe Library is to create
                    opportunities for life-long learning,discovery and
                    engagement
                  </h6>
                  <div className="mt-3">
                    <NavLink to="/bookTransactions" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
