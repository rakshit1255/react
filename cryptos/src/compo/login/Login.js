import React, { useEffect, useState } from "react";
import "./Login.css"
import loginIMG from "../../assat/big_shield_icon.png"
import { useDispatch, useSelector } from "react-redux";
import {userProfile,getuserProfile,authLog} from "../../redux/actions/index"
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Login = () => {
    const [loginformData, setLoginFormData] = useState({})
    const [userData, setuserData] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    localStorage.clear();
    localStorage.removeItem("userInfo");
    localStorage.setItem("auth", false);

    const handleChangeLogin = (e) => {
        setLoginFormData({
            ...loginformData,
            [e.target.name]: e.target.value
          });
      };
    
      const handleSubmitLogin = () => {
        localStorage.clear();
        axios.get("http://localhost:5000/users")
            .then((responses) => responses.data)
            .then((usersData) => {
                const user = usersData.find((user) => {
                    if (user.email === loginformData.email){
                        if(user.password === loginformData.password){
                            console.log("match")
                            dispatch(userProfile(user))
                            dispatch(getuserProfile(user))
                            dispatch(authLog(true))
                            localStorage.setItem("auth", true);
                            // localStorage.setItem("userInfo", JSON.stringify(user));
                            navigate("/userprofile/dashbord")
                            return user;

                        }else{
                            alert("User Password Not Matched")
                        }
                    }
                }
                )
                setuserData(user)
                // if (user.emailId === formValues.emailid && user.pass === formValues.password) {
                //     dispatch(authLog(true))
                //     localStorage.setItem("auth",true)
                //     navigate(`/${user.role}`)
                //     localStorage.setItem("usar",JSON.stringify(user))
                // }else{
                //     alert("User Not Found")
                // }
            })
      }

    return (
        <>
            <div className="login py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <img src={loginIMG} alt="" />
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12">
                        <h2 className="login-title">Login</h2>
                            <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label">Email address</label>
                                    <input type="email" id="form1Example1" className="form-control" name="email" onChange={handleChangeLogin}/>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label">Password</label>
                                    <input type="password" id="form1Example2" className="form-control" name="password" onChange={handleChangeLogin}/>
                                </div>

                                <div className="row mb-4">
                                    <div className="col">
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>

                                <button type="button" className="btn btn-primary btn-block" onClick={handleSubmitLogin}>Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
