// import React
import React, { Component } from 'react';
// import API
import API from '../utils/API';
// import spinner
import Spinner from '../components/Spinner';
// import button
import Button from '../components/Button';

class Discover extends Component {
  state = {
    activeDogImage: '',
    imageLoaded: false,
    matchCount: 0,
  };

  componentDidMount() {
    this.newDogImage();
  }

  // Get random dog image
  newDogImage = () => {
    API.random()
      .then(res => {
        console.log(res);
        this.setState({
          activeDogImage: res.data.message,
          imageLoaded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Get value of button clicked
  handleVote = event => {
    console.log(event.target);
    console.dir(event.target.attributes)
    // Get data attribute to determine upvote or downvote
    const buttonValue = event.target.attributes.getNamedItem("data-vote").value;

    // if downvote, just get a new dog
    if (buttonValue === "down") {
      this.newDogImage();
    } else {
      // check if dog is a match
      const matchNum = 4;
      if (matchNum === Math.floor(Math.random() * 5)) {
        const matchCount = this.state.matchCount + 1;
        this.setState({
          matchCount
        });
      }
      this.newDogImage();

    }
  }

  render() {
    return (
      <div>
        <h1>Find a doggo.</h1>
        <div className="row text-center">
        {/* If image isn't loaded yet, render spinner instead */}
        {this.state.imageLoaded ? 
          <div className="col-md-4">
            <img src={this.state.activeDogImage} alt="your potential doggo" />
            {/* render buttons and pass props to them */}
            <Button handleClick={this.handleVote} btnVote='down' needsIcon={true} btnClass='btn-danger'/>
            <Button handleClick={this.handleVote} btnVote='up' needsIcon={true} btnClass='btn-success'/>
          </div>  : <Spinner />}

          
        </div>
        
        {this.state.matchCount ? <div className="row"><div className="well-lg">You have {this.state.matchCount} doggo friends!</div></div> : <h3>No doggo friended yet</h3>}

      </div>
    );
  }
}

export default Discover;

// create class (stateful) component
// initial state for friendCount, activeDogImage

// componentDidMount
// run newDogImage
// set state for activeDogImage

// handleVote
// takes in argument of true or false
// if true
// run Math.Random between 1-5
// if it's 5, then it's a match
// run newDogImage and get result
// update state friendCount by one
// update state activeDogImage by running random search API

// if false
// run newDogImage and get result
// udpate state activeDogImage to that result

// newDogImage
// runs API random dog image search

// render()
// return dom elements

// export default Discover
