import axios from 'axios'

export const impnote = (item) => {
    return {
        type: 'AAA',
        payload: item
    }
}

export const authLog = (item) => {
    return {
        type: 'AUTH',
        payload: item
    }
}


export const getAllData = () => async (dispatch, getState) => {
    const res = await axios.get('http://localhost:5000/student')
    dispatch({ type: 'API', payload: res.data })
}



export const postAllData = (data) =>  async (dispatch, getState) => {

    if(data.role === "teacher"){
        const res = await axios.post('http://localhost:5000/usar',data)
    }
    if(data.role === "student"){
        const res = await axios.post('http://localhost:5000/student',data)
    }
    dispatch({ type: 'APIPOST', payload: data})
}


