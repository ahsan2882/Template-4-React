import React from 'react'
import guard1 from '../images/guard1.jpg'
import guard2 from '../images/guard2.jpg'
import guard3 from '../images/guard3.jpg'
import guard4 from '../images/guard4.jpg'

export default function OurGuards() {
    return (
        <section className="bg-white">
            <div className="container1 team-section">
                <h1 className="text-5xl m-0 clr-primary">Our Guards</h1>
                <p className="text-xl text-center mb-12 text-black">
                    Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
                    euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
                    ligula.
                </p>
                <div className="container1 guards-list">
                    <div className="guards">
                        <img src={guard1} className="guard-image" alt="guard 1"/>
                        <h2 className="m-0 mt-8 clr-primary">John Richards</h2>
                        <h4 className="m-0 mt-8 text-black">Lorem ipsum</h4>
                        <div className="guard-social">
                            <i className="fab fa-twitter"></i
                            ><i className="fab fa-facebook-square"></i
                            ><i className="fab fa-google-plus-g"></i
                            ><i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className="guards">
                        <img src={guard2} className="guard-image" alt="guard 2"/>
                        <h2 className="m-0 mt-8 clr-primary">Kelley Miles</h2>
                        <h4 className="m-0 mt-8 text-black">Lorem ipsum</h4>
                        <div className="guard-social">
                            <i className="fab fa-twitter"></i
                            ><i className="fab fa-facebook-square"></i
                            ><i className="fab fa-google-plus-g"></i
                            ><i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className="guards">
                        <img src={guard3} className="guard-image" alt="guard 3"/>
                        <h2 className="m-0 mt-8 clr-primary">Sherman Warner</h2>
                        <h4 className="m-0 mt-8 text-black">Lorem ipsum</h4>
                        <div className="guard-social">
                            <i className="fab fa-twitter"></i
                            ><i className="fab fa-facebook-square"></i
                            ><i className="fab fa-google-plus-g"></i
                            ><i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className="guards">
                        <img src={guard4} className="guard-image" alt="guard 4"/>
                        <h2 className="m-0 mt-8 clr-primary">Denis Green</h2>
                        <h4 className="m-0 mt-8 text-black">Lorem ipsum</h4>
                        <div className="guard-social">
                            <i className="fab fa-twitter"></i
                            ><i className="fab fa-facebook-square"></i
                            ><i className="fab fa-google-plus-g"></i
                            ><i className="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <a href="#" className="flex no-underline py-3 px-6 text-black border-rad1-5r">
                    <div>View all&emsp;</div>
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </section>
    );
}
