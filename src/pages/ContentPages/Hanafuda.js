// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, ImageLinkL} from "../../components/Nav";
import { Container, Row, Col, Playspace } from '../../components/Grid';
import data from "../../components/Images/screenshots.json";
import '../../css/style.css';


export class Hanafuda extends Component  {

  state = {
    data
  };

  render() {
    return (
      <div className = "Content">

        <Header title="Hanafuda Flurry!" text= "Fun card games for the family, featuring japanese style cards!" />
          <Link className="cLink" to="/portfolio"> Back </Link>
          <Container>

            <div className ="link-space">

            <Row>

              <Col size="3"></Col>
              <Col size="5">
                <ImageLinkL
                  name="Click to visit site."
                  image="/images/Hanafuda.jpg" 
                  link="https://hanafuda-cards-app.herokuapp.com/"/>
              </Col>
            </Row>

            <Row>
              <Col size="2"></Col>
              <Col size="7">
                <Playspace>
                  <p> 
                    Together with Micheal Devaney, I created a website featuring three card games using Hanafuda cards.
                    Mike focused on the back-end server development, user authentification and socket.io based chat.
                    <br/> I created the front-end react app, programmed the game logic, designed the webiste and drew the cards themselves.
                  <br/>
                    Links to full size versions of the cards can be found further up this site, under [2D Artwork].
                  </p>
                </Playspace>
              </Col>
              
            </Row>

            <Row>

            <Col size="1"></Col>
            <Col size="11">

            <Row>
              {this.state.data.filter(item => {
                    return item.type.includes("hanafuda")
                })
                .map(items => (
                    <Col size="6">
                      <Row>
                        <ImageLinkL
                          key={items.id}
                          id={items.id}
                          name={items.name}
                          image={items.imgSrc}
                          link={items.imgSrc}
                        />
                      </Row>
                      <Row>
                        <Col size="9">
                          <Playspace> 
                            {items.caption} 
                          </Playspace>
                        </Col>
                      </Row>
                    </Col>                  
                  
                ))}
              </Row></Col>

              </Row>
            </div>
          </Container>
      </div>
    );
  }
}