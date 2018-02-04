// import React
import React, { Component } from 'react';
import { Header, Embed } from "../../components/Nav";
import { Container, Row, Col, Playspace } from '../../components/Grid';
import '../../css/style.css';


export class ThreeD extends Component  {

  render() {
    return (
      <div className = "Content">

        <Header title="3D Art" text= "" />
          
          <Container>

            <div className ="link-space">

            <Row>

              <Col size="7">
                <Embed name="Tiger Shark Embryo Defense" vidSrc="https:www.youtube.com/embed/jpHo55HWkOk" />
              </Col>

              <Col size="5">
                <Playspace> 
                  Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum 
                </Playspace>
              </Col>

            </Row>
            <Row>

              <Col size="7"> 
                <Embed name="Anomaly" vidSrc="https:www.youtube.com/embed/ih7DU3iIZTQ" />
                
              </Col>

              <Col size="5">
                <Playspace> 
                  Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum 
                </Playspace>
              </Col>

            </Row>
            
            <Row>

              <Col size="7">
                <Embed name="Shrine and Basillica Demo Reel" vidSrc="https:www.youtube.com/embed/o9Y7xFkUfto" />
              </Col>

              <Col size="5">
                <Playspace> 
                  Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum 
                </Playspace>
              </Col>

            </Row>

            <Row>
              <Col size="12">
                <div className="card-holder"> <h3> Screenshots: </h3> </div>
              </Col>

              <Col size="12">
                <Playspace> 
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum 
                </Playspace>
              </Col>

            </Row>

            </div>

          </Container>

      </div>
    );
  }
}