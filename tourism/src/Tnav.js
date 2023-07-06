import React from 'react'
import './Tnav.css';
import {  Carousel, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Tnav() {
    const keralacarousel = [
        {image:"https://www.keralatourism.org/images/banner/desktop/painting-1920x650.jpg"},
        {image:"https://www.keralatourism.org/images/banner/desktop/nelliyampathy-1920x650.jpg"},
        {image:"https://www.keralatourism.org/images/banner/desktop/kumarakom-1920x6502.jpg"}
    ]
  return (
    <div>
       
         <Navbar expand="lg" className="navbar">
      <Container className='move'>
      <img className='keralaimg' src='https://www.keralatourism.org/images/kt/kerala-tourism-title.png?d=18122017' />
        {/* <Navbar.Brand id='kerala' className='fs-3' href="#home" >Keralatourism.org<p className='fs-6'>Welcome to god's own country</p> </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id='content'  className="ms-auto" as='ul'>
            
            <Nav.Link  as='li'><a href='#'>EXPERIENCE KERALA</a></Nav.Link>
            <Nav.Link  as='li'><a href='#'>WHERE TO GO</a></Nav.Link>
            <Nav.Link  as='li'><a href='#'>WHERE TO STAY</a></Nav.Link>
            <Nav.Link  as='li'><a href='#'>THINGS TO DO</a></Nav.Link>
            <Nav.Link  as='li'><a href='#'>PLAN YOUR TRIP</a></Nav.Link>
            <Nav.Link  as='li'><a href='#'>TRAVEL CARE</a></Nav.Link>
            <Nav.Link  as='li'><a href='#'>E BROUCHERS</a></Nav.Link>
            <Nav.Link  as='li'><a href='#'>E NEWSLETTERS</a></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Carousel>
        {keralacarousel.map((i)=>{
            return(
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={i.image}
                alt='First slide'
                />  
            </Carousel.Item>
            )})}
    </Carousel>
     

    </div>
  )
}

export default Tnav