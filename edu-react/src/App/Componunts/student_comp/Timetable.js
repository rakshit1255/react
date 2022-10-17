import React from "react";
import "./Student_comp.css"
import { useDispatch, useSelector } from 'react-redux'


const Timetable = () => {
  const infos = useSelector((state) => state.stdReducers.info)


  console.log(infos, "timetable")

  return (<>

    {infos.map((info) => {
      return (
        <>
        {/* <h2>{info.subject}</h2>
        <h2>{info.desc}</h2> */}
          <div>
            <div>
              <h6>Subject :</h6>
              <h2>{info.subject}</h2>
            </div>
            <div>
              <h6>Description :</h6>
              <h2>{info.desc}</h2>
            </div>
          </div>
        </>
      )
    })}


  </>);
};

export default Timetable;
