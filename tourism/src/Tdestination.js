import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaGreaterThan } from 'react-icons/fa';
import './Tdestinations.css';


function Tdestination() {
  const groupimg = [
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/ramakalmedu-1.jpg", title:"Ramakkalmedu"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/peppara-3.jpg", title:"Peppara Wildlife Santuary"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/kizhunna_beach.jpg", title:"Kizhunna Beach"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/madhur-2.jpg", title:"Madhur Temple"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/valapattanam-1.jpg", title:"Valapattanam"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/banasura-1.jpg", title:"Banasura Sagar Dam"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/bekal-fort-22.jpg", title:"Bekal Fort"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/vembnandu_lake.jpg", title:"Vembanad Lake"},
  ]
  return (
    <div>
        <section className='bg'>
            <h2 className='dest'>Top Destinations</h2>


          <Container>
          <Row>
            {groupimg.map((i)=>{
                return(
                  
                    <Col lg={3} md={6}>
                      <Card className='cardgap'>
                   <a href='#'><Card.Img className='pic1' src={i.image}/></a> 
                   <span className='group'>{i.title}</span>
                   </Card>
                    </Col>
                  
                )})}
          </Row>
          </Container>

          <div className='btn-destination'>
          <Button className='destination'>EXPLORE OUR DESTINATIONS <FaGreaterThan/> </Button>
          </div>
        </section>
    </div>
  )
}

export default Tdestination