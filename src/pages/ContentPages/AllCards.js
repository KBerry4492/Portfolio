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
              <Link className="cLink" to="/2D"> Back </Link>
              <Row>
                <Col size = "1">  </Col>
                <Col size = "10">
                  <Row>
                    {this.state.data.map(item => (
                      <Col size = "3">
                        <ImageLink
                          key={item.id}
                          name={item.cardName}
                          image={item.imgSrc}
                          link={item.imgSrc}
                        />
                      </Col>
                    ))}
                  </Row>
                </Col>             
              </Row>
          </Container>

      </div>
    );
  }
}
