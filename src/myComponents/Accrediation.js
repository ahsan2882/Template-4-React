import React from 'react'
import cl1 from '../images/client1.png'
import cl2 from '../images/client2.png'
import cl3 from '../images/client3.png'
import cl4 from '../images/client4.png'

export default function Accrediation() {
    return (
        <section className="py-28 px-0">
            <div className="container-main">
                <div className="flex flex-col items-center py-10 px-0">
                    <h2 className="clr-secondary text-2xl">we are verified</h2>
                    <h1 className="clr-primary text-5xl text-center">Our Accrediation</h1>
                </div>
                <div className="flex flex-wrap justify-center my-0 mx-auto mb-8">
                    <div className="bg-black border-rad30 m-5">
                        <a href="#" className="no-underline text-black">
                            <div className="p-5 flex flex-col items-center">
                                <img src={cl1} alt="client 1" className="w-full"/>
                                <h3 className="accre-h3">Lorem ipsum.</h3>
                            </div>
                        </a>
                    </div>

                    <div className="bg-black border-rad30 m-5">
                        <a href="#" className="no-underline text-black">
                            <div className="p-5 flex flex-col items-center">
                                <img src={cl2} alt="client 2" className="w-full"/>
                                <h3 className="accre-h3">Lorem ipsum.</h3>
                            </div>
                        </a>
                    </div>

                    <div className="bg-black border-rad30 m-5">
                        <a href="#" className="no-underline text-black">
                            <div className="p-5 flex flex-col items-center">
                                <img src={cl3} alt="client 3" className="w-full"/>
                                <h3 className="accre-h3">Lorem ipsum.</h3>
                            </div>
                        </a>
                    </div>

                    <div className="bg-black border-rad30 m-5">
                        <a href="#" className="no-underline text-black">
                            <div className="p-5 flex flex-col items-center">
                                <img src={cl4} alt="client 4" className="w-full"/>
                                <h3 className="accre-h3">Lorem ipsum.</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
