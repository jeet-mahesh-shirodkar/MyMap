import React from 'react';
import {Map ,TileLayer} from 'react-leaflet';
import './Mymap.css';
// import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


export default class Mumbai extends React.Component{
    render(){
        let Data={
            lat :19.07283,
            lng :72.88261
        }
        
        return(
            <React.Fragment>
            <Map  
              center={Data}
              zoom={12}
              >
            <TileLayer
            attribution='<a href="http://osm.org/copyright"></a>'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            </Map>
            </React.Fragment> 
            );
    }
}