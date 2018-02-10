// import React
import React, { Component } from 'react';
import { Header, Embed, ImageLink } from "../../components/Nav";
import { Container, Row, Col, Playspace } from '../../components/Grid';
import data from "../../components/Images/imgurLinks.json";
import '../../css/style.css';


export class ThreeD extends Component  {

  state = {
    data
  };

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
                  <p>
                  Tiger Shark Embryo Defense was a third person shooter where the  player controlled a cybernetic shark to defeat invading monsters and protect its unborn siblings at the behest of a mad scientist.
                  <br/>
                  As waves of invaders attack, the player can shoot them down and harvest them to create autonomous turrets and upgrade their abilities in order to drive off the invaders, defeat their sinister Boss, and win the game.
                  <br/>
                  I modelled and textured all of the 3D assets other than the enemies and the floor, and drew the GUI.
                  </p>

                </Playspace>
              </Col>

            </Row>
            <Row>

              <Col size="7"> 
                <Embed name="Anomaly" vidSrc="https:www.youtube.com/embed/ih7DU3iIZTQ" />
                
              </Col>

              <Col size="5">
                <Playspace> 
                  <p>
                  Anomaly is a first person shooter where in the player is crashed on an alien world and must fight off flying robots while they restore power and collect upgrades.
                  <br/>
                  The player can fly around on a hovercraft, and call in airstrikes while outside, but must travel on foot through the facilities to meet their objectives.
                  <br/>
                  I modelled and textured the player's arm, their hovercraft, the interior furnishings, the crashed starship and drew the GUI. 
                  </p>
                </Playspace>
              </Col>

            </Row>
            
            <Row>

              <Col size="7">
                <Embed name="Shrine and Basilica Demo Reel" vidSrc="https:www.youtube.com/embed/o9Y7xFkUfto" />
              </Col>

              <Col size="5">
                <Playspace> 
                  I created both of the scenes here myself, from references to real world locations.
                </Playspace>
              </Col>

            </Row>

            <Row>
              <Col size="12">
                <div className="card-holder"> <h3> Screenshots: </h3> </div>
              </Col>

              <Col size="12">
                <Playspace> 
                  <Row>
                   <div className="card-holder">
                    <h3> Anomaly: </h3>
                   </div>
                  </Row>

                  <Row>
                    {this.state.data.filter(item => {
                      return item.type.includes("anomaly")
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

                  <Row>
                   <div className="card-holder">
                    <h3> Shrine and Basilica: </h3>
                   </div>
                  </Row>

                  <Row>
                    {this.state.data.filter(item => {
                      return item.type.includes("3DS")
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
                </Playspace>
              </Col>

            </Row>

            </div>

          </Container>

      </div>
    );
  }
}