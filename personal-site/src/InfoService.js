// Declare info here, cleaner coding

// Images
import selfie from "./assets/profilepic.jpg";
import example1 from "./assets/code.jpeg";
import example2 from "./assets/code.jpeg";
import example3 from "./assets/code.jpeg";
import example4 from "./assets/code.jpeg";
import example5 from "./assets/code.jpeg";
import example6 from "./assets/code.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

// Projects
let projectItems = [
  {
    imageUrl: example1,
    title: "Example One",
    link: "#"
  },
  {
    imageUrl: example2,
    title: "Example Two",
    link: "#"
  },
  {
    imageUrl: example3,
    title: "Example Three",
    link: "#"
  },
  {
    imageUrl: example4,
    title: "Example Four",
    link: "#"
  },
  {
    imageUrl: example5,
    title: "Example Five",
    link: "#"
  },
  {
    imageUrl: example6,
    title: "Example Six",
    link: "#"
  }
];

// Personal Info
let firstName = "Neil";
let lastName = "Kyne";
let title = "Software Developer";
let bio = "I'm a recent Software Development graduate from GMIT. Feel free to check out some of my past projects below, browse some code on my github profile, or just reach out to say hi!"

// Links to social medias 
let links = [
  { 
    name: "LinkedIn",
    link: "exampleLink1.com",   
    icon: FaLinkedin
  },
  {
    name: "GitHub",
    link: "exampleLink2.com",
    icon: FaGithub
  },
  {
    name: "Email",
    link: "exampleLink3.com",
    icon: FaEnvelope
  },
  {
    name: "CV",
    link: "exampleLink4.com",
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

