// import React
import React, { Component } from 'react';
// import API
import API from '../utils/API';
import Button from '../components/Button';

class Search extends Component {
  state = {
    searchTerms: [],
    dogBreedImages: [],
    activeSearchTerm: ''
  };

  componentDidMount() {
    this.listOfBreeds();
  }

  listOfBreeds = () => {
    API.listOfBreeds()
      .then(res => {
        console.log(res);
        this.setState({
          searchTerms: res.data.message
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.findBreed(this.state.activeSearchTerm);
  };

  findBreed = breedName => {
    API.findBreed(breedName)
      .then(res => {
        console.log(res);
        this.setState({
          dogBreedImages: res.data.message,
          activeSearchTerm: ''
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Search for a doggo.</h1>
          <form className="form-inline">
            <input
              type="text"
              className="form-control mb-4 mr-sm4 mb-sm-0"
              value={this.state.activeSearchTerm}
              name="activeSearchTerm"
              onChange={this.handleInput}
              placeholder="Search for a dog breed"
              list="breeds"
            />

            {/* Preload list of breeds for autocompleting search box. NOTE: datalist id needs to match input's list property */}
            <datalist id="breeds">
              {this.state.searchTerms.map(breed => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </datalist>
            {/* Render reusable button */}
            <Button handleClick={this.handleSubmit} btnClass="btn-primary">Submit</Button>
          </form>
        </div>
        <div className="row">
        {/* Render dog images only if search was legitimate. Randomly order them, then map them */}
          {this.state.dogBreedImages !== "Breed not found" ? this.state.dogBreedImages
            .sort(() => {
              return 0.5 - Math.random();
            })
            .map(image => {
              return (
                <div key={image} className="col">
                  <img className="img-circle" src={image} alt="a doggo" />
                </div>
              );
            }) : <h3>No doggos found. Search our prepopulated list!</h3>}
        </div>
      </div>
    );
  }
}

export default Search;

// create class (stateful) component
// initial state for searchTerms, dogBreedImages, activeSearchTerm

// componentDidMount
// run listOfBreeds

// handleInput
// takes in input value and checks it against searchTerms and narrows down searchTerms based on that input
// stores in activeSearchTerm

// handleSubmit (event)
// event.preventDefault()
// pass activeSearchTerm into findBreed

// findBreed (breedArgument)
// runs API.findBreed and returns array of images for that dog's breed
// stores result in dogBreedImages state

// listOfBreeds
// runs API.listOfBreeds and returns array of breed names
// stores result in searchTerms

// render()
// return dom elements
// needs form input for searching
// maps over dogBreedImages for printing out images to DOM

// export default Search
