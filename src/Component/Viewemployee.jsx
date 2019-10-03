import React, { Component } from 'react';
import './Style.css';
import Header from './header.jsx';
import Footer from './footer';
import logo from '../image/home.png';
import logo1 from '../image/add.png';
import Mid from '../Component/Middle.jsx'

export default class Viewemployee extends Component {
    render() {
        return ( 
                <div>                
                <Header />                  
                <Mid />
                <div className="loc">
                <a href="/Viewempform"><button className="btn_add1"><i className="fa fa-plus" >&nbsp;Add New</i></button></a>
                </div>
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
                        <td>&nbsp;&nbsp;<button className="edit">
                        <i className="fa fa-edit">
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
 

