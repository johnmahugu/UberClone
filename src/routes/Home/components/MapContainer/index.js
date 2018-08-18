import React from 'react';
import {ViewabilityConfig} from 'react-native';
import MapView from  'react-native-maps';
import styles from './MapContainerStyles';

export const MapContainer = ({region}) => {
    return (
        <View style={styles.container}>
            <MapView 
                provider={ MapView.PROVIDER_GOOGLE }
                style={styles.map}
                region={region}
            >
            </MapView>
        </View>
    )
}
