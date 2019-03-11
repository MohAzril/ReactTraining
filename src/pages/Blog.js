import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/blog.css';
import Search from '../components/Search.js'
import SideList from '../components/SideList.js'

class Blog extends Component {
  render() {
    return (
    <div className="Blog">
        
        <div class="container-fluid">
        <div class="row">
        
        <div class="col-md-8">
            <h1 class="my-4">Laba-laba Beracun <small> Dibakar Hidup-Hidup</small></h1>
            <div class="card mb-4">
                <img class="card-img-top" src={require("../images/berita1.jpg")} alt="Card image cap"/>
                <div class="card-body">
                    <h2 class="card-title">Post Title</h2>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                    <a href="#" class="btn btn-primary">Read More &rarr;</a>
                </div>
                <div class="card-footer text-muted">
                    Posted on January 1, 2017 by
                    <a href="#">Start Bootstrap</a>
                </div>    
            </div>    
        </div>

        
        <div class="col-md-4">
            <Search/>
            <SideList/>
        </div>
        
        </div>
        </div>

    </div>
    );
  }
}

export default Blog;
