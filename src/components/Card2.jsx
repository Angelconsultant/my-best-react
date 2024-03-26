import React from 'react'
import Airfright from '../assets/AirFright.png'
import Seafright from '../assets/SeaFright.png'
import Landfright from '../assets/LandFright.png'
import Door from '../assets/Door.png'
import Goods from '../assets/Goods.png'
import Warehousing from '../assets/Warehousing.png'



function card2() {
    const cardData = [
        { Image: Airfright, title: 'Airfright', content: 'As a leader in global Air freight fowareding, OIA Global excels in providing tailored transportation...' },

        { Image: Seafright, title: 'Seafright', content: 'Sea fright plays perhaps the most vital role in most transportation and supply chain a solution...' },

        { Image: Landfright, title: 'Landfright', content: 'Cargo are transported at some stage of thire journey along the world,s roads where we give...' },

        { Image: Door, title: 'Door to Door Delivery', content: 'Our expertise in transport management and planning allows us to design a solution ...' },

        { Image: Goods, title: 'Packaging & Storage', content: 'Sea fright plays perhaps the most vital role in most transportation and supply chain a solution...' },

        { Image: Warehousing, title: 'Warehousing', content: 'Package and store your things effectively and securely to make sure them in storage...' }


    ]
    return (
        <>
            <div className="row">
                {cardData.map((card, index) => (
                    <div className="col-md-4 mb-5">
                        <div className="card">
                            <img src={card.Image} className="card-img-top" alt="..." />
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

export default card2