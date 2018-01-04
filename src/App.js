import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navpills from './components/Navpills';
import About from './pages/About';
import Discover from './pages/Discover';
import Search from './pages/Search';

const App = () => (
  <Router>
    <div className="container">
      <Navpills />
      <Route exact path="/" component={About} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/search" component={Search} />
    </div>
  </Router>
)

export default App;


