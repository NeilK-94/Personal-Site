import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/Home'
import ResourcesSection from './components/ResourcesSection'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/resources" exact component={ResourcesSection} />
      </Router>
    </div>
  );
}

export default App;
