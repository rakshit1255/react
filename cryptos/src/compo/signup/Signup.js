import React, { useEffect, useState } from "react";
import "./Signup.css"
import loginIMG from "../../assat/big_shield_icon.png"
import { useDispatch, useSelector } from "react-redux";
import { postLoginData } from "../../redux/actions/index";

const Signup = () => {

  const [signupormData, setSignUpFormData] = useState({})

  const dispatch = useDispatch()

  const handleChangeSignUp = (e) => {
    setSignUpFormData({
      ...signupormData,
      [e.target.name]: e.target.value,
      accountbalance:0.00,
      bitcoinbalance:0.00000,
    });
  };

  const handleSubmitSignUp = () => {
    console.log("Submit",signupormData)
    dispatch(postLoginData(signupormData))
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
                        <h2 className="signup-title">Sign Up</h2>
                            <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label" >Full Name :</label>
                                    <input type="text" name="username" className="form-control" onChange={handleChangeSignUp}/>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" >Email address :</label>
                                    <input type="email" name="email" className="form-control" onChange={handleChangeSignUp}/>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" >Mobile No . :</label>
                                    <input type="number" name="number" className="form-control" onChange={handleChangeSignUp}/>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" >Password :</label>
                                    <input type="password" name="password" className="form-control" onChange={handleChangeSignUp}/>
                                </div>


                                <button onClick={handleSubmitSignUp} type="button" className="btn btn-primary btn-block">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
};

export default Signup;
