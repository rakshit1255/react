import React from "react";
import './Header.css'
import logo from '../../assat/crypto logo.png';
import { Link ,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLog } from "../../redux/actions/index"

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = () => {
        dispatch(authLog(false))
        localStorage.clear()
        navigate("/")
    }

    const auth = useSelector((state) => state.userdataReducer.authLog)

    return (<>

        <div className="navbar px-2">
            <nav className="navbar navbar-expand-lg p-2">

                <div className="container-fluid">
                    <a className="navbar-brand"><img src={logo} alt="logo" /></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className="fa-solid fa-bars-staggered"></i></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarText">
                        <ul className="navbar-nav m-auto ">

                            

                            <li className="nav-item">
                                <Link to='/' className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/student' className="nav-link active">Help</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contect' className="nav-link active">Contact Us</Link>
                            </li>
                        </ul>
                        <span className="navbar-text ">
                            <ul className="navbar-nav m-auto ">
                                
                                {auth?<li className="nav-item">
                                    <button onClick={logOut} className="btn btn-primary"> Log Out</button>
                                </li>:
                                <>
                                <li className="nav-item mx-3">
                                    <Link to='/login' className="btn btn-primary">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/signup' className="btn btn-primary ">Sign up</Link>
                                </li>
                                </>
                            }
                                
                            
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>
        </div>

    </>);

};

export default Header;
