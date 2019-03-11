import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
          <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 col-sm-12 left">
                    <div class="box">
                        <a href="#"><img id="logo" src="assets/img/logo/logo-alterra-academy.png" width="125px"/></a>    
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 right">
                    <div class="box">
                        <nav>
                            <ul>
                                <li><a class="active" href="#about">ABOUT</a></li>
                                <li><a href="./gallery.html" target="_blank">GALLERY</a></li>
                                <li><a href="./3-1-1-contact-us.html" target="_blank">CONTACT</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
              </div>
          </div>
      </header>
      </div>
    );
  }
}

export default Header;
