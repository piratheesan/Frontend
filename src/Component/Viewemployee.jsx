import React, { Component } from 'react';
import './Style.css';
import Header from './header.jsx';
import Footer from './footer';
import logo from '../image/home.png';
import logo1 from '../image/add.png';

export default class Viewemployee extends Component {
    render() {
        return ( 
                <div>                
                <Header />  
                <div className="loc">
                    <img src={logo1} alt="logo" height="45px" width="45px"/>&emsp;
                </div>
                <div className="loc1">
                <div>           
                    &emsp;<img src={logo} alt="logo" height="40px" width="40px"/>                
                </div>

                
                </div>
                <br></br><br></br>               
                <h1 className="title">List All Employee</h1> 
                <br></br>                   
                <table border="2" className="tbl1 form_style">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Project Id</th>
                        <th>Pid </th>
                        <th>Action</th>
                        
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Project Id</td>
                        <td>Pid</td>
                        <td>&nbsp;&nbsp;<button className="edit">Edit</button>&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;<button className="del">Delete</button></td>
                        
                    </tr>
                    
                </table>               
                <Footer />
                </div>           
        )
    }
}
 

