import React from 'react'

export default function Header() {
    return (
        <header className="bg-black py-2">
        <section className="header-section container1 flex justify-between items-center py-2">
          <ul id="header-contact" className="list-none flex p-0 justify-between items-center">
            <li className="contact-links clr-primary flex justify-around items-center">
              <div className="mr-1">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="mr-1">+10800-33-000</div>
            </li>
            <li className="contact-links clr-primary flex justify-around items-center">
              <div className="mr-1">
                <i className="fab fa-skype"></i>
              </div>
              <div className="mr-1">security</div>
            </li>
            <li className="contact-links clr-primary flex justify-around items-center">
              <div className="mr-1">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="mr-1">21 Newstreet, New York, 269-24</div>
            </li>
          </ul>
          <ul id="header-login" className="list-none flex p-0 justify-between items-center">
            <li className="login-links clr-primary flex justify-around items-center">
              <div className="ml-2.5">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div id="cart-items" className="ml-2.5">0</div>
            </li>
            <li className="login-links clr-primary flex justify-around items-center border-white border-b" id="search-bar-wrap">
              <i className="fas fa-search w-full outline-none border-0 bg-black"></i>
              <input
                type="text"
                name="search-bar"
                placeholder="Search"
                className="search-bar-header placeholder-white"
              />
            </li>
          </ul>
        </section>
      </header>
    );
}
