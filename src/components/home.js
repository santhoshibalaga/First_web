
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from './assets/images/p1.avif';
import img2 from './assets/images/p2.avif';
import img3 from './assets/images/p3.avif';
import img4 from './assets/images/p4.avif';

function Home(){

    return (
        <div style={{width:'1500px', alignItems:'ce'}}>
          <h1 style={{padding:'10px',textAlign:'center', width:'80vh'}}>Home</h1>
            <Carousel>
                
      <Carousel.Item>
        <img
        style={{height:'80vh', alignContent:'center', width:'100%'}}
        src={img1}
        alt="img1"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      style={{height:'80vh', alignContent:'center', width: '100%'}}
        src={img2}
        alt="img1"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      style={{height:'80vh', alignContent:'center', width:'100%'}}
        src={img3}
        alt="img1"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      style={{height:'80vh', alignContent:'center', width:'100%'}}
        src={img4}
        alt="img1"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        </div>
        
      );
}

export default Home;