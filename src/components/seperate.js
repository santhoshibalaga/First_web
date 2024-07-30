import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import facebook from './assets/images/facebook.jpg';
import google from './assets/images/google.jpg';
import twitter from './assets/images/twitter.png';
import insta from './assets/images/insta.jpg';
import firefox from './assets/images/firefox.jpg';
import brave from './assets/images/brave.jpg';
function Seperate(){
    return(
        <div id='seperate' style={{padding:'50px'}}>
        <hr/>
        <h5>Click the images to visit the corresponding official website</h5>
        <Container> 
            <Row className='row-content'>
                <Col><a href='https://www.facebook.com/'><img src={facebook} alt='facebook'/><h5>facebook</h5></a></Col>
                <Col><a href='https://www.google.com/'><img src={google} alt='google'/><h5>google</h5></a></Col>
                <Col><a href='https://www.insta.com/'><img src={insta} alt='intagram'/><h5>intagram</h5></a></Col>
            </Row>
            <Row className='row-content'>
                <Col><a href='https://www.twitter.com/'><img src={twitter} alt='twitter'/> <h5>twitter</h5></a></Col>
                <Col><a href='https://www.firefox.com/'><img src={firefox} alt='firefox'/><h5>firefox</h5></a></Col>
                <Col><a href='https://www.brave.com/'><img src={brave} alt='brave'/><h5>brave</h5></a></Col>
            </Row>
        </Container>
        </div>
    )
}

export default Seperate;