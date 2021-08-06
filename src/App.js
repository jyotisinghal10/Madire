import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import logoblack from './logoblack.png';

// import {Helmet} from "react-helmet";
function App() {
  return (
    <div className="App">
    <nav class="navbar navbar-inverse navbar-fixed-top ">
     <div class="container-fluid">
       <div class="navbar-header">
         <a class="pull-left" href="/"><img src={logoblack} alt="" /></a>
       </div>
       <ul class="nav navbar-nav navbar-right">
         <li><a href="/home">HOME</a></li>
         <li><a href="#abt">ABOUT</a></li>
         <li class="dropdown">
           <a class="dropdown-toggle" data-toggle="dropdown" href="#">CONTACT
           <span class="caret"></span></a>
           <ul class="dropdown-menu">
             <li><a href="#contact">CONTACT US</a></li>
             <li><a href="#team">TEAM</a></li>
           </ul>
         </li>
         <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> SIGNIN</a></li>
         <li><a href="/signup"><span class="glyphicon glyphicon-user"></span> SIGNUP</a></li>
       </ul>
     </div>
    </nav>

    <Router>

          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/signup' component={Register}/>
            <Route path='/login' component={Login}/>
          </Switch>


        </Router>

  </div>
  );
}

export default App;
