import React from 'react'

export default function Header() {
    return (
        <header className="bg-black py-2">
        <section className="container1 flex justify-between items-center py-2">
          <ul className="header-contact list-none flex p-0 justify-between items-center">
            <li className="clr-primary flex justify-around items-center">
              <div className="mr-2">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="mr-2">+10800-33-000</div>
            </li>
            <li className="clr-primary flex justify-around items-center">
              <div className="mr-2">
                <i className="fab fa-skype"></i>
              </div>
              <div className="mr-2">security</div>
            </li>
            <li className="clr-primary flex justify-around items-center">
              <div className="mr-2">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="mr-2">21 Newstreet, New York, 269-24</div>
            </li>
          </ul>
          <ul className="header-login list-none flex p-0 justify-between items-center">
            <li className="clr-primary flex justify-around items-center">
              <div className="ml-3">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="ml-3 w-5 h-5 rounded-full bg-black font-black flex justify-center items-center">0</div>
            </li>
            <li className="clr-primary flex justify-around items-center border-white border-b ml-3">
              <i className="fas fa-search pr-2"></i>
              <input
                type="text"
                name="search-bar"
                placeholder="Search"
                className="placeholder-white w-full outline-none border-0 bg-black"
              />
            </li>
          </ul>
        </section>
      </header>
    );
}
