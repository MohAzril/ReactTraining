import React, { Component } from 'react';
// import logo from './logo.svg';
// import '../styles/style.css';

class Search extends Component {
  render() {
    return (
      <div className="Search my-4">
        <nav class="navbar sticky-top navbar-light bg-light justify-content-between">
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
      </div>
    );
  }
}

export default Search;
