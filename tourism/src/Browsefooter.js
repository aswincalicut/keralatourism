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

        

    </div>
  )
}

export default Browsefooter