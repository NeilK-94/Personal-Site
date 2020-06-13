import React from 'react';
import Header from "./Header";
import Projects from "./Projects";
import FooterSection from "./FooterSection";
import { Row } from "react-materialize";
import '../App.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Row>
        <Projects />
      </Row>
      <FooterSection />
    </div>
  );
}

export default Home;