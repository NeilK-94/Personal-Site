import React from 'react';
import './App.css';
import { Row } from 'react-materialize'
import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
// import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Header />
      <Row>
        <Projects />
      </Row>
      <Footer />
    </div>
  );
}

export default App;
