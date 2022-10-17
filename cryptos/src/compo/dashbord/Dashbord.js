import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getuserProfile,getuserData} from "../../redux/actions/index"

const Dashbord = () => {

    const [userDataState, setUserDataState] = useState({})
    const dispatch = useDispatch()  
  
    const userData = useSelector((state) => state.getuserProfile)
    const userData2 = useSelector((state) => state.userdataReducer.getuserData)
    const auth = useSelector((state) => state.userdataReducer.authLog)

    

    

    useEffect(()=>{
      // const id = userData.id
      dispatch(getuserData(userData.id))
      console.log(auth,"auth")
    }, [userData]);

  return (
    <>
    <div>
      <h1 className="px-3">Welcome ! {userData2.username}</h1>
    </div>

    <div className="crypto-card p-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"><i className="fab fa-bitcoin bitcoin-icon"></i> Bitcoin <span className="script-name">BTC / USD</span></h5>
          {/* <p className="card-text accountbalance">₿ 00.000000</p> */}
          <p className="card-text accountbalance">USD 20.00</p>
          {/* <Link to="../buybitcoin" className="btn btn-primary">Buy Bitcoin</Link> */}
        </div>
      </div>
    </div>
    
    <div className="dashbord-cards">
    <div className="blance-card p-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Your Account Balance</h5>
          <p className="card-text accountbalance">$ {userData2.accountbalance}</p>
          <Link to="../addmoney" className="btn btn-primary">Add Money</Link>
        </div>
      </div>
    </div>

    <div className="crypto-card p-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Your Crypto Balance</h5>
          {/* <p className="card-text accountbalance">₿ 00.000000</p> */}
          <p className="card-text accountbalance">₿ {userData2.bitcoinbalance}</p>
          <Link to="../buybitcoin" className="btn btn-primary">Buy Bitcoin</Link>
        </div>
      </div>
    </div>
    </div>
    
    </>
  );
};

export default Dashbord;
