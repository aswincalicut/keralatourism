import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './Browsefooter.css';
import { GrGallery } from 'react-icons/gr';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaWhatsapp } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { ImCamera } from 'react-icons/im';

function Browsefooter() {
  return (
    <div>
        <section className='btnbrowsesection'>
            <Button className='browsebtn'>BROWSE OUR GALLERY  <GrGallery/></Button>
        </section>

        <h2 className='connect'>Connect With Us</h2>

        <Container>
            <Row className='iconrow'>
            <Col className='iconslast'>
            <ul style={{display:'inline'}}>
                <li className='yt'><AiOutlineYoutube size={50}/></li>
                <li className='fb'><FaFacebookF size={50}/></li>
                <li className='twit'><FiTwitter size={50}/></li>
                <li className='cam'><ImCamera size={50}/></li>
                <li className='wp'><FaWhatsapp size={50}/></li>
                <li className='pin'><FaPinterestP size={50}/></li>
                <li className='link'><FaLinkedinIn size={50}/></li>

            </ul>
            </Col>
            </Row>
        </Container>
        <h3 className='trend'><a className='tour'>#KeralaTourism</a> is Live & Trending. Don't forget to follow & share your Kerala experience</h3>

<section className='footer-section'>        
<Container>
    <Row>
      <Col>
      <ul>
        <li><h5>Explore</h5></li>
        <li>Classification Schemes</li>
        <li>Governmental Affairs</li>
        <li>Media Rooms</li>
        <li>Tourism Events</li>
        <li>Maps</li>
        <li>Site Maps</li>
      </ul>
      </Col>

      <Col>
      <ul>
        <li><h5>Travel Hub</h5></li>
        <li>kerala at a glance</li>
        <li>Travel Care</li>
        <li>Where to stay</li>
        <li>How to?</li>
        <li>Travel Tips</li>
      </ul>
        </Col>

        <Col>
        <ul>
        <li><h5>Nature</h5></li>
          <li>Hills</li>
          <li>Backwaters</li>
          <li>Beaches</li>
          <li>Wildlife</li>
          <li>Waterfalls</li>
        </ul>
        </Col>

        <Col>
        <ul>
        <li><h5>Places</h5></li>
          <li>Munnar</li>
          <li>Wayanad</li>
          <li>Kovalam</li>
          <li>Periyar</li>
          <li>Varkala</li>
        </ul>
        </Col>

        <Col>
        <ul>
        <li><h5>Specialities</h5></li>
          <li>Ayurveda</li>
          <li>Monsoon</li>
          <li>Houseboat</li>
          <li>Kerala Food</li>
          <li>Festivals</li>
        </ul>
        </Col>

        <Col>
        <ul>
        <li><h5>Videos/Photos</h5></li>
          <li>Videos</li>
          <li>Photos</li>
          <li>360 Videos</li>
          <li>Royality Free Photos</li>
          <li>Wallpapers</li>
        </ul>
        </Col>
      </Row>
      </Container>
      </section>
        

    </div>
  )
}

export default Browsefooter