import React, { Component } from 'react'
import selfie from "../assets/profilepic.jpg";
/* TODO:
    1. Add links to your social media in the header.. email, linkedIn, CV and Github..? Can use an icon pack for them
    2. Add a navbar, looks weird without it. Maybe Have links in that rather than header. 
    3. Consider adding a form for a user to enter their name email and message. Forward it to your email
    4. Or failing that just an option to be contacted by me by entering their email 
    5. Deploy.. Look into something other than heroku..
    */
export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-Selfie-and-Name">
                <img src={selfie} className="Header-Selfie" alt="selfie" />
                <hr />
                  <div className="Header-Name-Title-Block">
                    <h1 className="Header-Name">Neil Kyne</h1>
                    <h2 className="Header-Title">Web Developer</h2>
                  </div>
                </div>
                {/* Need to add all personal info to a seperate file later, make code cleaner */}
                <p className="Header-Bio"> 
                I'm a recent Software Developerer graduate from GMIT. Feel free to check out some of my past projects below,
                browse some code on my github profile, or just reach out to say hi! 
                </p>
            </div>
        )
    }
}