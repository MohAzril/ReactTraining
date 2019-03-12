import React, {Component} from "react";
import MainRoute from "./Routes/MainRoute";
import {withRouter} from "react-router-dom";

// App styles
// import "./styles/App.css";
//Custom components
import Header from "./components/Header";

class AppRouter extends Component{
    postSignout = () =>{
        localStorage.removeItem("is_login");
        // localStorage.setItem("is_login",true);
        this.props.history.push("/");
    };
    render(){
        return (
            <div className="App">
                <Header postSignout={this.postSignout}/>
                <MainRoute/>
            </div>
        );
    }
}
export default withRouter(AppRouter);