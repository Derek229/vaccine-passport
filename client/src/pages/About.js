import React from 'react'
import '../pages/ComponentStyles/container.css'
import {Container, Carousel, Col, Row} from 'react-bootstrap'
import BlueLogo from '../Logos/Covida Blue 2F73DA.png'
import '../pages/ComponentStyles/container.css'
import github from '../Vaccine Passport Icons/github.png'
import linkedin from '../Vaccine Passport Icons/linkedin.png'
import trevor from '../Images/trevor.jpg'
import santiago from '../Images/santiago.jpg'
import derek from '../Images/derek.jpg'
import RealAdam from '../Images/RealAdam.jpeg'
import useWindowDimensions from '../components/useWindowDimensions'

const About =()=> {

  const {width} = useWindowDimensions()
  const hide = (width <= 1069)
  
  return (
    <div className="about">
      <Container className="aboutcontainer" style={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', width: '90%'}}>
        <Carousel interval={12000} style={{margin: '40px 0 0px 0', width: '90%', height: '100%', padding: '0', backgroundColor: '#262626'}}>
          <Carousel.Item style={{padding: '0', margin: '0'}}>
            <div className="carousel-item-custom">
              <Row style={{display: 'flex', flexWrap: 'wrap', alignContent: 'center'}}>
              {hide === false &&
                <img
                  className="d-block w-50"
                  src={BlueLogo}
                  alt="First slide"
                  style={{maxHeight: '250px', maxWidth: '220px', margin: '0 30px 0 60px'}}
                />
              }
              <Col style={{margin: '0px 0px 0px 15px'}}>
                <h3 style={{color: 'white'}}>Covidia is a team of 4 web development students from DevPoint Labs in Salt Lake City, UT.</h3>
                <h4 style={{color: '#D2E0E8', margin: '30px 50px 0 0'}}>The <a href="/" style={{color: 'white', margin: '0', padding: '0'}}>Vaccine Passport</a> aims to eliminate the need for physical proof of vaccination by digitally delivering your vaccination history to the palm of your hand.</h4>
              </Col>
              </Row>
                {hide === false && <h4 style={{color: 'white', alignSelf: 'center', margin: '80px 0 20px 0'}}>Checkout the other slides to meet the developers!</h4>}
                {hide === false ? <div className="carousel-links" style={{margin:'20px 0 10px 0'}}>
                <a className="aboutlink" target="_blank" style={{padding: '1px 2px 1px 1px'}} href="https://github.com/Derek229/vaccine-passport"><img src={github} /></a>
              </div>: <div className="carousel-links" style={{margin:'20px 0 20px 0'}}></div>}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-custom">
              <Row style={{display: 'flex', flexWrap: 'wrap', alignContent: 'center'}}>
              {hide === false &&
                <img
                  className="d-block w-50"
                  src={trevor}
                  alt="First slide"
                  style={{alignSelf:'center', width: 'auto', height: 'auto', maxWidth: '230px', margin: '0 60px 0 60px'}}
                />
              }
              <Col style={{margin: '0px 0px 0px 15px'}}>
                <h1 style={{color: 'white'}}>Trevor von Hake</h1>
                <h4 style={{color: '#D2E0E8', margin: '30px 0 0 0'}}>Passionate about making beautiful, interactive, and efficient web applications. </h4>
                {hide === false ? 
                <>
                  <p style={{color: 'white', margin: '30px 80px 0 0'}}>
                    Proficiencies: Javascript, React JS, 
                  </p>
                  <p style={{color: 'white', margin: '0px 80px 0 0'}}>
                    Ruby on Rails, Postgresql, Semantic UI, Bootstrap, Postman API, and React Native
                  </p>
                </>
                :
                  <p style={{color: 'white', margin: '30px 0px 0 0'}}>
                  Proficiencies: Javascript, React JS, Ruby on Rails, Postgresql, Semantic UI, Bootstrap, Postman API, and React Native
                  </p>
                }
                {hide === false &&
                  <p style={{color: '#D2E0E8', margin: '30px 65px 25px 0'}}>
                    Contributions: Landing, Login, Registration, About, Admin UI, NavBars, QR Scanner, Custom SQL, All Verifiers, User UI Mobile Optimization, React Native App
                  </p>
                }
              </Col>
              </Row>
              {hide === false ? <div className="carousel-links" style={{margin:'20px 0 0px 0'}}>
                <a className="aboutlink" target="_blank" href="https://github.com/tvonhake" style={{padding: '2px 2px 0 2px', marginRight: '20px'}}><img src={github} /></a>
                <a className="aboutlink" style={{padding: '1px'}}target="_blank" href="https://www.linkedin.com/in/trevorvonhake/"><img src={linkedin} /></a>
              </div> : <div className="carousel-links" style={{margin:'20px 0 20px 0'}}></div>}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-custom">
              <Row>
              {hide === false &&
                <img
                  className="d-block w-50"
                  src={RealAdam}
                  alt="First slide"
                  style={{maxHeight: '250px', maxWidth: '220px', margin: '0 30px 0 60px'}}
                />
              }
              <Col style={{marginRight: '50px'}}>
                <h1 style={{color: 'white'}}>Adam Mazur</h1>
                <h4 style={{color: '#D2E0E8', margin: '30px 0 0 0'}}>Description </h4>
                <p style={{color: 'white', margin: '30px 120px 0 0'}}>Proficiencies: </p>
                {hide === false && <p style={{color: 'white', margin: '30px 150px 0 0'}}>Contributions: </p>}
              </Col>
              </Row>
              {hide === false ?  <div className="carousel-links" style={{margin:'20px 0 20px 0'}}>
                <a className="aboutlink" target="_blank" href="https://github.com/ahmazur19" style={{padding: '2px 2px 0 2px', marginRight: '20px'}}><img src={github} /></a>
                <a className="aboutlink" target="_blank" ><img src={linkedin} /></a>
              </div> : <div className="carousel-links" style={{margin:'20px 0 20px 0'}}></div>}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-custom">
              <Row>
              {hide === false &&
                <img
                  className="d-block w-50"
                  src={derek}
                  alt="First slide"
                  style={{maxHeight: '700px', maxWidth: '220px', margin: '0 30px 0 60px'}}
                />
              }
              <Col style={{marginRight: '50px'}}>
                <h1 style={{color: 'white'}}>Derek Cluff</h1>
                <h4 style={{color: '#D2E0E8', margin: '30px 0 0 0'}}>Description </h4>
                <p style={{color: 'white', margin: '30px 120px 0 0'}}>Proficiencies: </p>
                {hide === false && <p style={{color: 'white', margin: '30px 150px 0 0'}}>Contributions: </p>}
              </Col>
              </Row>
              {hide === false ? <div className="carousel-links" style={{margin:'20px 0 20px 0'}}>
                <a className="aboutlink" target="_blank" href="https://github.com/Derek229" style={{padding: '2px 2px 0 2px', marginRight: '20px'}}><img src={github} /></a>
                <a className="aboutlink" target="_blank" href="https://www.linkedin.com/in/derek-cluff/"><img src={linkedin} /></a>
              </div> : <div className="carousel-links" style={{margin:'20px 0 20px 0'}}></div>}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-custom">
              <Row>
              {hide === false &&
                <img
                  className="d-block w-50"
                  src={santiago}
                  alt="First slide"
                  style={{maxHeight: '700px', maxWidth: '220px', margin: '0 30px 0 60px'}}
                />
              }
              <Col style={{marginRight: '50px'}}>
                <h1 style={{color: 'white'}}>Santiago Lozano-Ventura</h1>
                <h4 style={{color: '#D2E0E8', margin: '30px 0 0 0'}}>Description </h4>
                <p style={{color: 'white', margin: '30px 120px 0 0'}}>Proficiencies: </p>
                {hide === false && <p style={{color: 'white', margin: '30px 150px 0 0'}}>Contributions: </p>}
              </Col>
              </Row>
              {hide === false ?  <div className="carousel-links" style={{margin:'20px 0 20px 0'}}>
                <a className="aboutlink" target="_blank" href="https://github.com/santiago2224" style={{padding: '2px 2px 0 2px', marginRight: '20px'}}><img src={github} /></a>
                <a className="aboutlink" target="_blank" href="https://www.linkedin.com/in/santiagolozanoventura/"><img src={linkedin} /></a>
              </div> : <div className="carousel-links" style={{margin:'20px 0 20px 0'}}></div>}
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}

export default About
