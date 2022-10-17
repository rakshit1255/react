import React, { useEffect, useState } from 'react'
import './Teacher.css'
import  Axios  from "axios";
import Sidebar_t from '../../Componunts/sidebar/Sidebar_t';
import AddStudent from '../../Componunts/addstudent/AddStudent';
import { Routes,Route,Link } from "react-router-dom";
import ShowStudent from './ShowStudent';
import Impnotes from '../../Componunts/impnotes/Impnotes';
import { useSelector } from 'react-redux'

const Teacher = () => {

  const [student,setStudent] = useState([])
  const usardata=JSON.parse(localStorage.getItem("usar"))
  const auths = useSelector((state) =>state.auth)
  console.log(auths)

  useEffect(() => {
    loadstudent()
  },[])

  const cc= window.location.pathname
  

  const loadstudent = async () =>{
    const result = await Axios.get("http://localhost:5000/usar")
    setStudent(result.data)
  }

  // console.log(usardata)

  return (
    <>
    <div className='main-teacher-page'>

      <div className="teacher-sidebar">
        <Sidebar_t />
      </div>

      <div className="teacher-data">
        <Routes>
          <Route path='addstudent' element={<AddStudent/>}/>
          <Route path='showstudent' element={<ShowStudent/>}/>
          <Route path='impnotes' element={<Impnotes/>}/>
          <Route path='/' element={<ShowStudent/>}/>
        </Routes>
      </div>
      </div>
    </>
  )
}

export default Teacher








