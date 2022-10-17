import React from "react";
import './Home.css'
import {useState,useEffect} from 'react'
import moment from 'moment'


const Home = () => {
    

    const [currentdate, setCurrentdate] = useState("");
    const [currenttime, setCurrenttime] = useState("");
    const [fulld, setfulld] = useState(false);

    const [inputsdateschange, setInputsdateschange] = useState("");
    const [inputstimechange, setInputstimechange] = useState("");
    const [inputstodochange, setInputstodochange] = useState("");
    const [inputsdate, setInputsdate] = useState("");
    const [inputstime, setInputstime] = useState("");
    const [inputstodo, setInputtodo] = useState("");

    const [matchingdate, setMatchingdate] = useState("");
    const [snooz, setSnooz] = useState(0);

    

    const getDates= (e) => { 
        setInputsdateschange(e.target.value);
    }
    const getTimes= (e) => { 
        setInputstimechange(e.target.value);
    }
    const getTodo= (e) => { 
        setInputstodochange(e.target.value);
    }


    const addReminder=()=>{
        if(inputsdateschange==""){
            alert("Please Enter a date")
        }else if(inputstimechange==""){
            alert("Please Enter a Time")
        }else if(inputstodochange==""){
            alert("Please Enter a ToDo")
        }
        else{
        setInputsdate(inputsdateschange+ " , ")
        setInputstime(inputstimechange)
        setInputtodo(inputstodochange)
        setfulld(true)
        }
    }


    const setDate = ()=>{

        function addZero(i) {
            if (i < 10) {i = "0" + i}
            return i;
          }
    
        const date = new Date();

        const date1 = addZero(date.getDate());
        const month2 = addZero(date.getMonth()+1);
        const year3 = addZero(date.getFullYear());
        const fdate = `${year3}-${month2}-${date1}`;

        const hour = addZero(date.getHours());
        const minute = addZero(date.getMinutes());
        const sec = addZero(date.getUTCSeconds());
        const time = hour+":"+minute;

        setCurrenttime(time)
        setCurrentdate(fdate)
        console.log(time)
        
    };

    function datevalidate(){
        if(inputstime==currenttime){
            if (window.confirm("Press a button!")) {
                setMatchingdate(`${inputstodo} is Done`)
                stopremind()
            } else {
                setMatchingdate("Snoozed For 10 Min")
                stopremind()
            }
        }
    }

    
    var timer;
    useEffect(
        ()=> {
             timer = setInterval(
                ()=> {
                    if(fulld===true){
                        datevalidate()
                        setDate()
                    }
                },1000
            )
            return ()=> clearInterval(timer)
        }
    )

    const stopremind=()=>{
        setfulld(false)  
        clearInterval(timer)
    }

    const snoozz=()=>{
        setSnooz(1)
        if(fulld===false){
            timer()
            setfulld(true)
        }
    }

  return(
  <>
    <div>
        <div className="home_heading">
            <h1>Welcome Back !</h1>
            <h1>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>
        </div>

        <div className="inputs">
            <p>Set Tasks :</p>
            <input type="text" className="textInput" onChange={getTodo}/>
        </div>
        <div className="inputs">
            <p>Date for Set Reminder :</p>
            <input type="date" min={moment().format('YYYY-MM-DD')}  className="date-input" onChange={getDates}/>
        </div>

        <div className="inputs">
            <p>Time for Set Reminder :</p>
            <input type="time" onChange={getTimes}/>
        </div>

        <button className='buttonHome Datesubmitbtn' onClick={addReminder}>Date Submit</button><br/>

        <div className="todo">
            <h1 className="remind">Reminders : </h1> 
            <h2 style={{color: "#293462"}}>{inputstodo}</h2>
            <h3>{`${inputsdate}  ${inputstime}`} </h3>
            <h2 style={{color: "green"}}>{matchingdate}</h2>
        </div>

        {/* <button className='buttonHome' onClick={stopremind}>Stop</button><br/> */}
        {/* <button className='buttonHome' onClick={snoozz}>Snooz For 10 Min</button> */}

        <div className='product_list'>
      
        {/* {todoss.map((elem) => {
            return (
              <div className='dd'>
                <h2>{elem.todo}</h2>
                <h4>{fulldates}</h4>
              </div>
            )
        })} */}
      </div>
    </div>
      </>);
};

export default Home;






// useEffect( () => {
    // const setDate = ()=>{

    //     function addZero(i) {
    //         if (i < 10) {i = "0" + i}
    //         return i;
    //       }
    
    //     const date = new Date();

    //     const date1 = addZero(date.getDate());
    //     const month2 = addZero(date.getMonth()+1);
    //     const year3 = addZero(date.getFullYear());
    //     const fdate = `${year3}-${month2}-${date1}`;

    //     const hour = addZero(date.getHours());
    //     const minute = addZero(date.getMinutes());
    //     const sec = addZero(date.getMinutes());
    //     const time = hour+":"+minute;

    //     setCurrenttime(time)
    //     setCurrentdate(fdate)
        
    // };
    // setDate()
    // },[])