// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, ImageLink } from "../../components/Nav";
import { Container, Row, Col } from '../../components/Grid';
import data from "../../components/Images/cards.json";

export class AllCards extends Component  {
  state = {
    data
  };

  render() {
    return (
      <div className = "Content">

        <Header title="Hanafuda Cards" text= "Hand-drawn in Photoshop CS6 on an Intuos 5" />
          
          <Container>

            <div className ="link-space">
              
              <Row>
                <Col size = "2"> <Link className="cLink" to="/2D"> Back </Link> </Col>
                <Col size = "8">
                {this.state.data.map(item => (
                    
                      <ImageLink
                        key={item.id}
                        name={item.cardName}
                        image={item.imgSrc}
                        link={item.imgSrc}
                      />
                    
                  ))}              
                </Col>
              </Row>

            </div>

          </Container>

      </div>
    );
  }
}
