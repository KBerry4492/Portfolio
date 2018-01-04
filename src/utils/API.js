// import axios

// set up base url for querying (refer to activities from today)

// export default object
  // random (used for discovery): https://dog.ceo/api/breeds/image/random
  
  // findBreed (used for search): https://dog.ceo/api/breed/hound/images

  // listOfBreeds (used for search): https://dog.ceo/api/breeds/list

import axios from 'axios';

const BASEURL = 'https://dog.ceo/api';

export default {
  random: function() {
    return axios.get(`${BASEURL}/breeds/image/random`);
  },
  findBreed: function(query) {
    return axios.get(`${BASEURL}/breed/${query}/images`);
  },
  listOfBreeds: function() {
    return axios.get(`${BASEURL}/breeds/list`);
  }
}
