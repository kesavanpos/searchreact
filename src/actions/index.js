export const GetCitiesPending = "GET_CITIES_PENDING";
export const GetCitiesSuccess = "GET_CITIES_SUCCESS";
export const GetCitiesError = "GET_CITIES_ERROR";

export const getCitiesPending = () => {
    return{
        type : GetCitiesPending
    }
}

export const getCitiesSuccess= (cities) => {    
    return{
        type: GetCitiesSuccess,
        payload: cities
    }
}

export const getCitiesError = (error) =>{
    return{
        type: GetCitiesError,
        payload: error
    }
}