import React, { Component } from 'react'
import './Style.css';
import Header from './header.jsx';
import Footer from './footer';


export default class Addproject extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="sty">              
                    <form className="form_style">
                        <br></br><br></br><br></br><br></br>                                        
                        <label>Name</label><br></br>
                        <input type="text" name="name" className="txtid"></input><br></br><br></br>     
                        <label>Description</label> <br></br>                 
                        <input type="text" name="type" className="txtid"></input><br></br><br></br>
                        <button className="save_but">Save</button>                       
                        &emsp;<input type="reset" Value="Reset" className="can_but"/> 
                        <br></br><br></br><br></br><br></br> <br></br><br></br> <br></br><br></br>                        
                    </form>
                    <br></br>                                                           
                </div>
                <Footer />
            </div>
        )
    }
}
