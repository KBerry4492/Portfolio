// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, ContentLink } from "../../components/Nav";
import { Container, Row, Col } from '../../components/Grid';
import '../../css/style.css';


export class TwoD extends Component  {

  render() {
    return (
      <div className = "Content">

        <Header title="2D Artwork" text= "" />
          
          <Container>

            <div className ="link-space">

            <Row>

              <Col size="4"> 
                <ContentLink name="Hanafuda Cards" image="/images/Hanafuda.jpg" link="allCards" /> 
              </Col>

            </Row>

            <Link className="cLink" to="/portfolio"> Back </Link>
            </div>

          </Container>

      </div>
    );
  }
}