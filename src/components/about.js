import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import img1 from'./assets/images/img1.jpg';

function About(){
    return (
        <div id="about" style={{padding:'50px', alignItems:'center'}}>
            <h1 style={{padding:'10px', textAlign:'center'}}>About Page</h1>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" style={{width:'1000px', alignContent:'center'}}>
        <Accordion.Header>Lorem ipsum</Accordion.Header>
        <Accordion.Body >
            <img src={img1} alt="img1" style={{height:'50px', width:'50px'}}/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={{width:'1000px', alignContent:'center'}}>
        <Accordion.Header>Quis nostrud</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={{width:'1000px', alignContent:'center'}}>
      <Accordion.Header>Qui officia</Accordion.Header>
        <Accordion.Body >
            <img src={img1} alt="img1" style={{height:'50px', width:'50px'}}/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    )
}

export default About;