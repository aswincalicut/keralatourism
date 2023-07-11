import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Tpackage.css';
import { FaGreaterThan } from 'react-icons/fa'

function Tpackages() {
    const entirekerala = [
        {image:"https://www.keralatourism.org/images/homecontentimage/entire-kerala.jpg"},
        {image:"https://www.keralatourism.org/images/homecontentimage/central-kerala.jpg"},
        {image:"https://www.keralatourism.org/images/homecontentimage/backwater.jpg"},
        {image:"https://www.keralatourism.org/images/homecontentimage/south-kerala.jpg"},
        {image:"https://www.keralatourism.org/images/homecontentimage/hill-station.jpg"},
        {image:"https://www.keralatourism.org/images/homecontentimage/honeymoon.jpg"}
    ]

    const WhereToStay = [
        {image:"https://www.keralatourism.org/images/kt/tr-icon-hotel.png",text:"Where to Stay"},
        {image:"https://www.keralatourism.org/images/kt/tr-icon-brochure.png",text:"E Brouchers"},
        {image:"https://www.keralatourism.org/images/kt/tr-icon-visa.png",text:"Visa On Arrival"},
        {image:"https://www.keralatourism.org/images/kt/tr-icon-info.png",text:"Travel Info"},
        {image:"https://www.keralatourism.org/images/kt/tr-icon-messageboard.png",text:"Travel Cares"},
        {image:"https://www.keralatourism.org/images/kt/tr-icon-toilets.png",text:"Toilets"},
        {image:"https://www.keralatourism.org/images/kt/tr-icon-newsletter.png",text:"E Newsletters"},
        {image:"https://www.keralatourism.org/images/yatri-logo.png",text:"Yathri Nivas"},
    ]

    const galleryimg = [
        {image:"https://www.keralatourism.org/images/homecontentimage/desktop/beach.jpg",text:"Beaches"},
        {image:"https://www.keralatourism.org/images/homecontentimage/desktop/panorama.jpg",text:"Kerala Panorama"},
        {image:"https://www.keralatourism.org/images/homecontentimage/desktop/img-3.jpg",text:"Pigrim Centres"},
        {image:"https://www.keralatourism.org/images/homecontentimage/desktop/img-4.jpg",text:"Artforms"},
        {image:"https://www.keralatourism.org/images/homecontentimage/desktop/festivals.jpg",text:"Festivals"},
        {image:"https://www.keralatourism.org/images/homecontentimage/desktop/places-of-interest1.jpg",text:"Place Of Interest"},
        {image:"https://www.keralatourism.org/images/homecontentimage/desktop/waterfall.jpg",text:"Waterfalls"},
        {image:"https://www.keralatourism.org/images/homecontentimage/desktop/places-of-interest.jpg",text:"Monuments"},
        {image:"https://www.keralatourism.org/images/homecontentimage/desktop/wild-life-2.jpg",text:"Wildlife"},
        {image:"https://www.keralatourism.org/images/homecontentimage/desktop/wild-life-2.jpg",text:"Hills"},
        {image:"https://www.keralatourism.org/images/homecontentimage/desktop/Ayurveda.jpg",text:"Ayurveda"},
        {image:"https://www.keralatourism.org/images/homecontentimage/desktop/Backwater-kasargod_004.jpg",text:"Backwaters"},
    ]
  return (
    <div>
        <section className='packagesec'>
        <h2 className='tour'>Tour Packages</h2>
        <p className='stop'>STOP. Breathe. Slow down. Embrace life. It’s time for Kerala!<br/>Plan your trip with amazing offers and packages.</p>

        <Container>
            <Row>
                {entirekerala.map((i)=>{
                    return(
                        <Col lg={4} md={6}>
                        <Card className='entirecard'>
                        <Card.Img className='entireimg' src={i.image} />
                        </Card>
                        </Col>
                )})}
            </Row>
        </Container>
        
        <div className='new-btn-packages'>
        <Button className='btn-packages'>FIND MORE PACKAGES  <FaGreaterThan /></Button>
        </div>
        </section>

        <section className='plansec'>
                        <h2 className='plantxt'>Plan Your Trip</h2>

                        <Container>
                            <Row className='iconrow'>
                               {WhereToStay.map((i)=>{
                                return(
                                    <Col lg={1} md={4}>
                                    <Card className='iconcard'>
                                        <a href='#'><Card.Img className='iconimage' src={i.image}  /></a>
                                        {/* <Card.Footer className='imgtext'>{i.text}</Card.Footer> */}
                                    </Card>
                                    <p className='imgtext'>{i.text}</p>

                                    </Col>
                               )})}
                            </Row>
                        </Container>

                        <div className='search'>
                            <label className='accomodation'>Search for Accommodation</label>
                            <input className='enter' type='text' placeholder='Enter Keyword' />
                            <Button className='searchbtn'>SEARCH</Button>
                        </div>

                        <h2 className='gallery'>Explore Photo Gallery</h2>

        </section>

            <Row>
                {galleryimg.map((i)=>{
                    return(
                        <Col lg={2} md={4}>
                            <Card className='gallerycard'>
                            <Card.Img className='pic12' src={i.image} />
                            <span className='gallerytext'>{i.text}</span>
                            </Card>
                        </Col>
                    )})}
            </Row>
       
    </div>
  )
}

export default Tpackages