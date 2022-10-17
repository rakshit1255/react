import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {addToDo,deleteToDo,removeToDo} from '../../actions/index'
import './ToDo.css';

const ToDo = () => {
  const [inputData,setInputData] = useState("")
  const dispatch = useDispatch()
  const list = useSelector((state)=>state.todoreducers.list)
  return(
    <>
  <div className="ToDo">
      <div>
        <h1>Add To-Dos</h1>
      </div>

    
      <div className="inputs">
        <p>Set To-Dos :</p>
        <input type="text" className="textInput" value={inputData} onChange={(e)=>{setInputData(e.target.value)}}/>
        <button className=' ToDobtn' onClick={ () => dispatch(addToDo(inputData),setInputData("")) }>Add ToDo</button>
      </div>
  </div>
    
    <div>
      {
        list.map(
          (value,index)=>{
            
            return(
              <>
              <div className="todos" key={value.id}>
                <h3 >{value.data}</h3>
                <button className='buttonHome' onClick={ () => dispatch(deleteToDo(value.id)) }>Remove</button>
              </div>
              </>
            )
          }
        )
      }
    </div>
  </>)
};

export default ToDo;

