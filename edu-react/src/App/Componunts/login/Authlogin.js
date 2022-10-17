import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from "react-router-dom";
import { authLog } from "../../actions/index";
import "./Login.css";
import login_img from '../../assats/sdsd2.jpg';


const Authlogin = () => {
    const intialValues = {
        emailid: "",
        password: "",
        radio: "",
    };
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(intialValues);

    const authsss = useSelector((state) => state.auth)
    const auths = localStorage.getItem('auth');

    

    useEffect(()=>{

        if(auths===true){
            navigate("/")
        }
    },[])

    // const auths = useSelector((state) =>state.auth)


    const dispatch = useDispatch()

    const loginValidation = (event) => {
        axios.get("http://localhost:5000/usar")
            .then((responses) => responses.data)
            .then((usersData) => {
                const user = usersData.find((user) => {
                    if (user.emailId === formValues.emailid){
                        if(user.pass === formValues.password){
                            return user;
                        }else{
                            alert("User Not Found")
                        }
                        }
                })


                if (user.emailId === formValues.emailid && user.pass === formValues.password) {
                    dispatch(authLog(true))
                    localStorage.setItem("auth",true)
                    navigate(`/${user.role}`)
                    localStorage.setItem("usar",JSON.stringify(user))
                }else{
                    alert("User Not Found")
                }
            })
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h1 className="mb-5">Login</h1>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="emailid" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label" >Password</label>
                            <input type="password" className="form-control" name="password" id="exampleInputPassword1" onChange={handleChange} />
                        </div>

                        <button type="button" className="btn btn-primary" onClick={loginValidation}>Submit</button>
                    </div>
                    
                    <div className="col-lg-6 col-md-12 col-sm-12 text-end">
                        <div className="login-img">
                            <img src={login_img} alt="" className="p-sm-0" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Authlogin;
