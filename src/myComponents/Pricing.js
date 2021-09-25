import React from 'react'

export default function Pricing() {
    return (
        <div className="py-20 px-0">
            <div className="container-main-price">
                <div className="flex flex-col items-center py-10 px-0">
                    <h2 className="clr-secondary text-2xl">Reasonable Pricing Plans</h2>
                    <h1 className="clr-primary text-5xl text-center">Our Pricing</h1>
                </div>

                <div className="flex flex-wrap justify-center px-0 container1">
                    <div className="bg-white w-30c border-rad20 border-2 border-solid border-black flex flex-col items-center p-5 m-2">
                        <h1 className="clr-primary text-2xl text-center">Personal security</h1>
                        <h2 className="flex justify-center items-center text-5xl text-black text-center">
                            <span>Start</span>
                        </h2>
                        <ul className="p-5 list-none">
                            <li className="p-1"><i className="fas fa-check"></i> CCTV service</li>
                            <li className="p-1">
                                <i className="fas fa-times"></i> Alarm signaling
                            </li>
                            <li className="p-1">
                                <i className="fas fa-check"></i> Access control
                            </li>
                            <li className="p-1">
                                <i className="fas fa-times"></i> Alarm signaling
                            </li>
                        </ul>
                        <div className="p-5">
                            <button className="bg-primary text-base border-rad30 border-2 border-solid border-primary py-2 px-9 hover:bg-black hover:text-white">Get Quote</button>
                        </div>
                    </div>
                    <div className="bg-white w-30c border-rad20 border-2 border-solid border-black flex flex-col items-center p-5 m-2">
                        <h1 className="clr-primary text-2xl text-center">Home Security</h1>
                        <h2 className="flex justify-center items-center text-5xl text-black text-center">
                            <span>Medium</span>
                        </h2>
                        <ul className="p-5 list-none">
                            <li className="p-1"><i className="fas fa-check"></i> CCTV service</li>
                            <li className="p-1"><i className="fas fa-times"></i> Alarm signaling</li>
                            <li className="p-1"><i className="fas fa-check"></i> Access control</li>
                            <li className="p-1"><i className="fas fa-times"></i> Alarm signaling</li>
                        </ul>
                        <div className="p-5">
                            <button className="bg-primary text-base border-rad30 border-2 border-solid border-primary py-2 px-9 hover:bg-black hover:text-white">Get Quote</button>
                        </div>
                    </div>
                    <div className="border-2 border-solid border-black bg-black w-30c border-rad20 flex flex-col items-center p-5 m-2">
                        <h1 className="clr-primary text-2xl text-center">Full Services</h1>
                        <h2 className="flex justify-center items-center text-5xl text-white text-center">
                            <span>Pro</span>
                        </h2>
                        <ul className="p-5 list-none">
                            <li className="text-white p-1"><i className="fas fa-check"></i> CCTV service</li>
                            <li className="text-white p-1"><i className="fas fa-times"></i> Alarm signaling</li>
                            <li className="text-white p-1"><i className="fas fa-check"></i> Access control</li>
                            <li className="text-white p-1"><i className="fas fa-times"></i> Alarm signaling</li>
                        </ul>
                        <div className="p-5">
                            <button className="bg-primary text-base border-rad30 border-2 border-solid border-primary py-2 px-9 hover:bg-white hover:text-black">Get Quote</button>
                        </div>
                    </div>
                    <div className="bg-white w-30c border-rad20 border-2 border-solid border-black flex flex-col items-center p-5 m-2">
                        <h1 className="clr-primary text-2xl text-center">Home Security</h1>
                        <h2 className="flex justify-center items-center text-5xl text-black text-center">
                            <span>All in one</span>
                        </h2>
                        <ul className="p-5 list-none">
                            <li className="p-1"><i className="fas fa-check"></i> CCTV service</li>
                            <li className="p-1"><i className="fas fa-times"></i> Alarm signaling</li>
                            <li className="p-1"><i className="fas fa-check"></i> Access control</li>
                            <li className="p-1"><i className="fas fa-times"></i> Alarm signaling</li>
                        </ul>
                        <div className="p-5">
                            <button className="bg-primary text-base border-rad30 border-2 border-solid border-primary py-2 px-9 hover:bg-black hover:text-white">Get Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
