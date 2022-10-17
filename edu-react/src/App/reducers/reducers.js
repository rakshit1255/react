import React, { useEffect, useState } from 'react'
import Axios from "axios";

const initialState = {
    info: []
}


export const allStdData = (state = [], action) => {
    switch (action.type) {
        case 'API':
            return  action.payload
        case 'APIPOST':
            return  action.payload
        default: return state

    }
}




// const one = localStorage.setItem('auth');

export const auth = (state = false, action) => {
    switch (action.type) {
        case 'AUTH':
            state=action.payload
            localStorage.setItem('auth',action.payload);
            const ddd=localStorage.getItem('auth');
            console.log({ddd})
            return  state;
        default: return state

    }
}

export const stdReducers = (state = initialState, action) => {
    switch (action.type) {

        case "AAA":
            const newItems = action.payload
            return {
                ...state,
                info: [
                    ...state.info, newItems
                ]
            }
        default: return state

    }

};






// https://dummyjson.com/quotes
// const apiINIT = ["init"];

// export const apiDATA =  (state = apiINIT, action) => {
//     switch (action.type) {
//         case "API":
//              Axios.get("https://dummyjson.com/quotes")
//             .then((response) => {
//                 console.log(response.data.quotes,"apiDATA")
//                 return state = response.data.quotes
//               })
//               return state

//         default: return state

//     }

// };

export default stdReducers;