// import React
import React, { Component } from 'react';
import { Header } from "../../components/Nav";
import { Container, Row, Col } from '../../components/Grid';

export class Contact extends Component  {
  state = {
    headText:"I can be also reached at kmb23@comcast.net.",
    nameInput:"",
    emailInput:"",
    commentField:""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();



    this.setState({
      headText:"Thank you for commemting.",
      nameInput:"",
      emailInput:"",
      commentField:""
    })
  };

  render() {
    return (
      <Container>

        <Row>
          
          <Col size="12">


            <Header title="Contact" text= {this.state.headText} />

            <Row>

              <Col size="1"></Col><Col size="10">

                <form>

                  <div className="form-group">
                    <label>Please leave your name:</label>
                    <input 
                     className="form-control" 
                     name="nameInput" 
                     placeholder="Name"
                     onChange={this.handleInputChange}
                     value={this.state.nameInput} />
                  </div>

                  <div className="form-group">
                    <label>If you wish to be contacted, your email address:</label>
                    <input
                     type="email" 
                     className="form-control" 
                     name="emailInput" 
                     placeholder="Email Address"
                     onChange={this.handleInputChange}
                     value={this.state.emailInput} />
                  </div>

                  <div className="form-group">
                    <label>And any comments you have below:</label>
                    <textarea
                     className="form-control" 
                     placeholder="Leave us a comment"  
                     rows="10" 
                     name="commentField" 
                     onChange={this.handleInputChange}
                     value={this.state.commentField} />
                  </div>
                   
                  <button type="submit" className="btn btn-info" onClick={this.handleFormSubmit}>Submit</button>
                </form>

              </Col>
              
            </Row>
          </Col>  
        </Row>
      </Container>
    )
  }
}