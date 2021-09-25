import React from 'react'
import aboutimg from '../images/news3.jpg'

export default function AboutUs() {
    return (
        <div className="container-2">
            <div className="box1">
                <img className="about-img" src={aboutimg} alt="about"/>
            </div>
            <div className="box1">
                <section>
                    <article>
                        <h1 className="clr-primary w-full">About us</h1>
                        <h3 className="text-white text-3xl w-full mb-6">CCTV for your Safety</h3>
                        <p className="text-white text-xl py-3 px-0">
                            Nunc pretium nibh non aliquam scelerisque. Integer porttitor
                            dolor sit amet leo malesuada scelerisque. Sed sed tortor
                            lobortis, dictum lacus sed, mollis enim. Aenean ullamcorper
                            accumsan sem sit amet aliquam. Cras euismod mauris felis, eget
                            bibendum nibh facilisis ac.
                        </p>
                        <div className="py-5">
                            <button className="text-white bg-primary border-rad20 border border-solid border-primary py-2 px-8 hover:text-black hover:bg-white">
                                Read More
                                <i className="fas fa-arrow-right" aria-hidden="true"></i>
                            </button>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    );
}
