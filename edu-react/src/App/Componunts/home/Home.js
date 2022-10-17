import React from "react";
import './Home.css';
import hero from '../../assats/ontario-elementary-school-rankings-2019.jpg';
import { Routes,Route,Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Home = () => {
  const auths = useSelector((state) =>state.auth)

  return (<>
    <div className="hero">
        <div className="hero-img">
            <img src={hero} alt="" />
        </div>
        <div className="hero-content">
            <h1>Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.</h1>

            {auths?null:<div className="hero-btn mt-5">
                <Link to="authlogin"><button className="btn btn-primary ms-4">Login</button></Link>
                <Link to="signup"><button className="btn btn-primary ms-4">Sign Up</button></Link>
            </div>}
            
        </div>
        <div className="hero-overlay"></div>
        
    </div>
  </>);
};

export default Home;
