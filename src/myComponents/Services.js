import React from 'react'
import serv1 from '../images/service_01-778x610.jpg'
import serv2 from '../images/service_02-778x610.jpg'
import serv3 from '../images/service_03-778x610.jpg'
import serv4 from '../images/service_04-778x610.jpg'
import serv5 from '../images/service_05-778x610.jpg'
import serv6 from '../images/service_06-778x610.jpg'


export default function Services() {
    return (
        <div className="max-w-100v min-h-40r text-center py-28 px-0 bg-black">
            <h4 className="text-center clr-primary font-black">WHAT WE DO</h4>
            <h2 className="text-center text-5xl opacity-80 text-white font-black">Our Services</h2>
            <p className="text-center text-white my-12 mx-auto leading-6 font-light max-w-25r">
                Vestibulum commodo at dolor eu aliquam. In congue ornare augue eu
                scelerisque. Duis vestibulum, dolor sed facilisis laoreet.
            </p>
            <div className="flex flex-wrap my-0 mx-auto justify-center w-080">
                <div className="mx-2 mb-8 mt-0 relative overflow-hidden border-rad10">
                    <img src={serv1} alt="london" className="w-96 h-64 block service-images"/>
                    <div className="layer">
                        <h2 className="opacity-100 text-left leading-4 font-extrabold mt-8 ml-3 text-3xl text-white service-layer-h2" id="head">Home CCTV camera</h2>
                        <div className="mb-24 ml-3 text-left">
                            <a id="btn" href="#" className="services-more-link py-2 px-8 bg-primary no-underline text-black text-sm rounded-3xl"> Read more</a>
                        </div>
                    </div>
                </div>
                <div className="mx-2 mb-8 mt-0 relative overflow-hidden border-rad10">
                    <img src={serv2} alt="london" className="w-96 h-64 block service-images"/>
                    <div className="layer">
                        <h2 className="opacity-100 text-left leading-4 font-extrabold mt-8 ml-3 text-3xl text-white service-layer-h2" id="head">Office security system</h2>
                        <div className="mb-24 ml-3 text-left">
                            <a id="btn" href="#" className="services-more-link py-2 px-8 bg-primary no-underline text-black text-sm rounded-3xl"> Read more</a>
                        </div>
                    </div>
                </div>
                <div className="mx-2 mb-8 mt-0 relative overflow-hidden border-rad10">
                    <img src={serv3} alt="london" className="w-96 h-64 block service-images"/>
                    <div className="layer">
                        <h2 className="opacity-100 text-left leading-4 font-extrabold mt-8 ml-3 text-3xl text-white service-layer-h2" id="head">Car parking surveillance</h2>
                        <div className="mb-24 ml-3 text-left">
                            <a id="btn" href="#" className="services-more-link py-2 px-8 bg-primary no-underline text-black text-sm rounded-3xl"> Read more</a>
                        </div>
                    </div>
                </div>
                <div className="mx-2 mb-8 mt-0 relative overflow-hidden border-rad10">
                    <img src={serv4} alt="london" className="w-96 h-64 block service-images"/>
                    <div className="layer">
                        <h2 className="opacity-100 text-left leading-4 font-extrabold mt-8 ml-3 text-3xl text-white service-layer-h2" id="head">Resturants surveillance</h2>
                        <div className="mb-24 ml-3 text-left">
                            <a id="btn" href="#" className="services-more-link py-2 px-8 bg-primary no-underline text-black text-sm rounded-3xl"> Read more</a>
                        </div>
                    </div>
                </div>
                <div className="mx-2 mb-8 mt-0 relative overflow-hidden border-rad10">
                    <img src={serv5} alt="london" className="w-96 h-64 block service-images"/>
                    <div className="layer">
                        <h2 className="opacity-100 text-left leading-4 font-extrabold mt-8 ml-3 text-3xl text-white service-layer-h2" id="head">Indus security</h2>
                        <div className="mb-24 ml-3 text-left">
                            <a id="btn" href="#" className="services-more-link py-2 px-8 bg-primary no-underline text-black text-sm rounded-3xl"> Read more</a>
                        </div>
                    </div>
                </div>
                <div className="mx-2 mb-8 mt-0 relative overflow-hidden border-rad10">
                    <img src={serv6} alt="london" className="w-96 h-64 block service-images"/>
                    <div className="layer">
                        <h2 className="opacity-100 text-left leading-4 font-extrabold mt-8 ml-3 text-3xl text-white service-layer-h2" id="head">Cargo transportation protection</h2>
                        <div className="mb-24 ml-3 text-left">
                            <a id="btn" href="#" className="services-more-link py-2 px-8 bg-primary no-underline text-black text-sm rounded-3xl"> Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
