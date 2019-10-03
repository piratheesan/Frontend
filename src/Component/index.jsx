import React, { Component } from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import './Style.css';
import logo from '../image/SGIC.jpg';
import Emp from './Viewemployee.jsx'
import Viewemployee from './Viewemployee.jsx';


export default class index extends Component 
{
    
    render() 
        {       
        return (
          
            <div>
                <Header />                
               <h1>Welcome To Defect Tracker System</h1>
                <div className="img1">           
                    <img src={logo} alt="logo" height="300px" width="300px"/>
                </div>  
                <div className="index_btn">
                <a href = "/viewemp "><button className="Add" >Employee Details</button></a>
                &emsp;<a href = "/viewdef "><button className="View">Defects Details</button></a>
                &emsp;<a href = "/viewpro "><button className="View">Projects Details</button></a>
                </div>                            
                <br></br><br></br><br></br>
              
                <Footer />              
            </div>
          
        )
    }
}

