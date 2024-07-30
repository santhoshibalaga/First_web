import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './assets/images/team1.jpg';
import img2 from './assets/images/team2.jpg';
import img3 from './assets/images/team3.jpg';
import img4 from './assets/images/team4.jpg';
import img5 from './assets/images/team5.jpg';
import img6 from './assets/images/team6.jpg';
import img7 from './assets/images/team7.jpg';
import img8 from './assets/images/team8.jpg';
import img9 from './assets/images/team9.jpg';




function Another(){
    return(
        <div id='another'>
            <h1>Team Experts </h1>
            <Container> 
            <Row className='row-content'>
                <Col><img src={img1} alt='img1'/></Col>
                <Col><img src={img2} alt='img2'/></Col>
                <Col><img src={img3} alt='img3'/></Col>
            </Row>
            <Row className='row-content'>
                <Col><img src={img4} alt='img4'/></Col>
                <Col><img src={img5} alt='img5'/></Col>
                <Col><img src={img6} alt='img6'/></Col>
            </Row>
            <Row className='row-content'>
                <Col><img src={img7} alt='img7'/></Col>
                <Col><img src={img8} alt='img8'/></Col>
                <Col><img src={img9} alt='img9'/></Col>
            </Row>
            </Container>
        </div>
    )
}

export default Another;