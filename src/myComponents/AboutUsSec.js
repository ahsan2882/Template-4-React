import React from 'react'
import aboutimg from '../images/news3.jpg'

export default function AboutUsSec() {
    return (
        <div className="py-28 px-12 flex items-center justify-center bg-black">
        <div className="flex flex-col max-w-lg">
          <img className="about-img" src={aboutimg} alt="about-img"/>
        </div>
        <div className="flex flex-col max-w-lg">
          <section>
            <article>
              <h1 className="clr-primary w-full">About us</h1>
              <h3 className="text-white text-3xl w-full mb-6">CCTV for your Safety</h3>
              <p className="text-white text-xl py-3">
                Nunc pretium nibh non aliquam scelerisque. Integer porttitor
                dolor sit amet leo malesuada scelerisque. Sed sed tortor
                lobortis, dictum lacus sed, mollis enim. Aenean ullamcorper
                accumsan sem sit amet aliquam. Cras euismod mauris felis, eget
                bibendum nibh facilisis ac.
              </p>
              <div className="py-5">
                <button className="text-white bg-primary border-solid border border-primary py-3 px-7 border-rad20 hover:text-black hover:bg-white">
                  Read More
                  <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </button>
              </div>
            </article>
          </section>
        </div>
      </div>
    )
}
