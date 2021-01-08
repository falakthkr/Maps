import {
    GET_LOCATION_FAILURE,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_REQUEST,
    GET_SEARCH_FAILURE,
    GET_SEARCH_SUCCESS,
    GET_SEARCH_REQUEST,
    GET_API_SUCCESS,
    GET_API_FAILURE,
    GET_API_REQUEST
} from "./actionTypes"

export const initState = {
    isLoading : false,
    isError : false,
    data : [],
    lat : "",
    long : ""
}

const reducer = (state = initState,{type,payload}) => {
    switch(type){
        case GET_LOCATION_REQUEST:
            return{
                ...state,
                isLoading : true
            }
        case GET_LOCATION_FAILURE:
            return{
                ...state,
                isLoading : false,
                isError : true
            }
        case GET_LOCATION_SUCCESS:
            console.log(payload)
            return{
                ...state,
                isLoading : false,
                isError : false,
                lat : payload.lat,
                long : payload.lng
            }
        case GET_SEARCH_FAILURE:
            return{
                ...state,
                isError : true,
                isLoading : false
            }
        case GET_SEARCH_REQUEST:
            return{
                ...state,
                isError : false,
                isLoading : true
            }
        case GET_SEARCH_SUCCESS:
            console.log(payload)
            return{
                ...state,
                isError : false,
                isLoading : false,
                data : payload
            }
        case GET_API_SUCCESS:
            console.log(payload)
            return{
                ...state,
                isError : false,
                isLoading : false,
                data : payload
            }
        case GET_API_REQUEST:
            return{
                ...state,
                isError : false,
                isLoading : true
            }
        case GET_API_FAILURE:
            return{
                ...state,
                isError : true,
                isLoading : false
            }
        default:
            return state
    }
}

export default reducer