import React, { Component } from 'react';
// import logo from './logo.svg';
// import '../styles/style.css';
import '../styles/blog.css';

class SideList extends Component {
  render() {
    return (
      <div className="SideList">
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center fav">
            Artikel Favorit
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Artikel 1
            <span class="badge badge-primary badge-pill">1</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Artikel 2
            <span class="badge badge-primary badge-pill">2</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Artikel 3
            <span class="badge badge-primary badge-pill">3</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideList;
