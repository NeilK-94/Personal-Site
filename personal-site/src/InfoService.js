// Declare info here, cleaner coding

// Images
import selfie from "./assets/images/profilepic.jpg";
import example1 from "./assets/images/laptop.jpg";
import example2 from "./assets/images/cloud.jpg";
import example3 from "./assets/images/personal-site.jpg";
import example4 from "./assets/images/code.jpeg";
import example5 from "./assets/images/twitter.jpg";
import example6 from "./assets/images/unity.jpg";
import cv from "./assets/Software_CV.pdf";

import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

// Projects
let projectItems = [
  {
    imageUrl: example1,
    title: "Developer's Job Site",
    link: "https://github.com/NeilK-94/Applied-Project-4th-Year",
    description: "My final year project. A full stack web application with JWT authentication. Visit the repository for further information as well as the Heroku address."
  },
  {
    imageUrl: example2,
    title: "Web Opinion Visualiser",
    link: "https://github.com/NeilK-94/Artificial-Intelligence-Project-wcloud",
    description: "A final year Artificial Intelligence project. This application is compiled into a WAR file and deployed on an Apache Tomcat server."
    
  },
  {
    imageUrl: example3,
    title: "Personal Site",
    link: "https://github.com/NeilK-94/Personal-Site",
    description: "The current site! Built using React with React Materialize for styling. It was made over a weekend and is likely to change regularly!"
  },
  {
    imageUrl: example4,
    title: "Digit Recogniser",
    link: "https://github.com/NeilK-94/Emerging-Tech-Assessment",
    description: "This project uses a lot of different technologies. To put it briefly, it involves a trained neural network model predicting a digit drawn by the user."
  },
  {
    imageUrl: example5,
    title: "Tweepy Scripts",
    link: "https://github.com/NeilK-94/Tweepy-Scripts",
    description: "This repository contains a number of small, efficient python scripts that use 'tweepy' a python library for accessing the Twitter API."
  },
  {
    imageUrl: example6,
    title: "Space Shooter",
    link: "https://github.com/NeilK-94/Gesture-Based-Development-Project",
    description: "This is a Space Shooter game made in Unity which uses a Myo armband to control the player's ship! t also uses voice commands to navigate the menu."
  }
];

// Personal Info
let firstName = "Neil";
let lastName = "Kyne";
let title = "Software Developer";
let bio = "I'm a recent Software Development graduate from GMIT. Feel free to check out some of my past projects below, browse some code on my github profile, or just reach out to say hi!"

// Links to external resources 
let links = [
  { 
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/neil-kyne-64b786178/",   
    icon: FaLinkedin
  },
  {
    name: "GitHub",
    link: "https://github.com/NeilK-94",
    icon: FaGithub
  },
  {
    name: "Email",
    link: "mailto:neil.kyne@gmail.com",
    icon: FaEnvelope
  },
  {
    name: "CV",
    link: cv,
    icon: FaFileAlt
  }
];

export {
  firstName,
  lastName,
  title,
  bio,
  projectItems,
  selfie,
  links
};

