import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Isi2 extends Component {
  render() {
    return (
    <div className="Isi2">
        <div class="kop">
        <div class="icon">
        <img src="assets/img/ico/ico-gallery.png"></img><h2>GALLERY</h2>
        </div>
        <hr/>
    </div>
    
    <div id="gambar">
        <div class="row 1">
            <div class="col-md-4 col-sm-6" style={{padding: 0}}>
                <div class="ke-1">
                </div>
            </div>
            <div class="col-md-4 col-sm-6"style={{padding: 0}}>
                <div class="ke-2">
                </div>
            </div>
            <div class="col-md-4 col-sm-6"style={{padding: 0}}>
                <div class="ke-3">
                </div>
            </div>
        </div>
        <div class="row 2">
            <div class="col-md-4 col-sm-6"style={{padding: 0}}>
                <div class="ke-4">
                </div>
            </div>
            <div class="col-md-4 col-sm-6"style={{padding: 0}}>
                <div class="ke-5">
                </div>
            </div>
            <div class="col-md-4 col-sm-6"style={{padding: 0}}>
                <div class="ke-6">
                </div>
            </div>
        </div>    
    </div>
    </div>
    );
  }
}

export default Isi2;
