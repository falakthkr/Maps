import React from "react"
import {connect} from "react-redux"
import { getApi, getLocation, getSearch } from "../Redux/action";

class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search : ""
        }
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

   handleKey = (e) => {
        if (e.key === "Enter") {
            const {search} = this.state
            this.props.getSearch(search)
            this.props.getLocation(search)
        }
    }
    render(){
        return(
            <div class="shadow p-2 bg-danger text-light" align="center">
                <input placeholder="Search..." value={this.state.search} onKeyDown={(e)=>this.handleKey(e)} name="search" onChange={this.handleChange} style={{margin:"2px",width:"70%"}} />
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
)(Navbar)