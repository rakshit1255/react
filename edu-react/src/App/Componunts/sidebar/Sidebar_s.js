import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import stdDP from "../../assats/testimonial-1.png"

const Sidebar_s = () => {

  const usardata = JSON.parse(localStorage.getItem("usar"))

  return (<>
  <div className="sidebar-teach">
            <div class="sidebar-profile align-items-center mp-2">
              <div class="col-md-3 p-2">
                <img src={stdDP}  alt="..." />
              </div>
              <div class="col-md-9">
                <div class="card-body">
                  <h5 class="card-title">{usardata.fullName}</h5>
                  <p class="card-text"><small class="text-white">{usardata.emailId}</small></p>
                </div>
              </div>
            </div>

        <div className="sidebar-menus">
          <h5> <Link to="timetable">Time Table</Link></h5>
          <h5> <Link to="exam">Exam</Link></h5>
        </div>
        
      </div>
  </>);
};

export default Sidebar_s;
