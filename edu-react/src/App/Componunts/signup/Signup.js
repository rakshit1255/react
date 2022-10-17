import React, { useState } from "react";
import'./Signup.css'
import login_img from '../../assats/sdsd2.jpg';
import   Axios  from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { postAllData } from "../../actions/index";

const Signup = () => {

    const [radio,setRadio] = useState("")
    const [initformdata,setINITFormData] = useState({})

    // const stdData = useSelector((state) =>state.allStdData)
  const dispatch = useDispatch()



    const handleChange = (event) => {
        const { name, value } = event.target;
        setINITFormData({ ...initformdata,role:radio, [name]: value });
      };

    const fineldata = async () => {
        // console.log(initformdata)
        // localStorage.setItem("usar",JSON.stringify(formdata))
        // await Axios.post("http://localhost:5000/usar",formdata)
        dispatch(postAllData(initformdata))
        
      };


    //   useEffect(() => {
    //     console.log("stdData")
    //     dispatch(getAllData())
    //   }, [])

    

    return (
    <>
  <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h1 className="mb-5">Sign Up</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name="fullName" onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="emailId" onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name="pass" onChange={handleChange}/>
                        </div>

                        <div className="radio-btn d-flex mb-4">
                        <div class="form-check ">
                            <input class="form-check-input" type="radio" name="radio" value="teacher" 
                            onChange={e=>{setRadio(e.target.value)}}
                            />
                            <label class="form-check-label" htmlFor="flexRadioDefault1">
                                Teacher
                            </label>
                        </div>
                        <div class="form-check ms-5">
                            <input class="form-check-input" type="radio" name="radio" value="student" 
                            onChange={e=>setRadio(e.target.value)}
                            />
                            <label class="form-check-label" htmlFor="flexRadioDefault2">
                                Student
                            </label>
                        </div>
                        </div>

                        

                        {radio=="" ? null 
                        : radio=="teacher" ?
                        <div className="teacher-feilds">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Teacher Address</label>
                                <input type="text" className="form-control" name="TCHadd" onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Subject</label>
                                <input type="text" className="form-control" name="subject" onChange={handleChange}/>
                            </div>
                         </div>
                        : radio=="student" ?
                        <div className="student-feilds">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                                <input type="text" className="form-control" name="STDadd" onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Standerd</label>
                                <input type="number" className="form-control" name="standers" onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                            <label  className="form-label">Date Of Birth :</label>
                            <input type="date" className="form-control" name="dob" onChange={handleChange}/>
                        </div>
                        </div>
                        : null}

                        <button type="submit" className="btn btn-primary" onClick={fineldata}>Submit</button>
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

export default Signup;
