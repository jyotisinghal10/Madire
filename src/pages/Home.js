import React from 'react';
import '../App.css';
import AOS from 'aos';
import contact from '../contact.jpg';
import logoblack from '../logoblack.png';
import logo from '../logo.png';
import about from '../about.jpg';
// import Register from './signup';
// import Login from './login';
function Home()
{
    AOS.init({
     duration:800
   })
    return(
        <div>
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

           <div class="container-head">
             <a href="/"><img src={logo} alt="" /></a>
           </div>


           <div id="abt"><br/><br/></div>
           <div class="about" id="about">
             <table>
               <tr>
                 <td><span class="vertical-line"></span></td>
                 <td><img data-aos="fade-right" src={about} /></td>
                 <td>
                   <h1 data-aos="fade-down"
                   data-aos-easing="linear"
                   data-aos-duration="800">A Few Words About Us</h1><br/>
                   <p data-aos="fade-down"
                   data-aos-easing="linear"
                   data-aos-duration="800">As a value added subset of the actual sales force automation solution, Madire’s Retailer,
                         Distributor and Manufacturer website primarily, aims towards a real-time, seamless and direct collaboration
                         between the manufacturers, distributors and retailers, reducing field force expenses. Madire is an
                         easy-to-use mobile website that automates the ordering process for mobile phones. Through this flexible
                         and standalone website, the retailer can directly place the order, the distributor can view all orders and
                         update status accordingly, thereby, enhancing the rapport between them to a large extent. In a similar way,
                         there is a defined workflow between the company and the distributor, in which the distributor using the
                         Madire, can place order for themselves to the company.</p>
                 </td>
               </tr>
             </table>
           </div>



           <div class="services">
             <center><h1 data-aos="fade-up">Services</h1></center><hr/>
             <br/>
             <h4 data-aos="fade-up">
               Connect with multiple suppliers & distributors from a single website.<br/>
               Check product availability, pricing information and schemes across various mobile brands.<br/>
               Payment information and pending amounts to be paid to various distributors are readily available on the website.

             </h4>

             <div class="col-md-4">
               <div class="allservice"  data-aos="slide-right" data-aos-easing="ease-in-sine">
                 <a href="#">
                   <img class="manu" src="https://media.istockphoto.com/photos/factory-supervisor-monitoring-the-progress-of-several-projects-picture-id824861134?k=6&m=824861134&s=612x612&w=0&h=9MDadorn2ZIp-v3-wGpYiKxlNvXrYoasZmHJlgnDXK8=" alt="Manufacturer"/>
                   <h3>Manufacturer</h3>
                 </a>
               </div>
             </div>
             <div class="col-md-4">
               <div class="allservice"  data-aos="slide-right" data-aos-easing="ease-in-sine">
                 <a href="#">
                   <img class="manu" src="https://media.istockphoto.com/photos/small-business-owener-picture-id1057253610?k=6&m=1057253610&s=612x612&w=0&h=ZT6po0iVo4ZEZVy3Gv1rzO2CIocmp41ArKK_CRQbSSc=" alt="distributor"/>
                   <h3>Distributor</h3>
                 </a>
               </div>
             </div>
             <div class="col-md-4">
               <div class="allservice"  data-aos="slide-right" data-aos-easing="ease-in-sine">
                 <a href="#">
                   <img class="manu" src="https://media.istockphoto.com/photos/indian-man-customer-buyer-at-mobile-phone-store-south-asian-peoples-picture-id1129408874?k=6&m=1129408874&s=612x612&w=0&h=YaXB2gTxAoJjiLO3vc1xnSWUxg5tiVKQgwjmzMpkRB8=" alt="Retailer"/>
                   <h3>Retailer</h3>
                 </a>
               </div>
             </div>
           </div>



           <div id="contact"><br/><br/><br/><br/><br/></div>
           <div class="con" id="con">
             <div class="flex">
               <div><span class="vertical-line2"></span></div>
               <div>
                 <h1>Contact Us</h1><br/>

                 <table>
                   <tr>
                     <td><h4>First Name</h4></td>
                     <td><h4>Last Name</h4></td>
                   </tr>
                   <tr>
                     <td><input data-aos="fade-right" type="text" name="name" id="firstname"/></td>
                     <td><input data-aos="fade-right" type="text" name="name" id="lastname"/></td>
                   </tr>
                   <tr>
                     <td><h4>Email</h4></td>
                     <td><h4>Phone</h4></td>
                   </tr>
                   <tr>
                     <td><input data-aos="fade-right"  type="email" name="email" id="email"/></td>
                     <td><input data-aos="fade-right"  type="number" name="number" id="phone"/></td>
                   </tr>
                   <tr>
                     <td><h4>Your Message</h4></td>
                   </tr>
                   <tr>
                     <td colspan="2"><textarea data-aos="fade-right"  name="msg" id="msg" cols="85" rows="7"></textarea></td>
                   </tr>
                 </table>
               </div>
               <div>
                 <img src={contact} alt="" />
               </div>
             </div>
             <br/><br/>
             <button data-aos="flip-left" type="button" class="btn btn-primary">SEND MESSAGE</button>
           </div>
           <div class="flex-container">
             <div data-aos="fade-right">
               <p><span class="glyphicon glyphicon-earphone"></span></p>
               <p><a href="#">1234567890</a></p>
             </div>
             <div data-aos="fade-up">
               <p><span class="glyphicon glyphicon-envelope"></span></p>
               <p><a href="#">madire@gmail.com</a></p>
             </div>
             <div data-aos="fade-left">
               <p><span class="glyphicon glyphicon-map-marker"></span></p>
               <p><a href="#">1234567890</a></p>
             </div>
           </div>



          <div class="team" id="team">
           <center><h1><b>TEAM</b></h1></center>
           <div>
             <table width="100%">
               <tr>
                 <td width="33%">
                 <img data-aos="flip-up" src="https://media.istockphoto.com/photos/african-guy-learn-online-wearing-headset-looking-at-laptop-screen-picture-id1253877184?k=6&m=1253877184&s=612x612&w=0&h=e_FV5LCW0tl-VRoFlBIr6qCf_qMF_gZ-ASYeanigrt0=" alt="contact us" />
                 </td>
                 <td width="33%">
                 <img data-aos="flip-up" src="https://media.istockphoto.com/photos/african-guy-learn-online-wearing-headset-looking-at-laptop-screen-picture-id1253877184?k=6&m=1253877184&s=612x612&w=0&h=e_FV5LCW0tl-VRoFlBIr6qCf_qMF_gZ-ASYeanigrt0=" alt="contact us" />
                 </td>
                 <td width="33%">
                 <img data-aos="flip-up" src="https://media.istockphoto.com/photos/african-guy-learn-online-wearing-headset-looking-at-laptop-screen-picture-id1253877184?k=6&m=1253877184&s=612x612&w=0&h=e_FV5LCW0tl-VRoFlBIr6qCf_qMF_gZ-ASYeanigrt0=" alt="contact us" />
                 </td>
               </tr>
               <tr>
                 <td>
                   <h2><b>Jyoti Singhal</b></h2>
                   <p>singhaljyoti10@gmail.com</p>
                   <p>1234567890</p>
                 </td>
                 <td>
                   <h2><b>Jyoti Singhal</b></h2>
                   <p>singhaljyoti10@gmail.com</p>
                   <p>1234567890</p>
                 </td>
                 <td>
                   <h2><b>Jyoti Singhal</b></h2>
                   <p>singhaljyoti10@gmail.com</p>
                   <p>1234567890</p>
                 </td>
               </tr>
             </table>
           </div>
          </div>
        </div>
     )
 }

 export default Home;
