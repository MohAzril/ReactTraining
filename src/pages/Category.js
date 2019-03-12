import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
// import logo from './logo.svg';
import '../styles/blog.css';
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import Search from '../components/Search.js'
import SideList from '../components/SideList.js'
import ListNews from '../components/ListNews'
import axios from 'axios';

//dummy date
import az from "../images/berita1.jpg"
import { async } from 'q';
import { withRouter } from 'react-router-dom';

//News API
const apiKey = "72aadd1aff8c490ea5c90d2e5225a042";
const baseUrl = "https://newsapi.org/v2/"
const urlHeadline = baseUrl + "top-headlines?" + "country=id&" + "pageSize=3&"+ "apiKey=" + apiKey;
const urlNews = baseUrl + "everything?" +"q=meme&" + "pageSize=3&"+ "apiKey=" + apiKey;

class Category extends Component {
constructor(props){
    super(props);
    this.state = {
        listNews:[],
        listTopNews:[],
        username:"",
        isLogin:false,
        // value:'',
        search:""
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

handleInputChange = e => {
    console.log("event", e.target.value);
    let value = e.target.value;
    this.setState(
        {
            search: value
        },
        () =>{
            this.searchNews(value);
        }
    );
};

handleOnClick = e => {
    let category = e.target.value;
    let self = this;
    axios.get(baseUrl+"everything?q="+category+ "&pageSize=3&"+ "apiKey=" + apiKey)
    .then(function(response){self.setState({listNews:response.data.articles});
    })
    .catch(function(error){
        console.log(error);
    }); 
};

searchNews = async keyword => {
    console.log("searchNews", keyword);
    const self = this;
    if(keyword.length>2){
        try{
            const response = await axios.get(
                baseUrl+"everything?q="+keyword+ "&pageSize=3&"+ "apiKey=" + apiKey
            );
            console.log(response);
            self.setState({listNews:response.data.articles});
        }
        catch (error){
            console.error(error);
        }
    }
};

render() {
    console.log("here render")
    // const news = this.state.ListNews;
    const is_login = JSON.parse(localStorage.getItem("is_login"));
    const {listNews, listTopNews, username, isLogin} = this.state;
    if(is_login === null){
        return <Redirect to={{ pathname: "/signin"}}/>;
    } else {
    return (
    <div className="Category">
        {/* <Header/> */}
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
            {/* <Search/> */}
            <button className="btn btn-primary" value="SepakBola" onClick={(e)=>this.handleOnClick(e)}>SepakBola</button>
            <button className="btn btn-primary" value="Meme" onClick={(e)=>this.handleOnClick(e)}>Meme</button>
            <button className="btn btn-primary" value="Thailand" onClick={(e)=>this.handleOnClick(e)}>Shawdikap</button>
            {/* <SideList/> */}
        </div>
        
        </div>
        </div>
        <Footer/>
    </div>
    );
  }}
}

export default withRouter(Category) ;