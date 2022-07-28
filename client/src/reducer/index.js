const initialState = {
    results: []
}

function rootReducer(state=initialState, {type, payload}){
    switch(type){
        case 'GET_RESULTS':
            return{
                ...state,
                results: [...state.results, payload]
            }
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;