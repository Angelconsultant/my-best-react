import React from 'react'
import Driver from '../assets/Driver.png'
import Card from './Card'
import Form from './Form'
import request1 from '../assets/request1.png'
import request2 from '../assets/request2.png'
import request3 from '../assets/request3.png'
function Homepage() {
    return (
        <>
            <div className='hero'>
                <div className="container text-light text-center pt-5">
                    <h1 className='pt-5'>Easy & Quick Cargo Shipping Services
                    </h1>
                    <p style={{ fontSize: '24px' }}>Book low cost sea freight shipping services. Get an instant quote.</p>
                    <a href="" className="btn btn-danger text-light">Track Goods Here</a>
                </div>
            </div>
            <div className="container pt-5">
                <div className="text-center" data-aos="flip-up">
                    <h2>Welcome to Crystal  Shipment</h2>
                    <div className="bg-red mx-auto"></div>
                    <p className='pt-3'>Crystal Shipment is more than logistics. We can also optimize your packaging, manage your materials sourcing, and so much more.</p>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <img src={Driver} className='img-fluid rounded' alt="" />
                    </div>

                    <div className="col-md-6" data-aos="flip-up">
                        <p className='text-danger'>TRANSPORTATION COMPANY</p>
                        <h2>
                            We Provide Full Range Logistics Solution
                        </h2>
                        We strongly believe that pursuing all of these goals is in our interest and in the interest of all of our stakeholders are us customers, employees, investors and the planet as a whole. We add value to cargo people’s interaction with us, with excellent services or products. Engaging our employees and nurture investment on the stock holds market we show concern , by engaging our employees and nurture investment on the stock holds market we show concern.<br></br>

                        <a href="" className="btn btn-danger">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="container pt-5 ">
                <div className="text-center" data-aos="flip-up">
                    <p className="text-danger">TYPE OF LOGISTIC</p>
                    <h2>Covering All Logistics Fields</h2>
                </div>

                <Card />

                <div className="text-center" data-aos="flip-up">
                    <a href="" className=" btn btn-danger">Load More</a>
                </div>

            </div>
            <div className="bg-warning mt-5" style={{ minHeight: '200px', padding: '20px 0' }}>
                <div className="container pt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <h2>Delivering your world one package at a time</h2>
                            <p>Crystal Shipment is more than  just logistics.</p>

                        </div>
                        <div className="col-md-4 text-md-end text-sm-start">
                            <a href="" className="btn btn-danger">Request a Quote</a>


                        </div>
                    </div>

                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6" data-aos="flip-up">
                        <h2>WHY CHOOSE US ?</h2>
                        <div className="d-flex mt-3">
                            <div className="flex-grow-1 me-2">
                                <img src={request1} alt="" />
                            </div>
                            <div className='flex-grow-1 ms-2'>
                                <h4>Global supply Chain Solutions</h4>
                                <p>Efficiently unleash cross-media information without cross-media value.</p>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="flex-grow-1 me-2">
                                <img src={request2} alt="" />
                            </div>
                            <div className='flex-grow-1 ms-2'>
                                <h4>Mobil shippment tracking</h4>
                                <p>We offer intelligentconcepts fpr road and tail and well as complex special transport services</p>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="flex-grow-1 me-2">
                                <img src={request3} alt="" />
                            </div>
                            <div className='flex-grow-1 ms-2'>
                                <h4>Careful Handling of Vauable Goods</h4>
                                <p>Efficiently unleash cross-media information without cross-media value</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="flip-up">
                        <h2>REQUEST A QUOTE</h2>
                        <Form />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Homepage