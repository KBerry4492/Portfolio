import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from './components/Grid'
import NoMatch from './pages/NoMatch';
import { Geomon, Hanafuda, Artwork, ThreeD, TwoD, AllCards } from './pages/ContentPages';
import { About, Portfolio, Contact } from './pages/Main';
import {Nav} from './components/Nav';
import "./css/style.css"
// <Footer/>, Footer

const App = () => (
  <Router>
    <Container >
      <Nav />
      <Switch>
		<Route exact path="/" component={About} />
      	<Route exact path="/portfolio" component={Portfolio} />
      	<Route exact path="/contact" component={Contact} />
      	<Route exact path="/geomon" component={Geomon} />
      	<Route exact path="/hanafuda" component={Hanafuda} />
      	<Route exact path="/artwork" component={Artwork} />
      	<Route exact path="/3D" component={ThreeD} />
      	<Route exact path="/2D" component={TwoD} />
        <Route exact path="/allCards" component={AllCards} />
        <Route component={NoMatch} />
      </Switch>
      
    </Container>
  </Router>
);

export default App;

