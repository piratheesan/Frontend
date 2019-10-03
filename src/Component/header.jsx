import React, { Component } from 'react'
import './Style.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

export default class header extends Component {
    render() {
        return (
           
            <div>                 
                <div className="header"> 
                           
                    <input type="text" placeholder="  Search.." name="search" className="id"></input>            
                    &nbsp;<input type="submit" className="search_but" value ="Submit"></input>&nbsp;&nbsp;                  
                </div>
            </div>
               
           
        )
    }
}
