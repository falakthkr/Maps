import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import {connect} from "react-redux"
import compose from 'recompose/compose'
import { getApi, getLocation, getSearch } from "../Redux/action";

const mapStyles = {
  width: '100%',
  height: '100%',
};

const containerStyle = {
  position: 'absolute',  
  width: '75%',
  height: '100%'
}

class GoogleMap extends Component {
    render() {
    return (
        <Map 
          containerStyle={containerStyle}
          google={this.props.google}
          zoom = {2}
          style={mapStyles}
          initialCenter={{ lat: 40.4637, lng: 3.7492}}
        >
          <Marker onChange={this.handleChange} position={{ lat:this.props.lat, lng: this.props.long}} />
        </Map>
    );
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

const enhance = compose(
  connect(mapStateToProps,mapDispatchToProps),
  GoogleApiWrapper({
      apiKey: 'AIzaSyCEwtVJRfmemFx-GSVCFP4-QmW6wW2tEz0',
  }),
)

export default enhance(GoogleMap)
