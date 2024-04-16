import './navbar.css';
import navbar_logo from './menu.png';
import app_logo from './webappers.png'
import grid from './grid.png';
import { useState } from 'react';
import wrong_logo from './close.png'; 
import facebook_logo1 from './facebookb.png';
import whatsapp_logo1 from './whatsappb.png';
import twittter_logo1 from './twitter.png';
import instagram_logo1 from './instagramb.png';
import ux from './ux-design.png';
import phone from './programming.png';
import web from './app-development.png';
import webperson from './webimg1-removebg-preview.png';
import web_img from './binary-2380422_1920.jpg';
export default function Navbar()
{
  return(
       <>
     <Navbar1/>
    <Main/>
    <Lower/>
       </>

  )
}
function Navbar1()
{
    const[navbar1,setnavbar]=useState("navbar");
     function shownavbar()
     {
     setnavbar("navbar activenavbar");
     }
     function hidenavbar()
     {
     setnavbar("navbar");
     }
    return(
    <div className="navbarcontainer">
        <navbar className="logoandtitle">
          <div className="logo">
            <img src={app_logo} alt="" />
          </div>
          <div className="title">
            Web-pro
            </div>     
        </navbar>
        <div className={navbar1}>
            <div onClick={()=>{hidenavbar()}} 
            className="closeimg">
            <img width={16} height={16} 
            src={wrong_logo} alt="" />
            </div>
            <div className='home'>Home</div>
            <div>Courses</div>
            <div>Internship</div>
            <div>Contact</div>
            <button>Register</button>
        </div>
        <div className="navbutton">
            <img onClick={()=>{shownavbar()}} 
            src={navbar1==="navbar"? grid : navbar_logo} 
            alt="" />
        </div>
    </div>
  )
          
}
 function Main()
{
  return(
    <div className="maincontainer">
     <div className="mainimg">
       <div className="usersocial">
        <img src={whatsapp_logo1} alt="" />
        <img src={facebook_logo1} alt="" />
        <img src={instagram_logo1} alt="" />
        <img src={twittter_logo1} alt="" />
       </div>
      <img src={webperson} alt="" /> 
     </div>
     <div className="contents">
      <div className="maincontent">
      Be a Developer with me
      </div>
     <div className="subcontent">
      Make the New world with React
     </div>
     </div>
     <div className="fieldscontainer">
     <div className="fields">
      <div className="fieldheader">
        <div className="fieldimg">
        <img src={ux} alt="" />
        </div>
        <div className="fieldhead">
        UI Developer
        </div>
      </div>
      <div className="fielddata">
      A UI designer is someone who designs the graphical
       user interface of an app, website, or device that a
        human interacts with. For example, when you access
         a website or an app on your phone, there’s usually a 
         graphical interface that allows you to navigate and 
         achieve your goal
      </div>
      </div>
      <div className="fields">
     <div className="fieldheader">
        <div className="fieldimg">
        <img src={phone} alt="" />
        </div>
        <div className="fieldhead">
        App Developer
        </div>
      </div>
      <div className="fielddata">
      The best mobile app developers collect 
      user feedback and apply it to the design.
       This is a crucial part of the mobile 
       application design process. There are three 
       ways to understand your users. Create personas – characters
        developed to represent your target audience.
         Experience maps – help you explore all the possibilities
          for a single interaction.
      </div>
    </div>
    <div className="fields">
     <div className="fieldheader">
        <div className="fieldimg">
        <img src={web} alt="" />
        </div>
        <div className="fieldhead">
        Web Development
        </div>
      </div>
   <div className="fielddata">
   The web development process goes beyond deployment
    to include a variety of post-deployment tasks.
     Websites, in example, are frequently
      under ongoing maintenance, with new 
      items being uploaded on a daily basis. The
       maintenance costs increases immensely as 
       the site grows in size
   </div>
   </div>
   </div>
   </div>
  )
}
function Lower()
{
  return(
    <div className="lowercontainer">
      <div className="webimg">
        <img src={web_img} alt="" />
      </div>
      <div className="bannerdata">
        <div className="data1">
          Make The Best From the
        </div>
        <div className="data2">
           Best you
        </div>
        <button>Login</button>
      </div>
    </div>
  )
}