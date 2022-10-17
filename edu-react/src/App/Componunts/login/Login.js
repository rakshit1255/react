import React, { useState } from "react";
import './Login.css'
import login_img from '../../assats/sdsd2.jpg';
import { Routes,Route,Link,useNavigate } from "react-router-dom";

const Login = () => {


    const [initformdata,setINITFormData] = useState({})
    const [formdata,setFormData] = useState({})
    const [isLogin, setIsLogin]= useState(false)

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setINITFormData({ ...initformdata, [name]: value });
    };

    function loginValidation(){

        const usardata=JSON.parse(localStorage.getItem("usar"))
        setFormData(initformdata)

        if(formdata.mail===usardata.emailId){
            if(formdata.pass===usardata.pass){
                if(formdata.radio===usardata.role){
                    setIsLogin(true)
                
                    if(formdata.radio=="teacher"){
                        navigate("../teacher");
                    }
                    if(formdata.radio=="student"){
                        navigate("../student");
                    }
                }
            }

        }else{
            alert("Please enter valid login")
        }
    }


    return (<>

        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h1 className="mb-5">Login</h1>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="mail" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label" >Password</label>
                            <input type="password" className="form-control" name="pass" id="exampleInputPassword1" onChange={handleChange}/>
                        </div>
                        <div className="radio-btn d-flex mb-4">
                        <div class="form-check ">
                            <input class="form-check-input" type="radio" name="radio"value="teacher"  id="flexRadioDefault1" onChange={handleChange}/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Teacher
                            </label>
                        </div>
                        <div class="form-check ms-5">
                            <input class="form-check-input" type="radio" name="radio" value="student" id="flexRadioDefault2" onChange={handleChange} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Student
                            </label>
                        </div>
                        </div>
        
                        {/* <p>Don't have account <span><Link to="signup"> Sign Up</Link></span> </p>  */}

                        <button type="button" className="btn btn-primary" onClick={loginValidation}>Submit</button>
                    </div>

                

                <div className="col-lg-6 col-md-12 col-sm-12 text-end">
                    <div className="login-img">
                        <img src={login_img} alt="" className="p-sm-0"/>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default Login;
