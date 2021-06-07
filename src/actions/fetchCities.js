import { 
    getCitiesPending,
    getCitiesSuccess,
    getCitiesError } from "./index"

import * as constants from "../Utils/SharedConstants"

function fetchCities(queryValue){
    return dispatch =>{
        // dispatch status pending
        dispatch(getCitiesPending());
        let url;

        // for intial state
        if(queryValue.length <= 0)
        {
            url = `${constants.API_URL}/popular/5`;
        }
        else if(queryValue.length > 4)
        {
            url = `${constants.API_URL}/popular/from/${queryValue}/5`;
        }
        else{
            url = `${constants.API_URL}/autocomplete/?q=${queryValue}`;
        }
        // fetch api call to get cities
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.error)
            {
                throw(res.error);
            }
            dispatch(getCitiesSuccess(res));
            return res;
        })
        .catch(error =>{
            dispatch(getCitiesError(error));
        })
    }
}

export default fetchCities;