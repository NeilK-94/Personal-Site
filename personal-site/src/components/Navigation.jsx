import React, { Component } from 'react'
import { Navbar, Icon, NavItem } from 'react-materialize'

export default class Navigation extends Component {
    render() {
        return (
            <div className="Navbar">
                <Navbar className="Navbar-nav"
                    alignLinks="right"
                    brand={<a className="brand-logo" href="https://www.youtube.com/">Logo</a>}
                    id="mobile-nav"
                    menuIcon={<Icon>menu</Icon>}
                    options={{
                      draggable: true,
                      edge: 'left',
                      inDuration: 250,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 200,
                      preventScrolling: true
                    }}
                
                
                
                >
                  <NavItem className="Navbar-item" href="#">
                    Getting started
                  </NavItem>
                </Navbar>                
            </div>
        )
    }
}
