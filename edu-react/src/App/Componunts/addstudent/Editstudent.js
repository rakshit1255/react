import React, { useEffect, useState } from "react";
import './AddStudent.css'
import   Axios  from "axios";
import { useParams,useNavigate } from "react-router-dom";

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    console.log(id)
    const [studentdata,setstudentData] = useState(
    {
        fullname:"",
        email:"",
        pass:"",
        phone:"",
        address:"",
        standerd:"",
    })

    // const {fullname,email,pass,phone,address,standerd} = studentdata

    const handleChange22 = e => { 
        setstudentData({...studentdata,[e.target.name]:e.target.value})
    }

    const addStd = async () => {
        await Axios.put(`http://localhost:5000/student/${id}`,studentdata)
        navigate('/teacher/showstudent')
    };

    useEffect(()=>{
        loadstudent()
    },[])

    const loadstudent = async () => {
        const result = await Axios.get(`http://localhost:5000/student/${id}`)
        console.log(result)
      }

  return (
    <>
  <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h1 className="mb-3">Add Student</h1>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" name="fullname" onChange={handleChange22}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" onChange={handleChange22}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Mobile No.</label>
                            <input type="number" className="form-control" name="phone" onChange={handleChange22}/>
                        </div>

                        <div className="mb-3">
                            <label  className="form-label">Password</label>
                            <input type="password" className="form-control" name="pass" onChange={handleChange22}/>
                        </div>

                        <div className="mb-3">
                            <label  className="form-label">Date Of Birth :</label>
                            <input type="date" className="form-control" name="dob" onChange={handleChange22}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Student Address</label>
                            <input type="text" className="form-control" name="address" onChange={handleChange22}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Standerd</label>
                            <input type="number" className="form-control" name="standers" onChange={handleChange22}/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={addStd}>Add Student</button>
                    </div>
            </div>
        </div>
    </>
  );
};

export default EditStudent;
