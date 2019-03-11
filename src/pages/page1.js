import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/style.css';

class Isi extends Component {
  render() {
    return (
    <div className="Isi">
        <div id="banner">
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="box">
                    <br/>
                    <br/>
                    <span class="profil"></span>
                    <h1 class="nama">Nama Lengkap</h1>
                    <div class="Alamat">     
                        <img class="alamat" src={require("../images/ico/ico-location@2x.png")}/>
                        <p class="alamat">Malang, East Java, Indonesia</p><br/>
                    </div>
                    <div class="job">    
                        <p class="job">Frontend Dev, UI/UIX and Design</p>
                    </div>
                    <a href="" class="downloadcv">Download CV</a>
                </div>
            </div>
        </div>
        </div>
    </div>

    <div id="info">
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <div class="box">
                    <h2 id="about">About Me</h2>
                    <p>Hi! I am <strong>Nama Lengkap</strong>, I work as a <emp>Front-end Developer</emp> at <font color="orange">Alterra Group</font>.</p>
                    <p>Front-end Developer are constructive work websites use HTML,CSS, and JavaScript.</p>
                    <p>Front-end Developer are the people who make it design and develop the design untill became a website that can run.</p><br/>    
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="box">
                    <h2 id="infotext">Information</h2>
                    <table class="border">
                        <tr>
                            <td class="border"><strong>Age</strong></td>
                            <td class="border border-right-0">:</td>
                            <td class="border border-left-0"> 22 th</td>
                        </tr>
                        <tr>
                            <td class="border"><strong>Email</strong></td>
                            <td class="border border-right-0">:</td>
                            <td class="border border-left-0"> al@alphatech.id</td>
                        </tr>
                        <tr>
                            <td class="border"><strong>Address</strong></td>
                            <td class="border border-right-0">:</td>
                            <td class="border border-left-0"> Jalan jalan men</td>
                        </tr>
                    </table>     
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    );
  }
}

export default Isi;
