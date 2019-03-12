import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/blog.css';
import Search from '../components/Search.js'
import SideList from '../components/SideList.js'
import ListNews from '../components/ListNews'
import axios from 'axios';

//dummy date
import az from "../images/berita1.jpg"

//News API
const apiKey = "72aadd1aff8c490ea5c90d2e5225a042";
const baseUrl = "https://newsapi.org/v2/"
const urlHeadline = baseUrl + "top-headlines?" + "country=id&" + "pageSize=3&"+ "apiKey=" + apiKey;
const urlNews = baseUrl + "everything?" +"q=meme&" + "pageSize=3&"+ "apiKey=" + apiKey;

class Blog extends Component {
constructor(props){
    super(props);
    this.state = {
        listNews:[],
        listTopNews:[],
        username:"",
        isLogin:false
    };
}
componentDidMount = () =>{
    const self = this;
    axios.get(urlNews)
    .then(function(response){
        self.setState({listNews:response.data.articles });
        // handle response
        console.log(response.data);
    })
    .catch(function(error){
        // handle error
        console.log(error);
    });
    axios.get(urlHeadline)
    .then(function(response){
        self.setState({listTopNews:response.data.articles });
        // handle response
        console.log(response.data);
    })
    .catch(function(error){
        // handle error
        console.log(error);
    });
} 
  
render() {
    console.log("here")
    // const news = this.state.ListNews;
    const {listNews, listTopNews, username, isLogin} = this.state;
    
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
            {listNews.map((item,key) =>{
                const src_img = item.urlToImage === null ? az : item.urlToImage;
                const content = item.urlToImage !== null ? item.content : "";
                return <ListNews key={key} title={item.title} img={src_img} content={content}/>;
            })}
        </div>

        
        <div class="col-md-4">
            <Search/>
            <div className="SideList">
                <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center fav">
                    Artikel Favorit
                </li>
                {listTopNews.map((item,key) =>{
                const src_img = item.urlToImage === null ? az : item.urlToImage;
                const content = item.urlToImage !== null ? item.content : "";
                return <SideList index={key} title={item.title} img={src_img} content={content}/>;
                })}
                </ul>
            </div>
            {/* <SideList/> */}
        </div>
        
        </div>
        </div>

    </div>
    );
  }
}

export default Blog;
