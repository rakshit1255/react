import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import {addToDo,deleteToDo,removeToDo} from '../../actions/index'

const TodoPage = () => {

const dispatch = useDispatch()
const list = useSelector((e)=>e.todoreducers.list)



  return (<>
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

export default TodoPage;
