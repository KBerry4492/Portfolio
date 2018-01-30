// import React
import React, { Component } from 'react';
import { Header, ContentLink } from "../../components/Nav";
import { Container, Row, Col } from '../../components/Grid';
import '../../css/style.css';


export class Artwork extends Component  {

  render() {
    return (
      <div className = "Content">

        <Header title="Artwork" text= "" />
          
          <Container>

            <div className ="link-space">

            <Row>

              <Col size="4"> 
                <ContentLink name="3D Projects" image="/images/geomon.png" link="3D" /> 
              </Col>

              <Col size="4">
                <ContentLink name="2D Artwork" image="/images/Hanafuda.jpg" link="2D" />
              </Col>

            </Row>

            </div>

          </Container>

      </div>
    );
  }
}