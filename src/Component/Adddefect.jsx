import React, { Component } from 'react'
import './Style.css';
import Header from './header.jsx';
import Footer from './footer';


export default class Adddefect extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="sty">              
                    <form className="form_style">
                        <br></br>
                       
                            <label>Description</label><br></br>
                            <input type="text" name="description" className="txtid"></input><br></br><br></br>                                    
                            <label>Name</label><br></br>
                            <input type="text" name="name" className="txtid"></input><br></br><br></br>
                            <label>Employee ID</label><br></br>
                            <input type="text" name="name" className="txtid"></input><br></br><br></br>
                            <label>Priority </label><br></br>          
                            <select className="txtid" name="priority"> 
                                <option>---Please Select---</option>
                                <option >Low</option>
                                <option>High</option>
                            </select><br></br><br></br>
                            <label>Project ID</label><br></br>
                            <input type="text" name="project_id" className="txtid"></input><br></br><br></br>
                            <label>Severity</label><br></br>
                            <select className="txtid" name="severity">
                                <option>---Please Select---</option>
                                <option>Low</option>
                                <option>High</option>
                            </select><br></br><br></br>                        
                            <label>Status</label> <br></br>                       
                            <textarea type="text" name="status" className="txtid"></textarea><br></br> <br></br>
                            <label>EID</label> <br></br>                 
                            <input type="text" name="eid" className="txtid"></input><br></br><br></br>
                            <label>PID</label> <br></br>                 
                            <input type="text" name="pid" className="txtid"></input><br></br><br></br>
                            <button className="save_but">Save</button>
                            &emsp;<input type="reset" Value="Reset" className="can_but"/>  
                    </form>                                                           
                </div>
                <Footer />
            </div>
        )
    }
}
