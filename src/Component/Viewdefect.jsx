import React, { Component } from 'react';
import './Style.css';
import Header from './header.jsx';
import Footer from './footer';
import logo from '../image/home.png';
import logo1 from '../image/add.png';
import Mid from '../Component/Middle.jsx'

export default class Viewdefect extends Component {
    render() {
        return ( 
                <div>                
                <Header />                            
                <Mid />
                <div className="loc">
                <a href="/viewdefform"><button className="btn_add1"><i className="fa fa-plus" >&nbsp;Add New</i></button></a>
                </div>
                <h1 className="title">List All Defects</h1> 
                <br></br>                      
                <table border="2" className="tbl1 form_style">
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Name</th>
                        <th>Employee Id</th>
                        <th>Priority</th>
                        <th>Project Id</th>
                        <th>Severity</th>
                        <th>Status</th>
                        <th>EID</th>
                        <th>PID</th>
                        <th>Action</th>
                        
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>Description</td>
                        <td>Name</td>
                        <td>Employee Id</td>
                        <td>Priority</td>
                        <td>Project Id</td>
                        <td>Severity</td>
                        <td>Status</td>
                        <td>EID</td>
                        <td>PID</td>
                        <td>&nbsp;&nbsp;<button className="edit">
                        <i
                        className="fa fa-edit">
                        &nbsp;Edit</i></button>
                        &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;<button className="del">
                        <i className="fa fa-trash">                        
                        &nbsp;Delete
                        </i>
                        </button></td>
                        
                    </tr>
                    
                </table>               
                <Footer />
                </div>           
        )
    }
}
 

