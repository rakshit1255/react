import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import {removestudent,apiCALL} from '../../actions/index'
import { useEffect, useState } from 'react'
import { getAllData } from "../../actions/index";



const Exam = () => {

  const stdData = useSelector((state) =>state.allStdData)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("stdData")
    dispatch(getAllData())
  }, [])


  // const state = useSelector((state => state.apiDATA.apiINIT))
  console.log(stdData,"exam")

  return <div>
    {stdData.map((data) =>{
      return (<>
        <h5>{data.id}. {data.quote}</h5>
        <p>- {data.author}</p><br/>
        </>
      )
    })}
  </div>;
};

export default Exam;
