import React, { useEffect, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {postAccountBlc,getuserProfile ,getuserData,postBitCoinBlc} from "../../redux/actions/index"

const BuyBitcoin = () => {
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

  const BuyBitCoin = (e) =>{
    const validMoney = Number(ammountBLC) * Number(BitPrice)
    if(acBlc<validMoney){
      alert("You Have Not Enough  Money")
    }else{
      const vall2 = Number(ammountBLC) + Number(bitBlc)
      const vall3 = Number(ammountBLC) * Number(BitPrice)
      const vall = Number(acBlc) - Number(vall3)
      dispatch(getuserData(id))

      dispatch(postAccountBlc({id,vall}))
      dispatch(postBitCoinBlc({id,vall2}))
      navigate("../dashbord")
  }
  }

  return (
    <>
    <div>
      <h2>Buy Bit Coins</h2>
    </div>
    <h5 className="card-title mt-4"><i className="fab fa-bitcoin bitcoin-icon"></i><span className="script-name"> 1 Bitcoin BTC = 20 USD</span></h5>
      <div className="input-group mt-4 w-50">
        <span className="input-group-text">$</span>
        <input type="number" name="bitcoin-amount" className="form-control" onChange={handleChange}/>
        <span className="input-group-text">.00</span>
      </div>
      <button type="button" className="btn btn-primary mt-4" onClick={BuyBitCoin}> Buy Bitcoin </button>
    </>
  );
};

export default BuyBitcoin;
