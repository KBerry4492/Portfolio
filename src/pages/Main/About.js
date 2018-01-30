// import React
import React from 'react';
import Connect from "../../components/Connect";
import { Header } from "../../components/Nav";
import { Container, Row, Col, Playspace } from '../../components/Grid';

// create stateless (functional) component called About
export const About = () => (
  <Container>

    <Header title="Kevin Berry" text= "Nice to meet you." />

    <Row>

      <Col size="8">

        <Playspace>
          

          <p> <img  class="img img-responsive img-thumbnail pull-left" id="pPic" src="/images/PF_2.png" alt="My handsome self."/>
            Hello! I am Kevin Berry, artist and programmer.<br/> 
            I am from Neshanic Station, a small semi-rural area half-way between Flemington and Bridgewater.
            I graduted from Champlain College in Burlington VT in 2014 with a BSA in Game Art and Animation.
            
            <br/>
            <br/>
            
            I am currently working at the Flemington Kohls, as a Sales Associate.  I just recently graduted from the Rutgers Coding Bootcamp, and have enjoyed both learning and working with my fellow students and the instructors.  I am honored to have won the award for "Most likely to ask the question that makes the rest of the class go 'Oooooh, Now I get it.' "
          </p>
        </Playspace>
      </Col>

      <Col size="4"><Connect/></Col>

    </Row>    
  </Container>
);