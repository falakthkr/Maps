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
import axios from "axios"
import {Client} from "@googlemaps/google-maps-services-js";



export const getLocationFailure = (payload) => ({
    type : GET_LOCATION_FAILURE,
    payload
})

export const getLocationSuccess = (payload) => ({
    type : GET_LOCATION_SUCCESS,
    payload
})

export const getLocationRequest = (payload) => ({
    type : GET_LOCATION_REQUEST,
    payload
})

export const getLocation = (payload) => dispatch => {
    console.log(payload)
    dispatch(getLocationRequest())
    const client = new Client({});
    return client.geocode({
        params: {
            address: payload,
            key: 'AIzaSyCEwtVJRfmemFx-GSVCFP4-QmW6wW2tEz0'
        }
    })
    .then(res=>(res.data))
    .then((res)=>dispatch(getLocationSuccess(res.results[0].geometry.location)))
    .catch(err=>dispatch(getLocationFailure(err)))
}

export const getSearchRequest = (payload) => ({
    type : GET_SEARCH_REQUEST,
    payload
})

export const getSearchFailure = (payload) => ({
    type : GET_SEARCH_FAILURE,
    payload
})

export const getSearchSuccess = (payload) => ({
    type : GET_SEARCH_SUCCESS,
    payload
})

export const getSearch = (payload) => dispatch => {
    console.log(payload)
    dispatch(getSearchRequest())
    return axios.get(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${payload}&format=json&nojsoncallback=true&`) 
    .then((res) => res.data)
    .then((res)=>dispatch(getSearchSuccess(res.items)))
    .catch(err=>dispatch(getSearchFailure(err)))
}

export const getApiRequest = (payload) => ({
    type : GET_API_REQUEST,
    payload
})

export const getApiFailure = (payload) => ({
    type : GET_API_FAILURE,
    payload
})

export const getApiSuccess = (payload) => ({
    type : GET_API_SUCCESS,
    payload
})

export const getApi = () => dispatch => {
    dispatch(getApiRequest())
    return axios.get("https://api.flickr.com/services/feeds/photos_public.gne?tags=rainbows&format=json&nojsoncallback=true&") 
    .then((res) => (res.data))
    .then((res)=>dispatch(getApiSuccess(res.items)))
    .catch(err=>dispatch(getApiFailure(err)))
}