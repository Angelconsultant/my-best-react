import React from 'react'
import Airfright from '../assets/AirFright.png'
import Seafright from '../assets/SeaFright.png'
import Landfright from '../assets/LandFright.png'

function card() {
    const cardData = [
        { Image: Airfright, title: 'Airfright', content: 'As a leader in global Air freight fowareding, OIA Global excels in providing tailored transportation..' },

        { Image: Seafright, title: 'Seafright', content: 'Sea fright plays perhaps the most vital role in most transportation and supply chain a solution..' },

        { Image: Landfright, title: 'Landfright', content: 'Cargo are transported at some stage of thire journey along the world,s roads where we give...' }
        
    ]
    return (
        <>
            <div className="row">
                {cardData.map((card, index)=>(
                    <div className="col-md-4 mb-5" data-aos="flip-up">
                    <div className="card">
                        <img src={card.Image}className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">{card.title}</h4>
                            <p className="card-text">{card.content}<a href="" className='text-danger text-decoration-none'>Read more</a></p>

                        </div>
                    </div>
                </div>

                ))}
                

                
            </div>

        </>
    )
}

export default card