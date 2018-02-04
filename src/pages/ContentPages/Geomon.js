// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, ImageLinkL} from "../../components/Nav";
import { Container, Row, Col, Playspace } from '../../components/Grid';
import data from "../../components/Images/screenshots.json";
import '../../css/style.css';


export class Geomon extends Component  {

  state = {
    data
  };

  render() {
    return (
      <div className = "Content">

        <Header title="Geomon!" text= "The map based pokemon catching app!" />
          <Link className="cLink" to="/portfolio"> Back </Link>
          <Container>

            <div className ="link-space">

            <Row>

              <Col size="3"></Col>
              <Col size="5">
                <ImageLinkL
                  name="Click for game"
                  image="/images/geomon/home.png" 
                  link="https://richwb.github.io/geolocator/"/>
              </Col>
            </Row>

            <Row>
              <Col size="2"></Col>
              <Col size="7">
                <Playspace>
                  <p> 
                    This <i>totally original</i> idea lets you travel around, catching adorable monsters from banks, hotels, restaurants and all kinds of other common locations.
                  <br/><br/>
                    Drag and drop the little yellow man to enter Street View, for extra immersion!"
                  </p>
                </Playspace>
              </Col>
              
            </Row>

            <Row>

            <Col size="1"></Col>
            <Col size="11">

            <Row>
              {this.state.data.filter(item => {
                    return item.type.includes("geomon")
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