import React, { useEffect, useState } from 'react'
import './Student.css'
import  Axios  from "axios";
import { Routes,Route,Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Sidebar_s from '../../Componunts/sidebar/Sidebar_s';
import Timetable from '../../Componunts/student_comp/Timetable';
import Exam from '../../Componunts/student_comp/Exam';


const Student = () => {

  const infos = useSelector((state) => state.stdReducers.info)
  // const apii = useSelector((state) => state.api)
  console.log(infos,"student_comp")
  


  return (
    <>
      <div className='main-teacher-page'>
      
        <div className="teacher-sidebar">
          <Sidebar_s />
        </div>
        <h1>{infos.subject}</h1>
        <h1>{infos.desc}</h1>
        <div className="teacher-data">
          <Routes>
            <Route path='/' element={<Timetable />} />
            <Route path='/timetable' element={<Timetable />} />
            <Route path='/exam' element={<Exam />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Student