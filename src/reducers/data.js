import { 
    GetCitiesPending,
    GetCitiesSuccess,
    GetCitiesError
    } 
    from "../actions/index";

const initialState = {
    pending:false,
    cities: [],
    error:null
}

function cityReducer(state = initialState, action) {
    switch(action.type)
    {
        case GetCitiesPending:            
            return {
                ...state,
                pending:true
            }
        case GetCitiesSuccess:            
            return{
                ...state,
                cities: action.payload,
                pending:false
            }
        case GetCitiesError:            
            return{
                ...state,
                pending:false,
                error: action.payload
            }
        default:            
            return state
    }
}

export const CitiesSuccess = state =>{        
   return{ 
       cities: state.cityReducer.cities
    }
}
export const CitiesPending = state => {
    return{
        pending: state.cityReducer.pending
    }
}
export const CitiesError = state =>{
    return{
        error : state.cityReducer.error
    }
} 

export default cityReducer;