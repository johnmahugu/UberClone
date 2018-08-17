import update from 'react-addons-update';
import constants from './actionConstants';

const { SET_NAME } = constants;

export function setName(){
    return{
        type: SET_NAME,
        payload: "Eman"
    }
}

function handleState(state, action){
    return update(state, {
        name: {
            $set:action.payload
        }
    })
}

const ACTION_HANDLER = {
    SET_NAME:handleSetName
}

const initialState = {}

export function HomeReducer(state=initialState, action){
    const handler = ACTION_HANDLER[action.type];

    return handler ? handler(state, action) : state;
}