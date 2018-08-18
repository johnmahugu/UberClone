import update from 'react-addons-update';
import constants from './actionConstants';
import { Dimensions } from 'react-native';

const { GET_CURRENT_LOCATION } = constants;

const { width, height } = Dimensions.get("window");

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO = LATITUDE_DELTA

const ASPECT_RATIO = width / height;

export function getCurrentLocation(){
    return(dispatch)=> {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch({
                    type:GET_CURRENT_LOCATION,
                    payload:position
                });
            },
            (error) => console.log(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }
}

function handleGetCurrentLocation(state, action){
    return update(state, {
        region: {
            latitude: {
                $set: action.payload.coords.latitude
            },
            logintude: {
                $set: action.payload.coords.longitude
            },
            latitudeDelta: {
                $set: LATITUDE_DELTA
            },
            longitudeDelta: {
                $set: LONGITUDE_DELTA
            }
        }
    })
}

const ACTION_HANDLER = {
    GET_CURRENT_LOCATION: handleGetCurrentLocation
}

const initialState = {
    region: {}
}

export function HomeReducer(state=initialState, action){
    const handler = ACTION_HANDLER[action.type];

    return handler ? handler(state, action) : state;
}