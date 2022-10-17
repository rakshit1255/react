import React, { useEffect, useState } from 'react'
import Axios from "axios";
import stdDP from "../../assats/testimonial-1.png"
import { useDispatch, useSelector } from 'react-redux'
import {removestudent,apiCALL,getAllData} from '../../actions/index'
import { Link } from 'react-router-dom'

const ShowStudent = () => {
  const [student, setStudent] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllData())
  }, [])
  const stdData = useSelector((state) =>state.allStdData)

  useEffect(() => {
    loadstudent()
  }, [])

  const loadstudent = async () => {
    const result = await Axios.get("http://localhost:5000/student")
    setStudent(result.data)
  }
 

  const removestd = async (id) => {
    // dispatch(removestudent(id))
   await Axios.delete(`http://localhost:5000/student/${id}`)
   loadstudent()
  }

  return (
    <>
      <div>
        <h1 className="mb-4">Student Data</h1>
        {
          student.map((student) => {
            return (
              <>
                <div className='std-card mb-3'>
                  <div className='container'>
                    <div className='row align-items-center'>
                      <div className='col-md-2 col-sm-12 std-img'>
                        <img src={stdDP} alt="" />
                      </div>

                      <div className='col-md-4 col-sm-12 p-2 std-info'>
                        <h3>{student.fullname}</h3>
                        <h6>{student.email}</h6>
                        <h6 className="mt-2">{student.phone}</h6>
                      </div>
                      <div className='col-md-4 col-sm-12 p-2 std-info'>
                        <h5>Address :</h5>
                        <p>{student.address}</p>
                        <h6>Dob : {student.dob}</h6>
                        <h6>Std : {student.standers}</h6>
                      </div>
                      <div className='col-md-2 col-sm-12 text-center'>
                       <Link to={`/editstudent/${student.id}`}><button className='btn btn-primary mb-3'>Edit Profile</button></Link> 
                        <button className='btn btn-danger' onClick={() => removestd(student.id)}>Remove Student</button>
                      </div>
                    </div>
                  </div>
                </div>

              </>
            )
          })
        }

      </div>
    </>
  );
};

export default ShowStudent;
