import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Container } from 'native-base';

import MapContainer from './MapContainer';

class Home extends Component {

    componentDidMount(){
        this.props.setName();
    }

    render(){
        const region = {
            latitude: 4.210484,
            longitude: 101.975769,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }
        return(
            <Container style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <MapContainer region={region}/>
            </Container>
        )
    }
}

export default Home;