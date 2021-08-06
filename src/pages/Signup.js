import React, {useEffect, useState} from 'react';
import '../css/login.css';
import Axios from 'axios';

function Login()
{
    const [usernameReg, setUsernameReg] = useState(""); //no value passing thats why null
    const [emailReg, setEmailReg] = useState("");
    const [phoneReg, setPhoneReg] = useState("");
    const [shopReg, setShopReg] = useState("");
    const [gstReg, setGstReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [EmpList, setEmpList] = useState([]);    //not null

    //TO RETRIEVE DATA FROM NODE TO REACT
    useEffect(()=>{
        Axios.get("http://localhost:3001/getemp").then((response)=>{
            console.log(response);
            setEmpList(response.data);
        });
    },[]);

    const register = ()=>{
        Axios.post("http://localhost:3001/register",
        {
        //   id: idReg,
          username: usernameReg,
          password: passwordReg,
          email: emailReg,
          phone: phoneReg,
          shop: shopReg,
          gst: gstReg
        }).then(()=>{
          //console.log(response);
          setEmpList([...EmpList,{username:usernameReg,password:passwordReg,email:emailReg,phone:phoneReg,shop:shopReg,gst:gstReg},]);
          //this will directly set entries into table without refreshing
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
                    <h1>Registration Form</h1>
                  </div>
                  <div class="row clearfix">
                    <div class="">
                      <form>
                      <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                        <input type="text" name="name" placeholder=" Name" required
                        onChange={(e)=>{
                        setUsernameReg(e.target.value);
                       }} />
                      </div>
                        <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                          <input type="email" name="email" placeholder="Email" required
                          onChange={(e)=>{
                          setEmailReg(e.target.value);
                      }}/>
                        </div>
                        <div class="input_field"> <span><i aria-hidden="true" class="fa fa-phone"></i></span>
                          <input type="text" name="phone" placeholder="Phone Number" required
                          onChange={(e)=>{
                          setPhoneReg(e.target.value);
                      }} />
                        </div>
                        <div class="input_field"> <span><i aria-hidden="true" class="fa fa-home"></i></span>
                          <input type="text" name="shopname" placeholder="Shop Name" required
                          onChange={(e)=>{
                          setShopReg(e.target.value);
                      }} />
                        </div>
                        <div class="input_field"> <span><i aria-hidden="true" class="fa fa-money"></i></span>
                          <input type="text" name="gstnumber" placeholder="GST Number" required
                          onChange={(e)=>{
                          setGstReg(e.target.value);
                      }} />
                        </div>
                        <div class="row clearfix">
                          <div class="col_half">
                          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                            <input type="password" name="password" placeholder="Password" required
                            onChange={(e)=>{
                        setPasswordReg(e.target.value);
                    }} />
                          </div>
                          </div>
                          <div class="col_half">
                          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                            <input type="password" name="password" placeholder="Retype Password" required />
                          </div>
                          </div>
                        </div>
                            <div class="input_field radio_option">
                            <input type="radio" name="radiogroup1" id="rd1" />
                            <label for="rd1">Retailer</label>
                            <input type="radio" name="radiogroup1" id="rd2" />
                            <label for="rd2">Distributor</label>
                            <input type="radio" name="radiogroup1" id="rd3" />
                            <label for="rd3">Manufacturer</label>
                            </div>

                        <input class="button" type="submit" value="Register"
                        onClick={register} />
                        <div class="signup-link">Already have an account? <a href="/login">Login now</a></div>

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
