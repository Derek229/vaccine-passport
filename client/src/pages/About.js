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
import adam from '../Images/adam.jpeg'
import useWindowDimensions from '../components/useWindowDimensions'

const About =()=> {

  const {width} = useWindowDimensions()
  const hide = (width <= 1069)
  
  return (
    <div className="about">
      <Container className="aboutcontainer" style={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', width: '90%', padding: '0 0 0px 0', margin: '0 0 100px 0'}}>
        <Carousel interval={12000} style={{margin: '20px 0 40px 0', width: '90%', height: '100%', padding: '0', backgroundColor: '#262626'}}>
          <Carousel.Item style={{padding: '0', margin: '0'}}>
            <div className="carousel-item-custom">
              <Row style={{display: 'flex', flexWrap: 'wrap', alignContent: 'center'}}>
              {hide === false &&
                <img
                  className="d-block w-50"
                  src={BlueLogo}
                  alt="COVIDIA Logo"
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
                <a className="aboutlink" target="_blank" rel="noreferrer" style={{padding: '1px 2px 1px 1px'}} href="https://github.com/Derek229/vaccine-passport"><img src={github} alt="github icon" /></a>
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
                  alt="Trevor Profile"
                  style={{alignSelf:'center', width: 'auto', height: 'auto', maxWidth: '230px', margin: '0 60px 0 60px'}}
                />
              }
              <Col style={{margin: '0px 0px 0px 15px'}}>
                <h1 style={{color: 'white'}}>Trevor von Hake</h1>
                <h4 style={{color: '#D2E0E8', margin: '30px 20px 0 0'}}>Passionate about making beautiful, interactive, and efficient web applications from start to finish. </h4>
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
                    Contributions: Landing, Login, Registration, About, Admin UI, NavBars, QR, Custom SQL, All Verifiers/Vaccines, Protected Routes, User UI Mobile Optimization, React Native App
                  </p>
                }
              </Col>
              </Row>
              {hide === false ? <div className="carousel-links" style={{margin:'20px 0 0px 0'}}>
                <a className="aboutlink" target="_blank" rel="noreferrer" href="https://github.com/tvonhake" style={{padding: '2px 2px 0 1px', marginRight: '20px'}}><img src={github} alt="github icon" /></a>
                <a className="aboutlink" style={{padding: '1px'}} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/trevorvonhake/"><img src={linkedin} alt="linkedin icon" /></a>
              </div> : <div className="carousel-links" style={{margin:'20px 0 20px 0'}}></div>}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-custom">
              <Row>
              {hide === false &&
                <img
                  className="d-block w-50"
                  src={adam}
                  alt="Adam Profile"
                  style={{maxHeight: '250px', maxWidth: '220px', margin: '0 30px 0 60px'}}
                />
              }
              <Col style={{marginRight: '50px'}}>
                <h1 style={{color: 'white'}}>Adam Mazur</h1>
                <h4 style={{color: '#D2E0E8', margin: '30px 0 0 0'}}>Nothing is more satisfying than putting in hard work and seeing the blood and sweat you put into that work, build into something useful and innovative. Building web applications completely fulfills that passion and learning something new from such a vast knowledge base everyday is adventerous and exciting. </h4>
                <p style={{color: 'white', margin: '30px 120px 0 0'}}>Proficiencies: Javascript, React JS, Ruby on Rails, Postgresql, Semantic UI, Bootstrap, Postman API, and React Native </p>
                {hide === false && <p style={{color: 'white', margin: '30px 150px 0 0'}}>Contributions: controllers, models, routes, modals, forms, user interface and user backend. </p>}
              </Col>
              </Row>
              {hide === false ?  <div className="carousel-links" style={{margin:'20px 0 20px 0'}}>
                <a className="aboutlink" target="_blank" rel="noreferrer" href="https://github.com/ahmazur19" style={{padding: '2px 2px 0 1px', marginRight: '20px'}}><img src={github} alt="github icon" /></a>
                <a className="aboutlink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/adam-harrington-mazur"><img src={linkedin} alt="linkedin icon" /></a>
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
                  alt="Derek Profile"
                  style={{alignSelf:'center', width: 'auto', height: 'auto', maxWidth: '230px', margin: '0 30px 0 60px'}}
                />
              }
              <Col style={{marginRight: '50px'}}>
                <h1 style={{color: 'white'}}>Derek Cluff</h1>
                <h4 style={{color: '#D2E0E8', margin: '30px 0 0 0'}}>Description: Enjoy working on hard projects and creating amazing web apps and seeing them come to production. </h4>
                <p style={{color: 'white', margin: '30px 120px 0 0'}}>Proficiencies: Javascript, React JS, Ruby on Rails, Postgresql, Semantic UI, Bootstrap, Postman API, and React Native </p>
                {hide === false && <p style={{color: 'white', margin: '30px 150px 0 0'}}>Contributions:back-end  controllers, models, sql calls for Verifiers and Issuers, front-end for Verifiers and Issuers, QR scanner, styling, login and Registration. </p>}
              </Col>
              </Row>
              {hide === false ? <div className="carousel-links" style={{margin:'20px 0 20px 0'}}>
                <a className="aboutlink" target="_blank" rel="noreferrer" href="https://github.com/Derek229" style={{padding: '2px 2px 0 1px', marginRight: '20px'}}><img src={github} alt="github icon" /></a>
                <a className="aboutlink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/derek-cluff/"><img src={linkedin} alt="linkedin icon" /></a>
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
                  alt="Santiago Profile"
                  style={{alignSelf:'center', width: 'auto', height: 'auto', maxWidth: '230px', margin: '0 30px 0 60px'}}
                />
              }
              <Col style={{marginRight: '50px'}}>
                <h1 style={{color: 'white'}}>Santiago Lozano-Ventura</h1>
                <h4 style={{color: '#D2E0E8', margin: '30px 0 0 0'}}>Description: A Go-Getter, a problem solver, a hard worker, and perfectionist. A warrior, a team player, a leader, walk into a restaurant. The hostess asks, "Table for one?" How is this possible?? </h4>
                <p style={{color: 'white', margin: '20px 120px 0 0'}}>Proficiencies: Javascript, React JS, Ruby on Rails, Postgresql, Semantic UI, Bootstrap, and React Native</p>
                {hide === false && <p style={{color: '#D2E0E8', margin: '10px 150px 0 0'}}>Contributions: Worked on the Issuer Pages, worked on the Front and Back-End of the project, created CRUD on the backend, and was a team player to my group. </p>}
              </Col>
              </Row>
              {hide === false ?  <div className="carousel-links" style={{margin:'20px 0 20px 0'}}>
                <a className="aboutlink" target="_blank" rel="noreferrer" href="https://github.com/santiago2224" style={{padding: '2px 2px 0 1px', marginRight: '20px'}}><img src={github} alt="github icon" /></a>
                <a className="aboutlink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/santiagolozanoventura/"><img src={linkedin} alt="linkedin icon" /></a>
              </div> : <div className="carousel-links" style={{margin:'20px 0 20px 0'}}></div>}
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}

export default About
