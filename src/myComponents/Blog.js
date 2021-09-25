import React from 'react'
import news1 from '../images/news1.jpg'
import news2 from '../images/news2.jpg'
import news3 from '../images/news3.jpg'

export default function Blog() {
    return (
        <section className="bg-black py-28 px-0">
            <div className="text-center">
                <h3 className="clr-primary">WHATS NEW</h3>
                <h1 className="text-white font-black mb-12 text-5xl">Latest News</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-wrap justify-around w-080">
                    <div className="bg-transparent w-40c border-rad20 flex flex-col items-center">
                        <img className="cont-img" src={news1} alt="news 1"/>
                        <h1 className="clr-primary text-2xl p-3 mb-8 hover:text-white">Personal Security Services</h1>
                        <p className="text-white text-center">
                            vamus tristique ligula quis orci malesuada tincidunt. Praesent
                            magna purus, pharetra eu eleifend non, euismod vitae leo.
                            Interdum et malesuada fames ac ante ipsum ...
                        </p>
                        <div className="btn-post">
                            <button className="post-btn bg-primary clr-black-overlay border-rad20 py-3 px-6 border-0 w-full hover:bg-white hover:text-black">Read More</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center border-rad20 bg-transparent w-40c">
                        <img className="cont-img" src={news2} alt="news 2"/>
                        <h1 className="clr-primary text-2xl p-3 mb-8 hover:text-white">Personal Security Services</h1>
                        <p className="text-white text-center">
                            vamus tristique ligula quis orci malesuada tincidunt. Praesent
                            magna purus, pharetra eu eleifend non, euismod vitae leo.
                            Interdum et malesuada fames ac ante ipsum ...
                        </p>
                        <div className="btn-post">
                            <button className="post-btn bg-primary clr-black-overlay border-rad20 py-3 px-6 border-0 w-full hover:bg-white hover:text-black">Read More</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center border-rad20 bg-transparent w-40c">
                        <img className="cont-img" src={news3} alt="news 3"/>
                        <h1 className="clr-primary text-2xl p-3 mb-8 hover:text-white">Security For Bussiness</h1>
                        <p className="text-white text-center">
                            vamus tristique ligula quis orci malesuada tincidunt. Praesent
                            magna purus, pharetra eu eleifend non, euismod vitae leo.
                            Interdum et malesuada fames ac ante ipsum ...
                        </p>
                        <div className="btn-post">
                            <button className="post-btn bg-primary clr-black-overlay border-rad20 py-3 px-6 border-0 w-full hover:bg-white hover:text-black">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
