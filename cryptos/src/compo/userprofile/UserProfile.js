import React from "react";
import "./UserProfile.css";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../sidebar/Sidebar";
import { Routes,Route } from "react-router-dom"; 
import Dashbord from "../dashbord/Dashbord";
import Addmoney from "../addmoney/Addmoney";
import BuyBitcoin from "../wallet/BuyBitcoin";
import Exchange from "../exchange/Exchange";
import Withdraw from "../withdraw/Withdraw";

const UserProfile = () => {

    // const userData = useSelector((state) => state.userdataReducer.userProfile)
    
    return (
        <>
            <div className="profile-main">
                <div className="d-flex ">
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="profile-bord p-4">
                        <Routes>
                            <Route path='/dashbord' element={<Dashbord />} />
                            <Route path='/' element={<Dashbord />} />
                            <Route path='/addmoney' element={<Addmoney />} />
                            <Route path='/buybitcoin' element={<BuyBitcoin />} />
                            <Route path='/withdraw' element={<Withdraw />} />
                            <Route path='/exchange' element={<Exchange />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>);
};

export default UserProfile;
