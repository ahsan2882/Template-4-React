import React from 'react'
import logo from '../images/thefnflogo.png';
export default function HeroSection() {
    return (
        <div id="main-navigation">
        <div id="nav-wrapper" className="bg-primary-overlay">
          <div id="main-nav" className="container1 flex justify-between items-center py-6">
            <img src={logo} id="nav-logo" alt="logo" className="w-52"/>
            <nav>
              <ul className="nav-bar flex justify-between items-center p-0 text-white list-none font-black">
                <li className="nav-bar-link hover:text-black">
                  <a href="index.html" className="text-white no-underline">HOME</a>
                </li>
                <li className="nav-bar-link hover:text-black"><a href="about.html" className="text-white no-underline">ABOUT US</a></li>
                <li className="nav-bar-link dropdown-service-list-item hover:text-black">
                  <section className="dropdown-service cursor-pointer my-4">SERVICES</section>
                  <ul className="dropdown-services-content hidden list-none p-0 absolute z-500">
                    <li className="services-links flex mt-8 mx-4">
                      <h4 className="navigation-link-content">STATIC SECURITY</h4>
                    </li>
                    <li className="services-links flex mt-8 mx-4">
                      <h4 className="navigation-link-content">MOBILE PATROLLING</h4>
                    </li>
                    <li className="services-links flex mt-8 mx-4">
                      <h4 className="navigation-link-content">CCTV MONITORING</h4>
                    </li>
                    <li className="services-links flex mt-8 mx-4">
                      <h4 className="navigation-link-content">LOCK & UNLOCK</h4>
                    </li>
                    <li className="services-links flex mt-8 mx-4">
                      <h4 className="navigation-link-content">
                        VACANT UNIT CHECKS
                      </h4>
                    </li>
                    <li className="services-links flex mt-8 mx-4">
                      <h4 className="navigation-link-content">
                        TECHNOLOGY PRODUCT
                      </h4>
                    </li>
                    <li className="services-links flex mt-8 mx-4">
                      <h4 className="navigation-link-content">MANNED GUARDING</h4>
                    </li>
                    <li className="services-links flex mt-8 mx-4">
                      <h4 className="navigation-link-content">
                        SUPPORT & MANAGEMENT
                      </h4>
                    </li>
                    <li className="services-links last-service-link flex my-8 mx-4">
                      <h4 className="navigation-link-content">EVENT SECURITY</h4>
                    </li>
                  </ul>
                </li>
                <li className="nav-bar-link dropdown-sectors-list-item hover:text-black">
                  <section className="dropdown-sectors cursor-pointer my-4">SECTORS</section>
                  <ul className="dropdown-sectors-content hidden list-none p-0 absolute z-500">
                    <li className="sectors-link flex mt-8 mx-4">
                      <h4 className="navigation-link-content">CONSTRUCTION</h4>
                    </li>
                    <li className="sectors-link flex mt-8 mx-4">
                      <h4 className="navigation-link-content">CORPORATE</h4>
                    </li>
                    <li className="sectors-link flex mt-8 mx-4">
                      <h4 className="navigation-link-content">INDUSTRIAL</h4>
                    </li>
                    <li className="sectors-link flex mt-8 mx-4">
                      <h4 className="navigation-link-content">RETAIL</h4>
                    </li>
                    <li className="sectors-link flex mt-8 mx-4">
                      <h4 className="navigation-link-content">LOGISTICS</h4>
                    </li>
                    <li className="sectors-link last-sector-link flex my-8 mx-4">
                      <h4 className="navigation-link-content">
                        PROPERTY MANAGEMENT
                      </h4>
                    </li>
                  </ul>
                </li>
                <li className="nav-bar-link hover:text-black">
                  <a href="contact-us.html" className="text-white no-underline">CONTACT US</a>
                </li>
              </ul>
              <section className="hamburger hidden">
                <span className="bar block w-6 h-1 my-1 mx-auto bg-white"></span>
                <span className="bar block w-6 h-1 my-1 mx-auto bg-white"></span>
                <span className="bar block w-6 h-1 my-1 mx-auto bg-white"></span>
              </section>
            </nav>
          </div>
        </div>
        <section className="section-hero flex justify-center items-end bg-left text-center bg-cover w-full h-full">
          <div className="sec-hero-head">
            <div className="col-2">
              <h1 className="heading-hero clr-primary text-8xl">Security Services</h1>
              <p className="paragraph-hero text-white text-4xl font-medium">For your personal safety</p>
              <div className="sec-hero-btn flex justify-center items-center py-8 w-full mb-40">
                <button className="sec-btn text-white border text-2xl py-3 px-10 bg-primary border-primary hover:bg-black hover:border-white">Contact us</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
