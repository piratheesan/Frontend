import React, { Component } from 'react';
import './Style.css';
import Header from './header.jsx';
import Footer from './footer';


export default class Viewdefect extends Component {
    render() {
        return ( 
                <div>                
                <Header />                
                <h1 className="title">List Of All Defects</h1> 
                                       
                <table border="2" className="tbl1 form_style">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Severity</th>
                        <th>Priority</th>
                        <th>Assigned Project</th>
                        <th>Status</th>
                        <th>Action</th>
                        
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Severity</td>
                        <td>Priority</td>
                        <td>Assigned Project</td>
                        <td>Status</td>
                        <td>&nbsp;&nbsp;<button className="edit">Edit</button>&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;<button className="del">Delete</button></td>
                        
                    </tr>
                    
                </table>               
                <Footer />
                </div>           
        )
    }
}
 

