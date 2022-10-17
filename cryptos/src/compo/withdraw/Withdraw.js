import React, { useEffect, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {postAccountBlc,getuserProfile ,getuserData} from "../../redux/actions/index"

const Withdraw = () => {

  const [ammountBLC, setAmmountBLC] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userData = useSelector((state) => state.getuserProfile)
  const acBlc = useSelector((state) => state.userdataReducer.acBlc)


  const id = userData.id

  const handleChange = (e) =>{
    setAmmountBLC(e.target.value)
  }

  const WithdrawMoney = (e) => {
    const vall =Number(acBlc) - Number(ammountBLC)
    if(acBlc<ammountBLC){
      alert("You Have Not Enough Money")
    }else{
    dispatch(getuserData(id))
    console.log(vall,id,"vall")
    dispatch(postAccountBlc({id,vall}))
    navigate("../dashbord")}
  }


  return(
    <>
    <div>
      <h2>Withdraw Money</h2>
    </div>
    <h5 className="card-title mt-4"><i className="fab fa-bitcoin bitcoin-icon"></i><span className="script-name"> 1 Bitcoin BTC = 20 USD</span></h5> 
      <div className="input-group mt-5 w-50">
        <span className="input-group-text">$</span>
        <input type="number" name="add-money" className="form-control add-money" onChange={handleChange}/>
        <span className="input-group-text">.00</span>
      </div>
      <button type="button" className="btn btn-primary mt-4" onClick={WithdrawMoney}> Withdraw </button>
      
  </>
  );
};

export default Withdraw;
