import React from 'react'
import rsswifi from '../images/rsswifi.png'

export default function Subscribe() {
    return (
        <div className="container1 subscribe-section">
            <div className="subscribe-wrapper">
                <img src={rsswifi} alt="subscribe logo"/>
                <div className="right-container">
                    <div className="offer">
                        <h3 className="offer-h3">Want to know about our offers frst?</h3>
                        <h1 className="offer-h1">Subscribe our newsletter</h1>
                    </div>
                    <div className="input-email">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email-address"
                            className="email-field"
                        />
                        <a href="#" className="subscribe-btn">SUBSCRIBE</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
