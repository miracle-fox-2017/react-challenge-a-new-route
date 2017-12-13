import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './Home'
import NewsDetail from './NewsDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/:url" render={(props) => <NewsDetail {...props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
