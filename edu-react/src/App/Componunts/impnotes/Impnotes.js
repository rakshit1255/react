import React from "react";
import './Impnotes.js'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { impnote } from '../../actions/index'

const Impnotes = () => {

    const [formValues, setFormValues] = useState({});
    const dispatch= useDispatch()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const loginValidation = (event) => {
        // console.log(event)
        dispatch(impnote(event))
    };


    return (<>

        <div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="text" className="form-control" id="exampleInputEmail1" name="subject" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label" >Password</label>
                <input type="text" className="form-control" name="desc" id="exampleInputPassword1" onChange={handleChange} />
            </div>

            <button type="button" className="btn btn-primary" onClick={()=>loginValidation(formValues)}>Submit</button>
        </div>

    </>);
};

export default Impnotes;
