import React, { Component } from 'react'
import './Style.css';
import Header from './header.jsx';
import Footer from './footer';


export default class Addemployee extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="sty">              
                    <form className="form_style">
                        <br></br><br></br>                                       
                        <label>Name</label><br></br>
                        <input type="text" name="name" className="txtid"></input><br></br><br></br>     
                        <label>Type</label> <br></br>                 
                        <input type="text" name="type" className="txtid"></input><br></br><br></br>
                        <label>Project Id</label> <br></br>                       
                        <textarea type="text" name="project_id" className="txtid"></textarea><br></br> <br></br>
                        <label>PID</label> <br></br>                 
                        <input type="text" name="pid" className="txtid"></input><br></br><br></br>
                        <button className="save_but">Save</button>
                        &emsp;<input type="reset" Value="Reset" className="can_but"/>                        
                    </form>
                    <br></br>                                                           
                </div>
                <Footer />
            </div>
        )
    }
}
