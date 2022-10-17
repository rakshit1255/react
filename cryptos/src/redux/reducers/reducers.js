const initialState = {
    cartItems: [],
    userProfile: {},
    getuserData: {},
    postsdata: [],
    acBlc:0,
    bitBlc:0,
    authLog:false
}



export const userdataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "postLoginData":
            return {
            ...state,
            postsdata: [
                ...state.postsdata,action.payload
            ]
        }
        
        case "userProfile":
            localStorage.clear();
            localStorage.removeItem("userInfo");
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
            return {
                ...state,
                userProfile: action.payload
            }
        case "getuserData":
            return {
                ...state,
                acBlc: action.payload.accountbalance,
                bitBlc: action.payload.bitcoinbalance,
                getuserData:action.payload
            }
        case "authLog":
            localStorage.setItem("auth", true);
            return {
                ...state,
                authLog: action.payload
            }
        

        default: return state

    }

};


const userInfo = JSON.parse(localStorage.getItem('userInfo'))

export const getuserProfile = (state = userInfo, action) => {
    switch (action.type) {
        case "getuserProfile":
            console.log(userInfo, 'in slice')
            return {
                ...state,
                getuserProfile:state
            }

        default: return state

    }

};