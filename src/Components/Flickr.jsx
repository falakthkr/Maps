import React from "react"
import {connect} from "react-redux"
import { getApi, getLocation, getSearch } from "../Redux/action";

class FlickrApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search : ""
        }
    }

    componentDidMount(){
        this.props.getApi()
    }

    render(){
        const {data,lat,long} = this.props
        console.log(lat,long)
        return(
           <div align="center">
               {data.slice(0,3).map((item)=>{
                   return (
                        <div>
                            <h4>{item.title}</h4>
                            <img alt={item.description} width="100%" height="200px" src={item.media.m} />
                        </div>
                    )     
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        isLoading : state.isLoading,
        isError : state.isError,
        data : state.data,
        lat : state.lat,
        long : state.long
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getLocation : a => dispatch(getLocation(a)),
        getApi : a => dispatch(getApi(a)),
        getSearch : a => dispatch(getSearch(a))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FlickrApp)