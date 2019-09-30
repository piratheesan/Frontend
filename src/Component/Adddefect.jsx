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
                        <label>Name</label><br></br>
                        <input type="text" name="name" className="txtid"></input><br></br><br></br>
                        <label>Severity</label><br></br>
                        <select className="txtid" name="sev">
                            <option>---Please Select---</option>
                            <option>Low</option>
                            <option>High</option>
                        </select><br></br><br></br>
                        <label>Priority</label><br></br>          
                        <select className="txtid" name="pri"> 
                        <   option>---Please Select---</option>
                            <option >Low</option>
                            <option>High</option>
                        </select><br></br><br></br>
                        <label>Assigned Project</label> <br></br>                 
                        <input type="text" name="assign_pro" className="txtid"></input><br></br><br></br>
                        <label>Status</label> <br></br>                       
                        <textarea type="text" name="status" className="txtid"></textarea><br></br> <br></br>
                        <button className="save_but">Save</button>
                        &emsp;<button className="can_but">Cancel</button>
                    </form>                                                           
                </div>
                <Footer />
            </div>
        )
    }
}
