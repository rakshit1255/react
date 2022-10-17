import stdReducers, { allStdData,auth } from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    stdReducers,allStdData,auth
})

export default rootReducer








