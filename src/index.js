import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Viewemployee from './Component/Viewemployee';
import Viewproject from './Component/Viewproject.jsx'
import Viewdefect from './Component/Viewdefect.jsx'
import Home from './Component/index.jsx'
import Empform from './Component/Addemployee.jsx'
import Proform from './Component/Addproject.jsx'
import Defform from './Component/Adddefect.jsx'

ReactDOM.render( <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}/> 
        <Route path='/home' component={Home}/>
        <Route path='/viewemp' component={Viewemployee}/>
        <Route path='/viewpro' component={Viewproject}/>
        <Route path='/viewdef' component={Viewdefect}/>
        <Route path='/viewempform' component={Empform}/>
        <Route path='/viewproform' component={Proform}/>
        <Route path='/viewdefform' component={Defform}/>

    </Switch>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
