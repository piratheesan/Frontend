import React, { Component } from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'
import './Style.css'
import ReactDOM from 'react-dom';
import logo from '../image/SGIC.jpg';
import { browserHistory } from 'react-router';

export default class index extends Component {
      shoot() 
      {
        window.alert("Welcome To Add New Defect!");
        
      }
      handleClick = () => {
        browserHistory.push('/Adddefect');
      }


    render() 
    {       
        return (
            <div>
                <Header />
                <h1>Welcome To Defect Tracker System</h1>
                <div className="img1">           
                    <img src={logo} alt="logo" height="350px" width="350px"/>
                </div>  
                <div className="index_btn">
                    <button className="Add" onClick={this.shoot}>Add New Defect</button>
                    &emsp;<button className="View" onClick={this.handleClick}>View Defect</button>
                </div>                            
                <br></br><br></br><br></br>
                <Footer />
            </div>
        )
    }
}

