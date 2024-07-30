import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './App.css';
function Action(){
    return (
        <Container id="action">
            <h1 style={{padding:'15px', textAlign:'center'}}>Software Development Cycle</h1>
          <Row >
            <Col xs={6} md={4} className="col-border">
            <h6>Planning</h6>
            <p>Planning is a crucial step in everything, just as in software development. In this same stage, requirement analysis is also performed by the developers of the organization. This is attained from customer inputs, and sales department/market surveys. </p>
            </Col>

            <Col xs={6} md={4} className="col-border">
            <h6>Defining Requirements</h6>
              <p>In this stage, all the requirements for the target software are specified. These requirements get approval from customers, market analysts, and stakeholders. </p>
            </Col>
            <Col xs={6} md={4} className="col-border">
            <h6>Designing Architectire</h6>
              <p>SRS is a reference for software designers to come up with the best architecture for the software. Hence, with the requirements defined in SRS, multiple designs for the product architecture are present in the Design Document Specification (DDS).

</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} className="col-border">
            <h6>Developing Products</h6>
            <p>At this stage, the fundamental development of the product starts. For this, developers use a specific programming code as per the design in the DDS. Hence, it is important for the coders to follow the protocols set by the association. </p>
            </Col>
            <Col xs={6} md={4} className="col-border">
            <h6>Product Testing and Integration</h6>
              <p>After the development of the product, testing of the software is necessary to ensure its smooth execution. Although, minimal testing is conducted at every stage of SDLC. </p>
            </Col>
            <Col xs={6} md={4} className="col-border">
            <h6>Deployment & Maintenance</h6>
              <p> Software documentation is an essential part of the software development life cycle. A well-written document acts as a tool and means to information repository necessary to know about software processes, functions, and maintenance.  
</p>
            </Col>
          </Row>

        </Container>
      );
}

export default Action;