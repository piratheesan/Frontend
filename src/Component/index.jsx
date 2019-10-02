import React, { Component } from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import './Style.css';
import logo from '../image/SGIC.jpg';
// import Nav from './NavBar.jsx';

export default class index extends Component 
{
    
    render() 
        {       
        return (
            <div>
                {/* <Nav /> */}
                <Header />
                
                <h1>Welcome To Defect Tracker System</h1>
                <div className="img1">           
                    <img src={logo} alt="logo" height="300px" width="300px"/>
                </div>  
                <div className="index_btn">
                    <button className="Add" >Employee Details</button>
                    &emsp;<button className="View">Defects Details</button>
                    &emsp;<button className="View">Projects Details</button>
                </div>                            
                <br></br><br></br><br></br>
                <Footer />
            </div>
        )
    }
}

