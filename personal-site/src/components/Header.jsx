import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {
  firstName,
  lastName,
  title,
  bio,
  selfie,
  links
} from "../InfoService";
/* TODO:
    2. Add a navbar, looks weird without it. Maybe Have links in that rather than header. 
    3. Consider adding a form for a user to enter their name email and message. Forward it to your email
    4. Or failing that just an option to be contacted by me by entering their email 
    */
export default class Header extends Component {
    render() {
      const headerLink = {
        fontFamily: "Roboto Mono",
        textEmphasis: "center",
        position: "absolute",
        right: "30px",
        top: "20px"
      
      };
        return (
            <div className="Header">
              <Link style={headerLink} to='/resources'>Resources</Link>
                <div className="Header-Selfie-and-Name">
                <img src={selfie} className="Header-Selfie" alt="selfie" />
                <hr />
                  <div className="Header-Name-Title-Block">
                    <h1 className="Header-Name">{firstName} {lastName}</h1>
                    <h2 className="Header-Title">{title}</h2>
                  </div>
                </div>
                <p className="Header-Bio">{bio}</p>
                <div className="Header-Links">
                  {links.map(function(item, index) {
                    return (
                      <a key={index} href={item.link}>
                        {
                          <item.icon className="link-icon" />
                        }
                      </a>
                    );
                  })}
                </div>
              </div>
        )
    }
}