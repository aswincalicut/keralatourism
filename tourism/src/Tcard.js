import React, { useState } from 'react'
import { Button, Card, CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap';
import { FaGreaterThan } from 'react-icons/fa';
import './Tcard.css';

function Tcard() {
  const cardimg = [
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/Ayurveda3.jpg", name:"AYURVEDA"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/valiyaparamba1.jpg", name:"VALIYAPARAMBA BACKWATERS"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/akkulam.jpg", name:"AKKULAM TOURIST VILLAGE "},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/en_uru.jpg", name:"EN OORU TRIBAL HERITAL VILLAGE"}
  ]
  return (
    <div>
        <h2 className='exp'>Experience Kerala</h2>

        <Carousel>
            <Container>
            <Row>
              {cardimg.map((i)=>{
                return(
                  <Col lg={3} md={6}>
                  <Card>
                  <a href='#'> <Card.Img className='image1' src={i.image} /></a>
                  {/* <span className='ayurveda'>{i.name}</span> */}
                 </Card>
                 </Col>
                )})}

                
</Row>
            </Container>
        </Carousel>

       <section className='btnfind'>           
      <Button className='find'>FIND MORE EXPERIENCES <FaGreaterThan /> </Button>
      </section>
    </div>
  )
}

export default Tcard