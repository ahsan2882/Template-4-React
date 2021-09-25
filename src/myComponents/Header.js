import React from 'react'

export default function Header() {
    return (
        <header className="header">
            <section className="flex justify-between items-center py-2 container1">
                <ul className="list-none flex p-0 justify-between items-center w-35r">
                    <li className="clr-primary flex justify-around items-center">
                        <div className="mr-1">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="mr-1">+10800-33-000</div>
                    </li>
                    <li className="clr-primary flex justify-around items-center">
                        <div className="mr-1">
                            <i className="fab fa-skype"></i>
                        </div>
                        <div className="mr-1">security</div>
                    </li>
                    <li className="clr-primary flex justify-around items-center">
                        <div className="mr-1">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="mr-1">21 Newstreet, New York, 269-24</div>
                    </li>
                </ul>
                <ul className="list-none flex p-0 justify-between items-center w-72">
                    <li className="clr-primary flex justify-around items-center">
                        <div className="ml-3">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <div className="ml-3 w-5 h-5 bg-black font-black flex justify-center items-center border-rad-050">0</div>
                    </li>
                    <li className="clr-primary flex justify-around items-center ml-3 border-b border-solid border-white">
                        <i className="fas fa-search pr-2"></i>
                        <input
                            type="text"
                            name="search-bar"
                            placeholder="Search"
                            className="search-bar-header w-full outline-none border-0 bg-black placeholder-white"
                        />
                    </li>
                </ul>
            </section>
        </header>
    );
}
