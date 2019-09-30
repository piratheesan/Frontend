import React, { Component } from 'react'
import './Style.css'


export default class header extends Component {
    render() {
        return (
           
            <div>                 
                <div className="header">                    
                    <input type="text" placeholder="  Search.." name="search" className="id"></input>            
                    &nbsp;<input type="submit" className="search_but"></input>&nbsp;&nbsp;                  
                </div>
            </div>
               
           
        )
    }
}
