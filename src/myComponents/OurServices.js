import React from 'react'

export default function OurServices() {
    return (
        <div  className="container-4 max-w-full text-center py-28 bg-black min-h-40r">
        <h4 className="text-center clr-primary font-black">WHAT WE DO</h4>
        <h2 className="text-center text-5xl opacity-80 text-white font-light">Our Services</h2>
        <p className="text-center text-white ">
          Vestibulum commodo at dolor eu aliquam. In congue ornare augue eu
          scelerisque. Duis vestibulum, dolor sed facilisis laoreet.
        </p>
        <div  className="service-row">
          <div  className="service-col">
            <img src="images/service_01-778x610.jpg" alt="london" />
            <div  className="layer">
              <h2 id="head" className="text-center text-5xl opacity-80 text-white font-light">Home CCTV camera</h2>
              <div  className="service-btn-read">
                <a id="btn" href="#"> Read more</a>
              </div>
            </div>
          </div>
          <div  className="service-col">
            <img src="images/service_02-778x610.jpg" alt="london" />
            <div  className="layer">
              <h2 id="head" className="text-center text-5xl opacity-80 text-white font-light">Office security system</h2>
              <div  className="service-btn-read">
                <a id="btn" href="#"> Read more</a>
              </div>
            </div>
          </div>
          <div  className="service-col">
            <img src="images/service_03-778x610.jpg" alt="london" />
            <div  className="layer">
              <h2 id="head" className="text-center text-5xl opacity-80 text-white font-light">Car parking surveillance</h2>
              <div  className="service-btn-read">
                <a id="btn" href="#"> Read more</a>
              </div>
            </div>
          </div>
          <div  className="service-col">
            <img src="images/service_04-778x610.jpg" alt="london" />
            <div  className="layer">
              <h2 id="head" className="text-center text-5xl opacity-80 text-white font-light">Resturants surveillance</h2>
              <div  className="service-btn-read">
                <a id="btn" href="#"> Read more</a>
              </div>
            </div>
          </div>
          <div  className="service-col">
            <img src="images/service_05-778x610.jpg" alt="london" />
            <div  className="layer">
              <h2 id="head" className="text-center text-5xl opacity-80 text-white font-light">Indus security</h2>
              <div  className="service-btn-read">
                <a id="btn" href="#"> Read more</a>
              </div>
            </div>
          </div>
          <div  className="service-col">
            <img src="images/service_06-778x610.jpg" alt="london" />
            <div  className="layer">
              <h2 id="head" className="text-center text-5xl opacity-80 text-white font-light">Cargo transportation protection</h2>
              <div  className="service-btn-read">
                <a id="btn" href="#"> Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
