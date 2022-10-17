import React, { useState } from "react";
import './Navbar.css'
import logo from '../../assats/edu-logo2.png';
import { Link,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { authLog } from "../../actions/index";
import { useEffect } from "react";

const Navbar = () => {

  const auths = useSelector((state) =>state.auth)

  // const auths = localStorage.getItem("auth")

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const logout = () =>  {
      dispatch(authLog(false))
      localStorage.setItem("auth",false)
      navigate("/")
  }

  return (<>
  
  <div className="navbar ">
    <nav className="navbar navbar-expand-lg bg-light p-2">

  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="logo"/></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span><i class="fa-solid fa-bars-staggered"></i></span>
    </button>
    
    <div className="collapse navbar-collapse justify-content-between" id="navbarText">
      
    {auths?<ul className="navbar-nav m-auto ">
        <li className="nav-item">
            <Link to='./' className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
            <Link to='./teacher' className="nav-link active">Teacher</Link>
        </li>
        <li className="nav-item">
            <Link to='./student' className="nav-link active">Student</Link>
        </li>
        <li className="nav-item">
            <Link to='./contect' className="nav-link active">Contect Us</Link>
        </li>
        <li className="nav-item">
            {/* <Link to='./'  className="nav-link active">Log Out</Link> */}
            {/* <button onClick={logout}>Log Out</button> */}
        </li>
        
      </ul>
      :
      <ul className="navbar-nav m-auto ">
        <li className="nav-item">
            <Link to='./' className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
            <Link to='./authlogin' className="nav-link active">Login</Link>
        </li>
        <li className="nav-item">
            <Link to='./signup' className="nav-link active">Signup</Link>
        </li>
        <li className="nav-item">
            <Link to='./contect' className="nav-link active">Contect Us</Link>
        </li>
      </ul>
      }
      
      {auths?<button className="btn btn-primary" onClick={logout}>Log Out</button>:<><span className="navbar-text ">
      <i class="fa-solid fa-headset"></i>
      <p>+91 888-822-6360</p>
      </span></>}
      
      
    </div>
  </div>
</nav>
  </div>

  </>);

};

export default Navbar;
