import React, {useEffect, useState} from 'react';
import '../css/login.css';
import Axios from 'axios';

function Login()
{
  const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const login = ()=>{
       Axios.post("http://localhost:3001/login",
       {
         email: email,
         password: password
       }).then((response)=>{
         console.log(response);
       });
   };

    return(
        <div className="register">
            <nav class="navbar navbar-inverse navbar-fixed-top ">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" href="/home">Logo</a>
                </div>
                <ul class="nav navbar-nav navbar-right">
                  <li class=""><a href="/home">Home</a></li>
                  <li><a href="home#about">About</a></li>
                  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Contact
                    <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="home#contact">Contact us</a></li>
                      <li><a href="home#team">Team</a></li>
                    </ul>
                   </li>
                  <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Signin</a></li>
                  <li><a href="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                </ul>
              </div>
            </nav>
            // <div class="container" id="container" >
            <div class="form_wrapper">
                <div class="form_container">
                  <div class="title_container">
                    <h1>Login Form</h1>
                  </div>
                  <div class="row clearfix">
                    <div class="">
                      <form>
                        <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                          <input type="email" name="email" placeholder="Email" required
                          onChange={(e)=>{
                        setEmail(e.target.value); //from line 10
                    }}/>
                        </div>
                        <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                          <input type="password" name="password" placeholder="Password" required
                          onChange={(e)=>{
                        setPassword(e.target.value);  //from line 11
                    }}/>
                        </div>

                            <div class="input_field radio_option">
                            <input type="radio" name="radiogroup1" id="rd1" />
                            <label for="rd1">Retailer</label>
                            <input type="radio" name="radiogroup1" id="rd2" />
                            <label for="rd2">Distributor</label>
                            <input type="radio" name="radiogroup1" id="rd3" />
                            <label for="rd3">Manufacturer</label>
                            </div>

                        <input class="button" type="submit" value="Login"
                        onClick={login} />
                         <div class="signup-link">Not a member? <a href="/signup">Signup now</a></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        // </div>
  )
}

export default Login;
