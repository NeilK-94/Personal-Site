import React, { Component } from 'react'
import selfie from "../assets/profilepic.jpg";
export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div>
                <img src={selfie} className="Header-Selfie" alt="selfie" />
                  <div>
                    <h1>Neil Kyne</h1>
                    <h2>Web Developer</h2>
                  </div>
                </div>
                <p>
                I'm a recent Software Developerer graduate from GMIT. Feel free to check out some of my past projects below,
                browse some code on my github profile, or just reach out to say hi! 
                </p>
                



            </div>
        )
    }
}
