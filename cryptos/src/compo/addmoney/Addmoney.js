import React, { useEffect, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {postAccountBlc,getuserProfile ,getuserData} from "../../redux/actions/index"

const Addmoney = () => {

  const [accountblc, setAccountBLC] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userData = useSelector((state) => state.getuserProfile)
  const acBlc = useSelector((state) => state.userdataReducer.acBlc)


  const id = userData.id

  const handleChange = (e) =>{
    setAccountBLC(e.target.value)
  }

  const addBLC = (e) =>{
    console.log(accountblc,acBlc,"acBlc")
    const vall = Number(accountblc)+Number(acBlc)
    dispatch(getuserData(id))
    dispatch(postAccountBlc({id,vall}))
    navigate("../dashbord")
  }
  
  return (<>
    <div>
      <h2>Add Money</h2>
    </div>

      <div className="input-group mt-5 w-50">
        <span className="input-group-text">$</span>
        <input type="number" name="add-money" className="form-control add-money" onChange={handleChange}/>
        <span className="input-group-text">.00</span>
      </div>
      <button type="button" className="btn btn-primary mt-4" onClick={addBLC}>Add Money </button>
      
  </>);
};

export default Addmoney;
