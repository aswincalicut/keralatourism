import React from 'react'
import { Button, Card, CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap';
import{ FaGreaterThan } from 'react-icons/fa';
import './Tbgimage.css';

function Tbgimage() {
  const kayaking = [
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/kayakking2.jpg",text:"Kayaking"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/rock_climbing.jpg",text:"Rock Climbing"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/boating.jpg",text:"Boating"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/natural_walk2.jpg",text:"Nature Walk"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/surfing1.jpg",text:"Surfing"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/parasailing1.jpg",text:"Parasailing"}
  ]
  const pulikkali = [
    {image:"https://www.keralatourism.org/images/festivals/home-thumb/20160628064542_365_1.jpg",details:"Aanayoottu at Vadakkumnathan Temple"},
    {image:"https://www.keralatourism.org/images/festivals/home-thumb/20181108075932_170_1.jpg",details:"Njangattiri Aanayoottu"},
    {image:"https://www.keralatourism.org/images/festivals/home-thumb/20170710102310_123_1.jpg",details:"Athachamayam"},
    {image:"https://www.keralatourism.org/images/festivals/home-thumb/20171222121145_317_1.jpg",details:"Thiruvonam"},
    {image:"https://www.keralatourism.org/images/festivals/home-thumb/20131104154213_40_1.jpg",details:"Pulikali"},
    {image:"https://www.keralatourism.org/images/festivals/home-thumb/20180510222310_225_1.jpg",details:"Manarcad Perunnal or Ettunoyambu"}
  ]
  return (
    <div>
        <section className='background'>
            <h2 className='kerala'>Things to do in kerala</h2>

            <Container>
              <Row>
                {kayaking.map((i)=>{
                  return(
                    <Col lg={4} md={6}>
                      <Card className='imgdown' >
                 <a href='#'> <Card.Img className='imgradius' src={i.image}/></a>
                 <span className='spntext'>{i.text}</span>
                 </Card>
                 
                </Col>
                  )})}
                
              </Row>
            </Container>
                    <div className='btn-more'>
                    <Button className='btnmore'>FIND MORE ACTIVITIES <FaGreaterThan /> </Button>
                    </div>
        </section>

        <section className='whatsnew'>
                    <h2 className='new'>Whats's New</h2>
                    
                   
                    <p  className='trade'>Domestic Trade Fairs 2023-24 | Register Now <span className='inter'>International Trade Fair | May 2023</span> </p>
                  
                    <div className='btn-news'>
                    <Button className='btnnews'>MORE NEWS  <FaGreaterThan /></Button>
                    </div>
        </section>

        <section className='happening'>
                    <h2 className='content'>What's happening</h2>

                    <Carousel>
                      <Container>
                        <Row>
                          {pulikkali.map((i)=>{
                            return(
                              <Col lg={2} md={4}>
                                <Card className='cardpad'>
                              <a href='#'><Card.Img className='aimg' src={i.image} /></a> 
                              <Card.Footer className='imgdetails'>{i.details}</Card.Footer> 
                              </Card>
                              </Col>
                            )})}

                        </Row>
                      </Container>
                    </Carousel>

                    <div className='btn-festivals'>
                    <Button className='festivals'>MORE FESTIVALS & EVENTS  <FaGreaterThan /></Button>
                    </div>
        </section>

    </div>
  )
}

export default Tbgimage