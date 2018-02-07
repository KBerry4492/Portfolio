// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, ContentLink, ImageLink } from "../../components/Nav";
import { Container, Row, Col, Playspace } from '../../components/Grid';
import data from "../../components/Images/imgurLinks.json";
import '../../css/style.css';


export class TwoD extends Component  {

  state = {
    data
  };

  render() {
    return (
      <div className = "Content">

        <Header title="2D Artwork" text= "" />
          
          <Container>
            <Link className="cLink" to="/Portfolio"> Back </Link>
            <Row>

              <Col size="4"> 
                <ContentLink name="Hanafuda Cards" image="/images/Hanafuda.jpg" link="allCards" /> 
              </Col>

            </Row>


              <Row>
                <Col size = "1">  </Col>
                
                <Col size = "10">

                <Playspace> <h2> A Skittering Heart </h2> </Playspace>

                  <Row>
                    {this.state.data.filter(item => {
                      return item.type.includes("ASH")
                    }).map(item => (
                      <Col size = "3">
                        <ImageLink
                          key={item.id}
                          name={item.name}
                          image={item.imgSrc}
                          link={item.imgSrc}
                        />
                      </Col>
                    ))}
                  </Row>

                  <Playspace> <h2> Drawings and Paintings </h2> </Playspace>

                  <Row>
                    {this.state.data.filter(item => {
                      return item.type.includes("paintings")
                    }).map(item => (
                      <Col size = "3">
                        <ImageLink
                          key={item.id}
                          name={item.name}
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