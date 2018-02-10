// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, ContentLink } from "../../components/Nav";
import { Container, Row, Col } from '../../components/Grid';


export class Portfolio extends Component  {

  render() {
    return (
      <div className = "Content">

        <Header title="Portfolio" text= "" />
          
          <Container>

            <div className ="link-space">

            <Row>

              <Col size="4"> 
                <ContentLink name="Geomon" image="/images/geomon.png" link="geomon" /> 
              </Col>

              <Col size="4">
                <ContentLink name="Hanafuda" image="/images/Hanafuda.jpg" link="hanafuda" />
              </Col>

              <Col size="4"> 
                <ContentLink name="3D Projects" image="/images/basillica.png" link="3D" /> 
              </Col>

              <Col size="4">
                <ContentLink name="2D Artwork" image="/images/artwork.png" link="2D" />
              </Col>

            </Row>
            <Link className="cLink" to="/"> Back </Link>
            </div>

          </Container>

      </div>
    );
  }
}

