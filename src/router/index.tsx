import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from '../components/Header';

import { About } from '../views/About';
import { Home } from '../views/Home';
import { Topics } from '../views/Topics';

const TheRouter: React.FC = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default TheRouter;
