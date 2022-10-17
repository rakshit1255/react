import axios from 'axios'


export const getuserData = (id) => async (dispatch, getState) => {
    const res = await axios.get(`http://localhost:5000/users/${id}`)
    dispatch({ type: 'getuserData', payload: res.data })
}


export const postLoginData = (signupdata) => async (dispatch, getState) => {
    const res = await axios.post('http://localhost:5000/users',signupdata)
    dispatch({ type: 'postLoginData', payload: res.data })
}

export const postAccountBlc = ({id,vall}) => async (dispatch, getState) => {
    const res = await axios({
        method: 'patch',
        url: `http://localhost:5000/users/${id}`,
        data: {
            accountbalance: Number(vall),
        }
    });
    dispatch({ type: 'getuserProfile', payload: Number(vall) })
}



export const postBitCoinBlc = ({id,vall2}) => async (dispatch, getState) => {
    const res = await axios({
        method: 'patch',
        url: `http://localhost:5000/users/${id}`,
        data: {
            bitcoinbalance: Number(vall2),
        }
    });
    dispatch({ type: 'getuserProfile', payload: Number(vall2) })
}



export const userProfile = (items) => {
    return {
        type: 'userProfile',
        payload: items
    }
}
export const getuserProfile = (items) => {
    return {
        type: 'getuserProfile',
        payload: items
    }
}
export const authLog = (items) => {
    return {
        type: 'authLog',
        payload: items
    }
}




















// export const getAllData = () => async (dispatch, getState) => {
//     const res = await axios.get('http://localhost:5000/student')
//     dispatch({ type: 'API', payload: res.data })
// }



// export const postAllData = (data) =>  async (dispatch, getState) => {

//     if(data.role === "teacher"){
//         const res = await axios.post('http://localhost:5000/usar',data)
//     }
//     if(data.role === "student"){
//         const res = await axios.post('http://localhost:5000/student',data)
//     }
//     dispatch({ type: 'APIPOST', payload: data})
// }


