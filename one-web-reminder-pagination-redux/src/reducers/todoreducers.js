const initialState = {
    list : [],
}

const todoreducers = (state = initialState , action) => {
    switch (action.type) {
        case "ADD_TO_DO" :
            const {id,data} = action.payload
            if(data.length === 0) {
                alert("Please Enter To-Do")
            }else{
            return {
                ...state,
                list : [
                    ...state.list, action.payload
                    // {   
                    //     id: id,
                    //     data : data
                    // }
                ]
            }}

            case "DELETE_TO_DO" :
            
            const newList = state.list.filter((elem)=>elem.id !== action.id);

            return {
                ...state,
                list : newList
            }

    default : return state

  }

};

export default todoreducers;
