import React, { useEffect, useState } from "react";
import "./Sidebar.css"
import avtar from "../../assat/Avtar.jpg"
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getuserProfile,getuserData} from "../../redux/actions/index"

const Sidebar = () => {

    const dispatch = useDispatch()  

    const userData = useSelector((state) => state.getuserProfile)
    const userData2 = useSelector((state) => state.userdataReducer.getuserData)

    
    
    useEffect(()=>{
        // const id = userData.id
        dispatch(getuserData(userData.id))
    }, [userData]);
    
  return (
    <>
        <div className="sidebar-compo">
            <div className="sidebar-profile p-3">
                <div className="sidebar-profile-img">
                    <div className="sidebar-profiless">
                        <img src={avtar} alt="" />
                        <div className="sidebar-profile-info">
                            {/* <h5>fd</h5> */}
                            <h5>{userData2.username}</h5>
                            <p>$ {userData2.accountbalance}</p>
                            {/* <p>$ 00</p> */}
                        </div>
                    </div>  
                    <div className="sidebar-profile-icon">
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                    
                    {/* <BiMenu /> */}
                </div>  
            </div>
            <div className="sidebar-menu p-3">
                <ul>
                    <Link to="dashbord"><li><i class="fas fa-tachometer-alt"></i> Dashbord</li></Link>
                    <Link to="addmoney"><li><i class="fas fa-wallet"></i> Add Money </li></Link>
                    <Link to="buybitcoin"><li><i class="fas fa-coins"></i> Buy Bitcoin</li></Link>
                    <Link to="withdraw"><li><i class="fas fa-dollar-sign"></i> Withdraw</li></Link>
                    <Link to="exchange"><li><i class="fas fa-sync-alt"></i> Exchange</li></Link>
                </ul>
            </div>
        </div>
    </>
  );
};

export default Sidebar;
