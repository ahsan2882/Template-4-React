import React from 'react'
import navlogo from '../images/thefnflogo.png'

export default function HeroSection() {
    return (
        <div>
            <div className="bg-primary-overlay">
                <div className="flex justify-between items-center py-6 container1">
                    <img src={navlogo} alt="nav-logo" className="w-52"/>
                    <nav>
                        <ul className="nav-bar">
                            <li className="nav-bar-link hover:text-black">
                                <a href="index.html" className="no-underline text-white">HOME</a>
                            </li>
                            <li className="nav-bar-link hover:text-black"><a href="about.html" className="no-underline text-white">ABOUT US</a></li>
                            <li className="nav-bar-link hover:text-black dropdown-service-list-item">
                                <section className="cursor-pointer my-4">SERVICES</section>
                                <ul className="dropdown-services-content hidden list-none p-0 absolute z-500">
                                    <li className="services-links flex mt-8 mx-4 mb-0">
                                        <h4 className="navigation-link-content">STATIC SECURITY</h4>
                                    </li>
                                    <li className="services-links flex mt-8 mx-4 mb-0">
                                        <h4 className="navigation-link-content">MOBILE PATROLLING</h4>
                                    </li>
                                    <li className="services-links flex mt-8 mx-4 mb-0">
                                        <h4 className="navigation-link-content">CCTV MONITORING</h4>
                                    </li>
                                    <li className="services-links flex mt-8 mx-4 mb-0">
                                        <h4 className="navigation-link-content">LOCK & UNLOCK</h4>
                                    </li>
                                    <li className="services-links flex mt-8 mx-4 mb-0">
                                        <h4 className="navigation-link-content">
                                            VACANT UNIT CHECKS
                                        </h4>
                                    </li>
                                    <li className="services-links flex mt-8 mx-4 mb-0">
                                        <h4 className="navigation-link-content">
                                            TECHNOLOGY PRODUCT
                                        </h4>
                                    </li>
                                    <li className="services-links flex mt-8 mx-4 mb-0">
                                        <h4 className="navigation-link-content">MANNED GUARDING</h4>
                                    </li>
                                    <li className="services-links flex mt-8 mx-4 mb-0">
                                        <h4 className="navigation-link-content">
                                            SUPPORT & MANAGEMENT
                                        </h4>
                                    </li>
                                    <li className="services-links flex my-8 mx-4">
                                        <h4 className="navigation-link-content">EVENT SECURITY</h4>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-bar-link hover:text-black dropdown-sectors-list-item">
                                <section className="cursor-pointer my-4">SECTORS</section>
                                <ul className="dropdown-sectors-content hidden list-none p-0 absolute z-500">
                                    <li className="sectors-link flex mt-8 mx-4 mb-0">
                                        <h4 className="navigation-link-content">CONSTRUCTION</h4>
                                    </li>
                                    <li className="sectors-link flex mt-8 mx-4 mb-0">
                                        <h4 className="navigation-link-content">CORPORATE</h4>
                                    </li>
                                    <li className="sectors-link flex mt-8 mx-4 mb-0">
                                        <h4 className="navigation-link-content">INDUSTRIAL</h4>
                                    </li>
                                    <li className="sectors-link flex mt-8 mx-4 mb-0">
                                        <h4 className="navigation-link-content">RETAIL</h4>
                                    </li>
                                    <li className="sectors-link flex mt-8 mx-4 mb-0">
                                        <h4 className="navigation-link-content">LOGISTICS</h4>
                                    </li>
                                    <li className="sectors-link flex my-8 mx-4">
                                        <h4 className="navigation-link-content">
                                            PROPERTY MANAGEMENT
                                        </h4>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-bar-link hover:text-black">
                                <a href="contact-us.html" className="no-underline text-white">CONTACT US</a>
                            </li>
                        </ul>
                        <section className="hamburger">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </section>
                    </nav>
                </div>
            </div>
            <section className="section-hero">
                <div>
                    <h1 className="clr-primary sec-hero-h1">Security Services</h1>
                    <p className="paragraph-hero">For your personal safety</p>
                    <div className="sec-hero-btn">
                        <button className="sec-btn">Contact us</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
