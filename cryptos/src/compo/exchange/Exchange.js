import React, { useEffect, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {postAccountBlc,getuserProfile ,getuserData,postBitCoinBlc} from "../../redux/actions/index"

const Exchange = () => {

  const [ammountBLC, setAmmountBLC] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userData = useSelector((state) => state.getuserProfile)
  const acBlc = useSelector((state) => state.userdataReducer.acBlc)
  const bitBlc = useSelector((state) => state.userdataReducer.bitBlc)

  const id = userData.id
  const BitPrice = 20

  const handleChange = (e) =>{
    setAmmountBLC(e.target.value)
  }

  const ExchangeBit = (e) => {
    // const vall = Number(acBlc) - Number(ammountBLC)

    if(bitBlc<ammountBLC){
      alert("You Have Not Enough Bit Coins")
    }else{
      const vall2 = Number(bitBlc) - Number(ammountBLC)
      const vall3 = Number(ammountBLC) * Number(BitPrice)
      const vall = Number(acBlc) + Number(vall3)
      dispatch(getuserData(id))

      dispatch(postAccountBlc({id,vall}))
      dispatch(postBitCoinBlc({id,vall2}))
      navigate("../dashbord")
  }
  }

  return(
    <>
    <div>
      <h2>Exchange Bitcoin</h2>
    </div>

      <div className="input-group mt-5 w-50">
        <span className="input-group-text">$</span>
        <input type="number" name="add-money" className="form-control add-money" onChange={handleChange}/>
        <span className="input-group-text">.00</span>
      </div>
      <button type="button" className="btn btn-primary mt-4" onClick={ExchangeBit}> Exchange Bitcoin </button>
      
  </>
  );
};

export default Exchange;

