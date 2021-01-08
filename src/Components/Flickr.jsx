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

    handleChange = (e) => {
        const{name,value} = e.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {search} = this.state
        this.props.getSearch(search)
        this.props.getLocation(search)
    }

    render(){
        const {data,lat,long} = this.props
        console.log(lat,long)
        return(
           <div align="center">
               <input placeholder="Search..." value={this.state.search} name="search" onChange={this.handleChange} style={{margin:"2px",width:"70%"}} />
               <button onClick={this.handleSubmit}>Search</button>
                <div>
                    <h2>Explore the world!</h2>
                    {data.map((item)=>{
                        return (
                            <div>
                                <h4>{item.title}</h4>
                                <img alt={item.description} width="100%" height="250px" src={item.media.m} />
                            </div>
                        )
                    })}
                </div>
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