import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="menu">
        <nav>   
          <ul>
            <li style={{marginRight:"3rem", }}><NavLink to={'/Logo'} className={'nav'}><img style={{height: "44px", width: "88%", background: "white"}} src="companylogo.png" alt=""/></NavLink></li>
            <li><NavLink to={'/Home'} className={'nav'}>HOME</NavLink></li>
            <li><NavLink to={'/About'} className={'nav'}>ABOUT US</NavLink></li>
            <li><NavLink to={'/StudyMaterial'} className={'nav'}>STUDY MATERIALS</NavLink></li>
            <li><NavLink to={'/OnlineExam'} className={'nav'}>ONLINE EXAM</NavLink></li>
            <li><NavLink to={'/Contact'} className={'nav'}>CONTACT US</NavLink></li>
            <li><NavLink to={'/Login'} className={'nav'}><button style={{background: "rgb(10 119 241)", color: "white", padding:"10px", marginLeft: "2rem", width: "5rem"}}>Login</button></NavLink></li>
            <li><NavLink to={''} className={'nav'}><img src="profile.jpg" alt="" style={{marginLeft:"1rem", height:"50px", width:"80%"}}/></NavLink></li> 
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
